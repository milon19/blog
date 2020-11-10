import React from "react";
import { Link } from "react-router-dom";

import PostCard from "./helpers/PostCard";
import Pagination from "./helpers/Pagination";

const Post = () => {
  return (
    <div className="container">
      <h1 className="mt-4 mb-3">
        Blog Home Two <small>Subheading</small>
      </h1>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Posts</li>
      </ol>

      <PostCard />
      <PostCard />

      <Pagination />
    </div>
  );
};

export default Post;
