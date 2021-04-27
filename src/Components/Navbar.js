import React, { useState } from "react";
import logo from "../images/hotellogo.png";
import { Link } from "react-router-dom";

import { Layout, Menu, Image } from "antd";
const { SubMenu } = Menu;
const Navbar = (props) => {
  const { display, setDisplay, price, setPrice, loginModal } = props;

  return (
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">
          <Image width={200} height={50} src={logo} />
        </Menu.Item>

        <Menu.Item key="1">
          <a href="http://hotelseetal.in/">Home</a>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => setDisplay("about")}>
          <a href="#about">About</a>
        </Menu.Item>
        <Menu.Item key="3" onClick={() => setDisplay("policy")}>
          <a href="#policies">Policies</a>
        </Menu.Item>
        <Menu.Item key="4" onClick={() => setDisplay("map")}>
          <a href="#map">Map</a>
        </Menu.Item>

        <SubMenu key="5" title="Hotel Sheetal Bhubaneswar">
          <Menu.Item key="setting:1">Hotel Sheetal Bhubaneswar</Menu.Item>
        </SubMenu>
        <Menu.Item key="7">
          <Link to="/packages" aria-expanded="true">
            Packages
          </Link>
        </Menu.Item>

        <SubMenu key="SubMenu" title={price}>
          <Menu.ItemGroup>
            <Menu.Item key="price1" onClick={() => setPrice("USD")}>
              <i className="fa fa-usd" />
              USD
            </Menu.Item>
            <Menu.Item key="price2" onClick={() => setPrice("INR")}>
              <i className="fa fa-inr" />
              INR
            </Menu.Item>
            <Menu.Item key="price3" onClick={() => setPrice("EUR")}>
              <i className="fa fa-eur" />
              EUR
            </Menu.Item>
            <Menu.Item key="price4" onClick={() => setPrice("GDP")}>
              <i className="fa fa-gbp" />
              GBP
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <Menu.Item key="9" onClick={loginModal}>
          Log In
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
