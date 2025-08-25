import React, { useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { setUser } = useContext(UserDataContext)
  const navigate = useNavigate()



  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 bg-gradient-to-br to-black from-green-800 h-screen flex flex-col justify-between'>
      <div>
          <h1 className='mt-6  text-white text-3xl text-center font-bold mb-7'>Car Cab</h1>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-4  text-white text-center'>What is your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-green-500 mb-7 rounded-3xl px-4 py-2 border border-green-500  w-full text-lg placeholder:text-base placeholder:text-white '
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-4 text-white text-center'>What is your password?</h3>

          <input
            className='bg-green-500 mb-7 rounded-3xl px-4 py-2 border border-green-500 w-full text-lg placeholder:text-base placeholder:text-white'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required type="password"
            placeholder='password'
          />

          <button
            className=' text-white font-bold  mb-5 mt-7 rounded-3xl px-4 py-2 w-full text-xl border border-white hover:text-black hover:bg-white'
          >Login</button>

        </form>
        <p className='text-center mt-5 text-white'>New here? <Link to='/signup' className='text-green-500'>Create new Account</Link></p>
      </div>
      <div>
        <Link
          to='/captain-login'
          className='bg-green-500 flex items-center justify-center text-white font-bold mb-5 rounded-3xl px-4 py-2 w-full text-lg '
        >Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin