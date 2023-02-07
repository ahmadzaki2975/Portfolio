import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export const Links = () => {
  return (
    <div className="links">
      <a href="https://www.instagram.com/ahmad._.zaki/" target="_blank">
        <div>
          <FaInstagram />
        </div>
      </a>
      <a href="https://github.com/ahmadzaki2975" target="_blank">
        <div>
          <FaGithub />
        </div>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100014631301571"
        target="_blank"
      >
        <div>
          <FaFacebook />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/ahmad-zaki-akmal/" target="_blank">
        <div>
          <FaLinkedin />
        </div>
      </a>
      <a href="mailto:ahmadzaki2975@gmail.com" target="_blank">
        <div>
          <MdMail />
        </div>
      </a>
    </div>
  );
};
