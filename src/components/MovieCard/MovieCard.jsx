import React, { useContext, useState } from 'react';
import MovieDetailModal from '../MovieDetailModal/MovieDetailModal';
import { formatDate } from '../../utils/Date';
import { useDispatch } from 'react-redux';
import { setActiveFilm } from '../../redux/slice/initReducer';
import { useNavigate } from 'react-router-dom';

// MovieCard component
const MovieCard = ({language = "English", data, toggle,openTrailerModal, trailerID }) => {
  const dispatch = useDispatch(reducer=>reducer.initReducer);
  const navigate = useNavigate();
  const{tenPhim, ngayKhoiChieu, hinhAnh, moTa, } = data;
  const setActiveImage = (image)=>{
    if(image){
      dispatch(setActiveFilm(image));
    }
    
  }
  return (
    <div className="max-w-sm rounded bg-white group cursor-pointer">
      <div className="w-full  h-2/3 overflow-hidden relative">
        <img
          className="w-full object-cover h-full"
          src={hinhAnh}
          alt={tenPhim}
        />
        <div className="absolute w-full inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex text-5xl justify-center items-center opacity-0 group-hover:opacity-100">
          {/* Nội dung bạn muốn hiển thị khi hover trên phần tử con */}

          <button
            onClick={() => {
              openTrailerModal(trailerID);
            }}
          >
            <i
              className="fa-duotone fa-circle-play"
              style={{
                '--fa-primary-color': '#fff',
                '--fa-secondary-color': '#cfcfcf',
                '--fa-secondary-opacity': '0.6',
              }}
            ></i>
          </button>
        </div>
      </div>
      <div className="px-6 py-4">
        <div
          className="font-bold text-xl mb-2 truncate hover:text-[#FFD01E] uppercase"
          onClick={() => navigate(`/detail/${data.maPhim}`)}
        >
          {tenPhim}
        </div>
        <p className="text-gray-700 text-base truncate">U/A • Action</p>
        <small>{language}</small>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center justify-between">
        <button 
        onClick={()=>{
          setActiveImage(hinhAnh);
          navigate(`/detail/${data.maPhim}`)
        }}
        className="bg-primary hover:bg-opacity-90 text-black font-semibold py-2 px-4 truncate text-sm rounded">
          Book Tickets
        </button>
        <button
          onClick={() => {
            toggle(data);
          }}
          className="float-right text-black hover:text-gray-600 border border-gray-500 rounded-lg py-1 px-2 hover:bg-[#FFD01E]"
        >
          <i className="fa-light fa-circle-info"></i>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
