import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (


    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="bg-[#9538E2] h-[30vh]">
        <div className="text-center pt-8">
          <h1 className="text-3xl text-white font-bold">Dashboard</h1>
          <p className="text-white my-3 text-base font-thin">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
          </p>

          <div className="flex justify-center gap-2">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9538E2] font-semibold border rounded-full border-white px-4 py-2 text-base bg-[white]"
                  : "text-white border rounded-full border-white px-4 py-2 text-base"
              }
              end
            >
              Cart
            </NavLink>

            <NavLink
              to="/dashboard/wishlist"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9538E2] font-semibold px-5 py-2 rounded-full border border-white text-base bg-white"
                  : "text-white px-5 py-2 rounded-full border border-white text-base"
              }
            >
              Wishlist
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
