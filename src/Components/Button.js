import React from "react";

const Button = ({ btnName }) => {
  return (
    <div>
      <button className="px-5 py-3 m-2 rounded-lg bg-gray-200">
        {btnName}
      </button>
    </div>
  );
};

export default Button;
