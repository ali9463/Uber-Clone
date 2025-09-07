import React from 'react'

const LookingForDriver = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setVehicleFound(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-3xl text-center text-white font-bold mb-5'>Looking for a Driver</h3>

           <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-17 rounded-3xl' src="https://img.freepik.com/free-photo/view-3d-car-model_23-2151138947.jpg" alt="" />
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-xl text-white ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-xl text-white  font-medium'>342/12-C</h3>
                            <p className='text-2xl -mt-1 text-white font-bold'>{props.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className=" text-white font-bold ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-xl text-white font-bold'>562/11-A</h3>
                            <p className='text-2xl font-bold -mt-1 text-white'>{props.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className=" font-bold text-white ri-currency-line"></i>
                        <div>
                            <h3 className='text-2xl font-bold text-white'>{props.fare[ props.vehicleType ]} Pkr</h3>
                            <p className='text-lg -mt-1 text-white'>Only Pay Cash</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LookingForDriver