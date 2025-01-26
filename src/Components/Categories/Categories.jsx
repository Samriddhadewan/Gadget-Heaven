import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div>
      <div className="flex flex-row flex-wrap lg:flex-col gap-4 lg:bg-white lg:p-7 rounded-xl">
        {
          categories.map((category, idx) => (
            <NavLink
              to={`/category/${category.category}`}
              key={idx}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#9538E2] rounded-4xl py-3 px-4 text-white" 
                  : "bg-[#09080F0D] rounded-4xl py-3 px-4 text-black" 
              }
            >
              {category.category}
            </NavLink>
          ))
        }
      </div>
    </div>
  );
};

export default Categories;
