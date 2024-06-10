import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import UserPage from "../components/UserPage";
import AdminPage from "../components/AdminPage";
import OwnerPage from "../components/OwnerPage";

export default function Router() {
  const [employees, setEmployees] = useState([]);
  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(!reload);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [reload]);
//  console.log(employees)
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
          element: (
            <AdminPage
              handleSetEmployees={handleSetEmployees}
              employees={employees}
              handleReload={handleReload}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
