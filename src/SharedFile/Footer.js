import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <h4 className="text-2xl footer-title">
          Fresh Fruits Warehouse Ltd
        </h4>
        <h4 className="text-xl">
          Copyright &#169; {new Date().getFullYear()} - All right reserved.
        </h4>
      </div>
      <div>
        <span className="footer-title text-2xl">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/mb-tousif"
            rel="noReferrer"
            target="_blank"
          >
            <BsGithub className="w-8 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/azizul-haque-tousif"
            rel="noReferrer"
            target="_blank"
          >
            <ImLinkedin className="w-8 h-6" />
          </a>
          <a
            href="https://www.facebook.com/azizul.tousif"
            rel="noReferrer"
            target="_blank"
          >
            <RiFacebookFill className="w-8 h-6" />
          </a>
          <a
            href="https://twitter.com/my_dreams1990"
            rel="noReferrer"
            target="_blank"
          >
            <BsTwitter className="w-8 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
