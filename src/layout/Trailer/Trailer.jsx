import React, { useEffect, useState } from 'react';
import './Trailer.scss';
import { Carousel, Modal } from 'antd';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';
import moment from 'moment';
import ReactPlayer from 'react-player';

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa-solid fa-caret-left"></i>
    </div>
  );
};
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa-solid fa-caret-right"></i>
    </div>
  );
};

const Trailer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [arrTrailer, setArrTrailer] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  useEffect(() => {
    quanLyPhimServ
      .layDanhSachPhim()
      .then((res) => {
        // console.log(res);
        setArrTrailer(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const openModal = (src) => {
    setVideoSrc(src);
    setModalVisible(true);
  };

  const closeModal = () => {
    setVideoSrc('');
    setModalVisible(false);
  };

  return (
    <div className="trailer">
      <div className="containersss">
        <div className="title py-10">
          <hr className="py-5" />
          <h2 className="font-bold text-xl">Trailers</h2>
        </div>
        <div className="trailer_content">
          <div className="trailer_bg">
            <div className="trailer_box">
              <div className="carousel_top">
                <Carousel
                  effect="fade"
                  prevArrow={<PrevArrow />}
                  nextArrow={<NextArrow />}
                  arrows={true}
                  dots={false}
                >
                  {arrTrailer.map((item, index) => {
                    return (
                      <div key={index} className="w-full h-[450px] relative">
                        <div className="w-full relative flex justify-between">
                          <div className="trailer_overlay"></div>
                          <div className="flex justify-between">
                            <div className="absolute trailer_content w-[500px] ">
                              <h2 className="text-xl font-bold uppercase">
                                {item.tenPhim}
                              </h2>
                              <span className="font-medium">
                                U/A <span>&bull;</span>
                                <span>
                                  {moment(item.ngayKhoiChieu).format(
                                    'hh-mm - MMMM Do YYYY'
                                  )}
                                </span>
                                <span>&bull;</span>
                                <span>VietNam &bull; Ho Chi Minh City</span>
                                <br></br>
                                <span className="leading-3">- {item.moTa}</span>
                              </span>
                            </div>
                            <div className="absolute right-[310px] top-[180px]">
                              <div className="bg-transparent border-white border-2 py-6 px-7 rounded-full tl_button">
                                <button
                                  className="play_button"
                                  onClick={() => openModal(item.trailer)}
                                >
                                  <i
                                    className="fa-solid fa-play"
                                    style={{ color: 'white', fontSize: '24px' }}
                                  ></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end w-[700px] h-[450px] ">
                            <img
                              className="w-full h-[450px] object-center "
                              src={item.hinhAnh}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        title="Trailer"
        visible={modalVisible}
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
          playing={modalVisible}
          onEnded={closeModal}
        />
      </Modal>
    </div>
  );
};

export default Trailer;
