import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Welcome = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 to-indigo-900' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-50'
    }`}>
      <div className="w-full max-w-lg mx-auto">
        <div className={`rounded-xl shadow-lg p-8 sm:p-10 transition-colors duration-300 ${
          theme === 'dark' 
            ? 'bg-gray-800 shadow-indigo-900/30' 
            : 'bg-white'
        }`}>
          <div className="text-center space-y-2 mb-8">
            <h2 className={`text-3xl font-bold transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
              Welcome to PopX
            </h2>
            <p className={`text-sm sm:text-base transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
            }`}>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => navigate("/signup")}
              variant="primary"
              className="py-3"
            >
              Create Account
            </Button>

            <Button
              onClick={() => navigate("/login")}
              variant={theme === 'dark' ? 'ghost' : 'secondary'}
              className="py-3"
            >
              Already Registered? Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;