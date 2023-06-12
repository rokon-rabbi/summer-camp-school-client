import React from 'react';
import useAuth from '../Hooks/useAuth';
import useCheckRole from '../Hooks/useCheckRole';
import { useLocation } from 'react-router-dom';

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [role, isRoleLoading] = useCheckRole();
    const location = useLocation();
  
    if (loading || isRoleLoading) {
      return <progress className="progress w-56"></progress>;
    }
  
    if (user && role === "instructor") {
      return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  };

export default InstructorRoute;