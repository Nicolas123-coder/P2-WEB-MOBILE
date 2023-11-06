//Nicolas de Barros - 32070837
//Eric Dias Felipeli Cesar Dias Pereira - 41911296

import React, { useState } from "react";
import "./Widget.css";
import PostHeader from "../PostHeader/PostHeader";
import PostVerso from "../PostVerso/PostVerso";

const post = {
  name: "John Doe",
  user: "johndoe@gmail.com",
  followers: '5,4k',
  following: '2,2k',
};


function Widget() {
  const [isFront, setIsFront] = useState(true);

  const handleClick = () => {
    setIsFront(!isFront);
  };

  return (
    <div className="main-div">
      <div className="post-container" onClick={handleClick}>
        {isFront ? (
          <PostHeader name={post.name} user={post.user} following={post.following} followers={post.followers} />
        ) : (
          <PostVerso name={post.name} user={post.user} following={post.following} followers={post.followers}/>
        )}
      </div>
    </div>
  );
}

export default Widget;
