import React from "react";

const ContactMap = () => {
  return (
    <div className="flex justify-center mt-20 text-4xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3134971033032!2d85.3192959761137!3d27.707605325478973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a8f582ea7f%3A0xbd55a53b2e3ad3ff!2sSastra%20Network%20Solution%20Inc.!5e0!3m2!1sen!2sin!4v1715151998329!5m2!1sen!2sin"
        width="1695"
        height="550"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
