import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Navbar from '../Components/Navbar';

export default function AddUser() {

    const [User, setUser] = useState({
        userName: "",
        email: "",
        contactNo:"",
        password: "",
        confirmPassword:""
    });

    const { userName, email,contactNo, password, confirmPassword } = User;
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        setUser({
            ...User,
            [e.target.name]: e.target.value,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggles the state for password visibility
    };

    const saveUser = async (e) => {
        if(User.password === User.confirmPassword)
        {
            e.preventDefault();
            await axios.post("http://localhost:8080/api/user", User);
            toast.success("User added Successfully");
            navigator("/Login");
        }
        else
        {
            toast.error("Password and confirm password not matched");
        }
        
    };

  return (
    <>
    <Navbar/>
    <div className="p-10 mx-96 shadow-xl">
            <h2 className="text-3xl font-bold mb-5">Register</h2>
            <form onSubmit={(e) => saveUser(e)}>
                <div className="mb-5 relative">
                    <label htmlFor="userName" className="block text-lg font-semibold mb-2">User Name</label>
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={userName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="mb-5 relative">
                    <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="mb-5 relative">
                    <label htmlFor="contactNo" className="block text-lg font-semibold mb-2">Contact NO</label>
                    <input
                        type="number"
                        name="contactNo"
                        id="contactNo"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={contactNo}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="mb-5 relative">
                    <label htmlFor="password" className="block text-lg font-semibold mb-2">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={password}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 mt-4 text-gray-500 focus:outline-none"
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                <div className="mb-5 relative">
                    <label htmlFor="confirmPassword" className="block text-lg font-semibold mb-2">Confirm Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        id="confirmPassword"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                        value={confirmPassword}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 mt-4 text-gray-500 focus:outline-none"
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                <div className="flex space-x-4">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md"
                    >
                        Save
                    </button>
                    <Link
                        to={"/Login"}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md"
                    >
                        Login
                    </Link>
                </div>
            </form>
        </div>
        <Toaster />
        </>
    );
}
