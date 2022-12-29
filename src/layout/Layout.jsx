import React from "react";
import PostAction from "../components/PostAction";
import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
import Suggesstions from "../components/Suggesstions";
import UserCard from "../components/UserCard";
function Layout() {
  return (
    <div className='w-full min-h-[91vh] flex'>
      <div className='w-80 h-[91vh] flex flex-col gap-2 p-5'>
        <Profile />
        <Sidebar />
      </div>
      <div className='flex-1 h-[91vh] flex flex-col p-5 items-center'>
        <PostAction />
      </div>
      <div className='w-80 p-5'>
        <Suggesstions />
      </div>
    </div>
  );
}

export default Layout;
