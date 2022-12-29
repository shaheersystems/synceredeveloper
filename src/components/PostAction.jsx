import React, { useState } from "react";
import { Avatar, Pane } from "evergreen-ui";
import DialogBox from "./Dialog";
function PostAction() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className='w-full min-h-28 shadow-sm rounded flex flex-col px-3 gap-2 py-2'>
      <DialogBox isShown={isShown} setIsShown={setIsShown} />
      <div className='flex items-center gap-4'>
        <Avatar name='Muhammad Shaheer' color='blue' size={40} />
        <div
          onClick={() => setIsShown(!isShown)}
          className='font-semibold text-sm py-2 flex items-center px-5 w-full rounded-full border cursor-pointer hover:bg-gray-100'
        >
          Share a Post
        </div>
      </div>
      <div className='h-16 flex items-center justify-between'>
        <button className='flex items-center gap-3 py-2 px-4 hover:bg-gray-100 rounded font-semibold'>
          <svg
            width={22}
            height={22}
            fill='#000000'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12ZM13 4l5 5h-5V4ZM7 8h3v2H7V8Zm0 4h10v2H7v-2Zm0 4h10v2H7v-2Z' />
          </svg>
          Write a Blog
        </button>
        <button className='flex items-center gap-3 py-2 px-4 hover:bg-gray-100 rounded font-semibold'>
          <svg
            width={22}
            height={22}
            fill='#000000'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='m7.375 16.78 1.25-1.562L4.601 12l4.024-3.22-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4Zm9.25-9.562-1.25 1.562L19.4 12l-4.024 3.218 1.25 1.562 5-4a1.001 1.001 0 0 0 0-1.562l-5-4Zm-1.649-4.003-4 18-1.953-.434 4-18 1.954.434Z' />
          </svg>
          Post a Challenge
        </button>
        <button className='flex items-center gap-3 py-2 px-4 hover:bg-gray-100 rounded font-semibold'>
          <svg
            width={22}
            height={22}
            fill='#000000'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5Zm-1 14h2v2h-2v-2Z' />
          </svg>
          Ask a Question
        </button>
        <button className='flex items-center gap-3 py-2 px-4 hover:bg-gray-100 rounded font-semibold'>
          <svg
            width={22}
            height={22}
            fill='#000000'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2ZM9 4h6v2H9V4Zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2Z' />
          </svg>
          Post a Job
        </button>
      </div>
    </div>
  );
}

export default PostAction;
