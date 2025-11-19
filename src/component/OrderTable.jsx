import React, { useState } from "react";

const Orders = () => {
  const [orders] = useState([
    {
      id: "ORD-1001",
      customer: "Amit Sharma",
      amount: 1499,
      status: "Delivered",
      date: "2025-01-15",
    },
    {
      id: "ORD-1002",
      customer: "Priya Singh",
      amount: 899,
      status: "Pending",
      date: "2025-01-17",
    },
    {
      id: "ORD-1003",
      customer: "Rohit Verma",
      amount: 2299,
      status: "Shipped",
      date: "2025-01-18",
    },
    {
      id: "ORD-1004",
      customer: "Neha Patel",
      amount: 499,
      status: "Cancelled",
      date: "2025-01-19",
    },
    {
      id: "ORD-1005",
      customer: "Karan Gupta",
      amount: 1299,
      status: "Processing",
      date: "2025-01-20",
    },
  ]);

  const statusStyle = {
    Delivered: "text-green-600 bg-green-100",
    Pending: "text-yellow-700 bg-yellow-100",
    Shipped: "text-blue-700 bg-blue-100",
    Cancelled: "text-red-700 bg-red-100",
    Processing: "text-purple-700 bg-purple-100",
  };

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>

      <div className="overflow-x-auto rounded-xl shadow">
        <table className="min-w-full bg-secondry text-sm">
          <thead className="bg-primary font-grok text-left">
            <tr>
              <th className="p-4 font-medium">Order ID</th>
              <th className="p-4 font-medium">Customer</th>
              <th className="p-4 font-medium">Amount</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-border hover:bg-primary transition"
              >
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.customer}</td>
                <td className="p-4">₹{order.amount}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      statusStyle[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="p-4">{order.date}</td>

                <td className="p-4 text-right">
                  <button className="px-3 py-1 text-blue-600 hover:underline">
                    View
                  </button>
                  <button className="px-3 py-1 text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
