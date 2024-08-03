import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdote'
const initialState = []
const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers :{
    vote(state, action){
      return state.map(anecdote => anecdote.id !== action.payload.id 
        ? anecdote
        : action.payload
      )
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdote(state, action) {
      return action.payload
    }
  }
})

export const { appendAnecdote, setAnecdote, vote } = anecdotesSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdote(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteOf = anecdote => {
  return async dispatch => {
    const changedAnecdote = await anecdoteService.updateAnecdote(anecdote)
    dispatch(vote(changedAnecdote))
  }
}

export default anecdotesSlice.reducer