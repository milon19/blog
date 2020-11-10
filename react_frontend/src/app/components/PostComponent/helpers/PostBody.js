import React from "react";

import CommentForm from "./CommentForm";
import Comment from "./Comment";

const PostBody = () => {
  return (
    <div className="col-lg-8">
      <img
        className="img-fluid rounded"
        src="http://placehold.it/900x300"
        alt=""
      />
      <hr />
      <p>Posted on January 1, 2017 at 12:00 PM</p>
      <hr />
      <p className="lead">Post Body</p>

      <blockquote className="blockquote">
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        <footer className="blockquote-footer">
          Someone famous in
          <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>

      <hr />
      <CommentForm />

      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default PostBody;
