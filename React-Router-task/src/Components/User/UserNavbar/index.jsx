import React from 'react'


function UserNavbar() {



  return (
   <>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
 <div className="logo"> <img src="https://www.freeiconspng.com/thumbs/bookstore-icon/book-store-icon-31.png" alt="Logo" width="60" height="60" class="d-inline-block align-text-top"/> Bookshop</div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/books">Books</a>
        </li>
       </ul>
       <div className="d-flex">
       <a href="/favorites" className='btn btn-outline-success'><i class="fa-regular fa-heart"></i></a>
       <a href="/basket" className='btn btn-outline-danger'><i  class="fa-solid fa-basket-shopping"></i></a>
       </div>
     
    </div>
  </div>
</nav>
   </>
  )
}

export default UserNavbar