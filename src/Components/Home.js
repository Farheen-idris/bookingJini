import React, { useState } from "react";
import { Layout, Menu, Dropdown } from "antd";
import { Image } from "antd";
import sheetal from "../images/sheetal.jpg";
import Room1 from "../images/room.jpg";
import Room2 from "../images/room.jpg";
import Room3 from "../images/room.jpg";
import Room4 from "../images/room.jpg";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { Modal, Button } from "antd";
import "./Home.css";
import SimpleMap from "./Maps";
import Navbar from "./Navbar";
import ListItem from "./ListItem";
import FooterPanel from "./FooterPanel";
import FooterPage from "./Footer";
const { RangePicker } = DatePicker;

const { Header, Content, Footer } = Layout;

const data = [
  {
    id: 1,
    image: "room.jpg",
    roomType: "EXECUTIVE  ROOM",
    capacity: "1",
  },
  {
    id: 2,
    image: { Room1 },
    roomType: "EXECUTIVE SINGLE ROOM",
    capacity: 2,
  },
  {
    id: 3,
    image: { Room2 },
    roomType: "EXECUTIVE DOUBLE ROOM",
    capacity: 3,
  },
  {
    id: 4,
    image: { Room3 },
    roomType: "EXECUTIVE SINGLE ROOM",
    capacity: 1,
  },
];

function onChange(dates, dateStrings) {
  console.log("From: ", dates[0], ", to: ", dates[1]);
  console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
}
const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [price, setPrice] = useState("INR");
  const [display, setDisplay] = useState("about");

  const [isloginVisible, setLoginVisible] = useState(false);

  const handleDisplay = (data) => {
    setDisplay(data);
  };

  const loginModal = () => {
    setLoginVisible(true);
  };

  return (
    <Layout>
      <div className="logo" />
      <Navbar
        display={display}
        setDisplay={handleDisplay}
        price={price}
        setPrice={setPrice}
        loginModal={loginModal}
      />
      <div
        style={{
          flexDirection: "row",
        }}
      >
        <Content style={{ padding: "0px", marginTop: "1px" }}>
          <Space direction="vertical" size={1}>
            <div
              style={{
                flexDirection: "column",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "20px",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "absolute",
                  top: 200,
                  left: 400,
                  padding: 20,
                  width: 800,
                }}
              >
                <RangePicker
                  style={{ width: 600 }}
                  ranges={{
                    Today: [moment(), moment()],
                    "This Month": [
                      moment().startOf("month"),
                      moment().endOf("month"),
                    ],
                  }}
                  onChange={onChange}
                />
                <button className="btn-check">Check Availability</button>
              </div>
              <div style={{ zIndex: 10, margin: 30 }}>
                <img width="1650px" height="500px" src={sheetal} />
              </div>
            </div>
          </Space>
          <ListItem data={data} setIsModalVisible={setIsModalVisible} />
        </Content>
      </div>
      {/* /About */}
      <FooterPanel setDisplay={handleDisplay} display={display} />
      <FooterPage />

      <Modal
        visible={isloginVisible}
        onOk={() => setLoginVisible(false)}
        onCancel={() => setLoginVisible(false)}
      >
        <h3
          style={{
            textTransform: "capitalize",
            fontWeight: "400",
            color: "#f5ab35",
          }}
        >
          Please, login into your account
        </h3>
        <h4 style={{ textAlign: "center" }}>Enter Mobile Number</h4>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <select
              style={{
                border: "none",
                color: "#1c1b1b",
                border: "none",
                borderBottom: "1px solid #9e9e9e",
                height: "2rem",
                width: "88.6666666667%",
                marginLeft: "50px",
              }}
            >
              <option value="+91">+91</option>
              <option value="+92">+92</option>
              <option value="+93">+93</option>
              <option value="+94">+94</option>
              <option value="+95">+95</option>
              <option value="+96">+96</option>
              <option value="+121">+121</option>
              <option value="+123">+123</option>
              <option value="+121">+121</option>
              <option value="+343">+343</option>
              <option value="+432">+432</option>
              <option value="+212">+212</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <input
              style={{
                border: "none",
                borderBottom: "1px solid #9e9e9e",
                color: "#1c1b1b",
                fontSize: "110%",
                width: "66.6666666667%",
                marginLeft: "55px",
              }}
              type="text"
              pattern="[0-9]*"
            />
          </div>
        </div>
      </Modal>
    </Layout>
  );
};
export default Home;
