import { Logo } from "./Logo";
import { Links } from "./Links";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Ahmad Zaki Akmal</h1>
        <p>Lorem Ipsum</p>
      </div>
      <div className="hero-image">
        <Logo />
      </div>
    </div>
  );
};
