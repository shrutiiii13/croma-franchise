import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // ✅ Use react-router-dom, not just react-router
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';
import Layout from '../layouts/Layout';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "contactus", element: <ContactUs /> },
      ],
    },
  ],
  
);

export default router;