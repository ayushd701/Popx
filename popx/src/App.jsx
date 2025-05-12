import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Welcome, Login, Signup, AccountSettings } from "./pages/index";
import { ThemeProvider } from "./context/ThemeContext";
import {Layout} from "./components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><Welcome /></Layout>,
    },
    {
      path: "/login",
      element: <Layout><Login /></Layout>,
    },
    {
      path: "/signup",
      element: <Layout><Signup /></Layout>,
    },
    {
      path: "/settings",
      element: <Layout><AccountSettings /></Layout>,
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
