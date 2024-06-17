import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { SiDialogflow } from "react-icons/si";

function Menu() {
  return (
    <div className="fixed bottom-0 w-screen bg-white border-t flex justify-center p-2 sm:static sm:w-fit sm:flex-col sm:justify-start sm:border-r">
      {/* app logo and name*/}
      <div className="hidden sm:flex flex-col items-center text-2xl pb-4">
        <SiDialogflow className="text-4xl text-indigo-700" />
        <h1>AppName</h1>
      </div>
      {/* list of menu */}
      <Link to={"/"} className="p-1 hover:bg-indigo-200 hover:rounded-full">
        <div className="flex flex-col items-center sm:flex-row sm:gap-2 sm:text-xl sm:font-semibold">
          <FaRegUser />
          <p className="text-xs sm:text-xl">Profile</p>
        </div>
      </Link>
    </div>
  );
}

export default Menu;
