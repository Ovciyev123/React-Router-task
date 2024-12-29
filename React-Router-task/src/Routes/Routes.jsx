import Addbook from "../Pages/Admin/Addbook"
import AdminRoot from "../Pages/Admin/AdminRoot"
import AdminBookdetail from "../Pages/Admin/Bookdetail"
import AdminBooks from "../Pages/Admin/Books"
import Dashboard from "../Pages/Admin/Dashboard"
import Editbook from "../Pages/Admin/Editbook"
import Basket from "../Pages/User/Basket"
import Bookdetail from "../Pages/User/Bookdetail"
import Books from "../Pages/User/Books"
import Favorites from "../Pages/User/Favorites"
import Home from "../Pages/User/Home"
import Userroot from "../Pages/User/Userroot"
















let ROUTES = [

    {
        path: "",
        element: <Userroot />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/books",
                element: <Books />,
            },
            {
                path: "/book/:id",
                element: <Bookdetail />,
            },

            {
                path: "/basket",
                element: <Basket />
            },
            {
                path: "/favorites",
                element: <Favorites />
            }
        ]



    },
    {
        path: "/admin",
        element: <AdminRoot />,
        children: [
            {
                path: "/admin",
                element: <Dashboard />,
            },
            {
                path: "/admin/books",
                element: <AdminBooks/>,
            },
            {
                path: "/admin/book/:id",
                element: <AdminBookdetail />,
            },

            {
                path: "/admin/addbook",
                element: <Addbook />
            },
            {
                path: "/admin/editbook/:id",
                element: <Editbook />
            }
        ]



    }




]


export default ROUTES