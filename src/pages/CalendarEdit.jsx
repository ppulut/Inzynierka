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
import axios from "axios";

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




const currentDate = '2022-11-16';
const locale = "pl-PL";


const CalendarEdit = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



const[data,setData]=useState([])

  useEffect(() => {
    DataServices.getAllReservations().then((response) => {
      setData(response.data);
     });
   }, []);


    const deleteRes = (id) =>{
        DataServices.deleteReservation(id)
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

      <Card.Body>
              <Table bordered hover striped variant="dark">
                <thead>
                  <tr>
                    <td>L.p.</td>
                    <td>Nazwa</td>
                    <td>Email</td>
                    <td>Telefon</td>
                    <td>Data rozpoczęcia</td>
                    <td>Data zakończenia</td>
                    <td>Dodatkowy opis</td>
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
                        <td>{data.title}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.startDate}</td>
                        <td>{data.endDate}</td>
                        <td>{data.desc}</td>
                        <td><button onClick={() => {
                    deleteRes(data.id)
                    }}><DeleteIcon color="red"></DeleteIcon></button></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </Card.Body>
        <Footer/>
      </div>
    );
  }
  


export default CalendarEdit