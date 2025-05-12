import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Welcome = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col justify-center p-6 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <div className="w-full max-w-md mx-auto">
        <div className="text-center space-y-4 mb-8">
          <h2 className={`text-3xl font-bold transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            Welcome to PopX
          </h2>
          <p className={`text-base transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => navigate("/signup")}
            variant="primary"
            className="w-full py-3 text-lg"
          >
            Create Account
          </Button>

          <Button
            onClick={() => navigate("/login")}
            variant={theme === 'dark' ? 'ghost' : 'secondary'}
            className="w-full py-3 text-lg"
          >
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;