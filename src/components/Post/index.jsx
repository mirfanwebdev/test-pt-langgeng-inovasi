import { useState, useEffect } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
function Post() {
  // store post data on state
  const [post, setPost] = useState([]);

  // fetch post data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="p-2">
      <h1 className="font-bold">Post</h1>
      {post.map((post) => (
        <div key={post.id} className="py-2 border-t border-b">
          <p>{post.title}</p>
          <p>{post.body}</p>
          <div className="pt-2 flex gap-4 text-lg">
            <HiOutlineChatBubbleLeft />
            <HiOutlineHeart />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
