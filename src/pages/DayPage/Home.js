import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import momentTimezonePlugin from '@fullcalendar/moment-timezone';
import { Grid } from '@mui/material';
import { EventPopup } from "../../components/EventPopup/EventPopup";
import Navbar from "../../components/Navbar/Navbar";
import { guilds } from '../../data/Guilds';

const Home = () => {

  const [error, setError] = React.useState(false);
  const [response, setResponse] = React.useState([]);
  const [openPopup, setOpenPopup] = React.useState({ isOpen: false, item: null });

  async function fetchData() {
    var date = new Date();
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    try {
      const guildQuery = guilds.map(g => `guildNames=${g}`).join('&');
      const startDateTimeQuery = `startDateTimeFrame=${date.toISOString()}`;
      const endDateTimeQuery = `endDateTimeFrame=${getNext4MonthsEvents()}`;
      await Promise.all([
        (
          await fetch(`https://apim-whatsthehaps.azure-api.net/v1/events?${guildQuery}&${startDateTimeQuery}&${endDateTimeQuery}`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          }).then((res) => res.json())
            .then((data) => {
              var dataString = JSON.stringify(data.response);
              var result = JSON.parse(dataString);

              setResponse(result);
            }))
      ]);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getNext4MonthsEvents() {
    var date = new Date();
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    date.setMonth(date.getMonth() + 4);
    return date.toISOString();
  }

  if (error) {
    return (
      <h1> Oops.. something went wrong! </h1>
    )
  }

  return (
    <Grid>
      <Navbar />
      <Grid container justifyContent={'center'} spacing={2}>
        {response.length > 0 && response.map((list) => (
          <Grid item lg={4} sm={12} md={6} justifyContent={'center'} key={Object.keys(list)[0]}>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, momentTimezonePlugin]}
              initialView="timeGridDay"
              contentHeight={"auto"}
              buttonText={{today:"TODAY"}}
              validRange={{
                start: new Date(),
                end: getNext4MonthsEvents()
              }}
              eventTimeFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
              dayHeaderContent={Object.keys(list)[0]}
              dayHeaderClassNames={"guild-name " + Object.keys(list)[0]}
              slotMinTime={"08:00:00"}
              slotMaxTime={"24:00:00"}
              key={Object.keys(list)[0]}
              events={Object.values(list)[0]}
              eventColor={list.color}
              nowIndicator
              eventClick={(e) => setOpenPopup({ isOpen: true, item: e })}
              timeZone="Europe/Helsinki"
            />
          </Grid>
        ))}
        <EventPopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
      </Grid>
    </Grid>
  );
};

export default Home;
