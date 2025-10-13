import React from "react";

const Success = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Thank You!</h1>
      <p>Your feedback has been submitted successfully.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default Success;
