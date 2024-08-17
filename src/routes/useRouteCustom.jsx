import { useRoutes } from 'react-router-dom';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';
import HomePage from '../pages/HomePage/HomePage';
import { path } from '../common/path';
import LoginPage from '../pages/LoginPage/LoginPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import BookingPage from '../pages/BookingPage/BookingPage';
import DemoPage from '../pages/DemoPage/DemoPage';
import LoginRegister from '../pages/LoginRegister/LoginRegister';
import AdminTemplate from '../templates/AdminTemplate/AdminTemplate';
import ThemPhim from '../pages/AdminPage/ThemPhim';
import DanhSachNguoiDung from '../pages/AdminPage/DanhSachNguoiDung';
import QuanLyPhim from '../pages/AdminPage/QuanLyPhim';
import SignUpPage from '../pages/SignupPage/SignupPage';

const useRouteCustom = () => {
  const route = useRoutes([
    {
      path: path.homepage,
      element: <HomeTemplate/>,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: path.detail,
          element: <DetailPage />,
        },
        {
          path: path.booking,
          element: <BookingPage />,
        },
      ],
    },
    {
      path: path.admin.base,
      element: <AdminTemplate />,
      children: [
        {
          index: true,
          element: <ThemPhim />,
        },
        {
          path: path.admin.quanLyPhim,
          element: <QuanLyPhim />,
        },
        {
          path: path.admin.danhSachNguoiDung,
          element: <DanhSachNguoiDung />,
        },
      ],
    },
    {
      path: path.login,
      element: <LoginPage />,
    },
    {
      path: path.signup,
      element: <SignUpPage />,
    },
    {
      path: path.demo,
      element: <DemoPage />,
    },
    {
      path: path.loginRegister,
      element: <LoginRegister />,
    },
    {
      path: '*',
      element: <div>Not found</div>,
    },
  ]);
  return route;
};

export default useRouteCustom;
