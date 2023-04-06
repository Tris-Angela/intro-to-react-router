import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/about/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Default from './components/default/Default';
import Friends from './components/friends/Friends';
import FriendDetails from './components/friendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetail from './components/postDetail/PostDetail';

// const router = createBrowserRouter([
//   {
//     path: '/app',
//     element: <App></App>
//   },

//   {
//     path: '/',
//     element: <About></About>
//   },

//   {
//     path: '/sorry',
//     element: <div> Hello from the outside</div>
//   }
// ])

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element: <Default></Default>
      },
      {
        path:'/friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/friend/:friendId',
        element: <FriendDetails></FriendDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'/post/:postId',
        element: <PostDetail></PostDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
