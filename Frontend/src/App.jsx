import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import UserLogin from './Pages/UserLogin';
import UserSignUp from './Pages/UserSignUp';
import CaptainLogin from './Pages/CaptainLogin';
import CaptainSignUp from './Pages/CaptainSignUp';
import LandingPage from './Pages/LandingPage';
import UserProtectWrapper from './Pages/UserProtectWrapper';
import UserLogout from './Pages/UserLogout';

function App() {

  return (
    <>
     <div className="min-h-screen ">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={ <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>} />
             <Route path='/user/logout'
          element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
          } />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
    </Routes>
    </div>
     </>
  );
}

export default App;