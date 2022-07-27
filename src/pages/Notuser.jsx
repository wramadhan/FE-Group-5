import React from "react";
// import { Button, Card } from "react-bootstrap";
import appLogo from "../images/suntingprofil.png";
import "../styles/NotUser.css";
import NavBar from "../component/NavBar";

const Notuser = () => {
  return (
    <>
      <NavBar />
      <div className="Border2">
        <div className="HeadComment">
          {/* <Card> */}
          <div>
            <img className="img1" src={appLogo} alt="appLogo" />
            {/* <Card.Header className="cardhead">Nama Penguna Lain</Card.Header> */}
            <div className="cardhead">Nama Penguna Lain</div>
          </div>
          {/* </Card> */}
        </div>
        <br />
        <div className="status">
          <div className="lorem">
          {/* <Card> */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quos fugiat velit enim alias mollitia tempora ullam repellat optio
            harum tempore beatae ipsam, eos corrupti omnis suscipit similique
            eligendi doloremque natus nobis exercitationem! Numquam officia quod
            placeat veritatis molestias?
          {/* </Card> */}
          </div>
        </div>
        {/* <Button className="ButtonCmt"> komentar</Button>{" "} */}
        <button className="ButtonCmt"> komentar</button>
        <form>
          <textarea placeholder="Ketik komentar pada kolom ini"></textarea>
        </form>
        <button className="ButtonPst">Posting</button>
        {/* <Button className="ButtonPst">Posting</Button>{" "} */}
        <div className="status2">
          <div className="HeadComment">
            <div>
              <img className="img2" src={appLogo} alt="appLogo" />
              {/* <Card.Header className="cardhead2">Nama komentator</Card.Header> */}
              <div className="cardhead2">Nama komentator</div>
            </div>
          </div>
          <br />
          <div className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quos fugiat velit enim alias mollitia tempora ullam repellat optio
            harum tempore beatae ipsam, eos corrupti omnis suscipit similique
            eligendi doloremque natus nobis exercitationem! Numquam officia quod
            placeat veritatis molestias?
          </div>
        </div>{" "}
      </div>
    </>
  );
};
export default Notuser;
