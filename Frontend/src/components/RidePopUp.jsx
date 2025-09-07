import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h3 className='text-3xl font-bold text-center text-white mb-5'>New Ride Available!</h3>
            <div className='flex items-center justify-between p-3 bg-green-400 rounded-lg mt-4'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 rounded-full object-cover w-12' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
                    <h2 className='text-2xl font-bold text-white'>{props.ride?.user.username } </h2>
                </div>
                <h5 className='text-lg  text-white font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="font-bold text-white ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-xl text-white font-medium'>562/11-A</h3>
                            <p className='text-2xl -mt-1 font-bold text-white'>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg font-bold text-white ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-xl text-white  font-medium'>562/11-A</h3>
                            <p className='text-2xl font-bold text-white -mt-1 '>{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="font-bold text-white ri-currency-line"></i>
                        <div>
                            <h3 className='text-2xl text-white font-bold'>{props.ride?.fare} Pkr</h3>
                        </div>
                    </div>
                </div>
                <div className='mt-5 w-full '>
                    <button onClick={() => {
                        props.setConfirmRidePopupPanel(true)
                        props.confirmRide()

                    }} className=' bg-green-500 text-lg w-full text-white font-semibold p-2 px-10 rounded-lg'>Accept</button>

                    <button onClick={() => {
                        props.setRidePopupPanel(false)

                    }} className='mt-2 text-lg w-full bg-red-700 text-white font-semibold p-2 px-10 rounded-lg'>Ignore</button>


                </div>
            </div>
        </div>
    )
}

export default RidePopUp