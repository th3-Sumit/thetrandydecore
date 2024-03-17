import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FiLinkedin, FiPhoneCall } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { PiPencilLineBold } from "react-icons/pi";

function Footer() {
  return (
    <div id="contact" className=" p-5">
      <div className="row p-5">
        <div className="col-md-6 col-12">
          <div className="col-md-8">
            <a
              className="navbar-brand text-warning underline"
              href="#"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              The<span className="text-primary">Trendy</span>
              <span className="text-dark">Decore</span>
            </a>
            <p className="text-secondary mb-2">
              The Trendy Decore in one of the best e-commerce site where you can
              purchase several attractive items for your daily uses.
            </p>
            <hr style={{ width: "100%", marginBottom: "10px" }} />
            <h5 className="text-dark">Reach out to us</h5>
            <span className="text-secondary">
              {" "}
              Get your questions answered with the team TheTrendyDecore.
            </span>
            <h6 className="text-secondary mt-2 d-flex gap-2">
              <FiPhoneCall /> <b>Call : +91 ********** </b>
            </h6>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4">
              <h5 className="mb-2">
                <b className="text-secondary">Company</b>
              </h5>
              <p>
                <a href="#" className="text-decoration-none text-secondary">
                  {" "}
                  About us
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none text-secondary">
                  Careers
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none text-secondary">
                  Blogs
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none text-secondary">
                  Privacy policy
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none text-secondary">
                  Terms & Conditions
                </a>{" "}
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="mb-2">
                <b className="text-secondary">Help & Support</b>
              </h5>
              <p>
                <a href="#" className="text-decoration-none text-secondary">
                  User Guidelines{" "}
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none text-secondary">
                  Site Map
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none text-secondary">
                  Refund Policy
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none text-secondary">
                  Takedown Policy
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none text-secondary">
                  Grievance Redressal
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="mb-2">
                <b className="text-secondary">Popular items</b>
              </h5>
              <p>
                <a href="#" className=" text-secondary">
                  Printed Cup
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none text-secondary">
                  Printed Shirt
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none text-secondary">
                  Mobile Phones
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none text-secondary">
                  Photo Frame
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none text-secondary">
                  Gifts
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="text-start">
            <span className="text-secondary">
              © 2024 Copywrite team weblight(Sumit) ...!
            </span>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="justify-content-end align-items-end d-flex text-end">
            <span className="text-secondary g-1 d-flex">
              <a href="#" className="text-decoration-none text-secondary m-1">
                <FaInstagram />
              </a>
              <a href="#" className="text-decoration-none text-secondary m-1">
                <BiLogoFacebook />
              </a>
              <a href="#" className="text-decoration-none text-secondary m-1">
                <FiLinkedin />
              </a>
              <a href="#" className="text-decoration-none text-secondary m-1">
                <AiOutlineGithub />
              </a>
              <a href="#" className="text-decoration-none text-secondary m-1">
                <BiLogoGmail />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
