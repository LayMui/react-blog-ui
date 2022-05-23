import { Link } from "react-router-dom";
import "./singlePost.css";

import image2 from '../assets/vlcs/2.JPG'
import image3 from '../assets/vlcs/3.JPG'
import image4 from '../assets/vlcs/4.JPG'
import image5 from '../assets/vlcs/5.JPG'
import image6 from '../assets/vlcs/6.JPG'
import image7 from '../assets/vlcs/7.JPG'
import image8 from '../assets/vlcs/8.JPG'
import image9 from '../assets/vlcs/9.JPG'
import image10 from '../assets/vlcs/10.JPG'
import image11 from '../assets/vlcs/11.JPG'
import image12 from '../assets/vlcs/12.JPG'
import image13 from '../assets/vlcs/13.JPG'

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={image2}
          alt="image2"
        />
        <h1 className="singlePostTitle">
          Younger group of students sitting in a row
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=LayMui">
                LayMui
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
         I was invited to attend the VLCS graduation ceremony on 20 May 2022
         I was literally moved to tears by what God has done to these young lives

          <br />
          <img
          className="singlePostImg"
          src={image3}
          alt="image3"
        />
          <br />
         some text...
          <img
          className="singlePostImg"
          src={image4}
          alt="image4"
        />
          <br />

          some students serving at the reception
          <img
          className="singlePostImg"
          src={image5}
          alt="image5"
        />
          A supervisor of the school
          <br />
          <img
          className="singlePostImg"
          src={image6}
          alt="image6"
        />
          Looking so happy and stress-free
       
        <br />
          <img
          className="singlePostImg"
          src={image7}
          alt="image7"
        />
          Speech from the founder of the school Mrs Jan Boey with her husband in the foreground

          <br />
          <img
          className="singlePostImg"
          src={image8}
          alt="image8"
        />
          can sing and do skit drama....
          <br />
          <img
          className="singlePostImg"
          src={image9}
          alt="image9"
        />
         A supervisor with a group of students in uniform
         <br />
          <img
          className="singlePostImg"
          src={image10}
          alt="image10"
        />
        Moses Chin, one of the graduates preaching and sharing his testimony...
        <br />
          <img
          className="singlePostImg"
          src={image11}
          alt="image11"
        />
       One by one receiving their certificates from Mrs Boey
       <br />
          <img
          className="singlePostImg"
          src={image12}
          alt="image12"
        />
      Every one of them realise their potential in life.
      <br />
          <img
          className="singlePostImg"
          src={image13}
          alt="image13"
        />
     God has a wonderful plan and an expected end for each of them.
          </p>
      </div>
    </div>
  );
}
