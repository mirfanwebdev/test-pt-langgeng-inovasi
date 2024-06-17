import { useState, useEffect } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Post() {
  // store post data on state
  const [post, setPost] = useState([]);

  // fetch post data from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  // generate random numbers for like
  const randomLikes = () => {
    return Math.floor(Math.random() * 50);
  };

  return (
    <div className="p-2">
      <h1 className="font-bold">Post</h1>
      {post.map((post) => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <div className="py-2 border-t border-b">
            <p>{post.body}</p>
            <div className="pt-2 flex gap-4 text-lg items-center">
              <HiOutlineChatBubbleLeft />
              <div className="flex gap-1 items-center">
                <HiOutlineHeart />
                <p className="text-sm">{randomLikes()}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Post;
