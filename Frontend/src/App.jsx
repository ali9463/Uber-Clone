import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import UserLogin from './Pages/UserLogin';
import UserSignUp from './Pages/UserSignUp';
import CaptainLogin from './Pages/CaptainLogin';
import CaptainSignUp from './Pages/CaptainSignUp';
import LandingPage from './Pages/LandingPage';
import UserProtectWrapper from './Pages/UserProtectWrapper';
import UserLogout from './Pages/UserLogout';
import CaptainHome from './Pages/CaptainHome';
import CaptainProtectWrapper from './Pages/CaptainProtectWrapper';
import CaptainLogout from './Pages/CaptainLogout';
import CaptainRiding from './Pages/CaptainRiding';
import Riding from './Pages/Riding';
import Payment from './Pages/Payment';
import HomeUser from './Pages/HomeUser';

function App() {

  return (
    <>
     <div className="min-h-screen ">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={ <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>} />
        <Route path="/home-user" element={ 
              <HomeUser />
            } />
             <Route path='/user/logout'
          element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
          } />
             <Route path='/user-logout'
          element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
          } />
          <Route path='/captain-riding' element={<CaptainRiding />} />
           <Route path='/riding' element={<Riding />} />
            <Route path='/payment' element={<Payment />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
         <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        } />
        <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
            <CaptainLogout />
          </CaptainProtectWrapper>
        } />
    </Routes>
    </div>
     </>
  );
}

export default App;