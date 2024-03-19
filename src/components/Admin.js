import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Style/Admin.css'

export const Admin = () => {
  const[post,setPost]=useState([])
    const[item,setitem]=useState('')
    const[stock,setstock]=useState()
    const[img,setimg]=useState()
    const[price,setprice]=useState()
    useEffect(()=>{
        axios.get('http://localhost:3001/student')
        .then(res=>setPost(res.data))
        .catch(err=>console.log(err))
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        if( item == null || stock == null||img == null || price==null)
        alert("Enter valid Data")
    else
        axios.post(`http://localhost:3001/student`,{"item":item,"stock":stock,"img":img,"price":price})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    const handleDelete=(id) => {
        axios.delete(`http://localhost:3001/student/${id}`)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
      const[popup,setPopup]=useState(false)
      const[id1,setId1]=useState()
      const[item1,setitem1]=useState('')
      const[stock1,setstock1]=useState()
      const[img1,Setimg1]=useState()
      const[price1,Setprice1]=useState()
  
  
      const openpopup=(datas)=>{
          setPopup(true)
          setId1( datas.id)
          setitem1( datas.item)
          setstock1(datas.stock)
          Setimg1(datas.img)
          Setprice1(datas.price)
      }
      let handleupdate = () =>{
          axios.put(`http://localhost:3001/student/${id1}`,{
              "id":id1,
              "item":item1,
              "stock":stock1,
              "img":img1,
              "price":price1
            })
          .then(res=>console.log(res))
          .catch(err=>console.log(err))
      }

  
  return (
    <div>
       
    <form onSubmit={handleSubmit}>
    
       
    <h1>User Details</h1>
        <label>Item:</label>
        <input type='text' value={item} onChange={(e)=>{
            setitem(e.target.value)}}/><br></br><br></br>
         <label>Stock:</label>
          <input type='text' value={stock} onChange={(e)=>{
            setstock(e.target.value)}}/><br></br><br></br>
               <label>Add Image url:</label>
          <input type='text' value={img} onChange={(e)=>{
            setimg(e.target.value)}}/><br></br><br></br>
            <label>Price:</label>
          <input type='text' value={price} onChange={(e)=>{
            setprice(e.target.value)}}/><br></br><br></br>

    <button type='submit'>Submit</button><br></br><br></br>
    </form>
    <div className="table-container">
    <table style={{marginLeft:'300px',marginTop:'30px'}} className='custom-table'>
             <thead>
                   <tr>
                        <th>user id</th>
                        <th>item</th>
                        <th>stock</th>
                        <th>img</th>
                        <th>price</th>
                        <th>Action</th>
                   </tr>
             </thead>
             <tbody >
                {post.map(x=>(
                <tr>
                      <td>{x.id}</td>
                      <td>{x.item}</td>
                      <td>{x.stock}</td>
                      <td>{<img className="image-user" alt="user profile" src={x.image} height={150} width={150} />}</td>
                      <td>{x.price}</td>
                      <td>
                        <button style={{width:'200px'}}onClick={()=>{
                            openpopup(x)
                        } 
                        }>Update</button>  
                        <button  style={{width:'200px'}} onClick={()=>handleDelete(x.id)}>Delete</button>
                      </td>
                   </tr>
                   ))}
             </tbody>
         </table>
         </div>
         {popup && 
         <div className='popup-container'>  
         <button onClick={()=>{setPopup(false)}}>X</button>
            <form className='popup-form'>
            <label>ID:</label>
            <input type="number" value={id1} onChange={(e)=>setId1(e.target.value)}/><br></br>
            <label>item:</label>
            <input type="text" value={item1} onChange={(e)=>setitem1(e.target.value)}/><br></br>
            <label>stock</label>
            <input type="number" value={stock1} onChange={(e)=>setstock1(e.target.value)}/><br></br>
            <label>img</label>
            <input type="text" value={img1} onChange={(e)=>Setimg1(e.target.value)}/><br></br>
            <label>price</label>
            <input type="text" value={price} onChange={(e)=>Setprice1(e.target.value)}/><br></br>
            <button type='submit' onClick={handleupdate}>submit</button>
        </form >
        </div>}          
</div>  )
}
