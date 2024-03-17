import React from "react";
import "./styles.scss";
import { ImagesList } from "../../assets/images/imageslist";
import { RouterLinks } from "../../router/routerlinks";

const NavbarComponent = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar_">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={ImagesList.logopng} alt="" className="logo_" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a className="nav-link active" href={RouterLinks.home}>
                  Home <span className="sr-only">(current)</span>
                </a>

                <a className="nav-link" href={RouterLinks.aboutus}>
                  About
                </a>

                <a
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Contact Us
                </a>
                <a className="nav-link" href={RouterLinks.webinars}>
                  Webinars
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* contact us modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title contactus_modal_title"
                id="exampleModalLabel"
              >
                Contact Us
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="contactusdiv">
                <div className="d-flex flex-column justify-content-start my-2">
                  <label htmlFor="" className="small">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="enter your full name"
                    className="input_tags px-2"
                  />
                </div>
                <div className="d-flex flex-column justify-content-start my-2">
                  <label htmlFor="" className="small">
                    Email
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="enter your full name"
                    className="input_tags px-2"
                  />
                </div>

                <div className="d-flex flex-column justify-content-start my-2">
                  <label htmlFor="" className="small">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="message_text_area px-2"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <div className="my-2">
                  <button className="btn btn_message_submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
