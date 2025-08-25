import React, { useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'



const UserSignUp = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ username, setusername ] = useState('')

  const navigate = useNavigate()



  const { setUser } = useContext(UserDataContext)




  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      username: username,
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
    console.log(response);
    console.log(`${import.meta.env.VITE_BASE_URL}/users/register`);
    
    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setusername('')
    setPassword('')

  }
  return (
    <div>
      <div className='p-7 bg-gradient-to-br to-black from-green-800 h-screen flex flex-col justify-between'>
        <div>
           <h1 className='mt-6  text-white text-3xl text-center font-bold mb-7'>Car Cab</h1>

          <form onSubmit={(e) => {
            submitHandler(e)
          }}>

            <h3 className='text-lg font-medium mb-4  text-white text-center'>What is your Full Name?</h3>
          <div className='flex gap-4 mb-4'>
            <input
              required
              className='bg-green-500 mb-2 rounded-3xl px-4 py-2 border border-green-500  w-full text-lg placeholder:text-base placeholder:text-white'
              type="text"
              placeholder='Your Full Name'
              value={username}
              onChange={(e) => {
                setusername(e.target.value)
              }}
            />
          </div>

            <h3 className='text-lg font-medium mb-4 text-white text-center'>What is your email</h3>
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

            <h3 className='text-lg font-medium mb-4 text-white text-center'>What is your password?</h3>

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
              className=' text-white font-bold  mb-5 mt-7 rounded-3xl px-4 py-2 w-full text-xl border border-white hover:text-black hover:bg-white'
            >Create account</button>

          </form>
          <p className='text-center text-white'>Already have a account? <Link to='/login' className='text-green-500'>Login here</Link></p>
        </div>
      </div>
    </div >
  )
}

export default UserSignUp