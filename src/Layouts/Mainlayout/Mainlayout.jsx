import { Outlet } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

const Mainlayout = () => {

  return (
    <div className="border">
        <Navbar ></Navbar>
        <div className="min-h-[calc(100vh-284px)]">
        <Outlet />
        </div>
        <Footer></Footer>
        </div>
  )
}

export default Mainlayout