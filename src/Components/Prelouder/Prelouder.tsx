import React from "react";
import preLouder from "../../photo/PreLouder.svg";

type PropsType = {}

export function PreLoader(props: PropsType) {
    return (
        <>
            <img src={preLouder}/>
        </>
    )
}

export default PreLoader