
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import LoaderWhite from "../LoaderWhite";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

export function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  console.log(BASE_URL);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${BASE_URL}api/auth/signup`, { fullname, email, password });
      navigate("/otp-verification", { state: { email } });
      toast.success("OTP Send Successfully")
    } catch (error) {
      console.log(error);
      alert("Signup failed");
      toast.success("Signup Failed")
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      {loading ? (
        <LoaderWhite />
      ) : (
        <div className="w-[600px] max-w-md p-12 space-y-6 bg-white shadow-2xl rounded-2xl">
          <h2 className="text-3xl font-extrabold text-center text-[#5A6ACF]">Sign Up</h2>

          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5A6ACF] transition-transform transform hover:scale-105"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5A6ACF] transition-transform transform hover:scale-105"
            />

            <div className="relative w-full  border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5A6ACF] transition-transform transform hover:scale-105">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full px-4 py-3 text-sm text-gray-700 focus:outline-none"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 z-[10] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>


            <button
              type="submit"
              className="w-full bg-[#5A6ACF] text-white py-3 rounded-lg font-semibold hover:bg-[#4a5cbf] transition duration-300 transform hover:scale-105"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-[#5A6ACF] font-semibold hover:underline">Login</a>
          </p>
        </div>
      )}
    </div>
  );
}

