import { FaRegUser } from "react-icons/fa6";
import { SiDialogflow } from "react-icons/si";
function Menu() {
  return (
    <div className="fixed bottom-0 w-screen bg-white border-t flex justify-center p-2 sm:static sm:w-fit sm:flex-col sm:justify-start sm:border-r">
      <div className="hidden sm:flex flex-col items-center text-2xl pb-10">
        <SiDialogflow className="text-4xl" />
        <h1>AppName</h1>
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:gap-2 sm:text-xl sm:font-semibold">
        <FaRegUser />
        <p className="text-xs sm:text-xl">Profile</p>
      </div>
    </div>
  );
}

export default Menu;
