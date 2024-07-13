import React from 'react'
import { CardContainer , Picture , Decription ,ReadMore} from './StyledCard2'

const Card2 = ({Pict, Text ,Desc, Link}) => {
  return (
    <CardContainer>
        <Picture src={Pict}></Picture>
        <Decription>{Text}</Decription>
        <ReadMore href={Link}>{Desc}</ReadMore>
    </CardContainer>
  )
}

export default Card2
