import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const Settings = () => {
  const [user, setUser] = useState({
    fullName: "",
    //lastName: "",
    email: "",
    contactNumber: "",
    avatar: ""
  });
  
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const token = localStorage.getItem("token");
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;
      try {
        const response = await axios.get(`${BASE_URL}api/auth/user/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        toast.error(error.response?.data?.msg || "Failed to fetch user details");
      }
    };
    fetchUser();
  }, [token]);

  const handleAvatarChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("avatar", file);
      
      const response = await axios.post(
        `${BASE_URL}api/auth/update-avatar`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      setUser(prev => ({ ...prev, avatar: response.data.avatarUrl }));
      toast.success("Profile picture updated successfully!");
    } catch (error) {
      toast.error(error.response?.data?.msg || "Failed to update profile picture");
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${BASE_URL}api/auth/change-password`,
        { email: user?.email, currentPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      toast.error(error.response?.data?.msg || "Failed to change password");
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${BASE_URL}api/auth/update-profile`,
        user,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUser(response.data);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.response?.data?.msg || "Failed to update profile");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-black ">
      {/* Profile Picture Section */}
      <div className="bg-gray-300 rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-[#5A6ACF] rounded-full flex items-center justify-center text-white text-2xl">          
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              user.fullName ? user.fullName.charAt(0).toUpperCase() : '?'
            )}

          </div>
          <div className="flex-1">
            <h2 className="text-black text-xl font-semibold mb-2">Change Profile Picture</h2>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition">
                Select
              </button>
              <label className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition cursor-pointer">
                Upload
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Information Section */}
      <form onSubmit={handleProfileUpdate} className="bg-gray-300 rounded-lg p-6">
        <h2 className="text-[#5A6ACF] text-xl font-semibold mb-6">Profile Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-black mb-2">Full Name</label>
            <input
              type="text"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="w-full p-3 bg-white text-black rounded-md border border-gray-700"
            />
          </div>
          {/* <div>
            <label className="block text-white mb-2">Last Name</label>
            <input
              type="text"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700"
            />
          </div> */}
          <div>
            <label className="block text-black mb-2">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full p-3 bg-white text-black rounded-md border border-gray-700"
            />
          </div>

          {/* <div>
            <label className="block text-white mb-2">Contact Number</label>
            <input
              type="tel"
              value={user.contactNumber}
              onChange={(e) => setUser({ ...user, contactNumber: e.target.value })}
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700"
            />
          </div> */}

        </div>
        {/* <button type="submit" className="mt-6 px-6 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition">
          Update Profile
        </button> */}
      </form>

      {/* Password Section */}
      <form onSubmit={handlePasswordChange} className="bg-gray-300 rounded-lg p-6">
        <h2 className="text-[#5A6ACF] text-xl font-semibold mb-6">Password</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-black mb-2">Current Password</label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full p-3 bg-white text-black rounded-md border border-gray-700 pr-10"
                placeholder="Enter Current Password"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Eye className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
          <div>
            <label className="block text-black mb-2">New Password</label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-3 bg-white text-black rounded-md border border-gray-700 pr-10"
                placeholder="Enter New Password"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Eye className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-3">
          <button type="button" className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition">
            Cancel
          </button>
          <button type="submit" className="px-6 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;