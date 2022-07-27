import React from "react";
import { Button, Card } from "react-bootstrap";
import appLogo from "../images/suntingprofil.png";
import "../styles/NotUser.css";
import NavBar from "../component/NavBar";

const Notuser = () => {
  return (
    <>
      <NavBar />
      <div className="Border2">
        <div className="HeadComment">
          <Card>
            <img className="img1" src={appLogo} alt="appLogo" />
            <Card.Header className="cardhead">Nama Penguna Lain</Card.Header>
          </Card>
        </div>
        <br />
        <div className="status">
          <Card className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quos fugiat velit enim alias mollitia tempora ullam repellat optio
            harum tempore beatae ipsam, eos corrupti omnis suscipit similique
            eligendi doloremque natus nobis exercitationem! Numquam officia quod
            placeat veritatis molestias?
          </Card>
        </div>
        <Button className="ButtonCmt"> komentar</Button>{" "}
        <form>
          <textarea placeholder="Ketik komentar pada kolom ini"></textarea>
        </form>
        <Button className="ButtonPst">Posting</Button>{" "}
        <div className="status2">
          <div className="HeadComment">
            <Card>
              <img className="img2" src={appLogo} alt="appLogo" />
              <Card.Header className="cardhead2">Nama komentator</Card.Header>
            </Card>
          </div>
          <br />
          <Card className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quos fugiat velit enim alias mollitia tempora ullam repellat optio
            harum tempore beatae ipsam, eos corrupti omnis suscipit similique
            eligendi doloremque natus nobis exercitationem! Numquam officia quod
            placeat veritatis molestias?
          </Card>
        </div>{" "}
      </div>
    </>
  );
};
export default Notuser;
