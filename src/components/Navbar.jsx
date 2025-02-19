import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from "lucide-react";
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    contactNumber: '',
    address: '',
    laundryCategory: '',
    subCategory: '',
    weight: '',
    quantity: '',
    remarks: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;
      try {
        const response = await axios.get(`${BASE_URL}api/auth/user/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user details", error);
      }
    };
    fetchUser();
  }, [token]);


  return (

    <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
      <div className=" py-3 mr-5">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4 ml-[70px] md:ml-[80px] lg:ml-[300px]">

            <div className="relative md:w-[400px] lg:w-[625px]">
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

            <button
              className=" flex items-center px-4 py-2.5 gap-2 bg-primary text-black rounded-lg hover:bg-secondary ml-60"
              onClick={() => setShowModal(true)}
            >
              <PlusIcon className="w-7 h-7 text-[#5A6ACF] bg-[#FFE6CC] rounded-full p-1" strokeWidth={2} />
              <span className="font-poppins text-sm font-light">Create Laundry</span>
            </button>

            <NavLink
              to="/notification"
            >
              <svg width="16" height="18" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.4 16C5.51684 15.9957 4.80073 15.2831 4.792 14.4H7.992C7.99369 14.6139 7.9529 14.826 7.872 15.024C7.66212 15.5056 7.23345 15.8569 6.72 15.968H6.716H6.704H6.6896H6.6824C6.58945 15.9874 6.49492 15.9981 6.4 16ZM12.8 13.6H0V12L1.6 11.2V6.8C1.55785 5.67129 1.81275 4.5513 2.3392 3.552C2.86323 2.62521 3.75896 1.9671 4.8 1.744V0H8V1.744C10.0632 2.2352 11.2 4.0304 11.2 6.8V11.2L12.8 12V13.6Z" fill="#B0C3CC" />
                <circle cx="9" cy="4.00" r="3.6" fill="#EC5252" stroke="white" stroke-width="1.2" />
              </svg>

            </NavLink>
          </div>

          {user && (
            <div
              className="w-8 h-8 bg-[#5A6ACF] text-white flex items-center justify-center rounded-full cursor-pointer"
              onClick={() => navigate('/settings')}
            >
              {user.fullName ? user.fullName.charAt(0).toUpperCase() : '?'}
            </div>
          )}

        </div>


      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-start pt-10  z-10">
          <div className="max-w-4xl mt-12 ml-48 h-[580px] p-6 rounded-lg font-poppins bg-white z-30 relative w-full mx-4 shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setShowModal(false)}
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <h2 className="text-lg font-semibold">New Customer</h2>
            <p className="text-gray-500 text-sm">List of people whose orders are there</p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <input type="text" name="customerName" placeholder="Enter Customer Name" value={formData.customerName} onChange={handleChange} className="w-full p-2 border rounded-lg" />
              <input type="text" name="contactNumber" placeholder="Enter Contact Number" value={formData.contactNumber} onChange={handleChange} className="w-full p-2 border rounded-lg" />
              <input type="text" name="address" placeholder="Enter Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded-lg" />
              <select name="laundryCategory" value={formData.laundryCategory} onChange={handleChange} className="w-full p-2 border rounded-lg">
                <option>Enter Laundry Category</option>
              </select>
              <select name="subCategory" value={formData.subCategory} onChange={handleChange} className="w-full p-2 border rounded-lg">
                <option>Enter Sub Category</option>
              </select>
              <select name="weight" value={formData.weight} onChange={handleChange} className="w-full p-2 border rounded-lg">
                <option>Enter Weight</option>
              </select>
              <select name="quantity" value={formData.quantity} onChange={handleChange} className="w-full p-2 border rounded-lg">
                <option>Enter Quantity</option>
              </select>
              <button className="bg-[#A6ABC8] text-[#333333] px-4 py-2 rounded-lg font-bold w-1/3">Add</button>
            </div>

            <textarea name="remarks" placeholder="Enter a description..." value={formData.remarks} onChange={handleChange} className="w-full h-15 p-2 border rounded-lg mt-4" />

            <div className="flex justify-end mt-4">
              <button className="bg-[#5A6ACF] text-white px-4 py-2 rounded-lg font-bold w-1/3" onClick={() => setShowModal(false)}>Done</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}