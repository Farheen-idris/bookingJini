import React from "react";
import { Card } from "antd";

const ListItem = (props) => {
  const { data, setIsModalVisible } = props;
  return (
    <div className="site-layout-content">
      {data.map((item, i) => (
        <Card
          id={i}
          style={{
            boxShadow: "0 0 4px rgb(0 0 0 / 20%)",
            borderRadius: "5px",
            width: "70%",
            marginLeft: "60px",
            marginTop: "15px",
          }}
        >
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "20px",

              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "33.3333333333%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  marginTop: "10%",
                }}
              >
                <img
                  width="320px"
                  height="320px"
                  src="https://d3ki85qs1zca4t.cloudfront.net/bookingEngine/uploads/17702131351308004063Executive-Room-1-1200x796.jpg"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "66.6666666667%",
              }}
            >
              <div
                style={{
                  marginTop: "6%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "33.6666666667%",
                  }}
                >
                  <h2
                    style={{
                      cursor: "pointer",
                      color: "#000",
                      textTransform: "capitalize",
                      fontWeight: "400",
                      textAlign: "left",
                      marginBottom: "3%",
                    }}
                    onClick={() => setIsModalVisible(true)}
                  >
                    {item.roomType}
                  </h2>
                  <div>
                    <p>
                      Max Room capacity:
                      {item.capacity}
                      <i className="fa fa-male" aria-hidden="true"></i>
                      <i className="fa fa-child" />
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: "5%",
                    }}
                  >
                    <ul>
                      <li>24-hour front desk</li>
                      <li>
                        <i className="fa fa-lock" />
                        24-hour security
                      </li>
                      <li>
                        <i className="fa fa-car" />
                        Parking
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col s12 m4"
                  style={{
                    backgroundColor: "rgb(245, 245, 245)",
                    padding: "2%",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    width: "66.6666666667%",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <span>
                      <p style={{ color: "#4caf50", fontWeight: "400" }}>
                        <span>You Save</span>
                        <i className="fa fa-inr" />
                        4500
                        <span
                          style={{
                            display: "inline-block",
                            width: "auto",
                            height: "16px",
                            backgroundColor: "#eb2026",
                            borderRadius: "1px 2px 2px 1px",
                            borderLeft: "1px solid #eb2026",
                            marginLeft: "10px",
                            position: "relative",
                            color: "#fff",
                            fontWeight: "300",
                            fontFamily: "Source Sans Pro,sans-serif",
                            fontSize: "55%",
                            lineHeight: "16px",
                            padding: "0 4px",
                            top: "-3px",
                          }}
                        >
                          100 %
                        </span>
                      </p>
                      <span>
                        <p>
                          <strike>
                            <i className="fa fa-inr" />
                            4500
                          </strike>
                        </p>
                      </span>
                      <p
                        style={{
                          color: "#000",
                          fontWeight: "400",
                          fontSize: "120%",
                        }}
                      >
                        <span>From</span>
                        <i className="fa fa-inr" />
                        4500
                      </p>
                      <p style={{ color: "#000" }}>per room per night</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "20px",
            }}
          >
            <button
              style={{
                backgroundColor: "red",
                fontWeight: "400",
                color: "white",
                float: "right",
              }}
            >
              Available
            </button>
          </div>
          <hr />
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
                width: "33.3333333333%",
              }}
            >
              <ul>
                <li>Room Only</li>
              </ul>{" "}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "33.3333333333%",
                border: "1px",
                borderStyle: "dashed",
              }}
            >
              <h1>Rooms|Guest</h1>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "65%",
                  position: "relative",
                  top: "-5px",
                  color: "#f5ab35",
                  fontWeight: "500",
                }}
              >
                1 Room(s) 2 Adults, 0 Kids
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "16.6333333333%",
              }}
            >
              <ul>
                <li>
                  <span>
                    <strike>
                      <i className="fa fa-inr" /> 2850
                    </strike>
                  </span>
                  <br />
                  <i className="fa fa-inr" /> 2000
                </li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "16.6333333333%",
              }}
            >
              <ul>
                <li style={{ marginLeft: "10%" }}>
                  <button
                    style={{
                      backgroundColor: "#f5ab35",
                      width: "auto",
                      margin: "0 auto",
                      backgroundPosition: "50%",
                    }}
                  >
                    Add Rooms
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <hr />
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
                width: "33.3333333333%",
              }}
            >
              <ul>
                <li>Room Only</li>
              </ul>{" "}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "33.3333333333%",
                border: "1px",
                borderStyle: "dashed",
              }}
            >
              <h1>Rooms|Guest</h1>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "65%",
                  position: "relative",
                  top: "-5px",
                  color: "#f5ab35",
                  fontWeight: "500",
                }}
              >
                1 Room(s) 2 Adults, 0 Kids
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "16.6333333333%",
              }}
            >
              <ul>
                <li>
                  <span>
                    <strike>
                      <i className="fa fa-inr" /> 2850
                    </strike>
                  </span>
                  <br />
                  <i className="fa fa-inr" /> 2000
                </li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "16.6333333333%",
              }}
            >
              <ul>
                <li style={{ marginLeft: "10%" }}>
                  <button
                    style={{
                      backgroundColor: "#f5ab35",
                      width: "auto",
                      margin: "0 auto",
                      backgroundPosition: "50%",
                    }}
                  >
                    Add Rooms
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      ))}

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
  );
};

export default ListItem;
