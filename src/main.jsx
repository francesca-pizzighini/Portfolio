import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import PageContainer from './pages/pageContainer/pageContainer.jsx'
import App from './App.jsx'
import Skills from './pages/skills.jsx'
import Projects from './pages/projects.jsx'
import Contacts from './pages/contacts.jsx'
import ErrorPage from './pages/errorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageContainer/>,
    // errorElement: <ErrorPage/>
    children: [
      {
        path: "/home",
        element: <App/>,
        // errorElement: <ErrorPage/>
      },
      {
        path: "/skills",
        element: <Skills/>,
        // errorElement: <ErrorPage/>
      },
      {
        path: "/projects",
        element: <Projects/>,
        // errorElement: <ErrorPage/>
      },
      {
        path: "/contacts",
        element: <Contacts/>,
        // errorElement: <ErrorPage/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
