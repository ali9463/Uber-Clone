import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainRiding = () => {

    const [ finishRidePanel, setFinishRidePanel ] = useState(false)
    const finishRidePanelRef = useRef(null)
    const location = useLocation()
    const rideData = location.state?.ride



    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ finishRidePanel ])


    return (
        <div className='h-screen relative flex flex-col justify-end '>

            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                 <Link to='/user-logout' className=' h-14 w-14 bg-green-800 flex items-center justify-center rounded-full'>
                                            <i className="text-2xl text-white font-medium ri-logout-box-r-line"></i>
                                </Link>
            </div>

            <div className='h-1/5 p-6 flex items-center justify-between relative bg-green-600 pt-10'
                onClick={() => {
                    setFinishRidePanel(true)
                }}
            >
                <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={() => {

                }}><i className="text-3xl text-white ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl text-white font-bold'>{'4 KM away'}</h4>
                <button className=' bg-green-400 text-white text-2xl font-bold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full z-[500] bottom-0 translate-y-full  bg-gradient-to-tr from-green-950 to-green-900 px-3 py-10 pt-12'>
                <FinishRide
                    ride={rideData}
                    setFinishRidePanel={setFinishRidePanel} />
            </div>

            <div className='h-screen fixed w-screen top-0 z-[-1]'>
               <img className='h-full w-full object-cover' src="https://datax.berkeley.edu/wp-content/uploads/2021/04/recording1.gif" alt="" />
            </div>

        </div>
    )
}

export default CaptainRiding