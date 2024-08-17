import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateArrSeat, updateSeat } from '../../redux/slice/initReducer';
import "./Seat.scss"

const Seat = () => {
    const { arrSeat, arrConfirmSeats } = useSelector(reducer => reducer.initReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const response = axios({
            url: './danhSachGhe.json',
            method: 'GET'
        })
        response.then((resolve) => {
            dispatch(updateSeat(resolve.data))
        }).catch(error => {
            throw error;
        })

    }, []);

    const findRowIndex = (row) => {
        return arrSeat.findIndex(item => item.hang == row);
    }
    const datChoAction = ({ hang, cot, bool }) => {
        const rowIndex = findRowIndex(hang)

        const updateSeat = [...arrSeat];
        dispatch(updateArrSeat({ bool, hang, cot, arrSeat }))
        // dispatch(updateSeat(updateSeat));
    }
    return (
        <div className="container col-span-8">
            {/* {console.log('render', arrSeat)} */}
            <div className="w3ls-reg">
                {/* input fields */}

                {/* //input fields */}
                {/* seat availabilty list */}
               
                {/* seat availabilty list */}
                {/* seat layout */}
                <div className="seatStructure txt-center" style={{ overflowX: 'auto' }}>
                    <p id="notification" /><table id="seatsBlock">
                        <tbody>
                            {/* {console.log("render -x", arrSeat)} */}
                            {
                                arrSeat?.map(({ hang, danhSachGhe }, index) => {

                                    return <tr key={index} className='flex'>
                                        <td className='mr-2 text-gray-400 flex items-center'>{hang}</td>
                                        {danhSachGhe.map(({ soGhe, gia, daDat, confirm}, index) => {
                                            // let isConfirm = arrConfirmSeats.includes(soGhe);
                                            // console.log(isConfirm)
                                            return (<td key={index} className={`mr-1 mb-3 inline-block text-gray-400 text-center relative`}>
                                                {!hang && (<p className='pb-5 block '>{soGhe}</p>)}
                                                {hang && (
                                                    <input type="checkbox" className={`seats -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute ${confirm?'redBox':''}`} disabled={confirm?true:false} checked={daDat} onChange={() => {
                                                        datChoAction({ hang, cot: index + 1, bool: !daDat })
                                                    }} />
                                                )}
                                            </td>)
                                        })}
                                    </tr>
                                })
                            }
                        </tbody></table>
                    <div className="screen bg-transparent">
                        <h2 className=" border-gray-700 bg-primary text-black font-extrabold py-8 rounded-xl">Screen this way</h2>
                    </div>
                    {/* <button>Confirm Selection</button> */}

                </div>
                {/* //seat layout */}
                {/* details after booking displayed here */}

            </div>
        </div>
    )
}

export default Seat