import React, { useState, useEffect } from 'react';

const MenuTable = () => {

    const [bMain, setBMain] = useState("");
    const [bSide, setBSide] = useState("");
    const [bDrink, setBDrink] = useState("");
    const [brkfsCal, setBrkfsCal] = useState(0);
    const [lunchCal, setLunchCal] = useState(0);
    const [dinnerCal, setDinnerCal] = useState(0);

    const changeBMain = (e) => {
        setBMain(e.target.value);    
    }
    const changeBSide = (e) => {
        setBSide(e.target.value); 
    }
    const changeBDrink = (e) => {
        setBDrink(e.target.value);
    }


    const fetchCalories = () => {   

    }




    return (
        <center><br /><br />
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
                            <td><select name="brkfstMain" id="brkfstMain" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onChange={changeBMain}>
                                <option value="HKD">Breads</option>
                                <option value="HKD">TWN</option>
                                <option value="HKD">RMB</option>
                                <option value="USD">USD</option>
                                <option value="HKD">HKD</option>
                            </select>
                            </td>
                            <td>
                                <select name="brkfstSide" id="brkfstSide" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onChange={changeBSide}>
                                    <option value="HKD">Eggs</option>
                                    <option value="HKD">TWN</option>
                                    <option value="HKD">RMB</option>
                                    <option value="USD">USD</option>
                                    <option value="HKD">HKD</option>
                                </select>
                            </td>
                            <td><select name="brkfstDrink" id="brkfstDrink" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }} onChange={changeBDrink}>
                                <option value="HKD">Coffee</option>
                                <option value="HKD">TWN</option>
                                <option value="HKD">RMB</option>
                                <option value="USD">USD</option>
                                <option value="HKD">HKD</option>
                            </select>
                            </td>
                            <td><h3 style={{color:"black"}} >xxx</h3></td>
                        </tr>
                        <tr>
                            <td>Lunch</td>
                            <td><select name="brkfstMain" id="lunchMain" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }}>
                                <option value="HKD">Breads</option>
                                <option value="HKD">TWN</option>
                                <option value="HKD">RMB</option>
                                <option value="USD">USD</option>
                                <option value="HKD">HKD</option>
                            </select>
                            </td>
                            <td><select name="brkfstMain" id="brkfstMain" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }}>
                                <option value="HKD">Breads</option>
                                <option value="HKD">TWN</option>
                                <option value="HKD">RMB</option>
                                <option value="USD">USD</option>
                                <option value="HKD">HKD</option>
                            </select>
                            </td>
                            <td><select name="brkfstMain" id="brkfstMain" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }}>
                                <option value="HKD">Breads</option>
                                <option value="HKD">TWN</option>
                                <option value="HKD">RMB</option>
                                <option value="USD">USD</option>
                                <option value="HKD">HKD</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Dinner</td>
                            <td><select name="brkfstMain" id="brkfstMain" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }}>
                                <option value="HKD">Breads</option>
                                <option value="HKD">TWN</option>
                                <option value="HKD">RMB</option>
                                <option value="USD">USD</option>
                                <option value="HKD">HKD</option>
                            </select>
                            </td>
                            <td><select name="brkfstMain" id="brkfstMain" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }}>
                                <option value="HKD">Breads</option>
                                <option value="HKD">TWN</option>
                                <option value="HKD">RMB</option>
                                <option value="USD">USD</option>
                                <option value="HKD">HKD</option>
                            </select>
                            </td>
                            <td><select name="brkfstMain" id="brkfstMain" className="selectpicker btn btn-default" style={{ backgroundColor: "wheat", width: "140px" }}>
                                <option value="HKD">Breads</option>
                                <option value="HKD">TWN</option>
                                <option value="HKD">RMB</option>
                                <option value="USD">USD</option>
                                <option value="HKD">HKD</option>
                            </select>
                            </td>
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
                            <td colspan="2">
                                Total Overall Calories: &nbsp; &nbsp;<span class="badge badge-pill badge-light"><h4>xxx</h4></span>
                            </td>
                            <td colspan="2">
                                Your Calorie Goal:  &nbsp; &nbsp;<span class="badge badge-pill badge-light"><h4>xxx</h4></span>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </center>
    )
}

export default MenuTable;
