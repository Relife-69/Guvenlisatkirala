import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
`;
const LogoContainer = styled.div`
  width: 338px;
  height: 80px;
  display: flex;
  background-color: #7b2cbf;
  align-items: center;
  justify-content: space-around;
  color: white;
`;
const Logo = styled.img`
  width: 100px;
  height: 70px;
  @media (max-width: 400px) {
    display: none;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  gap: 30px;
  padding: 0px 30px;
`;
const SearchContainer = styled.div`
  width: 360px;
  height: 40px;
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;
  align-items: center;
  border-radius: 8px;
  border: none;
  @media (max-width: 800px) {
    display: none;
  }
`;
const SearchBar = styled.input`
  font-size: 12px;
  font-weight: 300;
  width: 300px;
  appearance: none;
  background-color: #f0f0f0;
  border: none;
  padding: 10px 20px;
  &:focus {
    border: 0px;
    appearance: none;
    outline: none;
  }
  &:active {
    border: 0px;
    appearance: none;
    outline: none;
  }
`;
const SearchButton = styled.button`
  width: 50px;
  height: 40px;
  font-size: 18px;
  background-color: #9d4edd;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 0px 8px 8px 0px;
  border: none;
`;
const BellIcon = styled.div`
  font-size: 30px;
  cursor: pointer;
`;
const AdminIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
const Humburger = styled.div`
  font-size: 60px;
  color: white;
  display: none;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const UserMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    margin-left: 8px;
  }
`;

export const DropdownMenu = styled.div`
  display: ${({ showDropdown }) => (showDropdown ? "block" : "none")};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 160px;
  overflow: hidden;
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }
`;
export {
  Header,
  LogoContainer,
  Logo,
  RightContainer,
  SearchContainer,
  SearchBar,
  SearchButton,
  BellIcon,
  AdminIcon,
  Humburger,
};
