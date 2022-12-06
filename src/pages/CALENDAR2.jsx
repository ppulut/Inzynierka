import  React, {useState, useEffect} from "react";
import emailjs from "emailjs-com";
import Paper from "@mui/material/Paper";
import styled from 'styled-components'
import { useNavigate, Link } from "react-router-dom";
import Select from 'react-select'
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DataServices from '../services/DataServices';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { reservationMail } from '../components/MailValid'
import { useFormik } from 'formik';

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


const currentDate = '2022-12-07';
const locale = "pl-PL";

function refreshPage() {
  window.location.reload(false);
}



const CALENDAR2 = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const {values, errors, handleBlur, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
        email2: "",
        phone: "",
    },
    validationSchema: reservationMail,
    
  });


const[title,setTitle]=useState('')
const[name,setName]=useState('')
const[surname,setSurname]=useState('')
const[email,setEmail]=useState('')
const[phone,setPhone]=useState('')
const[startDate,setStartDate]=useState('')
const[endDate,setEndDate]=useState('')
const[desc,setDesc]=useState('')
const [show, setShow] = useState(false);

const handleClick=(e)=>{
  const user={title, name, surname, email, phone, startDate, endDate, desc}
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


const[data,setData]=useState([])

  useEffect(() => {
    DataServices.getAllReservations().then((response) => {
      setData(response.data);
     });
   }, []);

   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
       setOpen(true);
     };
   
     const handleClose = () => {
       setOpen(false);
     };

     const options = [
      { value: 'Manicure klasyczny', label: 'Manicure klasyczny'},
      { value: 'Manicure japoński', label: 'Manicure japoński' },
      { value: 'Manicure hybrydowy', label: 'Manicure hybrydowy' },
      { value: 'Manicure żelowy', label: 'Manicure żelowy' },
      { value: 'Parafinowanie dłoni ', label: 'Parafinowanie dłoni ' },
      { value: 'Masaż dłoni na peelingu ', label: 'Masaż dłoni na peelingu ' },
      { value: 'Regeneracja dłoni ', label: 'Regeneracja dłoni ' },
      { value: 'Usunięcie stylizacji ', label: 'Usunięcie stylizacji ' },
      { value: 'Geometria i regulacja brwi ', label: 'Geometria i regulacja brwi ' },
      { value: 'Geometria, regulacja i farbka brwi ', label: 'Geometria, regulacja i farbka brwi ' },
      { value: 'Laminacja, geometria, regulacja i farbka brwi ', label: 'Laminacja, geometria, regulacja i farbka brwi ' },
      { value: 'Przedłużenie pojedynczego paznokcia bazą budującą/żelem ', label: 'Przedłużenie pojedynczego paznokcia bazą budującą/żelem ' },
    ]
 

  return (
      <div>
        <Navbar/>
        <Nav>Wybierz interesujący Cię termin spośród dostępnych poniżej</Nav>
        <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                        <select 
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        className="form-control">
                        {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                          ))}
                        </select>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Imię" name="name" required  
                            value={name}
                            onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Nazwisko" name="surname" required  
                            value={surname}
                            onChange={(e)=>setSurname(e.target.value)}/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email2"
                            className={`form-control ${errors.email2 && touched.email2 ? "invalid" : ""}`}
                            value={values.email2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="email2"
                            name="email2"
                            placeholder='Podaj e-mail'
                            />
                            {errors.email2 && touched.email2 &&
                                    <small name="email" className="text-danger">{errors.email2}</small>
                            }
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email"
                            className='form-control'
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder='Powtórz e-mail'
                            />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" maxlength="9" className="form-control"
                            placeholder="Nr telefonu" name="subject" required 
                            value={phone}
                            onBlur={handleBlur}
                            onChange={(e)=>setPhone(e.target.value)}/>
                            
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="datetime-local" className="form-control" placeholder="Data rozpoczęcia" name="subject" required 
                             value={startDate}
                             min="2022-11-15T09:00" max="2023-06-14T18:00"
                             onChange={(e)=>setStartDate(e.target.value)}/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="datetime-local" className="form-control" placeholder="Data zakończenia" name="subject" required 
                             value={endDate} 
                             min="2022-11-15T09:00" max="2023-06-14T18:00"
                             onChange={(e)=>setEndDate(e.target.value)}/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Dodatkowe uwagi" name="message"
                            value={desc}
                            onChange={(e)=>setDesc(e.target.value)}></textarea>
                        </div>
                        <div>
                          <input type="checkbox" style={{margin:"30px 10px 0px 220px"}} required/>
                          Akceptuje <b><Link to={`/Regulamin`}>regulamin</Link> </b>*
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                        <Button type="submit" variant="success" 
                        onClick={() => {
                        if(errors.email2 && touched.email2 == true){  
                        handleClose()
                        }
                        else{
                          handleClickOpen()
                        }
                        }}>Wyślij
                        </Button>
                        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Czy potwierdzasz swój wybór?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Jeżeli pola nie zostały poprawnie uzupełnione rezerwacja zostanie usunięta!   
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={() => {
                        handleClose()
                        }} autoFocus>
            POWRÓT
          </Button>
          <Button onClick={() => {
            handleClose()
            setEmail(values.email)
            refreshPage()
                        handleClick()
                        sendEmail()
                        }} autoFocus>
            WYŚLIJ
          </Button>
        </DialogActions>
      </Dialog>
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