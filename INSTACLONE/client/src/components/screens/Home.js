import React , {useState , useEffect} from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Loader from 'react-loader-spinner'
import axios from "axios";
import { Link } from "react-router-dom";


function Home() {

const [post , setPost] = useState([])


useEffect(()=>{
  fetch('/allposts',{
      headers:{
        'Content-Type': 'application/json',
          
      }
  }).then(res=>res.json())
  .then(result=>{
      console.log(result.posts)

      setPost(result.posts)
      // console.log(result.posts[0])

  })
},[])




    return (

            
      <div style={{width:"60%"}} >
      


{
  post.map(item=>{
    return(


        


  <div className="row" style={{marginLeft:'20%',marginTop:'4%',height:'90%'}} key={item._id}>
            
            <div className="col s8 m6">
               <div className="card">
               <span className="card-title" style={{  margin:'40px',marginTop:'50px'}}><Link to={'/profile/'+ item.postedBy._id} >{item.postedBy.name}</Link></span>
             <div className="card-image">
                <img src={item.picture} style={{height:'40%'}}/>
                
                 </div>
                 <span className="card-title">{item.title} </span> 
                <div className="card-content">
           <p>{item.body} </p>
         </div>
         <div className="card-action">
           <input type='text' placeholder=' Add Comments' />
         </div>
       </div>
     </div>
   </div> 














    )
  })
}


      
      
      
      
      
      
</div>

      

        



        






  // <div className="row" style={{marginLeft:'20%',marginTop:'4%'}} >
            
  //           <div className="col s8 m6">
  //              <div className="card">
  //              <span className="card-title" style={{  margin:'40px',marginTop:'50px'}} >Card Title</span>
  //            <div className="card-image">
  //               <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8&auto=format&fit=crop&w=600&q=60"/>
                
  //                </div>
  //                <span className="card-title">Card Title</span> 
  //               <div className="card-content">
  //          <p>I am a very simple card. I am good at containing small bits of information.
  //          I am convenient because I require little markup to use effectively.</p>
  //        </div>
  //        <div className="card-action">
  //          <input type='text' placeholder=' Add Comments' />
  //        </div>
  //      </div>
  //    </div>
  //  </div> 

          

            

    )
}


export default Home