import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';



function LineChart() {

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

    var weightArray = [];
    var i = user.WeeklyWeight && user.WeeklyWeight.length;
    var j = i - 8;
    user.WeeklyWeight &&
        user.WeeklyWeight.map((item, index) => {
            if (index > j) {
                return weightArray.push(item);
            }
        })

    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
        datasets: [
            {
                label: 'last seven weeks',
                fill: true,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                //feed info from user weight here
                data: weightArray
            }
        ]
    };



    return (
        <div className="col-lg-6">
            <h2>Weekly Weight Watch</h2>
            <Line data={data} />
        </div>
    );
}

export default LineChart;
