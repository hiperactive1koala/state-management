import { useDispatch, useSelector } from "react-redux"
import { voteOf } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

// eslint-disable-next-line react/prop-types
const Anecdote = ({ content, votes, handleClick}) => {
    return (
        <div >
            <div>
                {content}
            </div>
            <div>
                has {votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const anecdotes = useSelector(({anecdotes, filter}) => {
        if (filter === '') {
            return anecdotes
        }
        return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    })
    const sortedAnecdotes = [...anecdotes].sort((a,b) => b.votes - a.votes)
    const dispatch = useDispatch()

    const vote = async (anecdote) => {
      dispatch(voteOf(anecdote))
      dispatch(setNotification(`you voted '${anecdote.content}'`, 3))
    }
    return(
        <>
            {sortedAnecdotes.map(anecdote =>
            <Anecdote 
                key={anecdote.id}
                content={anecdote.content}
                votes={anecdote.votes}
                handleClick={() => vote(anecdote)}
            />
            )}
        </>
    )
}

export default AnecdoteList