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
import NeedVolunteer from '../pages/NeedVolunteer'
import ViewDetails from '../pages/ViewDetails';
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
          element: <Privateroute>
            <AddVolunteer/>
          </Privateroute>,
        },
        {
          path:'/myneedvolunteer',
          element:<Privateroute>
            <MyneedVolunteer/>
          </Privateroute>,
        },
        {
          path:'/update',
          element:<Privateroute>
            <Update/>
          </Privateroute>
        },
        {
          path:'/managemyposts',
          element:<Privateroute>
            <ManageMyPosts/>
          </Privateroute>
        },
        {
          path:'/needvolunteer',
          element:<NeedVolunteer/>,
          loader: () => fetch(`${import.meta.env.VITE_API_URL}/volunteers`)
        },
        {
          path: '/viewdetails/:id',
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/volunteers/${params.id}`),
          element:<Privateroute>
            <ViewDetails/>
          </Privateroute>
        }


    
    
    ]
  }

]);