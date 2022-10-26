import React from 'react';
import '../styles/header.css';

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Features</a>
                            <a class="nav-link" href="#">Pricing</a>
                            <a class="nav-link" href="#">About</a>
                        </div>
                    </div>
                    <div className="btns">
                        <button className='btn btn-success'>Sign Up</button>
                        <button className='btn btn-info'>Log In</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;




/* import React from 'react';

function Header() {
    return (
        <div>
          this is the header
        </div>
      );
}

export default Header; */