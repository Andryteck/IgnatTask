import React, {createRef, useState, ChangeEvent} from 'react';
import { v1 } from 'uuid';

type PropsType = {

}

const Span = (props:PropsType) => {
    let names = [{name: 'Andrei', id: v1()},{name: 'Andrei', id: v1()}]
    return (
        <div>
            <span className={'counterSpan'} >{names.length}</span>
        </div>
    )
}

export default Span