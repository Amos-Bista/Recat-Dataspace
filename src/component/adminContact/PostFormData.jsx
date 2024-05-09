import React, { useState, useEffect } from "react";

function PostDataForm() {
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [response, setResponse] = useState("");
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://172.16.100.109:8282/contacts/allContacts"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://172.16.100.109:8282/contacts/addContacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNum, email, address }),
        }
      );

      if (response.ok) {
        setResponse("Contact registered"); // Set the response message
        alert("Form submitted successfully!"); // Alert for successful submission
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error posting data.");
      alert("Error submitting form. Please try again."); // Alert for error
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://172.16.100.109:8282/contacts/deleteContact/${id}`,

        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setResponse("Contact deleted");
        setContacts(contacts.filter((contact) => contact.id !== id));
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error deleting contact.");
    }
  };

  return (
    <div>
      <h1>Post Data Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <div>
            <li key={contact.id}>
              Phone: {contact.phoneNum}, Email: {contact.email}, Address:{" "}
              {contact.address}
              <button
                className="bg-[red]"
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </li>
            <li>
              <button>Edit</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PostDataForm;
