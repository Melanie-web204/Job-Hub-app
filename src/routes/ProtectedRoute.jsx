import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ requiredRole }) => {
  const location = useLocation();

  // For testing, let's assume user data is in localStorage
  const user = JSON.parse(localStorage.getItem("user")); // Example: { role: "employer" }

  if (!user) {
    // Not logged in → redirect to login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // Logged in but wrong role → redirect to home
    return <Navigate to="/" replace />;
  }

  // ✅ Otherwise, allow access to nested routes
  return <Outlet />;
};

export default ProtectedRoute;


// import { Navigate, Outlet, useLocation } from "react-router-dom";

// const ProtectedRoute = ({ requiredRole }) => {
//   return <Outlet />
// };

// export default ProtectedRoute;
