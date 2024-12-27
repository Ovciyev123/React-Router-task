import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"


function Bookdetail() {

  let [data1,setdata1]=useState({})

  const {id}=useParams()

  function detaildata(id){



    console.log(id);
    

    
    

    axios.get(`http://localhost:3000/books/${id}`)
    .then(res=>setdata1(res.data))




  }

  useEffect(()=>{

    if(id){

      detaildata(id)
    }



  },[id])
  
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
 <div className="icon"> 
  <a href="/favorites" className='btn btn-success'><i class="fa-regular fa-heart"></i></a>
  <a href="/basket" className='btn btn-outline-danger'><i  class="fa-solid fa-basket-shopping"></i> add basket</a></div>
  </div>
</div>


    
    
    </>
    
  )
}

export default Bookdetail