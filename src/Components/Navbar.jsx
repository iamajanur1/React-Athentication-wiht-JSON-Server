import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Navbar
        </Link>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="flex ">
            <Link to="/register" className=""> Registration
            </Link>
            <Link to="/login" className=""> Login
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
