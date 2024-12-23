import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import MainLayout from "../layout/MainLayout";
import Assignment from "../pages/Assignment";
import CreateAssignment from "../pages/CreateAssignment";
import Login from "../pages/Login";
import MySubmitted from "../pages/MySubmitted";
import PendingAssignment from "../pages/PendingAssignment";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/createAssignment",
        element: <CreateAssignment></CreateAssignment>,
      },
      {
        path: "/assignment",
        element: <Assignment></Assignment>,
        loader: () => fetch("http://localhost:5000/assignment"),
      },
      {
        path: "/pendingAssignment",
        element: <PendingAssignment></PendingAssignment>,
      },
      {
        path: "/mySubmitted",
        element: <MySubmitted></MySubmitted>,
      },
    ],
  },
]);

export default router;
