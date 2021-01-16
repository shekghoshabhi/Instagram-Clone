import { Typography } from '@material-ui/core'
import {Grid} from '@material-ui/core'
import axios from 'axios'
import React , {useState,useEffect , useContext } from 'react'
import { userContext } from "../../App";
import { useParams } from "react-router-dom";


export default function UserProfile() {

    const {state,dispatch} = useContext(userContext)

 const [user , setUser] = useState(null)


 const {id} = useParams()

    
useEffect(() => {

    console.log(id)
    axios.get('/profile/'+id,{
        headers:{
        "Authorization" : "Bearer "+ localStorage.getItem('jwt_token'),
        'Content-Type': 'application/json',
        }
    })
    .then((result)=>{
        console.log(result)
        // console.log(result.data.user.name)
        // console.log(result.data.posts[0].picture)
        setUser( result.data)
    }).catch(err=>{
        console.log(err)
    })

}, [])


// useEffect(()=>{
//     fetch(`/profile/${id}`,{
//         headers:{
//         'Content-Type': 'application/json',


//         }
//     }).then(res=>res.json())
//     .then(result=>{
//         console.log(result)
      
//          setUser(result)
//     })
//  },[])


// console.log('state',user)


    return (
        <>
        {
            user ?
        
            <>
             < div style={{display:'flex',margin:'0px 150px 0px 150px',borderBottom:'solid grey 1px'}} >
            <div>
                <img style={{borderRadius:"100px",height:'200px',width:'200px',margin:'100px'}} 
                src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=600&q=60"/>
            </div>
             
            <div style={{display:'flex' , flexDirection:'column', margin:'60px'}} >
              <div>
                  <h4 style={{marginLeft:'230px'}} >{user.user.name} </h4>
              </div>

                <div style={{display:'flex',margin:'30px'}} >
                <h5 style={{margin:'30px'}} >10 posts</h5>
                <h5 style={{margin:'30px'}} >100 followers</h5>
                <h5 style={{margin:'30px'}} >200 following</h5>
                </div>
            </div>
      
      <div style={{height:'5px',background:'black'}} ></div>

      </div>



<div style={{width:"68%" , marginLeft:'auto',marginRight:'auto' }}> 


{
user.posts.map(item =>{


  return(
       
      <div className="gallery" key={item._id}>
<img src={item.picture} alt="Mountains" width="600" height="400"/> 
</div>
  )
})
}
</div>


</>

            
            
            : <h2>LOADING...</h2>
        }
           









     
        </>
    )
}
