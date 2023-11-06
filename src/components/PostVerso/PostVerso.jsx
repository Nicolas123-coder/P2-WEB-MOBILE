import React, { useState } from "react";
import "./PostVerso.css";
import PostHeader from "../PostHeader/PostHeader";


function PostVerso(props) {
  const { name, user, following, followers } = props;

  const [isFront, setIsFront] = useState(true);

  const handleClick = () => {
    setIsFront(!isFront);
  };

  return (
    <div className="main-div">
      <div className="post-container-2" onClick={handleClick}>
        <PostHeader name={name} user={user} />
        <hr />
        <div className="profile-info">
          <div className="info-1">
            <h3>{followers}</h3>
            <p>Followers</p>
          </div>
          <div className="info-2">
            <h3>{following}</h3>
            <p>Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostVerso;
