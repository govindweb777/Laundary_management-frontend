import { useState, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { FaEye, FaTimes } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import axios from "axios"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TrashIcon} from "@heroicons/react/24/outline";

export default function CustomerList() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
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

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [price, setPrice] = useState("");
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get(`${BASE_URL}api/orders/orders`);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }
    fetchOrders();
  }, [BASE_URL]);



  // Fetch categories from backend
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(`${BASE_URL}api/laundry/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);

  const handleSubmit = async () => {

    if (items.length <= 0) {
      toast.error("Please add at least one item");
      return;
    }
  
    if(!formData.customerName || !formData.contactNumber) {
      toast.error("Customer name and contact number are required");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}api/orders/create-order`, {
        customerName: formData.customerName,
        contactNumber: formData.contactNumber,
        address: formData.address,
        items,
        totalAmount,
        remarks: formData.remarks,
      });
  
      if (response.status === 201) {
        toast.success("Order Created Successfully!");
        setItems([]); 
        setTotalAmount(0); 
        setFormData({
          customerName: "",
          contactNumber: "",
          address: "",
          remarks: "",
          laundryCategory: "",
          subCategory: "",
          weight: "",
          quantity: "",
          price: "",
        });
      }
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Failed to Create Order !");
  
      // Reset all fields on failure
      setItems([]);
      setTotalAmount(0);
      setFormData({
        customerName: "",
        contactNumber: "",
        address: "",
        remarks: "",
        laundryCategory: "",
        subCategory: "",
        weight: "",
        quantity: "",
        price: "",
      });
    }
  };

  const handleEditItem = (index) => {
    const editedItem = items[index]; // Get the selected item
    setItemName(editedItem.name);
    setItemWeight(editedItem.weight);
    setEditingIndex(index); // Store index for updating the item
};

const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
};

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "laundryCategory") {
      const selectedCategory = categories.find((cat) => cat.category === value);
      setSubCategories(selectedCategory ? selectedCategory.items : []);
      setFormData((prev) => ({ ...prev, subCategory: "", price: "" }));
    }

    if (name === "subCategory") {
      const selectedSubCategory = subCategories.find((item) => item.name === value);
      setPrice(selectedSubCategory ? selectedSubCategory.price : "");
      setFormData((prev) => ({ ...prev, price: selectedSubCategory ? selectedSubCategory.price : "" })); // ✅ Updated formData
    }

    if (name === "quantity") {
      const qty = parseInt(value, 10) || 0;
      setFormData((prev) => ({ ...prev, quantity: qty }));
    }
  };

  const handleAddItem = () => {

    if (!formData.laundryCategory || !formData.subCategory || !formData.quantity || !price) {
      toast.error("Category required")
      return;
    }

    const newItem = {
      category: formData.laundryCategory,
      subCategory: formData.subCategory,
      quantity: formData.quantity,
      price: price,
      total: formData.quantity * price,
    };

    setItems((prevItems) => [...prevItems, newItem]); 
    setTotalAmount((prevTotal) => prevTotal + newItem.total); 

    setFormData((prev) => ({
      ...prev, // Preserve existing fields
      laundryCategory: "",
      subCategory: "",
      weight: "",
      quantity: "",
      price: "",
    }));
    setPrice("");

    console.log("ADDITEM ", formData);
  };


  return (
    <div className="relative max-w-5xl mx-auto p-6">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-start pt-10 z-10 mt-11 ml-56 ">
          <div className="max-w-3xl p-6 rounded-lg font-poppins bg-white z-30 relative w-full mx-4 shadow-lg overflow-y-auto max-h-[635px]">
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
                  <option>Select Laundry Category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category.category}>
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-semibold text-[#07187B]">Sub Category</label>
                <select name="subCategory" value={formData.subCategory} onChange={handleChange} disabled={!formData.laundryCategory} className="w-full p-2 border rounded-lg">
                  <option>Enter Sub Category</option>
                  {subCategories.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-semibold text-[#07187B]">Price</label>
                <input
                  type="text"
                  name="price"
                  value={price}
                  readOnly
                  className="w-full p-2 border rounded-lg bg-gray-100"
                />
              </div>


              <div>
                <label className="font-semibold text-[#07187B]">Quantity</label>
                <input type="text" name="quantity" placeholder="Enter Qunatity" value={formData.quantity} onChange={handleChange} className="w-full p-2 border rounded-lg" />
              </div>

              <button className="bg-[#A6ABC8] text-[#333333] px-2 py-2 rounded-lg font-bold w-1/3 " onClick={handleAddItem}>Add</button>
            </div>

            {items.length > 0 && (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="p-3 border">Laundry Category</th>
                      <th className="p-3 border">Sub Category</th>
                      <th className="p-3 border">Quantity</th>
                      <th className="p-3 border">Subtotal Price</th>
                      <th className="p-3 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index} className="border">
                        <td className="p-3 border">{item.category}</td>
                        <td className="p-3 border">{item.subCategory}</td>
                        <td className="p-3 border text-center">{item.quantity}</td>
                        <td className="p-3 border text-center">₹{item.total}</td>
                        <td className="p-3 border text-center">
                          {/* <button className="text-blue-500 mr-2" onClick={() => handleEditItem(index)}>Edit</button> */}
                          <TrashIcon className="w-5 h-5 text-red-500 cursor-pointer text-center" onClick={() => handleDeleteItem(index)}/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}


            <div className="mt-4">
              <label className="font-semibold text-[#07187B]">Remarks</label>
              <textarea name="remarks" placeholder="Enter a description..." value={formData.remarks} onChange={handleChange} className="w-full h-15 p-2 border rounded-lg" />
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex">Total Amount : ₹{totalAmount} </div>

              <button
                type = "submit"
                className="bg-[#5A6ACF] text-white px-4 py-2 rounded-lg font-bold w-1/3"
                onClick={() => {
                  handleSubmit();
                  setShowModal(false);
                }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`relative z-0 ${showModal ? "blur-md" : ""}`}>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-poppins font-semibold text-[18px] leading-[20px] tracking-[0.5px]">Customer List</h2>
          <div className="flex gap-3">

            {/* show filter here */}

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
            <thead>
              <tr className="text-left text-gray-60">
                <th className="p-3 text-center">Date</th>
                <th className="p-3 text-center">Order ID</th>
                <th className="p-3 text-center">Customer Name</th>
                <th className="p-3 text-center">Total Amount</th>
                <th className="p-3 text-center">Quantity</th>
                <th className="p-3 text-center">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="text-center">
                  <td className="p-3 text-center">{new Date(order.date).toLocaleDateString()}</td>
                  <td className="p-3 text-center">{order.orderId}</td>
                  <td className="p-3 text-center">{order.customerName}</td>
                  <td className="p-3 text-center">₹{order.totalAmount}</td>
                  <td className="p-3 text-center">{order.items.reduce((sum, item) => sum + item.quantity, 0)}</td>
                  <td className="p-3 text-center">{order.paymentStatus}</td>
                </tr>
              ))}
            </tbody>

          </table>          

        </div>
      </div>
    </div>
  );
}
