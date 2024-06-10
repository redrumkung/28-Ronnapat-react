import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div className="flex flex-row justify-center p-8">
        <p className="text-5xl font-bold">
          Generation Thailand
          <br />
          React - Assessment
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
    </>
  );
};

export default HomePage;
