import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-lineheight-annotation';


class UserGraph extends Component {
    constructor(props) {

        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);

        const userPlanString = localStorage.getItem("userPlan");
        const userPlan = JSON.parse(userPlanString);

        var calArray = [];
        var i = userPlan.dailyActualInput && userPlan.dailyActualInput.length;
        var j = i - 8;
        userPlan.dailyActualInput &&
            userPlan.dailyActualInput.map((item, index) => {
                if (index > j) {
                    return calArray.push(item.totalCal);
                }
            })


        super(props);
        this.state = {
            data: {
                labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
                datasets: [{
                    borderColor: "green",
                    backgroundColor: "#6bd098",
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    borderWidth: 3,
                    data: calArray
                },
                {
                    borderColor: "red",
                    backgroundColor: "#f17e5d",
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    borderWidth: 3,
                    data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
                },
                {
                    borderColor: "orange",
                    backgroundColor: "#fcc468",
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    borderWidth: 3,
                    data: [370, 394, 415, 409, 295, 445, 325, 450, 400, 484]
                }
                ]
            },
            options: {
                legend: {
                    display: false
                },

                tooltips: {
                    enabled: false
                },

                scales: {
                    yAxes: [{

                        ticks: {
                            fontColor: "#9f9f9f",
                            beginAtZero: false,
                            maxTicksLimit: 5,
                            //padding: 20
                        },
                        gridLines: {
                            drawBorder: false,
                            zeroLineColor: "#ccc",
                            color: 'rgba(255,255,255,0.05)'
                        }

                    }],

                    xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(255,255,255,0.1)',
                            zeroLineColor: "transparent",
                            display: false,
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9f9f9f"
                        }
                    }]
                },
            }
        };
    }
    render() {
        return (
            <div style={{ position: "relative" }} className="col-lg-6">
                <h2>Chart Sample</h2>
                <Line
                    options={{
                        responsive: true,
                        lineHeightAnnotation: {
                            hover: true,
                            color: "white"
                        }
                    }}
                    data={this.state.data}
                />
            </div>
        );
    }
}

export default UserGraph;