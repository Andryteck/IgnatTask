import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Junior/Junior.module.css'
import EditableSpan from "../ EditableSpan/ EditableSpan";
import Select from "../Select/Select";
import Radio from "../Radio/Radio";

// type StateType = {
//     x: string
//     y: number
// }
//
// export function saveState<T> (key: string, state: T) {
//     const stateAsString = JSON.stringify(state);
//     localStorage.setItem(key, stateAsString)
// }
//
// export function restoreState<T>(key: string, defaultState: T) {
//     const stateAsString = localStorage.getItem(key);
//     if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
//     return defaultState;
// }
//
//
// saveState<StateType>("test", {x: "A", y: 1});
// const state: StateType = restoreState<StateType>("test", {x: "", y: 0);

function Junior() {
    let select = [1, 2, 3, 4, 5]
    let value = 'value'
    let name = 'name'
    function onChange() {

    }
    return (
        <div className={s.item}>
            <EditableSpan/>
            <Select select={select} value={value} onChange={onChange}/>
            <Radio name={name} select={select} value={value} onChange={onChange}/>
        </div>
    )
}

export default Junior