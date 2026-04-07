import React, { use, useState } from 'react';
import { bookContext } from '../../Component/shered/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../Component/shered/ReadList';
import WishLIst from '../../Component/shered/WishLIst';


const BookPage = () => {
  const {readList, wishList} = use(bookContext);
  console.log(readList, "readlist", wishList, 'wishlist')

  const [sortingType, setSortingType] = useState('')
 
  return (

    <>
    <div className='flex justify-center my-6'>
        <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1"> Sort by: {sortingType}</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={() => setSortingType('pages')}><a>Pages</a></li>
    <li onClick={() => setSortingType('rating')}><a>Rating</a></li>
  </ul>
</div>
    </div>
  

    <div className='container mx-auto my-10'>
       <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <ReadList sortingType={sortingType} ></ReadList>
    </TabPanel>
    <TabPanel>
      <WishLIst sortingType={sortingType} ></WishLIst>
    </TabPanel>
  </Tabs>
    </div>
    </>

    
  );
};

export default BookPage;