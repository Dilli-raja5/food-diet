import { useState } from "react";

const Profile = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        notifications: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSave = () => {
        // Add save logic here (e.g., API call)
        console.log("Saved:", form);
    };

    return (
        <div className="max-w-md mx-auto h-full overflow-auto hide-scrollbar mb-6">
            <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-md rounded-lg border border-gray-200  ">
                <h2 className="text-xl font-semibold mb-6 text-center text-green-700">
                    Profile Settings
                </h2>

                {/* Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Password:</label>
                    <button className="flex items-center gap-2 text-blue-600 hover:underline">
                        Change Password 🔒
                    </button>
                </div>

                {/* Role (Read-only) */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Role:</label>
                    <input
                        type="text"
                        value="Dietitian" // or "Dietitian"
                        readOnly
                        className="w-full px-3 py-2 border bg-gray-100 rounded-md text-gray-500"
                    />
                </div>

                {/* Notifications */}
                <div className="mb-6 flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="notifications"
                        checked={form.notifications}
                        onChange={handleChange}
                    />
                    <label className="text-gray-700">Email Alerts</label>
                </div>

                {/* Save Button */}
                <button
                    onClick={handleSave}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                >
                    💾 Save Changes
                </button>
            </div>
        </div>
    );
};

export default Profile;
