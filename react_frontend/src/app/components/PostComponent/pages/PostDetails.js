import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import PostBody from "../helpers/PostBody";
import SideBar from "../helpers/SideBar";

import { getPost } from "../../../services/postServices";

const PostDetails = (props) => {
  const postId = props.match.params.id;

  const [post, setPost] = useState([]);

  useEffect(() => {
    const fatchData = async () => {
      const { data } = await getPost(postId);
      setPost(data);
    };

    fatchData();
  }, [postId]);

  return (
    <div className="container">
      <h1 className="mt-4 mb-3">
        Title{" "}
        <small>
          {" "}
          by <Link to="#">{post.userId}</Link>{" "}
        </small>
      </h1>

      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Post {post.id}</li>
      </ol>

      <div className="row">
        <PostBody post={post} />
        <SideBar />
      </div>
    </div>
  );
};

export default PostDetails;
