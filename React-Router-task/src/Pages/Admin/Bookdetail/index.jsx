import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data, useNavigate, useParams } from "react-router-dom"
import Swal from 'sweetalert2'


function AdminBookdetail() {

  let [data1,setdata1]=useState({})
  let [navigate,setnavigate]=useState(true)

  const {id}=useParams()

  const bookspage = useNavigate()

  function detaildata(id){

   

    axios.get(`http://localhost:3000/books/${id}`)
    .then(res=>setdata1(res.data))

  }
  function deletedata(id){

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => { 
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/books/${id}`)
.then(()=> {
 
    Swal.fire({
      title: "Deleted!",
      text: "Your book has been deleted.",
      icon: "success"
    }
  ).then(()=>setnavigate(false))
  
  
  
 
}


)


       
      }
    });



      
  }


  useEffect(()=>{

    if(id){

      detaildata(id)
    }



  },[id])

  useEffect(() => {
    if (!navigate) {
      bookspage("/admin/books") 
    }
  }, [navigate, bookspage]);
  
  return (

    <>



 

<div   class="card card-detail" >
 
  <img  src={`${data1.image}`} class="card-img-top " alt="..."/>
  
 
    <div className="card-body">
    <h5 class="card-title">Name:{data1.title}</h5>
    <h5 class="card-title">Author:{data1.author}</h5>
    <h5 class="card-title">Genre:{data1.genre}</h5>
    <h5 class="card-title">Language:{data1.language}</h5>
    <h5 class="card-title">Price:{data1.price}$</h5>
    <h5 class="card-title">PublishedYear:{data1.publishedYear} year</h5>
    <h5 class="card-title">PagesCount:{data1.pagesCount} page</h5>
    <p class="card-text"><b>Desc:</b>{data1.description}</p>
    <div className="icon1">
      <a href={`/admin/editbook/${data1.id}` }class="btn btnedit btn-outline-warning">Edit</a>
      <a onClick={()=>deletedata(data1.id)} class="btn btndelete btn-outline-danger">Delete</a>
</div>
  </div>
</div>


    
    
    </>
    
  )
}

export default AdminBookdetail