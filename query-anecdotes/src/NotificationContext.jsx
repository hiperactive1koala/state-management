/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const notificationReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_ANECDOTE':
            return `anecdote '${action.payload.content}' created`
        case 'VOTE_ANECDOTE':
            return `anecdote '${action.payload.content}' voted`
        case 'CREATE_ERROR':
            return action.payload
        default:
            return ''
    }
}

const NotificationContext = createContext('')

export const useNotificationValue = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[0]
}
export const useNotificationDispatch = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[1]
}

export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, '')
    return (
        <NotificationContext.Provider value={[notification, notificationDispatch]} >
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext