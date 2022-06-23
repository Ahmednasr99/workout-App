import React from "react";
import { useState } from "react";
import EditMealForm from "./EditMeal";
import { FaPencilAlt} from "react-icons/fa";


const EditBtn = ({element}) =>{
    const [isVisible,setIsVisible] = useState(false)
    return(<div>
        <div><button title="Edit" onClick={()=>setIsVisible(!isVisible)}><FaPencilAlt /></button></div>
        <div style={{display:isVisible?"block":"none"}}><EditMealForm element={element}/></div>
        </div>
    )
}

export default EditBtn
