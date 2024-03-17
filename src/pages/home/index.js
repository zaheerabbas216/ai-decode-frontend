import React from "react";
import CarouselComponent from "../../component/carousel";
import OurServicesComponent from "../ourservices";
import { ImagesList } from "../../assets/images/imageslist";
import "./styles.scss";
import FooterComponent from "../../component/footer";

const HomeComponent = () => {
  return (
    <>
      <div className="carouselcomponent container-fluid">
        <CarouselComponent />
      </div>
      <div className="container">
        <div className="my-5">
          <OurServicesComponent />
        </div>

        {/* short about us */}
        <div className="aboutUs_ py-2 mb-5">
          <div className="row align-items-center">
            <div className="col-md-4 logo_col">
              <img src={ImagesList.logopng} alt="" className="about_us_logo" />
            </div>
            <div className="col-md-8 about_desc_ text-center">
              <div className=" my-5">
                <h1 className="mb-4 heading_">About Us</h1>
                <div className="about_us_description_">
                  AI Decoded is a transformative platform empowering individuals
                  with essential digital skills. Through expertly crafted
                  courses, blending coding, web design, and data analysis,
                  learners embark on immersive experiences. Beyond the screen, a
                  vibrant community fosters collaboration with top educators.
                  Each achievement badge signifies a step towards a future where
                  students shape industry trends. Join the mission to decode the
                  future with AI Decoded.
                </div>

                <div className="mt-3">
                  <button className="btn btn-danger about_btn_">
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* to add the  footer here... */}
      <div className="mt-5">
        <FooterComponent />
      </div>
    </>
  );
};

export default HomeComponent;
