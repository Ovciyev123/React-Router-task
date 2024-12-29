import React, { useContext } from 'react'
import { FavoritesContext } from '../../../Context/FavoritesContext'

function Favorites() {

  let  {favorites,setFavorites}=useContext(FavoritesContext)

  function favoritedelete(id){

    const basket=(favorites.filter(item=>item.id!==id))

    setFavorites([...basket])
  }


  return (
    <>
{favorites.length==0 ? (
        <h2 className='favoritesh2'>Sizin Favoritesiniz Boşdur</h2>
      ):(
        <div className="table-div favoritestable  ">
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

{favorites.map((favorite,index)=>(



    <tr key={index}>
      <th scope="row"> <img  src={`${favorite.image}`} class="card-img-top " alt="..."/></th>
      <td>{favorite.title}</td>
      <td>{favorite.author}</td>
      <td>{favorite.genre}</td>
      <td>{favorite.language}</td>
      <td>{favorite.price}$</td>
      <td>{favorite.publishedYear} year</td>
      <td>{favorite.pagesCount} page</td>
      <td>{favorite.description}</td>
      <td><button onClick={()=>favoritedelete(favorite.id)} className='btn btn-outline-danger'>x</button></td>
    </tr>
  ))
}
    
</tbody>
</table>
</div>
      )}

  

    

    </>
  )
}

export default Favorites