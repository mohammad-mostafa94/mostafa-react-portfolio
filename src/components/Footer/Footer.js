import React from "react";
import "./Footer.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="fixed-bottom py-1 text-center footer-style">© MD. GOLAM MOSTAFA &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;
