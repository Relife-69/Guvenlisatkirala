import React from 'react'
import { MainContainer , Image , Text, Description, TextContainer} from './StyledBF1'
import Pic from '../../../Images/Blog1.png' 
import Pic1 from '../../../Images/Cover.png'
const BF1 = () => {
  return (
    <MainContainer background={`url(${Pic})`} >
    <Image src={Pic1}></Image>
    <TextContainer>
    <Text>En Akıllı Emlak Blogu –</Text>
    <Description>Gayrimenkul Yatırımcıları için Haberler, İpuçları, Tavsiyeler</Description>
    </TextContainer>
    </MainContainer>
  )
}

export default BF1
