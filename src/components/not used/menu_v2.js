import React,{useState} from 'react'
import { Container, Row } from 'react-bootstrap';
import foodList from '../foods/foodsComponentList';


const Menu_v2 = () => {

    const [breakfastArray, setBreakfastArray] = useState([]);
    const [lunchArray, setLunchArray] = useState([]);
    const [dinnerArray, setDinnerArray] = useState([]);

    const changeBreakfastArray = (e) => {
        setBreakfastArray([...breakfastArray, e.target.value]);
    }
    const changeLunchArray = (e) => {
        setLunchArray([...lunchArray, e.target.value]);
    }
    const changeDinnerArray = (e) => {
        setDinnerArray([...dinnerArray, e.target.value]);
    }

    return (
        <center style={{margin:"25px"}}><br /><br />
            <Row >
                Breakfast
                <select onChange={changeBreakfastArray}>
                    <option value="" disabled selected hidden>Add a food</option>
                    {foodList.Breads.map((food, index) => {
                        return <option key={index} value={food.name}>{food.name}</option>
                    })}
                </select> &nbsp; &nbsp; &nbsp;
                Lunch
                 <select onChange={changeLunchArray}>
                    <option value="" disabled selected hidden>Add a food</option>
                    {foodList.Breads.map((food, index) => {
                        return <option key={index} value={food.name}>{food.name}</option>
                    })}
                </select> &nbsp; &nbsp; &nbsp;
                Dinner
                 <select onChange={changeDinnerArray}>
                    <option value="" disabled selected hidden>Add a food</option>
                    {foodList.Breads.map((food, index) => {
                        return <option key={index} value={food.name}>{food.name}</option>
                    })}
                </select> &nbsp;
            </Row>
            <br/>
            <Row style={{marginLeft:"25px"}}>
                <div style={{width:"200px"}}>
                    <Row><h2><u><strong>Breakfast</strong></u></h2></Row>
                    {
                        breakfastArray.map((food,index) => {
                            return <Row key={index}>
                                <h6>{food}</h6>
                            </Row>
                        })
                    }
                </div>
                <div style={{ width: "200px" }}>
                    <Row><h2><u><strong>Lunch</strong></u></h2></Row>
                    {
                        lunchArray.map((food, index) => {
                            return <Row key={index}>
                                <h6>{food}</h6>
                            </Row>
                        })
                    }
                </div>
                <div style={{ width: "200px" }}>
                    <Row><h2><u><strong>Dinner</strong></u></h2></Row>
                    {
                        dinnerArray.map((food, index) => {
                            return <Row key={index}>
                                <h6>{food}</h6>
                            </Row>
                        })
                    }
                </div>
            </Row>
        </center>
    )
}

export default Menu_v2
