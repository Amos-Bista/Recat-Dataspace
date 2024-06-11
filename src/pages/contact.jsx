import React from "react";
import Contacthero from "../component/contact/contacthero";
import Contactform from "../component/contact/contactform";
import Contactmap from "../component/contact/contactmap";

const Contact = () => {
  return (
    <div className="">
      <Contacthero />
      <div className="flex flex-col justify-center mx-auto my-12 text-center">
        <Contactform />
        <Contactmap />
      </div>{" "}
    </div>
  );
};

export default Contact;
