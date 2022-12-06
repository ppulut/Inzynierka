import React from 'react'
import '../App.css';
import {Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components'



const PRICE = ({item}) => {

  const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
       setOpen(true);
     };
   
     const handleClose = () => {
       setOpen(false);
     };

  return (
<div class="koko">
    <div class="row">
      <div class="container-fluid bg-gradient p-5">
      <div class="col m-auto text-center w-75">
        
        <div class="col-auto princing-item red">
          <div class="pricing-divider ">
              <h3 class="text-light">{item.name}</h3>
            <h4 class="my-0 display-2 text-light font-weight-normal mb-3">{item.cena}<span class="h3">{item.waluta}</span></h4>
            <h5 class="text-light">{item.time}</h5>
             <svg class='pricing-divider-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsLink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
          </div>
          <div class="card-body bg-white mt-0 shadow">
            <ul class="list-unstyled mb-5 position-relative">
        <div class="imgdiv">
        <img alt='img' class="imggg" src={item.img}></img>
          </div>
            </ul>
            <button type="button" class="btn btn-lg btn-block  btn-custom " onClick={() => {
                        handleClickOpen()
                  
                        }}>Wybierz</button>
        
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Czy posiadasz Kartę Klienta?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Jeżeli nie posiadasz karty klienta wybierz pierwszą opcję, a podczas pierwszej wizyty będziesz mógł założyć Kartę Klienta z indywidualnym numerem, który wykorzystasz przy następnej rezerwacji
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Link to={"/Calendar2"} ><button type="button" class="btn btn-lg btn-block  btn-custom ">Nie posiadam karty</button></Link>
        <Link to={"/Calendar3"} ><button type="button" class="btn btn-lg btn-block  btn-custom ">Posiadam kartę</button></Link>
        </DialogActions>
      </Dialog>
          </div>
        </div>
        </div>  
      </div>
    </div>
</div>
    

  )
}

export default PRICE
