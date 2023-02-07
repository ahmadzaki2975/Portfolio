import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export const Links = () => {
  return (
    <div className="links">
      <a
        href="https://www.instagram.com/ahmad._.zaki/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <FaInstagram />
        </div>
      </a>
      <a
        href="https://github.com/ahmadzaki2975"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <FaGithub />
        </div>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100014631301571"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <FaFacebook />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/ahmad-zaki-akmal/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <FaLinkedin />
        </div>
      </a>
      <a
        href="mailto:ahmadzaki2975@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <MdMail />
        </div>
      </a>
    </div>
  );
};
