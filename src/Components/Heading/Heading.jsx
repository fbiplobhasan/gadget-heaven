import React from "react";

const Heading = ({ title, subTitle }) => {
  return (
    <div className="my-10">
      <h1 className="text-center text-4xl">{title}</h1>
      <p className="text-center">{subTitle}</p>
    </div>
  );
};

export default Heading;
