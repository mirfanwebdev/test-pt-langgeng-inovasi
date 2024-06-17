import { HiOutlineUserCircle } from "react-icons/hi2";
import Post from "./components/Post";
import Profile from "./components/Profile";
import Menu from "./components/MenuBar";

function App() {
  // render each components
  return (
    <div className="sm:max-w-2xl sm:m-auto sm:flex sm:flex-row-reverse relative">
      {/* profile picture and banner placeholder */}
      <div className="flex flex-col">
        <div className="bg-indigo-500 h-20 flex items-center p-2">
          <HiOutlineUserCircle className="text-5xl text-white" />
        </div>
        <Profile />
        <Post />
      </div>
      {/* fixed menu on mobile screen and side menu on wide screen */}
      <Menu />
    </div>
  );
}

export default App;
