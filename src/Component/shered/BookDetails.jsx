import React, { use, useContext, } from 'react';
import { useParams } from 'react-router';

import { bookContext } from './BookProvider';
const booksPromise = fetch('/booksData.json').then(res => res.json());

const BookDetails = () => {


  const books = use(booksPromise);
  const {id} = useParams()
 
  const expectedBook= books.find(book => book.bookId == id);
  const {bookName, author, image, review, totalPages, rating,  category, tags, publisher, yearOfPublishing} = expectedBook
  
  

  const {handleReadList, handleWishList} = useContext(bookContext);
  
  
  return (
    <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-10">
  <figure className='flex justify-center items-start'>
    <img
      src={image}
      alt={bookName}
      className='h-100' />
  </figure>
  <div className="flex flex-col gap-2 w-full p-4">
    <h2 className="card-title text-4xl banner-font">{bookName}</h2>
    <p className='font-bold text-xl text-gray-700'>By: {author}</p>
  
    <p className=' border-y border-gray-200 py-2 text-gray-600 font-medium'>{category}</p>
    <p><span className='font-bold'>Review: </span> {review}</p>
    <div className='flex gap-2 border-b border-gray-200 py-4'>
      <p className='font-bold'>Tags:</p>
      {tags.map(tag => <div className="badge badge-outline badge-success">{tag}</div>)}
    </div>
    <div className='flex gap-16'>
      <ul className='text-gray-400 space-y-2'>
      <li>Number of Pages:</li>
      <li>Publisher:</li>
      <li>Year of Publishing:</li>
      <li>Rating:</li>
    </ul>
    <ul className='text-gray-600 font-bold space-y-2'>
      <li>{totalPages}</li>
      <li>{publisher}</li>
      <li>{yearOfPublishing}</li>
      <li>{rating}</li>
    </ul>
    </div>
    
    <div className="card-actions justify-start mt-4">
      <button onClick={() => handleReadList(expectedBook)} className="btn btn-outline border-gray-400">Add to Read</button>
      <button onClick={() => handleWishList(expectedBook)} className="btn btn-accent">Add to Wishlist</button>
    </div>
  </div>
</div>
  );
};

export default BookDetails;