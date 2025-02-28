
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
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./Loader"


export default function Sidebar() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const role = localStorage.getItem("role"); // Retrieve role from localStorage

  const logOut = async () => {
    setLoading(true);
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/login");
      toast.success("Successfully logged out!");
    } catch (error) {
      console.error("Logout failed", error);
      toast.error("Logout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed z-50 top-4 left-4 bg-primary text-white p-2 rounded-full shadow-lg font-poppins mb-20"
        >
          {isSidebarOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6 text-[#5A6ACF]" />}
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed mb-[30px] top-0 left-0 z-40 w-64 lg:w-[240px] h-full lg:h-screen  pt-6 bg-gray-50 border-r border-gray-200 transition-transform font-poppins 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
        >
          {/* Sidebar Header */}
          <div className="text-center font-bold text-lg text-[#5A6ACF]  pb-5 border-b font-Poppins">Laundry Management</div>

          {/* Sidebar Menu */}
          <div className="h-full px-3 pb-4 overflow-y-auto flex flex-col space-y-2 text-sm">

            {/* MENU Section */}
            <div className="text-gray-400 font-semibold mt-4 mb-4 px-3">MENU</div>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20 ${isActive ? 'bg-gray-100 text-[#5A6ACF]' : 'text-[#273240]'}`
              }>
              <ChartBarIcon className="w-5 h-5" />
              <span className="ml-3">Dashboard</span>
            </NavLink>

            <NavLink
              to="/customers"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20 ${isActive ? 'bg-gray-100 text-[#5A6ACF]' : 'text-[#273240]'}`
              }>
              <ShoppingBagIcon className="w-5 h-5" />
              <span className="ml-3">Customer List</span>
            </NavLink>

            <NavLink
              to="/laundary-categories"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20 ${isActive ? 'bg-gray-100 text-[#5A6ACF]' : 'text-[#273240]'}`
              }>
              <ClipboardDocumentListIcon className="w-5 h-5" />
              <span className="ml-3">Laundry Category</span>
            </NavLink>

            <NavLink
              to="/supply-list"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20 ${isActive ? 'bg-gray-100 text-[#5A6ACF]' : 'text-[#273240]'}`
              }>
              <DocumentChartBarIcon className="w-5 h-5" />
              <span className="ml-3">Supply List</span>
            </NavLink>

            <NavLink
              to="/inventory-list"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20 ${isActive ? 'bg-gray-100 text-[#5A6ACF]' : 'text-[#273240]'}`
              }>
              <UsersIcon className="w-5 h-5" />
              <span className="ml-3">Inventory</span>
            </NavLink>

            <NavLink
              to="/employees-list"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20 ${isActive ? 'bg-gray-100 text-[#5A6ACF]' : 'text-[#273240]'}`
              }>
              <UserGroupIcon className="w-5 h-5" />
              <span className="ml-3">Employees</span>
            </NavLink>
            
            {/* <NavLink
              to="/station-list"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20 ${isActive ? 'bg-gray-100 text-[#5A6ACF]' : 'text-[#273240]'}`
              }>
              <UserGroupIcon className="w-5 h-5" />
              <span className="ml-3">Station List</span>
            </NavLink> */}



{role === "admin" && (
  <NavLink
    to="/station-list"
    className={({ isActive }) =>
      `flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20 ${
        isActive ? 'bg-gray-100 text-[#5A6ACF]' : 'text-[#273240]'
      }`
    }>
    <UserGroupIcon className="w-5 h-5" />
    <span className="ml-3">Station List</span>
  </NavLink>
)}

            <div className="text-gray-400 font-semibold px-3 py-4 ">OTHERS</div>
            <NavLink
              to="/billing"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20 ${isActive ? 'bg-gray-100 text-[#5A6ACF]' : 'text-[#273240]'}`
              }>
              <CalculatorIcon className="w-5 h-5" />
              <span className="ml-3">Billing</span>
            </NavLink>

            <NavLink
              to="/accounts"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20 ${isActive ? 'bg-gray-100 text-[#5A6ACF]' : ''}`
              }>
              <UserIcon className="w-5 h-5" />
              <span className="ml-3">Accounts</span>
            </NavLink>

            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20 ${isActive ? 'bg-gray-100 text-[#5A6ACF]' : 'text-[#273240]'}`
              }>
              <DocumentChartBarIcon className="w-5 h-5" />
              <span className="ml-3">Reports</span>
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20 ${isActive ? 'bg-gray-100 text-[#5A6ACF]' : 'text-[#273240]'}`
              }>
              <Cog6ToothIcon className="w-5 h-5" />
              <span className="ml-3">Settings</span>
            </NavLink>

            {/* <NavLink
              to="/help"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg hover:bg-[#707FDD]/20 ${isActive ? 'bg-gray-100 text-[#5A6ACF]' : 'text-[#273240]'}`
              }>
              <QuestionMarkCircleIcon className="w-5 h-5" />
              <span className="ml-3">Help</span>
            </NavLink> */}

            {/* Logout Button */}
            <button className=" flex items-center p-2 text-[#273240] rounded-lg hover:bg-[#707FDD]/20" onClick={logOut}>
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              <span className="ml-3" >Logout</span>
            </button>
          </div>
        </aside>

        {/* Overlay for Mobile */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
        )}
      </div>
    </>
  );
}

