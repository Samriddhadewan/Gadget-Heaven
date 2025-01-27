import { Outlet, useLoaderData } from "react-router-dom"
import Banner from "../Banner/Banner"
import Categories from "../Categories/Categories";
import { Helmet } from "react-helmet";


const Home = () => {
    
    const categories = useLoaderData();
    return (
    <div>
        <Helmet>
            <title>Home</title>
        </Helmet>


        <Banner></Banner>

        <h1 className="text-center my-7 text-[#0B0B0B] text-4xl font-bold">Explore Cutting-Edge Gadgets</h1>

        <div className="container mx-auto flex flex-col lg:flex-row gap-7 min-h-[50vh]">
            <div className=" lg:w-[15%] ">
                <Categories categories={categories}></Categories>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}

export default Home