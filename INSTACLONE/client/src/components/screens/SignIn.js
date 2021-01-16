import React , {useState , useContext} from 'react'
import { Link , useHistory} from "react-router-dom";
import  axios  from "axios";
import  M  from "materialize-css";

import { userContext } from "../../App";


 function SignIn() {

  const {state,dispatch} = useContext(userContext)


const history = useHistory()
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const signInHandler = ()=>{
        const URL = "/signin"

        if( email=== "" || password===""){
          M.toast({html: 'Please Fill All the Fields'})
        }

        const data = JSON.stringify({
            
            email,
            password
        })

        const headers = {
          'Content-Type': 'application/json',
         
        }
        

        axios.post(URL, data, {
          headers:headers
        })
        .then((response) => {
            localStorage.setItem("jwt_token",response.data.jwt_token)
            localStorage.setItem("user",JSON.stringify(response.data.user))

            dispatch({type:'USER',payload:response.data.user})

          M.toast({html:"user sign Up Successfully"})
          history.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }

  
    return (
        <div className="mycard">
        <div className="card auth-card input-field">

            
          <h2>Instagram</h2>
          <input
          type="text"
          placeholder="email"
           value={email}
           onChange={e=>setEmail(e.target.value)}
          />
          
           

          <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e=>  setPassword(e.target.value)}
          />
          <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
               onClick={signInHandler}
          >
              Login
          </button>


          <h5>
              <Link to="/signup">Dont have an account ?</Link>
          </h5>
          <h6>
              <Link to="/reset">Forgot password ?</Link>
          </h6>
  
      </div>
    </div>
    )
}

export default SignIn ;