import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";

const HeaderSocial = () => {
    return(
        <div className="header__socials">   
    <a
      href="https://www.linkedin.com/in/vijay-sharma2011/"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://github.com/Vijaysharmagpj"
      target="_blank"
      rel="noreferrer"
    >
      <FaSquareGithub />
    </a>
    <a
      href="https://leetcode.com/vijaysharmagpj65/"
      target="_blank"
      rel="noreferrer"
    >
      <SiLeetcode />
    </a>
    <a
      href="https://www.hackerrank.com/profile/vijaysharmagpj65"
      target="_blank"
      rel="noreferrer"
    >
      <SiHackerrank />
    </a>
  </div>
    )
};
export default HeaderSocial;
