import { HiOutlineUserCircle } from "react-icons/hi2";

import Post from "./components/Post";
import Profile from "./components/Profile";
import Menu from "./components/MenuBar";

function App() {
  // display each components
  return (
    <main className="sm:max-w-2xl sm:m-auto sm:flex sm:flex-row-reverse relative">
      <div className="flex flex-col">
        <div className="bg-slate-400 h-20 flex items-center p-2">
          <HiOutlineUserCircle className="text-5xl" />
        </div>
        <Profile />
        <Post />
      </div>
      <Menu />
    </main>
  );
}

export default App;
