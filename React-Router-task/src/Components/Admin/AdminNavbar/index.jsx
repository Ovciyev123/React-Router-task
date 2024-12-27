import React from 'react'

function AdminNavbar() {
  return (
   <>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
 <div className="logo"> <img src="https://www.freeiconspng.com/thumbs/bookstore-icon/book-store-icon-31.png" alt="Logo" width="60" height="60" class="d-inline-block align-text-top"/> Bookshop</div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="/admin">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/admin/books">Books</a>
        </li>
       </ul>
     
    </div>
  </div>
</nav>
   
   
   </>
  )
}

export default AdminNavbar