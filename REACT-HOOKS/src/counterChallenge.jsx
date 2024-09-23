import{useState} from "react";
const counterChallenge=()=>{
    const[count,setCount]=useState(0);
    const[step,setStep]=useState(0);
    const handleIncrement=()=>{
        return setCount(count+step);

    }
    const handleDecrement=()=>{
        return setCount(count-step);
    }
    const handleReset=()=>{
        setCount(0);
    }
    const handleInputChange=(e)=>{
        return setStep(Number(e.target.value));
    }
    return (
        <div className="container state-counter">
            <h1>useState challenge</h1>
            <p>
                Count:<span>0</span>
            </p>
            <div>
                <label>
                    Step:
                    <input type="number" value={step} onChange={handleInputChange}/>
                </label>
            </div>
            <div className="grid-three-cols">
                <button onClick={handleIncrement} disabled={count>=100}>Increment</button>
                <button onClick={handleDecrement} disabled={count<=0}>Decrement</button>
                <button onClick={handleReset} disabled>Reset</button>
            </div>
        </div>
    )
}
export default counterChallenge;