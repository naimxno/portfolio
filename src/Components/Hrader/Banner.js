import React from 'react';
import banner from '../../Images/jjjj-removebg-preview.png'

const Banner = () => {
  return (
    <div className='lg:flex items-center  mx-auto gap-10 lg:w-8/12'>
      <img className=' m-5 border-2 mx-auto rounded-xl bg-slate-200' src={banner} alt="" />
      <div className='w-8/12 mx-auto'>
        <h1>New year challenge</h1>
        <p>I want to be a web developer in this year.for this i have to do 6 hours to 8 hours of coding every day.i will not give up,i must finish it.it's easier and more beautiful for me to be with the programming-hero on this journey</p>
        <div className='flex gap-6 my-4'>
          <button class="btn btn-outline btn-info">Hire Me</button>
          <button class="btn btn-outline btn-info">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;