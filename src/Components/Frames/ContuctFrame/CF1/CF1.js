import React from 'react'
import { MainContainer , Image , Text} from './StyledCF1'
import Contuct from '../../../Images/Contuct.png'
import Pic1 from '../../../Images/Cover.png'

const CF1 = () => {
  return (
    <MainContainer background={`url(${Contuct})`} >
    <Image src={Pic1}></Image>
    <Text>BİZE ULAŞIN</Text>
</MainContainer>
  )
}

export default CF1
