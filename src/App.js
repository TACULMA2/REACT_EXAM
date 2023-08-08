import React from 'react';
import Hello from './Hello';
import Cars from './Cars';
import { InputProvider } from './InputContext';

function App() {
    return (
        <InputProvider>
            <div>
                <Hello />
                <Cars />
            </div>
        </InputProvider>
    );
}

export default App;