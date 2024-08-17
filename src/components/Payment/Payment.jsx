import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setConfirmSeat, updateArrSeat, updateArrSeatOrigin } from '../../redux/slice/initReducer';
import { AlertContext } from '../../App';

const Payment = () => {
  const { arrSeat, arrConfirmSeats } = useSelector(reducer => reducer.initReducer);
  const {handleAlert} = useContext(AlertContext);
  const dispatch = useDispatch();
  const arrSelectedSeat = arrSeat.reduce((result, current) => {
    const arrSelectedRow = current.danhSachGhe.filter(item => item.daDat == true);
    return result.concat(arrSelectedRow)
  }, [])
  const removeSeat = (soGhe) => {
    const hang = soGhe.charAt(0);
    const cot = soGhe.slice(1)
    dispatch(updateArrSeat({ hang, cot, bool: false, arrSeat }))
  }
  const handleBooking = ()=>{
    const arrSelectedSeatName = arrSelectedSeat.map(seat=>seat.soGhe);
    const newConfirmSeats = arrConfirmSeats.concat(arrSelectedSeatName);
    dispatch(setConfirmSeat(newConfirmSeats));
    handleAlert('success', "Thanh toán thành công, chỗ ngồi của bạn đã được đặt");
    const newArrSeat = JSON.parse(JSON.stringify(arrSeat));
    newArrSeat.forEach(obj=>{
      obj.danhSachGhe.forEach(seat=>{
        if (newConfirmSeats.includes(seat.soGhe)) {
          seat.confirm = true;
        }
        seat.daDat = false;
      })
    })

    dispatch(updateArrSeatOrigin(newArrSeat))
  }
  return (
    <div className='col-span-4 flex justify-center items-center text-2xl text-white'>


      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Ghế
              </th>
              <th scope="col" className="px-6 py-3">
                Giá
              </th>
              <th scope="col" className="px-6 py-3">
                Huỷ
              </th>

            </tr>
          </thead>
          <tbody className='text-center'>
            {arrSelectedSeat.map(({ soGhe, gia }, index) => {
              return <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {soGhe}
                </th>
                <td className="px-6 py-4">
                  {gia}
                </td>
                <td className="px-6 py-4">
                  <button className="border bg-red-500 text-black rounded px-3 py-2" onClick={
                    () => removeSeat(soGhe)
                  }>Xoá</button>
                </td>

              </tr>
            })}

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Tổng</td>

              <td>
                {
                arrSelectedSeat.reduce((result, seat) => {
                  return result + seat.gia
                }, 0).toLocaleString('vi',{
                  style: 'currency',
                  currency: 'VND'
                })
              }
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <button 
        onClick={handleBooking}
        className='bg-primary hover:bg-opacity-90 text-black font-semibold py-3 px-5 truncate text-sm rounded w-full mt-5'>Thanh toán và đặt chỗ</button>

      </div>


    </div>

  )
}

export default Payment