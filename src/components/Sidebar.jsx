import { Button } from "evergreen-ui";
import React from "react";

function Sidebar() {
  return (
    <div className='w-full min-h-64 bg-gray-100 rounded flex flex-col py-2 px-2'>
      <div className='rounded flex flex-col'>
        <a
          href='/'
          className='px-5 py-2 rounded font-semibold text-sm hover:bg-blue-100'
        >
          Saved
        </a>
        <a
          href='/'
          className='px-5 py-2 rounded font-semibold text-sm hover:bg-blue-100'
        >
          Activities Dashboard
        </a>
        <a
          href='/'
          className='px-5 py-2 rounded font-semibold text-sm hover:bg-blue-100'
        >
          Challenges
        </a>
        <a
          href='/'
          className='px-5 py-2 rounded font-semibold text-sm hover:bg-blue-100'
        >
          Blogs
        </a>
        <a
          href='/'
          className='px-5 py-2 rounded font-semibold text-sm hover:bg-blue-100'
        >
          Jobs
        </a>
        <a
          href='/'
          className='px-5 py-2 rounded font-semibold text-sm hover:bg-blue-100'
        >
          Q/As
        </a>
      </div>
      <div className='py-3'>
        <Button className='w-full bg-blue-600 text-white hover:text-black'>
          Try Premium for free
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
