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
        src="https://github.com/LayMui/react-blog-ui/blob/master/src/images/VLCS/1.JPG"
        alt=""
      />
    </div>
  );
}
