import React from "react";

type PropsType = {
    select:Array<number>
    value: string
    onChange: (e:any) => void
}

function Select(props:PropsType) {
    return (
        <select name="select">
            {props.select.map(s => {
                return  <option value="item">{props.value}</option>
            })}

        </select>
    )
}

export default Select