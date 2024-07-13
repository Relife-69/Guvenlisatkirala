import styled from "styled-components";

const MainFooter = styled.div`
  display: flex;
  background-color: #eef1f9;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 900px) {
  }
`;

const LogoContaienr = styled.div`
  max-width: 100px;
`;

const Logo = styled.img`
  max-width: 100px;
`;

const MenuContainer = styled.div``;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  gap: 15px;
  flex-direction: column;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0%;
  }
`;
const List = styled.li``;
const FLink = styled.a`
  a {
    text-decoration: none;
    font-style: lato;
    color: black;
    font-size: 14px;
    font-weight: 600;
    @media (max-width: 700px) {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    }
  }
`;
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;

const Socail = styled.img``;
const SocailLink = styled.a``;
const MenuHeading = styled.div`
  color: #7b2cbf;
  font-size: 20px;
  font-weight: 600;
`;
export {
  SocailLink,
  MainFooter,
  Logo,
  LogoContaienr,
  MenuContainer,
  Menu,
  List,
  FLink,
  SocialContainer,
  Socail,
  MenuHeading,
};
