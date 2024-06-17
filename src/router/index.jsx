import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PostPage from "../pages/PostPage";

// define routes name and page elements
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  },
]);

export default router;
