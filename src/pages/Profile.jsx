import React, { useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Harsh Pandey",
    email: "harsh@example.com",
    phone: "+91 98765 43210",
    bio: "Frontend Developer with passion for UI & animations.",
    role: "Admin",
  });

  const [profilePic] = useState(
    "https://api.dicebear.com/7.x/avataaars/svg?seed=profile"
  );

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-semibold mb-6">My Profile</h1>

      <div className="bg-secondry rounded-xl shadow p-6 space-y-8">
        {/* =================== PROFILE HEADER =================== */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={profilePic}
            alt="Profile"
            className="h-28 w-28 rounded-full border"
          />

          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.role}</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Change Picture
            </button>
          </div>
        </div>

        {/* =================== PROFILE FORM =================== */}
        <form className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-1 text-sm font-medium">Bio</label>
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 h-24 resize-none"
            />
          </div>
        </form>

        {/* =================== ACTION BUTTON =================== */}
        <div className="text-right">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>

        {/* =================== DANGER ZONE =================== */}
        <div className="pt-4 border-t">
          <h3 className="text-lg font-semibold text-red-600 mb-2">
            Danger Zone
          </h3>

          <p className="text-sm text-gray-600 mb-4">
            Deleting your account is permanent and cannot be undone.
          </p>

          <button className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
