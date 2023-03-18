import React from 'react';
import { Typography, Grid } from '@mui/material';
import { TermsStyle } from './TermsStyle';

const Terms = () => {
        return (
                <Grid sx={TermsStyle}>
                        <Typography variant="h4" m={2}>Terms and conditions</Typography>
                        <Typography>
                                WhatsTheHaps? Nonprofit web service that provides structured overview of all guild events at Aalto University. Retrieves all event data directly from the guilds’ calendars and isn't directly responsible for the correctness of any information. Please verify the information about event times and locations from the guild officials or organizers.
                                Some third-party services used by WhatsTheHaps use cookies to collect anonymous data. By using WhatsTheHaps you agree to the usage of cookies.
                        </Typography>
                </Grid>
        );
};

export default Terms;
