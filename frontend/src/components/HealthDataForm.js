import React, { useState } from 'react';
import '../App.css';

const HealthDataForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    bloodPressure: '',
    heartRate: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div class="register-form">
    <div class="form-container">
    <form onSubmit={handleSubmit}>
      <label>
        Weight:
        <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
      </label>
      <br />
      <label>
        Height:
        <input type="number" name="height" value={formData.height} onChange={handleChange} />
      </label>
      <br />
      <label>
        Blood Pressure:
        <input
          type="text"
          name="bloodPressure"
          value={formData.bloodPressure}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Heart Rate:
        <input type="number" name="heartRate" value={formData.heartRate} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default HealthDataForm;

