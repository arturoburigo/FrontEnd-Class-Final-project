import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './routes/Login.jsx';
import Home from './routes/Home.jsx';
import SignUp from './routes/SignUp.jsx';
import Profile from './routes/Profile.jsx';
import EditCar from './routes/EditCar.jsx';
import AddCar from './routes/AddCar.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <PrivateRoute />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/home',
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        )
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        )
      },
      {
        path: '/edit/:id',
        element: (
          <PrivateRoute>
            <EditCar />
          </PrivateRoute>
        )
      },
      {
        path: '/add',
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        )
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
