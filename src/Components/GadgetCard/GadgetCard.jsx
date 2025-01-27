import { Link } from "react-router-dom"

const GadgetCard = ({gadget}) => {
    const {product_title, product_id,product_image,price} = gadget
  return (
    <div className="w-[350px] p-8 rounded-lg bg-white">
        <div className="h-[250px] mb-4">
        <img className="w-full object-contain h-full rounded-lg " src={product_image} alt="" />
        </div>
        <h1 className="text-[#09080F] font-semibold text-2xl">{product_title}</h1>
        <p className="text-[#09080F99] mb-6 mt-3">product price: {price} $</p>
        <Link to={`/gadgets/gadget/${product_id}`} className="text-[#9538E2] font-semibold p-4 rounded-full border border-[#9538E2]">View Details</Link>
    </div>
  )
}

export default GadgetCard