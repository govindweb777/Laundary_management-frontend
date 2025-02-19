
import React from 'react';
import { PlusIcon } from "@heroicons/react/24/outline";

const Reports = () => {
    const categories = new Array(9).fill({
        date: "Dec.30,2024",
        name: "Shayam Singh",
        amount: "INR 45,000",
    });

    return (
        <div className="p-6 max-w-5xl mx-auto font-poppins">
            <div className="bg-white rounded-lg p-6 mb-6">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-center">
                    <div className='flex'>
                        <div>
                            <h2 className="text-xl font-poppins mb-1">Reports</h2>
                            <p className="text-gray-500 text-sm mb-6">List of people who are working here</p>
                        </div>

                        <div className='md:ml-[300px] lg:ml-[470px]'>
                            <button className="flex items-center gap-3 bg-primary text-black rounded-lg hover:bg-secondary" onClick={() => setShowModal(true)}>
                                <PlusIcon className="w-7 h-7 text-[#5A6ACF] bg-[#FFE6CC] rounded-full p-1" strokeWidth={2} />
                                <span className="font-poppins text-sm font-light">New Employee</span>
                            </button>
                        </div>
                    </div>

                </div>

                {/* Date Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-lg font-poppins mb-2">From Date</h3>
                        <input type="text" className="border border-gray-300 p-2 rounded-2xl md:w-[300px] w-[383px] h-[37px]" />
                    </div>
                    <div>
                        <h3 className="text-lg font-poppins mb-2">To Date</h3>
                        <input type="text" className="border border-gray-300 p-2 rounded-2xl md:w-[300px] lg:w-[383px] h-[37px]" />
                    </div>
                </div>

                {/* Table */}
                <div className="mt-4 p-4 overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                        <thead>
                            <tr className="text-left text-black">
                                <th className="p-3 text-center">Sr.No</th>
                                <th className="p-3 text-center">Date</th>
                                <th className="p-3 text-center">Customer Name</th>
                                <th className="p-3 text-center">Amount</th>
                                <th className="p-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((cat, index) => (
                                <tr key={index} className="text-gray-700">
                                    <td className="p-3 text-center">{index + 1}.</td>
                                    <td className="p-3 text-center">{cat.date}</td>
                                    <td className="p-3 text-center">{cat.name}</td>
                                    <td className="p-3 text-center">{cat.amount}</td>
                                    <td className="p-3  items-center">
                                        <svg width="69" height="24" viewBox="0 0 69 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M48 21C47.45 21 46.9792 20.8042 46.5875 20.4125C46.1958 20.0208 46 19.55 46 19V6H45V4H50V3H56V4H61V6H60V19C60 19.55 59.8042 20.0208 59.4125 20.4125C59.0208 20.8042 58.55 21 58 21H48ZM58 6H48V19H58V6ZM50 17H52V8H50V17ZM54 17H56V8H54V17Z" fill="#FF0004" />
                                        </svg>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Total Amount */}
                <div className="flex  mt-4">
                    <span className="text-lg font-semibold sm:ml-[300px] lg:ml-[400px]">Total</span>
                    <span className="text-lg font-semibold sm:ml-[135px]  lg:ml-[180px]">INR 45,000</span>
                </div>
            </div>
        </div>
    );
};

export default Reports;
