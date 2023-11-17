import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';
function Login() {
const navigate = useNavigate(); // Initialize the navigate function

  const [userType, setUserType] = useState('patient');

  const handleUserTypeChange = (newUserType) => {
    setUserType(newUserType);
  };

  const handleLogin = () => {
    if (userType === 'nurse') {
      navigate('/nursehome'); // Use navigate for redirection
    } else {
      navigate('/patienthome'); // Use navigate for redirection
    }
  };

  return (
    <div className={`login-container ${userType}`}>
      {/* User type selection buttons... */}
      <center>
        <button style={{textDecoration:'none'}}
          className={`user-type-button ${userType === 'patient' ? 'active' : ''}`}
          onClick={() => handleUserTypeChange('patient')}
        >
          Patient Login
        </button>
      <button style={{textDecoration:'none' }}
          className={`user-type-button ${userType === 'nurse' ? 'active' : ''}`}
          onClick={() => handleUserTypeChange('nurse')}
        >
          Nurse Login
        </button>
      </center>

      {/* Login form */}
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            {/* Dynamic header based on user type */}
            <header style={{color:"#f9688d"}}>{userType === 'patient' ? 'Patient Login' : 'Nurse Login'}</header>
            <form>
              {/* Form fields... */}
              <div className="field input-field">
                <input type="number" placeholder="Phone number" className="input" />
              </div>
              <div className="field input-field">
                <input type="password" id="myInput" placeholder="Password" className="password" />
              </div>

              {/* Login button */}
              <div className="field button-field">
                <button onClick={handleLogin}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
