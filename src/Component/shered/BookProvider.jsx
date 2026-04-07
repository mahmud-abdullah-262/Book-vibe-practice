import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getreadListAllFromLoculDB } from '../../localDB'
import { addtoReadlistlocalDb } from '../../localDB'
import { getWishListAllFromLoculDB } from '../../localDB'
import { addtoWishlistlocalDb } from '../../localDB'

export const bookContext = createContext();



const BookProvider = ({children}) => {

    const [readList, setReadList] = useState(getreadListAllFromLoculDB());
    const [wishList, setWishList,] = useState(getWishListAllFromLoculDB());
     

   
      const handleReadList = (book) => {
      
        addtoReadlistlocalDb(book)
        
        const exist = readList.find(item => item.bookId === book.bookId);
        if(exist){
        toast('Book already added')
      } else{
        setReadList([...readList, book]);
        toast.success(`${book.bookName} is added to list`)
        
      }
      }

      const handleWishList = (book) => {

        addtoWishlistlocalDb(book)
        const existInReadlist = readList.find(item => item.bookId === book.bookId);
        const exist = wishList.find(item => item.bookId === book.bookId);
       if(existInReadlist){
          toast.warn(`${book.bookName} is already read!`)
          return
        }
      else if(exist){
        toast('Book already added')
      } else{
        setWishList([...wishList, book]);
        toast.success(`${book.bookName} is added to list`)
      }
      }
      
  const data = {
    handleReadList,
    handleWishList,
    readList,
    setReadList,
    wishList,
    setWishList
  }

  return ( 
    <bookContext.Provider value={data} >
    {children}
    </bookContext.Provider> 
    );
};

export default BookProvider;