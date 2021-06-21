import { useEffect, useState } from "react";


function App() {

  let [messageToast, setMessageToast] = useState(false)
  let [errorToast, setErrorToast] = useState(false)
  let [timer, setTimer] = useState(2000)
  let [hover, setHover] = useState(false)

  let hideToasts = () => {
    if (!hover) {
      setMessageToast(false)
      setErrorToast(false)
    }
  }

  useEffect(() => {
    let interval = setInterval(() => {
      if (!hover && timer > 0) {
        if (messageToast || errorToast) {
          setTimer(p => p - 500)
        }
      }
    else setTimer(2000)
    }, 500)
    return () => clearInterval(interval)
    // eslint-disable-next-line
  }, [hover, messageToast, errorToast])

  useEffect(() => {
    if (timer < 0) {
      hideToasts()
      setTimer(2000)
    }
    // eslint-disable-next-line
  }, [timer])

  return (
    <div className="App">
      <div className={messageToast ? 'message toast' : 'message toast hidden'} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Just a usual message</div>
      <div className={errorToast ? 'error toast' : 'error toast hidden'} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Error</div>
      <div className="buttons">
        <button onClick={() => {
            setTimer(2000)
            setMessageToast(true)
            setErrorToast(false)
        }}>Notification message</button>
        <button onClick={() => {
            setTimer(2000)
            setMessageToast(false)
            setErrorToast(true)
        }}>Notification alert</button>
      </div>
    </div>
  );
}

export default App;
