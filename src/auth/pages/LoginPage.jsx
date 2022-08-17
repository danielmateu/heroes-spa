import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"


export const LoginPage = () => {

  

  const {login} = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogin = () =>{

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Daniel Mateu');

    navigate(lastPath, { 
      replace: true,
    })
  }
  return (
    <>
    <div className="container mt-4">
    <h1>Login</h1>

    <hr />

    {/* <div className="input-group input-group-default mb-3">
    <span 
    className="input-group-text" 
    id="inputGroup-sizing-default"
    >Name
    </span>

    <input 
    className="form-control "
    type="text" 
    placeholder="Username"
    aria-label="Sizing example input" 
    aria-describedby="inputGroup-sizing-default"
    />
    </div> */}

    {/* <div className="input-group input-group-default mb-3">
    <span 
    className="input-group-text" 
    id="inputGroup-sizing-default"
    >Password
    </span>

    <input 
    className="form-control "
    type="password" 
    placeholder="Insert Password"
    aria-label="Sizing example input" 
    aria-describedby="inputGroup-sizing-default"
    />
    </div> */}
    
    <button 
    onClick={onLogin}
    className="btn btn-outline-primary">Login</button>

    </div>
    </>
  )
}
