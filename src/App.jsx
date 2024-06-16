import { HiOutlineUserCircle } from "react-icons/hi2";

import Post from "./components/Post";
import Profile from "./components/Profile";

function App() {
  // display each components
  return (
    <main className="sm:max-w-2xl sm:m-auto">
      <div className="flex flex-col">
        <div className="bg-slate-400 h-20 flex items-center p-2">
          <HiOutlineUserCircle className="text-5xl" />
        </div>
        <Profile />
        <Post />
      </div>
    </main>
  );
}

export default App;
