import  React, {useState, useEffect} from "react";
import styled from 'styled-components'
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


function refreshPage() {
  window.location.reload(false);
}
const BlackList = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const[cardNumber,setCardNumber]=useState('')
  const[name,setName]=useState('')
  const[surname,setSurname]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const [show, setShow] = useState(false);
  
  const handleClick=(e)=>{
    const user={cardNumber, name, surname, phone, email}
    console.log(user)
  
  fetch("http://localhost:8080/blacklist/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
  
  }).then((confirm)=>{
    console.log("New user added")
    setShow(true);
  })
  }

const[data,setData]=useState([]);


   useEffect(() => {
    DataServices.getBlackList().then((response) => {
        setData(response.data);
     });
   }, []);

      
      const deleteBLUser = (id) =>{
        DataServices.deleteBlackListUser(id)
      }

  return (
      <div>
        <Navbar/>
        <h3>Klienci na czarnej liście</h3>
<div>
<div className="container">
            <form>
                    <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Numer Karty Klienta" name="cardId" required  
                            value={cardNumber}
                            onChange={(e)=>setCardNumber(e.target.value)}/>
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
                            <input type="email" className="form-control" placeholder="Email" name="email" required  
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Nr telefonu" name="subject" required 
                             value={phone}
                             onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                        <Button type="button" variant="success" 
                        onClick={() => {
                            refreshPage()
                          handleClick()
                        }}>Wyślij
                        </Button>
                        </div>
                    </div>
                </form>
            </div>
            </div>


<Navi><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"/CalendarEdit"}>
        Rezerwacje</Link></Navi>
<Navi><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"/NewCard"}>
        Dodaj nową Kartę Klienta</Link></Navi>
<Navi style={{opacity:'1'}}>Czarna lista klientów</Navi>

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
                        <td>{data.name}</td>
                        <td>{data.surname}</td>
                        <td>{data.phone}</td>
                        <td>{data.email}</td>
                        <td>{data.cardNumber}</td>
                        <td><button onClick={() => {
                    refreshPage()
                    deleteBLUser(data.id)
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
  


export default BlackList