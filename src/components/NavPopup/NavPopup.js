import React from "react";

import Navigation from "../Navigation/Navigation";

function NavPopup({onClose}) {
  return (
    <div className="nav-popup">
      <div className="nav-popup__overlay"></div>
      <div className="nav-popup__wrapper">
        <Navigation closePopup={onClose}/>
        <button className="nav-popup__close-button" onClick={onClose}/>
      </div>

    </div>
  )
}

export default NavPopup;
