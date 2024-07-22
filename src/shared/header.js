import React from "react";
import { Link } from "react-router-dom";
import { getAuthUser, removeAuthUser, setAuthUser } from "../helper/Storage";
import { useNavigate } from "react-router-dom";
export function Header() {
  const navigate = useNavigate();
  const auth = getAuthUser();

  const Logout = () => {
    removeAuthUser();
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar bg-dark  nav-tabs  navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand " to="/">
            ACADEMIA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            id="header-nav"
            className="collapse navbar-collapse justify-content-center"
          >
            <ul className="navbar-nav">
              {auth && auth.role == 3 && (
                <>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                  <Link to="register" className="nav-link">
                    Register Courses
                  </Link>
                  <Link to="courses" className="nav-link">
                    Show Registered Courses
                  </Link>
                </>
              )}

              {auth && auth.role == 2 && (
                <>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                  ,
                  <Link to="enrolled" className="nav-link">
                    Enrolled student
                  </Link>
                  ,
                  <Link to="assign" className="nav-link">
                    set Grades
                  </Link>
                </>
              )}
{/* admin */}
              {auth && auth.role == 1 && (
                
                <>
                  <Link to="/" className="nav-link">
                    
                    Home
                  </Link>
                  <Link to="/AssigIns" className="nav-link">
                    {" "}
                    Assign Instructors
                  </Link>
                  <Link to="Add_Instructor" className="nav-link">
                    {" "}
                    Manage Instructors
                  </Link>
                  <Link to="manageCourse" className="nav-link">
                    {" "}
                    Manage Courses
                  </Link>
                
                </>
                
              )
              }
              {!auth && (
                <>
                  <Link to="login" className="nav-link">
                    Log In
                  </Link>
                  <Link to="signup" className="nav-link">
                    Sign Up
                  </Link>
                </>
              )}
              {auth && (
                <>
                  <Link to="login" className="nav-link" onClick={Logout}>
                    Log Out
                  </Link>{" "}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
