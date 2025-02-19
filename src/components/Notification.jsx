import React from "react";

export default function Notification() {
  return (
    <div className="p-4 lg:ml-32 ">
      <div className="max-w-5xl mx-auto bg-white p-6 shadow-md rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center pb-4 mb-4">
          <h2 className="text-lg font-semibold">Notification</h2>
          <button className="text-blue-600 text-sm">Mark All as read</button>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {/* Notification Item */}
          <div className="bg-blue-100 p-4 rounded-lg flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-800">New order has been late</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">2m</span>
          </div>

          {/* New Feature Alert */}
          <div className="bg-white p-4 rounded-lg shadow flex justify-between items-start border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <div>
                <p className="text-sm font-semibold text-gray-900">New Feature Alert!</p>
                <p className="text-sm text-gray-600">
                  We’re pleased to introduce the latest enhancements in our templating experience.
                </p>
                <button className="text-white bg-blue-600 px-4 py-1 text-sm rounded mt-2">Try now</button>
              </div>
            </div>
            <span className="text-xs text-gray-500">14h</span>
          </div>

          {/* Another Notification Item */}
          <div className="bg-blue-100 p-4 rounded-lg flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-800">New order has been late</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">2m</span>
          </div>
        </div>
      </div>
    </div>
  );
}
