import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer>
    <div className="container">
      <Link href="/" className="logo-font">
        conduit
      </Link>
      <span className="attribution">Code &amp; design licensed under MIT.</span>
    </div>
  </footer>
);

export default Footer;
