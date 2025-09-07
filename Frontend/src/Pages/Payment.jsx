import React from 'react'
import { Link } from 'react-router-dom' 
import { useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { useNavigate } from 'react-router-dom'

const Riding = () => {
    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()

    socket.on("ride-ended", () => {
        navigate('/home')
    })


    return (
        <div className='h-screen bg-gradient-to-bl from-green-800 to-green-700'>
                        <div className='h-1/2'>
                             <img className='h-full w-full object-cover' src="https://datax.berkeley.edu/wp-content/uploads/2021/04/recording1.gif" alt="" />
            
                        </div>
            <div className='h-[100px] p-4 mt-5  '>
                <div className='flex items-center justify-center gap-3 '>
                    <div className='text-center flex flex-col items-center'>
                        <h2 className='text-3xl text-white font-bold capitalize'>Your Payment is Done</h2>
                        <p className='text-2xl text-white mt-5'>Your Ride is On the Way</p>

                    </div>
                </div>
                <Link to="/"><button className='w-full mt-32 bg-green-600 text-white font-bold text-3xl p-2 rounded-lg'>WhatsApp</button></Link>
            </div>
        </div>
    )
}

export default Riding