import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({ btntype }) => {
    if (btntype === "Main") {
      return "#7B2CBF";
    }
    if (btntype === "Sec") {
      return "transparnt";
    }
    return "white";
  }};
  color: ${({ btntype }) => {
    if (btntype === "Main") {
      return "white";
    }
    if (btntype === "Sec") {
      return "white";
    }
    return "black";
  }};
  ${({ fb }) => {
    return (
      fb &&
      `
            width: 207px;
            height: 70px;
        `
    );
  }};
  ${({ sb }) => {
    return (
      sb &&
      `
            width: 450px;
            height: 70px;
            @media (max-width: 500px) {
    width: 300px;
  }
        `
    );
  }};
  ${({ tb }) => {
    return (
      tb &&
      `
            width: 200px;
            height: 60px;
        `
    );
  }};
  ${({ db }) => {
    return (
      db &&
      `
            width: 100px;
            height: 41px;
            border:  2px solid #7B2CBF;
        

        `
    );
  }};
  ${({ cb }) => {
    return (
      cb &&
      `
            width: 450px;
            height: 65px;
            border:none;
              @media (max-width: 400px) {
    width: 280px;
  }
        `
    );
  }};
  ${({ eb }) => {
    return (
      eb &&
      `
            width: 380px;
            height: 50px;
            border:none;
            font-size:14px;
        `
    );
  }};
  border-radius: 10px;
  font-size: 24px;
  font-weight: 700;
  @media (max-width: 500px) {
    max-width: 300px;
  }
  cursor: pointer;
`;
