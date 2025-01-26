
const GadgetCard = ({gadget}) => {
    const {product_title, product_id,product_image,price} = gadget
  return (
    <div className="w-[350px] p-3 rounded-lg bg-white">
        <div className="h-[250px] mb-4">
        <img className="w-full object-cover h-full rounded-lg " src={product_image} alt="" />
        </div>
        <h1 className="text-[#09080F] font-semibold text-2xl">{product_title}</h1>
        <p>product price: {price}</p>
        <button>View Details</button>
    </div>
  )
}

export default GadgetCard