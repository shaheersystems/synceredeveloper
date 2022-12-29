import { Avatar, Text } from "evergreen-ui";
import React from "react";

function UserCard() {
  return (
    <div className='h-16 w-full bg-gray-100 rounded py-2 px-2 cursor-pointer'>
      <div className='flex items-center gap-2'>
        <Avatar name='Folio3 Software' size={50} />
        <div>
          <h1 className='font-semibold'>Folio3 Software</h1>
          <Text>Software Company</Text>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
