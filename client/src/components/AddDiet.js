import React, {useState} from "react";
import {useHistory } from "react-router-dom";
const AddDiet = ()=>{
  const [form, setForm] = useState({meal_1: '', meal_2: '', meal_3: '', meal_4:'',meal_5:'',meal_6:''})
  const history = useHistory()
  const updateForm =(e)=>{
    setForm({...form, [e.target.getAttribute('name')]: e.target.value})}
    return (
        <div className="sumbitFormarea">
        <h3>Add Your Diet</h3>
        <form className="newpost" onSubmit={async (e) => {
        e.preventDefault()
        let req = await fetch("/diets", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(form) 
        })
        let res = await req.json()
        console.log(res)
       /*setForm((prevState) => {return [...prevState, res]})*/
        alert("done")
        history.push(`/diets`)
      }} ><div className="innerForm">
          <input type="text"  placeholder="meal_1" name="meal_1" value={form.meal_1} onChange={e => updateForm(e)}/><br></br>
          <input type="text" placeholder="meal_2" name="meal_2" value={form.meal_2} onChange={e => updateForm(e)} /><br></br>
          <input type="text" placeholder="meal_3" name="meal_3" value={form.meal_3} onChange={e => updateForm(e)} /><br></br>
          <input type="text"  placeholder="meal_4" name="meal_4" value={form.meal_4} onChange={e => updateForm(e)}/><br></br>
          <input type="text" placeholder="meal_5" name="meal_5" value={form.meal_5} onChange={e => updateForm(e)} /><br></br>
          <input type="text" placeholder="meal_6" name="meal_6" value={form.meal_6} onChange={e => updateForm(e)} /><br></br>
          <button type="submit">Submit</button></div>
        </form>
        </div>
      );

      
}

export default AddDiet