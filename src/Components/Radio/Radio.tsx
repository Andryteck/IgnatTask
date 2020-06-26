import React from "react";

type PropsType = {
    name: string,
    select: Array<number>
    value: string
    onChange: () => void
}

function Radio(props: PropsType) {
    return (
        <>
            {props.select.map(s => {
                return <input type="radio" name={props.name} value={props.value} onChange={props.onChange}/>
            })}

        </>
    )
}

export default Radio