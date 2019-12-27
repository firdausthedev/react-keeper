import React from 'react';
const date = new Date();
const year = date.getFullYear();


function Footer() {
  return  <section id="footer">
    <p>Copyright &copy; {year}, Keeper, All Rights Reserved</p>
  </section>
}

export default Footer;