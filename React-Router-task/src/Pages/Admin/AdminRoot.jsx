import React from 'react'
import { Outlet } from "react-router"
import AdminNavbar from '../../Components/Admin/AdminNavbar'
import AdminFooter from '../../Components/Admin/AdminFooter'


function AdminRoot() {
  return (

  <>
  <AdminNavbar/>
  <Outlet/>
  <AdminFooter/>
  </>
  )
}

export default AdminRoot