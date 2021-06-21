import React, { useEffect, useState } from 'react'
import FoodList from '../foods/FoodList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaChevronRight } from "react-icons/fa";
import DailyInsertList from './DailyInsertList';
import DailyInsertInput from './DailyInsertInput';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';


const DailyPlan = () => {

    let history = useHistory();


    const [user, setUser] = useState({});
    const [userPlan, setUserPlan] = useState({});

    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setUser(user);

        const userPlanString = localStorage.getItem("userPlan");
        const userPlan = JSON.parse(userPlanString);
        setUserPlan(userPlan);
    }, [])



    const [excersizeMinutesDaily, setExcersizeMinutesDaily] = useState();
    const changeExcersizeMinutesDaily = (e) => {
        setExcersizeMinutesDaily(e.target.value);
    }
    const [date, setDate] = useState();
    const [weekOf, setWeekOf] = useState("hahahah");

    const changeDate = (e) => {
        setDate(e.target.value);
        changeWeekOf();
    }

    const changeWeekOf = () => {
        userPlan.goals &&
            userPlan.goals.map((goal) => {

                var dt1 = new Date(goal.weekStartDate);
                var dt2 = new Date(goal.weekStartDate);

                var dt7 = dt2.getDate() + 7;
                dt2.setDate(dt7);
                var pd7 = dt2.toLocaleString();

                var newDate = new Date(date);

                if (newDate >= dt1 && newDate < dt2) {
                    setWeekOf(dt1);
                    return;
                }
            })
        if (weekOf == null) {
            alert("This date is not part of a weekly goal");
        }
    }

    const [breakfastMainText, setbreakfastMainText] = useState("Main");
    const [breakfastSideText, setbreakfastSideText] = useState("Side")
    const [breakfastDrinkText, setbreakfastDrinkText] = useState("Drink")
    const [breakfastAdditivesText, setbreakfastAdditivesText] = useState("Additives");
    const [breakfastMainValue, setbreakfastMainValue] = useState(0);
    const [breakfastMainGr, setBreakfastMainGr] = useState(0);
    const [breakfastSideValue, setbreakfastSideValue] = useState(0)
    const [breakfastSideGr, setBreakfastSideGr] = useState(0)
    const [breakfastDrinkValue, setbreakfastDrinkValue] = useState(0)
    const [breakfastDrinkGr, setBreakfastDrinkGr] = useState(0)
    const [breakfastAdditivesValue, setbreakfastAdditivesValue] = useState(0);
    const [breakfastAdditivesGr, setBreakfastAdditivesGr] = useState(0);
    const [breakfastExtra, setBreakfastExtra] = useState(0);
    const [brMainCal, setBrMainCal] = useState(0);
    const [brSideCal, setBrSideCal] = useState(0)
    const [brDrinkCal, setBrDrinkCal] = useState(0)
    const [brAdditivesCal, setBrAdditivesCal] = useState(0)
    const totalBrCal = brMainCal + brSideCal + brDrinkCal + brAdditivesCal + breakfastExtra;

    const changebreakfastMainText = (e) => {
        setbreakfastMainText(e.target.innerHTML);
        setbreakfastMainValue(e.target.value);
    }
    const changebreakfastSideText = (e) => {
        setbreakfastSideText(e.target.innerHTML);
        setbreakfastSideValue(e.target.value);
    }
    const changebreakfastDrinkText = (e) => {
        setbreakfastDrinkText(e.target.innerHTML);
        setbreakfastDrinkValue(e.target.value);

    }
    const changebreakfastAdditivesText = (e) => {
        setbreakfastAdditivesText(e.target.innerHTML);
        setbreakfastAdditivesValue(e.target.value);
    }
    const changeBreakfastExtra = (e) => {
        const brEx = e.target.value;
        setBreakfastExtra(parseFloat(brEx));
    }
    const changeBreakfastMainGr = (e) => {
        setBreakfastMainGr(e.target.value);
    }
    const changeBreakfastSideGr = (e) => {
        setBreakfastSideGr(e.target.value);
    }
    const changeBreakfastDrinkGr = (e) => {
        setBreakfastDrinkGr(e.target.value);
    }
    const changeBreakfastAdditivesGr = (e) => {
        setBreakfastAdditivesGr(e.target.value);
    }

    const setTotalBrCal = () => {
        setBrMainCal(breakfastMainValue * (breakfastMainGr / 100));
        setBrSideCal(breakfastSideValue * (breakfastSideGr / 100));
        setBrDrinkCal(breakfastDrinkValue * (breakfastDrinkGr / 100));
        setBrAdditivesCal(breakfastAdditivesValue * (breakfastAdditivesGr / 100));
    }
    const seeBrCal = () => {
        document.getElementById("totalBrCal").innerHTML = totalBrCal;
    }



    const [lunchMainText, setLunchMainText] = useState("Main");
    const [lunchSideText, setLunchSideText] = useState("Side")
    const [lunchDrinkText, setLunchDrinkText] = useState("Drink")
    const [lunchAdditivesText, setLunchAdditivesText] = useState("Additives")
    const [lunchMainValue, setLunchMainValue] = useState(0);
    const [lunchMainGr, setLunchMainGr] = useState(0);
    const [lunchSideValue, setLunchSideValue] = useState(0)
    const [lunchSideGr, setLunchSideGr] = useState(0)
    const [lunchDrinkValue, setLunchDrinkValue] = useState(0)
    const [lunchDrinkGr, setLunchDrinkGr] = useState(0)
    const [lunchAdditivesValue, setLunchAdditivesValue] = useState(0)
    const [lunchAdditivesGr, setLunchAdditivesGr] = useState(0)
    const [lunchExtra, setLunchExtra] = useState(0);
    const [lnMainCal, setLnMainCal] = useState(0);
    const [lnSideCal, setLnSideCal] = useState(0)
    const [lnDrinkCal, setLnDrinkCal] = useState(0)
    const [lnAdditivesCal, setLnAdditivesCal] = useState(0)
    const totalLnCal = lnMainCal + lnSideCal + lnDrinkCal + lnAdditivesCal + lunchExtra;

    const changeLunchMain = (e) => {
        setLunchMainText(e.target.innerHTML);
        setLunchMainValue(e.target.value);
    }
    const changeLunchSide = (e) => {
        setLunchSideText(e.target.innerHTML);
        setLunchSideValue(e.target.value);
    }
    const changeLunchDrink = (e) => {
        setLunchDrinkText(e.target.innerHTML);
        setLunchDrinkValue(e.target.value);
    }
    const changeLunchAdditives = (e) => {
        setLunchAdditivesText(e.target.innerHTML);
        setLunchAdditivesValue(e.target.value);
    }
    const changeLunchExtra = (e) => {
        const lnEx = e.target.value;
        setLunchExtra(parseFloat(lnEx));
    }
    const changeLunchMainGr = (e) => {
        setLunchMainGr(e.target.value);
    }
    const changeLunchSideGr = (e) => {
        setLunchSideGr(e.target.value);
    }
    const changeLunchDrinkGr = (e) => {
        setLunchDrinkGr(e.target.value);
    }
    const changeLunchAdditivesGr = (e) => {
        setLunchAdditivesGr(e.target.value);
    }
    const setTotalLnCal = () => {
        setLnMainCal(lunchMainValue * (lunchMainGr / 100));
        setLnSideCal(lunchSideValue * (lunchSideGr / 100));
        setLnDrinkCal(lunchDrinkValue * (lunchDrinkGr / 100));
        setLnAdditivesCal(lunchAdditivesValue * (lunchAdditivesGr / 100));
    }
    const seeLnCal = () => {
        document.getElementById("totalLnCal").innerHTML = `<strong>${totalLnCal}</strong>`;
    }

    const [dinnerMainText, setDinnerMainText] = useState("Main");
    const [dinnerSideText, setDinnerSideText] = useState("Side")
    const [dinnerDrinkText, setDinnerDrinkText] = useState("Drink")
    const [dinnerAdditivesText, setDinnerAdditivesText] = useState("Additives")
    const [dinnerMainValue, setDinnerMainValue] = useState(0);
    const [dinnerMainGr, setDinnerMainGr] = useState(0);
    const [dinnerSideValue, setDinnerSideValue] = useState(0)
    const [dinnerSideGr, setDinnerSideGr] = useState(0)
    const [dinnerDrinkValue, setDinnerDrinkValue] = useState(0)
    const [dinnerDrinkGr, setDinnerDrinkGr] = useState(0)
    const [dinnerAdditivesValue, setDinnerAdditivesValue] = useState(0)
    const [dinnerAdditivesGr, setDinnerAdditivesGr] = useState(0)
    const [dinnerExtra, setDinnerExtra] = useState(0);
    const [dnMainCal, setDnMainCal] = useState(0);
    const [dnSideCal, setDnSideCal] = useState(0)
    const [dnDrinkCal, setDnDrinkCal] = useState(0)
    const [dnAdditivesCal, setDnAdditivesCal] = useState(0)
    const totalDnCal = dnMainCal + dnSideCal + dnDrinkCal + dnAdditivesCal + dinnerExtra;

    const changeDinnerMain = (e) => {
        setDinnerMainText(e.target.innerHTML);
        setDinnerMainValue(e.target.value);
    }
    const changeDinnerSide = (e) => {
        setDinnerSideText(e.target.innerHTML);
        setDinnerSideValue(e.target.value);
    }
    const changeDinnerDrink = (e) => {
        setDinnerDrinkText(e.target.innerHTML);
        setDinnerDrinkValue(e.target.value);
    }
    const changeDinnerAdditives = (e) => {
        setDinnerAdditivesText(e.target.innerHTML);
        setDinnerAdditivesValue(e.target.value);
    }
    const changeDinnerExtra = (e) => {
        const dnEx = e.target.value;
        setDinnerExtra(parseFloat(dnEx));
    }
    const changeDinnerMainGr = (e) => {
        setDinnerMainGr(e.target.value);
    }
    const changeDinnerSideGr = (e) => {
        setDinnerSideGr(e.target.value);
    }
    const changeDinnerDrinkGr = (e) => {
        setDinnerDrinkGr(e.target.value);
    }
    const changeDinnerAdditivesGr = (e) => {
        setDinnerAdditivesGr(e.target.value);
    }
    const setTotalDnCal = () => {
        setDnMainCal(dinnerMainValue * (dinnerMainGr / 100));
        setDnSideCal(dinnerSideValue * (dinnerSideGr / 100));
        setDnDrinkCal(dinnerDrinkValue * (dinnerDrinkGr / 100));
        setDnAdditivesCal(dinnerAdditivesValue * (dinnerAdditivesGr / 100));
    }
    const seeDnCal = () => {
        var dnCal = dnMainCal + dnSideCal + dnDrinkCal + dnAdditivesCal + dinnerExtra;
        document.getElementById("totalDnCal").innerHTML = `<strong>${dnCal}</strong>`;
    }


    const sendData = async (event) => {
        event.preventDefault();

        if (!date) {
            alert("Please enter date of details");
            return;
        }
        const confirm = window.confirm("Are you sure? ");
        if (confirm == false) {
            return;
        }

        const totalCalories = totalBrCal + totalLnCal + totalDnCal;
        const dailyPlanInput = {
            breakfast: {
                foods: [breakfastMainText, breakfastSideText, breakfastDrinkText, breakfastAdditivesText],
                foodAmount: [breakfastMainGr, breakfastSideGr, breakfastDrinkGr, breakfastAdditivesGr],
                calories: totalBrCal
            },
            lunch: {
                foods: [lunchMainText, lunchSideText, lunchDrinkText, lunchAdditivesText],
                foodAmount: [lunchMainGr, lunchSideGr, lunchDrinkGr, lunchAdditivesGr],
                calories: totalLnCal
            },
            dinner: {
                foods: [dinnerMainText, dinnerSideText, dinnerDrinkText, dinnerAdditivesText],
                foodAmount: [dinnerMainGr, dinnerSideGr, dinnerDrinkGr, dinnerAdditivesGr],
                calories: totalDnCal
            },
            totalCalories: totalCalories,
            excersizeMinutesDaily: excersizeMinutesDaily,
            day: date,
            weekOf: weekOf,
            userId: user._id
        }


        axios.post("https://blooming-harbor-45317.herokuapp.com/router/db/DBinsert/insertDailyPlan", dailyPlanInput)
            .then(
                (response) => {
                    console.log("SUCCESS: " + response.data);
                }).
            catch((error) => {
                console.log("error: " + error);
            }
            );

        history.push('/');
    }



    return (
        <div>
            <div style={{ border: "solid thin purple", width: "400px", marginLeft: "20px", paddingLeft: "10px" }}>
                Which day is this plan for: &nbsp; &nbsp;
            <input type="date" name="date" onChange={changeDate} onMouseLeave={changeWeekOf} required />
            </div><br />
          
            &nbsp; &nbsp; Amount you plan to excersize (minutes): &nbsp; <input type="number" onChange={changeExcersizeMinutesDaily} /><hr />
            <h1 className="display-4">Menu Plan:</h1><strong><hr /></strong>
          
            &nbsp;<Link to="/newFoodCats"><big style={{ color: "purple" }}><strong><u> Browse Foods</u></strong></big></Link>
            <br /><br />
         
            <fieldset style={{ border: "purple solid thin" }}>
                <h1><u><strong>Breakfast:</strong></u></h1>
                <table style={{ borderSpacing: "15px", borderCollapse: "separate" }}>
                    <thead>
                        <tr>
                            <th>Main</th>
                            <th>Side</th>
                            <th>Drink</th>
                            <th>Additives</th>
                            <th>Extra Calories</th>
                            <th>Total Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {breakfastMainText} &nbsp; <DailyInsertInput func={changeBreakfastMainGr} func2={setTotalBrCal} />
                                    <DailyInsertList func={changebreakfastMainText} onMouseLeave={setTotalBrCal} />
                                </button>
                            </td>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {breakfastSideText} &nbsp; <DailyInsertInput func={changeBreakfastSideGr} func2={setTotalBrCal} />
                                    <DailyInsertList func={changebreakfastSideText} onMouseLeave={setTotalBrCal} />
                                </button>
                            </td>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {breakfastDrinkText} &nbsp; <DailyInsertInput func={changeBreakfastDrinkGr} func2={setTotalBrCal} />
                                    <DailyInsertList func={changebreakfastDrinkText} onMouseLeave={setTotalBrCal} />
                                </button>
                            </td>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {breakfastAdditivesText} &nbsp; <DailyInsertInput func={changeBreakfastAdditivesGr} func2={setTotalBrCal} />
                                    <DailyInsertList func={changebreakfastAdditivesText} onMouseLeave={setTotalBrCal} />
                                </button>
                            </td>
                            <td>
                                <input type="number" className="btn btn-default" style={{ backgroundColor: "wheat", width: "100px" }} onChange={changeBreakfastExtra} />
                            </td>
                            <td>
                                <button className="btn btn-default" style={{ backgroundColor: "wheat", minWidth: "100px" }} onClick={seeBrCal}><strong id="totalBrCal" >See Total Calories</strong></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset><br />
            <fieldset style={{ border: "purple solid thin" }}>
                <h1><u><strong>Lunch:</strong></u></h1>
                <table style={{ borderSpacing: "15px", borderCollapse: "separate" }}>
                    <thead>
                        <tr>
                            <th>Main</th>
                            <th>Side</th>
                            <th>Drink</th>
                            <th>Additives</th>
                            <th>Extra Calories</th>
                            <th>Total Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button name="" id="" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {lunchMainText} &nbsp;<DailyInsertInput func={changeLunchMainGr} func2={setTotalLnCal} />
                                    <DailyInsertList func={changeLunchMain} onMouseLeave={setTotalLnCal} />
                                </button>
                            </td>
                            <td>
                                <button name="" id="" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {lunchSideText} &nbsp; <DailyInsertInput func={changeLunchSideGr} func2={setTotalLnCal} />
                                    <DailyInsertList func={changeLunchSide} onMouseLeave={setTotalLnCal} />
                                </button>
                            </td>
                            <td>
                                <button name="" id="" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {lunchDrinkText} &nbsp; <DailyInsertInput func={changeLunchDrinkGr} func2={setTotalLnCal} />
                                    <DailyInsertList func={changeLunchDrink} onMouseLeave={setTotalLnCal} />
                                </button>
                            </td>
                            <td>
                                <button name="" id="" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {lunchAdditivesText} &nbsp; <DailyInsertInput func={changeLunchAdditivesGr} func2={setTotalLnCal} />
                                    <DailyInsertList func={changeLunchAdditives} onMouseLeave={setTotalLnCal} />
                                </button>
                            </td>
                            <td>
                                <input type="number" className="btn btn-default" style={{ backgroundColor: "wheat", width: "100px" }} onChange={changeLunchExtra} />
                            </td>
                            <td>
                                <button id="totalLnCal" className="btn btn-default" style={{ backgroundColor: "wheat", minWidth: "100px" }} onClick={seeLnCal}><strong >See Total Calories</strong></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset><br />
            <fieldset style={{ border: "purple solid thin" }}>
                <h1><u><strong>Dinner:</strong></u></h1>
                <table style={{ borderSpacing: "15px", borderCollapse: "separate" }}>
                    <thead>
                        <tr>
                            <th>Main</th>
                            <th>Side</th>
                            <th>Drink</th>
                            <th>Additives</th>
                            <th>Extra Calories</th>
                            <th>Total Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {dinnerMainText} &nbsp; <DailyInsertInput func={changeDinnerMainGr} func2={setTotalDnCal} />
                                    <DailyInsertList func={changeDinnerMain} onMouseLeave={setTotalDnCal} />
                                </button>
                            </td>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {dinnerSideText} &nbsp; <DailyInsertInput func={changeDinnerSideGr} func2={setTotalDnCal} />
                                    <DailyInsertList func={changeDinnerSide} onMouseLeave={setTotalDnCal} />
                                </button>
                            </td>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {dinnerDrinkText} &nbsp; <DailyInsertInput func={changeDinnerDrinkGr} func2={setTotalDnCal} />
                                    <DailyInsertList func={changeDinnerDrink} onMouseLeave={setTotalDnCal} />
                                </button>
                            </td>
                            <td>
                                <button name="brkfstMain" id="brkfstMain" className="foodCategory btn btn-default" style={{ backgroundColor: "wheat", minWidth: "160px" }}>
                                    {dinnerAdditivesText} &nbsp; <DailyInsertInput func={changeDinnerAdditivesGr} func2={setTotalDnCal} />
                                    <DailyInsertList func={changeDinnerAdditives} onMouseLeave={setTotalDnCal} />
                                </button>
                            </td>
                            <td>
                                <input type="number" className="btn btn-default" style={{ backgroundColor: "wheat", width: "100px" }} onChange={changeDinnerExtra} />
                            </td>
                            <td>
                                <button className="btn btn-default" id="totalDnCal" style={{ backgroundColor: "wheat", minWidth: "100px" }} onClick={seeDnCal}><strong>See Total Calories</strong></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset><br />

            <center>
                <h3>
                    Please make sure you entered the date <br /> and the excersize minutes
                </h3><br /><hr />
                <h4><button type="submit" style={{ marginLeft: "20px", borderRadius: "9%", backgroundColor: "violet" }} onClick={sendData}>Submit</button></h4>
            </center>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default DailyPlan;
