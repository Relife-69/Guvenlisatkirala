import React from 'react'
import {CardHolder, Image, LowerContainer ,Artical ,TextContainer ,Heading , Description, ArticalInformation, Icon, Name, UploadTime ,UploadDetail} from './StyledBCard'

const BCard = ({Img1, Logo, Head, Text, Time , PersonN}) => {
  return (
    <CardHolder>
        <Image src={Img1}></Image>
        <LowerContainer>
            <Artical>Madde</Artical>
            <TextContainer>
                <Heading>{Head}</Heading>
                <Description>{Text}</Description>
            </TextContainer>
            <ArticalInformation>
                <Icon src = {Logo}></Icon>
                <UploadDetail>
                    <Name>{PersonN}</Name>
                    <UploadTime>{Time}</UploadTime>
                </UploadDetail>
            </ArticalInformation>
        </LowerContainer>
    </CardHolder>
  )
}

export default BCard
