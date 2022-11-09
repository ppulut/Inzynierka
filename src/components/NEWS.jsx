import MailchimpSubscribe from "react-mailchimp-subscribe"
import styled from "styled-components";
import { mobile } from "../responsive";
import { Send } from "@mui/icons-material";

const url = "https://wp.us10.list-manage.com/subscribe/post?u=fc5ddd29718ff4112df7e4760&amp;id=4c0275edea&amp;f_id=005337e2f0";

// simplest form (only email)


const CustomForm = ({ subscribe, status, message, onValidated  }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });
  return (
    <Container>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      <Title>Newsletter</Title>
      <Desc>Otrzymuj informacje o nowej ofercie!</Desc>
      <InputContainer>
      <Input 
        placeholder="Twój email"
        ref={node => (email = node)}
        type="email"
        required
        />
        <Button onClick={submit}>
        Wyślij <Send/>
      </Button>
        </InputContainer>
    </Container>
  );
};


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

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "100%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

// use the render prop and your custom form
const NEWS = () => (
  <Container>
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <CustomForm
        status={status}
        message={message}
        onValidated={formData => subscribe(formData)}
      />
    )}
  />
  </Container>
)

export default NEWS;