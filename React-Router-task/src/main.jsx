import { BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import FavoritesProvider from "./Context/FavoritesContext.jsx";
import Basketprovider from "./Context/BasketContext.jsx";

createRoot(document.getElementById('root')).render(
    <FavoritesProvider>
    <Basketprovider>
    <App />
    </Basketprovider>
    </FavoritesProvider>
)
