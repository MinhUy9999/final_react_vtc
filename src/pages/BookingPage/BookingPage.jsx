import { useSelector } from 'react-redux'
import ImageOverlay from '../../components/ImageOverLay/ImageOverlay'
import Payment from '../../components/Payment/Payment'
import QuickBook from '../../components/QuickBook/QuickBook'
import Seat from '../../components/Seat/Seat'

const BookingPage = () => {
  const {activeFilmImg} = useSelector(reducer=> reducer.initReducer);

  
  return (
    <div>
      <QuickBook />
      <div className="grid grid-cols-12">
        <Seat />
        <Payment />
      </div>
      
      {/* <ImageOverlay imageUrl={activeFilmImg} /> */}
    </div>
  )
}

export default BookingPage
