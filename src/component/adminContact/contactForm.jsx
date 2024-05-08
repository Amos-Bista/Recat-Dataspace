import React, { useState } from "react";

const ContactForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://172.16.100.109:8080/contacts/addContacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber, email }),
        }
      );
      // Handle response as needed
      console.log("Submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <br />
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
        <br />
        <br />

        <label htmlFor="email">Email Address:</label>
        <br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
