import {Link, useLocation} from 'react-router-dom'

export default function Navbar(){

    const location = useLocation()

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">S`Coffee</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            {/* <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/the-house' ? 'active' : ''}`} to="/the-house">The house</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/culture'}`} to="/culture">Culture</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/philosophy'}`} to="/philosophy">Philosophy</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Sign In</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}