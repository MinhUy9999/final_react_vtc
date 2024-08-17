import { http } from './config';

export const quanLyUser = {
  layDanhSachNguoiDung: () => {
    return http.get('/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01');
  },
  dangNhap: (data) => {
    return http.post('/QuanLyNguoiDung/DangNhap',data)
  },
  dangKy: (data) => {
    return http.post('/QuanLyNguoiDung/DangKy',data)
  }
};
