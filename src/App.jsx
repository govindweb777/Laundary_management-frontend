import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CustomerList from './components/CustomerList';
import EmployeeList from './components/EmployeeList';
import LaundryCategoryList from './components/LaundaryCategoryList';
import SupplyList from './components/SupplyList';
import InventryList from './components/InventryList';
import BillingDashboard from './components/Billing';
import Reports from './components/Reports';
import Dashboard from './components/Dashboard';
import { SignupPage } from './components/Auth/Signup';
import { LoginPage } from './components/Auth/Login';
import { OTPVerificationPage } from './components/Auth/OTPVerification';
import Loader from './components/Loader';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Settings from './components/Settings';

function App() {
  return (
    <div>
      <Router >

        <Routes>
          {/* Signup Page without Navbar and Sidebar */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/otp-verification" element={<OTPVerificationPage />} />

          {/* Routes that include Navbar and Sidebar */}
          <Route
            path="/*"
            element={
              <div className="min-h-screen bg-white">
                <Navbar />
                <Sidebar />
                <main className="lg:ml-24 pt-20">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/customers" element={<CustomerList />} />
                    <Route path="/laundary-categories" element={<LaundryCategoryList />} />
                    <Route path="/supply-list" element={<SupplyList />} />
                    <Route path="/inventory-list" element={<InventryList />} />
                    <Route path="/employees-list" element={<EmployeeList />} />
                    <Route path="/billing" element={<BillingDashboard />} />
                    <Route path="/accounts" element={<div className="p-4">Accounts Content</div>} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings/>} />
                  </Routes>
                </main>
              </div>
            }
          />
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
