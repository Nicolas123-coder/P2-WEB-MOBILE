import React, { useState } from "react";
import "./TwitterPost.css";
import PostHeader from "../PostHeader/PostHeader";
import PostVerso from "../PostVerso/PostVerso";

const post = {
  name: "John Doe",
  user: "johndoe@gmail.com",
};

let numberOfLikes = 9634;

function TwitterPost() {
  const [isFront, setIsFront] = useState(true);

  const handleClick = () => {
    setIsFront(!isFront);
  };

  return (
    <div className="main-div">
      <div className="post-container" onClick={handleClick}>
        {isFront ? (
          <PostHeader name={post.name} user={post.user} checked={post.checked} />
        ) : (
          <PostVerso/>
        )}
      </div>
    </div>
  );
}

export default TwitterPost;
