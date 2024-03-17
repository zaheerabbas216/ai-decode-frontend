import React, { useState } from "react";
import BreadcrumbComponent from "../../../component/breadcrumb";
import { useLocation } from "react-router-dom";
import { FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import "./styles.scss";

const WebinarDetail = () => {
  const location = useLocation();
  const webinar = location.state.webinar;

  const [webinar_status, setWebinarStatus] = useState("");
  const [webinar_date, setWebinarDate] = useState("");

  const getWebinarStatus = () => {
    let webinar_date = new Date(webinar.attributes.webinar_date);
    let todays_date = new Date();

    if (todays_date > webinar_date) {
      return "Completed";
    } else {
      return "Upcoming";
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

  return (
    <>
      <div className="container">
        <div>
          <BreadcrumbComponent name="Webinar Detail" />
        </div>
        <div className="mt-4 mb-4">
          <div className="row">
            <div className="col-md-8">
              <div className="webinar_banner_image">
                <img
                  src={`http://localhost:1337${webinar.attributes.webinar_image.data.attributes.url}`}
                  alt=""
                  className="detail_banner_image"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-2">
                <h6 className="font-weight-bold">
                  {webinar.attributes.webinar_name}
                </h6>

                <div className="webinar_details">
                  <div className="mt-3 d-flex align-items-center">
                    <FaRegClock />
                    <span className="mx-2">
                      {get_time_from_response(webinar.attributes.webinar_date)}
                    </span>
                    <span>
                      {get_date_from_response(webinar.attributes.webinar_date)}
                    </span>
                  </div>
                  <div className="mt-3 d-flex align-items-center">
                    <FaMapMarkerAlt />
                    <span
                      className="mx-2 webinar_meeting_link"
                      title="click to open the meeting"
                    >
                      {webinar.attributes.webinar_location}
                    </span>
                  </div>

                  <div className="webinar_status_div mt-3 p-2">
                    <span className="text-light">{getWebinarStatus()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="detailed_view_webinar mt-4">
                <h2 className="detailed_webinar_title">
                  {webinar.attributes.webinar_name}
                </h2>
              </div>

              <div className="webinar_overview mt-4">
                <h5 className="overview_title font-weight-bold">Overview</h5>
                <div className="card p-3 webinar_overview_card">
                  <p>{webinar.attributes.webinar_overview}</p>
                </div>
              </div>

              <div className="webinar_overview mt-4">
                <h5 className="overview_title font-weight-bold">
                  More about the host
                </h5>
                <div className="card p-3 webinar_author_card">
                  <p>{webinar.attributes.webinar_host_info}</p>

                  <div className="mt-3 mb-3">
                    <h6 className="font-weight-bold">
                      {webinar.attributes.webinar_host_name}
                    </h6>
                    <p className="mb-0 host_desig">
                      {webinar.attributes.webinar_host_desig}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebinarDetail;
