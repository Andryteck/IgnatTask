import React, {createRef, useState, ChangeEvent} from 'react';
import Span from './Span/Span';
import ButtonNya from './Button/ButtonNya';
import InputNya from './Input/InputNya';

const Counter = () => {

    let [value, setValue] = useState('')

    // let [count, setCount] = useState(0)
    //
    // const counter = () => {
    //     setCount(count + 1)
    // }

    const onClickHandler = (e:any) => {
        if (value != '') {
            alert(value)
            setValue(value = '')
        }

    }
    const onKeyPressHandler = (e:any) => {
    if (e.charCode === 13 && value != '')  {
        alert(value)
    }
    }
    const onTextChange = (e:any) => {
        setValue(e.target.value)
    }

    return (
        <div className={'counterWrapper'}>
            <Span/>
            <InputNya />
            <ButtonNya
            />
        </div>
    )
}

export default Counter