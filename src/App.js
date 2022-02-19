import Counter from './components/Counter'
import React from 'react'

export default function App(props) {
  {
    console.log(props)
         
    const [counterIsShown, setCounterIsShown] = React.useState(true)
    const toggleCounter = () => {
           setCounterIsShown(prevCounterIsShown => (!prevCounterIsShown))}
        
    return (
    <div className="container p-5 my-3 bg-light border ">
       <div class="text-center">
        <button className="toggle btn btn-primary mb-5 btn-lg" onClick= {toggleCounter}>{ counterIsShown ? "Hide Counter":"Show Counter"}</button>
        {counterIsShown && <Counter/>}
        </div>
    </div>
  )
    }
  
}


