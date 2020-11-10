import React from "react";
import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6">
            <Link to="posts/">
              <img
                className="img-fluid rounded"
                src="http://placehold.it/750x300"
                alt=""
              />
            </Link>
          </div>

          <div className="col-lg-6">
            <h2 className="card-title">Title</h2>
            <p className="card-text">Body</p>
            <Link to="/" className="btn btn-primary">
              Read More &rarr;
            </Link>
          </div>
        </div>
      </div>
      <div className="card-footer text-muted">
        Posted on January 1, 2017 by
        <Link to="/"> User</Link>
      </div>
    </div>
  );
};

export default PostCard;
