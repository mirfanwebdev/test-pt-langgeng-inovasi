import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineChatBubbleLeft, HiOutlineHeart } from "react-icons/hi2";
import Menu from "../../components/MenuBar";

function Navbar() {
  // useNavigate hook for back button to route previous page
  const navigate = useNavigate();
  return (
    <div className="flex gap-4 items-center text-xl font-semibold">
      <button onClick={() => navigate(-1)}>
        <IoMdArrowRoundBack />
      </button>
      <h1>Post</h1>
    </div>
  );
}

function Post({ id, likes }) {
  // store post data to state
  const [post, setPost] = useState({});

  // fetch post data from API
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="border-y">
      <div className="border-b py-2">
        <p className="font-semibold">{post.title}</p>
        <p>{post.body}</p>
        <p className="text-sm py-1">00:00 · 01 Jan 20</p>
      </div>
      <div className="py-2 flex gap-4 text-lg items-center">
        <HiOutlineChatBubbleLeft />
        <div className="flex gap-1 items-center">
          <HiOutlineHeart />
          <p className="text-sm">{likes()}</p>
        </div>
      </div>
    </div>
  );
}

function Comments({ id, likes }) {
  // store comments data to state
  const [comment, setComment] = useState([]);

  // fetch comments data from API
  useState(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((data) => setComment(data));
  }, []);

  return (
    <>
      {comment.map((comment) => (
        <div key={comment.id} className="flex gap-2 items-start py-2 border-b">
          <FaUserCircle className="pt-2 text-5xl text-indigo-500" />
          <div className="w-5/6">
            <p className="font-semibold">{comment.name}</p>
            <p className="text-sm">{comment.email}</p>
            <p>{comment.body}</p>
            <div className="py-2 flex gap-4 text-lg items-center">
              <HiOutlineChatBubbleLeft />
              <div className="flex gap-1 items-center">
                <HiOutlineHeart />
                <p className="text-sm">{likes()}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function PostPage() {
  const params = useParams();
  const randomLikes = () => Math.floor(Math.random() * 50);
  // render navbar, post and comments components
  return (
    <div className="sm:max-w-2xl sm:m-auto sm:flex sm:flex-row-reverse relative">
      <div className="flex flex-col p-2">
        <Navbar />
        <Post id={params.id} likes={randomLikes} />
        <Comments id={params.id} likes={randomLikes} />
      </div>
      <Menu />
    </div>
  );
}

export default PostPage;
