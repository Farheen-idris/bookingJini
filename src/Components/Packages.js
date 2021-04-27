import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Image } from "antd";
import logo from "../images/hotellogo.png";
import sheetal from "../images/sheetal.jpg";
import Room1 from "../images/room.jpg";
import Room2 from "../images/room.jpg";
import Room3 from "../images/room.jpg";
import Room4 from "../images/room.jpg";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { Modal, Button } from "antd";
import "./Home.css";
import { Card } from "antd";
import { Link } from "react-router-dom";
import SimpleMap from "./Maps";
const { RangePicker } = DatePicker;

const { Header, Content, Footer } = Layout;

function onChange(dates, dateStrings) {
  console.log("From: ", dates[0], ", to: ", dates[1]);
  console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
}
const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [about, setAbout] = useState(false);
  const [policies, setPolicies] = useState(false);
  const [maps, setMaps] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout className="layout">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">
          <Image width={200} height={50} src={logo} />
        </Menu.Item>

        <Menu.Item key="1">
          <a href="http://hotelseetal.in/">Home</a>
        </Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Policies</Menu.Item>
        <Menu.Item key="4">Map</Menu.Item>
        <Menu.Item key="5">Rooms</Menu.Item>
        <Menu.Item key="6">Hotel Sheetal in bbsr</Menu.Item>
        <Menu.Item key="7">
          <Link to="/" aria-expanded="true">
            Rooms
          </Link>
        </Menu.Item>
        <Menu.Item key="8">INR</Menu.Item>
        <Menu.Item key="9">Log In</Menu.Item>
      </Menu>
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
              }}
            >
              <RangePicker
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
              <Image width="1500px" height="500px" src={sheetal} />
            </div>
          </Space>
          <div className="site-layout-content">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Card
                style={{
                  width: "70%",
                  justifyContent: "center",
                  borderRadius: "5px",
                  marginLeft: "90px",
                  boxShadow: "0 0 4px rgb(0 0 0 / 20%)",
                  borderRadius: "5px",
                }}
              >
                <h3
                  style={{
                    paddingTop: "20px",
                    color: "#000",
                    textTransform: "capitalize",
                    fontWeight: "400",
                    textAlign: "center",
                  }}
                >
                  search result
                </h3>
                <div
                  style={{
                    width: "150px",
                    height: "150px",
                    margin: "0 auto",
                    borderRadius: "50%",
                    backgroundColor: "#f5ab35",
                    position: "relative",
                  }}
                >
                  <i
                    class="fa fa-search"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      color: "#fff",
                      fontSize: "50px",
                    }}
                    aria-hidden="true"
                  ></i>
                </div>
                <p style={{ fontSize: "130%", textAlign: "center" }}>
                  No packages found in these dates !
                </p>
                <p style={{ fontSize: "100%", textAlign: "center" }}>
                  Please try in other dates and good luck!
                </p>
              </Card>
              <Card
                style={{
                  width: "30%",
                  height: "auto",
                  marginLeft: "5%",
                  paddingLeft: "4%",
                  paddingRight: "4%",
                  borderRadius: "5px",
                  marginLeft: "90px",
                  boxShadow: "0 0 4px rgb(0 0 0 / 20%)",
                  borderRadius: "5px",
                }}
              >
                <h3 style={{ fontSize: "25px", fontWeight: "bold" }}>
                  Booking Summary
                </h3>
                <div style={{ width: "90%" }}>
                  <img
                    src="https://www.pinclipart.com/picdir/big/208-2083300_guest-booking-icon-bed-clipart.png"
                    style={{
                      height: "20%",
                      width: "30%",
                    }}
                  />
                </div>
                <br />
                <p style={{ fontSize: "22px", textAlign: "center" }}>
                  No Package Selected
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Click add package button to add the package
                </p>
                <br />
              </Card>
            </div>
          </div>
        </Content>
      </div>
      {/* /About */}
      <div className="site-card-border-less-wrapper">
        <Card bordered={false} style={{ width: "100%" }}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item
              key="2"
              style={{ width: "300px" }}
              onClick={() => setAbout(!about)}
            >
              About
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{ width: "300px" }}
              onClick={() => setPolicies(!policies)}
            >
              Policies
            </Menu.Item>
            <Menu.Item
              key="4"
              style={{ width: "300px" }}
              onClick={() => setMaps(!maps)}
            >
              Hotel Map
            </Menu.Item>
            <Menu.Item key="5" style={{ width: "300px" }}>
              Review
            </Menu.Item>
          </Menu>
          {about ? (
            <div className="col s12">
              <div classname="row">
                <h2
                  style={{
                    color: "#000",
                    textTransform: "capitalize",
                    textAlign: "left",
                    padding: "2% 2% 0",
                    fontWeight: "600",
                    marginBottom: "1%",
                    outline: "none",
                    fontSize: "24px",
                  }}
                >
                  About Hotel Sheetal Bhubaneswar
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img
                    style={{
                      cursor: "pointer",
                      boxShadow: "none",
                      marginLeft: "10px",
                      padding: "1% 1% 0",
                      border: "1px solid #c9c8c8",
                      width: "500px",
                    }}
                    src="https://d3ki85qs1zca4t.cloudfront.net/bookingEngine/uploads/2028603934196127646seetal1.jpg"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span>
                    <p
                      style={{
                        fontSize: "20px",
                        color: "#555",
                        marginLeft: "27px",
                        marginRight: "10px",
                      }}
                    >
                      The Hotel has 56 luxurious rooms and conference room
                      suitable for conventions, banquets, meetings and weddings,
                      with capacity up to 200 people. Most of them with natural
                      light.
                    </p>
                  </span>
                  <br />
                  <br />
                  <div>
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <li>
                        <p
                          style={{
                            fontSize: "20px",
                            flexDirection: "column",
                          }}
                        >
                          <i className="fa fa-envelope" />{" "}
                          reservation@hotelseetal.net
                        </p>
                      </li>
                      <li>
                        <p
                          style={{
                            fontSize: "20px",
                            flexDirection: "column",
                          }}
                        >
                          <i className="fa fa-address-book" /> 06742541116,
                          06742541116
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <li>
                        <p
                          style={{ fontSize: "20px", flexDirection: "column" }}
                        >
                          <i className="fa fa-plane" /> Biju pattnaik
                          international airport
                          <span>(7km)</span>
                        </p>
                      </li>
                      <li>
                        <p
                          style={{ fontSize: "20px", flexDirection: "column" }}
                        >
                          <i className="fa fa-train" /> Bhubaneswar railway
                          station
                          <span>(7km)</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <li>
                  <p style={{ fontSize: "20px", flexDirection: "column" }}>
                    <i className="fa fa-clock-o" /> Check In :<span>12:00</span>
                  </p>
                </li>
                <li>
                  <p style={{ fontSize: "20px", flexDirection: "column" }}>
                    <i className="fa fa-clock-o" /> Check Out:
                    <span>12:00</span>
                  </p>
                </li>
                <li>
                  <p style={{ fontSize: "20px", flexDirection: "column" }}>
                    <i className=" fa fa-star" /> Ratings:
                    <span>5</span>
                  </p>
                </li>
              </ul>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "",
                }}
              >
                <h3>
                  <i className=" fa fa-camera" />
                  Important Tourist Places :
                </h3>
              </div>

              <br />
              <p>Nandankanan Zoological Park</p>

              <p>Khandagiri Udaygiri Caves</p>
              <p>Lingaraja Temple</p>
              <br />
              <br />
              <h1>
                <i className=" fa fa-camera" />
                Hotel Ammenities
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "5%",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "0.9rem", fontWeight: "400" }}>
                      <span>
                        <i className=" fa fa-camera" />
                        F&B
                      </span>
                      :
                    </p>
                    <span style={{ fontSize: "0.9rem" }}> Restaurant</span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "5%",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "0.9rem", fontWeight: "400" }}>
                      <span>
                        <i className=" fa fa-camera" />
                        Facility
                      </span>
                      :
                    </p>
                    <span style={{ fontSize: "0.9rem" }}>
                      Parking,24-hour security,Lobby,Parking,24-hour
                      security,Lobby,Parking
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "5%",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "0.9rem", fontWeight: "400" }}>
                      <span>
                        <i className=" fa fa-camera" />
                        F&B
                      </span>
                      :
                    </p>
                    <span style={{ fontSize: "0.9rem" }}>
                      {" "}
                      24-hour front desk, Front desk, Front desk
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "5%",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "0.9rem", fontWeight: "400" }}>
                      <span>
                        <i className=" fa fa-camera" />
                        House Keeping
                      </span>
                      :
                    </p>
                    <span style={{ fontSize: "0.9rem" }}>
                      Sanitizers, Housekeeping - daily, Sanitizers, Housekeeping
                      - daily
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: "0.9rem", fontWeight: "400" }}>
                  <span>
                    <i className=" fa fa-camera" />
                    Room Facility
                  </span>
                  :
                </p>

                <span style={{ fontSize: "0.9rem" }}>
                  Air conditioning, Air conditioning
                </span>
              </div>
              <br />
              <br />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: "0.9rem", fontWeight: "400" }}>
                  <span>
                    <i className=" fa fa-camera" />
                    FeedBack Link
                  </span>
                  :
                </p>

                <span style={{ fontSize: "0.9rem" }}>
                  Air conditioning, Air conditioning
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
          {policies ? (
            <div className="row">
              <div classname="row">
                <div classname="col">
                  <h2
                    style={{
                      color: "#000",
                      textTransform: "capitalize",
                      textAlign: "left",
                      padding: "2% 2% 0",
                      fontWeight: "600",
                      marginBottom: "1%",
                      outline: "none",
                      fontSize: "24px",
                    }}
                  >
                    Policies
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "66.3333333333%",
                      fontSize: "26px",
                    }}
                  >
                    <p>
                      <b>Cancellation Policy</b>
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "77.6666666667%",
                    }}
                  >
                    <ul style={{ marginTop: "1%" }}>
                      <li>
                        Before 30 days 10% of the Total billing Amount Retained
                        with us.
                      </li>
                      <li>
                        Before 30 days 10% of the Total billing Amount Retained
                        with us.
                      </li>
                      <li>
                        Before 30 days 10% of the Total billing Amount Retained
                        with us.
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "66.3333333333%",
                      fontSize: "26px",
                    }}
                  >
                    <p>
                      <b>Child Policy</b>
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "77.6666666667%",
                    }}
                  >
                    <p>
                      <b>
                        Child up to 5 years can share with parents (without
                        mattress & food).Above 5 years we treat as extra person
                        and on chargeable basis.(With extra bed and food).
                      </b>
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "66.3333333333%",
                    fontSize: "26px",
                  }}
                >
                  <p>
                    <b>Privacy Policy</b>
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "77.6666666667%",
                  }}
                >
                  <p>
                    <b>Special Note:</b>
                  </p>
                  <p>
                    · It is mandatory to present any valid ID (Passport /
                    Election ID / Driving license) at the time of check in. (As
                    per the notification of Government of India
                  </p>
                  <p>
                    · Check in & Check out time is 12:00 noon. Early arrival and
                    late departure is subject to Availability and as per hotel
                    policy. (As per the notification of Government of India
                  </p>
                  <br />
                  <p>
                    <b>Guarantee Policy:</b>
                  </p>
                  <p>
                    · It is mandatory to present any valid ID (Passport /
                    Election ID / Driving license) at the time of check in. (As
                    per the notification of Government of India
                  </p>
                  <p>
                    · Check in & Check out time is 12:00 noon. Early arrival and
                    late departure is subject to Availability and as per hotel
                    policy. (As per the notification of Government of India
                  </p>
                  <br />
                  <p>
                    <b>Hotel Policy:</b>
                  </p>
                  <p>
                    · It is mandatory to present any valid ID (Passport /
                    Election ID / Driving license) at the time of check in. (As
                    per the notification of Government of India
                  </p>
                  <p>
                    · Check in & Check out time is 12:00 noon. Early arrival and
                    late departure is subject to Availability and as per hotel
                    policy. (As per the notification of Government of India
                  </p>
                  <p>
                    · If cancelled within 72 hours from the date of arrival /
                    no-show entire amount for stay will be charged as retention
                    charge. (As per the notification of Government of India
                  </p>
                  <p>
                    · If cancelled within 04 – 07 days of the date of arrival:
                    100% of the 1st night stay will be charged as retention
                    charge.
                  </p>
                  <br />
                  <p>
                    <b>Changes Policy:</b>
                  </p>
                  <p>
                    Any changes to the booking must be made before arrival at
                    the hotel. Otherwise The NO REFUND policy will be
                    applicable.
                  </p>
                  <ul style={{ marginTop: "1%" }}>
                    <li>
                      Cancellation policy may vary during peak-season in which
                      case refund will be based on the hotel policy. Peak season
                      cancellation must be done at least 15 days prior to
                      arrival date to qualify for future use
                    </li>
                    <li>
                      Kindly arrange to send us the credit card holder's
                      residence address & telephone number for Record purpose;
                      which has been provided for guarantee of this booking with
                      us.
                    </li>
                    <li>
                      Before 30 days 10% of the Total billing Amount Retained
                      with us.
                    </li>
                  </ul>
                  <br />
                  <p>
                    <b>Credit Card Pre-Authorization Policy:</b>
                  </p>
                  <p>
                    · It is mandatory to present any valid ID (Passport /
                    Election ID / Driving license) at the time of check in. (As
                    per the notification of Government of India
                  </p>
                  <p>
                    The amount that is taken is blocked from Credit limit. It is
                    not processed as sale and is released when the guest settles
                    the bill. The transaction is complete only when you sign the
                    charge slip at the time of settlement. You may get a SMS
                    from your bank informing you about the debit however, be
                    rest assured that it is only blocking and not sale.
                  </p>
                  <p> </p>
                  <p>
                    · If cancelled within 04 – 07 days of the date of arrival:
                    100% of the 1st night stay will be charged as retention
                    charge.
                  </p>
                  <p> </p>
                  · PAN number is compulsory, in case where Bill is exceeding
                  Rs.25, 000/-in case of individual & in case of any Travel
                  Agent or party makes net payment after deducting TDS &
                  commission from the gross bill. Booking request on the travel
                  agent’s letter head is compulsory in case of any net payment
                  made after deducting commission or in case of Direct Payment
                  made by Guest after check-out of the guest
                  <br />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {maps ? <SimpleMap /> : ""}
        </Card>
      </div>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
      <Modal
        title="Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="row">
          <h3
            style={{ textAlign: "center", margin: "15px", fontWeight: "bold" }}
          >
            EXECUTIVE SINGLE ROOM
          </h3>
          <div style={{ padding: "1% 2%" }}>
            <b>Description :</b>
            <div>
              <span
                style={{
                  color: "rgb(137, 137, 137)",
                  fontFamily: "Lato",
                  fontSize: "15.001px",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                Complimentary Buffet Breakfast(Not Applicable for check in Date)
                Non alcoholic welcome drink on arrival&nbsp; Complimentary Wi-Fi
                in the rooms 32Inche LED TV&nbsp;Cable Connected in every room.
                One way pick up or drop from railway station or airport. Well
                stocked mini bar in every room 24hrs
              </span>
              <br />
            </div>
            <ul>
              <li>
                Complimentary Buffet Breakfast(Not Applicable for check in Date)
                <br />
              </li>
              <li>
                Non alcoholic welcome drink on arrival
                <br />
              </li>
              <li>
                Complimentary Wi-Fi in the rooms
                <br />
              </li>
              <li>
                Complimentary Buffet Breakfast(Not Applicable for check in Date)
                <br />
              </li>
              <li>
                32Inche LED TV Cable Connected in every room.
                <br />
              </li>
              <li>
                Complimentary Buffet Breakfast(Not Applicable for check in Date)
                <br />
              </li>
              <li>
                32Inche LED TV Cable Connected in every room.
                <br />
              </li>
              <li>
                32Inche LED TV Cable Connected in every room.
                <br />
              </li>
              <li>
                32Inche LED TV Cable Connected in every room.
                <br />
              </li>
              <li>
                32Inche LED TV Cable Connected in every room.
                <br />
              </li>
            </ul>
          </div>
          <h5 style={{ padding: "2%" }}>
            <b>Room Ammenities : </b>
          </h5>
          <div className="row">
            <div className="col m4" style={{ width: "33.3333333333%" }}>
              <li>24-hour front desk</li>
            </div>
            <div className="col m4" style={{ width: "33.3333333333%" }}>
              <li>24-hour front desk</li>
            </div>{" "}
            <div className="col m4" style={{ width: "33.3333333333%" }}>
              <li>24-hour front desk</li>
            </div>{" "}
          </div>
        </div>
      </Modal>
    </Layout>
  );
};
export default Home;
