import React, { useState } from 'react';
import './App.css';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup'
import LoginPage from './pages/Login'
import { SignupFields } from './constants/formFields';
import Welcome from './pages/welcome';

const fields=SignupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');
function App() {
  const [signupState,setSignupState]=useState(fieldsState);
  const [loginData, setLoginData] = useState(null);
  console.log('loginData', loginData)
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage setLoginData={setLoginData} />}></Route> 
          <Route path="/signup" element={<SignupPage signupState={signupState} setSignupState={setSignupState} loginData={loginData}/>}></Route> 
          <Route path="/welcome" element={<Welcome loginData={loginData}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
