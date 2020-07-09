import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from '../Junior/Junior.module.css'
import EditableSpan from "../ EditableSpan/ EditableSpan";
import Select from "../Select/Select";
import Radio from "../Radio/Radio";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store";
import {checkAC, downAC, upAC} from "../../reducers/ homeWorkReducer/ homeWorkReducer";
import {Fade, Tooltip} from "@material-ui/core";


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
    let now = new Date()
    const [timerId, setTimerId] = useState<any>(0);
    const [date, setDate] = useState<Date>(now)
    const [editMode, setEditMode] = useState<boolean>(false)

    const [value, setValue] = useState<string>('value')
    const peoples = useSelector<AppRootStateType, Array<{ id: string, name: string, age: number }>>(state => state.peoples)
    let dispatch = useDispatch()

    let select = [1, 2, 3, 4, 5]
    let name = 'name'
    const getDate = date.getDate()


    const updateTime = () => {
        clearInterval(timerId); // останавливает предыдущий таймер
        const timer_id = setInterval(() => setDate(new Date()), 1000);
        setTimerId(timer_id);
    }
    const resetTime = () => clearInterval(timerId)

    function onChange() {

    }

    function upSort() {
        dispatch(upAC())
    }

    function downSort() {
        dispatch(downAC())
    }

    function checkSort() {
        dispatch(checkAC())
    }

    function onOver() {


    }


    return (
        <div className={s.item}>
            <EditableSpan/>
            <Select select={select} value={value} onChange={onChange}/>
            <Radio name={name} select={select} value={value} onChange={onChange}/>
            <div className={s.peoples}>
                {peoples.map(p => <span className={s.peoplesItem} key={p.id}>{p.name}</span>)}
                <div className={s.btns}>
                    <button className={s.btn} onClick={upSort}>UP</button>
                    <button className={s.btn} onClick={downSort}>DOWN</button>
                    <button className={s.btn} onClick={checkSort}>CHECK</button>
                </div>
            </div>
            <div>
                <div>
                    <span className={s.dateItem}>{date.getHours()}: {date.getMinutes()}: {date.getSeconds()}
                     <span className={s.dateItemTooltip}>{date.getDate()}. 0{date.getMonth()}. {date.getFullYear()}</span>
                    </span>
                </div>
                <button onClick={updateTime}>Update Time</button>
                <button onClick={resetTime}>Reset Time</button>
            </div>
        </div>
    )
}

export default Junior