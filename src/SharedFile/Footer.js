import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <div>
        <h6>
          Copyright &#169; {new Date().getFullYear()} - All right reserved.
        </h6>
      </div>
      <div>
        <span class="footer-title">Social</span>
        <div class="grid grid-flow-col gap-4">
          <RiFacebookFill />
          <AiFillGithub />
          <BsTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
