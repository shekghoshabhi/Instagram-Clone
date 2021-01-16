import React , {createContext, useContext ,useEffect, useReducer} from 'react'
import './App.css';
import { BrowserRouter , Route, Switch, useHistory } from "react-router-dom";

import  Navbar from './components/Navbar.js'
import  Home from "./components/screens/Home.js";
import SignIn from './components/screens/SignIn';
import SignUp from './components/screens/SignUp';
import MyProfile from './components/screens/MyProfile';
import CreatePost from './components/screens/CreatePost';

import { userReducer , initialState} from "./reducers/userReducer";
import UserProfile from './components/screens/UserProfile';

export const userContext = createContext()


function Routing(){

const history = useHistory()
const {state, dispatch} = useContext(userContext)
useEffect(() => {

  

  const user = JSON.parse(localStorage.getItem("user"))
  if(user){
    dispatch({type:"USER",payload:user})
// console.log(state , "-----------")
    history.push('/')
  }
  else{
    history.push('/signin')
  }

 
}, [])

  return(
    <Switch>
      <Route exact path='/' >
          <Home/>
    </Route>
    <Route path='/signin'>
        <SignIn style={{padding:"100px"}}/>
    </Route>
    <Route path='/signup'>
       <SignUp/>
    </Route>
    <Route path='/myposts'>
       <MyProfile/>
    </Route>
    <Route path='/createpost'>
       <CreatePost/>
    </Route>
    <Route exact path='/profile/:id'>
       <UserProfile/>
    </Route>
    </Switch>
  )


}

function App() {
const [state, dispatch] = useReducer(userReducer , initialState )

  return (
    <userContext.Provider  value={{state , dispatch}}>
    <BrowserRouter>
    <Navbar/>
    <Routing/>
    </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
