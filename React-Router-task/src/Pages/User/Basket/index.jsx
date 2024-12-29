import React, { useContext, useEffect, useState } from 'react'
import { BasketContext } from '../../../Context/BasketContext'

function Basket() {

  let  {basket,setbasket}=useContext(BasketContext)

  let [totalPrice,setTotalPrice]=useState(0)

  function handledelete(id){

    const basket1=(basket.filter(item=>item.id!==id))

    setbasket([...basket1])
  }

  function handleincrease(book){

    book.count++
    setbasket([...basket])
    



   
   
  }

  function handletotalprice(){
    let total=basket.reduce((acc,cur)=>acc+cur.count*cur.price,0)
    setTotalPrice(total)
  }

  useEffect(()=>{
    handletotalprice()
  },[basket])


  function handledecrease(book){
    if(book.count>1){
      book.count--
      setbasket([...basket])
    }else{
      let filtered=basket.filter(elem=>elem.id!=book.id)
      setbasket(filtered)
    }
    }



  return (
    <>{basket.length==0 ? (
      <h2 className='basketh2'>Sizin Basketiniz Boşdur</h2>
    ):(
      <div className="table-div baskettable">
<table class="table table-hover table-bordered table-light">
<thead>
  <tr>
    <th scope="col">Image</th>
    <th scope="col">Name</th>
    <th scope="col">Author</th>
    <th scope="col">Genre</th>
    <th scope="col">Language</th>
    <th scope="col">PublishedYear</th>
    <th scope="col">PagesCount</th>
    <th scope="col">Price</th>
    <th scope="col">Total Price</th>
    <th scope="col">Count</th>
    <th scope="col"></th>
  </tr>
</thead>
<tbody>

{basket.map((book,index)=>(



  <tr key={index}>
    <th scope="row"> <img  src={`${book.image}`} class="card-img-top " alt="..."/></th>
    <td>{book.title}</td>
    <td>{book.author}</td>
    <td>{book.genre}</td>
    <td>{book.language}</td>
    <td>{book.publishedYear} year</td>
    <td>{book.pagesCount} page</td>
    <td>{book.price.toFixed(2)}$</td>
    <td>{(book.price*book.count).toFixed(2)}$</td>
    <td className='countbook'>
        <button onClick={()=>handledecrease(book)} className='btn btn-success'>-</button>
        <span>{book.count}</span>
        <button  onClick={()=>handleincrease(book)} className='btn btn-success'>+</button>
    </td>
    <td>
      <button onClick={()=>handledelete(book.id)} className='btn btn-danger'>x</button>
      </td>
  </tr>
))
}
  
</tbody>
</table>
</div>
    )}

  <div className="totalprice btn btn-primary">TotalPrice: {(totalPrice).toFixed(2)}$</div>
</>
  )
}

export default Basket