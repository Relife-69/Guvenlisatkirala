import React from 'react';
import Pic from '../../Images/1.png';
import Pic2 from '../../Images/2.png';
import {
    MainContainer,
    FormContainer,
    PictureContainer,
    Picture,
    Picture2,
    InputContainer,
    InputContain,
    Heading,
    ButtonContainer,
    Heading2,
    SecondInputC, SecondInputCon, LastContainer, ButtonContainer2, CheckBoxContainer, CheckBox, Label
} from './StyledLawyerSign';
import Button from '../../Button/Button';

const Lawyer = () => {

    return (
            <MainContainer>
                <FormContainer>
                    <ButtonContainer>
                        <Button
                            fb
                            text="Standard"
                        />

                        <Button
                            btntype="Main"
                            fb
                            text="Avukat"
                        />
                    </ButtonContainer>

                    <Heading>Yeni bir hesap oluştur</Heading>
                    <InputContainer>
                        <InputContain
                            type="text"
                            placeholder='İsim'
                            name="username"
                        />
                        <InputContain
                            type="email"
                            placeholder='E-posta'
                            name="Email"
                        />
                        <InputContain
                            type="adress"
                            placeholder='Adres'
                            name="Adress"
                        />
                        <InputContain
                            type="password"
                            placeholder='Şifre'
                            name="Password"
                        />
                        <InputContain
                            type="password"
                            placeholder='Şifreyi Onayla'
                            name="Confirm_password"
                        />
                        <InputContain
                            type="name"
                            placeholder='Baro Birliği Adı'
                            name="Lawyer Bar"
                        />
                        <InputContain
                            type="Number"
                            placeholder='Kayıt Numarası'
                            name="Rference number"
                        />
                        <InputContain
                            type="Number"
                            placeholder='Telefon numarası'
                            name="Number"
                        />
                    </InputContainer>
                    <CheckBoxContainer>
                            <CheckBox
                                type="checkbox"
                            />
                            <Label>Avukatlar için üyelik sözleşmesini kabul ediyorum</Label>
                        </CheckBoxContainer>
                    <Button
                        btntype="Main"
                        sb
                        text="Hesap oluşturmak"
                    />
                    <Heading2>VEYA</Heading2>
                </FormContainer>
                <PictureContainer>
                    <LastContainer>
                        <Picture2 src={Pic} alt='Name Logo' />
                        <SecondInputCon>
                            <SecondInputC
                                type="Name"
                                placeholder="Beni hatırla?"
                                name="Username"
                            />
                            <SecondInputC
                                type="email"
                                placeholder='E-posta'
                                name="Email" />
                            <SecondInputC
                                type="password"
                                placeholder='Şifre'
                                name="Password" />
                        </SecondInputCon>
                        <ButtonContainer2>
                            <Button
                                btntype="Main"
                                tb
                                text="Kayıt olmak"
                            />
                        </ButtonContainer2>
                        <CheckBoxContainer>
                            <CheckBox
                                type="checkbox"
                            />
                            <Label>Beni hatırla?</Label>
                        </CheckBoxContainer>
                    </LastContainer>
                    <Picture src={Pic2} alt='Name Logo' />
                </PictureContainer>
            </MainContainer>
    );
}

export default Lawyer;
