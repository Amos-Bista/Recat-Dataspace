import React from "react";
import Contacthero from "../component/contact/contacthero";
import Contactform from "../component/contact/contactform";

const Contact = () => {
  return (
    <div>
      <Contacthero />
      <div className="flex justify-center mx-auto text-center my-12">
        <Contactform />
      </div>{" "}
    </div>
  );
};

export default Contact;
