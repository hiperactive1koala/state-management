/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateAnecdote } from "../requests"
import { useNotificationDispatch } from "../NotificationContext"

const Anecdote = ({ anecdote }) => {
    const queryClient = useQueryClient()
    const notificationDispatch = useNotificationDispatch()
    const updateAnecdoteMutation = useMutation({
        mutationFn: updateAnecdote,
        onSuccess : () => {
          queryClient.invalidateQueries('anecdotes')
        }
    })
    const handleVote = (anecdote) => {
        const updatedAnecdote = {...anecdote, votes: anecdote.votes + 1}
        updateAnecdoteMutation.mutate(updatedAnecdote)
        notificationDispatch({ type: 'VOTE_ANECDOTE', payload: updatedAnecdote })
    }
    return(
        <div>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
    )
}

export default Anecdote