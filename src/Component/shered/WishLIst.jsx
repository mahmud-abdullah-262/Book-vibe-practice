import React, { use, useEffect, useState } from 'react';
import { bookContext } from './BookProvider';
import BookCard from './BookCard';

const WishLIst = ({sortingType}) => {

 const {wishList} = use(bookContext);
 const [filteredWishList, setFilteredWishList] = useState(wishList);

 useEffect(() => {
  if(sortingType){
    if(sortingType === 'pages'){
      const sortedData = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
      setFilteredWishList(sortedData)
    } else if(sortingType === 'rating'){
      const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
      setFilteredWishList(sortedData)
    }
  }
 }, [sortingType, wishList])


 if(filteredWishList.length === 0){
  return <h1 className='h-100 bg-base-200 text-center font-bold text-gray-700 flex items-center justify-center rounded-2xl shadow-lg' >Your Wish list is empty!</h1>
 } else{
    return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      {filteredWishList.map((book, ind) => <BookCard key={ind} book={book} ></BookCard>)}
    </div>
    
    
  );
 }

};

export default WishLIst;