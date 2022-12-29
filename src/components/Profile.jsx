import { Avatar, Text } from "evergreen-ui";
import React from "react";

function Profile() {
  return (
    <div className='bg-gray-100 w-full min-h-80 py-5 rounded flex flex-col'>
      <div className='flex flex-col py-2 items-center gap-3'>
        <Avatar name='Muhammad Shaheer' size={60} color='blue' />
        <h2 className='font-semibold'>Muhammad Shaheer</h2>
        <a href='/'>
          <Text className='hover:underline transition-all'>@shaheerinit</Text>
        </a>
        <Text>Student at Punjab University Lahore</Text>
      </div>
    </div>
  );
}

export default Profile;
