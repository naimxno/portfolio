import React from 'react';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiMongodb, DiNodejsSmall } from 'react-icons/di';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { SiTailwindcss, SiFirebase } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';

const Skills = () => {
  return (
    <div>
      <h2 className="text-center mt-10 text-4xl">My Skills</h2>

      <div className='grid mx-auto gap-2 lg:grid-cols-12 grid-cols-4 md:grid-cols-6 lg:w-8/12 text-5xl my-12'>
        <AiFillHtml5 className='mx-auto'></AiFillHtml5>
        <DiCss3 className='mx-auto'></DiCss3>
        <BsFillBootstrapFill className='mx-auto'></BsFillBootstrapFill>
        <SiTailwindcss className='mx-auto'></SiTailwindcss>
        <DiJavascript1 className='mx-auto'></DiJavascript1>
        <GrReactjs className='mx-auto'></GrReactjs>
        <SiFirebase className='mx-auto'></SiFirebase>
        <DiNodejsSmall className='mx-auto'></DiNodejsSmall>
        <DiMongodb className='mx-auto'></DiMongodb>
        <AiFillGithub className='mx-auto'></AiFillGithub>
        <FiSettings className='mx-auto'></FiSettings>
      </div>
    </div>
  );
};

export default Skills;