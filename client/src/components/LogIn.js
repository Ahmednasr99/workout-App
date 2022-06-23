import React, { useState } from 'react'
import Auth from './Auth'

const Login = ({setUser,setIsAuthenticated})=>{

    const [username,setUsername]= useState('')
    const [password,setPassword]= useState('')
    const [error,setError]= useState([])
    const [show,setShow] = useState(false)
    
    const onSubmit=(e)=>{
        e.preventDefault()
        const user = {
            username: username,
            password
        }

        const request =async ()=>{
            let req = await fetch('/login',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(user)

            })
            if(req.ok){
                let res = await req.json()
                console.log(res)
                setUser(res)
                setIsAuthenticated(true)/*this is to change the state to  true to render the rest of components after user login*/ 
            }else{
                let res = await req.json()
                console.log(res)
                setError(res)
            }
        }
        request()
    }

    return(
        <div className='components'>
            <div>
            <div className='sidePic'>
                <img src='https://i.pinimg.com/originals/32/35/08/3235080bc4e1cc9192097c991d9ce381.jpg' alt=''/>
            </div>
            </div>
            <div className='divElement'>
            <form className='formarea' onSubmit={onSubmit}>
                <br></br>
            <label>Username<br></br>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </label>
            <br></br>
            <label>Password<br></br>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <br></br>
            <br></br>
            <input type="submit" value="Login" />
            </form>
            {error?<div>{error}</div>:null}<br></br>
            <div className='signupBtn'>
            <button onClick={()=>setShow(!show)}>sign up</button>
            </div>
            <div style={{display:show?"block":"none"}} ><Auth setUser={setUser} setIsAuthenticated={setUser}/></div>
            {error?<div>{error}</div>:null}
            </div>
        </div>
    )
}

export default Login
