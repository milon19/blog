import React, { useState, useEffect } from "react";

import CommentForm from "./CommentForm";
import Comment from "./Comment";

import { getComments } from "../../../services/postServices";

const PostBody = ({ post }) => {
  const postId = post.id;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fatchData = async () => {
      const { data } = await getComments(postId);
      setComments(data);
    };

    fatchData();
  }, [postId]);

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
      <p className="lead">{post.body}</p>

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

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default PostBody;
