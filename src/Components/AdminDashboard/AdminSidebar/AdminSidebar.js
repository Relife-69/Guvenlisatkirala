import React, { useState } from "react";
import {
  MainContainer,
  ListContainer,
  List2Container,
  List,
  DragDown,
} from "./StyledAdminSidebar";
import { FaArrowRight } from "react-icons/fa";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { LiaAdSolid } from "react-icons/lia";

const AdminSidebar = ({ showSideBar }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <MainContainer showSideBar={showSideBar}>
      <Link to="/adminhome">
        <ListContainer>
          <PiTelevisionSimpleDuotone />
          Gösterge Paneli
        </ListContainer>
      </Link>
      <Link to="/approvedlwayer">
        <ListContainer>
          <IoIosPeople />
          Üyeler Yetkilendir
        </ListContainer>
      </Link>
      <Link to="/adminads">
        <ListContainer>
          <LiaAdSolid />
          Listelenen Reklamlar
        </ListContainer>
      </Link>
      <Link to="/adminpass">
        <ListContainer>
          <MdPerson />
          Şifre değiştir
        </ListContainer>
      </Link>
      <ListContainer>
        <FaPeopleRoof />
        Users
        <DragDown>
          <IoIosArrowDown onClick={() => toggleMenu("Users")} />
        </DragDown>
      </ListContainer>
      <List2Container showMenu={openMenu === "Users"}>
        <Link to="/lawyerlist">
          <List>
            <FaArrowRight />
            <MdPerson />
            Onaylı Avukat Listesi
          </List>
        </Link>
        <Link to="/userlist">
          <List>
            <FaArrowRight />
            <MdPerson />
            Standart Kullanıcı Listesi
          </List>
        </Link>
        <Link to="/frontenduser">
          <List>
            <FaArrowRight />
            <MdPerson />
            Ön Uç Yöneticisi
          </List>
        </Link>
        <Link to="/listinguser">
          <List>
            <FaArrowRight />
            <MdPerson />
            İlan Yöneticisi
          </List>
        </Link>
        <Link to="/partner">
          <List>
            <FaArrowRight />
            <MdPerson />
            Küçük partner
          </List>
        </Link>
        <Link to="/developeruser">
          <List>
            <FaArrowRight />
            <MdPerson />
            Geliştirici
          </List>
        </Link>
        <Link to="/workeruser">
          <List>
            <FaArrowRight />
            <MdPerson />
            Çalışan
          </List>
        </Link>
      </List2Container>
    </MainContainer>
  );
};

export default AdminSidebar;
