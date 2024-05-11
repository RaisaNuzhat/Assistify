import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home'
import LogIn from '../pages/LogIn'
import Register from '../pages/Register'
import ErrorPage from '../components/ErrorPage';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
          path: '/login',
          element: <LogIn/>,
        },
        {
          path: '/register',
          element: <Register/>,
        },
    
    
    ]
  }

]);