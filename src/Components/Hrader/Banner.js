import React from 'react';
import { BiDownload } from 'react-icons/bi';
import banner from '../../Images/jjjj-removebg-preview.png'

const Banner = () => {
  return (
    <div className='mx-auto md:w-10/12 lg:w-8/12'>
      <div className='lg:flex items-center justify-between sp  gap-10 '>
        <img className='h-80  my-5 pt-8 border-slate-300 border-8 drop-shadow-md mx-auto  bg-slate-200 rounded-t-full' src={banner} alt="" />
        <div className='md:w-10/12 px-10 mx-auto'>
          <p>MERN Stack Developer</p>
          <h1 className='text-2xl font-bold'>Naimur Rahaman</h1>
          <p>I want to be a web developer in this year.for this i have to do 6 hours to 8 hours of coding every day.i will not give up,i must finish it.it's easier and more beautiful for me to be with the programming-hero on this journey</p>
          <div className='flex gap-6 my-4'>
            <button className='btn rounded-full border-2 border-slate-300 px-8 font-bold drop-shadow-md'>HIRE ME</button>
            <button class="btn rounded-full border-2 border-blue-600 px-5 gap-2 drop-shadow-md">RESUME <BiDownload className='text-2xl'></BiDownload></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;