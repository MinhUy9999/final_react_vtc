import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './DetailPage.scss';
import { path } from '../../common/path';
import { Collapse, Divider, Modal, Rate, theme } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleTurnOffLoading,
  handleTurnOnLoading,
} from '../../redux/slice/loadingSlice';
import Loading from '../../components/Loading/Loading';
import { quanLyRapServ } from '../../services/quanLyRapServ';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';

const DetailPage = () => {
  const [arrMovieDetail, setArrMovieDetail] = useState([]);
  const [arrMovie, setArrMovie] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.loadingSlice.isLoading);
  const params = useParams();
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(handleTurnOnLoading());
    quanLyRapServ
      .layThongTinLichChieu(params.maPhim)
      .then((res) => {
        setTimeout(() => {
          setArrMovieDetail(res.data.content);
          dispatch(handleTurnOffLoading());
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        dispatch(handleTurnOffLoading());
      });
    quanLyPhimServ
      .layDanhSachPhim()
      .then((res) => {
        setArrMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  const openModal = (src) => {
    setVideoSrc(src);
    setModalVisible(true);
  };

  const closeModal = () => {
    setVideoSrc('');
    setModalVisible(false);
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleMovingToBookingPage = (theater) => {
    navigate('/booking');
  };
  return (
    <div>
      {isLoading && <Loading />}
      <div className="movie_detail">
        <div
          className="detail_banner"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(32, 32, 53) calc(-510px + 50vw), rgba(32, 32, 53, 0.84) 50%, rgba(32, 32, 53, 0.84) 100%), url(${arrMovieDetail.hinhAnh})`,
          }}
        >
          <div className="proper_screen relative">
            <div className="line_crumb"></div>
            <div className="movie_detail_slide">
              <div className="containerssss">
                <div className="flex flex-col flex-wrap">
                  <div>
                    <div className="detail_food block mb-6">
                      <ul className="flex items-center">
                        <li className="slider_back text-xs mr-8 ">
                          <Link
                            to={path.homepage}
                            className="hover:text-[#FFCB05]"
                          >
                            <span className="mr-3">
                              <i className="fa-solid fa-arrow-left"></i>
                            </span>
                            BACK
                          </Link>
                        </li>
                        <li className="slider_bread slider_bread_detail text-xs mr-10">
                          CHOOSE CINEMA
                        </li>
                        <li className="slider_bread text-xs mr-10">
                          SELECT SEATS
                        </li>
                        <li className="slider_bread text-xs mr-10">
                          GRAB FOOD
                        </li>
                        <li className="text-xs">PAYMENT</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/4">
                      <div className="movie_trailer cursor-pointer">
                        <img src={arrMovieDetail.hinhAnh} alt="movie" />
                        <div className="slider_video_icons">
                          <button
                            className="border-white border-2 py-6 px-7 rounded-full tl_button"
                            onClick={() => openModal(arrMovieDetail.trailer)}
                          >
                            <i
                              className="fa-solid fa-play"
                              style={{ color: 'white', fontSize: '24px' }}
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="movie_detail">
                        <div className="slider_title">
                          <h1 className="uppercase text-white font-bold text-[27px] leading-3 mb-4">
                            {arrMovieDetail.tenPhim}
                          </h1>
                        </div>
                        <p className="flex text-white mb-3 text-xs">
                          <span className="font-medium">
                            U/A &nbsp; &nbsp;<span>&bull;</span>
                            <span>
                              &nbsp;
                              {moment(arrMovieDetail.ngayKhoiChieu).format(
                                'hh-mm - MMMM Do YYYY'
                              )}
                              &nbsp;
                            </span>
                            <span> &nbsp;&bull; &nbsp;</span>
                            <span>
                              VietNam &nbsp; &bull; &nbsp; Ho Chi Minh City
                            </span>
                          </span>
                        </p>
                        <p className="text-white mb-3 text-xs w-[1000px] leading-6">
                          {arrMovieDetail.moTa}
                        </p>
                        <div className="movie_standard flex mb-6">
                          <ul>
                            <li>
                              <img
                                src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_brand/insignia_RTo6imKw.png"
                                width="50"
                              />
                            </li>
                            <li>
                              <img
                                src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_brand/4dx_7BQJDW1C.png"
                                width="50"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="slider_detail_rate">
                          <span className="font-medium text-white">
                            Đánh giá: <br />
                          </span>
                          {arrMovieDetail && arrMovieDetail.danhGia && (
                            <Rate
                              className="custom_rate"
                              allowHalf
                              disabled
                              value={arrMovieDetail.danhGia / 2}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f1f1f1]">
          <div className="containersss py-5">
            <p className="font-bold text-center py-5 text-2xl">
              Lịch chiếu phim
            </p>
            {arrMovieDetail &&
            arrMovieDetail.heThongRapChieu &&
            arrMovieDetail.heThongRapChieu.length > 0 ? (
              <Collapse
                size="large"
                bordered={false}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                style={{
                  background: token.colorBgContainer,
                }}
              >
                {arrMovieDetail.heThongRapChieu.map((heThongRap, index) => (
                  <Collapse.Panel
                    header={heThongRap.tenHeThongRap}
                    key={index}
                    style={panelStyle}
                  >
                    {heThongRap.cumRapChieu.map((phim, index) => (
                      <div key={index}>
                        <Divider orientation="left">
                          {phim.tenCumRap} - {phim.diaChi}
                        </Divider>
                        <div className="flex flex-row items-center gap-3">
                          {phim.lichChieuPhim.map((lichChieu, index) => (
                            <div
                              onClick={() => {
                                handleMovingToBookingPage();
                              }}
                              className="rounded border-2 border-gray-500 px-5 py-3 hover:bg-gray-200"
                              key={index}
                            >
                              <li>
                                {moment(lichChieu.ngayChieuGioChieu).format(
                                  'DD MM YYYY hh-mm A'
                                )}
                              </li>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </Collapse.Panel>
                ))}
              </Collapse>
            ) : (
              <div>
                <p className="font-medium text-center">
                  No schedules available
                </p>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="containerssss mb-28">
            <h3 className="text-xl font-bold py-5">Also Showing</h3>
            <Slider {...settings}>
              {arrMovie
                .filter((movie) => movie.sapChieu)
                .map((movie, index) => (
                  <div key={index} className="relative">
                    <div className="absolute px-1 py-2 bg-[#FFCB05] text-[10px] font-bold">
                      <span>
                        Releasing on&nbsp;
                        {moment(movie.ngayKhoiChieu).format('dddd MMMM Do')}
                      </span>
                    </div>
                    <img
                      src={movie.hinhAnh}
                      alt={`Slide ${index + 1}`}
                      className="w-[300px] h-[400px] object-cover cursor-pointer"
                    />
                    <div className="py-3 mb-4">
                      <h3 className="font-bold text-xs uppercase">
                        {movie.tenPhim}
                      </h3>
                      <span className="font-semibold text-xs">U/A • Movie</span>
                      <br />
                      <span className="font-semibold text-xs">
                        Ho Chi Minh City
                      </span>
                    </div>
                    <button className="py-2 px-6 border rounded bg-[#FFCB05] font-bold text-xs">
                      Book tickets
                    </button>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        title="Trailer"
        open={modalVisible}
        onCancel={closeModal}
        footer={null}
        destroyOnClose={true}
        width={1000}
      >
        <ReactPlayer
          url={videoSrc}
          controls
          width="100%"
          height="500px"
          onEnded={closeModal}
        />
      </Modal>
    </div>
  );
};

export default DetailPage;
