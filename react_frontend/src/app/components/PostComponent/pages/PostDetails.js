import React from "react";
import { Link } from "react-router-dom";

import PostBody from "../helpers/PostBody";
import SideBar from "../helpers/SideBar";

const PostDetails = () => {
  return (
    <div className="container">
      <h1 className="mt-4 mb-3">
        Title{" "}
        <small>
          {" "}
          by <Link to="#">User ID</Link>{" "}
        </small>
      </h1>

      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Post id</li>
      </ol>

      <div className="row">
        <PostBody />
        <SideBar />
      </div>
    </div>
  );
};

export default PostDetails;