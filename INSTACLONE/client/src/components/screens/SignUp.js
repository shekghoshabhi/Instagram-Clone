import React , {useState } from 'react'
import { Link , useHistory} from "react-router-dom";
import  axios  from "axios";
import  M  from "materialize-css";

 const  SignUp = ()=> {
     const history = useHistory()
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const submitHandler = ()=>{
          const URL = "/signup"

          if(name==="" || email=== "" || password===""){
            M.toast({html: 'Please Fill All the Fields'})
          }

          const data = JSON.stringify({
              name,
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
            M.toast({html:"user sign in Successfully"})
            history.push('/signin')
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
            placeholder="name"
            value={name}
            onChange={e=>{setName(e.target.value)}}
            />
            <input
            type="text"
            placeholder="email"
            value={email}
            onChange={e=>{setEmail(e.target.value)}}
            />
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={e=>{setPassword(e.target.value)}}
            />
            <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Upload pic</span>
                <input type="file"  />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                onClick={submitHandler}
            >
                SignUP
            </button>
            <h5>
                <Link to="/signin">Already have an account ?</Link>
            </h5>
          </div>
          </div>   
               
    )
}


export default SignUp ;