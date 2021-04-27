import React from "react";
const Footer = (props) => {
  return (
    <Footer style={{ textAlign: "center", color: "black" }}>
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
          We Accept payment here
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          Follow us
        </div>
      </div>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  );
};
export default Footer;
