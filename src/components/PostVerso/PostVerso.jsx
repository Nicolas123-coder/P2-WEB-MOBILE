import React, { useState } from "react";
import "./PostVerso.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import PostHeader from "../PostHeader/PostHeader";

const post = {
  name: "John Doe",
  user: "johndoe@gmail.com",
};

let numberOfLikes = 9634;

function PostVerso() {
  const [isFront, setIsFront] = useState(true);

  const handleClick = () => {
    setIsFront(!isFront);
  };

  return (
    <div className="main-div">
      <div className="post-container-2" onClick={handleClick}>
        <PostHeader name={post.name} user={post.user} checked={post.checked} />
        <hr />
        <div className="profile-info">
          <div className="info-1">
            <h3>5.9k</h3>
            <p>Followers</p>
          </div>
          <div className="info-2">
            <h3>2.3k</h3>
            <p>Following</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PostVerso;
