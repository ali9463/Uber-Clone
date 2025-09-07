import React, {  useRef, useState} from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import { Link} from 'react-router-dom';

const HomeUser = () => {
    const [ panelOpen, setPanelOpen ] = useState(false)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
                // opacity:1
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
                // opacity:0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [ panelOpen ])




    return (
        <div className='h-screen relative overflow-hidden'>
             <div className='fixed p-6 top-0 flex items-center justify-end w-screen  gap-3'>
                <Link to='/signup' className="hidden md:block border-2 bg-green-600 border-white text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-black cursor-pointer">
                         Register Now
                       </Link>
                <Link to='/login' className="hidden md:block border-2 bg-green-600 border-white text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-black cursor-pointer">
                         Login Now
                       </Link>
            </div>
            <div className='h-screen w-screen'>
                <img className='h-full w-full object-cover' src="https://datax.berkeley.edu/wp-content/uploads/2021/04/recording1.gif" alt="" />
            </div>
            <div className=' flex flex-col justify-end h-screen absolute top-0 w-full lg:flex lg:w-1/2 '>
                <div className='h-[30%] p-6 bg-gradient-to-br from-black to-green-900 relative text-white lg:h-[50%] '>
                    <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                    }} className='absolute opacity-0 right-6 top-6 text-2xl'>
                        <i className="ri-arrow-down-wide-line text-white"></i>
                    </h5>
                    <h4 className='text-3xl text-center font-bold text-white'>Find a trip</h4>
                    <form className='relative py-3 text-white' onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-18 w-1 top-[50%] -translate-y-1/2 left-5 bg-green-700 rounded-full"></div>
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            className='bg-green-500 border-2 border-blackpx-12 py-2 text-xl rounded-lg w-full text-center'
                            type="text"
                            placeholder='Add a pick-up location'
                        />
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            className='bg-green-500 border-2 border-blackpx-12 text-center px-12 py-2 text-xl rounded-lg w-full  mt-3'
                            type="text"
                            placeholder='Enter your destination' />
                    </form>
                    <Link to="/login"><button
                        className='bg-green-500 text-white px-4 py-2 rounded-lg mt-3 w-full text-xl font-bold'>
                        Find Trip
                    </button></Link>
                </div>
                <div ref={panelRef} className='bg-gradient-to-tr from-green-950 to-green-900 h-0'>
                </div>
            </div>
        </div>
    )
}

export default HomeUser