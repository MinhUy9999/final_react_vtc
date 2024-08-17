import React, { useState, useEffect } from 'react';
import { Carousel, Modal } from 'antd';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';
import './Banner.scss';

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );
};
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa-solid fa-angle-right"></i>
    </div>
  );
};

const Banner = () => {
  const [arrBanner, setArrBanner] = useState([]);
  const [listTrailer, setListTrailer] = useState([
    'https://www.youtube.com/embed/uqJ9u7GSaYM?si=t79vP5e-enn9uVJ0',
    'https://www.youtube.com/embed/Zw9lINmT-zc?si=vmWfGuVP0T0RqG3r',
    'https://www.youtube.com/embed/Eu9G8nO5-Ug?si=QSwWoRQDKVhABl52',
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  useEffect(() => {
    quanLyPhimServ
      .layDanhSachBanner()
      .then((res) => {
        setArrBanner(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const playTrailer = (trailerUrl) => {
    setSelectedTrailer(trailerUrl);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedTrailer(null);
    setModalVisible(false);
  };
  return (
    <div className="banner_home">
      <Carousel
        autoplay={true}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        arrows={true}
        dots={false}
      >
        {arrBanner.map((item, index) => {
          return (
            <div key={index} className="h-[80vh] item_banner relative">
              <img
                className="w-full h-full object-cover"
                src={item.hinhAnh}
                alt=""
              />
              <button
                className="absolute top-[50%] left-[50%] py-2 px-5 rounded play_button"
                onClick={() => playTrailer(listTrailer[index])}
              >
                <i
                  className="fa-solid fa-play"
                  style={{ color: 'white', fontSize: '24px' }}
                ></i>
              </button>
            </div>
          );
        })}
      </Carousel>
      <Modal
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
        width={800}
      >
        {selectedTrailer && (
          <iframe
            title="Trailer"
            width="100%"
            height="450"
            src={selectedTrailer}
            allowFullScreen
          ></iframe>
        )}
      </Modal>
    </div>
  );
};

export default Banner;
