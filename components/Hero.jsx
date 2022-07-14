import { Logo } from "./Logo";
import { Links } from "./Links";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <motion.div initial="hidden" animate="visible" transition={{duration: 1, delay:1}} variants={{
          hidden: {
            opacity: 0,
            x:400
          },
          visible: {
            opacity: 1,
            x:0
          }
        }}>
          <h1>Ahmad Zaki Akmal</h1>
          <p>Front End Web Developer</p>
          <div className="btn-container">
            <a href="#">
              <div className="btn">About Me</div>
            </a>
            <a href="#">
              <div className="btn">Projects</div>
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div className="hero-image"  initial="hidden" animate="visible" transition={{duration: 1}} variants={{
          hidden: {
            opacity: 0,
            x:-400
          },
          visible: {
            opacity: 1,
            x:0
          }
        }}>
          <Logo/>
        </motion.div>
    </div>
  );
};
