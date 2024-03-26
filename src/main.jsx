import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Roots from './layout/Roots.jsx';
import Error from './pages/Error/Error.jsx';
import Home from './component/home/Home.jsx';
import ListedBooks from './pages/ListedBooks/ListedBooks.jsx';
import PagesRead from './pages/Pages-to-Read/PagesRead.jsx';
import BookDetail from './pages/BookDetail/BookDetail';
import Contact from './pages/contact/Contact.jsx';
import Blog from './pages/blog/Blog.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
errorElement:<Error></Error>,

children:[
{path:'/',
element:<Home></Home>
},
{
  path:'/listedBook',
  element:<ListedBooks></ListedBooks>
},
{
  path:'/PagesRead',
  element:<PagesRead></PagesRead>
},
{
  path: '/bookDetail/:bookId',
  element:<BookDetail></BookDetail>

},
{
  path: '/contact',
  element:<Contact></Contact>

},
{
  path: '/blog',
  element:<Blog></Blog>

},




]



  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
