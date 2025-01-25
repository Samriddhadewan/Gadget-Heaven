import { Outlet } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"

const Mainlayout = () => {
    const styles = {
        backgroundColor: "#9538E2",
        color : 'white',
    }
  return (
    <div className="mx-8 mt-6">
        <div className="bg-[#9538E2] rounded-2xl h-[60vh]">
        <Navbar styles={styles}></Navbar>
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Mainlayout