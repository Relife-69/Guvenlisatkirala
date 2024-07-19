import React, { useState } from "react";
import {
  MainContainer,
  ListContainer,
  List2Container,
  List,
  DragDown,
} from "./StyledLawyerSidebar";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { BsChatHeart } from "react-icons/bs";
import { TiGroup } from "react-icons/ti";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { TbScript } from "react-icons/tb";
const LawyerSidebar = ({ showSideBar }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  return (
    <MainContainer showSideBar={showSideBar}>
      <Link to="/">
        <ListContainer>
          <FaHome />
          Ev
        </ListContainer>
      </Link>
      <Link>
        <ListContainer>
          <Link to="/allads">
            <IoPerson />
            Vekaletname İlanları
          </Link>
          <DragDown>
            <IoIosArrowDown
              onClick={() => toggleMenu("Vekaletname İlanları")}
            />
          </DragDown>
        </ListContainer>
      </Link>
      <List2Container showMenu={openMenu === "Vekaletname İlanları"}>
        <Link to="/lawyeractiveads">
          <List>
            <FaArrowRight /> Aktif İlanlar
          </List>
        </Link>
        <Link to="/lawyerinactiveads">
          <List>
            <FaArrowRight />
            Pasif İlanlar
          </List>
        </Link>
        <Link to="/lawyerexpireads">
          <List>
            <FaArrowRight />
            Süresi Dolan İlanlar
          </List>
        </Link>
        <Link to="/lawyerdraftads">
          <List>
            <FaArrowRight />
            Taslak İlanlar
          </List>
        </Link>
        <Link to="/lawyerdeletedads">
          <List>
            <FaArrowRight />
            Silinen İlanlar
          </List>
        </Link>
      </List2Container>
      <Link to="/approved">
        <ListContainer>
          <FaRegCheckCircle />
          Onaylı İlanlar
        </ListContainer>
      </Link>
      <Link to="/papers">
        <ListContainer>
          <TbScript />
          Sözleşmeler
        </ListContainer>
      </Link>
      <Link to="/clients">
        <ListContainer>
          <TiGroup />
          Vekalet Veren Üyeler
        </ListContainer>
      </Link>
      <Link to="/chats">
        <ListContainer>
          <BsChatHeart />
          Mesajlar
        </ListContainer>
      </Link>
      <Link>
        <ListContainer onClick={() => toggleMenu("Üyeliğim")}>
          <CgProfile />
          Üyeliğim
          <DragDown>
            <IoIosArrowDown />
          </DragDown>
        </ListContainer>
        <List2Container showMenu={openMenu === "Üyeliğim"}>
          <Link to="/Lprofile">
            <List>
              <FaArrowRight /> Üyelik Bilgileri
            </List>
          </Link>
          <Link to="/lawyerpassword">
            <List>
              <FaArrowRight />
              Şifre değiştir
            </List>
          </Link>
          <Link to="/">
            <List>
              <FaArrowRight />
              Üyelik Paketlerim
            </List>
          </Link>
          <Link to="/">
            <List>
              <FaArrowRight />
              Ödemelerim
            </List>
          </Link>
        </List2Container>
      </Link>
    </MainContainer>
  );
};

export default LawyerSidebar;
