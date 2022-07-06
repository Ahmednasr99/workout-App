import React from "react";

const Home = ({name,user})=>{
    console.log(user)
    return(
        <div className="mainPage">
            <p className="textt">Welcome to Fitness world : {name.toUpperCase()}</p>
            <img  src="https://i.pinimg.com/736x/b1/b0/8e/b1b08e41ee4279a0629cba8a77da4745.jpg" alt=""/>
        </div>
    )
}

export default Home