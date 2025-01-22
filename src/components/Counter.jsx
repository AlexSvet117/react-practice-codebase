import { useState } from "react"

function Counter() {
  // declare count
  const [count, setCount] = useState(0); // returns array with variable, setterFunction
  
  // define the event handlers
  const handleIncrement = () => {
    setCount(count + 1)
    console.log(`The count increment by one, currently is: ${count}`)
  }

  const handleDicrement= () => {
    setCount(count - 1)
    console.log(`The count increment by one, currently is: ${count}`)
  }


  return (
    <div className="container d-flex justify-content-center">
        <div className='col-4'>
            <div className="card" data-bs-theme="dark">
                <h2 className="display-1 card-title text-center">{count}</h2>
            </div>
            <div class="btn-group mt-3 w-100" role="group" aria-label="Basic example">
                <button onClick={handleIncrement} type="button" className="btn btn-primary">Left</button>
                <button onClick={handleDicrement} type="button" className="btn btn-danger">Middle</button>
                
            </div>
        </div>
        
      
    </div>
  )
}

export default Counter
