import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }: any) => {
  const location = useLocation();
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
