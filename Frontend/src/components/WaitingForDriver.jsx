import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
        props.waitingForDriver(false)
      }}><i className="text-3xl text-white ri-arrow-down-wide-line"></i></h5>

      <div className='flex items-center justify-between'>
        <img className='h-20 rounded-3xl' src="https://img.freepik.com/free-photo/view-3d-car-model_23-2151138947.jpg" alt="" />
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-white capitalize'>{props.ride?.captain.captainName}</h2>
          <h4 className='text-2xl text-white font-bold -mt-1 -mb-1'>{props.ride?.captain.vehicle.plate}</h4>
          <p className='text-2xl font-bold text-white'>Civic Car</p>
          <h1 className='text-2xl text-white font-bold'>  {props.ride?.otp} </h1>
        </div>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className=" text-white font-bold ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-xl text-white font-bold'>562/11-A</h3>
              <p className='text-2xl -mt-1 text-white'>{props.ride?.pickup}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg text-white ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-xl text-white font-bold'>332/2-C</h3>
              <p className='text-2xl -mt-1 text-white'>{props.ride?.destination}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="text-white font-bold ri-currency-line"></i>
            <div>
              <h3 className='text-2xl text-white font-bold'>{props.ride?.fare} Pkr</h3>
              <p className='text-lg -mt-1 text-white'>Only Pay Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver