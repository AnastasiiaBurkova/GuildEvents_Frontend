import React from 'react';
import logo from "../../images/logo_green.png";
import us from "../../images/Noora_Anastasiia.jpeg"
import { Typography, Grid, Box } from '@mui/material';
import { AboutUsStyle, AboutUsLogoStyle, AboutUsCreatorsImageStyle } from './AboutStyle';
import Navbar from '../../components/Navbar/Navbar';

const About = () => {
        return (
                <Grid>
                        <Grid>
                                <Navbar />
                        </Grid>
                        <Box sx={AboutUsStyle}>
                                <Typography variant='h4' m={2} >About us</Typography>
                                <Typography m={2} variant={'body1'}>
                                        Hello! We are Anastasiia and Noora. We started our studies at Aalto University in 2021.
                                        We immidiately fell in love with the amazing student culture and all the events our guild organized for us.
                                        However, we soon realized that our guild is not the only one arranging amazing events. We wanted to get
                                        familiar with other guilds as well and make new connections. But how could we do that? Our guild only listed
                                        their own events in their calendar. If we wanted to see other guilds' events we had to search far and wide for
                                        all the information that was scattered around the Internet. We needed a better solution for seeing all the events
                                        on a single service.
                                </Typography>
                                <Typography m={2} fontWeight={'bold'} variant={'body1'}>
                                        So we came up with
                                </Typography>
                                <Box component={'img'} sx={AboutUsLogoStyle} src={logo} alt="logo"></Box>
                                <Typography variant={'body1'} m={2} >
                                        WhatsTheHaps? is a web service that combines the calendars of
                                        all Aalto guilds and shows a clear weekly
                                        calendar overview of all the different Guild events, showing the time of the event,
                                        location as well as by which guild the event is organized.
                                        With our service we aim to provide a clear overview of all guild events to provide
                                        a better experience to both guild organizers and students when organizing and
                                        signing up for events, thus offering students a better-quality student life at Aalto University.
                                </Typography>
                                <Typography m={2} mt={4} variant={'h5'}>About the creators</Typography>
                                <Typography m={2} mt={4} variant={'body1'}>
                                        Hi there! We are Noora and Anastasiia. Nice to meet you! Both of us are 2nd year MSc student, studying
                                        Software and Service engineering, TIK. Hope you'll enjoy this website.
                                </Typography>
                                <Grid container justifyContent={'center'}>
                                        <Box component={'img'} sx={AboutUsCreatorsImageStyle} src={us} alt="Noora and Anastasiia"></Box>
                                </Grid>
                                <Typography m={2} mt={4} variant={'body2'}>
                                        P.S. If you are an Electrical Engineering Student (SIK), we are sorry, there are no events of your guild for you here!
                                        You still wanna see your events? Ask your guild officials to finally make the google calendar. You are the only guild without one :(
                                </Typography>
                        </Box>
                </Grid>
        );
};

export default About;
