import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login';
import Explore from '../pages/Explore';
import Notification from '../pages/Notification';
import Messeage from '../pages/Messeage';
import Bookmarks from '../pages/Bookmarks';
import List from '../pages/List';
import UserProtected from './UserProtected';
import Post from '../pages/Post';
import Register from '../pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProtected />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/explore",
        element: <Explore />
      },
      {
        path: "/notification",
        element: <Notification />
      },
      {
        path: "/Messeage",
        element: <Messeage />
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />
      },
      {
        path: "/list",
        element: <List />
      },
      {
        path: `/profile/:id`,
        element: <Profile />,
      },
      {
        path: '/:userName/status/:id',
        element: <Post />
      }
    ]
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  }
]);

const MainRouter = () => {
  
    return <RouterProvider router={router} />;
  };
  
  export default MainRouter;
  