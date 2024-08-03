import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAll } from "./requests";
import Anecdote from "./components/Anecdote";

const App = () => {

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAll,
    retry: 1,
    refetchOnWindowFocus: false
  })

  const anecdotes = result.data

  if (result.isPending) {
    return <div>loading...</div>
  }
  if (result.isError || anecdotes === undefined) {
    return <div>anecdote service not available due to problems in server</div>
  }
  
  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id}
          anecdote={anecdote}
        />
      )}
    </div>
  )
}

export default App


// {anecdotes.map(anecdote =>
//   <div key={anecdote.id}>
//     <div>
//       {anecdote.content}
//     </div>
//     <div>
//       has {anecdote.votes}
//       <button onClick={() => handleVote(anecdote)}>vote</button>
//     </div>
//   </div>
// )}