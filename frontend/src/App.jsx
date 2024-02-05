import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import "./index.css";
import DashboardPage from "./pages/DashboardPage";
const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/auth", element: <AuthPage /> },
    { path: "/dashboard", element: <DashboardPage /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
