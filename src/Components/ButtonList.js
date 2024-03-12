import React from "react";
import Button from "./Button";

const btnList = [
  "All",
  "Movie",
  "Sports",
  "Songs",
  "Live",
  "Games",
  "Kids",
  "News",
  "Shows",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {btnList.map((btn) => (
        <Button key={btn} btnName={btn} />
      ))}

      {/* <Button name="All" />
      <Button name="Movie" />
      <Button name="Sports" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Games" />
      <Button name="Kids" />
      <Button name="News" />
      <Button name="Shows" /> */}
    </div>
  );
};

export default ButtonList;
