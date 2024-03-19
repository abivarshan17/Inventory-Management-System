import react ,{useState,useEffect} from 'react';
import './User.css';
import axios from 'axios';
import { useAuth } from './Auth';

export const User = () => {

  const auth = useAuth()

  const[post,setpost]=useState([])
  useEffect(()=>{axios.get('http://localhost:3001/student').then(res=>{setpost(res.data)}).catch(err=>{console.log(err)})})

  const handleDelete=(id)=>{
    axios.delete(`http://localhost:3001/student/${id}`).then(()=>alert("Deleted!")).catch(err=>console.log(err))
  }

  return (
    <div>
      <div className='flex-container'>
        {post.map(x=>(<div className='flex-items'>
          {auth.user === "admin" && <div className='btn'><button onClick={()=>handleDelete(x.id)}>X</button></div>}
          <img src={x.img} width={150} height={150} />
        <h1>Item :{x.item}</h1>
        <p>Stock :{x.stock}</p>
        <p>Price :{x.price}</p>
        <button id='seemrk'>see items</button>
         </div>))}
      </div>
    </div>
    
  )
}
