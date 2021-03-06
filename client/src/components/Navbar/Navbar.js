import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import AuthModal from '../Modal/Modal'
import * as actionType from '../../constants/actionTypes';

export default function Navbar({ setSearch }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/');

    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (

    <div>
      <nav>
        <div className="ui fluid fixed large inverted menu">
          <Link exact to="/">
            <div className="item"> <div class='ui mini image'><img src='/logo.png' /></div></div>
          </Link>
          <div className="item">
            <div class="ui large category search">
              <div class="ui icon input">
                <input
                  class="prompt"
                  type='text'
                  onChange={handleChange}
                  placeholder='Search Currencies'
                />
                <i class="search icon"></i>
              </div>
            </div>

          </div>
          <div class="ui right inverted menu">
            <Link to='/'>
              <div class="item" >
                <button class="ui inverted button">Currencies</button>
              </div>
            </Link>
            {user?.result ? (
              <div>
                <Link to='/portfolio'>
                  <div class="item" >
                    <button class="ui inverted button">{`${user?.result.name}'s`} Portfolio</button>
                  </div>
                </Link>
                <div class="item" >
                  <Link to='/'>
                    <button class='ui orange button'
                      onClick={logout}
                    >Logout</button>
                  </Link>
                </div>
              </div>
            ) : (

              <div class="item" >
                <Link to='/auth'>
                  <AuthModal />
                </Link>
              </div>
            )}


          </div>
        </div>
      </nav>
    </div>

  )
}
