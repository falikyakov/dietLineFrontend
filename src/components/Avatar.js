import React, { Component } from 'react';

function Avatar(props) {


    return (
        <div >
            <img className="avatar" style={{ width: "40px", height: "40px", borderRadius: "50%" }} src={props.img} alt="image" />
        </div>
    );
}

export default Avatar;