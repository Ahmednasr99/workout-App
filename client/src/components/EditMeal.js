import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";

const EditMealForm = ({element})=>{

console.log(element)

 /* let elementarray =  diets.map(element=>element.meals)
 elementarray is an array of objects
console.log(elementarray)*/
const {id}=element
    
    /*use state to update the form */
    const [form, setForm] = useState({content: '', ongoing:false})
    /*define the function updateform */
    useEffect(() => {
        fetch(`/meals/${id}`)
          .then((res) => res.json())
          .then((diet) => setForm(diet));
      }, [id]);
    const updateForm =(e)=>{
        setForm({...form, [e.target.getAttribute('name')]: e.target.value})}
        /* redirect to specific route*/
        const history = useHistory()
        
    return(
        <div className="sumbitFormarea">
        <h3>Edit Your Meal</h3>
        <form onSubmit={async (e) => {
        e.preventDefault()
        
        let req = await fetch(`/meals/${id}`, {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(form) 
        })
        let res = await req.json()
        console.log(res)
        setForm((prevState) => {return [...prevState, res]})
        alert("done")
        history.push(`/diets`)
      }} >
          Content:<input type="text" 
           placeholder="meal" 
           name="content"
           value={form.content}
           onChange={e => updateForm(e)}/>
          <button type="submit">Submit</button>
        </form>
        </div>
    )
}
export default EditMealForm