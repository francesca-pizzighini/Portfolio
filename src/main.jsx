import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageContainer from "./pages/pageContainer/pageContainer.jsx";
import App from "./App.jsx";
import Skills from "./pages/skills/skills.jsx";
import Projects from "./pages/projects/projects.jsx";
import Contacts from "./pages/contacts/contacts.jsx";
import ErrorPage from "./pages/errorPage/errorPage.jsx";
import ErrorComponent from "./components/errorComponent/errorComponent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <App />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/skills",
        element: <Skills />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/projects",
        element: <Projects />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
        errorElement: <ErrorComponent />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
