import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
`;

const Announcement = () => {
  return <Container>Nie przegap naszych nowości! Obserwuj nas w mediach społecznościowych!</Container>;
};

export default Announcement;