import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuDropDown from './MenuDropDown/MenuDropDown';
import logo from "../../images/main-logo.png";
import logoMobile from "../../images/main-logo-mobile.png";
import { Link } from "react-router-dom";
import { Grid, Button, Stack } from '@mui/material';
import './NavStyles.css'

export default function Navbar() {
	return (
		<Box >
			<AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
				<Toolbar>
					<Grid container direction={'row'}>
						<Grid item xs={2}>
							<Link to="/">
								<Box className='mainLogo'>
									<Box component="img" height={64} src={logoMobile} alt="logo" className="mobile" />
									<Box component="img" height={64} src={logo} alt="logo" className="desktop" />
								</Box>
							</Link>
						</Grid>
						<Grid item xs={9} mt={2} justifyContent={'center'}>
							<Stack direction="row" sx={{ justifyContent: 'center' }} spacing={{ sm: 2, lg: 9 }}>
								<Button variant="text" component={Link} to={'/'} sx={{ color: 'white' }}>Day</Button>
								<Button variant="text" component={Link} to={'/week'} sx={{ color: 'white' }}>Week</Button>
								<Button variant="text" component={Link} to={'/month'} sx={{ color: 'white' }}>Month</Button>
							</Stack>
						</Grid>
						<Grid item xs={1} mt={2}>
							<MenuDropDown />
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	);
}