import React, { forwardRef } from "react";

const PrintComponent = forwardRef(({ movieData, quantity, userData }, ref) => {
  return (
    <div ref={ref}>
      {/* Content to be printed */}
      <h2>Movie Details: {movieData?.title}</h2>
      <p>Quantity: {quantity}</p>
      <p>User Information:</p>
      <ul>
        <li>Full Name: {userData.fullName}</li>
        <li>Email: {userData.email}</li>
        <li>Address: {userData.address}</li>
        <li>Country: {userData.country}</li>
        <li>State: {userData.state}</li>
        <li>City: {userData.city}</li>
        <li>Zip/Postal Code: {userData.zip}</li>
        {/* Add other user information fields here */}
      </ul>
      {/* Include other relevant information */}
    </div>
  );
});

export default PrintComponent;
