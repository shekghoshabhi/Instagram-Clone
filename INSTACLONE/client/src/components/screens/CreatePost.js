import React , {useState , useEffect} from 'react'
import { Link , useHistory} from "react-router-dom";
import  axios  from "axios";
import  M  from "materialize-css";

function CreatePost() {
const [image , setImage] = useState("");
const [title,setTitle] = useState("");
const [body , setBody] = useState("");

const history = useHistory()

useEffect(()=>{

    if(image){
    
        const URL = "/createpost"   

      const  data = {
        title,
        body,
        picture : image ,
      }

      const headers = {
        'Content-Type': 'application/json',
         'Authorization' : 'Bearer '+localStorage.getItem('jwt_token')
      }

       axios.post(URL,data,{
           headers:headers
       })
       .then((res)=>{
        M.toast({html:"New Post Created Successfully"})
        history.push('/')
       })
       .catch((err)=>{
           console.log(err)
       })
       

    }

},[image])

const handlePostSubmit = ()=>{



    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","insta-clone")
    data.append("cloud_name","cnq")
    fetch("https://api.cloudinary.com/v1_1/dwoj3miu6/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
       setImage(data.url)
    })
    .catch(err=>{
        console.log(err)
    })


// create post api call

  




}


    return (
        <div className="card input-filed"
        style={{
            margin:"30px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}
        >
            <input 
            type="text"
             placeholder="title"
             value={title}
             onChange={e=>setTitle(e.target.value)}
             />
            <input
             type="text"
              placeholder="body"
              value={body}
              onChange={e=>setBody(e.target.value)}
              />
            <div className="file-field input-field">
             <div className="btn #64b5f6 blue darken-1">
                 <span>Uplaod Image</span>
                 <input  type="file" onChange={(e)=>setImage(e.target.files[0])} />
             </div>
             <div className="file-path-wrapper">
                 <input className="file-path validate" type="text" />
             </div>
             </div>
             <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
              onClick={handlePostSubmit}
             >
                 Submit post
             </button>
 
        </div>
    )
}

export default CreatePost
