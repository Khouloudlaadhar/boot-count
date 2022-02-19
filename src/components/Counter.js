import React from 'react'

export default function Counter(props) {
  const [count, setCount] = React.useState(0)
  const [taps, setTaps] = React.useState(0)
  function handleIncrement() {
      setCount(prevCount => prevCount + 1)
      setTaps(prevTaps => prevTaps + 1)
  }

  function handleDecrement  () {
      if (count === 0) {
          setTaps(prevTaps => prevTaps + 1)
          return;
        }
        setCount(prevCount => prevCount - 1)
        setTaps(prevTaps => prevTaps + 1)

          
       }
  
  function handleResetCount() {
      setCount(0)
  }
  function handleResetAll() {
      setCount(0)
      setTaps(0)
  }

  return (
      
      
         <div >
              

              <div className="border-3 rounded bg-info p-5">
                <h1 className="text-dark">Counter</h1>
                <h2 className="text-light"> {count} </h2>
                <h4 className="text-muted">Total taps: {taps} </h4>
                  <div>
                    <button className="btn btn-outline-secondary rounded-pill me-2 text-dark mb-3 btn-lg" onClick={handleDecrement}>Decrement -</button>
                    <button className="btn btn-outline-secondary rounded-pill me-2 text-dark mb-3 btn-lg" onClick={handleIncrement}>Decrement +</button>
                 </div>
                 <div>
                    <button className=" btn btn-warning rounded-pill me-3 btn-lg " onClick={handleResetCount}>Reset Count</button>
                    <button className=" btn btn-danger rounded-pill me-3 btn-lg" onClick={handleResetAll}>Reset All</button>
                 </div>
               </div>
          </div>
          
  )
}