import React from 'react'

const DailyInsertInput = (props) => {
    return (
        <input type="number" id={props.id} style={{ width: "65px", float: "right" }} placeholder="gr/ml" onChange={props.func} onMouseLeave={ props.func2}/>    )
}

export default DailyInsertInput
