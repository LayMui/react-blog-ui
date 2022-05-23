import "./header.css";

import image from '../assets/vlcs/1.JPG'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">Welcome to</span> */}
        <span className="headerTitleLg">Victory life Christian School Graduation Ceremony 2022</span>
      </div>
      <img
        className="headerImg"
        src={image}
        alt="cover story"
      />
    </div>
  );
}
