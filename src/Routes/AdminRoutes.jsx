import { Navigate, useLocation } from "react-router";

import useAuth from "../Hooks/useAuth";
import useCheckRole from "../Hooks/useCheckRole";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isRoleLoading] = useCheckRole();
  const location = useLocation();

  if (loading || isRoleLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && role==="admin") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
