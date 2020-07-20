import React from 'react';
import './App.css';
import Dialog from './Components/Dialog';
import Todo from './Components/Todo/Todo';
import Counter from "./Components/Counter/Counter";
import {HashRouter, Route} from "react-router-dom";
import JuniorPlus from "./Components/Junior+/Junior+";
import Junior from './Components/Junior/Junior';
import PreJunior from "./Components/PreJunior/PreJunior";
import NavBar from './Components/NavBar/NavBar';
import {AppRootStateType} from "./store";
import {useSelector} from 'react-redux';
import {LoadingType} from "./redux/reducers/loading-reducer/loading-reducer";
import PreLoader from "./Components/Prelouder/Prelouder";


// type PropsType = {
//     store: AppRootStateType
// }

function App() {
    let loading = useSelector<AppRootStateType, LoadingType>(state => state.loading.loading)
    if (loading) {
        return <PreLoader/>
    }
    return (

        <div className="App">
            <NavBar/>
            <Route path="/PreJunior" render={() => <PreJunior/>}/>
            <Route path="/Junior" render={() => <Junior/>}/>
            <Route path="/Junior+" render={() => <JuniorPlus/>}/>
            <Dialog/>
            <Todo/>
            <Counter/>
        </div>

    );
}


export default App