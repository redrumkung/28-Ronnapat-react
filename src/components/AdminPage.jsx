import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminPage = ({ employees, handleSetEmployees, handleReload }) => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    position: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsd5-mock-backend.onrender.com/members",
        { name: form.name, lastname: form.lastName, position: form.position }
      );

      handleSetEmployees((prevEmployees) => [...prevEmployees, response.data]);
      setForm({
        name: "",
        lastName: "",
        position: "",
      });
      handleReload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const deleteData = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${id}`,{member_id : id }
    )
    handleReload()
    // handleSetEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <>
      <div className="flex flex-row justify-center p-8">
        <p className="text-5xl font-bold">
          Generation Thailand
          <br />
          Home - Admin Sector
        </p>
      </div>
      <div className="flex flex-row p-8 justify-center gap-64">
        <Link
          to="/user"
          className="bg-blue-900 p-4 text-white rounded-md hover:bg-blue-600"
        >
          User Home Sector
        </Link>
        <Link
          to="/admin"
          className="bg-blue-900 p-4 text-white rounded-md hover:bg-blue-600"
        >
          Admin Home Sector
        </Link>
      </div>
      <div className="flex flex-col px-32">
        <h1 className="text-2xl font-bold">Create User Here</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="flex justify-normal gap-48">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="border-2 p-1 border-blue-900 rounded-md w-64 focus:border-red-600 focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="border-2 p-1 border-blue-900 rounded-md w-64 focus:border-red-600 focus:outline-none"
            />
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={form.position}
              onChange={handleChange}
              className="border-2 p-1 border-blue-900 rounded-md w-64 focus:border-red-600 focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 rounded-md bg-blue-900 text-white hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col px-32 py-16">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Position
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr
                key={
                  employee.id ||
                  employee.name + employee.lastName + employee.position
                }
              >
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {employee.name}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {employee.lastname}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {employee.position}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminPage;
