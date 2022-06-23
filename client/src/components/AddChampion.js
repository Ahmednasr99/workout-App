import React, {useState} from "react";

import {useHistory } from "react-router-dom";
const AddChampion = ()=>{
  const [form, setForm] = useState({
   name: '',
   image_url: '',
   birthDate: '',
   weight:0,
   height:0,
   category:'',
   nationality:''})
  const history = useHistory()

  const updateForm =(e)=>{
    setForm({...form, [e.target.getAttribute('name')]: e.target.value})}

    return (
        <div className="sumbitFormarea">
        <h3>Add a Champion</h3>
        <form className="newpost" onSubmit={async (e) => {
        e.preventDefault()
        let req = await fetch("/champions", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(form) 
        })
        let res = await req.json()
        console.log(res)
        alert("done")
        history.push(`/champions`)
      }} ><div className="innerForm">
          Name:<input        type="text"  placeholder="Name" name="name" value={form.name}                 onChange={e => updateForm(e)}/><br></br>
          Image_url:<input   type="url"   placeholder="Image" name="image_url" value={form.image_url}      onChange={e => updateForm(e)} /><br></br>
          Birth Date:<input  type="date"  placeholder="Birth date" name="birthDate" value={form.birthDate} onChange={e => updateForm(e)} /><br></br>
          weight:<input      type="number"  placeholder="Weight" name="weight" value={form.weight}         onChange={e => updateForm(e)}/><br></br>
          Height:<input      type="number" placeholder="height" name="height" value={form.height}          onChange={e => updateForm(e)} /><br></br>
          Category:<input    type="text" placeholder="Category" name="category" value={form.category}      onChange={e => updateForm(e)} /><br></br>
          Nationality:<input type="text" placeholder="nationality" name="nationality" value={form.nationality}  onChange={e => updateForm(e)}/>
          <br></br>
          <button type="submit">Submit</button>
          </div>
        </form>
        </div>
      );

      
}

export default AddChampion