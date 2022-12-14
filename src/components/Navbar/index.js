import React from 'react';
import {
Nav,
NavLink,
NavBtn,
NavBtnLink,
} from './NavBar';
import './NavStyles.css'
import logo from "../../images/main-logo.png";
import logoMobile from "../../images/main-logo-mobile.png";

const Navbar = () => {
	
	return (
		<>
		<Nav>
				<NavLink to='/' >
					<div className='mainLogo'>
					<img src={logoMobile} alt="logo" className="mobile"></img>
					<img src={logo} alt="logo" className="desktop"></img>
					</div>
				</NavLink>
				<div className='viewButtons'> 
				<NavBtn >
					<NavBtnLink to='/'>Day</NavBtnLink>
				</NavBtn>
				<NavBtn >
					<NavBtnLink to='/week'>Week</NavBtnLink>
				</NavBtn>
				<NavBtn >
					<NavBtnLink to='/month'>Month</NavBtnLink>
				</NavBtn>
				</div>
					<div className="dropdown">
					<button className="dropbtn">Menu
						<i className="arrow down"></i>
					</button>
					<div className="dropdown-content">		
						<NavLink to='/about'>
							About us
						</NavLink>		
						<NavLink to='/terms'>
							Terms and conditions
						</NavLink>
					</div>
				</div>	
				

		</Nav>
		</>
	);
};

export default Navbar;
