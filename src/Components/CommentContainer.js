import React from "react";
import CommentsList from "./CommentsList";

const commentdata = [
  {
    name: "Rutuja Kumbharkar",
    text: "Hey Hi Hello namste namaskar",
    replies: [],
  },
  {
    name: "Rutuja Kumbharkar",
    text: "Hey Hi Hello namste namaskar",
    replies: [
      {
        name: "Rutuja Kumbharkar",
        text: "Hey Hi Hello namste namaskar",
        replies: [],
      },
    ],
  },
  {
    name: "Rutuja Kumbharkar",
    text: "Hey Hi Hello namste namaskar",
    replies: [
      {
        name: "Rutuja Kumbharkar",
        text: "Hey Hi Hello namste namaskar",
        replies: [
          {
            name: "Rutuja Kumbharkar",
            text: "Hey Hi Hello namste namaskar",
            replies: [],
          },
        ],
      },
      {
        name: "Rutuja Kumbharkar",
        text: "Hey Hi Hello namste namaskar",
        replies: [],
      },
    ],
  },
  {
    name: "Rutuja Kumbharkar",
    text: "Hey Hi Hello namste namaskar",
    replies: [],
  },
];

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold">Comments:</h1>
      {/* <Comments data={commentdata[0]} /> */}
      <CommentsList comments={commentdata} />
    </div>
  );
};

export default CommentContainer;
