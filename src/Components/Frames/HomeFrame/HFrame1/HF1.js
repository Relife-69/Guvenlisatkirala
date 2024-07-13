import React from 'react'
import {MainFrame , Card , PicContainer , Heading , Decription, Pic,  Decription2 ,Button}  from './StyledHF1'
import Pic1 from '../../../Images/F1P1.png'
import Pic2 from '../../../Images/F1P2.png'

const HF1 = () => {
  return (
    <MainFrame>
        <Card>
            <PicContainer>
                <Pic src={Pic1}></Pic>
            </PicContainer>
            <Heading>Yatırım</Heading>
            <Decription>Tamamen yasal İmarat projelerine yatırım yapın. Bizim “Sahiplik 
ve Onaylar, Talep ve Teslimat” yaklaşım, riskin tamamen azaltılmasıyla 
olağanüstü getiriler sağlar</Decription>
            <Button>ŞİMDİ YATIRIM YAPIN</Button>
        </Card>
        <Card>
            <PicContainer>
                <Pic src={Pic2}></Pic>
            </PicContainer>
            <Heading>Aranan</Heading>
            <Decription2 >Sadece 3 tıklamayla uzmanlardan oluşan bir ekibi 
etkinleştirin ihtiyacınız olan özellikler</Decription2>
           <Button>ARANAN</Button>
            </Card>
    </MainFrame>
  )
}

export default HF1
