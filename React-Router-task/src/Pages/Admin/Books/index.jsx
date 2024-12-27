import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function AdminBooks() {
  
  let [data,setdata]=useState([])

  function getdata(){
    axios.get("http://localhost:3000/books")
    .then(res=>setdata(res.data)
    
    )
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
.then(()=>setdata(data.filter(element=>element.id!==id)))
        Swal.fire({
          title: "Deleted!",
          text: "Your book has been deleted.",
          icon: "success"
        });
      }
    });



      
  }



  useEffect(()=>{

    getdata()
  },[setdata])
  return (
    <>

<div className="table-div">
<a href="/admin/addbook" className='btn btn-outline-success'>Add Book</a>
<br /><br /><br /><br />

<table class="table table-hover table-bordered table-light">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Author</th>
      <th scope="col">Genre</th>
      <th scope="col">Language</th>
      <th scope="col">Price</th>
      <th scope="col">PublishedYear</th>
      <th scope="col">PagesCount</th>
      <th scope="col">Description</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

{data.map((book,index)=>(



    <tr key={index}>
      <th scope="row"> <img  src={`${book.image}`} class="card-img-top " alt="..."/></th>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.language}</td>
      <td>{book.price}$</td>
      <td>{book.publishedYear} year</td>
      <td>{book.pagesCount} page</td>
      <td>{book.description}</td>
      <td><div className="icon"> <a href={`/admin/book/${book.id}`} class="btn btn-outline-primary"><i class="fa-solid fa-circle-info"></i></a>
      <a href="/admin/editbook" class="btn btn-outline-warning">Edit</a>
      <a onClick={()=>deletedata(book.id)} class="btn btn-outline-danger">Delete</a>
</div></td>
     
    </tr>
  ))
}
    
</tbody>
</table>
</div>
    
    </>
  )
}

export default AdminBooks