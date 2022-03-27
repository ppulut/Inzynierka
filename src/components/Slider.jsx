import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from "styled-components"


const Conatiner = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #F9C5FF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Slider = () => {
  return (
    <Conatiner>
        <Arrow>
            <ArrowLeftOutlined/>
        </Arrow>
        <Arrow>
            <ArrowRightOutlined/>
        </Arrow>

    </Conatiner>
  )
}

export default Slider