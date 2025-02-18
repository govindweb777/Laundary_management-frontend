import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { FaEye, FaTimes } from "react-icons/fa";

export default function CustomerList() {
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

            <svg width="24" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8ZM12 14C11.7167 14 11.4792 13.9042 11.2875 13.7125C11.0958 13.5208 11 13.2833 11 13C11 12.7167 11.0958 12.4792 11.2875 12.2875C11.4792 12.0958 11.7167 12 12 12C12.2833 12 12.5208 12.0958 12.7125 12.2875C12.9042 12.4792 13 12.7167 13 13C13 13.2833 12.9042 13.5208 12.7125 13.7125C12.5208 13.9042 12.2833 14 12 14ZM8 14C7.71667 14 7.47917 13.9042 7.2875 13.7125C7.09583 13.5208 7 13.2833 7 13C7 12.7167 7.09583 12.4792 7.2875 12.2875C7.47917 12.0958 7.71667 12 8 12C8.28333 12 8.52083 12.0958 8.7125 12.2875C8.90417 12.4792 9 12.7167 9 13C9 13.2833 8.90417 13.5208 8.7125 13.7125C8.52083 13.9042 8.28333 14 8 14ZM16 14C15.7167 14 15.4792 13.9042 15.2875 13.7125C15.0958 13.5208 15 13.2833 15 13C15 12.7167 15.0958 12.4792 15.2875 12.2875C15.4792 12.0958 15.7167 12 16 12C16.2833 12 16.5208 12.0958 16.7125 12.2875C16.9042 12.4792 17 12.7167 17 13C17 13.2833 16.9042 13.5208 16.7125 13.7125C16.5208 13.9042 16.2833 14 16 14ZM12 18C11.7167 18 11.4792 17.9042 11.2875 17.7125C11.0958 17.5208 11 17.2833 11 17C11 16.7167 11.0958 16.4792 11.2875 16.2875C11.4792 16.0958 11.7167 16 12 16C12.2833 16 12.5208 16.0958 12.7125 16.2875C12.9042 16.4792 13 16.7167 13 17C13 17.2833 12.9042 17.5208 12.7125 17.7125C12.5208 17.9042 12.2833 18 12 18ZM8 18C7.71667 18 7.47917 17.9042 7.2875 17.7125C7.09583 17.5208 7 17.2833 7 17C7 16.7167 7.09583 16.4792 7.2875 16.2875C7.47917 16.0958 7.71667 16 8 16C8.28333 16 8.52083 16.0958 8.7125 16.2875C8.90417 16.4792 9 16.7167 9 17C9 17.2833 8.90417 17.5208 8.7125 17.7125C8.52083 17.9042 8.28333 18 8 18ZM16 18C15.7167 18 15.4792 17.9042 15.2875 17.7125C15.0958 17.5208 15 17.2833 15 17C15 16.7167 15.0958 16.4792 15.2875 16.2875C15.4792 16.0958 15.7167 16 16 16C16.2833 16 16.5208 16.0958 16.7125 16.2875C16.9042 16.4792 17 16.7167 17 17C17 17.2833 16.9042 17.5208 16.7125 17.7125C16.5208 17.9042 16.2833 18 16 18Z" fill="#5A6ACF" />
            </svg>

            <button className="flex items-center gap-3 bg-primary text-black rounded-lg hover:bg-secondary" onClick={() => setShowModal(true)}>
              <PlusIcon className="w-7 h-7 text-[#5A6ACF] bg-[#FFE6CC] rounded-full p-1" strokeWidth={2} />
              <span className="font-poppins text-sm font-light">Add Customer</span>
            </button>

          </div>
        </div>
        <p className="text-gray-500 text-sm mb-4 font-poppins">List of people whose orders are there</p>
        <div className="mt-4 p-4">
          <table className="w-full">
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
