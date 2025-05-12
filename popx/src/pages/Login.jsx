import Input from "../components/Input";
import Button from "../components/Button";
import { useTheme } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen flex flex-col justify-center p-6 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <div className="w-full max-w-md mx-auto">
        <div className="mb-8 text-center">
          <h2 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            Sign in to PopX
          </h2>
          <p className={`text-base transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Access your account to continue
          </p>
        </div>

        <div className="space-y-5">
          <Input 
            label="Email Address" 
            placeholder="Enter email address" 
            type="email"
          />
          <Input 
            label="Password" 
            placeholder="Enter password" 
            type="password"
          />

          <div className="flex justify-end">
            <Link
              className={`text-sm font-medium transition-colors duration-200 ${
                theme === 'dark' 
                  ? 'text-indigo-400 hover:text-indigo-300' 
                  : 'text-purple-600 hover:text-purple-500'
              }`}
            >
              Forgot password?
            </Link>
          </div>

          <Button 
            variant="primary" 
            className="w-full py-3 mt-2"
            onClick={() => navigate("/settings")}
          >
            Login
          </Button>

          <div className={`text-center text-sm pt-4 border-t transition-colors duration-300 ${
            theme === 'dark' ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'
          }`}>
            Don't have an account?{' '}
            <Link 
              to="/signup" 
              className={`font-semibold transition-colors duration-200 ${
                theme === 'dark' 
                  ? 'text-indigo-400 hover:text-indigo-300' 
                  : 'text-purple-600 hover:text-purple-500'
              }`}
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;