import { Button } from "evergreen-ui";
import React from "react";
import UserCard from "./UserCard";

// https://jsonplaceholder.typicode.com/users

function Suggesstions() {
  return (
    <div className='min-h-64 bg-gray-100 px-4 flex gap-2 rounded flex-col py-5'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-sm'>Add to your Feed</h1>
        <button className='p-1 rounded'>
          <svg
            width={18}
            height={18}
            fill='#000000'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8Z' />
            <path d='M11 11h2v6h-2v-6Zm0-4h2v2h-2V7Z' />
          </svg>
        </button>
      </div>
      <UserCard />
      <UserCard />
      <UserCard />
      <Button className='bg-none border-none flex gap-2'>
        See full suggesstions list
        <svg
          width={18}
          height={18}
          fill='#000000'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='m11.293 17.297 1.414 1.414 6.707-6.707-6.707-6.707-1.414 1.414 4.293 4.293H6v2h9.586l-4.293 4.293Z' />
        </svg>
      </Button>
    </div>
  );
}

export default Suggesstions;
