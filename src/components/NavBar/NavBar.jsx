import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css"

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
    clearLocalStorageOnLogout();
  }

  function clearLocalStorageOnLogout() {
    localStorage.removeItem('lastSearch');
    localStorage.removeItem('searchHistory');
  }

  return (
    <nav className='w-lg-75 mx-2 mx-lg-auto position-relative z-2 px-lg-3 py-0 shadow-5 rounded-3 rounded-lg-pill bg-dark'>
      <Link className="navbar" to="/">Home</Link>
      {user ?
        <>
          <span>Welcome, {user.name}</span>
          &nbsp; | &nbsp;
          <Link className="navbar" to="/search">Search by Location</Link>
          &nbsp; | &nbsp;
          <Link className="navbar" to="/detail">Details of Location</Link>
          &nbsp; | &nbsp;
          <Link className="navbar" to="" onClick={handleLogOut}>Log Out</Link>
          &nbsp; | &nbsp;
        </>
        :
        <>
          <Link className="navbar" to="/login">LogIn</Link>
        </>
      }
      <span>WeatherPulse Pro</span>
    </nav>
  );
}