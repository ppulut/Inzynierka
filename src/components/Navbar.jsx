import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 60px;
    background-color: #EDE4EE;
`;

const Wrapper = styled.div`
    padding: 10px 20px
    display: flex;
    justify-content: space-between;
`;
const Center = styled.div`
    
`;


const Right = styled.div`

`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Center>center</Center>
            <Right>prawo</Right>
            </Wrapper>
        </Container>
  )
}

export default Navbar