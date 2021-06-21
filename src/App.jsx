import { useEffect, useState } from "react";


function App() {

  let [messageToast, setMessageToast] = useState(false)
  let [errorToast, setErrorToast] = useState(false)
  let [hover, setHover] = useState(false)

  let hideToasts = () => {
      setMessageToast(false)
      setErrorToast(false)
  }

  useEffect(() => {
    if (!hover) {
      setTimeout(() => {
        hideToasts()
      }, 2000)
    }
  }, [hover])

  useEffect(() => {
    setTimeout(() => {
      if (!hover) {
        setHover(false)
      }
    }, 2000)
  }, [messageToast, errorToast])

  return (
    <div className="App">
      <div className={messageToast ? 'message toast' : 'message toast hidden'} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Just a usual message</div>
      <div className={errorToast ? 'error toast' : 'error toast hidden'}>Error</div>
      <div className="buttons">
        <button onClick={() => {
          if (!messageToast && !errorToast) {
            setMessageToast(true)
          }
        }}>Notification message</button>
        <button onClick={() => {
          if (!messageToast && !errorToast) {
            setErrorToast(true)
          }
        }}>Notification alert</button>
      </div>
    </div>
  );
}

export default App;
