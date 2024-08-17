import React, { useContext, useEffect, useRef, useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';
import { AlertContext } from '../../App';
import MovieDetailModal from '../../components/MovieDetailModal/MovieDetailModal';
import VideoModal from '../../pages/DemoPage/VideoModal';
import TrailerModal from '../../components/TrailerModal.jsx/TrailerModal';
import { getYouTubeVideoId } from '../../utils/URL';

const ListMovie = ({ id, label }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [animation, setAnimation] = useState('');
  const modalRef = useRef(null); // Tạo một ref để tham chiếu tới phần tử modal

  // Hàm xử lý toggle
  // Trailer modal

  const { handleAlert } = useContext(AlertContext);
  const [movieList, setMovieList] = useState([]);
  const [movieActiveInfo, setMovieActiveInfo] = useState({});
  useEffect(() => {
    quanLyPhimServ
      .layDanhSachPhim()
      .then((res) => {
        setMovieList(res.data.content);
      })
      .catch((error) => {});
  }, []);
  // Thêm sự kiện nghe click vào document
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setAnimation('animate-slide-down');
        setTimeout(() => {
          setIsToggled(false);
        }, 500); // Thời gian đợi tương ứng với duration của animation
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, []);
  const toggle = (data) => {
    if (!isToggled) {
      setIsToggled(true);
      setAnimation('animate-slide-up');
      setMovieActiveInfo(data);
    } else {
      setAnimation('animate-slide-down');
      setTimeout(() => {
        setIsToggled(false);
      }, 500); // Thời gian đợi tương ứng với duration của animation
    }
  };
  const movieData = {
    title: 'MAIDAAN',
    duration: '3h 02m',
    genre: 'Drama, Sports',
    language: 'Hindi',
    releaseDate: 'Apr 10, 2024',
    synopsis:
      'Inspired by the Indian national football team coach and manager...',
    cast: [
      // ... populate with cast data
    ],
    crew: [
      // ... populate with crew data
    ],
  };
  // trailer modal
  //Video modal
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);
  const [videoID, setVideoID] = useState('');

  const openTrailerModal = (url) => {
    setIsTrailerModalOpen(true);
    setVideoID(url);
  };
  const closeTrailerModal = () => setIsTrailerModalOpen(false);
  return (
    <div className="container flex-col" style={{ scrollMarginTop: '30vh' }} id={id}>
      <h2 className="text-2xl font-bold leading-tight text-gray-900 my-8 text-center">
        {label}
      </h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 place-items-center sm:place-items-stretch">
        {movieList.map((movie, index) => {
          // console.log(movie);
          const trailerID = getYouTubeVideoId(movie.trailer);
          return (
            <MovieCard
              key={index}
              data={movie}
              toggle={toggle}
              openTrailerModal={openTrailerModal}
              trailerID={trailerID}
            />
          );
        })}
      </div>
      <MovieDetailModal
        {...movieData}
        modalRef={modalRef}
        isToggled={isToggled}
        animation={animation}
        toggle={toggle}
        movieActiveInfo={movieActiveInfo}
      />
      <TrailerModal
        isTrailerModalOpen={isTrailerModalOpen}
        closeModal={closeTrailerModal}
        videoID={isTrailerModalOpen ? videoID : ''}
      />
    </div>
  );
};

export default ListMovie;
