import React from 'react'
import { MainContainer, TextContainer, Heading, Description, Card, CardHeading, MenuContainer, Menu, List, CLink, CardHolder } from './StyledHF9'


const HF9 = () => {
    return (
        <MainContainer>
            <TextContainer>
                <Heading>Gayrimenkul almak için popüler şehirleri mi arıyorsunuz?</Heading>
                <Description>İşte tüm hareketli metropol şehirlerdeki evlerin, dairelerin, arsaların ve odaların bir listesi.</Description>
            </TextContainer>
            <CardHolder>
                <Card>
                    <CardHeading>EV</CardHeading>
                    <MenuContainer>
                        <Menu>
                            <List>
                                <CLink>İstanbul'da satılık ev</CLink>
                            </List>
                            <List>
                                <CLink>Ankara'da satılık ev</CLink>
                            </List>
                            <List>
                                <CLink>Antalya'da satılık ev</CLink>
                            </List>
                            <List>
                                <CLink>Bursa'da satılık ev</CLink>
                            </List>
                            <List>
                                <CLink>Adana'da satılık ev</CLink>
                            </List>
                            <List>
                                <CLink>Bodrum'da satılık ev</CLink>
                            </List>
                            <List>
                                <CLink>Samsun'da satılık ev</CLink>
                            </List>
                            <List>
                                <CLink>Artvin'da satılık ev</CLink>
                            </List>
                        </Menu>
                    </MenuContainer>
                </Card>
                <Card>
                    <CardHeading>Daireler ve Daireler</CardHeading>
                    <MenuContainer>
                        <Menu>
                            <List>
                                <CLink>İstanbul'da satılık daireler ve daireler</CLink>
                            </List>
                            <List>
                                <CLink>Ankara'da satılık daireler ve daireler</CLink>
                            </List>
                            <List>
                                <CLink>Antalya'da satılık daireler ve daireler</CLink>
                            </List>
                            <List>
                                <CLink>Bursa'da satılık daireler ve daireler</CLink>
                            </List>
                            <List>
                                <CLink>Adana'da satılık daireler ve daireler</CLink>
                            </List>
                            <List>
                                <CLink>Bodrum'da satılık daireler ve daireler</CLink>
                            </List>
                            <List>
                                <CLink>Samsun'da satılık daireler ve daireler</CLink>
                            </List>
                            <List>
                                <CLink>Artvin'da satılık daireler ve daireler</CLink>
                            </List>
                        </Menu>
                    </MenuContainer>
                </Card>
                <Card>
                    <CardHeading>Arsalar</CardHeading>
                    <MenuContainer>
                        <Menu>
                            <List>
                                <CLink>İstanbul'da satılık Arsalar</CLink>
                            </List>
                            <List>
                                <CLink>Ankara'da satılık Arsalar</CLink>
                            </List>
                            <List>
                                <CLink>Antalya'da satılık Arsalar</CLink>
                            </List>
                            <List>
                                <CLink>Bursa'da satılık Arsalar</CLink>
                            </List>
                            <List>
                                <CLink>Adana satılık Arsalar</CLink>
                            </List>
                            <List>
                                <CLink>Bodrum satılık Arsalar</CLink>
                            </List>
                            <List>
                                <CLink>Samsun satılık Arsalar</CLink>
                            </List>
                            <List>
                                <CLink>Artvin satılık Arsalar</CLink>
                            </List>
                        </Menu>
                    </MenuContainer>
                </Card>
                <Card>
                    <CardHeading>Odalar</CardHeading>
                    <MenuContainer>
                        <Menu>
                            <List>
                                <CLink>İstanbul'da satılık Odalar</CLink>
                            </List>
                            <List>
                                <CLink>Ankara'da satılık Odalar</CLink>
                            </List>
                            <List>
                                <CLink>Antalya'da satılık Odalar</CLink>
                            </List>
                            <List>
                                <CLink>Bursa'da satılık Odalar</CLink>
                            </List>
                            <List>
                                <CLink>Adana satılık Odalar</CLink>
                            </List>
                            <List>
                                <CLink>Bodrum satılık Odalar</CLink>
                            </List>
                            <List>
                                <CLink>Samsun satılık Odalar</CLink>
                            </List>
                            <List>
                                <CLink>Artvin satılık Odalar</CLink>
                            </List>
                        </Menu>
                    </MenuContainer>
                </Card>
            </CardHolder>
        </MainContainer>
    )
}

export default HF9
