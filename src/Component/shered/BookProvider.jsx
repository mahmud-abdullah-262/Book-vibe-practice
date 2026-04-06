import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const bookContext = createContext();



const BookProvider = ({children}) => {

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList,] = useState([]);

      const handleReadList = (book) => {
      

        const exist = readList.find(item => item.bookId === book.bookId);
        if(exist){
        toast('Book already added')
      } else{
        setReadList([...readList, book]);
        toast.success(`${book.bookName} is added to list`)
      }
      }

      const handleWishList = (book) => {
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