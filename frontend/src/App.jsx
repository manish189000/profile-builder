import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import "./index.css";
import DashboardPage from "./pages/DashboardPage";
import MainLayout from "./MainLayout";
import GeneratedContentPage from "./pages/GeneratedContentPage";
import AICareerChat from "./pages/AICareerChat";
import GeneratedServices from "./pages/GeneratedServices";
import GenerateNewResume from "./pages/GenerateResumePage";
import { ChakraProvider } from "@chakra-ui/react";
import GenerateCoverLetter from "./pages/GenerateCoverLetterPage";
import ResumeRewriterPage from "./pages/ResumeRewriterPage";

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
        {
          path: "openai/generator/resume-generator",
          element: <GenerateNewResume />,
        },
        {
          path: "openai/generator/cover-letter-generator",
          element: <GenerateCoverLetter />,
        },
        {
          path: "openai/generator/resume-rewriter",
          element: <ResumeRewriterPage />,
        },
        {
          path: "openai/ai-chat",
          element: <AICareerChat />,
        },
      ],
    },
  ]);
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
