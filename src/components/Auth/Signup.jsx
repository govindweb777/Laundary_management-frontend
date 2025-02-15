import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"


export function SignupPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", {fullname, email, password });
      navigate("/otp-verification", { state: { email} });
    } catch (error) {
      console.log(error);
      alert("Signup failed");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-2xl">
        <h2 className="text-3xl font-extrabold text-center text-[#5A6ACF]">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            value= {fullname}
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
          <input
            type="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5A6ACF] transition-transform transform hover:scale-105"
          />
          {/* <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5A6ACF] transition-transform transform hover:scale-105"
          /> */}
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
    </div>
  );
}
