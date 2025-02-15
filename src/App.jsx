// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import CustomerList from './components/CustomerList';
// import NewSupply from './components/NewSupply';
// import EmployeeList from './components/EmployeeList';
// import LaundryCategoryList from './components/LaundaryCategoryList';
// import SupplyList from './components/SupplyList';
// import InventryList from './components/InventryList';
// import NewLaundary from './components/NewLaundary';
// import NewInventory from './components/NewInventory'
// import NewEmployee from './components/NewEmployee';
// import NewCustomer from './components/NewCustomer';
// import BillingDashboard from './components/Billing';
// import Reports from './components/Reports';
// import Dashboard from './components/Dashboard';
// import { SignupPage } from './components/Signup';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white">
//         <Navbar />
//         <Sidebar />
        
//         <main className="lg:ml-24 pt-20">
//           <Routes>
//           <Route path="/signup" element={<SignupPage />} />
//             <Route path="/" element={<Dashboard/>} />
//             <Route path="/customers" element={<CustomerList />} />
//             <Route path="/laundary-categories" element={<LaundryCategoryList/>} />
//             <Route path="/supply-list" element={<SupplyList/> }/>
//             <Route path="/inventory-list" element={<InventryList/>} />
//             <Route path="/employees-list" element={<EmployeeList/>} />
//             <Route path="/billing" element={<BillingDashboard/>} />
//             <Route path="/accounts" element={<div className="p-4">Accounts Content</div>} />
//             <Route path="/reports" element={<Reports/>} />
//             <Route path="/settings" element={<div className="p-4">Settings Content</div>} />
//             <Route path="/new-employee" element={<NewEmployee/>} />
//             <Route path="/new-inventory" element={<NewInventory/>} />
//             <Route path="/new-laundary" element={<NewLaundary/>} />
//             <Route path="/new-supply" element={<NewSupply />} />
//             <Route path="/new-customer" element={<NewCustomer/>} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CustomerList from './components/CustomerList';
import NewSupply from './components/NewForm/NewSupply';
import EmployeeList from './components/EmployeeList';
import LaundryCategoryList from './components/LaundaryCategoryList';
import SupplyList from './components/SupplyList';
import InventryList from './components/InventryList';
import NewLaundary from './components/NewForm/NewLaundary';
import NewInventory from './components/NewForm/NewInventory';
import NewEmployee from './components/NewForm/NewEmployee';
import NewCustomer from './components/NewForm/NewCustomer';
import BillingDashboard from './components/Billing';
import Reports from './components/Reports';
import Dashboard from './components/Dashboard';
import { SignupPage } from './components/Signup';
import { LoginPage } from './components/Login';
import { OTPVerificationPage } from './components/OTPVerification';
import Loader from './components/Loader';

function App() {
  return (
    <Router>
      <Routes>
        {/* Signup Page without Navbar and Sidebar */}
        
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp-verification" element={<OTPVerificationPage/>} />
        
        {/* Routes that include Navbar and Sidebar */}
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <Sidebar />
              <main className="lg:ml-24 pt-20">
                <Routes>
                  <Route path="/" element={ <Dashboard />} />
                  <Route path="/customers" element={<CustomerList />} />
                  <Route path="/laundary-categories" element={<LaundryCategoryList />} />
                  <Route path="/supply-list" element={<SupplyList />} />
                  <Route path="/inventory-list" element={<InventryList />} />
                  <Route path="/employees-list" element={<EmployeeList />} />
                  <Route path="/billing" element={<BillingDashboard />} />
                  <Route path="/accounts" element={<div className="p-4">Accounts Content</div>} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/settings" element={<div className="p-4">Settings Content</div>} />
                  <Route path="/new-employee" element={<NewEmployee />} />
                  <Route path="/new-inventory" element={<NewInventory />} />
                  <Route path="/new-laundary" element={<NewLaundary />} />
                  <Route path="/new-supply" element={<NewSupply />} />
                  <Route path="/new-customer" element={<NewCustomer />} />
                </Routes>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
