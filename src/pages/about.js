import React from 'react';
import './pages.css';
import logo from "../images/logo_green.png";
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
					<img src={logo} alt="logo"></img>
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
        <div className="multiline">
                Hi there! We are Noora and Anastasiia. Nice to meet you! Both of us are 2nd year MSc student, studying 
                Software and Service engineering, TIK. Hope you'll enjoy this website.
        </div>
        <br/>
        <div >
		<img className="picture" src={us} alt="Noora and Anastasiia"></img>
	</div>
        <div className="multiline sik">
                P.S. If you are an Electrical Engineering Student (SIK), we are sorry, there are no events of your guild for you here!
                You still wanna see your events? Ask your guild officials to finally make the google calendar. You are the only guild without one :(
        </div>
	</div>
);
};

export default About;
