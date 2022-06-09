import React from "react";
import About from "../about/about";

import PopupContact from "../popUP/popupContact";

export default function Contact() {
  return (
    <div>
      <About />
      <PopupContact massage="Please contact us" type="edit" />
    </div>
  );
}
