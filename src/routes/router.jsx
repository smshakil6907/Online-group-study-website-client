import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import MainLayout from "../layout/MainLayout";
import Assignment from "../pages/Assignment";
import CreateAssignment from "../pages/CreateAssignment";
import EvaluateAssignment from "../pages/EvaluateAssignment";
import Login from "../pages/Login";
import MySubmitted from "../pages/MySubmitted";
import PendingAssignment from "../pages/PendingAssignment";
import Register from "../pages/Register";
import UpdateAssignment from "../pages/UpdateAssignment";
import ViewAssignment from "../pages/ViewAssignment";
import PrivetRoutes from "./PrivetRoutes";

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
        element: (
          <PrivetRoutes>
            <CreateAssignment></CreateAssignment>
          </PrivetRoutes>
        ),
      },
      {
        path: "/assignment",
        element: <Assignment></Assignment>,
      },
      {
        path: "/pendingAssignment",
        element: (
          <PrivetRoutes>
            <PendingAssignment></PendingAssignment>
          </PrivetRoutes>
        ),
      },
      {
        path: "/mySubmitted",
        element: (
          <PrivetRoutes>
            <MySubmitted></MySubmitted>
          </PrivetRoutes>
        ),
      },
      {
        path: "/assignment/update/:id",
        element: <UpdateAssignment></UpdateAssignment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignment/${params.id}`),
      },
      {
        path: "/viewAssignment/:id",
        element: <ViewAssignment></ViewAssignment>,
      },
      {
        path: "/evaluateAssignment/:id",
        element: <EvaluateAssignment></EvaluateAssignment>,
      },
    ],
  },
]);

export default router;
