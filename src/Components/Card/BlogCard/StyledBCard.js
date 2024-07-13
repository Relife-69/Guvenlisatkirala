import styled from "styled-components";


const CardHolder = styled.a`
box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px;
border-radius: 13px;
width: 270px;
height: 300px;
display: flex;
flex-direction: column;
justify-content: center;
`
const Image =styled.img`
    height: 135px;
    width: 270px;
    `
const LowerContainer = styled.div`
max-width: 270px;
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;
`

const Artical = styled.a`
    font-weight: 600;
    font-size: 8px;
    color: rgb(232, 84, 81);`

const TextContainer = styled.div`
    
    `

const Heading = styled.h1`

    font-weight: 600;
    font-size:12px;
    
`

const Description = styled.p`
 margin: 0px;
    font-weight: 400;
    font-size: 8px;
    margin: 0%;
    width:215px;
    height:30px;
    `

const ArticalInformation = styled.div`
    display: flex;
    gap: 15px;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 15px;`

const Icon = styled.img`
    height: 30px;
    width: 30px;
`
const Name = styled.h1`
    margin: 0;
    font-weight: 600;
    font-size: 8px;
`

const UploadTime = styled.p`  
margin: 0;
font-weight: 400;
font-size: 6px;
`
const UploadDetail = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    `




export{CardHolder, Image, LowerContainer ,Artical ,TextContainer ,Heading , Description, ArticalInformation, Icon, Name, UploadTime,UploadDetail}