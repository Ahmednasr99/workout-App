import React from "react";
import { Link } from "react-router-dom";
import {useHistory } from "react-router-dom";
import { FcHome } from "@react-icons/all-files/fc/FcHome";
import { FcCalculator } from "@react-icons/all-files/fc/FcCalculator";
import {FcList } from "@react-icons/all-files/fc/FcList";
import { MdFoodBank } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiStoneWall } from "react-icons/gi";
import { RiMiniProgramFill } from "react-icons/ri";


function Navigation({ setIsAuthenticated, setUser, user}) {
    const history = useHistory()
    const logout = () => {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser(null)
        })
        .then(()=>{
            history.push(`/`)
        })
    }
    return (
        
   
   <header className="header">
        <div className="headerItems">
         
            <Link to="/"><FcHome/>Home</Link>

            <Link to="/diets"><MdFoodBank/>Diet</Link>

            <Link to="/workouts"><GiWeightLiftingUp/>Workout </Link>

            <Link to="/workoutplans"><RiMiniProgramFill/>Workout Programs</Link>
                
            <Link to="/champions"><GiStoneWall/>Wall Of Fame</Link>

            <Link to="/calculator"><FcCalculator/>Calculator</Link>
                

            <Link to="/calorieslist"><FcList/>Calories List</Link>
    
            
            <button  onClick={logout}>Logout</button>
            

        </div>
    </header>

        
    )
}

export default Navigation;

