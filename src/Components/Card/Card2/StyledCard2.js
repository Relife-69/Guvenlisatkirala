import styled from "styled-components";

const CardContainer = styled.div`
  width: 388px;
  padding: 34px 25px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
  background-color: white;
  @media (max-width: 500px) {
    padding: 34px 15px;
    width: 260px;
  }
`;

const Picture = styled.img`
  width: 40%;
  height: 100%;
`;

const Decription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  margin: 0%;
`;

const ReadMore = styled.a`
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0%;
  color: red;
  text-transform: uppercase;
  text-decoration: none;
`;

export { CardContainer, Picture, Decription, ReadMore };
