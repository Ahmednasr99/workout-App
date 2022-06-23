import React from "react";
import { Link } from "react-router-dom";
import AddWorkout from "./AddWorkout";
import {  FaTrash } from "react-icons/fa";
import { FaPencilAlt} from "react-icons/fa";

const WorkoutDetails = ({workouts})=>{
    const handleDelete = async()=>{
        const {id}=workouts[0]
        let req = await fetch(`/workouts/${id}`,{
          method: "DELETE",
        })
        if(req.ok){
          alert("delete sucess")
          }
        }
    return(
      <div>
      {workouts.length!==0?
      <div>
        <div className="mainContainer">
        <p>Weekly Workout Plan</p>
        <div className="keys">
        <Link to="/workouts/:id/edit"><button title="Edit"><FaPencilAlt/></button></Link>
        <button title="Delete" onClick={handleDelete}><FaTrash/></button>
        </div>
    <div className="tableContainer">
    <div className="table">
    <div className="table-header">
			<div className="header__item">Week days</div>
			<div className="header__item">Workout</div>
		</div>
      <div>{workouts.map(element=>
		<div className="table-content">	
			<div className="table-row">		
				<div className="table-data">Monday</div>
				<div className="table-data">{element.monday}</div>
			</div>
      <div className="table-row">		
				<div className="table-data">Tuesday</div>
				<div className="table-data">{element.tuesday}</div>
			</div>
      <div className="table-row">		
				<div className="table-data">Wednesday</div>
				<div className="table-data">{element.wednesday}</div>
			</div>
      <div className="table-row">		
				<div className="table-data">Thursday</div>
				<div className="table-data">{element.thursday}</div>
			</div>
      <div className="table-row">		
				<div className="table-data">Friday</div>
				<div className="table-data">{element.friday}</div>
			</div>
      <div className="table-row">		
				<div className="table-data">Saturday</div>
				<div className="table-data">{element.saturday}</div>
			</div>
      <div className="table-row">		
				<div className="table-data">Sunday</div>
				<div className="table-data">{element.sunday}</div>
			</div>
		</div>
    )}
    </div>
    </div>
    </div>
    </div>

        </div>
      :
    
      <div><AddWorkout/></div>
    
    }
    </div>
    )
}
export default WorkoutDetails
