import React from 'react'
import { MainContainer, InnerContainer,TextContainer, StyledContainer } from './StyledHireComponents'
import Button from '../../Button/Button'
import Pic from '../../Images/Styled.png'

const HireComponents = () => {
  return (
    <MainContainer>
        <InnerContainer>
            <TextContainer>Hire the best developers and designers around!</TextContainer>
            <StyledContainer src={Pic}>
            </StyledContainer>
            <Button
            sb
            text= "Hire Top Developer"></Button>
        </InnerContainer>
    </MainContainer>
    
  )
}

export default HireComponents