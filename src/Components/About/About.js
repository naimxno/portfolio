import React from 'react';

const About = () => {

  return (
    <div className='mx-auto px-10 md:w-10/12 lg:w-8/12'>
      <h1 className='text-center mt-10 text-4xl '>About Me</h1>
      <div className=' mx-auto my-12'>
        <h2>Biography</h2>
        <p>I'm a Freelancer Front-end Developer with over 12 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people are new experiences.</p>
        <div class="overflow-x-auto mx-auto mt-8">
          <table class="table w-full ">
            <tbody className='bg-slate-200'>
              <tr className='bg-slate-200'>
                <td>Name</td>
                <td>Naimur Rahaman</td>
              </tr>
              <tr>
                <td>BIRTHDAY</td>
                <td>4th April 1990</td>
              </tr>
              <tr>
                <td>AGE</td>
                <td>31 years</td>
              </tr>
              <tr>
                <td>ADDRESS</td>
                <td>San Francisco</td>
              </tr>
              <tr>
                <td>PHONE</td>
                <td>	(+38) 469 2344 2364</td>
              </tr>
              <tr>
                <td>EMAIL</td>
                <td>trendycoder.com@gmail.com</td>
              </tr>
              <tr>
                <td>What's Up</td>
                <td>0168315145</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='text-xl my-8 flex gap-4'>
        <button className='p-2 hover:border-l-4 hover:border-indigo-500 hover:bg-slate-200'>Education</button>
        <button className='p-2 hover:border-l-4 hover:border-indigo-500 hover:bg-slate-200'>Experience</button>
      </div>
      <div>
        <h1>Education</h1>
      </div>
      <div>
        <h1>Experience</h1>
      </div>
    </div>
  );
};

export default About;