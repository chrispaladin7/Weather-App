import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css'
import {
  MDBCard,
  MDBCardText,
  MDBCardHeader,
  MDBBtn
} from 'mdb-react-ui-kit';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
      this.setState({ error: 'Registed Successfully' });
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <MDBCard border='primary' background='info' className='text-black mb-3'>
          <MDBCardHeader>Sign Up</MDBCardHeader>
          <MDBCardText>
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <MDBCardText>Name</MDBCardText>
                <input className="input-field" placeholder='Name....' type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <MDBCardText>Email</MDBCardText>
                <input className="input-field" placeholder='Email....' type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <MDBCardText>Password</MDBCardText>
                <input className="input-field" placeholder='Password....' type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <MDBCardText>Confirm</MDBCardText>
                <input className="input-field" placeholder='Confirm Password....' type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <br />
                <MDBBtn type="submit" disabled={disable}>SIGN UP</MDBBtn>
              </form>
              <br />
              <MDBCardText><strong>⬅️Swipe left to Login</strong></MDBCardText>
              <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
          </MDBCardText>
        </MDBCard>
      </div>
    );
  }
}

