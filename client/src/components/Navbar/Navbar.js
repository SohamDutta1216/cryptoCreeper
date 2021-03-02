import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ setSearch }) {
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div>
      <nav>
        <div className="ui fixed inverted two item menu">
          <Link exact to="/">
            <div className="item"> <img src='/logo.png' /></div>
          </Link>
          <div className="item">
            <form>
              <div class="ui category search">
                <div class="ui icon input">
                  <input
                    class="prompt"
                    type='text'
                    onChange={handleChange}
                    placeholder='Search'
                  />
                  <i class="search icon"></i>
                </div>
              </div>
            </form>

          </div>
        </div>
      </nav>
    </div>

  )
}
