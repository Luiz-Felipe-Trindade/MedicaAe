import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const PrivateRoute = ({ element: Component }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? Component : <Navigate to="/login" replace />;
};

export default PrivateRoute;
