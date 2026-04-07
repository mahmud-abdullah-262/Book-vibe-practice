const getreadListAllFromLoculDB = () => {
  const allReadlist = localStorage.getItem('readlist');
  
  if(allReadlist)  return JSON.parse(allReadlist) 
  return []
}

const addtoReadlistlocalDb = (book) => {
  const allbook = getreadListAllFromLoculDB().filter(Boolean)
  const alreadyExist = allbook.find(bk => bk && bk.bookId === book.bookId);
  if(!alreadyExist){
    allbook.push(book);
    localStorage.setItem('readlist', JSON.stringify(allbook))
  }
}

const getWishListAllFromLoculDB = () => {
  const allWishlist = localStorage.getItem('wishlist');
  
  if(allWishlist)  return JSON.parse(allWishlist) 
  return []
}

const addtoWishlistlocalDb = (book) => {
  const allbook = getWishListAllFromLoculDB().filter(Boolean)
  const alreadyExist = allbook.find(bk => bk && bk.bookId === book.bookId);
  if(!alreadyExist){
    allbook.push(book);
    localStorage.setItem('wishlist', JSON.stringify(allbook))
  }
}


export {getreadListAllFromLoculDB, addtoReadlistlocalDb, getWishListAllFromLoculDB, addtoWishlistlocalDb}