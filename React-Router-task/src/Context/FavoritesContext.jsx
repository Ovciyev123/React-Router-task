import React, {  useEffect, useState } from 'react'
import { createContext } from 'react'
export const FavoritesContext = createContext()



function FavoritesProvider({ children }) {

    let favoritesdata=JSON.parse(localStorage.getItem("favorites"))

    let [favorites, setFavorites] = useState(favoritesdata ? favoritesdata : [])





    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const value = {

        favorites, setFavorites
    }

    return (
        <>

            <FavoritesContext.Provider value={value}>
                {children}
            </FavoritesContext.Provider>


        </>
    )
}

export default FavoritesProvider