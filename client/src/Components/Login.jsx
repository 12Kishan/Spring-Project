import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = User;
  const [showPassword, setShowPassword] = useState(false);

  
  const navigate = useNavigate();
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
    e.preventDefault();
    try{
    const res = await axios.get(`http://localhost:8080/api/user/validate/${email}/${password}`);
    console.log(res);
    if(res.status==200)
    {

      if (res.data.admin == true) {
        
        toast.success("Admin Login");
      } else {
        toast.success("user Login");
      }
      localStorage.setItem("userId",res.data.userId);
      localStorage.setItem("email",res.data.email);
      localStorage.setItem("name",res.data.userName);
      localStorage.setItem("isadmin",res.data.admin);

      console.log(localStorage.getItem("user"))
        navigate("/dashboard")
    }
   
  
  }catch(err){
      toast.error(err.res);
      console.log(err);
    }
  };

  return (
    <>
      <div className="container mx-auto p-10 m-10">
        <h2 className="text-3xl font-bold mb-5">Login</h2>
        <form onSubmit={(e) => saveUser(e)}>
          <div className="mb-5 relative">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email
            </label>
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
            <label
              htmlFor="password"
              className="block text-lg font-semibold mb-2"
            >
              Password
            </label>
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

          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md"
            >
              Save
            </button>
            <Link
              to={"/register"}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
      <Toaster />
    </>
  );
}
