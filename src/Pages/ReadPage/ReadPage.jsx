import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const booksPromise = fetch('/booksData.json').then(res => res.json());



const ReadPage = () => {
 const data = use(booksPromise);

  return (
    <div className='flex flex-col gap-4 items-center my-16'>
      <h1 className='font-bold text-2xl text-center'>Page Count</h1>
      <BarChart
      style={{ width: '80%', height: '300px', aspectRatio: 1.618 }}
      responsive
      data={data}
    >
      <XAxis dataKey="bookName" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="totalPages" fill="#8884d8" />
      
    </BarChart>
    </div>
  );
};

export default ReadPage;