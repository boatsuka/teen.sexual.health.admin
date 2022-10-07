import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Layout, Menu, Card, Row, Col } from "antd";
import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";

function PreLayout() {
  const { Header, Content, Sider, Footer } = Layout;

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider>
          <Menu theme="light" defaultSelectedKeys={["1"]}>
            <Card
              cover={
                <img
                  size={180}
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              ชื่อผู้ใช้ : admin
            </Card>
            <Menu
              theme="light"
              style={{
                height: "100%",
                borderRight: 0,
              }}
              defaultSelectedKeys={["1"]}
            >
              <Menu.Item key={1}>
                <Link to="/">
                  <HomeOutlined />
                  <span>หน้าหลัก</span>
                </Link>
              </Menu.Item>
              <Menu.Item key={2}>
                <Link to="/">
                  <LogoutOutlined />
                  <span>ออกจากระบบ</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
            }}
          />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            TeenSexualHealth ©2022 Created by Suphaphit Suka version
            {import.meta.env.VITE_APP_VERSION}
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default PreLayout;
