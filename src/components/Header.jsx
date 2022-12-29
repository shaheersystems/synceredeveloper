import React from "react";
import { TextInput, Button } from "evergreen-ui";
function Header() {
  return (
    <div className='h-[9vh]  border-b'>
      <div className='max-w-7xl h-full justify-between m-auto flex items-center'>
        <div className='flex flex-1 items-center gap-5'>
          <div className='font-bold text-blue-900 text-3xl'>
            Syncere
            <span className='font-thin'>developer.</span>
          </div>
          <div className='flex items-center'>
            <label htmlFor='search'></label>
            <TextInput placeholder='Search' />
          </div>
        </div>
        <div className='flex items-center gap-10 flex-1 justify-end'>
          <div className='flex'>
            <a
              href='/'
              className='px-4 py-2 text-sm font-semibold hover:text-blue-800 transition-all'
            >
              Network
            </a>
            <a
              href='/'
              className='px-4 py-2 text-sm font-semibold hover:text-blue-800 transition-all'
            >
              Explore
            </a>
            <a
              href='/'
              className='px-4 py-2 text-sm font-semibold hover:text-blue-800 transition-all'
            >
              Notifications
            </a>
            <a
              href='/'
              className='px-4 py-2 text-sm font-semibold hover:text-blue-800 transition-all'
            >
              Messages
            </a>
          </div>
          <div>
            <Button className='bg-blue-500 text-white hover:text-black'>
              Try Premium for free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
