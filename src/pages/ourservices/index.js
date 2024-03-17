import React from "react";
import "./styles.scss";
import { ImagesList } from "../../assets/images/imageslist";
const OurServicesComponent = () => {
  return (
    <>
      <div className="text-center my-5">
        <h1 className="mb-0 services_heading_">Our Services</h1>
      </div>

      <div className="row">
        <div className="col-md-4 col-sm-12 mb-2">
          <div className="card p-0 card_">
            <img
              src={ImagesList.workshopimage}
              alt=""
              className="card_service_image"
            />
            <div className="d-flex align-items-center justify-content-center flex-column h-75 w-100">
              <h3 className="my-2 mb-0 card_heading">Workshops</h3>

              <p className="desc_ px-2 mb-0">
                A vibrant, engaging platform where creativity meets learning,
                hosting diverse workshops from pottery to coding, all just a
                click away.
              </p>
              <button className="btn btn-danger mt-3 explorebtn_">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-2">
          <div className="card p-0 card_">
            <img
              src={ImagesList.itservicesimage}
              alt=""
              className="card_service_image"
            />
            <div className="d-flex align-items-center justify-content-center flex-column h-75 w-100">
              <h3 className="my-2 mb-0 card_heading">IT Services</h3>

              <p className="desc_ px-2 mb-0">
                A vibrant, engaging platform where creativity meets learning,
                hosting diverse workshops from pottery to coding, all just a
                click away.
              </p>
              <button className="btn btn-danger mt-3 explorebtn_">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-2">
          <div className="card p-0 card_">
            <img
              src={ImagesList.applicationdevelopment}
              alt=""
              className="card_service_image"
            />
            <div className="d-flex align-items-center justify-content-center flex-column h-75 w-100">
              <h3 className="my-2 mb-0 card_heading">
                Application Development
              </h3>

              <p className="desc_ px-2 mb-0">
                A vibrant, engaging platform where creativity meets learning,
                hosting diverse workshops from pottery to coding, all just a
                click away.
              </p>
              <button className="btn btn-danger mt-3 explorebtn_">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServicesComponent;
