import React, { useState } from "react";
import DashNav from "../DashNavbar/DashNav";
import DashSidebar from "../DashSidebar/DashSidebar";
import {
  GlobalStyles,
  CardContain,
  MainContainer,
  DeleteAccountContainer,
  HeadingContainer,
  SubmitContainer,
  Heading,
  ReasonContainer,
  Reason,
  DragButton,
  SubmitButton,
  Confirm,
  DeletePic,
  TextContainer,
  DeleteHeading,
  DeleteDescription,
  DeleteButtonContainer,
  NoButton,
  YesButton,
} from "./StyledDeleteAccount";
import { FaAngleDown } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const DeleteAccount = () => {
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  return (
    <>
      <GlobalStyles />
      <DashNav />
      <MainContainer>
        <DashSidebar />
        <CardContain>
          <DeleteAccountContainer>
            <HeadingContainer>Hesabımı sil</HeadingContainer>
            <SubmitContainer>
              <Heading>Gitmeden önce lütfen bize nedenini söyle :</Heading>
              <ReasonContainer>
                <Reason aria-placeholder="Bir sebep seçin">
                  <option value="" disabled selected hidden>
                    Bir sebep seçin
                  </option>
                  <option value="reason1">Reason 1</option>
                  <option value="reason2">Reason 2</option>
                  <option value="reason3">Reason 3</option>
                </Reason>
                <DragButton>
                  <FaAngleDown />
                </DragButton>
              </ReasonContainer>
              <SubmitButton onClick={toggleDiv}>
                Hesabınızı devre dışı bırakın
              </SubmitButton>
            </SubmitContainer>
          </DeleteAccountContainer>
        </CardContain>
        <Confirm showDiv={showDiv}>
          <DeletePic>
            <RiDeleteBin5Fill />
          </DeletePic>
          <TextContainer>
            <DeleteHeading>Hesabınızı silmek üzeresiniz</DeleteHeading>
            <DeleteDescription>
              Bu, hesabınızı kalıcı olarak silecektir. Emin misin?
            </DeleteDescription>
          </TextContainer>
          <DeleteButtonContainer>
            <NoButton onClick={toggleDiv}>İptal</NoButton>
            <YesButton onClick={() => alert("Hesabınız silindi.")}>
              Evet
            </YesButton>
          </DeleteButtonContainer>
        </Confirm>
      </MainContainer>
    </>
  );
};

export default DeleteAccount;
