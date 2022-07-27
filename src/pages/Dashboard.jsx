import React from "react";
import { Button, Card } from "react-bootstrap";
import "../styles/Dashboard.css";
import appLogo from "../images/suntingprofil.png";
import appLogo2 from "../images/edit.png";
import appLogo3 from "../images/trash.png";
import Navbar from "../component/NavBar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <form>
        <textarea placeholder="Apa yang anda pikirkan?"></textarea>
      </form>
      <Button className="ButtonPst">Posting</Button>{" "}
      <div className="Border">
        <div className="HeadComment">
          <Card>
            <img className="img1" src={appLogo} alt="appLogo" />
            <Card.Header className="cardhead">Nama Penguna</Card.Header>
            <img className="img2" src={appLogo2} alt="appLogo2" />
            <img className="img3" src={appLogo3} alt="appLogo3" />
          </Card>
        </div>
        <br />
        <div className="status">
          <Card>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quos fugiat velit enim alias mollitia tempora ullam repellat optio
            harum tempore beatae ipsam, eos corrupti omnis suscipit similique
            eligendi doloremque natus nobis exercitationem! Numquam officia quod
            placeat veritatis molestias?
          </Card>
        </div>
        <Button className="ButtonCmt">komentar</Button>{" "}
      </div>
      <div className="Border2">
        <div className="HeadComment">
          <Card>
            <img className="img1" src={appLogo} alt="appLogo" />
            <Card.Header className="cardhead">Nama Penguna Lain</Card.Header>
            <img className="img4" src={appLogo2} alt="appLogo2" />
            <img className="img5" src={appLogo3} alt="appLogo3" />
          </Card>
        </div>
        <br />
        <div className="status">
          <Card>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quos fugiat velit enim alias mollitia tempora ullam repellat optio
            harum tempore beatae ipsam, eos corrupti omnis suscipit similique
            eligendi doloremque natus nobis exercitationem! Numquam officia quod
            placeat veritatis molestias?
          </Card>
        </div>
        <Button className="ButtonCmt">komentar</Button>{" "}
      </div>
    </>
  );
};

export default Dashboard;
