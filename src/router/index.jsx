import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import UserPage from "../components/UserPage";
import AdminPage from "../components/AdminPage";
import OwnerPage from "../components/OwnerPage";

export default function Router() {
  const [employees, setEmployees] = useState([]);
  const handleSetEmployees = (newEmployees) => {
    setEmployees(newEmployees);
  };

  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <>
          <Navbar />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "owner",
          element: <OwnerPage />,
        },
        {
          path: "user",
          element: <UserPage employees={employees} />,
        },
        {
          path: "admin",
          element: <AdminPage handleSetEmployees={handleSetEmployees} employees={employees} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
