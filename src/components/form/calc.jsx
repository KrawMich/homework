import { useState } from "react"
import Button from "../button/button";
import { TEXTS } from "../../utils/translations";

const Form = () => {
    const [inputNumber1, setInputNumber1] = useState('0');
    const [inputNumber2, setInputNumber2] = useState('0');
    
    const addition = (event) => {
        event.preventDefault();
        console.log(`${inputNumber1} + ${inputNumber2} = ${parseInt(inputNumber1) + parseInt(inputNumber2)}`) 
        setInputNumber1('')
        setInputNumber2('')
    }

    return(
        <div>
            <form onSubmit={addition}>
                <label>Liczba 1:
                    <input type="number"
                    value={inputNumber1}
                    onChange={(event) => setInputNumber1(event.target.value)} />
                </label>
                <label>Liczba 2:
                    <input type="number"
                    value={inputNumber2}
                    onChange={(event) => setInputNumber2(event.target.value)} />
                </label>
                <Button text={TEXTS.calc.button.sum}/>
            </form>
    </div>
    )
}

export default Form;