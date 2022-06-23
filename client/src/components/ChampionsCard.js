
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import DltButton from "./DltButton";
import Search from "./Search";

const ChampionCard = ()=> { 
  const [champions,setChampions]=useState([])
  const [allChampions,setAllChampions]=useState([])
 // eslint-disable-next-line react-hooks/exhaustive-deps
 const request = async () => {
  let req = await fetch('/champions')
  let res = await req.json()
  console.log(res)
  setChampions(res)  
  setAllChampions(res)
}
useEffect(request,[])
    return (
    <>
        <Link to="/champions/new"><button>Add Champion</button></Link>
        <Search setChampions={setChampions} champions={champions} allChampions={allChampions}  />
      <div style={{backgroundImage: `url(https://t4.ftcdn.net/jpg/02/57/65/13/240_F_257651358_mgb0VrHgGqNSKNjiJSltEsaHhY35RtT4.jpg)` }}>
          
        {
          champions.map((champion) =>{
            return(
              <div>
                <div className="container">
                  <div className="card card0" style={{backgroundImage: `url(${champion.image_url})` }}>
                    <div className="border">
                    <h3>{champion.name}</h3>
                    <div className="opac">
                      <h5>{champion.nationality}</h5>
                      <h5>{champion.weight}lb</h5>
                      <h5>{champion.height}cm</h5>
                      <h5>{champion.category}</h5>
                      <h5>{champion.birthDate}</h5>
                      </div>
                    <div className="delete"><DltButton  champion={champion} setChampions={setChampions}/></div>
                    </div>
                  </div>
                </div>
              </div>
          )
          })
        }
      </div>
  </>
);
}
  
  export default ChampionCard