import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Provider from './Provider/Provider.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import DashboardHome from './Pages/Home/DashboardHome.jsx';
import CreateTask from './Pages/CreateTask/CreateTask.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Update from './Pages/Update/Update.jsx';

import Contact from './Pages/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboardHome",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/createTask",
        element: <CreateTask></CreateTask>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
      },
      
      {
        path: "/contactUs",
        element: <Contact></Contact>,
      },
    ]
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <QueryClientProvider client={queryClient}>
       <Provider>
      <RouterProvider router={router} />
    </Provider>
    </QueryClientProvider>
  

 ,
)
