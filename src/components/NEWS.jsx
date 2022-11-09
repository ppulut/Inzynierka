import MailchimpSubscribe from "react-mailchimp-subscribe"
import styled from "styled-components";
import { mobile } from "../responsive";

const url = "https://wp.us10.list-manage.com/subscribe/post?u=fc5ddd29718ff4112df7e4760&amp;id=4c0275edea&amp;f_id=005337e2f0";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

const Container = styled.div`
  height: 60vh;
  width:100vw;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ width: "100%" })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;


// use the render prop and your custom form
const NEWS = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <Container>
         <Title>Newsletter</Title>
      <Desc>Otrzymuj informacje o nowej ofercie!</Desc>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </Container>
    )}
  />
)

export default NEWS;