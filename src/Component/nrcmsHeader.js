import React from 'react'

function NrcmsHeader() {
  return (
    <header className='nrcms-header'>
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <img src="/images/nrcmsLogo.png" alt='nrcms-logo' />
          </div>
          <div className='col-10 d-flex align-items-center'>
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About us</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Demo</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Contact us</a>
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
