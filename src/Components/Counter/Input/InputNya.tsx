import React, {createRef, useState, ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react';
import s from '../Input/InputNya.module.css'

export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: (e:React.KeyboardEvent<HTMLInputElement>) => void, error?: string, activateViewMode?:() => void };

function InputNya(props: InputNyaPropsType) {
    const {onEnter, error, ...restProps} = props;

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode = 13) onEnter && onEnter(e);
    }

    return (
        <>
            <input className={s.inputNya} onKeyPress={onKeyPress}  onBlur={props.activateViewMode} {...restProps} type="text"/>
            {error ? <span>{error}</span> : null}
        </>
    );
};

export default InputNya