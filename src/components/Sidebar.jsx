
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ChartBarIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
  CalculatorIcon,
  UserIcon,
  DocumentChartBarIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';



export default function Sidebar() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const logOut = async() => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed z-50 top-4 left-4 bg-primary text-white p-2 rounded-full shadow-lg font-poppins"
      >
        {isSidebarOpen ? <XMarkIcon className="w-6 h-6 " /> : <Bars3Icon className="w-6 h-6 text-[#5A6ACF]" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 lg:w-[240px] h-[960px] lg:h-screen  pt-6 bg-gray-50 border-r border-gray-200 transition-transform font-poppins 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="text-center font-bold text-lg text-[#5A6ACF]  pb-5 border-b font-Poppins">Laundry Management</div>
        
        {/* Sidebar Menu */}
        <div className="h-full px-3 pb-4 overflow-y-auto flex flex-col space-y-2 text-sm">
          
          {/* MENU Section */}
          <div className="text-gray-400 font-semibold mt-4 mb-4 px-3">MENU</div>
          <NavLink to="/" className={({ isActive }) => `flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20 ${isActive ? 'bg-gray-100' : ''}`}>
            <ChartBarIcon className="w-5 h-5 text-[#A6ABC8]" />
            <span className="ml-3 text-[#A6ABC8]">Dashboard</span>
          </NavLink>
          <NavLink to="/customers" className="flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20 hover:text-[#5A6ACF] ">
            <ShoppingBagIcon className="w-5 h-5 text-[#AAAFCB] hover:text-[#5A6ACF]" />
            <span className="ml-3 text-[#AAAFCB] ">Customer List</span>
          </NavLink>
          <NavLink to="/laundary-categories" className="flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20">
            <ClipboardDocumentListIcon className="w-5 h-5 text-[#AAAFCB]" />
            <span className="ml-3 text-[#AAAFCB]">Laundry Category</span>
          </NavLink>
          <NavLink to="/supply-list" className="flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20">
            <DocumentChartBarIcon className="w-5 h-5 text-[#A6ABC8]" />
            <span className="ml-3 text-[#A6ABC8]">Supply List</span>
          </NavLink>
          <NavLink to="/inventory-list" className="flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20">
            <UsersIcon className="w-5 h-5 text-[#AAAFCB]" />
            <span className="ml-3 text-[#AAAFCB]">Inventory</span>
          </NavLink>
          <NavLink to="/employees-list" className="flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20">
            <UserGroupIcon className="w-5 h-5 text-[#AAAFCB]" />
            <span className="ml-3 text-[#AAAFCB]">Employees</span>
          </NavLink>

          {/* OTHERS Section */}
          <div className="text-gray-400 font-semibold px-3 py-4 ">OTHERS</div>
          <NavLink to="/billing" className="flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20">
            <CalculatorIcon className="w-5 h-5 text-gray-500" />
            <span className="ml-3 text-[#273240]">Billing</span>
          </NavLink>
          <NavLink to="/accounts" className="flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20">
            <UserIcon className="w-5 h-5 text-gray-500" />
            <span className="ml-3 text-[#273240]">Accounts</span>
          </NavLink>
          <NavLink to="/reports" className="flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20">
            <DocumentChartBarIcon className="w-5 h-5 text-gray-500" />
            <span className="ml-3 text-[#273240]">Reports</span>
          </NavLink>
          <NavLink to="/settings" className="flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20">
            <Cog6ToothIcon className="w-5 h-5 text-gray-500" />
            <span className="ml-3 text-[#273240]">Settings</span>
          </NavLink>
          <NavLink to="/help" className="flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20">
            <QuestionMarkCircleIcon className="w-5 h-5 text-gray-500" />
            <span className="ml-3 text-[#273240]">Help</span>
          </NavLink>

          {/* Logout Button */}
          <button className=" flex items-center p-2 text-[#273240] rounded-lg hover:bg-[#707FDD]/20">
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            <span className="ml-3" onClick={logOut}>Logout</span>
          </button>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}
    </>
  );
}

