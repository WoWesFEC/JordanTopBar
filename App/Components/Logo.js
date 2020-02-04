import React from 'react';

const Logo = () => {
  return (
    <div className="logo">
      <picture>
        <img id="logo" src="./pics/wowes.png"></img>
      </picture>
      <div id="auswowes">Austin Wowe's</div>
      <div id="open">Open 24 hours!</div>
    </div>
  );
}

export default Logo;