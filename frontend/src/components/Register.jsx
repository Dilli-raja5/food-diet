import { useState } from "react";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");
    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        dietaryPreferences: "",
        allergies: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const tempErrors = {};
        if (!form.name) tempErrors.name = "Name is required.";
        if (!form.email) {
            tempErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            tempErrors.email = "Email is not valid.";
        }
        if (!form.password) tempErrors.password = "Password is required.";
        if (!form.age) tempErrors.age = "Age is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            // Here you can replace with your real API call
            console.log("Registering user:", form);
            setSnackbarSeverity("success");
            setSnackbarMessage("Registered successfully!");
            setSnackbarOpen(true);
            setForm({
                name: "",
                email: "",
                password: "",
                age: "",
                dietaryPreferences: "",
                allergies: ""
            });
            setErrors({});
     
             setTimeout(() => {
                   navigate("/login");
          }, 2000);
        } catch (err) {
            console.error("Registration failed:", err);
            setSnackbarSeverity("error");
            setSnackbarMessage("Registration failed!");
            setSnackbarOpen(true);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="flex flex-col items-center justify-center  bg-white m-2">
            <h2 className="text-2xl font-semibold mb-6 text-center text-title">Register</h2>

            <form className="w-full max-w-sm mb-2" onSubmit={handleSubmit}>
                {[
                    { label: "Name", name: "name", type: "text" },
                    { label: "Email", name: "email", type: "email" },
                    { label: "Age", name: "age", type: "number" },
                    { label: "Dietary Preferences", name: "dietaryPreferences", type: "text" },
                    { label: "Allergies", name: "allergies", type: "text" }
                ].map(({ label, name, type }) => (
                    <div className="mb-3" key={name}>
                       
                            <input
                                type={type}
                                name={name}
                                placeholder={label}
                                value={form[name]}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4D44B5]"
                                required={name !== "dietaryPreferences" && name !== "allergies"}
                            />
                            {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
                      
                    </div>
                ))}

                <div className="mb-4 relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4D44B5]"
                        required
                    />
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
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>

            
                    <div className="my-2 flex justify-center">
                        <button
                            type="submit"
                            className="w-1/2 my-2 bg-green-600 text-white p-3 rounded-lg transition-colors duration-200"
                        >
                            Register
                        </button>
                    </div>
             
            </form>

            <p >
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 underline">
                    Login
                </Link>
            </p>

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
    );
};

export default Register;