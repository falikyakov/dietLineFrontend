import React, { useEffect, useState } from 'react'

const UserDetails = () => {

    useEffect(() => {
        fetchUser();
    }, [])

    const [details, setDetails] = useState({});

    const fetchUser = async () => {
        const details = await fetch(`https://api.nal.usda.gov/fdc/v1/food/${match.params.fdcid}?api_key=${process.env.REACT_APP_USDA_APP_KEY}`);
        const data = await details.json();
        setitem(data);
        console.log(data);
        console.log(item);
    }

    return (
        <div>

        </div>
    )
}

export default UserDetails;
