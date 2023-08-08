import React, { useState } from 'react';
import { useInputContext } from './InputContext';

function Hello() {
    const { addInput } = useInputContext();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddInput = () => {
        addInput(inputValue);
        setInputValue('');
    };

    return (
        <div>
            <p>Enter your name: {inputValue}</p>
            <input type="text" value={inputValue} onChange={handleInputChange} /> <button onClick={handleAddInput}>Submit</button>
        </div>
    );
}

export default Hello;