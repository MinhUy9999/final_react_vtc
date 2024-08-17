import React, { useEffect, useRef } from 'react';

const TrailerModal = ({ isTrailerModalOpen, videoID, closeModal }) => {
  const modalRef = useRef(null);

  // Xử lý khi click bên ngoài modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isTrailerModalOpen) {
      window.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 ${
        isTrailerModalOpen ? 'flex' : 'hidden'
      } items-center justify-center p-4 transition-opacity duration-300`}
      style={{ opacity: isTrailerModalOpen ? 1 : 0 }}
    >
      <div ref={modalRef} className="bg-white p-6 rounded-lg relative">
        {/* Nút đóng modal */}
        <button onClick={closeModal} className="absolute top-3 right-3">
          X
        </button>
        {/* Iframe YouTube */}

        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoID}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerModal;
