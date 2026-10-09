import '../ui/MyCounterStyle.css'
import useMyCounterApp from '../hook/useMyCounterApp'



export const MyCounterApp = () => {
    
    const {counter,handleAdd,handleSubtract,handleReset} = useMyCounterApp();

  return (
    <>
        <h1>counter: {counter}</h1>
        <div className='cajita'>
            <button
                className='btnNumberAdd'
                onClick={handleAdd}
            >+1</button>
            <button
                className='btnNumberSubtract'
                onClick={handleSubtract}
            >-1</button>
            <button
                className='btnReset'
                onClick={handleReset}
            >Reset</button>
        </div>
    </>
  )
}

export default MyCounterApp
