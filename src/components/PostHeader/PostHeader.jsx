//Nicolas de Barros - 32070837
//Eric Dias Felipeli Cesar Dias Pereira - 41911296

import React from "react";
import "./PostHeader.css"
import imagem from '../../images/img4.png';

function PostHeader(props) {

  const { name, user } = props;

  return (
    <div className="post-header">
      <img
        src={imagem}
        alt="Foto de Perfil"
        className="profile-picture"
      />
      <div className="profile-div">
        <div className="profile_name">
          {name}
          <div className="profile_account">{user}</div>
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
