import { useState } from "react"

interface Props{
    initialNumber?: number;
}

export const useMyCounterApp = ({initialNumber = 10}:Props = {}) => {

    const [counter, setCount] = useState(initialNumber)

    
    const handleAdd = () =>{
        setCount(prevEv => prevEv + 1)
    }

    const handleSubtract = () =>{
        if(counter>1)
        setCount(prevEv => prevEv - 1)
    }
    
    const handleReset = () =>{
        setCount(initialNumber)
    }
  return {
    counter,
    handleAdd,
    handleSubtract,
    handleReset
  }
}

export default useMyCounterApp
