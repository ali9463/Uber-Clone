import React, { useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CapatainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ captainName, setCaptainName ] = useState('')

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')


  const { setCaptain } = useContext(CaptainDataContext)


  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      captainName: captainName,
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setCaptainName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')

  }
  return (
    <div className='py-5 px-5 bg-gradient-to-br to-black from-green-800 h-screen flex flex-col justify-between'>
      <div>
        <h1 className='mt-6  text-white text-3xl text-center font-bold mb-7'>Car Cab</h1>

        <form onSubmit={(e) => {
          submitHandler(e)
        }}>

          <h3 className='text-lg font-medium mb-4  text-white text-center'>What is your captain name?</h3>
          <div className='flex gap-4 mb-4'>
            <input
              required
              className='bg-green-500 mb-2 rounded-3xl px-4 py-2 border border-green-500  w-full text-lg placeholder:text-base placeholder:text-white'
              type="text"
              placeholder='Captain Full Name'
              value={captainName}
              onChange={(e) => {
                setCaptainName(e.target.value)
              }}
            />
          </div>

          <h3 className='text-lg font-medium mb-4 text-white text-center'>What is your Captain email?</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-green-500 mb-7 rounded-3xl px-4 py-2 border border-green-500  w-full text-lg placeholder:text-base placeholder:text-white'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-4  text-white text-center'>What is your password?</h3>

          <input
             className='bg-green-500 mb-7 rounded-3xl px-4 py-2 border border-green-500  w-full text-lg placeholder:text-base placeholder:text-white'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required type="password"
            placeholder='password'
          />

          <h3 className='text-lg font-medium mb-4  text-white text-center'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-green-500 border-none w-1/2 rounded-3xl px-4 py-2 text-lg placeholder:text-base placeholder:text-white'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-green-500 border-none w-1/2 rounded-3xl px-4 py-2 text-lg placeholder:text-base placeholder:text-white'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-green-500 border-none w-1/2 rounded-3xl px-4 py-2  text-lg placeholder:text-base placeholder:text-white'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-green-500 w-1/2 rounded-3xl px-4 py-2 border-none text-lg placeholder:text-base placeholder:text-white'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option className='text-white placeholder:white' value="" disabled>Select Type</option>
              <option className='text-white placeholder:white' value="car">Car</option>
              <option className='text-white placeholder:white' value="auto">Auto</option>
              <option className='text-white placeholder:white' value="moto">Moto</option>
            </select>
          </div>

          <button
            className=' text-white font-semibold mb-3 rounded-3xl border border-white hover:text-black hover:bg-white px-4 py-2 w-full text-xl placeholder:text-base'
          >Create Captain Account</button>

        </form>
        <p className='text-center text-white'>Already have a account? <Link to='/captain-login' className='text-green-500'>Login here</Link></p>
      </div>
    </div>
  )
}

export default CaptainSignup