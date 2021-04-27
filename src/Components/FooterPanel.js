import React from "react";
import SimpleMap from "./Maps";
import { Layout, Menu, Card } from "antd";

const FooterPanel = (props) => {
  const { display, setDisplay } = props;
  return (
    <div className="site-card-border-less-wrapper">
      <Card bordered={false} style={{ width: "100%" }}>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item
            key="2"
            style={{ width: "300px" }}
            onClick={() => setDisplay("about")}
          >
            About
          </Menu.Item>
          <Menu.Item
            key="3"
            style={{ width: "300px" }}
            onClick={() => setDisplay("policy")}
          >
            Policies
          </Menu.Item>
          <Menu.Item
            key="4"
            style={{ width: "300px" }}
            onClick={() => setDisplay("map")}
          >
            Hotel Map
          </Menu.Item>
          <Menu.Item key="5" style={{ width: "300px" }}>
            Review
          </Menu.Item>
        </Menu>
        {display === "about" && (
          <div id="about" className="col s12">
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
                      <p style={{ fontSize: "20px", flexDirection: "column" }}>
                        <i className="fa fa-plane" /> Biju pattnaik
                        international airport
                        <span>(7km)</span>
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: "20px", flexDirection: "column" }}>
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
                    Sanitizers, Housekeeping - daily, Sanitizers, Housekeeping -
                    daily
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
        )}
        {display === "policy" && (
          <div id="policies" className="row">
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
                  · It is mandatory to present any valid ID (Passport / Election
                  ID / Driving license) at the time of check in. (As per the
                  notification of Government of India
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
                  · It is mandatory to present any valid ID (Passport / Election
                  ID / Driving license) at the time of check in. (As per the
                  notification of Government of India
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
                  · It is mandatory to present any valid ID (Passport / Election
                  ID / Driving license) at the time of check in. (As per the
                  notification of Government of India
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
                  Any changes to the booking must be made before arrival at the
                  hotel. Otherwise The NO REFUND policy will be applicable.
                </p>
                <ul style={{ marginTop: "1%" }}>
                  <li>
                    Cancellation policy may vary during peak-season in which
                    case refund will be based on the hotel policy. Peak season
                    cancellation must be done at least 15 days prior to arrival
                    date to qualify for future use
                  </li>
                  <li>
                    Kindly arrange to send us the credit card holder's residence
                    address & telephone number for Record purpose; which has
                    been provided for guarantee of this booking with us.
                  </li>
                  <li>
                    Before 30 days 10% of the Total billing Amount Retained with
                    us.
                  </li>
                </ul>
                <br />
                <p>
                  <b>Credit Card Pre-Authorization Policy:</b>
                </p>
                <p>
                  · It is mandatory to present any valid ID (Passport / Election
                  ID / Driving license) at the time of check in. (As per the
                  notification of Government of India
                </p>
                <p>
                  The amount that is taken is blocked from Credit limit. It is
                  not processed as sale and is released when the guest settles
                  the bill. The transaction is complete only when you sign the
                  charge slip at the time of settlement. You may get a SMS from
                  your bank informing you about the debit however, be rest
                  assured that it is only blocking and not sale.
                </p>
                <p> </p>
                <p>
                  · If cancelled within 04 – 07 days of the date of arrival:
                  100% of the 1st night stay will be charged as retention
                  charge.
                </p>
                <p> </p>
                · PAN number is compulsory, in case where Bill is exceeding
                Rs.25, 000/-in case of individual & in case of any Travel Agent
                or party makes net payment after deducting TDS & commission from
                the gross bill. Booking request on the travel agent’s letter
                head is compulsory in case of any net payment made after
                deducting commission or in case of Direct Payment made by Guest
                after check-out of the guest
                <br />
              </div>
            </div>
          </div>
        )}
        {display === "map" && (
          <div id="map">
            <SimpleMap />
          </div>
        )}
      </Card>
    </div>
  );
};
export default FooterPanel;
