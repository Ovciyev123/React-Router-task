import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik';
import { FavoritesContext } from '../../../Context/FavoritesContext';
import { BasketContext } from '../../../Context/BasketContext';

function Books() {

  let  {favorites,setFavorites}=useContext(FavoritesContext)

  let  {basket,setbasket}=useContext(BasketContext)

  let[data,setdata]=useState([])

  let [btncolor,setbtncolor]=useState("rgb(228, 228, 228)")




  function Handlefavorite(book){
    let findFavorite=favorites.find(favorite=>favorite.id==book.id)
    if(findFavorite){
        alert("Bu mehsul artiq favoritesde movducddur")
    }else{
        setFavorites([...favorites,book])
        
     
    }


}




function Handlebasket(book){
  let findbasket=basket.find(bookbasket=>bookbasket.id==book.id)
  if(findbasket){
      findbasket.count++
      setbasket([...basket])
  }else{
      setbasket([...basket,{...book,count:1}])
  }

}
  
    const formik = useFormik({
      initialValues: {
        search: ''
      },
      onSubmit: values => {
        const searchValue = values.search.trim().toLowerCase();
      if (searchValue == '') {
        setfiltereddata(data);
      } else {
      
        const filtered = data.filter((book) =>
          book.title.toLowerCase().includes(searchValue) 
        )
        setfiltereddata(filtered)
      }


    }});

  let [filtereddata,setfiltereddata]=useState([])
  let [sortOrder, setSortOrder] = useState('default'); 

  function getdata(){
    axios.get("http://localhost:3000/books")
    .then(res=>{setdata(res.data)
      setfiltereddata(res.data)
    })
  }
 function handleSortChange(e) {
  const order = e.target.value;
  setSortOrder(order);

  if (order === 'default') {
    setfiltereddata(data); 
  } else {
    let sortedBooks = [...filtereddata];
    if (order === 'asc') {
      sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'desc') {
      sortedBooks.sort((a, b) => b.title.localeCompare(a.title)); 
    }
    setfiltereddata(sortedBooks);
  }
  };


  useEffect(()=>{

    getdata()
  },[])
  return (
    <>
<div className="d-flex">
<form className='search ' onSubmit={formik.handleSubmit}>
  <h1>Search Book:</h1>
       <input class="form-control me-2"  id="search"
         name="search" type="search" placeholder="Search" aria-label="Search"  onChange={formik.handleChange}
         value={formik.values.search}/>
       <button class="btn btn-outline-success" type="submit">Search</button>
     </form>

     <div className="sort">
       <h1>Sort Books:</h1>
          <select
            className="form-select"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="default">Default</option>
            <option value="asc">Sort by name (A-Z)</option>
            <option value="desc">Sort by name (Z-A)</option>
          </select>
        </div>

    </div>

    



<div class="row">

{filtereddata.map((book,index)=>(

   

<div  key={index} class="col-4">    

<div class="card" >
 
  <img  src={`${book.image}`} class="card-img-top " alt="..."/>
  
 
    <div className="card-body">
    <h5 class="card-title">Name:{book.title}</h5>
    <h5 class="card-title">Author:{book.author}</h5>
    <h5 class="card-title">Genre:{book.genre}</h5>
    <h5 class="card-title">Language:{book.language}</h5>
    <h5 class="card-title">Price:{book.price}$</h5>
    <h5 class="card-title">PublishedYear:{book.publishedYear} year</h5>
    <h5 class="card-title">PagesCount:{book.pagesCount} page</h5>
    <p class="card-text"><b>Desc:</b>{book.description}</p>
 <div className="icon"> <a href={`/book/${book.id}`} class="btn btn-outline-primary"><i className="fa-solid fa-circle-info"></i></a>
  <i onClick={()=>Handlefavorite(book)} className="fa-solid haertbtn fa-heart" style={{color:btncolor}}></i>
  <button onClick={()=>Handlebasket(book)} className='btn btn-outline-danger'><i  class="fa-solid fa-basket-shopping"></i> add basket</button></div>
  </div>
</div>
</div>
  ))
}
    
</div>
    
    </>
  )
}

export default Books