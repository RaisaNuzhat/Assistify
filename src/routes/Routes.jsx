import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home'
import LogIn from '../pages/LogIn'
import Register from '../pages/Register'
import ErrorPage from '../components/ErrorPage';
import AddVolunteer from '../pages/AddVolunteer';
import MyneedVolunteer from '../pages/MyneedVolunteer';
import Update from '../pages/Update';
import ManageMyPosts from '../pages/ManageMyPosts';
import Privateroute from '../components/Privateroute';
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
        {
          path: '/addvolunteer',
          element: <AddVolunteer/>,
        },
        {
          path:'/myneedvolunteer',
          element:<MyneedVolunteer/>,
        },
        {
          path:'/update',
          element:<Update/>
        },
        {
          path:'/managemyposts',
          element:<Privateroute>
            <ManageMyPosts/>
          </Privateroute>
        }

    
    
    ]
  }

]);