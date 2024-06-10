import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-row p-8 justify-end gap-16 font-extrabold text-2xl">
        <Link to={"/"} className="hover:text-red-500">
          Home
        </Link>
        <Link to={"/owner"} className="hover:text-red-500">
          Owner
        </Link>
      </div>
      <hr className="border-2 border-blue-900" />
    </>
  );
};

export default Navbar;
