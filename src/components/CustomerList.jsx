import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { FaEye, FaTimes } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function CustomerList() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    contactNumber: "",
    address: "",
    laundryCategory: "",
    subCategory: "",
    weight: "",
    quantity: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const customers = new Array(8).fill({
    date: "Dec. 30, 2024",
    name: "Amit Jain",
    amount: "INR 45,000",
    pieces: 4,
    invoiceId: "#123432",
    status: "Pending",
  });

  return (
    <div className="relative max-w-5xl mx-auto p-6">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-start pt-10 z-10 mt-11 ml-56">
          <div className="max-w-3xl p-6 rounded-lg font-poppins bg-white z-30 relative w-full mx-4 shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setShowModal(false)}
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <h2 className="text-lg font-semibold">New Customer</h2>
            <p className="text-gray-500 text-sm">List of people whose orders are there</p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-[#07187B]">Customer Name</label>
                <input type="text" name="customerName" placeholder="Enter Customer Name" value={formData.customerName} onChange={handleChange} className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="font-semibold text-[#07187B]">Contact Number</label>
                <input type="text" name="contactNumber" placeholder="Enter Contact Number" value={formData.contactNumber} onChange={handleChange} className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="font-semibold text-[#07187B]">Address</label>
                <input type="text" name="address" placeholder="Enter Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded-lg" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div>
                <label className="font-semibold text-[#07187B]">Laundry Category</label>
                <select name="laundryCategory" value={formData.laundryCategory} onChange={handleChange} className="w-full p-2 border rounded-lg">
                  <option>Enter Laundry Category</option>
                </select>
              </div>
              <div>
                <label className="font-semibold text-[#07187B]">Sub Category</label>
                <select name="subCategory" value={formData.subCategory} onChange={handleChange} className="w-full p-2 border rounded-lg">
                  <option>Enter Sub Category</option>
                </select>
              </div>
              <div>
                <label className="font-semibold text-[#07187B]">Weight</label>
                <select name="weight" value={formData.weight} onChange={handleChange} className="w-full p-2 border rounded-lg">
                  <option>Enter Weight</option>
                </select>
              </div>
              <div>
                <label className="font-semibold text-[#07187B]">Quantity</label>
                <select name="quantity" value={formData.quantity} onChange={handleChange} className="w-full p-2 border rounded-lg">
                  <option>Enter Quantity</option>
                </select>
              </div>
              <button className="bg-[#A6ABC8] text-[#333333] px-4 py-2 rounded-lg font-bold w-1/3">Add</button>
            </div>

            <div className="mt-4">
              <label className="font-semibold text-[#07187B]">Remarks</label>
              <textarea name="remarks" placeholder="Enter a description..." value={formData.remarks} onChange={handleChange} className="w-full h-15 p-2 border rounded-lg" />
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex"></div>
              <button className="bg-[#5A6ACF] text-white px-4 py-2 rounded-lg font-bold w-1/3 " onClick={() => setShowModal(false)}>Done</button>
            </div>
          </div>
        </div>
      )}

      <div className={`relative z-0 ${showModal ? "blur-md" : ""}`}>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-poppins font-semibold text-[18px] leading-[20px] tracking-[0.5px]">Customer List</h2>
          <div className="flex gap-3">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">

              <path d="M26.1875 5.1625C25.825 4.6375 25.3625 4.175 24.8375 3.8125C23.65 2.95 22.1 2.5 20.2375 2.5H9.7625C9.5125 2.5 9.2625 2.5125 9.025 2.5375C4.925 2.8 2.5 5.4625 2.5 9.7625V20.2375C2.5 22.1 2.95 23.65 3.8125 24.8375C4.175 25.3625 4.6375 25.825 5.1625 26.1875C6.1875 26.9375 7.4875 27.375 9.025 27.475C9.2625 27.4875 9.5125 27.5 9.7625 27.5H20.2375C24.7875 27.5 27.5 24.7875 27.5 20.2375V9.7625C27.5 7.9 27.05 6.35 26.1875 5.1625ZM10.575 13.35L9.9625 12.7125C9.6375 12.3875 9.375 11.8 9.375 11.4V9.9C9.375 9.1125 9.9625 8.525 10.6875 8.525H13.3625C13.875 8.525 14.1875 9.0875 13.9125 9.525L11.6 13.25C11.375 13.6125 10.8625 13.6625 10.575 13.35ZM20.625 11.275C20.625 11.8 20.3 12.45 19.975 12.775L17.1625 15.2625C16.775 15.5875 16.5125 16.2375 16.5125 16.7625V19.575C16.5125 19.9625 16.25 20.4875 15.925 20.6875L15 21.275C14.15 21.8 12.975 21.2125 12.975 20.1625V16.7C12.975 16.2375 12.7125 15.65 12.45 15.325L12.15 15C11.95 14.7875 11.9125 14.4625 12.0625 14.2L15.4125 8.825C15.5375 8.6375 15.7375 8.5125 15.9625 8.5125H19.3125C20.0375 8.5125 20.625 9.1 20.625 9.825V11.275Z" fill="#5A6ACF" />
            </svg>

            <div className="relative">
              <FaCalendarAlt
                className="w-6 h-6 text-[#5A6ACF] cursor-pointer mt-1"
                onClick={() => setShowDatePicker(!showDatePicker)}
              />
              {showDatePicker && (
                <div className="absolute top-10 left-0 bg-white shadow-lg p-2 rounded-lg z-10">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setShowDatePicker(false);
                    }}
                    inline
                  />
                </div>
              )}
            </div>


            <button className="flex items-center gap-3 bg-primary text-black rounded-lg hover:bg-secondary" onClick={() => setShowModal(true)}>
              <PlusIcon className="w-7 h-7 text-[#5A6ACF] bg-[#FFE6CC] rounded-full p-1" strokeWidth={2} />
              <span className="font-poppins text-sm font-light">Add Customer</span>
            </button>

          </div>
        </div>
        <p className="text-gray-500 text-sm mb-4 font-poppins">List of people whose orders are there</p>
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <table className="w-full ">
            <thead className="text-left">
              <tr className="text-black">
                <th className="p-3 font-poppins">Date</th>
                <th className="p-3 font-poppins">Name</th>
                <th className="p-3 font-poppins">Amount</th>
                <th className="p-3 font-poppins">Pieces</th>
                <th className="p-3 font-poppins">Invoice ID</th>
                <th className="p-3 font-poppins">Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="p-3">{customer.date}</td>
                  <td className="p-3 flex items-center gap-2">
                    <img src={`https://i.pravatar.cc/40?img=${index + 1}`} alt="avatar" className="w-8 h-8 rounded-full" />
                    {customer.name}
                  </td>
                  <td className="p-3 font-poppins">{customer.amount}</td>
                  <td className="p-3 font-poppins">{customer.pieces}</td>
                  <td className="p-3 font-poppins">{customer.invoiceId}</td>
                  <td className="p-3 font-poppins">{customer.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
