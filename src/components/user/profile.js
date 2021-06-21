import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Profile = ({ match }) => {

    useEffect(() => {
        getUser();
    }, [])

    const [user, setUser] = useState({});

    const getUser = async () => {
        const info = await axios.get(`https://blooming-harbor-45317.herokuapp.com/router/db/findOne/603ebbb1496d034d18df7ed5`);
        const data = info.data;
        setUser(data);
        //(data);
        console.log(data);
    }

    return (
        <div>
            <h1 className="display-6">Your Profile:</h1>
            <table className="styled-table" style={{marginLeft:"20px"}}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Height </th>
                        <th>Weight </th>
                        <th>BMI</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{user.FirstName}</th>
                        <th>{user.LastName}</th>
                        <th>age</th>
                        <th>{user.HeightCM}</th>
                        <th>{user.StartWeightKG}</th>
                        <th>{user.BMI}</th>
                        <th>{user.Email}</th>
                    </tr>
                </tbody>
                {/*
                    <tr className="active-row">
                        <td>Melissa</td>
                        <td>5150</td>
                    </tr>
                    </tbody>*/}
            </table>
        </div>
    )
}

export default Profile;
