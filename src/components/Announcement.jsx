import styled from "styled-components";
import { mobile } from '../responsive';
const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  ${mobile({ flexDirection: "column" })}
`;

const Announcement = () => {
  return <Container>Nie przegap naszych nowości! Obserwuj nas w mediach społecznościowych!</Container>;
};

export default Announcement;