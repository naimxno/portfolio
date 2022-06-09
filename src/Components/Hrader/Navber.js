import React from 'react';

const Navber = () => {
  const menuItem =
    <>
      <li><a>Home</a></li>
      <li><a>Project</a></li>
      <li><a>contact</a></li>
    </>
  return (
    <div class="navbar min-h-0  bg-slate-200 border-2 py-0">
      <div class="navbar-start  lg:hidden">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItem}
          </ul>
        </div>
      </div>
      <div class="hidden navbar-center mx-auto lg:flex">
        <ul class="menu mx-auto menu-horizontal p-0">
          {menuItem}
        </ul>
      </div>
    </div>
  );
};

export default Navber;