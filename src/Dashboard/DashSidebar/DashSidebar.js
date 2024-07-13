import React, { useState } from "react";
import {
  MainContainer,
  ListContainer,
  List2Container,
  List,
  DragDown,
} from "./StyledDashSaidebar";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { BsChatHeart } from "react-icons/bs";
import { GiShop } from "react-icons/gi";
import { LuFileSignature } from "react-icons/lu";
import { GiMonkFace } from "react-icons/gi";
import { FcPortraitMode } from "react-icons/fc";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineAdsClick } from "react-icons/md";

const DashSidebar = ({ showSideBar }) => {
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
      <Link to="/allad">
        <ListContainer>
          <MdOutlineAdsClick />
          İlanlarım
          <DragDown>
            <IoIosArrowDown onClick={() => toggleMenu("İlanlarım")} />
          </DragDown>
        </ListContainer>
      </Link>
      <List2Container showMenu={openMenu === "İlanlarım"}>
        <Link to="/activeads">
          <List>
            <FaArrowRight /> Aktif Reklamlar
          </List>
        </Link>
        <Link to="/inactiveads">
          <List>
            <FaArrowRight />
            Pasif Reklamlar
          </List>
        </Link>
        <Link to="/expireads">
          <List>
            <FaArrowRight />
            Reklamların Süresi Doldu
          </List>
        </Link>
        <Link to="/draftads">
          <List>
            <FaArrowRight />
            Taslak Reklamlar
          </List>
        </Link>
        <Link to="/deleteads">
          <List>
            <FaArrowRight />
            Reklamları Sil
          </List>
        </Link>
      </List2Container>
      <Link>
        <ListContainer>
          <GiShop />
          Vitrin Paketleri
          <DragDown>
            <IoIosArrowDown onClick={() => toggleMenu("Vitrin Paketleri")} />
          </DragDown>
        </ListContainer>
      </Link>
      <List2Container showMenu={openMenu === "Vitrin Paketleri"}>
        <Link>
          <List>
            <FaArrowRight />
            Reklamlarımı Vurgula Benzerlikleri Arasında
          </List>
        </Link>
        <Link>
          <List>
            <FaArrowRight />
            Reklamımı Göster Ana Sayfa
          </List>
        </Link>
      </List2Container>
      <Link>
        <ListContainer>
          <BsChatHeart />
          Favoriler ve Mesajlar
          <DragDown>
            <IoIosArrowDown
              onClick={() => toggleMenu("Favoriler ve Mesajlar")}
            />
          </DragDown>
        </ListContainer>
      </Link>
      <List2Container showMenu={openMenu === "Favoriler ve Mesajlar"}>
        <Link to="/favourite">
          <List>
            <FaArrowRight />
            Favori Reklamlar
          </List>
        </Link>
        <Link>
          <List>
            <FaArrowRight />
            Mesajlar
          </List>
        </Link>
      </List2Container>
      <Link>
        <ListContainer>
          <LuFileSignature />
          Raporlarım
        </ListContainer>
      </Link>
      <Link to="/authorizedlawyer">
        <ListContainer>
          <FcPortraitMode />
          Yetki Verdiğim Avukatlar
        </ListContainer>
      </Link>
      <Link>
        <ListContainer>
          <GiMonkFace />
          Üyeliğim
          <DragDown>
            <IoIosArrowDown onClick={() => toggleMenu("Üyeliğim")} />
          </DragDown>
        </ListContainer>
      </Link>
      <List2Container showMenu={openMenu === "Üyeliğim"}>
        <Link to="/profile">
          <List>
            <FaArrowRight />
            Üyelik Bilgileri
          </List>
        </Link>
        <Link to="/changepassword">
          <List>
            <FaArrowRight />
            Şifre değiştir
          </List>
        </Link>
        <Link to="/deleteaccount">
          <List>
            <FaArrowRight />
            Hesabımı sil
          </List>
        </Link>
      </List2Container>
    </MainContainer>
  );
};

export default DashSidebar;
