import { useState, useEffect } from "react";
import { PlusIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader"

export default function StationList() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedStationId, setSelectedStationId] = useState(null);
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    stationName: "",
    name: "",
    contactNo: "",
    email: "",
    password: "",
    address: ""
  });

  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async () => {
    try {
      setLoading(true); 
      const response = await axios.get(`${BASE_URL}api/stations`);
      setStations(response.data);
    } catch (error) {
      console.error("Error fetching stations:", error);
      toast.error("Failed to fetch stations.");
    }finally {
      setLoading(false); // Hide Loader after fetching
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editMode) {
        await axios.put(`${BASE_URL}api/stations/${selectedStationId}`, formData);
        toast.success("Station updated successfully!");
      } else {
        await axios.post(`${BASE_URL}api/stations`, formData);
        toast.success("Station added successfully!");
      }

      fetchStations();
      closeModal();
    } catch (error) {
      console.error("Error saving station:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteStation = async (id) => {
    try {
      await axios.delete(`${BASE_URL}api/stations/${id}`);
      toast.success("Station deleted successfully!");
      fetchStations();
    } catch (error) {
      console.error("Error deleting station:", error);
      toast.error("Error deleting station.");
    }
  };

  const openEditModal = (station) => {
    setFormData({
      stationName: station.stationName,
      name: station.name,
      contactNo: station.contactNo,
      email: station.email,
      password: "",
      address: station.address
    });
    setSelectedStationId(station._id);
    setEditMode(true);
    setShowModal(true);
  };

  const openAddModal = () => {
    setFormData({ stationName: "", name: "", contactNo: "", email: "", password: "", address: "" });
    setEditMode(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditMode(false);
    setSelectedStationId(null);
  };

  return (
    <div className="relative max-w-5xl mx-auto p-6">
      {loading && (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      )}
      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-start pt-10 z-10">
          <div className="max-w-3xl p-6 rounded-lg font-poppins bg-white z-30 relative w-full mx-4 shadow-lg max-h-[100vh] overflow-y-auto mt-16">
            <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900" onClick={closeModal}>
              <FaTimes className="w-5 h-5" />
            </button>

            <h2 className="text-lg font-semibold">{editMode ? "Edit Station" : "New Station"}</h2>
            <form onSubmit={handleSubmit} className="mt-4">
              <label className="font-semibold text-[#07187B]">Station Name</label>
              <input type="text" name="stationName" value={formData.stationName} onChange={handleChange} required className="w-full p-2 border rounded-lg" />

              <label className="font-semibold text-[#07187B]">Manager Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded-lg" />

              <label className="font-semibold text-[#07187B]">Contact No</label>
              <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} required className="w-full p-2 border rounded-lg" />

              <label className="font-semibold text-[#07187B]">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded-lg" disabled={editMode} />

              {!editMode && (
                <>
                  <label className="font-semibold text-[#07187B]">Password</label>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
                </>
              )}

              <label className="font-semibold text-[#07187B]">Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full p-2 border rounded-lg" />

              <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">
                {loading ? "Loading" : editMode ? "Update Station" : "Add Station"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className={`relative z-0 ${showModal ? "blur-md" : ""}`}>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-poppins font-semibold">Station List</h2>
          <button className="flex items-center gap-3 bg-primary text-black rounded-lg hover:bg-secondary" onClick={openAddModal}>
            <PlusIcon className="w-7 h-7 text-[#5A6ACF] bg-[#FFE6CC] rounded-full p-1" strokeWidth={2} />
            <span className="font-poppins text-sm font-light">Add Station</span>
          </button>
        </div>
        <p className="text-gray-500 text-sm mb-4 font-poppins">List of people who manage different stations</p>

        {/* Station Table */}
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-60">
                {/* <th className="p-3 text-center">Sr.No</th> */}
                <th className="p-3 text-center">Station Name</th>
                <th className="p-3 text-center">Manager Name</th>
                <th className="p-3 text-center">Contact No</th>
                <th className="p-3 text-center">Email</th>
                <th className="p-3 text-center">Address</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {stations.map((station, index) => (
                <tr key={station._id} className="text-center">
                  {/* <td className="p-3 text-center">{index + 1}</td> */}
                  <td className="p-3 text-center">{station.stationName}</td>
                  <td className="p-3 text-center">{station.name}</td>
                  <td className="p-3 text-center">{station.contactNo}</td>
                  <td className="p-3 text-center">{station.email}</td>
                  <td className="p-3 text-center">{station.address}</td>
                  <td className="p-2 text-center flex justify-center gap-2">
                    <button onClick={() => openEditModal(station)} className="text-green-600 text-semibold hover:text-green-700">
                      <PencilIcon className="w-5 h-4.5" />
                    </button>
                    <button onClick={() => deleteStation(station._id)} className="text-red-500 hover:text-red-700">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
