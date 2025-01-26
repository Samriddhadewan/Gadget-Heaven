import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { getStoredWishList } from "../utilites/addToWishList";
import ListedComponent from "../ListedComponent/ListedComponent";

const Wishlist = () => {
  const [wishList, setwishList] = useState([])
  const products = useLoaderData();
  
  useEffect(()=> {
    const wishList = getStoredWishList();
    const wishListId = wishList.map(id => parseInt(id));

    const wishListedProducts = products.filter(product => wishListId.includes(product.product_id));

    setwishList(wishListedProducts)

  } ,[products])
  
  return (
    <div>
      {
        wishList.map(product => <ListedComponent 
          key={product.product_id}
          product={product}
          ></ListedComponent>)
      }
    </div>
  )
}

export default Wishlist