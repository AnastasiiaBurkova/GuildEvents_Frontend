import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import momentTimezonePlugin from "@fullcalendar/moment-timezone";
import { guilds } from '../../data/Guilds';
import { Grid } from '@mui/material';
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { EventPopup } from "../../components/EventPopup/EventPopup";
import Navbar from "../../components/Navbar/Navbar";
import '../pages.css';

const Week = () => {
  const [error, setError] = React.useState(false);
  const [response, setResponse] = React.useState([]);
  const [filtered, setFiltered] = React.useState([]);
  const [openPopup, setOpenPopup] = React.useState({ isOpen: false, item: null });

  const guildOptions = [
    { value: "AS", label: "AS" },
    { value: "AK", label: "AK" },
    { value: "Athene", label: "Athene" },
    { value: "IK", label: "IK" },
    { value: "Inkubio", label: "Inkubio" },
    { value: "KIK", label: "KIK" },
    { value: "MK", label: "MK" },
    { value: "PJK", label: "PJK" },
    { value: "PT", label: "PT" },
    { value: "TIK", label: "TIK" },
    { value: "TF", label: "TF" },
    { value: "Prodeko", label: "Prodeko" },
    { value: "FK", label: "FK" },
  ];

  const guildQuery = guilds.map((g) => `guildNames=${g}`).join("&");
  const startDateTimeQuery = `startDateTimeFrame=${get10DaysFromNowEvents()}`;
  const endDateTimeQuery = `endDateTimeFrame=${getNext4MonthsEvents()}`;
  async function fetchData() {
    try {
      await Promise.all([
        await fetch(
          `https://apim-whatsthehaps.azure-api.net/v1/events?${guildQuery}&${startDateTimeQuery}&${endDateTimeQuery}`,
          {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            var dataString = JSON.stringify(data.response);
            var result = JSON.parse(dataString);
            var array = [];
            for (let i of result) {
              array = array.concat(Object.values(i)[0]);
            }
            setResponse(array);
            setFiltered(array);
          }),
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

  function get10DaysFromNowEvents() {
    var date = new Date();
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    date.setDate(date.getDate() - 10);
    return date.toISOString();
  }

  function setToMonday(date) {
    var day = date.getDay() || 7;
    if (day !== 1) date.setHours(-24 * (day - 1));
    return date;
  }

  if (error) {
    return <h1> Oops.. something went wrong! </h1>;
  }

  return (
    <Grid>
      <Navbar />
      <Grid container direction={'row'} justifyContent={'end'}>
        <Grid item sx={{ minWidth: '40vh', m: 0.5 }}>
          <SearchBar guildOptions={guildOptions} setFiltered={setFiltered} response={response} />
        </Grid>
      </Grid>
      <FullCalendar
        headerToolbar={{ start: "title", end: "today prev,next" }}
        buttonText={{today:"TODAY"}}
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          momentTimezonePlugin,
        ]}
        initialView="timeGridWeek"
        slotMinTime={"08:00:00"}
        slotMaxTime={"24:00:00"}
        eventTimeFormat={{ hour: "2-digit", minute: "2-digit", hour12: false }}
        eventMinHeight="50"
        dayMaxEventRows={3}
        firstDay={1}
        weekNumbers={true}
        weekText={"Week"}
        dayHeaderFormat={{ weekday: "short", day: "numeric", month: "numeric" }}
        validRange={{
          start: setToMonday(new Date()),
          end: setToMonday(new Date(getNext4MonthsEvents())).toISOString(),
        }}
        eventOverlap={false}
        contentHeight={"auto"}
        dayHeaderClassNames={"weekDay"}
        events={filtered}
        eventDisplay={"block"}
        nowIndicator={true}
        eventClick={(e) => setOpenPopup({ isOpen: true, item: e })}
        timeZone="Europe/Helsinki"
      />
      <EventPopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
    </Grid>
  );
};

export default Week;
