import React from "react";
import "./Footer.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© MD. GOLAM MOSTAFA &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;
