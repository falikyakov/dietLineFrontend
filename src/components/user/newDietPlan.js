import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const NewDietPlan = () => {

    let history = useHistory();

    const thisUser = localStorage.getItem("user");
    const [user, setUser] = useState({})
    const [userPlan, setUserPlan] = useState({})


    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setUser(user);

        const userPlanString = localStorage.getItem("userPlan");
        const userPlan = JSON.parse(userPlanString);
        setUserPlan(userPlan);
    }, [])

    const initialKg = user && user.StartWeightKG;
    const idealKg = user && user.IdealWeight;
    const kgToLose = initialKg - idealKg;

    const [kg, setKg] = useState(0);
    const [excersize, setExcersize] = useState(0);
    const [calories, setCalories] = useState(0);
    const [date, setDate] = useState();
    const [weekStart, setWeekStart] = useState();


    const changeKg = (e) => {
        setKg(e.target.value);
    }
    const changeExcersize = (e) => {
        setExcersize(e.target.value);
    }
    const changeCalories = (e) => {
        setCalories(e.target.value);
    }
    const changeDate = (e) => {
        setDate(e.target.value);
    }
 
    const checkDate = () => {
        const myDate = new Date(date);
        const dt = new Date(date);
        const ndt = dt.getDate() - 7;
        dt.setDate(ndt);
        //alert("hello from checkDate");

        userPlan.goals &&
            userPlan.goals.map((goal) => {
                const wkStDate = new Date(goal.weekStartDate);
                //alert("weekstart: " + wkStDate + " \n dt: " + dt + "\n  mydate: " + myDate);
                if (wkStDate > dt && wkStDate <= myDate) {
                    setWeekStart(goal.weekStartDate);
                    document.getElementById("planExists").innerHTML = "<h4>Plan already exists for week starting " + wkStDate.toLocaleDateString();
                    document.getElementById("viewGoal").innerHTML = "&nbsp;<button>View / Delete Goals</button>";
                    setTimeout(() => {
                        document.getElementById("planExists").innerHTML = "";
                        document.getElementById("viewGoal").innerHTML = "";
                    }, 6000);
                }
            })
    }

    const avgCalories = 1;

    const goals = thisUser && {
        kgToLose: parseInt(kg),
        excersizePlanned: parseInt(excersize),
        caloriesToLose: parseInt(calories),
        weekStartDate: date,
        userId: user._id
    }

    const sendData = async (event) => {
        event.preventDefault();
        if (!date || !kg) {
            alert("Please fill out all fields");
            return;
        }

        const confirm = window.confirm("Are you sure?");
        if (confirm==false) {
            return;
        }


        axios.post("https://blooming-harbor-45317.herokuapp.com/router/db/DBinsert/insertGoal", goals)
            .then(
                (response) => {
                    // alert("in response");
                    console.log(response.data);
                    // alert(response.data)
                }).
            catch((error) => {
                console.log("error: " + error);
            }
            );

        history.push('/');
    }


    return (
        <Container style={{ margin: "5px", border: "solid purple thin", width: "1200px" }}>
            <h1 className="display-6">Weekly Goal:</h1>
            <h3 style={{ fontFamily: "cursive" }}>According to your BMI ({user && user.BMI && user.BMI.toFixed(2)}), you need to lose <strong>{Math.ceil(kgToLose)}</strong> kg.</h3>
            <hr /><br />
            
            <u><strong>Week start date</strong></u>: &nbsp; &nbsp;
            <input type="date" name="date" onChange={changeDate} onMouseLeave={checkDate} /><br />
            <div style={{ backgroundColor: "yellowgreen" }}>
                <h4 id="planExists"></h4>
                <h5><a href="/viewGoals" id="viewGoal"></a></h5>
            </div>
           
            <form >
                <h2>How many kg do you hope to lose over this week:</h2> &nbsp;
                <input type="number" name="loseKgPlan" id="loseKgPlan" onChange={changeKg} /><br />
                <span className="text-info"><strong>Remember: Be realistic; think of past successes and failures!</strong></span><br /><br />
                
                <h2>How much excersize can you do each day &nbsp;</h2>
                <input type="number" name="excersizePlan" id="excersizePlan" placeholder="amount in minutes" onChange={changeExcersize} /><br />
                <h3><span style={{ color: "white" }}><i>Remember: The more excersize you do, the more leeway you have with calorie intake! Click on this <a href="https://www.healthline.com/nutrition/how-many-calories-per-day#average-calorie-needs" target="_blank" rel="noopener noreferrer"><u>link</u></a> for more details</i></span><br /><br /></h3>
                
                <h2>How many calories can you limit yourself to per day &nbsp;</h2>
                <input type="number" name="caloriePlan" id="caloriePlan" onChange={changeCalories} /><br />
                <h3><span style={{ color: "white" }}><i>Remember: The average amount of calories necessary for you to <i>maintain</i> your weight is {avgCalories}. 500 calories less means 1 pound (around 1/2 kg) lost per week</i></span><br /></h3>
                <button onClick={sendData}>Submit</button>
            </form>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Container>
    )
}

export default NewDietPlan;
