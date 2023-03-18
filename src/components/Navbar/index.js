import React from 'react';
import {
	Nav,
	NavLink,
	NavBtn,
	NavBtnLink,
	viewButtons
} from './NavBar';
import { Grid, ButtonGroup, Button } from '@mui/material';
import { Link } from "react-router-dom";
import './NavStyles.css'
import logo from "../../images/main-logo.png";
import logoMobile from "../../images/main-logo-mobile.png";

const Navbar = () => {
	return (
		<Nav>
			<NavLink to='/' >
				<div className='mainLogo'>
					<img src={logoMobile} alt="logo" className="mobile"></img>
					<img src={logo} alt="logo" className="desktop"></img>
				</div>
			</NavLink>
			<Grid container direction={'row'}>
				<ButtonGroup>
					<Button component={Link} to={'/'}>Day</Button>
					<Button component={Link} to={'/week'}>Week</Button>
					<Button component={Link} to={'/month'}>Month</Button>
				</ButtonGroup>
			</Grid>
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
	);
};

export default Navbar;
