import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  //Protect routes
  useEffect(()=>{
    if(!localStorage.getItem("auth"))
    history.push('/')
  },[])

  //Function to handle logout and clear the local storage 
  const handleLogout = () => {
    localStorage.removeItem("auth");
    history.push("/");
  };

  return (
    <nav test-id="navbar-1"
      className="navbar navbar-expand-lg"
      style={{ backgroundImage: "linear-gradient(#020333, #2ebf91)"}}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          LOGO
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/post"
              >
                Post
              </a>
            </li>
          </ul>
        </div>
      </div>

      <button
        className="btn btn-bg-transparent text-light border "
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
};
{
}
export default NavBar;

