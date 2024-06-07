import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './routes/Login.jsx'
import Home from './routes/Home.jsx'
import SignUp from './routes/SignUp.jsx'
import Profile from './routes/Profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)