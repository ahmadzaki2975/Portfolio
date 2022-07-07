import {FaInstagram, FaGithub, FaFacebook} from "react-icons/fa"

export const Links = () => {
  return (
    <div className="links">
      <a href="#">
        <div><FaInstagram/></div>
      </a>
      <a href="#">
        <div><FaGithub/></div>
      </a>
      <a href="#">
        <div><FaFacebook/></div>
      </a>
    </div>
  );
};
