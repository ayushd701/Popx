const Button = ({ 
  children, 
  onClick, 
  variant = "primary", 
  className = "",
  disabled = false,
}) => {
  const variants = {
    primary: `
      bg-indigo-600 hover:bg-indigo-700 
      dark:bg-indigo-500 dark:hover:bg-indigo-600
      text-white
      shadow-md hover:shadow-lg
      dark:shadow-indigo-900/30 dark:hover:shadow-indigo-900/50
    `,
    secondary: `
      bg-white dark:bg-gray-800
      text-indigo-600 dark:text-indigo-400
      border-2 border-indigo-600 dark:border-indigo-400
      hover:bg-indigo-50 dark:hover:bg-gray-700
    `,
    ghost: `
      text-gray-600 dark:text-gray-300
      hover:bg-gray-100 dark:hover:bg-gray-700
    `,
  };

  const baseClasses = `
    w-full p-3 rounded-lg font-medium 
    transition-all duration-200 ease-in-out 
    transform hover:scale-[1.02] active:scale-[0.98] 
    focus:outline-none focus:ring-2 
    focus:ring-indigo-500 focus:ring-opacity-50
    dark:focus:ring-indigo-400
    disabled:opacity-50 disabled:cursor-not-allowed
    disabled:transform-none
    flex items-center justify-center gap-2
  `;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
