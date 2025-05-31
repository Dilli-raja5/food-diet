import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  console.log(user)
  if (!user || !user.token) {
    return <Navigate to="/login" replace />;
  }

  const tokenExpiry = localStorage.getItem("tokenExpiry");
  if (tokenExpiry && new Date().getTime() > parseInt(tokenExpiry, 10)) {
    
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    localStorage.removeItem("userID");
    localStorage.removeItem("name");

    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;