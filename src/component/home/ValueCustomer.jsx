import React from 'react';
import customerData from '../../assests/customerData.json'; 

const ValueCustomer = () => {
  return (
    <div>
      <div className="flex space-x-3 mt-5 place-content-evenly h-19 mb-5">
        {customerData.map((customer, index) => (
          <img
            key={customer.id}
            src={customer.image}
            alt={`Customer ${index + 1}`}
            className="w-32 h-32 rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default ValueCustomer;
