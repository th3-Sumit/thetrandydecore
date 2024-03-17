import React from "react";
import Images_1 from "../../../Assets/Images/composition-black-friday-shopping-cart-with-copy-space.jpg";
import Images_2 from "../../../Assets/Images/overhead-view-books-ladders.jpg";

function Header() {
  return (
    <div id="header-section">
      <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img
              src={Images_1}
              className="d-block w-100"
              alt="..."
              style={{ height: "400px" }}
            />
            <div className="carousel-caption d-none d-md-block header_text">
              <a className="navbar-brand text-warning" href="#">
                The<span className="text-primary">Trendy</span>
                <span className="text-dark">Decore</span>
              </a>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src={Images_2}
              className="d-block w-100"
              alt="..."
              style={{ height: "400px" }}
            />
            <div className="carousel-caption d-none d-md-block header_text">
              <a className="navbar-brand text-light" href="#">
                The<span className="text-dark">Trendy</span>
                <span className="text-danger">Decore</span>
              </a>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
}

export default Header;
