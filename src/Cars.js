import React from 'react';
import { useInputContext } from './InputContext';

function Cars() {
    const { inputList } = useInputContext();

    return (
        <div>
            <h2>Who lives in my garage?</h2>
            <ul>
                {inputList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Cars;