import React, { useState } from "react";

export default function SettingsPage() {
  const [form, setForm] = useState({
    shopName: "My Ecommerce Store",
    email: "admin@example.com",
    phone: "+91 99999 99999",
    address: "Mumbai, Maharashtra",
    darkMode: false,
    notifications: true,
    smsAlerts: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggle = (field) => {
    setForm({ ...form, [field]: !form[field] });
  };

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>

      <div className="space-y-10">
        {/* ================= GENERAL SETTINGS ================= */}
        <section className="bg-secondry rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">General Information</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium">
                Shop Name
              </label>
              <input
                type="text"
                name="shopName"
                value={form.shopName}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Contact Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
          </div>

          <div className="mt-4 text-right">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Save Changes
            </button>
          </div>
        </section>

        {/* ================= APPEARANCE ================= */}
        <section className="bg-secondry rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Appearance</h2>

          <div className="flex items-center justify-between py-2">
            <p className="text-sm font-medium">Dark Mode</p>
            <button
              onClick={() => toggle("darkMode")}
              className={`w-12 h-6 rounded-full p-1 transition ${
                form.darkMode ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`h-4 w-4 bg-white rounded-full transition ${
                  form.darkMode ? "translate-x-6" : ""
                }`}
              ></div>
            </button>
          </div>

          <div className="mt-4 text-right">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Save
            </button>
          </div>
        </section>

        {/* ================= NOTIFICATIONS ================= */}
        <section className="bg-secondry rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Email Notifications</p>
              <button
                onClick={() => toggle("notifications")}
                className={`w-12 h-6 rounded-full p-1 transition ${
                  form.notifications ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`h-4 w-4 bg-white rounded-full transition ${
                    form.notifications ? "translate-x-6" : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">SMS Order Alerts</p>
              <button
                onClick={() => toggle("smsAlerts")}
                className={`w-12 h-6 rounded-full p-1 transition ${
                  form.smsAlerts ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`h-4 w-4 bg-white rounded-full transition ${
                    form.smsAlerts ? "translate-x-6" : ""
                  }`}
                ></div>
              </button>
            </div>
          </div>

          <div className="mt-4 text-right">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Update Notifications
            </button>
          </div>
        </section>

        {/* ================= DANGER ZONE ================= */}
        <section className="bg-secondry rounded-xl shadow p-6 border border-red-300">
          <h2 className="text-xl font-semibold text-red-600 mb-4">
            Danger Zone
          </h2>

          <p className="text-sm mb-4">
            Deleting your store will remove all products, orders, and settings.
            This action cannot be undone.
          </p>

          <button className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Delete Store
          </button>
        </section>
      </div>
    </div>
  );
}
