import React, { useState } from 'react';
import fetchService from '../services/fetchService'
import notificationHandler from '../components/Notification'
import Abha from '../components/Abha'
import Otp from '../components/Otp'
import otpservice from '../services/setOtpService'
import modeservice from '../services/modeService'

const AlreadyRegistered = ({ onSubmit, onCancel }) => {
  const [mode,setMode] =useState(null)
  const [listmode,setlistMode] =useState(null)
  const [p_data ,setData] = useState(null)
  const [abhaid ,setAbha] = useState(null)
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    gender: '',
    dob: '',
    mobile : '',
    state: '',
    district: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    onCancel();
  };


  const handleabhafetch = async (id) =>{
    try{
      setAbha(id);
      const fetchobject = await fetchService.fetch(id);
      await modeservice.selectmode("MOBILE_OTP")
      notificationHandler(`Organisation updated successfully response ${fetchobject}`, 'success');
    }
    catch (exception) {
      notificationHandler(`Update failed`, 'error');
    }
  };

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
  };

  return (
    <div>
    <div>
    {
         abhaid === null &&
        <Abha  fetch={handleabhafetch}/>
    }
    </div>
    <div>
    {   p_data != null &&
          <div style={{textAlign:'center'}}>

            <div> <b>Name :</b> {JSON.parse(p_data).name}</div>
            <div> <b>Gender:</b> {JSON.parse(p_data).gender}</div>
            <div> <b>yearOfBirth: </b> {JSON.parse(p_data).yearOfBirth}</div>
            <div> <b>monthOfBirth: </b> {JSON.parse(p_data).monthOfBirth}</div>
            <div> <b>dayOfBirth: </b> {JSON.parse(p_data).dayOfBirth}</div>
            <div> <b>Address: </b> {JSON.stringify(JSON.parse(p_data).address)} </div>
          </div>
      }
    </div>
    <form onSubmit={handleSubmit}>
      <label>
        Health ID:
        <input type="text" name="id" value={formData.id} onChange={handleChange} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Gender:
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
      </label>
      <br />
      <label>
        DOB:
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
      </label>
      <br />
      <label>
        Mobile:
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
      </label>
      <br />
      <label>
        State:
        <input type="text" name="state" value={formData.state} onChange={handleChange} />
      </label>
      <br />
      <label>
        District:
        <input type="text" name="district" value={formData.district} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Register</button>
      <br/>      
      <button onClick={handleCancel}>Cancel</button>
    </form>
    </div>
  );
};

export default AlreadyRegistered;
