import React from 'react'
import UserNavbar from '../../Components/User/UserNavbar'
import UserFooter from '../../Components/User/UserFooter'
import { Outlet } from "react-router"


function Userroot() {
  return (

  <>
  <UserNavbar/>
  <Outlet/>
  <UserFooter/>
  </>
  )
}

export default Userroot