import React, {useState} from "react";

function Calculator(props) {
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [total, setTotal] = useState(0);

    const handleFirstNum = (evt) => {
        setFirstNum(evt.target.value);
    }

    const handleSecondNum = (evt) => {
        setSecondNum(evt.target.value);
    }

    const handleTotal = (evt, type) => {
        let _total = 0;
        switch(type) {
            case "plus":
                _total = parseInt(firstNum) + parseInt(secondNum);
                break;
            case "minus":
                _total = parseInt(firstNum) - parseInt(secondNum);
                break;
            case "multiple":
                _total = parseInt(firstNum) * parseInt(secondNum);
                break;
            case "divide":
                _total = parseInt(firstNum) / parseInt(secondNum);
                break;                         
        }
        setTotal(_total);
    }

    return(
        <React.Fragment>
            <div>
                <input type="number" value={firstNum} onChange={handleFirstNum}></input>
            </div>
            <div>
                <input type="number" value={secondNum} onChange={handleSecondNum}></input>
            </div>
            <div>Total: {total}</div>
            <div>
                <button onClick={(evt) => handleTotal(evt, "plus")}>+</button>
                <button onClick={(evt) => handleTotal(evt, "minus")}>-</button>
                <button onClick={(evt) => handleTotal(evt, "multiple")}>*</button>
                <button onClick={(evt) => handleTotal(evt, "divide")}>/</button>
            </div>
        </React.Fragment>
    );
}

export default Calculator;