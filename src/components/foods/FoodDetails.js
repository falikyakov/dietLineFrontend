import React, { useEffect, useState } from 'react'

const FoodDetails = ({ match }) => {
    useEffect(() => {
        fetchInfo();
        console.log(match);
    }, [])

    const [item, setitem] = useState({});


    const fetchInfo = async () => {
        const details = await fetch(`https://api.nal.usda.gov/fdc/v1/food/${match.params.fdcid}?api_key=${process.env.REACT_APP_USDA_APP_KEY}`);
        const data = await details.json();
        setitem(data);
        console.log(data);
        console.log(item);
    }

    return (
        <div>
            <center>
                <table className="details-table" id="dbg">
                    <thead>
                        <tr>
                            <th>{item.description}</th>
                            <th>per 100gr.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item.foodNutrients &&
                            item.foodNutrients.map((fn, index) => {
                                if (fn.amount) {
                                    return <tr key={index}>
                                        <td>{fn.nutrient.name}</td>
                                        <td>{fn.amount + fn.nutrient.unitName}</td>
                                    </tr>
                                }
                            })}

                    </tbody>
                </table>
            </center>
        </div>


    )
}

export default FoodDetails;
