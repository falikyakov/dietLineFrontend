import React, { useState, useEffect } from 'react';
import axios from 'axios';
import foodList from '../foods/foodsComponentList';

const TestCal = () => {

    const [bMain, setBMain] = useState(1100621);
    const [bSide, setBSide] = useState(457126);
    const [bDrink, setBDrink] = useState(1100621);
    const [lMain, setLMain] = useState(457126);
    const [lSide, setLSide] = useState(457126);
    const [lDrink, setLDrink] = useState(457126);
    const [dMain, setDMain] = useState(457126);
    const [dSide, setDSide] = useState(457126);
    const [dDrink, setDDrink] = useState(457126);
    const [brkfsCal, setBrkfsCal] = useState(897);
    const [lunchCal, setLunchCal] = useState(1071);
    const [dinnerCal, setDinnerCal] = useState(1071);
    const totalCal = brkfsCal + lunchCal + dinnerCal;

    const changeBMain = async (e) => {
        setBMain(e.target.value);
    }
    const changeBSide = (e) => {
        setBSide(e.target.value);
    }
    const changeBDrink = (e) => {
        setBDrink(e.target.value);
    }
    const changeLMain = (e) => {
        setLMain(e.target.value);
    }
    const changeLSide = (e) => {
        setLSide(e.target.value);
    }
    const changeLDrink = (e) => {
        setLDrink(e.target.value);
    }
    const changeDMain = (e) => {
        setDMain(e.target.value);
    }
    const changeDSide = (e) => {
        setDSide(e.target.value);
    }
    const changeDDrink = (e) => {
        setDDrink(e.target.value);
    }


    const getBCalories = () => {

        let b1;
        let b2;
        let b3;
        let bTotal;

        console.log(bMain);
        axios.all([
            axios.get(`https://api.nal.usda.gov/fdc/v1/food/${bMain}?api_key=${process.env.REACT_APP_USDA_APP_KEY}`),
            axios.get(`https://api.nal.usda.gov/fdc/v1/food/${bSide}?api_key=${process.env.REACT_APP_USDA_APP_KEY}`),
            axios.get(`https://api.nal.usda.gov/fdc/v1/food/${bDrink}?api_key=${process.env.REACT_APP_USDA_APP_KEY}`)
        ]).then(axios.spread((f1, f2, f3) => {
            console.log(f1);
            console.log(f2);
            console.log(f3);
            f1.data.foodNutrients.map((x) => {
                if (x.nutrient.name == "Energy") {
                    b1 = (x.amount);
                }
            })
            f2.data.foodNutrients.map((x) => {
                if (x.nutrient.name == "Energy") {
                    b2 = (x.amount);
                }
            })
            f3.data.foodNutrients.map((x) => {
                if (x.nutrient.name == "Energy") {
                    b3 = (x.amount);
                }
            })
            bTotal = b1 + b2 + b3;
            setBrkfsCal(bTotal);
            console.log(b1 + " " + b2 + " " + " " + b3);
        }))
    }


    const getLCalories = () => {

        let l1;
        let l2;
        let l3;
        let lTotal;

        lMain &&
            axios.all([
                axios.get(`https://api.nal.usda.gov/fdc/v1/food/${lMain}?api_key=${process.env.REACT_APP_USDA_APP_KEY}`),
                axios.get(`https://api.nal.usda.gov/fdc/v1/food/${lSide}?api_key=${process.env.REACT_APP_USDA_APP_KEY}`),
                axios.get(`https://api.nal.usda.gov/fdc/v1/food/${lDrink}?api_key=${process.env.REACT_APP_USDA_APP_KEY}`)
            ]).then(axios.spread((f1, f2, f3) => {
                console.log(f1);
                console.log(f2);
                console.log(f3);
                f1.data.foodNutrients.map((x) => {
                    if (x.nutrient.name == "Energy") {
                        l1 = (x.amount);
                    }
                })
                f2.data.foodNutrients.map((x) => {
                    if (x.nutrient.name == "Energy") {
                        l2 = (x.amount);
                    }
                })
                f3.data.foodNutrients.map((x) => {
                    if (x.nutrient.name == "Energy") {
                        l3 = (x.amount);
                    }
                })
                lTotal = l1 + l2 + l3;
                setLunchCal(lTotal);
                console.log(l1 + " " + l2 + " " + " " + l3);
            }))
    }

    const getDCalories = () => {

        let d1;
        let d2;
        let d3;
        let dTotal;

            axios.all([
                axios.get(`https://api.nal.usda.gov/fdc/v1/food/${dMain}?api_key=${process.env.REACT_APP_USDA_APP_KEY}`),
                axios.get(`https://api.nal.usda.gov/fdc/v1/food/${dSide}?api_key=${process.env.REACT_APP_USDA_APP_KEY}`),
                axios.get(`https://api.nal.usda.gov/fdc/v1/food/${dDrink}?api_key=${process.env.REACT_APP_USDA_APP_KEY}`)
            ]).then(axios.spread((f1, f2, f3) => {
                console.log(f1);
                console.log(f2);
                console.log(f3);
                f1.data.foodNutrients.map((x) => {
                    if (x.nutrient.name == "Energy") {
                        d1 = (x.amount);
                    }
                })
                f2.data.foodNutrients.map((x) => {
                    if (x.nutrient.name == "Energy") {
                        d2 = (x.amount);
                    }
                })
                f3.data.foodNutrients.map((x) => {
                    if (x.nutrient.name == "Energy") {
                        d3 = (x.amount);
                    }
                })
                dTotal = d1 + d2 + d3;
                setDinnerCal(dTotal);
                console.log(d1 + " " + d2 + " " + " " + d3);
            }))
    }

    return (
        <center style={{}}><br /><br />
            {bMain}----{bSide}-----{bDrink}----breakfast calories: {brkfsCal}
            <div className="table-responsive  tbl_bg_2" style={{ width: "900px" }}>
                <br />
                <h1 className="display-6">Choose your menu based on your diet needs</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Meal</th>
                            <th>Main</th>
                            <th>Side</th>
                            <th>Drink</th>
                            <th>Total Calories</th>
                        </tr>
                    </thead>
                    <tbody style={{ color: "white" }}>
                        <tr>
                            <td>Breakfast</td>
                            <td onChange={getBCalories}>
                                <select name="brkfstMain" id="brkfstMain" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeBMain}>
                                    {foodList.Breads.map((food, index) => {
                                        return <option key={index} value={food.fdcid}>{food.name}</option>
                                    })}
                                </select>
                            </td>
                            <td onChange={getBCalories}>
                                <select name="brkfstSide" id="brkfstSide" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeBSide}>
                                    {foodList.Pastas.map((food, index) => {
                                        return <option key={index} value={food.fdcid}>{food.name}</option>
                                    })}
                                </select>
                            </td>
                            <td onChange={getBCalories}>
                                <select name="brkfstDrink" id="brkfstDrink" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeBDrink}>
                                    {foodList.Breads.map((food, index) => {
                                        return <option key={index} value={food.fdcid}>{food.name}</option>
                                    })}
                                </select>
                            </td>
                            <td><h3 style={{ color: "black" }} >{brkfsCal}</h3></td>
                        </tr>
                        <tr>
                            <td>Lunch</td>
                            <td onChange={getLCalories}>
                                <select name="lunchMain" id="lunchMain" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeLMain}>
                                    {foodList.Pastas.map((food, index) => {
                                        return <option key={index} value={food.fdcid}>{food.name}</option>
                                    })}
                                </select>
                            </td>
                            <td onChange={getLCalories}>
                                <select name="lunchSide" id="lunchSide" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeLSide}>
                                    {foodList.Pastas.map((food, index) => {
                                        return <option key={index} value={food.fdcid}>{food.name}</option>
                                    })}
                                </select>
                            </td>
                            <td onChange={getLCalories}>
                                <select name="lunchDrink" id="lunchDrink" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeLDrink}>
                                    {foodList.Pastas.map((food, index) => {
                                        return <option key={index} value={food.fdcid}>{food.name}</option>
                                    })}
                                </select>
                            </td>
                            <td><h3 style={{ color: "black" }} >{lunchCal}</h3></td>
                        </tr>
                        <tr>
                            <td>Dinner</td>
                            <td onChange={getDCalories}>
                                <select name="dinnerMain" id="dinnerMain" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeDMain}>
                                    {foodList.Pastas.map((food, index) => {
                                        return <option key={index} value={food.fdcid}>{food.name}</option>
                                    })}
                                </select>
                            </td>
                            <td onChange={getDCalories}>
                                <select name="dinnerSide" id="dinnerSide" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeDSide}>
                                    {foodList.Pastas.map((food, index) => {
                                        return <option key={index} value={food.fdcid}>{food.name}</option>
                                    })}
                                </select>
                            </td>
                            <td onChange={getDCalories}>
                                <select name="dinnerDrink" id="dinnerDrink" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeDDrink}>
                                    {foodList.Pastas.map((food, index) => {
                                        return <option key={index} value={food.fdcid}>{food.name}</option>
                                    })}
                                </select>
                            </td>
                            <td><h3 style={{ color: "black" }} >{dinnerCal}</h3></td>
                        </tr>
                        <tr>
                            <td>
                                Total Calories:
                            </td>
                            <td>
                                <h3><span className="badge badge-info" style={{ width: "140px" }}>***</span></h3>
                            </td>
                            <td>
                                <h3><span className="badge badge-info" style={{ width: "140px" }}>***</span></h3>
                            </td>
                            <td>
                                <h3><span className="badge badge-info" style={{ width: "140px" }}>***</span></h3>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                Total Overall Calories: &nbsp; &nbsp;<span className="badge badge-pill badge-light"><h4>{ totalCal}</h4></span>
                            </td>
                            <td colSpan="2">
                                Your Calorie Goal:  &nbsp; &nbsp;<span className="badge badge-pill badge-light"><h4>xxx</h4></span>
                            </td>
                            <td colSpan="2">
                                Remaining Calories:  &nbsp; &nbsp;<span className="badge badge-pill badge-light"><h4>xxx</h4></span>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <center>
                                    <button type="submit">Submit</button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </center>
    )
}

export default TestCal;
