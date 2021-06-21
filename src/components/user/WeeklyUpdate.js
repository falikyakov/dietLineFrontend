import React, { useState, useEffect } from 'react';

const WeeklyUpdate = () => {

    const [newWeight, setNewWeight] = useState();
    const changeNewWeight = (e) => {
        setNewWeight(e.target.value);
    }


    return (
        <div style={{ backgroundColor: "whitesmoke" }}>
            {newWeight}
            <center><h1 className="display-6">Weekly Update</h1></center>
            <br />
            New weight: &nbsp; <input type="number" onInput={changeNewWeight} />
        </div>
    )
}

export default WeeklyUpdate;
