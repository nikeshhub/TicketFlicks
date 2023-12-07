import React, { useState } from "react";
import { Layout, Menu, Button, Drawer, Row, Col } from "antd";
import {
  HomeOutlined,
  PlayCircleOutlined,
  DesktopOutlined,
  MenuOutlined,
  VideoCameraAddOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout className="layout">
      <Header
        style={{
          background: "#001529",
          padding: "0 2.5rem",
          position: "sticky",
          zIndex: 1,
          maxWidth: "100%",
        }}
      >
        <Row>
          <Col xs={20} sm={20} md={4}>
            <NavLink to="/">
              <div
                className="logo"
                style={{
                  color: "white",
                  //   padding: "20 30px",
                  paddingTop: "10px",
                  maxWidth: "150px",
                }}
              >
                <img src="../logo.png" width={100} alt="Logo" />
              </div>
            </NavLink>
          </Col>
          <Col xs={0} sm={0} md={20}>
            <div
              className="nav-buttons"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                style={{ flexGrow: 1 }}
              >
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<PlayCircleOutlined />}>
                  <NavLink to="/movies">Movies</NavLink>
                </Menu.Item>
                <Menu.Item key="3" icon={<SoundOutlined />}>
                  <NavLink to="/concerts">Concert</NavLink>
                </Menu.Item>
                <Menu.Item key="4" icon={<VideoCameraAddOutlined />}>
                  <NavLink to="/theatres">Theatre events</NavLink>
                </Menu.Item>
              </Menu>

              <Button
                style={{ color: "white", marginLeft: "10px" }}
                type="link"
              >
                Login
              </Button>
              <Button
                style={{ color: "white", marginLeft: "10px" }}
                type="primary"
                danger
              >
                Register
              </Button>
            </div>
          </Col>
          <Col xs={4} sm={4} md={0}>
            <Button
              style={{
                backgroundColor: "#05b4f7",
                color: "white",
                border: "none",
              }}
              onClick={showDrawer}
            >
              <MenuOutlined />
            </Button>
          </Col>
        </Row>
        <Drawer
          title="Menu"
          placement="right"
          onClick={onClose}
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="vertical" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              icon={<HomeOutlined />}
              style={{ background: "transparent !important" }}
            >
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<PlayCircleOutlined />}
              className="nav-item"
            >
              <NavLink to="/movies"> Movies </NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<SoundOutlined />} className="nav-item">
              <NavLink to="/concerts">Concerts </NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraAddOutlined />} className="nav-item">
              <NavLink to="/theatres">Theatre Events </NavLink>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
