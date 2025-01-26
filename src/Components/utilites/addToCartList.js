const getCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    } 
}
const addToTheCartList = (id) => {
    const storedList = getCartList();
    if(storedList.includes(id)){
        alert("this book is already in the list")
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list',storedListStr);
    }
}


export { addToTheCartList, getCartList} ;