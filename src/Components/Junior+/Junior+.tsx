import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import s from '../PreJunior/PreJunior.module.css'
import {Range} from '../common/Range'

function JuniorPlus() {
    const [value, setValue] = useState<number>(0)
    const maxValue = 50
    const minValue = 0

    const onChange = (e: any) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div className={s.item}>
            <Range onChange={onChange} value={value} maxValue={maxValue} minValue={minValue}/>
        </div>
    )
}

export default JuniorPlus