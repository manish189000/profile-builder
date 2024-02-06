import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import "./index.css";
import DashboardPage from "./pages/DashboardPage";
import MainLayout from "./MainLayout";
import GeneratedContentPage from "./pages/GeneratedContentPage";
import AICareerChat from "./pages/AICareerChat";
import GeneratedServices from "./pages/GeneratedServices";
import GenerateNewResume from "./pages/GenerateNewResume";
const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/auth", element: <AuthPage /> },
    {
      path: "/dashboard",
      element: <MainLayout />,
      children: [
        { index: true, element: <DashboardPage /> },
        {
          path: "openai/generator",
          element: <GeneratedServices />,
        },
        { path: "documents", element: <GeneratedContentPage /> },
        { path: "chat-bot", element: <AICareerChat /> },
        {
          path: "openai/generator/resume-generator",
          element: <GenerateNewResume />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
// children: [
//   { path: "resume-generator", element: <GenerateNewResume /> },
// ],
