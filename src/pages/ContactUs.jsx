import emailjs from "emailjs-com";
import React from 'react';
import Navbar from "../components/Navbar";
import '../App.css';
import Footer from "../components/Footer";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components'

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
margin: 4px 12px 8px

`

const ContactUs = () => {

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


    const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    return(
        <div>
            <Navbar/>
            <Nav>Formularz kontaktowy</Nav>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Imię" name="name" required />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email" name="email" required />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Temat" name="subject" required />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Twoja wiadomość" name="message" required ></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                        <Button type="submit" variant="success" 
                        onClick={() => {
                            handleClickOpen()
                            }}>Wyślij
                        </Button>
                        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Jeżeli wszystkie pola nie zostały uzupełnione mail nie zostanie wysłany!          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>POWRÓT</Button>
          <Button  onClick={() => {
                            handleClose()
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
            <Footer/>
        </div>
    )
    }
  export default ContactUs