import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const isAuthenticated = true;
  const user = { fullName: "Melanie", role: "employer" };
  const navigate = useNavigate();

  return (
    <header>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="">
            <div className="">
              <Briefcase className="" />
            </div>
            <span className="">JobHub</span>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="">
            <Link to="/find-jobs" className="">
              Find Jobs
            </Link>
            <Link
              to={
                isAuthenticated && user?.role === "employer"
                  ? "/employer-dashboard"
                  : "/login"
              }
              className=""
            >
              For Employers
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="">
            {isAuthenticated ? (
              <div className="">
                <span className="">Welcome, {user?.fullName} </span>
                <Link
                  to={
                    user?.role === "employer"
                      ? "/employer-dashboard"
                      : "/find-jobs"
                  }
                  className=""
                >
                  Dashboard
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login" className="">
                  Login
                </Link>
                <Link to="/signup" className="">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;