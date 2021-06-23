import React, { useState } from 'react';
import axios from 'axios';



const UpdateWeight = (props) => {

    return (
        <div className="updateWeight-form">
            <form>
                <h4 className="modal-title">Enter new weight</h4><br />
                <div className="form-group">
                    <input type="number" className="updateWeight-control" placeholder="New Weight" required="required" onChange={props.onChange} />
                </div>
                <input type="submit" className="btn btn-primary" value="Submit" onClick={props.onSubmit} />
            </form>
        </div>
    )
}

export default UpdateWeight
