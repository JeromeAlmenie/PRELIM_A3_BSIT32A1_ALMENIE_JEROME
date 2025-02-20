import React from 'react'
import { Link } from 'react-router-dom'
 
function Navbar() {
    return (
      <div className='bg-cover h-screen' style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJXLqQLSsk-RAfq-wMamZyUKLTUBTNsnTzA&s)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand" href="#">Lyceum of Alabang</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav d-flex align-items-center justify-content-space-between overflow-hidden">
            <a class="nav-item nav-link active" href="/Home">Home</a>
            <a class="nav-item nav-link" href="/About">About</a>
            <a class="nav-item nav-link" href="/Contact">Contact</a>
          </div>
        </div>
      </nav>
      </div>
    )
}
 
export default Navbar