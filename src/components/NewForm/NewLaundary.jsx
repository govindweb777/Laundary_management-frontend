import { useState } from "react";

export default function NewLaundary() {
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

  return (
    <div className="max-w-3xl p-6 rounded-lg font-poppins mx-auto md:ml-12 lg:ml-48">
      <h2 className="text-lg font-semibold">New Laundry Category</h2>
      <p className="text-gray-500 text-sm">List of people whose orders are there</p>
      
      <div className="ml-0 md:ml-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="font-semibold text-[#07187B]">Customer Name</label>
            <input 
              type="text" 
              name="customerName" 
              placeholder="Enter customer Name" 
              value={formData.customerName} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="font-semibold text-[#07187B]">Contact Number</label>
            <input 
              type="text" 
              name="contactNumber" 
              placeholder="Enter the Contact Number" 
              value={formData.contactNumber} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="font-semibold text-[#07187B]">Address</label>
          <input 
            type="text" 
            name="address" 
            placeholder="Enter your Address" 
            value={formData.address} 
            onChange={handleChange} 
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="font-semibold text-[#07187B]">Laundry Category</label>
            <select name="laundryCategory" value={formData.laundryCategory} onChange={handleChange} className="w-full p-2 border rounded-lg">
              <option>Enter Laundry Category</option>
            </select>
          </div>
          <div>
            <label className="font-semibold text-[#07187B]">Laundry Sub-Category</label>
            <select name="subCategory" value={formData.subCategory} onChange={handleChange} className="w-full p-2 border rounded-lg">
              <option>Enter Laundry Sub-Category</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="font-semibold text-[#07187B]">Weight</label>
            <select name="weight" value={formData.weight} onChange={handleChange} className="w-full p-2 border rounded-lg">
              <option>Enter Weight of Clothes</option>
            </select>
          </div>
          <div>
            <label className="font-semibold text-[#07187B]">Quantity</label>
            <select name="quantity" value={formData.quantity} onChange={handleChange} className="w-full p-2 border rounded-lg">
              <option>Enter the quantity</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="font-semibold text-[#07187B]">Remarks</label>
          <textarea 
            name="remarks" 
            placeholder="Enter a description..." 
            value={formData.remarks} 
            onChange={handleChange} 
            className="w-full h-32 p-2 border rounded-lg"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-4 space-y-2 md:space-y-0">
          <button className="bg-[#A6ABC8] text-[#333333] px-4 py-2 rounded-[15px] font-bold w-full md:w-[142px] h-[43px]">
            Add
          </button>
        </div>
        <button className="bg-[#5A6ACF] text-white px-4 py-2 rounded-[15px] font-bold w-full md:w-[142px] h-[43px] md:ml-[560PX]">
            Done
          </button>
      </div>
    </div>
  );
}
