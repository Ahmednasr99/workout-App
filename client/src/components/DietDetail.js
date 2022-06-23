import React from "react";
import AddDiet from "./AddDiet";
import CheckBox from "./CheckBox";
import EditBtn from "./EditBtn";
import {  FaTrash } from "react-icons/fa";


const DietDetail = ({diets})=>{
 const handleDelete = async()=>{
    const {id}=diets[0]
    let req = await fetch(`/diets/${id}`,{
      method: "DELETE",
    })
    if(req.ok){
      alert("delete sucess")
      }
    }
    return(
    <div className="mealsContainer">{
      diets.length!==0?
    <>
    <div >
      {diets.map(r => <div className="mainContainer">
          <p>Daily meals</p>
          <button title="Delete" onClick={handleDelete}><FaTrash/></button>
          <div class="tableContainer">
          <div class="table">
		<div class="table-header">
			<div class="header__item">Meal Detail</div>
			<div class="header__item">check</div>
			<div class="header__item">Edit</div>
		</div>
    {r.meals.map(element=>
		<div class="table-content">	
			<div class="table-row">		
				<div class="table-data">{element.content}</div>
				<div class="table-data"><CheckBox  element={element}/></div>
				<div class="table-data"><EditBtn  element={element} /></div>
			</div>
		</div>)}
	
</div>
           </div>
          </div>)}
        
      </div>{/*<Link to="/diets/:id/edit"><button>Edit</button></Link>*/} 
        
        </>
        :
        <div>
          <AddDiet/>
        </div>
    
    }
      </div>
    )

}
export default DietDetail


/*<div class="container">
	
	<div class="table">
		<div class="table-header">
			<div class="header__item">Meal Detail</div>
			<div class="header__item">check</div>
			<div class="header__item">Edit</div>
		</div>
    {r.meals.map(element=>
		<div class="table-content">	
			<div class="table-row">		
				<div class="table-data">{element.content}</div>
				<div class="table-data"><CheckBox element={element}/></div>
				<div class="table-data"><EditBtn element={element} /></div>
			</div>)}
		</div>	
	</div>
</div>*/