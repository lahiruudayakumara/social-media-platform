import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from '../pages/Main';
import Login from '../pages/Login';

  
const router = createBrowserRouter ([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "profile",
                element: <Profile />
            }
        ]
    },
    {
        path:"login",
        element: <Login />
    },
]);

const MainRouter = () => {
  return <RouterProvider router={router} />
}

export default MainRouter