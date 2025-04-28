import UserList from "./components/UserList/UserList"
import Home from "./components/Home/Home"
import { Routes,Route, Outlet } from "react-router"
import Details from "./components/Details/Details"

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/list" element={<UserList/>}/>
    <Route path="/list/:id" element={<Details/>}/>
    </Routes>
     <Outlet/>
    </>
  )
}

export default App
