import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HealthDataForm from './components/HealthDataForm';
import Login from './components/Login';
import Menu from './components/Menu';
import PatientList from './components/PatientList';
import RegistrationForm from './components/RegistrationForm';
import fetchService from './services/fetchService';
import modeservice from "./services/modeService";
import otpservice from "./services/setOtpService";
import Success from './components/Success';

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '10px',
  fontWeight: 'bold',
}

const menuStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#300964',
}

const App = () => {

  const [ user, setUser ] = useState(null)
  const [abhaid ,setAbha] = useState(null)
  const [p_data ,setData] = useState(null)
  const [mode,setMode] =useState(null)
  const [listmode,setlistMode] =useState(null)

  const [ notification, setNotification ] = useState(null)
  const [ notificationType, setNotificationType ] = useState(null)
  
  const notificationHandler = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotificationType(null)
      setNotification(null)
    }, 3000)
  }



  const handleLogin = async (credentials) => {
    try {
      //const userObject = await loginService.login(credentials)
      setUser(credentials)
      window.localStorage.setItem('loggedInUser', JSON.stringify(credentials))
      
      notificationHandler(`Logged in successfully as ${credentials.email}`, 'success') 
    }
    catch (exception) {
      notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
  }

  const handleabhafetch = async (id) =>{
    try{
      setAbha(id);
      const fetchobject = await fetchService.fetch(id);
      console.log(id);
      const getmod= await fetchService.getmode();
      //setlistMode(await fetchService.getmode());
      setlistMode(getmod);
      console.log(listmode[1]);
      notificationHandler(`Organisation updated successfully response ${fetchobject}`, 'success');
    }
    catch (exception) {
      notificationHandler(`Update failed`, 'error');
    }
  }

  const handleMode = async (mode) =>{
    try{
      setMode(mode);
      const fetchobject = await modeservice.selectmode(mode)
      console.log(mode);
      notificationHandler(`Organisation updated successfully response ${fetchobject}`, 'success')
    }
    catch (exception) {
      notificationHandler(`Update failed`, 'error')
    }
  }
  
  const handleotp = async (authcode) =>{
    try{
      const otpobject = await otpservice.setOtp(authcode)
      const patientdata= await otpservice.getdata();
      setData(JSON.stringify(patientdata));
      console.log(JSON.stringify(patientdata));
      console.log("hi");
      notificationHandler(`Organisation updated successfully response ${otpobject}`, 'success')
    }
    catch (exception) {
      notificationHandler(`Update failed`, 'error')
    }
  }



  return (
    <div>
      {
          user === null && <Login startLogin={handleLogin}/>
      }
      {
        user!==null &&
        <Router>
        <div>
          <div style={menuStyle}>
            <div>
              <Link to="/" style={linkStyle}>Home</Link>
            </div>
            <div>
              <Link to="/RegistrationForm" style={linkStyle}>New Patient Registration</Link>
              <Link to="/HealthDataForm" style={linkStyle}>Doctor's Consultation</Link>
              <Link to="/PatientList" style={linkStyle}>List of Patients</Link>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Menu/>} />
            <Route path="/RegistrationForm" element={<RegistrationForm/>} />
            <Route path="/HealthDataForm" element={<HealthDataForm/>} />
            <Route path="/PatientList" element={<PatientList/>} />
            <Route path="/success" element={<Success/>} />
          </Routes>
        </div>
      </Router>
      }
    </div>
    
  );

//   return (
//     <div>
//       {/* <div class="card"> */}
//       <div className='text-center page-header p-2 regular-text-shadow regular-shadow' id='' role='tab'>
//           <h3 className='display-4 font-weight-bold mb-0'>
//             Health Information System
//           </h3>
//         </div>

      // <div>
      // {
      //     user === null &&
      //     <Login startLogin={handleLogin}/>
      // }
      // </div>
      // <div>
      // {
      //      user !== null && abhaid === null &&
      //     <Abha  fetch={handleabhafetch}/>
      // }
      // </div>
//       <div>
//       {
   //        abhaid !== null  &&
     //     <Otp  setOtp={handleotp}/>
//       }
//        {   p_data != null &&
//           <div style={{textAlign:'center'}}>
//             {/* <div>{p_data}</div> */}

//             <div> <b>Name :</b> {JSON.parse(p_data).name}</div>
//             <div> <b>Gender:</b> {JSON.parse(p_data).gender}</div>
//             <div> <b>yearOfBirth: </b> {JSON.parse(p_data).yearOfBirth}</div>
//             <div> <b>monthOfBirth: </b> {JSON.parse(p_data).monthOfBirth}</div>
//             <div> <b>dayOfBirth: </b> {JSON.parse(p_data).dayOfBirth}</div>
//             <div> <b>Address: </b> {JSON.stringify(JSON.parse(p_data).address)} </div>
//           </div>
//       }
      // </div>

  //   </div>  
  // );
}

export default App;
