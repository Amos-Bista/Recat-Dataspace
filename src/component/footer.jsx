import React, { useState, useEffect } from "react";
import parse from 'html-react-parser';

const Footer = () => {
  const [rows, setRows] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetchData();
    ContactData();
    ServiceData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/aboutUs/getAboutUs`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRows(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const ContactData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/contacts/allContacts`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setContactData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const ServiceData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/getServices`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setServiceData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const imagestyles = {
    width: "254.77px",
    height: "240.39px",
  };

  const chunkedServices = [];
  for (let i = 0; i < serviceData.length; i += 5) {
    chunkedServices.push(serviceData.slice(i, i + 5));
  }

  return (
    <div className="bg-[#0D5077] pb-4">
      <div className="flex justify-center w-[100%] text-white bg-[#0D5077] py-4 px-14">
        <div className="flex w-[84%] pt-6">
          {/* service */}
          <div className="w-[35%] flex-col">
            <h1 className="text-3xl">Service</h1>
            <div className="flex gap-10 pt-3 pl-5">
              {chunkedServices.map((chunk, index) => (
                <ul key={index} className="gap-10 list-disc text-1xl">
                  {chunk.map((service) => (
                    <li key={service.id} className="px-2 py-1">
                      {service.serviceName}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          {/* about */}
          <div className="flex w-[80%]">
            <div className="px-5 w-[70%] pr-5">
              <h1 className="text-3xl">About us</h1>
              {rows.map((row) => (
                <p
                  key={row.id}
                  className="pt-3 leading-relaxed text-justify text-1xl"
                >
                  {parse(row.description)}
                </p>
              ))}
            </div>
            <div className="w-[20%] pl-20 ">
              <h1 className="text-3xl">Company</h1>
              <ul className="pt-3 pl-6 list-disc text-1xl">
                <li className="py-1">Home</li>
                <li className="py-1">Service</li>
                <li className="py-1 w-[100%]">About us</li>
                <li className="py-1">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <img
            src="/footerimage.png"
            alt="footerimage"
            style={imagestyles}
            className=""
          />
        </div>
      </div>

      <div className="mx-16 flex justify-between border-t-2 border-b-2 border-[#E5E7EB] py-4 text-white">
        <div className="">
          {contactData.map((contact) => (
            <div key={contact.id} className="flex justify-between mb-3">
              <div className="mr-5">{contact.email}</div>
              <div className="ml-80">{contact.address}</div>
              <div className="ml-64">{contact.phoneNum}</div>
            </div>
          ))}
        </div>
        <div className="">
          <ul className="flex justify-center gap-5">
            <li className="">
              <img
                src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
                alt=""
                className="w-6 rounded-full"
              />
            </li>

            <li className="">
              <img
                src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-6xtrjbtc.png"
                alt=""
                className="rounded-full w-7"
              />
            </li>

            <li className="">
              <img
                src="https://static-00.iconduck.com/assets.00/twitter-icon-2048x2048-pm1hdjoo.png"
                alt=""
                className="rounded-full w-7"
              />
            </li>

            <li className="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                alt=""
                className="rounded-full w-7 h-7"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end pt-4 mr-16 text-white text-opacity-50">
        © 2021 All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
