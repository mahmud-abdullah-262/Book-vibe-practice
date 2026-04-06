import React from 'react';
import BannerBook from '/bannerBook.png'
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[60vh] my-6 rounded-2xl container mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full p-8">
    <img
      src={BannerBook}
      className="max-w-sm"
    />
    <div>
      <h1 className="text-6xl font-bold banner-font">Books to freshen up <br /> your bookshelf</h1>
     
      <button className="btn btn-success my-4">View The List</button>
    </div>
  </div>
</div>
  );
};

export default Banner;