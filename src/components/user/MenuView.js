import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react'

const MenuView = () => {

    const [user, setUser] = useState({});
    const [userPlan, setUserPlan] = useState({});
    const [bkFoods, setBkFoods] = useState([]);
    const [lnFoods, setLnFoods] = useState([]);
    const [dnFoods, setDnFoods] = useState([]);
    const [bkFoodsAmount, setBkFoodsAmount] = useState([]);
    const [lnFoodsAmount, setLnFoodsAmount] = useState([]);
    const [dnFoodsAmount, setDnFoodsAmount] = useState([]);
    const [mon, setMon] = useState();
    const [exMon, setExMon] = useState();

    const changeMon = (e) => {
        setMon(e.target.value);
    }

    useEffect(() => {

        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setUser(user);
        const userPlanString = localStorage.getItem("userPlan");
        const userPlan = JSON.parse(userPlanString);
        setUserPlan(userPlan);
    }, [])


   


    const seeMenu = () => {

        const num = userPlan.dailyPlanInput && userPlan.dailyPlanInput[0].breakfast.foods.length;
        const today = new Date();
        const shortMonth = today.getMonth();
        const shortDay = today.getDate();
        const shortDate = (shortMonth + 1) + " " + shortDay;

        userPlan.dailyPlanInput &&
            userPlan.dailyPlanInput.map(day => {
                const newDate = new Date(day.day);
                const thisMonth = newDate.getMonth();
                const thisDay = newDate.getDate();
                const thisDate = (thisMonth + 1) + " " + thisDay;

                if (thisDate == shortDate) {
                    day.breakfast.foods.map((food) => {
                        setBkFoods(day.breakfast.foods);
                        setLnFoods(day.lunch.foods);
                        setDnFoods(day.dinner.foods);
                        setBkFoodsAmount(day.breakfast.foodAmount);
                        setLnFoodsAmount(day.lunch.foodAmount);
                        setDnFoodsAmount(day.dinner.foodAmount);
                    })
                }
            })
    }
  
    const seeDateMenu = (e) => {

        const num = userPlan.dailyPlanInput && userPlan.dailyPlanInput[0].breakfast.foods.length;
        const today = new Date(mon);
        const shortMonth = today.getMonth();
        const shortDay = today.getDate();
        const shortDate = (shortMonth + 1) + " " + shortDay;

        userPlan.dailyPlanInput &&
            userPlan.dailyPlanInput.map(day => {
                const newDate = new Date(day.day);
                const thisMonth = newDate.getMonth();
                const thisDay = newDate.getDate();
                const thisDate = (thisMonth + 1) + " " + thisDay;

                if (thisDate == shortDate) {
                    day.breakfast.foods.map((food) => {
                        setBkFoods(day.breakfast.foods);
                        setLnFoods(day.lunch.foods);
                        setDnFoods(day.dinner.foods);
                        setBkFoodsAmount(day.breakfast.foodAmount);
                        setLnFoodsAmount(day.lunch.foodAmount);
                        setDnFoodsAmount(day.dinner.foodAmount);
                        setExMon(thisDate);
                    })
                }
            })
    }

    return (
        <div style={{ minHeight: "900px" }}>
            <center>
                <button onClick={seeMenu}>View today's menu</button><br /><br />
                <button>View by date <input type="date" onChange={changeMon} /> <button onClick={seeDateMenu }>Enter</button></button><br /><br />

                <table id="table" className="styled-table">
                    <thead>
                        <tr>
                            <th colspan="3"><center>{ exMon}</center></th>
                        </tr>
                        <tr>
                            <th>Breakfast</th>
                            <th>Lunch</th>
                            <th>Dinner</th>
                        </tr>
                        <tr>
                            <td>
                                <ul>
                                {bkFoods.map((food,index) => {
                                    return <li>{food}&nbsp;-&nbsp; {bkFoodsAmount[index]}gr </li>
                                })}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                {lnFoods.map((food, index) => {
                                    return <li>{food} &nbsp;-&nbsp; {lnFoodsAmount[index]}gr </li>
                                })}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                {dnFoods.map((food, index) => {
                                    return <li>{food} &nbsp;-&nbsp; {dnFoodsAmount[index]}gr </li>
                                })}
                                </ul>
                            </td>
                        </tr>
                        {exMon}
                    </thead>

                </table>
            </center>

        </div>
    )
}

export default MenuView
