import React from "react";
import { useState,useEffect } from "react";


const CheckBox = ({element})=>{
    const [checked,setChecked] = useState(true)
    const [complete,setComplete]= useState(false)
    const {id}=element
    useEffect(() => {
        fetch(`/meals/${id}`)
          .then((res) => res.json())
          .then((r) => setComplete(r.ongoing));
          
      }, [id]);

    const changeC=() => {
        fetch(`/meals/${id}`)
          .then((res) => res.json())
          .then((r) => setComplete(r.ongoing));
      }




    const handleChange = async()=>{
        setChecked(!checked)
        const done = {ongoing: checked}
        let req = await fetch(`/meals/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(done) 
          })
          let res = await req.json()
          console.log(res)
          
          let request = await fetch(`/meals/${id}`)
          let response  = await request.json()
          console.log(response)
    }
    
     
    
    return(
        <div>
            <input title="mark as done" type="checkbox" name="done" id="check" onChange={()=>{handleChange();changeC()}} />
            
            <label id="label1">{complete?"Done":""}</label>
        </div>
    )
}
export default CheckBox