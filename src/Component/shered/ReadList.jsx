import React, { use } from 'react';
import { bookContext } from './BookProvider';
import BookCard from './BookCard';

const ReadList = () => {
   const {readList} = use(bookContext);
   if(readList.length === 0){
  return <h1 className='h-100 bg-base-200 text-center font-bold text-gray-700 flex items-center justify-center rounded-2xl shadow-lg' >Your Read list is empty!</h1>
 } else{
 return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      {readList.map((book, ind) => <BookCard key={ind} book={book} ></BookCard>)}
    </div>
  );
 }
 
};

export default ReadList;