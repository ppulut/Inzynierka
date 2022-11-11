import  React, {useState} from "react";
import emailjs from "emailjs-com";
//import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import styled from 'styled-components'
//import TextField from "@mui/material/TextField";
//import MenuItem from "@mui/material/MenuItem";
//import moment from 'moment';
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { appointments } from '../demo-data/appointments';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Button = styled.button`
width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
border: none;
border-radius:50px;
background-color: lightpink;
color: white;
cursor: pointer;
`

function sendEmail(e) {
  e.preventDefault();

emailjs.sendForm('newsMail', 'newsletter', e.target, 'QpiP834qyGnlzJa9L')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
}


const Nav = styled.h1`
font-size: 36px;
color: rgb(26, 26, 26);
font-weight: bold;
padding:30px;
margin: 4px 12px 8px;
`

const allDayLocalizationMessages = {
  "pl-PL": {
    allDay: "Cały dzień"
  },
  /*"en-US": {
    allDay: "All Day"
  }*/
};


/*
const StyledWeekViewDayScaleCell = styled(WeekView.DayScaleCell)({
    [`&.${classes.dayScaleCell}`]: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  });
  
  const formatDayScaleDate = (date, options) => {
    const momentDate = moment(date);
    const { weekday } = options;
    return momentDate.format(weekday ? 'dddd' : 'D');
  };
  const formatTimeScaleDate = date => moment(date).format('hh:mm');
  
  const DayScaleCell = ((
    { formatDate, ...restProps },
  ) => (
    <StyledWeekViewDayScaleCell
      {...restProps}
      formatDate={formatDayScaleDate}
      className={classes.dayScaleCell}
    />
  ));
  const TimeScaleLabel = (
    { formatDate, ...restProps },
  ) => <WeekView.TimeScaleLabel {...restProps} formatDate={formatTimeScaleDate} />;

*/
/*const LocaleSwitcher = ({ onLocaleChange, currentLocale }) => (
  <StyledDiv className={classes.container}>
    <div className={classes.text}>Locale:</div>
    <TextField
      select
      variant="standard"
      value={currentLocale}
      onChange={onLocaleChange}
    >
    </TextField>
  </StyledDiv>
);*/

const data = appointments;
const currentDate = '2022-11-10';
const locale = "pl-PL";


const CALENDAR2 = () => {

const[name,setName]=useState('')
const[email,setEmail]=useState('')
const[phone,setPhone]=useState('')
const[startDate,setStartDate]=useState('')
const[endDate,setEndDate]=useState('')
const[desc,setDesc]=useState('')
const [show, setShow] = useState(false);

const handleClick=(e)=>{
  e.preventDefault()
  const user={name, email, phone, startDate, endDate, desc}
  console.log(user)

fetch("http://localhost:8080/reservations/add",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(user)

}).then((confirm)=>{
  console.log("New reservation added")
  setShow(true);
})
}



  return (
      <div>
        <Navbar/>
        <Nav>Wybierz interesujący Cię termin spośród dostępnych poniżej</Nav>
        <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Imię" name="name" required  
                            value={name}
                            onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email" name="email" required  
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Nr telefonu" name="subject" required 
                             value={phone}
                             onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="datetime-local" className="form-control" placeholder="Data rozpoczęcia" name="subject" required 
                             value={startDate}
                             onChange={(e)=>setStartDate(e.target.value)}/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="datetime-local" className="form-control" placeholder="Data zakończenia" name="subject" required 
                             value={endDate}
                             onChange={(e)=>setEndDate(e.target.value)}/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Dodatkowe uwagi" name="message"
                            value={desc}
                            onChange={(e)=>setDesc(e.target.value)}></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                        <Button variant="success" onClick={handleClick}>Wyślij</Button>
                        </div>
                    </div>
                </form>
            </div>


        <Paper>
        <Scheduler
          data={data}
          locale={locale}
          height={660}
        >
          <ViewState defaultCurrentDate={currentDate}/>
            <Toolbar />
            <DateNavigator />
          <WeekView
            startDayHour={9}
            endDayHour={19}
          />
          <Appointments />
        </Scheduler>
      </Paper>
        <Footer/>
      </div>
    );
  }
  


export default CALENDAR2