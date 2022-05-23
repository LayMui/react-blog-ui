import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to</span>
        <span className="headerTitleLg">LAY MUI's BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://www.w3schools.com/images/picture.jpg"
        alt=""
      />
    </div>
  );
}
