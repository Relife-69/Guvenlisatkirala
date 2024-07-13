import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 100px 0px;
  background-color: #eef1f9;
  gap: 50px;
`;

const RightContainer = styled.form`
  width: 570px;
  padding: 20px 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;

  @media (max-width: 700px) {
    width: 400px;
    padding: 20px 0px;
  }

  @media (max-width: 400px) {
    width: 280px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 700px) {
    width: 400px;
  }

  @media (max-width: 400px) {
    width: 280px;
  }
`;

const Heading = styled.h1`
  color: #7b2cbf;
  font-size: 28px;
  font-weight: 600;
  max-width: 300px;
  margin: 0%;
  font-family: Montserrat, sans-serif;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 600;
  max-width: 520px;
  margin: 0%;
  font-family: Montserrat, sans-serif;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 700px) {
    width: 360px;
  }
  @media (max-width: 700px) {
    width: 280px;
  }
`;

const Input = styled.input`
  width: 420px;
  height: 70px;
  padding: 0px 15px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
  border: 2px solid black;
  @media (max-width: 700px) {
    width: 360px;
  }

  @media (max-width: 400px) {
    width: 240px;
  }
`;

const Input0 = styled.div`
  max-width: 370px;
  padding: 10px;
  gap: 40px;
  display: flex;
  @media (max-width: 700px) {
    width: 360px;
  }

  @media (max-width: 400px) {
    width: 240px;
  }
`;

const Input1 = styled.textarea`
  width: 400px;
  min-height: 110px;
  padding: 25px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  border: 2px solid black;
  @media (max-width: 700px) {
    width: 340px;
  }

  @media (max-width: 400px) {
    width: 220px;
  }
`;

const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const Check = styled.input`
  width: 21px;
  height: 21px;
`;

const Label = styled.label`
  width: 350px;
  font-size: 14px;
  @media (max-width: 400px) {
    width: 270px;
  }
`;

const MapContainer = styled.div`
  width: 460px;
  height: 240px;
  overflow: hidden;
  @media (max-width: 700px) {
    width: 400px;
  }

  @media (max-width: 400px) {
    width: 280px;
  }
`;

const MapIframe = styled.iframe`
  width: 460px;
  height: 240px;
  border: none;
  @media (max-width: 700px) {
    width: 400px;
  }

  @media (max-width: 400px) {
    width: 280px;
  }
`;

const Icon = styled.img`
  width: 35px;
  height: 30px;
`;

const Contact = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0%;
`;

export {
  MainContainer,
  RightContainer,
  LeftContainer,
  Heading,
  Description,
  InputContainer,
  Input,
  Input1,
  Input0,
  MapContainer,
  CheckBox,
  Check,
  Label,
  Contact,
  Icon,
  MapIframe,
};
