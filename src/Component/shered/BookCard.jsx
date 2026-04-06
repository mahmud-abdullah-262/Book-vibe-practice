import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';
const BookCard = ({book}) => {
  return (
    <Link to={`/book-details/${book.bookId}`} className="card bg-base-100 shadow-lg">
        <figure className='p-10 bg-base-200'>
          <img
            src={book.image}
            alt={book.bookName}
            className='h-68 rounded-2xl ' />
        </figure>
        <div className="card-body">
          <div className='flex gap-2'>

          {book.tags.map((tag, ind) =>   <div key={ind} className="badge badge-outline badge-success">{tag}</div>)}
          </div>
          
          <h2 className="card-title banner-font text-2xl">
            {book.bookName}
          </h2>
          <h3 className='font-bold text-sm'>BY: {book.author}</h3>
          <div className='divider'></div>
          <div className="card-actions justify-between text-lg font-bold">
            <div className="">{book.category}</div>
            <div className="flex gap-2">{book.rating} <FaRegStar /></div>
          </div>
        </div>
      </Link>
  );
};

export default BookCard;