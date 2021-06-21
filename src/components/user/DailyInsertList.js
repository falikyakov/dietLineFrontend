import React from 'react';
import DailyInsertSubList from './DailyInsertSubList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaChevronRight } from "react-icons/fa";
import FoodList from '../foods/FoodList';


const DailyInsertList = (props) => {
    return (
        <div className="foodCategoryDropdown">
            <ul>
                {
                    FoodList.fullList.map((food, index) => {
                        return <li className="foodCategoryDropdownItem" key={index} onMouseLeave={props.onMouseLeave}>{food}<span className="angleRight"  ><FaChevronRight /></span>
                            <DailyInsertSubList category={food} func={props.func} />
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default DailyInsertList
