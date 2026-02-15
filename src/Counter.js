import { useState } from "react"

function Counter()
{

    // var count = 0
       var[count,setCount] = useState(0)

    function increment()
    {
    //    a=a+1
          setCount(count++)
    }

    function decrement()
    {
    //    a=a-1
          setCount(count--)
    }

    return(
        <div>
            <h1> {count} </h1>
            <button onClick={increment} > Increment </button>
            <button onClick={decrement} > Decrement </button>
        </div>
    )
}

export default Counter