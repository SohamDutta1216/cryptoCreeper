import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

    <div className="ui inverted segment">
      <nav>
        <div className="ui inverted secondary pointing menu">
          <Link exact to="/">
            <div className="item"> Home</div>
          </Link>
        </div>
      </nav>
    </div>

  )
}
