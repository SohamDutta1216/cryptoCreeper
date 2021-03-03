import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ setSearch }) {
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
              <div class="item" style={{ fontSize: '20px' }} >
                <button class="ui inverted button">Currencies</button>
              </div>
            </Link>
            <Link to='/portfolio'>
              <div class="item" style={{ fontSize: '20px' }} >
                <button class="ui inverted button">Portfolio</button>
              </div>
            </Link>

            <div class="item" style={{ fontSize: '20px' }}>
              <button class='ui orange button'
                onClick={() => this.openModal()}
              >Login</button>
            </div>

          </div>

        </div>
      </nav>
    </div>

  )
}
