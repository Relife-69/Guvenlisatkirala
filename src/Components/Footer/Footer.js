import React from "react";
import {
  MainFooter,
  MenuContainer,
  Menu,
  List,
  FLink,
  SocialContainer,
  Socail,
  SocailLink,
  MenuHeading,
} from "./StyledFooter";
import Pic1 from "../Images/S1.png";
import Pic2 from "../Images/S2.png";
import Pic3 from "../Images/S3.png";
import Pic4 from "../Images/S4.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MainFooter>
      <SocialContainer>
        <SocailLink href="https://www.facebook.com" target="blank">
          <Socail src={Pic1}></Socail>
        </SocailLink>
        <SocailLink
          href="https://www.instagram.com/guvenlisatkirala?utm_source=qr&igsh=M3Y5ZzJ0ZnAweDI="
          target="blank"
        >
          <Socail src={Pic2}></Socail>
        </SocailLink>
        <SocailLink
          href="https://www.linkedin.com/in/guvenlisatkirala-emlakta-g%C3%BCven-ve-seffafl%C4%B1k-760799312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="blank"
        >
          <Socail src={Pic3}></Socail>
        </SocailLink>
        <SocailLink
          href="https://x.com/guvenlisatkiral?t=pT3ppFjeCnNu-hU4G0UQOA&s=08"
          target="blank"
        >
          <Socail src={Pic4}></Socail>
        </SocailLink>
      </SocialContainer>
      <MenuContainer>
        <Menu>
          <MenuHeading>Pages</MenuHeading>
          <List>
            <FLink>
              <Link to="/">EV</Link>
            </FLink>
          </List>
          <List>
            <FLink>
              <Link to="/story">BIZIM HIKAYEMIZ</Link>
            </FLink>
          </List>
          <List>
            <FLink>
              <Link to="/singleproperty"> BLOG</Link>
            </FLink>
          </List>
          <List>
            <FLink>
              <Link to="/project">PROJELER</Link>
            </FLink>
          </List>
          <List>
            <FLink>
              <Link to="/contuctus">BİZE ULAŞIN</Link>
            </FLink>
          </List>
          <List>
            <FLink>
              <Link to="/activeads">Dash</Link>
            </FLink>
          </List>
        </Menu>
      </MenuContainer>
      <MenuContainer>
        <Menu>
          <MenuHeading>Contracts</MenuHeading>
          <List>
            <FLink>
              <Link to="/C1" target="blank">
                ÇEREZ POLİTİKASI
              </Link>
            </FLink>
          </List>
          <List>
            <FLink>
              <Link to="/C2" target="blank">
                İLAN_YAYINLAMA_KURALLARI
              </Link>
            </FLink>
          </List>
          <List>
            <FLink>
              <Link to="/C3" target="blank">
                KULLANIM KOŞULLARI
              </Link>
            </FLink>
          </List>
        </Menu>
      </MenuContainer>
    </MainFooter>
  );
};

export default Footer;
