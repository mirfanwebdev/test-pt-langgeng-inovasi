import { useState, useEffect } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { HiOutlinePhone, HiOutlineGlobeAlt } from "react-icons/hi2";
function Profile() {
  // store user data on state
  const [user, setUser] = useState({});

  // fetch user data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="p-2">
      <h1 className="text-lg font-bold">{user.name}</h1>
      <div className="flex gap-1 items-center">
        <MdAlternateEmail />
        <p>{user.email}</p>
      </div>
      <div className="flex gap-1 items-center">
        <HiOutlinePhone />
        <p>{user.phone}</p>
      </div>
      <div className="flex gap-1 items-center">
        <HiOutlineGlobeAlt />
        <p>{user.website}</p>
      </div>
    </div>
  );
}

export default Profile;
