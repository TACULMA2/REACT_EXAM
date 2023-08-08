import React, { createContext, useContext, useState } from 'react';

const InputContext = createContext();

export function useInputContext() {
    return useContext(InputContext);
}

export function InputProvider({ children }) {
    const [inputList, setInputList] = useState([]);

    const addInput = (input) => {
        setInputList([...inputList, input]);
    };

    return (
        <InputContext.Provider value={{ inputList, addInput }}>
            {children}
        </InputContext.Provider>
    );
}