import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import BookPage from "../Pages/BookPage/BookPage";
import HomePage from "../Pages/HomePage/HomePage";
import ReadPage from "../Pages/ReadPage/ReadPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {path: 'home', Component: HomePage},
      {path: 'book', Component: BookPage},
      {path: 'read', Component: ReadPage},
   
    ],
       errorElement: <ErrorPage/>
   }
])