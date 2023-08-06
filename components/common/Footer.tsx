import React from "react";
import Link from "next/dist/client/link";

const Footer = () => (
  <footer>
    <div className="container">
      <Link href="/" className="logo-font" passHref>
        <a>conduit</a>
      </Link>
      <span className="attribution">Code &amp; design licensed under MIT.</span>
    </div>
  </footer>
);

export default Footer;
