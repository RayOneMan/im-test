import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = ({ children }: any) => {
  const location = useLocation();
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to="/home" state={{ from: location }} />;
  }

  return children;
};

export default PublicRoute;
