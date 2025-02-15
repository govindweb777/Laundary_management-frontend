import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      alert("Login failed");
    }
  };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-2xl">
          <h2 className="text-3xl font-extrabold text-center text-[#5A6ACF]">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
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
            <button
              type="submit"
              className="w-full bg-[#5A6ACF] text-white py-3 rounded-lg font-semibold hover:bg-[#4a5cbf] transition duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-[#5A6ACF] font-semibold hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    );
  }
  