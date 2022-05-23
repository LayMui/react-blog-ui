import "./header.css";

import image from '../assets/images/cover.JPG'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">Welcome to</span> */}
        <span className="headerTitleLg">Welcome to LayMui's Blog</span>
      </div>
      <img
        className="headerImg"
        src={image}
        alt="cover story"
      />
    </div>
  );
}
