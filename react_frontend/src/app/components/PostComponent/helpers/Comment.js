import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="media mb-4">
      <img
        className="d-flex mr-3 rounded-circle"
        src="http://placehold.it/50x50"
        alt=""
      />
      <div className="media-body">
        <h5 className="mt-0">{comment.name}</h5>
        {comment.body}
      </div>
    </div>
  );
};

export default Comment;
