import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Welcome, Login, Signup, AccountSettings } from "./pages/index";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/settings",
      element: <AccountSettings />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
