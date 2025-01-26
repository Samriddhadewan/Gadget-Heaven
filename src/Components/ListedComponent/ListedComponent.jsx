
const ListedComponent = ({product}) => {
    const {product_title, description,price, product_image} = product;
  return (
    <div className="flex rounded-xl p-4 my-4 gap-4 bg-[#fff]">
        <div>
            <img className="w-[300px] object-contain h-[150px]" src={product_image} alt="" />
        </div>
        <div>
            <h1 className="text-[#09080F] text-2xl font-semibold">{product_title}</h1>
            <p className="my-4 text-[#09080F99]">{description}</p>
            <p className="text-[#09080F] font-semibold text-xl">Price: ${price}</p>
        </div>
    </div>
  )
}

export default ListedComponent