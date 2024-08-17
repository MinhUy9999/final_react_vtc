import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { path } from '../../common/path';
const { Header, Content, Footer, Sider } = Layout;

const arrMenu = [
  {
    key: 'trangChu',
    type: 'group',
    children: [
      {
        label: <Link to={path.homepage}>Trang chủ</Link>,
        icon: <i className="fa-solid fa-house"></i>,
      },
    ],
  },
  {
    key: 'quanLiPhim',
    label: 'Quản lí phim',
    type: 'group',
    children: [
      {
        key: 'themPhim',
        label: <Link to={path.admin.base}>Thêm phim</Link>,
        icon: <i className="fa-solid fa-video"></i>,
      },
      {
        key: 'danhSachPhim',
        label: <Link to={path.admin.quanLyPhim}>Danh sách phim</Link>,
        icon: <i className="fa-solid fa-film"></i>,
      },
    ],
  },
  {
    label: 'Quản lí người dùng',
    type: 'group',
    children: [
      {
        key: 'quanLiNguoiDung',
        label: (
          <Link to={path.admin.danhSachNguoiDung}>Danh sách người dùng</Link>
        ),
        icon: <i className="fa-solid fa-users"></i>,
      },
    ],
  },
];

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('Admin');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (e) => {
    const key = e.key;
    for (const group of arrMenu) {
      for (const item of group.children) {
        if (item.key === key) {
          setSelectedLabel(item.label);
          return;
        }
      }
    }
  };
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={arrMenu}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>{selectedLabel}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
