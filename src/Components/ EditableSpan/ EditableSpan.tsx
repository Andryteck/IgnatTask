import React, {useState} from "react";
import s from "../Counter/Input/InputNya.module.css";
import InputNya, {InputNyaPropsType} from "../Counter/Input/InputNya";

type PropsType = {}

function EditableSpan(props: PropsType) {
    let [editMode, setEditMode] = useState(false);

    function onEnter() {

    }
function activatedEditMode() {
    setEditMode(true)
}
function deactivateViewMode() {
    setEditMode(false)
}

    return (
        <>
            {editMode
                ? <InputNya deactivateViewMode={deactivateViewMode} onEnter={onEnter}/>
                : <span onDoubleClick={activatedEditMode}>Test</span>
            }
        </>
    );
};

export default EditableSpan