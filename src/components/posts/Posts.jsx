import Post from "../post/Post";
import "./posts.css";

import image1 from '../assets/vlcs/1.JPG'

export default function Posts() {
  return (
    <div className="posts">
      <Post img={image1} />
    </div>
  );
}
