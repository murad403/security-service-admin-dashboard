import React from 'react'
import Stats from './components/dashboard/Stats';
import RecentUser from './components/dashboard/RecentUser';

const Dashboard = () => {
  return (
    <div className='space-y-5'>
      <Stats></Stats>
      <RecentUser></RecentUser>
    </div>
  )
}

export default Dashboard;
