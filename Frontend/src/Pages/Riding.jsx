import React from 'react'
import { Link, useLocation } from 'react-router-dom' // Added useLocation
import { useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { useNavigate } from 'react-router-dom'

const Riding = () => {
    const location = useLocation()
    const { ride } = location.state || {} // Retrieve ride data
    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()

    socket.on("ride-ended", () => {
        navigate('/home')
    })


    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed right-2 top-2 h-13 w-13 bg-green-600 flex items-center justify-center rounded-full'>
                <i className="text-2xl font-bold text-white ri-home-5-line"></i>
            </Link>
            <div className='h-1/2'>
                 <img className='h-full w-full object-cover' src="https://datax.berkeley.edu/wp-content/uploads/2021/04/recording1.gif" alt="" />

            </div>
            <div className='h-1/2 p-4 bg-gradient-to-bl from-green-800 to-green-700'>
                <div className='flex items-center justify-between'>
                    <img className='h-20 rounded-4xl' src="https://img.freepik.com/free-photo/view-3d-car-model_23-2151138947.jpg" alt="" />
                    <div className='text-center'>
                        <h2 className='text-2xl text-white font-bold capitalize'>{ride?.captain.captainName}</h2>
                        <h4 className='text-2xl text-white font-bold -mt-1 -mb-1'>{ride?.captain.vehicle.plate}</h4>
                        <p className='text-2xl font-bold text-white'>Civic Car</p>

                    </div>
                </div>

                <div className='flex gap-2 justify-between flex-col items-center'>
                    <div className='w-full mt-5'>

                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className="text-lg text-white ri-map-pin-2-fill"></i>
                            <div>
                                <h3 className='text-xl text-white font-bold'>562/11-A</h3>
                                <p className='text-2xl -mt-1 text-white'>{ride?.destination}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-3'>
                            <i className=" font-bold text-white ri-currency-line"></i>
                            <div>
                                <h3 className='text-2xl text-white font-bold'>{ride?.fare} Pkr</h3>
                                <p className='text-lg -mt-1 text-white'>Pay only Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/payment"><button className='w-full mt-5 bg-green-500 text-white font-bold text-2xl p-2 rounded-lg'>Make a Payment</button></Link>
            </div>
        </div>
    )
}

export default Riding