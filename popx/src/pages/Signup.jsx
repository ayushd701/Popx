import Input from "../components/Input";
import Button from "../components/Button";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  document.title = "Signup";

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <div className="w-full max-w-md">
        <h2 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
          theme === 'dark' ? 'text-white' : 'text-gray-800'
        }`}>
          Create your PopX account
        </h2>
        
        <Input label="Full Name*" placeholder="Enter full name" />
        <Input label="Phone number*" placeholder="Enter phone number" />
        <Input label="Email address*" placeholder="Enter email" />
        <Input label="Password*" type="password" placeholder="Enter password" />
        <Input label="Company name" placeholder="Enter company name" />
        
        <div className="mb-4">
          <p className={`text-sm mb-2 transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Are you an Agency?*
          </p>
          <div className="flex space-x-4">
            <label className={`flex items-center space-x-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <input 
                type="radio" 
                name="agency" 
                className={`h-4 w-4 ${
                  theme === 'dark' 
                    ? 'text-indigo-500 focus:ring-indigo-400' 
                    : 'text-purple-600 focus:ring-purple-500'
                }`}
              />
              <span>Yes</span>
            </label>
            <label className={`flex items-center space-x-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <input 
                type="radio" 
                name="agency" 
                className={`h-4 w-4 ${
                  theme === 'dark' 
                    ? 'text-indigo-500 focus:ring-indigo-400' 
                    : 'text-purple-600 focus:ring-purple-500'
                }`}
              />
              <span>No</span>
            </label>
          </div>
        </div>
        
        <Button onClick={() => navigate("/settings")} variant="primary" className="w-full">
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default Signup;
