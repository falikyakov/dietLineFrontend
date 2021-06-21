import React, { useState, useEffect } from 'react';
import axios from 'axios';
import foodList from '../foods/foodsComponentList';
import { Container } from 'react-bootstrap';

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

    const [excersizeMinutesDaily, setExcersizeMinutesDaily] = useState();
    const changeExcersizeMinutesDaily = (e) => {
        setExcersizeMinutesDaily(e.target.value);
    }


    const [bkMnAmnt, setBkMnAmnt] = useState(0);
    const [bkSdAmnt, setBkSdAmnt] = useState(0);
    const [bkDrAmnt, setBkDrAmnt] = useState(0);
    const [LnMnAmnt, setLnMnAmnt] = useState(0);
    const [LnSdAmnt, setLnSdAmnt] = useState(0);
    const [LnDrAmnt, setLnDrAmnt] = useState(0);
    const [DnMnAmnt, setDnMnAmnt] = useState(0);
    const [DnSdAmnt, setDnSdAmnt] = useState(0);
    const [DnDrAmnt, setDnDrAmnt] = useState(0);
    const bkMnAmntShort = bkMnAmnt / 100;
    const bkSdAmntShort = bkSdAmnt / 100;
    const bkDrAmntShort = bkDrAmnt / 100;
    const LnMnAmntShort = LnMnAmnt / 100;
    const LnSdAmntShort = LnSdAmnt / 100;
    const LnDrAmntShort = LnDrAmnt / 100;
    const DnMnAmntShort = DnMnAmnt / 100;
    const DnSdAmntShort = DnSdAmnt / 100;
    const DnDrAmntShort = DnDrAmnt / 100;




    const [date, setDate] = useState();
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
    const changeDate = (e) => {
        setDate(e.target.value);
    }
    const changeBkMnAmnt = (e) => {
        setBkMnAmnt(e.target.value);
    }
    const changeBkSdAmnt = (e) => {
        setBkSdAmnt(e.target.value);
    }
    const changeBkDrAmnt = (e) => {
        setBkDrAmnt(e.target.value);
    }
    const changeLnMnAmnt = (e) => {
        setLnMnAmnt(e.target.value);
    }
    const changeLnSdAmnt = (e) => {
        setLnSdAmnt(e.target.value);
    }
    const changeLnDrAmnt = (e) => {
        setLnDrAmnt(e.target.value);
    }
    const changeDnMnAmnt = (e) => {
        setDnMnAmnt(e.target.value);
    }
    const changeDnSdAmnt = (e) => {
        setDnSdAmnt(e.target.value);
    }
    const changeDnDrAmnt = (e) => {
        setDnDrAmnt(e.target.value);
    }


    const [userPlan, setUserPlan] = useState({});
    const [goal, setGoal] = useState(0);
    const [user, setUser] = useState({});


    useEffect(() => {
        const userPlanString = localStorage.getItem("userPlan");
        const userPlan = JSON.parse(userPlanString);
        setUserPlan(userPlan);
        const x = userPlan.goals.length;
        const y = x - 1;
        const z = userPlan.goals[y].calorieIntakePerDay;
        setGoal(z);
        console.log(goal);

        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setUser(user);
    }, [])

    const getBCalories = () => {

        let b1;
        let b1Final;
        let b2;
        let b2Final;
        let b3;
        let b3Final;
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

            b1Final = b1 * bkMnAmntShort;
            b2Final = b2 * bkSdAmntShort;
            b3Final = b3 * bkDrAmntShort;
            bTotal = b1Final + b2Final + b3Final;
            setBrkfsCal(bTotal);
            console.log(b1 + " " + b2 + " " + " " + b3);
        }))
    }


    const getLCalories = () => {

        let l1;
        let l1Final;
        let l2;
        let l2Final;
        let l3;
        let l3Final;
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

                l1Final = l1 * LnMnAmntShort;
                l2Final = l2 * LnSdAmntShort;
                l3Final = l3 * LnDrAmntShort;
                lTotal = l1Final + l2Final + l3Final;
                setLunchCal(lTotal);
                console.log(l1 + " " + l2 + " " + " " + l3);
            }))
    }

    const getDCalories = () => {

        let d1;
        let d1Final;
        let d2;
        let d2Final;
        let d3;
        let d3Final;
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

            d1Final = d1 * DnMnAmntShort;
            d2Final = d2 * DnSdAmntShort;
            d3Final = d3 * DnDrAmntShort;
            dTotal = d1Final + d2Final + d3Final;
            setDinnerCal(dTotal);
            console.log("d1: " + d1 + ", d1Final: " + d1Final);
        }))
    }

    const sendData = async (event) => {
        event.preventDefault();

        var bMainFood = document.getElementById("brkfstMain").selectedOptions[0].text;
        var bSideFood = document.getElementById("brkfstSide").selectedOptions[0].text;
        var bDrinkFood = document.getElementById("brkfstDrink").selectedOptions[0].text;
        var lMainFood = document.getElementById("lunchMain").selectedOptions[0].text;
        var lSideFood = document.getElementById("lunchSide").selectedOptions[0].text;
        var lDrinkFood = document.getElementById("lunchDrink").selectedOptions[0].text;
        var dMainFood = document.getElementById("dinnerMain").selectedOptions[0].text;
        var dSideFood = document.getElementById("dinnerSide").selectedOptions[0].text;
        var dDrinkFood = document.getElementById("dinnerDrink").selectedOptions[0].text;

        const dailyPlanInput = {
            breakfast: {
                foods: [bMainFood, bSideFood, bDrinkFood],
                foodAmount: [bkMnAmnt, bkSdAmnt, bkDrAmnt],
                calories: brkfsCal
            },
            lunch: {
                foods: [lMainFood, lSideFood, lDrinkFood],
                foodAmount: [LnMnAmnt, LnSdAmnt, LnDrAmnt],
                calories: lunchCal
            },
            dinner: {
                foods: [dMainFood, dSideFood, dDrinkFood],
                foodAmount: [DnMnAmnt, DnSdAmnt, DnDrAmnt],
                calories: dinnerCal
            },
            totalCalories: totalCal,
            excersizeMinutesDaily: excersizeMinutesDaily,
            day: date,
            userId: user._id
        }


        axios.post("https://blooming-harbor-45317.herokuapp.com/router/db/DBinsert/insertDailyPlan", dailyPlanInput)
            .then(
                (response) => {
                    // alert("in response");
                    console.log("SUCCESS: " + response.data);
                    // alert(response.data)
                }).
            catch((error) => {
                console.log("error: " + error);
            }
            );

        alert(dDrinkFood);
    }


    return (
        <Container>
            <center><br /><br />

                <div style={{ border: "solid thin purple", width: "400px" }}>
                    Which day is this plan for: &nbsp; &nbsp;
            <input type="date" name="date" onChange={changeDate} />
                </div>
                <br />
                <div style={{ borderTop: "purple dashed 1px", borderBottom: "purple dashed 1px" }}>
                    <h3>How much excersize do you plan to do (minutes): &nbsp; &nbsp;
                    <input type="number" name="excersize" onChange={changeExcersizeMinutesDaily} style={{ width: "60px" }} />
                    </h3>
                </div>
                <div>
                    <h1><u>Menu</u></h1>
                </div>
                <div className="table-responsive  tbl_bg_2" style={{ width: "1000px" }}>
                    <br />
                    <h1 className="display-6">Choose your menu based on your diet needs</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Meal</th>
                                <th>Main</th>
                                <th>gr/ml</th>
                                <th>Side</th>
                                <th>gr/ml</th>
                                <th>Drink</th>
                                <th>gr/ml</th>
                                <th>Total Calories</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: "white" }}>
                            <tr>
                                <td>Breakfast</td>
                                <td onChange={getBCalories}>
                                    <select name="brkfstMain" id="brkfstMain" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeBMain}>
                                        {
                                            foodList.Breads.map((food, index) => {
                                                return <option key={index} value={food.fdcid}>{food.name}</option>
                                            })}
                                    </select>
                                </td>
                                <td style={{ borderRight: "1px solid white" }}>
                                    <input type="number" className="btn btn-default" style={{ width: "80px", backgroundColor: "wheat" }} onChange={changeBkMnAmnt} />
                                </td>
                                <td onChange={getBCalories}>
                                    <select name="brkfstSide" id="brkfstSide" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeBSide}>
                                        {foodList.Pastas.map((food, index) => {
                                            return <option key={index} value={food.fdcid}>{food.name}</option>
                                        })}
                                    </select>
                                </td>
                                <td style={{ borderRight: "1px solid white" }}>
                                    <input type="number" className="btn btn-default" style={{ width: "80px", backgroundColor: "wheat" }} onChange={changeBkSdAmnt} />
                                </td>
                                <td onChange={getBCalories}>
                                    <select name="brkfstDrink" id="brkfstDrink" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeBDrink}>
                                        {foodList.Breads.map((food, index) => {
                                            return <option key={index} value={food.fdcid}>{food.name}</option>
                                        })}
                                    </select>
                                </td>
                                <td style={{ borderRight: "1px solid white" }}>
                                    <input type="number" className="btn btn-default" style={{ width: "80px", backgroundColor: "wheat" }} onChange={changeBkDrAmnt} />
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
                                <td style={{ borderRight: "1px solid white" }}>
                                    <input type="number" className="btn btn-default" style={{ width: "80px", backgroundColor: "wheat" }} onChange={changeLnMnAmnt} />
                                </td>
                                <td onChange={getLCalories}>
                                    <select name="lunchSide" id="lunchSide" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeLSide}>
                                        {foodList.Pastas.map((food, index) => {
                                            return <option key={index} value={food.fdcid}>{food.name}</option>
                                        })}
                                    </select>
                                </td>
                                <td style={{ borderRight: "1px solid white" }}>
                                    <input type="number" className="btn btn-default" style={{ width: "80px", backgroundColor: "wheat" }} onChange={changeLnSdAmnt} />
                                </td>
                                <td onChange={getLCalories}>
                                    <select name="lunchDrink" id="lunchDrink" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeLDrink}>
                                        {foodList.Pastas.map((food, index) => {
                                            return <option key={index} value={food.fdcid}>{food.name}</option>
                                        })}
                                    </select>
                                </td>
                                <td style={{ borderRight: "1px solid white" }}>
                                    <input type="number" className="btn btn-default" style={{ width: "80px", backgroundColor: "wheat" }} onChange={changeLnDrAmnt} />
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
                                <td style={{ borderRight: "1px solid white" }}>
                                    <input type="number" className="btn btn-default" style={{ width: "80px", backgroundColor: "wheat" }} onChange={changeDnMnAmnt} />
                                </td>
                                <td onChange={getDCalories}>
                                    <select name="dinnerSide" id="dinnerSide" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeDSide}>
                                        {foodList.Pastas.map((food, index) => {
                                            return <option key={index} value={food.fdcid}>{food.name}</option>
                                        })}
                                    </select>
                                </td>
                                <td style={{ borderRight: "1px solid white" }}>
                                    <input type="number" className="btn btn-default" style={{ width: "80px", backgroundColor: "wheat" }} onChange={changeDnSdAmnt} />
                                </td>
                                <td onChange={getDCalories}>
                                    <select name="dinnerDrink" id="dinnerDrink" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onInput={changeDDrink}>
                                        {foodList.Pastas.map((food, index) => {
                                            return <option key={index} value={food.fdcid}>{food.name}</option>
                                        })}
                                    </select>
                                </td>
                                <td style={{ borderRight: "1px solid white" }}>
                                    <input type="number" className="btn btn-default" style={{ width: "80px", backgroundColor: "wheat" }} onChange={changeDnDrAmnt} />
                                </td>
                                <td><h3 style={{ color: "black" }} >{dinnerCal}</h3></td>
                            </tr>

                            <tr>
                                <td colSpan="3">
                                    Total Overall Calories: &nbsp; &nbsp;<span className="badge badge-pill badge-light"><h4>{totalCal}</h4></span>
                                </td>
                                <td colSpan="2">
                                    Your Calorie Goal:  &nbsp; &nbsp;<span className="badge badge-pill badge-light"><h4>{goal}</h4></span>
                                </td>
                                <td colSpan="2">
                                    Remaining Calories:  &nbsp; &nbsp;<span className="badge badge-pill badge-light"><h4>{goal - totalCal}</h4></span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4">
                                    <center>
                                        <button type="submit" onClick={sendData}>Submit</button>
                                    </center>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {bkMnAmnt + " " + bkSdAmnt + " " + bkDrAmnt}
                </div>
            </center>
        </Container>
    )
}

export default TestCal;
