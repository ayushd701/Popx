import { useTheme } from "../context/ThemeContext";

const Input = ({ label, className = "", ...props }) => {
  const { theme } = useTheme();

  return (
    <div className="mb-4">
      <label className={`block text-sm mb-1 transition-colors duration-200 ${
        theme === 'dark' ? 'text-indigo-300' : 'text-purple-600'
      }`}>
        {label}
      </label>
      <input
        className={`w-full border rounded-md p-2 transition-colors duration-200 focus:ring-2 focus:outline-none ${
          theme === 'dark' 
            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500' 
            : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500'
        } ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;

