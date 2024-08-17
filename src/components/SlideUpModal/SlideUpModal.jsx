import React, { useState } from 'react'

const SlideUpModal = React.forwardRef(({ toggle, isToggled, animation, modalRef, children }, ref) => {
    
    return (
        <>
            {isToggled && ( // Sử dụng short-circuit evaluation để render điều kiện
                <div className="h-screen bg-gray-600 bg-opacity-30 w-screen fixed left-0 top-0 z-50">
                    
                    <div className={`bg-white shadow-lg p-10 md:p-20 rounded-2xl ${animation} fixed left-0 bottom-0 transform w-screen h-5/6 rounded-t-3xl`}>
                    <button className="text-xl absolute right-10 top-5 md:top-10 transform -translate-x-1/2" onClick={toggle}>X</button>
                        <div className="overflow-x-auto max-h-full">
                            <div ref={modalRef} className="flex flex-col container">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
})

export default SlideUpModal