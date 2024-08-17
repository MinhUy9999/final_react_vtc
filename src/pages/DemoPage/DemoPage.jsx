import React, { useContext, useEffect, useRef, useState } from 'react'
import { AlertContext } from '../../App'
import VideoModal from './VideoModal';

const DemoPage = () => {

  //Video modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoId, setVideoId] = useState('');
  // const videoId = "y3eys_NBhWw"
  const openModal = (url) => {
    setIsModalOpen(true);
    setVideoId(url);
  }
  const closeModal = () => setIsModalOpen(false);
  // Function to close the modal

  //Info modal
  const [isToggled, setIsToggled] = useState(false);
  const [animation, setAnimation] = useState('');
  const modalRef = useRef(null);  // Tạo một ref để tham chiếu tới phần tử modal

  // Hàm xử lý toggle
 
  const toggle = () => {
    if (!isToggled) {
      setIsToggled(true);
      setAnimation('animate-slide-up');
    }
  };


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
  }, [])

  const videoModalBtnArr = [
    { url: "fpndEC2ZFCQ" },
    { url: "s2iHM716Zaw" },
    { url: "y3eys_NBhWw" }
  ]


  const { handleAlert } = useContext(AlertContext)
  const handleShowMessage = () => {
    handleAlert("success", "Thông báo thành công")
  }
  return (
    <div>
      <button
        onClick={handleShowMessage}
        className='px-2 py-5 bg-orange-600 text-white rounded'>Ant Design Message</button>
      <div className="App">
        <button onClick={toggle} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Toggle
        </button>
        {isToggled && ( // Sử dụng short-circuit evaluation để render điều kiện
          <div ref={modalRef} className={`${animation} fixed bottom-0 transform translate-x-1/2 w-screen h-1/2 bg-primary rounded-t-3xl`}>
            {/* Content */}
          </div>
        )}
      </div>
      {
        videoModalBtnArr.map((btn) => {
          return <button onClick={()=>{openModal(btn.url)}} className="p-2 bg-blue-500 text-white rounded-lg">
            Open Video Modal
          </button>
        })
      }

      <VideoModal isModalOpen={isModalOpen} closeModal={closeModal} videoId={isModalOpen?videoId:''} />
    </div>
  )
}

export default DemoPage