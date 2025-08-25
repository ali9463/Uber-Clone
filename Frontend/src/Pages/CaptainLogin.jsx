import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { CaptainDataContext } from '../context/CapatainContext'

const CaptainLogin = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  // const { captain, setCaptain } = React.useContext(CaptainDataContext)
  // const navigate = useNavigate()



  const submitHandler = async (e) => {
    e.preventDefault();
    // const captain = {
    //   email: email,
    //   password
    // }

    // const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

    // if (response.status === 200) {
    //   const data = response.data

    //   setCaptain(data.captain)
    //   localStorage.setItem('token', data.token)
    //   navigate('/captain-home')

    // }

    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7  bg-gradient-to-br to-black from-green-800 h-screen flex flex-col justify-between'>
      <div>
        <h1 className='mt-6  text-white text-3xl text-center font-bold mb-7'>Car Cab</h1>

        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-4  text-white text-center'>What is captain email?</h3>
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

          <h3 className='text-lg font-medium mb-2 text-white text-center'>What is captain password?</h3>

          <input
            className='bg-green-500 mb-7 rounded-3xl px-4 py-2 border border-green-500  w-full text-lg placeholder:text-base placeholder:text-white'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required type="password"
            placeholder='password'
          />

          <button
            className='text-white font-bold  mb-5 mt-7 rounded-3xl px-4 py-2 w-full text-xl border border-white hover:text-black hover:bg-white'
          >Login</button>

        </form>
        <p className='text-center mt-5 text-white'>Join as a Captain? <Link to='/captain-signup' className='text-green-500'>Register as a Captain</Link></p>
      </div>
      <div>
        <Link
          to='/login'
          className='bg-green-500 flex items-center justify-center text-white font-bold mb-5 rounded-3xl px-4 py-2 w-full text-lg'
        >Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin