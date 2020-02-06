import React from 'react';

const Menufill = ({data}) => {

  const handleClick = (e) => {
    let onClickEvent = new CustomEvent("jordanAwesome", {
      detail: data.id
    })
    window.dispatchEvent(onClickEvent);
  };
  //console.log(data);
  return (
    <li id="jmenufill" onClick={handleClick}>
      {data.name}
    </li>
  );
}

export default Menufill