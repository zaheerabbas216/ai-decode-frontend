import React from "react";
import "./styles.scss";
import { ImagesList } from "../../assets/images/imageslist";
import MapComponent from "../mapcomponent";
import {
  FaMobileAlt,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const FooterComponent = () => {
  return (
    <>
      <div className="footerdiv_">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-md-2">
              <div className="links_div">
                <ul className="ul_links">
                  <li className="li_link">
                    <a href="#">Home</a>
                  </li>
                  <li className="li_link">
                    <a href="#">Services</a>
                  </li>
                  <li className="li_link">
                    <a href="#">Team</a>
                  </li>
                  <li className="li_link">
                    <a href="#">About Us</a>
                  </li>
                  <li className="li_link">
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="get_in_touch_div pl-5">
                <div className="mobile_div">
                  <div className="row align-items-center">
                    <div className="col-md-1">
                      <FaMobileAlt className="iconsize" />
                    </div>
                    <div className="col-md-11">
                      <h4 className="text-light mb-0">9742408378/9019987024</h4>
                    </div>
                  </div>
                </div>

                <div className="social_icons_div mt-5 d-flex align-items-center">
                  <a href="#" className="mr-4">
                    <FaTwitter className="iconsize" />
                  </a>
                  <a href="#" className="mr-4">
                    <FaGithub className="iconsize" />
                  </a>
                  <a href="#" className="mr-4">
                    <FaInstagram className="iconsize" />
                  </a>
                  <a href="#" className="mr-4">
                    <FaLinkedin className="iconsize" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
