import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export const BasketContext = createContext()

function Basketprovider({children}) {
    let basketdata=JSON.parse(localStorage.getItem("basket"))
    
        let [basket, setbasket] = useState(basketdata ? basketdata : [])



        useEffect(() => {
            localStorage.setItem("basket", JSON.stringify(basket))
        }, [basket])
    
        const value = {
    
            basket, setbasket
        }
    
  return (
  <>

   <BasketContext.Provider value={value}>
                  {children}
              </BasketContext.Provider>
  
  </>
  )
}

export default Basketprovider