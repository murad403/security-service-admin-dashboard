"use client"
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

const VerificationCenter = () => {
     const [searchText, setSeachText] = useState<string>("");
     console.log(searchText)
    return (
        <div>
            <div className='flex justify-between items-center mb-3'>
                <h2 className='text-2xl font-medium text-heading'>Verification Center</h2>
                <form className="relative">
                    <input type="search" placeholder="Search" name='search' onChange={(e) => setSeachText(e.currentTarget.value)} className='bg-gray-50 py-2 pl-10 pr-4 appearance-none outline-none border border-gray-300 rounded-xl' />
                    <CiSearch className="absolute left-3 top-3 text-paragraph" size={20} />
                </form>
            </div>
        </div>
    )
}

export default VerificationCenter
