

import { useEffect, useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  // Sample data for charts
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token ){
      navigate("/login");
    }
  }, [])

  const revenueData = Array.from({ length: 12 }, (_, i) => ({
    name: `${i + 1}`,
    value: Math.floor(Math.random() * 1000000),
  }));

  const orderTimeData = [
    { name: 'Morning', value: 28 },
    { name: 'Afternoon', value: 40 },
    { name: 'Evening', value: 32 },
  ];

  const orderData = Array.from({ length: 6 }, (_, i) => ({
    name: `${i + 1}`,
    value: Math.floor(Math.random() * 500),
  }));

  const laundryList = [
    { id: 1, name: 'Shivam Jain', amount: 75000, pieces: 8 },
    { id: 2, name: 'Ishan Shah', amount: 45000, pieces: 8 },
    { id: 3, name: 'Shivi Mehta', amount: 45000, pieces: 8 },
  ];

  
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];
  
  

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* First Row: Revenue & Order Time */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-4 rounded-lg shadow w-full md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold">Revenue</h2>
              <div className="text-2xl font-bold">IDR 7,852,000</div>
              <div className="text-sm text-green-500">↑ 2.1% vs last week</div>
            </div>
            <button className="text-blue-600">View Report</button>
          </div>
          <BarChart width={550} height={200} data={revenueData}>
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>

        {/* Order Time Chart */}
        <div className="bg-white p-4 rounded-lg shadow flex justify-center">
          <div>
            <h2 className="text-lg font-semibold text-center">Order Time</h2>
            <PieChart width={220} height={200}>
              <Pie
                data={orderTimeData}
                cx={110}
                cy={100}
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {orderTimeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>

      {/* Second Row: Rating, Laundry List & Orders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Your Rating Section */}
        <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Your Rating</h2>
          <div className="flex gap-4">
            {[
              { label: 'Hygiene', color: 'bg-purple-500', value: '85%' },
              { label: 'Management', color: 'bg-orange-400', value: '85%' },
              { label: 'Delivery', color: 'bg-cyan-500', value: '92%' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 rounded-full ${item.color} flex items-center justify-center text-white`}>
                  {item.value}
                </div>
                <div className="mt-2">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Laundry List */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Laundry List</h2>
          <div className="space-y-4">
            {laundryList.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <FiUsers />
                  </div>
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">INR {item.amount}</div>
                  </div>
                </div>
                <div className="bg-blue-100 px-3 py-1 rounded">{item.pieces} pieces</div>
              </div>
            ))}
          </div>
        </div>

        {/* Orders Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold">Orders</h2>
              <div className="text-2xl font-bold">2,568</div>
              <div className="text-sm text-red-500">↓ 2.1% vs last week</div>
            </div>
            <button className="text-blue-600">View Report</button>
          </div>
          <LineChart width={280} height={200} data={orderData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
