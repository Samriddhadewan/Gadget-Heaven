
const GadgetCard = ({gadget}) => {
    const {product_title, product_id,product_image,price} = gadget
  return (
    <div className="w-[350px] p-5 rounded-lg bg-white">
        <div className="h-[250px] mb-4">
        <img className="w-full object-cover h-full rounded-lg " src={product_image} alt="" />
        </div>
        <h1 className="text-[#09080F] font-semibold text-2xl">{product_title}</h1>
        <p className="text-[#09080F99] my-3">product price: {price}</p>
        <button className="text-[#9538E2] font-semibold p-4 rounded-full border border-[#9538E2]">View Details</button>
    </div>
  )
}

export default GadgetCard