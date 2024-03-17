import React, { useEffect } from "react";

const MapComponent = () => {
  return (
    <iframe
      title="Google Map"
      width="100%"
      height="400"
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.336042204512!2d76.9214!3d15.1394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcc06c0f05c2a7%3A0x95d1cb314897d507!2sBellary%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1646079251234!5m2!1sen!2sin"
    ></iframe>
  );
};

export default MapComponent;
