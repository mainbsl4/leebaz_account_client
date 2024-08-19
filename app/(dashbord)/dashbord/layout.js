"use client";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { useState } from "react";

const { Header, Sider, Content } = Layout;

const getItem = (label, key, icon, children, link) => ({
  key,
  icon,
  children,
  label: link ? <Link href={link}>{label}</Link> : label,
});

const items = [
  // getItem("Option 1", "1", <UserOutlined />, null, "/option1"),
  getItem("Users", "sub1", <UserOutlined />, [
    getItem("Users", "3", null, null, "/dashbord/Users/users"),
  ]),
  getItem("Income", "2", <UserOutlined />, null, "/dashbord/income"),
  getItem("Enpense", "10", <UserOutlined />, null, "/dashbord/enpense"),
  getItem("Account Payabale/Receivable", "11", <UserOutlined />, null, "/dashbord/accountpayabalereceivable"),
  
  getItem("Report", "sub2", <UserOutlined />, [
    getItem("Team 1", "6", null, null, "/team/team1"),
    getItem("Team 2", "8", null, null, "/team/team2"),
  ]),
  getItem("Files", "9", <UserOutlined />, null, "/files"),
];

// const items = [
//   getItem("Option 1", "1", <UserOutlined />),
//   getItem("Option 2", "2", <UserOutlined />),
//   getItem("User", "sub1", <UserOutlined />, [
//     getItem("Tom", "3"),
//     getItem("Bill", "4"),
//     getItem("Alex", "5"),
//   ]),
//   getItem("Team", "sub2", <UserOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <UserOutlined />),
// ];

export default function layout({ children }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Layout className="h-[100vh]">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflowY: "scroll",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
