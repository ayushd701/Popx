import { ThemeToggle } from './ThemeToggle';

export const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {children}
      <ThemeToggle />
    </div>
  );
};