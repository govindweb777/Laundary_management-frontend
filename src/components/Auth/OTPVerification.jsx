
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import LoaderWhite from "../LoaderWhite";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OtpInput from "react-otp-input";

export function OTPVerificationPage() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const verifyOTP = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Email is missing. Please sign up again.");
      toast.error("Email is missing. Please sign up again.");
      navigate("/signup");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${BASE_URL}api/auth/otp-verification`, { email, otp });
      navigate("/login");
      toast.success("OTP Verified Successfully");
    } catch (error) {
      console.log(error);
      alert("OTP Verification failed");
      toast.error("OTP Verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      {loading ? (
        <LoaderWhite />
      ) : (
        <div className="w-[500px]  p-12 space-y-8 bg-white shadow-2xl rounded-2xl">
          <h2 className="text-3xl font-extrabold text-center text-[#5A6ACF]">Verify OTP</h2>

          <form onSubmit={verifyOTP} className="space-y-4  w-[400px]">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.25)",
                  }}
                  className="w-[48px] lg:w-[60px] border-0 bg-[#5A6ACF]/10  rounded-[0.5rem] text-black aspect-square text-center  focus:border-0 focus:outline-2 focus:outline-[#5A6ACF]"
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
            />

            <button type="submit" className="w-full bg-[#5A6ACF] text-white py-3 rounded-lg">Verify</button>
          </form>

        </div>
      )}
    </div>

  );
}
