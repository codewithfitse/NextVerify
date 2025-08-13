import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { setThemeColors } from "./theme";
import Home from "./page/Home";
import NextVerfy from "./components/NextVerfy";
import NextVerfyDemo from "./page/NextVerfyDemo";

// Wrapper component that provides theme context
const AppWrapper = () => {
  return (
    <div className="relative">
      <NextVerfy />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
  },
  {
    path: "/demo",
    element: <NextVerfyDemo />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
