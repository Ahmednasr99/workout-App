import React, {useState} from "react";

import {useHistory } from "react-router-dom";
const AddWorkout = ()=>{
  const [form, setForm] = useState({monday: '', tuesday: '', wednesday: '', thursday:'',friday:'',saturday:'',sunday:''})
  const history = useHistory()
  const updateForm =(e)=>{
    setForm({...form, [e.target.getAttribute('name')]: e.target.value})}
    return (
        <div className="sumbitFormarea">
        <h1>Add Your Workout</h1>
        <form className="newpost" onSubmit={async (e) => {
        e.preventDefault()
        let req = await fetch("/workouts", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(form) 
        })
        let res = await req.json()
        console.log(res)
        /*setForm((prevState) => {return [...prevState, res]})*/
        alert("done")
        history.push(`/workouts`)
      }} ><div className="innerForm">
          <input type="text"  placeholder="monday" name="monday" value={form.monday} onChange={e => updateForm(e)}/>
          <input type="text" placeholder="tuesday" name="tuesday" value={form.tuesday} onChange={e => updateForm(e)} />
          <input type="text" placeholder="wednesday" name="wednesday" value={form.wednesday} onChange={e => updateForm(e)} />
          <input type="text"  placeholder="thursday" name="thursday" value={form.thursday} onChange={e => updateForm(e)}/>
          <input type="text" placeholder="friday" name="friday" value={form.friday} onChange={e => updateForm(e)} />
          <input type="text" placeholder="saturday" name="saturday" value={form.saturday} onChange={e => updateForm(e)} />
          <input type="text" placeholder="sunday" name="sunday" value={form.sunday} onChange={e => updateForm(e)} /><br></br>
          <button type="submit">Submit</button></div>
        </form>
        </div>
      );

      
}

export default AddWorkout