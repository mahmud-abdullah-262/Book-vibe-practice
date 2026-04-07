import React, { use, useEffect, useState } from 'react';
import { bookContext } from './BookProvider';
import BookCard from './BookCard';

const ReadList = ({sortingType}) => {

  const {readList} = use(bookContext);

  const [filteredReadList, setFilteredReadList] = useState(readList)

  useEffect(() => {
    if(sortingType){
      if(sortingType === 'pages'){
        const sortedData = [...readList].sort( (a, b) => a.totalPages - b.totalPages);
        setFilteredReadList(sortedData)
      }

      else if(sortingType === 'rating'){
         const sortedData = [...readList].sort( (a, b) => a.rating - b.rating);
        setFilteredReadList(sortedData)
      }
    }
  } , [sortingType, readList])

   if(filteredReadList.length === 0){
  return <h1 className='h-100 bg-base-200 text-center font-bold text-gray-700 flex items-center justify-center rounded-2xl shadow-lg' >Your Read list is empty!</h1>
 } else{
 return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      {filteredReadList.map((book, ind) => <BookCard key={ind} book={book} ></BookCard>)}
    </div>
  );
 }
 
};

export default ReadList;