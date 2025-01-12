import React, { useContext, useEffect } from 'react'
import InputText from '../../components/Input/InputText/InputText';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { quanLyUser } from '../../services/quanLyUser';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AlertContext } from '../../App';
import { path } from '../../common/path';
const SignupPage = () => {
  // const resetForm = useFormik()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { handleAlert } = useContext(AlertContext);
  const { handleBlur, handleChange, handleSubmit, values, errors, touched, resetForm} =
  useFormik({
    initialValues: {
      taiKhoan: '',
      email: '',
      matKhau: '',
      hoTen: '',
      soDt: '',
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      resetForm({values:''})  // Clear the form
      
      // khi sử dụng async await luôn có một try catch bọc lại để bắt các vấn đề về lỗi
      try {
        const res = await quanLyUser.dangKy(values);
        console.log(res);
        handleAlert('success', 'Đăng ký thành công');
        navigate( path.loginRegister);
        saveLocalStorage('userData', res.data.content);
        dispatch(handleGetValue(res.data.content));
        
      } catch (error) {
        console.log(error);
        handleAlert('error', error.response.data.content);
      }
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required('Vui lòng không bỏ trống'),
      email: Yup.string().email("Vui lòng nhập email").required("Vui lòng nhập email"),
      matKhau: Yup.string().required('Vui lòng không bỏ trống'),
      hoTen: Yup.string().required("Vui lòng nhập họ và tên").matches(
        /^[a-zA-Z\s'\-ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýĂăĐđĨĩŨũƠơƯưẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỲỳỴỵỶỷỸỹ]+$/g,
        "Vui lòng nhập họ tên là chữ"
      ),
      soDt: Yup.string()
      .required("Vui lòng không bỏ trống")
      .matches(
        /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
        "Đây không phải số điện thoại"
      ),
    }),
  });

  return (
    <div className="formContainer signUp">
    <form onSubmit={handleSubmit}  >
      <h1>Create Account</h1>
      <div className="formIcon">
        <a>
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a>
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a>
          <i className="fa-brands fa-google-plus-g"></i>
        </a>
        <a>
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a>
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <span>or use your email for registeration</span>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>
  <div>
    <InputText
      label="Tài khoản"
      name="taiKhoan"
      handleChange={handleChange}
      handleBlur={handleBlur}
      error={errors.taiKhoan}
      touched={touched.taiKhoan}
      placeholder="Vui lòng nhập tài khoản"
      value={values.taiKhoan}
      type='taiKhoan'
    />
  </div>
  <div>
    <InputText
      label="Email"
      name="email"
      handleChange={handleChange}
      handleBlur={handleBlur}
      error={errors.email}
      touched={touched.email}
      placeholder="Vui lòng nhập email"
      value={values.email}
      type="email"
    />
  </div>
  </div>
  <div className='w-full'>
    <InputText
      label="Mật khẩu"
      name="matKhau"
      handleChange={handleChange}
      handleBlur={handleBlur}
      error={errors.matKhau}
      touched={touched.matKhau}
      placeholder="Vui lòng nhập mật khẩu"
      value={values.matKhau}
      type="password"
    />
  </div>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>
  <div>
    <InputText
      label="Số điện thoại"
      name="soDt"
      handleChange={handleChange}
      handleBlur={handleBlur}
      error={errors.soDt}
      touched={touched.soDt}
      placeholder="Vui lòng nhập số điện thoại"
      Value={values.soDt}
      type='soDt'
    />
    
  </div>
  <div>
    <InputText
      label="Họ và tên"
      name="hoTen"
      handleChange={handleChange}
      handleBlur={handleBlur}
      error={errors.hoTen}
      touched={touched.hoTen}
      placeholder="Vui lòng nhập họ và tên"
      value={values.hoTen}
      type='hoTen'
    />
  </div>
</div>

      <button className='btn'  type='submit' > Sign Up </button>
    </form>
  </div>
  )
}

export default SignupPage


