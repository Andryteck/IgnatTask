import React, {useState} from 'react';
import './App.css';
import Dialog from './Components/Dialog';
import Todo from './Components/Todo/Todo';
import Counter from "./Components/Counter/Counter";

function App() {
    return (
        <div className="App">
            <Dialog />
            <Todo />
            <Counter/>
        </div>
    );
}


export default App;
