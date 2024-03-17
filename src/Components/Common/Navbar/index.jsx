import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar_Section() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand text-warning" href="#">
          The<span className="text-primary">Trendy</span>
          <span className="text-danger">Decore</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Latest items
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

//     <div id="nav_section" >
//         <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary bg-dark" data-bs-theme="dark">
//             <div className="container-fluid">
//                 <a href='#' className="navbar-brand bold text-primary fs-3 nav_text">Edu<span className='text-secondary' >Skon</span></a>

//                 <div className="nav-items">
//                      <a className='text-secondary m-2' href="#class" style={{textDecoration: "none"}}>start journey</a>
//                     <a className='text-secondary m-2' href="#goals" style={{textDecoration: "none"}}>popular goals</a>
//                     <a  className='text-secondary m-2' href="#contact" style={{textDecoration: "none"}}>contact us</a>
//                 </div>


               
//             </div>
//         </nav>
    
// {/* 
//     <hr className='mt-0 pt-0 text-dark' /> */}
// </div>
  );
}

export default Navbar_Section;
