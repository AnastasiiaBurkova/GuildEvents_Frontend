import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import momentTimezonePlugin from "@fullcalendar/moment-timezone";
import { Grid } from '@mui/material';
import { guilds } from '../../data/Guilds';
import { EventPopup } from "../../components/EventPopup/EventPopup";
import Navbar from "../../components/Navbar/Navbar";
import { SearchBar } from "../../components/SearchBar/SearchBar";

const Month = () => {
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
  const startDateTimeQuery = `startDateTimeFrame=${getOneMonthFromNowEvents()}`;
  const endDateTimeQuery = `endDateTimeFrame=${getNext3MonthsEvents()}`;
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

  function getNext3MonthsEvents() {
    var date = new Date();
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    date.setMonth(date.getMonth() + 3);
    return date.toISOString();
  }

  function display3MonthsAfter() {
    const setTo1Day = new Date(setTo1DayOfMonth());
    setTo1Day.setMonth(setTo1Day.getMonth() + 3);
    return setTo1Day.toISOString();
  }

  function setTo1DayOfMonth() {
    const currentDate = new Date();
    const setTo1DayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    return setTo1DayOfMonth.toISOString();
  }

  function getOneMonthFromNowEvents() {
    var date = new Date();
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    date.setDate(date.getDate() - 31);
    return date.toISOString();
  }

  if (error) {
    return <h1> Oops.. something went wrong! </h1>;
  }

  return (
    <Grid justifyContent={'center'}>
      <Navbar />
      <Grid container direction={'row'} justifyContent={'end'}>
        <Grid item sx={{ minWidth: '40vh', m: 0.5 }}>
          <SearchBar guildOptions={guildOptions} setFiltered={setFiltered} response={response} />
        </Grid>
      </Grid>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          momentTimezonePlugin,
        ]}
        initialView="dayGridMonth"
        buttonText={{today:"TODAY"}}
        displayEventTime={false}
        firstDay={1}
        validRange={{
          start: setTo1DayOfMonth(),
          end: display3MonthsAfter(),
        }}
        fixedWeekCount={false}
        eventOverlap={false}
        events={filtered}
        height={"auto"}
        eventDisplay={"block"}
        dayMaxEvents={4}
        nowIndicator={true}
        eventClick={(e) => setOpenPopup({ isOpen: true, item: e })}
        timeZone="Europe/Helsinki"
      />
      <EventPopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
    </Grid>
  );
};

export default Month;

