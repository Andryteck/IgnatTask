import React, {useState} from "react";
import s from "../Counter/Input/InputNya.module.css";
import InputNya, {InputNyaPropsType} from "../Counter/Input/InputNya";

type PropsType = {}

function EditableSpan(props: PropsType) {
    let [editMode, setEditMode] = useState(false);

    function onEnter() {
        alert('hello')
    }
function activatedEditMode() {
    setEditMode(true)
}
    const activateViewMode = () => {
        setEditMode(false);
        // props.onChange(title);
    }
    return (
        <>
            {editMode
                ? <InputNya activateViewMode={activateViewMode} onEnter={onEnter}/>
                : <span onDoubleClick={activatedEditMode}>Test</span>
            }
        </>
    );
};

export default EditableSpan