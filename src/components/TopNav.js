import { NavLink } from 'react-router-dom'
import navLogo from '../images/FinalLogo_White.png'

function TopNav() {
    return (
        <div className="nav-bar">
            <div className="left-nav">
                <NavLink to="/" className="nav-link nav-btn-logo">
                    <img className="nav-img" src={navLogo} />Cycling Forward
                </NavLink>
            </div>
            <div className="right-nav">
                <NavLink to="/learnmore" className="nav-link" id="nav-login">Learn More</NavLink>
                <NavLink to="/shop" className="nav-link inactive">Shop</NavLink>
                <NavLink to="/request" className="nav-link">Request</NavLink>
                <NavLink to="/donate" className="nav-link nav-btn">Donate</NavLink>
            </div>
        </div>
    )
}

export default TopNav