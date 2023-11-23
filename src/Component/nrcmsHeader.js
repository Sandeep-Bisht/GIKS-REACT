import React from 'react'

function NrcmsHeader() {
  return (
    <header>
      <div className='container'>
        <div className='row nrcms-header'>
          <div className='col-2'>
            <img src="/images/nrcmsLogo.png" alt='nrcms-logo' />
          </div>
          <div className='col-10 d-flex align-items-center'>
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link " aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " aria-current="page" href="#">About us</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " aria-current="page" href="#">Demo</a>
                    </li>                    <li class="nav-item">
                      <a class="nav-link " aria-current="page" href="#">Pricing</a>
                    </li>                    <li class="nav-item">
                      <a class="nav-link " aria-current="page" href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NrcmsHeader
