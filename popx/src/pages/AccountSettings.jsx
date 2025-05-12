import { useTheme } from "../context/ThemeContext";
import Button from "../components/Button";

const AccountSettings = () => {
  const { theme } = useTheme();
  document.title = "Settings";

  return (
    <div className={`min-h-screen p-4 sm:p-6 transition-colors duration-300 ${
      theme === "dark" ? "bg-gray-900" : "bg-gray-100"
    }`}>
      <div className="max-w-md mx-auto flex flex-col min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)]">
        <div className="mb-8">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}>
            Account Settings
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <div className="relative self-center sm:self-auto">
              <img
                src="/random_img.jpg"
                alt="profile"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-indigo-400"
              />
              <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className={`font-bold text-lg sm:text-xl transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}>
                Marry Doe
              </h3>
              <p className={`transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}>
                Marry@gmail.com
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className={`text-base sm:text-lg font-medium mb-3 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>
              About
            </h4>
            <p className={`text-gray-600 dark:text-gray-400 transition-colors duration-300 text-sm sm:text-base`}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>

        <div className="mt-auto space-y-4 pt-8">
          <Button variant="secondary" className="w-full py-3 sm:py-3.5">
            Change Password
          </Button>
          <Button
            variant="ghost"
            className="w-full py-3 sm:py-3.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;