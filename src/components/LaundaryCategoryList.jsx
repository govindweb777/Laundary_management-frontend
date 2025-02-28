import { useState , useEffect} from "react";
import { PlusIcon, TrashIcon , PencilSquareIcon, PencilIcon } from "@heroicons/react/24/outline";
import { FaEye, FaTimes } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import axios from "axios";



export default function CustomerList() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    items: [{ name: "", price: "" }], 
  });

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

  // Handle input changes
  const handleChange = (e, index, field) => {
    if (field === "category") {
      setFormData({ ...formData, category: e.target.value });
    } else {
      const newItems = [...formData.items];
      newItems[index][field] = e.target.value;
      setFormData({ ...formData, items: newItems });
    }
  };

  // Add new subcategory input field
  const addSubCategory = () => {
    setFormData({ ...formData, items: [...formData.items, { name: "", price: "" }] });
  };

  // Remove a subcategory field
  const removeSubCategory = (index) => {
    const newItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: newItems });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`${BASE_URL}api/laundry/categories/${editCategoryId}`, formData);
      } else {
        await axios.post(`${BASE_URL}api/laundry/categories`, formData);
      }
      setShowModal(false);
      window.location.reload(); // Refresh to fetch new data
    } catch (error) {
      console.error("Error saving category:", error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`${BASE_URL}api/laundry/categories/${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleEditCategory = (category) => {
    setIsEditing(true);
    setEditCategoryId(category._id);
    setFormData({
      category: category.category,
      items: category.items.map((item) => ({ name: item.name, price: item.price })),
    });
    setShowModal(true);
  };


  return (
    <div className="relative max-w-5xl mx-auto p-6">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-start pt-10 z-10 mt-16 ml-56">
          <div className="max-w-3xl p-6 rounded-lg font-poppins bg-white z-30 relative w-full mx-4 shadow-lg max-h-[80vh] overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setShowModal(false)}
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <h2 className="text-lg font-semibold">New Laundary Category</h2>
            {/* <p className="text-gray-500 text-sm">List of people whose orders are there</p> */}

            <form onSubmit={handleSubmit} className="mt-4">
              <label className="font-semibold text-[#07187B]">Laundary Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={(e) => handleChange(e, null, "category")}
                required
                className="w-full p-2 border rounded-lg"
              />

              {formData.items.map((item, index) => (
                <div key={index} className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                  <div className="col-span-1">
                    <label className="font-semibold text-[#07187B]">Subcategory</label>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleChange(e, index, "name")}
                      required
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>

                  <div className="col-span-1">
                    <label className="font-semibold text-[#07187B]">Price</label>
                    <input
                      type="text"
                      value={item.price}
                      onChange={(e) => handleChange(e, index, "price")}
                      required
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>

                  {index > 0 && (
                    // <button
                    //   type="button"
                    //   onClick={() => removeSubCategory(index)}
                    //   className="mt-6 text-red-500 self-center"
                    // >
                    //   Remove
                    // </button>

                    <TrashIcon className="w-5 h-5 text-red-500 cursor-pointer mt-5" onClick={() => removeSubCategory(index)} />
                  )}
                </div>
              ))}

              <button type="button" onClick={addSubCategory} className="mt-4 text-blue-500">
                + Add Another Subcategory
              </button>

              <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">
                Add Category
              </button>
            </form>

          </div>
        </div>
      )}

      <div className={`relative z-0 ${showModal ? "blur-md" : ""}`}>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-poppins font-semibold text-[18px] leading-[20px] tracking-[0.5px]">Laundary Category List</h2>
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
              <span className="font-poppins text-sm font-light">New Laundary Category</span>
            </button>

          </div>


        </div>


        <p className="text-gray-500 text-sm mb-4 font-poppins">List of people whose orders are there</p>
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr className="text-left text-gray-60">
                <th className="p-3 text-center">Sr.No</th>
                <th className="p-3 text-center">Category</th>
                <th className="p-3 text-center">Sub-Category</th>
                <th className="p-3 text-center">Price</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {categories.map((cat, index) => 
              cat.items.map((item, subIndex) =>(
               <tr key={`${index}-${subIndex}`} className="text-gray-700">
                  <td className="p-3 text-center">{index + 1}.</td>
                  <td className="p-3 text-center">{cat.category}</td>
                  <td className="p-2 text-center">{item.name}</td>
                  <td className="p-3 text-center">{item.price}</td>
                  <td className="p-3 flex justify-center items-center gap-3">

                    <div className="flex gap-2">
                    <PencilIcon className="w-5 h-4.5 text-green-600 hover:text-green-700 cursor-pointer" onClick={() => handleEditCategory(cat)}/>
                   
                    <TrashIcon className="w-5 h-5 text-red-500 cursor-pointer" onClick={() => handleDeleteCategory(cat._id)} />  
                    </div>
                   
                  </td>
                </tr>
              ))
            )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

