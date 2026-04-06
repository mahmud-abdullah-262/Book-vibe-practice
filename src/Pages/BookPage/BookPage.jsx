import React, { use } from 'react';
import { bookContext } from '../../Component/shered/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../Component/shered/ReadList';
import WishLIst from '../../Component/shered/WishLIst';


const BookPage = () => {
  const {readList, wishList} = use(bookContext);
  console.log(readList, "readlist", wishList, 'wishlist')
  return (
    <div className='container mx-auto my-10'>
       <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <ReadList></ReadList>
    </TabPanel>
    <TabPanel>
      <WishLIst></WishLIst>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default BookPage;