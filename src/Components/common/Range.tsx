import * as React from 'react'
import s from './Range.module.css'

type PropsType = {
    minValue: number
    maxValue: number
    value: number
    onChange: (e: any) => void

}

export const Range = React.memo((props: PropsType) => {
    return (
        <div className={s.wrapper}>
            <input type="range"
                   value={props.value}
                   min={props.minValue}
                   max={props.maxValue}
                   step="1"
                   onChange={props.onChange}
                   className={s.inputRange}
                   />
            <span className={s.RangeValue}>{props.value}</span>
        </div>
    )
})

