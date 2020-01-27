import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p>Copyright &copy; {year}, Keeper, All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
