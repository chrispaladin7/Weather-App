import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();


  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate('/');
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <>
      <div>
        <MDBCard border='primary' background='link' className='text-white mb-3 bg-success p-2 text-dark bg-opacity-50'>
          <MDBCardHeader>Login</MDBCardHeader>
          <MDBCardText>
            <div className="form-container">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <MDBCardText>Email</MDBCardText>
                <input
                  type="text"
                  name="email"
                  placeholder="Email....."
                  value={credentials.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
                <MDBCardText>Password</MDBCardText>
                <input
                  type="password"
                  name="password"
                  placeholder="Password....."
                  value={credentials.password}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
                <MDBCardText className="error-message">&nbsp;{error}</MDBCardText>
                <MDBBtn className="button-login" type="submit">
                  LOG IN
                </MDBBtn>
              </form>
              <br />
              <MDBCardText><strong>Swipe right to Sign Up➡️</strong></MDBCardText>
            </div>

          </MDBCardText>
        </MDBCard>
      </div>

    </>
  );
}