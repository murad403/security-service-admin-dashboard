import Image from 'next/image'
import React from 'react'
import userImage from "../../../public/logo.svg";

const AdminHeader = () => {
  return (
    <div className='border border-heading rounded-xl p-5 flex justify-between items-center w-full'>
        <div>
            <h2 className='font-medium text-2xl text-heading'>Welcome, Sidney</h2>
            <p className='text-[16px] font-normal'>Have a nice day</p>
        </div>
        <div className='flex items-center gap-2'>
            <Image alt='user image' src={userImage} width={53} height={53} className='rounded-full'></Image>
            <p className='text-[16px] font-normal'>Sindey</p>
        </div>
    </div>
  )
}

export default AdminHeader
