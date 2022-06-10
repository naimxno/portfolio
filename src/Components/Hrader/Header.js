import React from 'react';
import Banner from './Banner';
import Navber from './Navber';


const Header = () => {
  return (
    <div>
      <h2 className='text-center font-danceing py-2 text-2xl font-semibold'>Naimur Rahaman</h2>
      <Navber></Navber>
      <Banner></Banner>
    </div>
  );
};

export default Header;