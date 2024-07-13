import React from "react";
import {
  MainContainer,
  RightContainer,
  LeftContainer,
  Heading,
  Description,
  InputContainer,
  Input,
  Input1,
  MapContainer,
  CheckBox,
  Check,
  Label,
  Input0,
  Icon,
  Contact,
  MapIframe,
} from "./StyledCF2";
import Button from "../../../Button/Button";
import Mail from "../../../Images/mail.png";
import Dial from "../../../Images/dial.png";

const CF2 = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <Heading>Daha Fazla Bilgi İçin Bize Ulaşın</Heading>
        <Description>
          Herhangi bir ihtiyacınız varsa lütfen bizimle iletişime geçmekten
          çekinmeyin daha fazla bilgi. Cevaplamak için her zaman ulaşılabilir
          durumdayız Sorularınız ve hizmetlerimiz hakkında tam bilgi verin.
        </Description>
        <InputContainer>
          <Input0>
            <Icon src={Mail}></Icon>
            <Contact>info@logo.com</Contact>
          </Input0>
          <Input0>
            <Icon src={Dial}></Icon>
            <Contact>111-555-555</Contact>
          </Input0>
        </InputContainer>
        <MapContainer>
          <MapIframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12422.904120464987!2d35.24441127147063!3d38.88450960062937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1e6055a09571%3A0x2ddd8337a07a4010!2sYemliha%2C%2038090%20Kocasinan%2FKayseri%2C%20T%C3%BCrkiye!5e0!3m2!1sen!2s!4v1717087062323!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </MapContainer>
      </LeftContainer>
      <RightContainer>
        <Heading>Hızlı İletişim</Heading>
        <Description>
          Evinizi nakit karşılığında hızlı bir şekilde satmaya hazır mısınız?
          Bugün bize ulaşın Sorunsuz ve hızlandırılmış satış deneyimi.
        </Description>
        <InputContainer>
          <Input
            type="text"
            placeholder="İsim:"
            name="Username"
            id="username"
          />
          <Input type="email" placeholder="E-posta::" name="email" id="email" />
          <Input
            type="Number"
            placeholder="+ 90 -------"
            name="Phone number"
            id="phone"
          />
          <Input1 placeholder="İleti:" />
          <CheckBox>
            <Check type="checkbox" name="checkbox" id="checkbox" />
            <Label>
              Tıklayarak SMS ve e-posta almayı kabul ediyorum. kanal sağladı.
              Oranlar uygulanabilir
            </Label>
          </CheckBox>
        </InputContainer>
        <Button btntype="Main" cb text="GÖNDERMEK" />
      </RightContainer>
    </MainContainer>
  );
};

export default CF2;
