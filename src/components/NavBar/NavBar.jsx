import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      {user ?
        <>
          <Link to="/search">Search by Location</Link>
          &nbsp; | &nbsp;
          <Link to="/detail">Details of Location</Link>
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>Log Out</Link>
          &nbsp; | &nbsp;
          <span>Welcome, {user.name}</span>
        </>
        :
        <Link to="/login">LogIn</Link>
      }
    </nav>
  );
}