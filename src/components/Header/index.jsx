import "./index.css";
import Scroll from "../../assets/img/h-scroll.png";
import Background from "./Backgrounds/index";

const Header = () => {
  return (
    <div className="container h-container">
      <Background />

      <div className="h-header">
        <h2 className="h-intro">Hello, my name is</h2>
        <h1 className="h-name">Carlos Zejchura</h1>
        <div className="h-title">
          <div className="h-title-wrapper">
            <div className="h-title-item">Python Programmer</div>
            <div className="h-title-item">Content Creator</div>
            <div className="h-title-item">Web Developer</div>
            <div className="h-title-item">and also a Student</div>
          </div>
        </div>

        <img
          src="https://i.pinimg.com/550x/f1/ff/79/f1ff79c2cff1d151c540944305eef758.jpg"
          width={1}
          height={1}
          alt="easteregg"
        />

        <p className="h-desc">
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
        </p>
      </div>
      <div className="h-scroll">
        <img className="h-img" src={Scroll} alt="Scroll svg" />
      </div>
    </div>
  );
};
export default Header;
