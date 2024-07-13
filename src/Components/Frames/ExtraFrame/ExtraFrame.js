import React from 'react'
import{MainContainer, Upper, Text, Heading} from './StyledExtraFrame'


const ExtraFrame = ({Head, Para, Contuct}) => {
  return (
    <MainContainer  background={`url(${Contuct})`}>
        <Upper>
            <Heading>{Head}</Heading>
            <Text>{Para}</Text>
        </Upper>
    </MainContainer>
  )
}

export default ExtraFrame
