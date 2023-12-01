import { Navigate } from "react-router-dom";
import Main from "../pages/Main";

const UserProtected = () => {
  let user = false;
  
  localStorage.getItem('token') ? user = true : user = false;

  return user ? <Main /> : <Navigate to="./login" />

}

export default UserProtected