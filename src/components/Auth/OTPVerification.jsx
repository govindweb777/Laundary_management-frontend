import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios"

export function OTPVerificationPage() {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
  const email = location.state?.email;
  
    const verifyOTP = async (e) => {
      e.preventDefault();
      if (!email) {
        alert("Email is missing. Please sign up again.");
        navigate("/signup");
        return;
      }
  
      try {
        await axios.post("http://localhost:5000/api/auth/otp-verification", { email, otp });
        navigate("/login");
      } catch (error) {
        console.log(error);
        alert("OTP Verification failed");
      }
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-2xl">
          <h2 className="text-3xl font-extrabold text-center text-[#5A6ACF]">Verify OTP</h2>
          <form onSubmit={verifyOTP} className="space-y-4">
            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" className="w-full px-4 py-3 border rounded-lg" />
            <button type="submit" className="w-full bg-[#5A6ACF] text-white py-3 rounded-lg">Verify</button>
          </form>
        </div>
      </div>
    );
  }