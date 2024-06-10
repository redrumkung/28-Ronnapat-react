import React from "react";
import { Link } from "react-router-dom";
const UserPage = ({ employees }) => {
  return (
    <>
      <div className="flex flex-row justify-center p-8">
        <p className="text-5xl font-bold">
          Generation Thailand
          <br />
          Home - User Sector
        </p>
      </div>
      <div className="flex flex-row p-8 justify-center gap-64">
        <Link
          to={"/user"}
          className="bg-blue-900 p-4 text-white rounded-md hover:bg-blue-600"
        >
          User Home Sector
        </Link>
        <Link
          to={"/admin"}
          className="bg-blue-900 p-4 text-white rounded-md hover:bg-blue-600"
        >
          Admin Home Sector
        </Link>
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
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {employee.name}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {employee.lastname}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {employee.position}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserPage;
