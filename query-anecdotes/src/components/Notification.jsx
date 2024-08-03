import { useEffect } from "react"
import { useNotificationDispatch, useNotificationValue } from "../NotificationContext"

const Notification = () => {
  const notification = useNotificationValue()
  const notificationDispatch = useNotificationDispatch()
  // useEffect(() => {
  //   setTimeout(() => {
  //     notificationDispatch({ type: null})
  //   }, 5000);
  // }, [notification])
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (notification === '') return null

  else{   
    setTimeout(() => {
      notificationDispatch({ type: null})
    }, 5000);
    
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
}

export default Notification
