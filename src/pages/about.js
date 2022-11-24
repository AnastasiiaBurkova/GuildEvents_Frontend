import React from 'react';
import './pages.css';
import logo from "../images/logo_green.png";
import logoMobile from "../images/logo_green_mobile.png";
import us from "../images/Noora_Anastasiia.jpeg"

const About = () => {
return (
	<div className="aboutDiv">
        <h2>About us</h2>
        <div className="multiline">
                Hello! We are Anastasiia and Noora. We started our studies at Aalto University in 2021. 
                We immidiately fell in love with the amazing student culture and all the events our guild organized for us.
                However, we soon realized that our guild is not the only one arranging amazing events. We wanted to get 
                familiar with other guilds as well and make new connections. But how could we do that? Our guild only listed 
                their own events in their calendar. If we wanted to see other guilds' events we had to search far and wide for 
                all the information that was scattered around the Internet. We needed a better solution for seeing all the events
                on a single service.
                <br/>
                <br/>
                So we came up with <div className='mainLogo'>
					<img src={logoMobile} alt="logo" class="mobile"></img>
					<img src={logo} alt="logo" class="desktop"></img>
					</div>
                <br/>
                
                WhatsTheHaps? is a web service that combines the calendars of
                all Aalto guilds and shows a clear weekly
                calendar overview of all the different Guild events, showing the time of the event,
                location as well as by which guild the event is organized.
                With our service we aim to provide a clear overview of all guild events to provide
                a better experience to both guild organizers and students when organizing and
                signing up for events, thus offering students a better-quality student life at Aalto University.
        </div>
        <h3>About the creators</h3>
        <table className='multiline'>
                <tr>
                <th>Noora</th>
                <th>Anastasiia</th>
                
                </tr>
                <tr>
                <td>Noora is a 2nd year MSc student, studying 
                        Software and Service engineering
                </td>
                <td>Anastasiia is a 2nd year MSc student, studying 
                        Software and Service engineering</td>
                </tr>
                <tr>
                <td>TIK</td>
                <td>TIK</td>
                </tr>
        </table>
        <div >
		<img className="picture" src={us} alt="Noora and Anastasiia"></img>
	</div>
	</div>
);
};

export default About;
