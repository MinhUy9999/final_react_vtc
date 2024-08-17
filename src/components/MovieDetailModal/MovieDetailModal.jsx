import React, { useState } from 'react';

const MovieDetailModal = React.forwardRef(
  ({
    toggle,
    isToggled,
    animation,
    modalRef,
    duration,
    genre,
    language,
    releaseDate,
    movieActiveInfo,
  }) => {
    const { moTa, tenPhim } = movieActiveInfo;
    return (
      <div>
        {isToggled && ( // Sử dụng short-circuit evaluation để render điều kiện
          <div
            ref={modalRef}
            className="h-screen bg-gray-600 bg-opacity-30 w-screen fixed left-0 top-0 z-50"
          >
            <div
              className={`bg-white shadow-lg p-6 rounded-2xl ${animation} fixed left-0 bottom-0 transform w-screen h-3/4 rounded-t-3xl`}
            >
              <div ref={modalRef} className="flex flex-col container">
                {/* Movie Header */}
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl font-bold">{tenPhim}</h1>
                  <button
                    className="text-xl border-2 p-2 font-medium border-red-900 hover:border-red-600 rounded"
                    onClick={toggle}
                  >
                    Close <i className="fa-solid fa-xmark text-red-600"></i>
                  </button>
                </div>
                
                {/* Movie Info */}
                <div className="mb-4">
                  <p>
                    <strong>Duration:</strong> {duration}
                  </p>
                  <p>
                    <strong>Genre:</strong> {genre}
                  </p>
                  <p>
                    <strong>Language:</strong> {language}
                  </p>
                  <p>
                    <strong>Release Date:</strong> {releaseDate}
                  </p>
                </div>

                {/* Synopsis */}
                <p className="mb-4">{moTa}</p>

                {/* Cast
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">Cast</h2>
                                <div className="flex space-x-4">
                                    {cast.map((actor, index) => (
                                        <div key={index}>
                                            <img src={actor.image} alt={actor.name} className="w-24 h-24 rounded-full" />
                                            <p>{actor.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Crew */}
                {/* <div className="mt-4">
                                <h2 className="text-2xl font-semibold mb-2">Crew</h2>
                                <div className="flex space-x-4">
                                    {crew.map((member, index) => (
                                        <div key={index}>
                                            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full" />
                                            <p>{member.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default MovieDetailModal;
