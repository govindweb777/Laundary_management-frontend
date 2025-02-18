import { useState } from 'react';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from "lucide-react";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (

    <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4 ml-[70px] md:ml-[80px] lg:ml-[300px]">

            <div className="relative md:w-[400px] lg:w-[625px] mr-56">
              <input
                type="text"
                className="block pl-3 pr-10 py-1 border border-gray-300 rounded-md focus:ring-primary focus:border-primary w-full"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
              </div>
            </div>
            
            <button className="flex items-center px-4 py-2.5 gap-2 bg-primary text-black rounded-lg hover:bg-secondary" >
              <PlusIcon className="w-7 h-7 text-[#5A6ACF] bg-[#FFE6CC] rounded-full p-1" strokeWidth={2} />
              <span className="font-poppins text-sm font-light">Create Laundary</span>

              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00003 7.09424L10.0084 2.08591L8.83086 0.906738L5.00003 4.74007L1.17003 0.906738L-0.00830078 2.08507L5.00003 7.09424Z" fill="#1F384C" />
              </svg>
            </button>
            
            <svg width="16" height="18" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.4 16C5.51684 15.9957 4.80073 15.2831 4.792 14.4H7.992C7.99369 14.6139 7.9529 14.826 7.872 15.024C7.66212 15.5056 7.23345 15.8569 6.72 15.968H6.716H6.704H6.6896H6.6824C6.58945 15.9874 6.49492 15.9981 6.4 16ZM12.8 13.6H0V12L1.6 11.2V6.8C1.55785 5.67129 1.81275 4.5513 2.3392 3.552C2.86323 2.62521 3.75896 1.9671 4.8 1.744V0H8V1.744C10.0632 2.2352 11.2 4.0304 11.2 6.8V11.2L12.8 12V13.6Z" fill="#B0C3CC" />
              <circle cx="9" cy="4.00" r="3.6" fill="#EC5252" stroke="white" stroke-width="1.2" />
            </svg>

          </div>
        </div>
      </div>
    </nav>
  );
}
