import { useState } from "react";
// import { login } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { loginUser } = useAuth();
    const navigate = useNavigate();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");
    const [showPassword, setShowPassword] = useState(true);

    const [form, setForm] = useState({ email: "", password: "" });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.email = form.email
            ? /\S+@\S+\.\S+/.test(form.email)
                ? ""
                : "Email is not valid."
            : "Email is required.";
        tempErrors.password = form.password ? "" : "Password is required.";

        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        validate()
        try {
            //   const res = await login(form);
            //   loginUser(res.data.user);

            // testing
            const dummyUsers = [
                {
                    id: 1,
                    name: "Client User",
                    email: "client@example.com",
                    role: "client",
                },
                {
                    id: 2,
                    name: "Dietitian User",
                    email: "dietitian@example.com",
                    role: "dietitian",
                },
            ];

            // Check if the form email matches any dummy user
            const foundUser = dummyUsers.find((u) => u.email === form.email);

            if (foundUser) {
                loginUser(foundUser); // set auth context
                console.log("Logged in successfully:", foundUser);
                setSnackbarSeverity("success");
                setSnackbarMessage("Logged in successfully:");
                setSnackbarOpen(true);
                setForm({
                    email: "",
                    password: ""
                });
                setErrors({});
                navigate("/home");
            } else {
                console.error("Invalid credentials (dummy login)");
                alert("Invalid email. Please use a dummy email.");
            }

        } catch (err) {
            console.error("Login failed:", err.response?.data || err.message);
        }
    };


    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };


    return (
        <>
            <div className="flex flex-col items-center justify-center px-2 h-96">
                <>
                    <h2 className="text-2xl font-semibold mb-6 text-center text-title">
                        Login
                    </h2>

                    <form className="w-full max-w-md" onSubmit={handleSubmit}>

                        <div className="h-18">
                            <div className="m-6  flex p-3">
                                <>
                                    <div className="bg-green-600 p-6 rounded-l-lg flex items-center justify-center">
                                        <img
                                            src="/icons/email.png"
                                            alt="email"
                                            className="h-5 w-5"
                                        />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className={`w-full  m-4 p-6 border-t border-r border-b outline-none ${errors.email ? "border-red-500" : "border-gray-300"
                                            } rounded-r-lg focus:outline-none focus:ring-1 focus:ring-[#4D44B5]`}
                                        required
                                    />
                                </>
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm mb-4">{errors.email}</p>
                            )}
                        </div>

                        <div className="h-18">
                            <div className="mb-4 flex relative">
                                <div className="bg-green-600 p-3 rounded-l-lg flex items-center justify-center">
                                    <img
                                        src="/icons/password.png"
                                        alt="password"
                                        className="h-6 w-6 p-3"
                                    />
                                </div>
                                <input
                                    type={showPassword ? "password" : "text"}
                                    name="password"
                                    placeholder="Password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className={`w-full p-3 border-t border-r border-b outline-none ${errors.password ? "border-red-500" : "border-gray-300"
                                        } rounded-r-lg focus:outline-none focus:ring-1 focus:ring-[#4D44B5] box-border`}
                                    required
                                />
                                {/* Eye Icon */}
                                <div
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <VisibilityOffIcon className="text-gray-500" />
                                    ) : (
                                        <VisibilityIcon className="text-gray-500" />
                                    )}
                                </div>
                            </div>

                            {errors.password && (
                                <p className="text-red-500 text-sm mb-4">{errors.password}</p>
                            )}
                        </div>

                        <div className="mb-6 flex justify-center">
                            <button
                                type="submit"
                                className="w-1/3 bg-green-600 text-white p-3 rounded-lg transition-colors duration-200 cursor-pointer"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <Link to="/register" className="text-blue-500 underline">
                            Resister
                        </Link>
                    </div>

                </>

                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                >
                    <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </div>

        </>
    );
};

export default Login;