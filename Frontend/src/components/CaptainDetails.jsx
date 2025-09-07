
import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CapatainContext'

const CaptainDetails = () => {

    const { captain } = useContext(CaptainDataContext)

    return (
        <div>
            <div className='flex items-center justify-between '>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="" />
                    <h4 className='text-2xl font-bold text-white capitalize'>{captain.captainName}</h4>
                </div>
                <div>
                    <h4 className='text-2xl font-bold text-white'>56789 Pkr</h4>
                    <p className='text-lg text-white'>Earned</p>
                </div>
            </div>
            <div className='flex p-3 mt-8 bg-green-500 rounded-xl justify-center gap-5 items-start'>
                <div className='text-center'>
                    <i className="text-3xl text-white mb-2 font-thin ri-timer-2-line"></i>
                    <h5 className='text-lg text-white font-medium'>15</h5>
                    <p className='text-sm text-white'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2  text-white font-thin ri-speed-up-line"></i>
                    <h5 className='text-lg font-bold text-white'>23456</h5>
                    <p className='text-sm text-white'>Km Done</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 text-white font-thin ri-booklet-line"></i>
                    <h5 className='text-lg font-bold text-white'>150</h5>
                    <p className='text-sm text-white'>Clients Trusted</p>
                </div>

            </div>
        </div>
    )
}

export default CaptainDetails