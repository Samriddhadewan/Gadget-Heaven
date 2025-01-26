import { toast } from "react-toastify";

const getStoredWishList = () => {
    const wishListStr = localStorage.getItem("wish-list");
    if(wishListStr){
        const storedList = JSON.parse(wishListStr);
        return storedList;
    }
    else{
        return [];
    }
}
const addToTheWishList = (id) =>{
    const wishList = getStoredWishList();
    if(wishList.includes(id)){
              toast.error('This Product is Already in the Wishlist', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
    }
    else{
        wishList.push(id)
        const wishListStr = JSON.stringify(wishList);
        localStorage.setItem("wish-list", wishListStr)
                toast.success('Product added To The Wishlist', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
    }
}
export {addToTheWishList, getStoredWishList};