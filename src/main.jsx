import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './routes/Login.jsx'
import Home from './routes/Home.jsx'
import SignUp from './routes/SignUp.jsx'
import Profile from './routes/Profile.jsx'
import EditCar from './routes/EditCar.jsx'
import AddCar from "./routes/AddCar.jsx"

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
      },
      {
        path: "/edit/:id",
        element: <EditCar/>
      },
      {
        path: "/add",
        element: <AddCar/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)