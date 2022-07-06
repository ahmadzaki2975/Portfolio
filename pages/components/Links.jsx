import {FaInstagram, FaGithub, FaFacebook} from "react-icons/fa"

export const Links = () => {
  return (
    <ul className="links">
      <a href="#">
        <li><FaInstagram/></li>
      </a>
      <a href="#">
        <li><FaGithub/></li>
      </a>
      <a href="#">
        <li><FaFacebook/></li>
      </a>
    </ul>
  );
};
