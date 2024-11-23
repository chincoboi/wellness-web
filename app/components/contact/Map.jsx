import React from "react";

function Map() {
  const coordinates = [41.8796, -87.6325];

  return (
    <div style={{ width: "100%", height: "600px" }} className="pigeon-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.6112416099472!2d-87.63536752500235!3d41.879709965315044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2f22a3c8e3f7%3A0x9473ecd3e91d6f3e!2sWilkes%20Wellness%20Services%20Inc.!5e0!3m2!1sen!2sng!4v1713281002931!5m2!1sen!2sng"
        width="100%"
        height="600px"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
