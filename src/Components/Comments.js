import React from "react";

const Comments = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-lg bg-gray-100 rounded-lg p-2 my-3">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;
