import React, { Suspense, use } from 'react';

import BookCard from '../../Component/shered/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());


const AllBooks = () => {
  const books = use(booksPromise);
 
  return (
    <div className='my-12'>
      <h1 className='text-3xl font-bold text-center mb-10'>Books</h1>

      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto'>
              {books.map((book, ind) => <BookCard key={ind} book={book}></BookCard>)}
            </div>
      </Suspense>
      
    </div>
  );
};

export default AllBooks;