import React, { useEffect, useState } from "react";
import BreadcrumbComponent from "../../component/breadcrumb";
import "./styles.scss";
import api_service from "../../services/webinars.services";
import { FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WebinarsComponent = () => {
  const [all_webinars, set_all_webinars] = useState([]);
  const [upcoming_webinars, set_upcoming_webinars] = useState([]);
  const [past_webinars, set_past_webinars] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getallwebinars();
  }, []);

  useEffect(() => {
    filter_all_webinars();
  }, [all_webinars]);

  const filter_all_webinars = () => {
    let todaysDate = new Date();
    const upcoming = [];
    const past = [];

    all_webinars.forEach((filteredItem) => {
      let response_webinar_date = new Date(
        filteredItem.attributes.webinar_date
      );
      if (response_webinar_date < todaysDate) {
        past.push(filteredItem);
      } else {
        upcoming.push(filteredItem);
      }
    });

    set_upcoming_webinars(upcoming);
    set_past_webinars(past);
  };

  const getallwebinars = async () => {
    try {
      let webinars = await api_service.getAllWebinars();
      set_all_webinars(webinars.data.data);
    } catch (error) {
      console.log("errrr", error);
    }
  };

  const get_date_from_response = (res_date) => {
    const dateString = res_date;
    const dateObject = new Date(dateString);

    // Get date, month, and year
    const date = dateObject.getDate();
    const month = dateObject.toLocaleString("default", { month: "long" });
    const year = dateObject.getFullYear();

    let date_to_return = `${date} ${month} ${year}`;

    return date_to_return;
  };

  const get_time_from_response = (res_time) => {
    const dateString = res_time;
    const dateObject = new Date(dateString);

    // Get hours, minutes, and seconds
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();

    const amOrPm = hours >= 12 ? "PM" : "AM";

    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
    }

    const time = `${hours}:${minutes} ${amOrPm}`;

    return time;
  };

  const gotowebinardetail = (webinar) => {
    navigate("/webinar-detail", {
      state: {
        webinar,
      },
    });
  };

  return (
    <>
      <div className="container">
        <div className="breadcrumb_div">
          <BreadcrumbComponent name="webinars" />
        </div>
        <div className="headingdiv my-4">
          <h1>Webinars</h1>
        </div>

        <div className="tabs-section m-0">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link-tab active"
                id="nav-home-tab"
                data-toggle="tab"
                data-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                All
              </button>
              <button
                className="nav-link-tab"
                id="nav-profile-tab"
                data-toggle="tab"
                data-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Upcoming
              </button>
              <button
                className="nav-link-tab"
                id="nav-contact-tab"
                data-toggle="tab"
                data-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Past
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="webinars_grid my-3">
                <div className="row">
                  {all_webinars.map((webinar, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="card p-2 webinar_card my-3">
                        <img
                          src={`http://localhost:1337${webinar.attributes.webinar_image.data.attributes.url}`}
                          alt=""
                          className="card_image"
                        />

                        <h5
                          className="font-weight-bold"
                          title={webinar.attributes.webinar_name}
                        >
                          {webinar.attributes.webinar_name}
                        </h5>

                        <div className="timedatesection">
                          <FaRegClock />
                          <span className="mx-2">
                            {get_time_from_response(
                              webinar.attributes.webinar_date
                            )}
                          </span>

                          <span className="">
                            {get_date_from_response(
                              webinar.attributes.webinar_date
                            )}
                          </span>
                        </div>

                        <div className="location_div">
                          <FaMapMarkerAlt />
                          <span className="mx-2">
                            {webinar.attributes.webinar_location}
                          </span>
                        </div>

                        <div className="my-3">
                          <button
                            className="btn btn-danger"
                            onClick={() => gotowebinardetail(webinar)}
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="webinars_grid my-3">
                  <div className="row">
                    {upcoming_webinars.map((webinar, index) => (
                      <div className="col-md-4" key={index}>
                        <div className="card p-2 webinar_card my-3">
                          <img
                            src={`http://localhost:1337${webinar.attributes.webinar_image.data.attributes.url}`}
                            alt=""
                            className="card_image"
                          />

                          <h5
                            className="font-weight-bold"
                            title={webinar.attributes.webinar_name}
                          >
                            {webinar.attributes.webinar_name}
                          </h5>

                          <div className="timedatesection">
                            <FaRegClock />
                            <span className="mx-2">
                              {get_time_from_response(
                                webinar.attributes.webinar_date
                              )}
                            </span>

                            <span className="">
                              {get_date_from_response(
                                webinar.attributes.webinar_date
                              )}
                            </span>
                          </div>

                          <div className="location_div">
                            <FaMapMarkerAlt />
                            <span className="mx-2">
                              {webinar.attributes.webinar_location}
                            </span>
                          </div>

                          <div className="my-3">
                            <button
                              className="btn btn-danger"
                              onClick={() => gotowebinardetail(webinar)}
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className="webinars_grid my-3">
                <div className="row">
                  {past_webinars.map((webinar, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="card p-2 webinar_card my-3">
                        <img
                          src={`http://localhost:1337${webinar.attributes.webinar_image.data.attributes.url}`}
                          alt=""
                          className="card_image"
                        />

                        <h5
                          className="font-weight-bold"
                          title={webinar.attributes.webinar_name}
                        >
                          {webinar.attributes.webinar_name}
                        </h5>

                        <div className="timedatesection">
                          <FaRegClock />
                          <span className="mx-2">
                            {get_time_from_response(
                              webinar.attributes.webinar_date
                            )}
                          </span>

                          <span className="">
                            {get_date_from_response(
                              webinar.attributes.webinar_date
                            )}
                          </span>
                        </div>

                        <div className="location_div">
                          <FaMapMarkerAlt />
                          <span className="mx-2">
                            {webinar.attributes.webinar_location}
                          </span>
                        </div>

                        <div className="my-3">
                          <button
                            className="btn btn-danger"
                            onClick={() => gotowebinardetail(webinar)}
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebinarsComponent;
