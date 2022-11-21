import  React, {useState, useEffect} from "react";
import Paper from "@mui/material/Paper";
import styled from 'styled-components'
import { ViewState } from "@devexpress/dx-react-scheduler";
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
import {
    Card,
    Table,
  } from "react-bootstrap";
  import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

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

const Nav = styled.h1`
font-size: 36px;
color: rgb(26, 26, 26);
font-weight: bold;
padding:30px;
margin: 4px 12px 8px;
`

const Navi = styled.h3`
display: flex;
margin-right: auto;
margin-left: auto;
position: relative;
font-weight: bold;
opacity: 0.5;
transition: 0.5s ease-out;

&:hover { 
  opacity:1;
  transition: 0.5s ease-out;
}
`;


const currentDate = '2022-11-16';
const locale = "pl-PL";

function refreshPage() {
  window.location.reload(false);
}
const CalendarEdit = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



const[data,setData]=useState([]);


   useEffect(() => {
    DataServices.getUsers().then((response) => {
        setData(response.data);
     });
   }, []);

      
      const deleteUsers = (id) =>{
        DataServices.deleteUser(id)
      }

  return (
      <div>
        <Navbar/>
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

<Navi style={{opacity:'1'}}>Dodaj nową Kartę Klienta</Navi><Navi><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"/CalendarEdit"}>
        Rezerwacje
</Link></Navi>
      <Card.Body>
              <Table bordered hover striped variant="dark">
                <thead>
                  <tr>
                    <td>L.p.</td>
                    <td>Imię</td>
                    <td>Nazwisko</td>
                    <td>Telefon</td>
                    <td>Email</td>
                    <td>Nr Karty Klienta</td>
                    <td>Usuń</td>
                  </tr>
                </thead>
                <tbody>
                  {data.length === 0 ? (
                    <tr align="center">
                      <td colSpan="6">No Users Available</td>
                    </tr>
                  ) : (
                    data.map((data, id) => (
                      <tr key={id}>
                        <td>
                          {data.first} {data.last}
                        </td>
                        <td>{data.imie}</td>
                        <td>{data.nazwisko}</td>
                        <td>{data.telefon}</td>
                        <td>{data.mail}</td>
                        <td>{data.nrKartyKlienta}</td>
                        <td><button onClick={() => {
                    refreshPage()
                    deleteUsers(data.id)
                    }}><DeleteIcon color="red"></DeleteIcon></button></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </Card.Body>
            

<h3>Zatwierdzeni klienci</h3>
           
        <Footer/>
      </div>
    );
  }
  


export default CalendarEdit