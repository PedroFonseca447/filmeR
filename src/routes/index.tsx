import { BrowserRouter, Route , Routes} from "react-router-dom"
import { Header } from "../components/Header"
import { Home } from "../pages/home"
import { Login } from "../pages/login"
export function AppRoutes(){
    return(

        <BrowserRouter>
            <Header>

            </Header>
            <Routes>
                <Route path= "/" element={<Home/>}></Route>
            </Routes>
            <Routes>
            <Route path= "/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}