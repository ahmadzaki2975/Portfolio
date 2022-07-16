import {FaInstagram, FaGithub, FaFacebook, FaLinkedin} from "react-icons/fa";
import {MdMail} from "react-icons/md";

export const Links = () => {
  return (
    <div className="links">
      <a href="https://www.instagram.com/ahmad._.zaki/">
        <div><FaInstagram/></div>
      </a>
      <a href="https://github.com/ahmadzaki2975">
        <div><FaGithub/></div>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100014631301571">
        <div><FaFacebook/></div>
      </a>
      <a href="https://www.linkedin.com/in/ahmad-zaki-akmal/">
        <div><FaLinkedin/></div>
      </a>
      <a href="mailto:ahmadzaki2975@gmail.com">
        <div><MdMail/></div>
      </a>
    </div>
  );
};
