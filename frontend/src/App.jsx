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
import { extendTheme } from "@chakra-ui/react";
import ResumeRewriterPage from "./pages/ResumeRewriterPage";
import GeneralAIChatPage from "./pages/GeneralAIChatPage";
import CounsellorAIChatPage from "./pages/CounsellorAIChatPage";
import Supportpage from "./pages/Supportpage";
import NewSupport from "./pages/NewSupport";

const App = () => {
  // 1. Import `extendTheme`

  // 2. Call `extendTheme` and pass your custom values
  const theme = extendTheme({
    components: {
      Progress: {
        baseStyle: {
          filledTrack: {
            scrlt: "#a45848",
          },
        },
      },
    },
    colors: {
      brand: {
        100: "#f7fafc",
        // ...
        900: "#1a202c",
      },
    },
  });

  // 4. Now you can use these colors in your components
  function Usage() {
    return <Box bg="brand.100">Welcome</Box>;
  }
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/auth", element: <AuthPage /> },
    {
      path: "/dashboard",
      element: <MainLayout />,
      children: [
        { index: true, element: <DashboardPage /> },
        { path: "support", element: <Supportpage /> },
        { path: "support/new-support-request", element: <NewSupport /> },
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
        {
          path: "openai/ai-chat/general-chat",
          element: <GeneralAIChatPage />,
        },
        {
          path: "openai/ai-chat/career-counsellor-chat",
          element: <CounsellorAIChatPage />,
        },
      ],
    },
  ]);
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
