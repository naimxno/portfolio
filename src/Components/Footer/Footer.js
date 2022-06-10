import React from 'react';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialLinkedin } from 'react-icons/ti';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-slate-200 py-4'>
      <div class="footer p-10 text-black text-neutral-content md:w-10/12 lg:w-8/12 m-auto">
        <div className='m-auto'>
          <h2 className='text-center font-danceing  text-2xl font-semibold'>Naimur Rahaman</h2>

        </div>
        <div className='m-auto'>
          <span class="footer-title">Social</span>
          <div class="grid grid-flow-col gap-2 text-3xl">
            <TiSocialFacebook></TiSocialFacebook>
            <TiSocialInstagram></TiSocialInstagram>
            <TiSocialTwitter></TiSocialTwitter>
            <TiSocialLinkedin></TiSocialLinkedin>
            <AiFillGithub></AiFillGithub>
          </div>
        </div>
        <div class="stats stats-vertical shadow fixed text-xl right-0 top-1/2 border  border-slate-300">
          <div class="stat">
            <TiSocialFacebook></TiSocialFacebook>
          </div>
          <div class="stat">
            <TiSocialTwitter></TiSocialTwitter>
          </div>
          <div class="stat">
            <TiSocialLinkedin></TiSocialLinkedin>
          </div>
          <div class="stat">
            <AiFillGithub></AiFillGithub>
          </div>
          <div class="stat">
            <TiSocialInstagram></TiSocialInstagram>
          </div>


        </div>
      </div>

      <p className='text-center bg-slate-200'>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
    </footer>
  );
};

export default Footer;