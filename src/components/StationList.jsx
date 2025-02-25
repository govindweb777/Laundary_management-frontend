import { useState, useEffect } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

export default function StationList() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    stationName: "",
    name: "",
    contactNo: "",
    email: "",
    password: "",
    address: ""
  });

  const [stations, setStations] = useState([]);

  // Fetch stations from the backend
  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async () => {
    try {
      const response = await axios.get(`${BASE_URL}api/stations`);
      setStations(response.data);
    } catch (error) {
      console.error("Error fetching stations:", error);
    }
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}api/stations`, formData);
      fetchStations(); // Refresh the station list
      setShowModal(false);
      setFormData({ stationName: "", name: "", contactNo: "", email: "", password: "", address: "" });
    } catch (error) {
      console.error("Error adding station:", error);
    }
  };

  // Delete a station
  const deleteStation = async (id) => {
    try {
      await axios.delete(`${BASE_URL}api/stations/${id}`);
      fetchStations(); // Refresh the list
    } catch (error) {
      console.error("Error deleting station:", error);
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto p-6">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-start pt-10 z-10">
          <div className="max-w-3xl p-6 rounded-lg font-poppins bg-white z-30 relative w-full mx-4 shadow-lg max-h-[100vh] overflow-y-auto mt-16">
            <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900" onClick={() => setShowModal(false)}>
              <FaTimes className="w-5 h-5" />
            </button>

            <h2 className="text-lg font-semibold">Add Station</h2>
            <form onSubmit={handleSubmit} className="mt-4">
              <label className="font-semibold text-[#07187B]">Station Name</label>
              <input type="text" name="stationName" value={formData.stationName} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
              
              <label className="font-semibold text-[#07187B]">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded-lg" />

              <label className="font-semibold text-[#07187B]">Contact No</label>
              <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
              
              <label className="font-semibold text-[#07187B]">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded-lg" />

              <label className="font-semibold text-[#07187B]">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
              
              <label className="font-semibold text-[#07187B]">Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
              
              <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">Add Station</button>
            </form>
          </div>
        </div>
      )}

      <div className={`relative z-0 ${showModal ? "blur-md" : ""}`}>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-poppins font-semibold">Station List</h2>
          <button className="flex items-center gap-3 bg-primary text-black rounded-lg hover:bg-secondary" onClick={() => setShowModal(true)}>
            <PlusIcon className="w-7 h-7 text-[#5A6ACF] bg-[#FFE6CC] rounded-full p-1" strokeWidth={2} />
            <span className="font-poppins text-sm font-light">Add Station</span>
          </button>
        </div>

        {/* Station Table */}
        <div className="mt-6 bg-white rounded-lg shadow-lg overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Sr.No</th>
                <th className="p-2 border">Station Name</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Contact No</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Address</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {stations.map((station, index) => (
                <tr key={station._id} className="hover:bg-gray-50">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{station.stationName}</td>
                  <td className="p-2 border">{station.name}</td>
                  <td className="p-2 border">{station.contactNo}</td>
                  <td className="p-2 border">{station.email}</td>
                  <td className="p-2 border">{station.address}</td>
                  <td className="p-2 border text-center">
                    <button onClick={() => deleteStation(station._id)} className="text-red-500 hover:text-red-700">
                      <TrashIcon className="w-5 h-5 inline-block" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {stations.length === 0 && <p className="p-4 text-center text-gray-500">No stations found.</p>}
        </div>
      </div>
    </div>
  );
}
