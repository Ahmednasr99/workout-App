import React from "react";


const DltButton = ({champion,setChampions}) =>{
    const{id}=champion

    console.log(champion)
    

    const handleDelete =async()=>{
        let req = await fetch(`/champions/${id}`,{
          method: "DELETE",
        })
        if(req.ok){
          alert("delete sucess")
          setChampions((prevstate)=>{
            let arr = prevstate.filter((element)=>{
              return element.id!==id
            })
            return arr
          })
        }

      }
    
    return(
        <div>
            <button onClick={handleDelete}>x</button>
        </div>
    )
}
export default DltButton