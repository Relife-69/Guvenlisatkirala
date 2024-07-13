import styled from "styled-components";

const MainContainer = styled.div`
  width: 340px;
  display: flex;
  height: 150vh;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-top: 30px;
  gap: 30px;
  background-color: white;
  @media (max-width: 800px) {
    display: ${({ showSideBar }) => (showSideBar ? "flex" : "none")};
    position: absolute;
  }
  @media (max-width: 350px) {
    width: 300px;
  }
`;

const ListContainer = styled.div`
  width: 280px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 18px;
  font-weight: 500;
  margin: 0%;
  gap: 10px;
  padding-left: 60px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: #7b2cbf;
    color: white;
  }
  & > a {
    text-decoration: none;
  }
  @media (max-width: 350px) {
    width: 280px;
    padding-left: 20px;
  }
`;

const List2Container = styled.div`
  display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const List = styled.div`
  width: 270px;
  min-height: 50px;
  padding-left: 70px;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin: 0%;
  gap: 10px;
  color: black;
  &:hover {
    background-color: #7b2cbf;
    color: white;
    a {
      color: white;
    }
  }
  & > a {
    text-decoration: none;
  }
`;
const DragDown = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

export { MainContainer, ListContainer, List2Container, List, DragDown };
