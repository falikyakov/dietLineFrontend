import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Login from "./components/user/Login";
import Home from "./components/Home";
import SignUp from './components/user/SignUp';
import FoodCatContainer from './components/foods/FoodCatContainer';
import FoodDetails from './components/foods/FoodDetails';
import FoodsComponent from './components/foods/FoodsComponent';
import Dashboard from './components/user/Dashboard';
import WelcomeUser from './components/user/welcomeUser';
import Profile from './components/user/profile';
import NewDietPlan from './components/user/newDietPlan';
import CheckLogin from './components/user/checkLogin';
import Menu_v2 from './components/not used/menu_v2';
import TestCal from './components/not used/testCal';
import Testimonials from './components/testimonials/Testimonials';
import DailyInsert from './components/user/DailyInsert';
import MenuView from './components/user/MenuView';
import NewFoodCatContainer from './components/foods/NewFoodCatContainer';
import DailyPlan from './components/user/DailyPlan';
import CategoryDetails from './components/foods/CategoryDetails';
import Tips from './components/HealthInfo/Tips';
import userGraph2 from './components/user/userGraph2';
import WeeklyUpdate from './components/user/WeeklyUpdate';
import ViewGoals from './components/user/ViewGoals';
import CheckUser from './components/user/CheckUser';
import ArticlePage from './components/Articles/ArticlePage';



function App() {

  return (
    <div className="bg">
      <Router >
        <NavBar />
        <Route path="/foods/:foodName" component={FoodsComponent} />
        <Route path="/details/:fdcid" component={FoodDetails} />
        <Route path="/foodCats" component={FoodCatContainer} />
        <Route path="/newFoodCats" component={NewFoodCatContainer} />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dash" component={Dashboard} />
        <Route path="/welcome/:firstName/:lastName" component={WelcomeUser} />
        <Route path="/profile" component={Profile} />
        <Route path="/newPlan" component={NewDietPlan} />
        <Route path="/checkLogin" component={CheckLogin} />
        <Route path="/menu2" component={Menu_v2} />
        <Route path="/test" component={TestCal} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/dailyInsert" component={DailyInsert} />
        <Route path="/menuView" component={MenuView} />
        <Route path="/dailyPlan" component={DailyPlan} />
        <Route path="/categoryDetails/:categoryName" component={CategoryDetails} />
        <Route path="/tips" component={Tips} />
        <Route path="/graph2" component={userGraph2} />
        <Route path="/weeklyUpdate" component={WeeklyUpdate} />
        <Route path="/viewGoals" component={ViewGoals} />
        <Route path="/checkUser/:page" component={CheckUser} />
        <Route path="/articles" component={ArticlePage} />


      </Router>
    </div>
  );
}

export default App;
