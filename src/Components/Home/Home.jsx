import { Outlet, useLoaderData } from "react-router-dom"
import Banner from "../Banner/Banner"

const Home = () => {
    const categories = useLoaderData();
    console.log(categories)
    return (
    <div>
        <Banner></Banner>

        <h1 className="text-center my-7 text-[#0B0B0B] text-4xl font-bold">Explore Cutting-Edge Gadgets</h1>

        <div className="container mx-auto flex min-h-[50vh]">
            <div className="w-[20%] border">

            </div>
            <div className="flex-1 border">
                <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}

export default Home