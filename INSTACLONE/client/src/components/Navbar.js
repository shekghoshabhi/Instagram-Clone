import React ,{useContext , useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

import { userContext } from "../App";


function Navbar() {

  const {state, dispatch} = useContext(userContext)
const [clickState , setClickState] = useState('')




  const renderList = ()=>{
    if(state){

      return [
        <li><Link to="/myposts">Profile</Link></li>,
        <li><Link to="/createpost">Create Post</Link></li>,
        <li><Link to="/signin" onClick={
          ()=>{
            localStorage.clear()
            dispatch({type:"LOGOUT"})
          }
        } > Log out </Link></li>,
        // <li><Link to="/profile/5fda6b473eae434f140884fc">Profile</Link></li>,

      ]

    }else{
      return [
        <li><Link to="/signin">Sign In</Link></li>,
        <li><Link to="/signup">Sign Up</Link></li>
      ]
    }
  }


    return (
        
              <nav>
    <div className="nav-wrapper white">
      <Link to={state ?'/' : 'signin'} className="brand-logo">Logo</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
             
             {renderList()}

      </ul>
    </div>
  </nav>
        
    )
}

export default Navbar
