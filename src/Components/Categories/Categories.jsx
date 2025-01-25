import { Link } from "react-router-dom"

const Categories = ({categories}) => {
  return (
    <div className="">
        <div className="flex flex-row flex-wrap lg:flex-col gap-4 lg:bg-white lg:p-7 rounded-xl">
        {
        categories.map((category,idx) => <Link className=" bg-[#09080F0D] rounded-4xl py-3  px-4" key={idx} to="/cards">{category.category} </Link>)
      }
        </div>


</div>
  )
}

export default Categories