// import React, { useState } from "react";
import React from "react";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Slider2 from "../../Slider/Slider2";
import {
  MainContainer,
  Text,
  ButtonContainer,
  Button,
  Button2Container,
  Button2,
  Icon,
  Text2,
  SelectionContainer,
  Selection,
  Select,
  Option,
  Drag,
  SearchContainer,
  SearchIcon,
  Search,
} from "./StyledBuy";
import Pro1 from "../../Images/4.png";
import Pro2 from "../../Images/6.png";
import Pro3 from "../../Images/5.png";
import Pro4 from "../../Images/Sell.png";
import ExtraFrame from "../../Frames/ExtraFrame/ExtraFrame";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Banner from "../../Banner/Banner";

const OdaSayısı = [
  "1+1",
  "1.5+1",
  "2+0",
  "2+1",
  "2+2",
  "3+0",
  "3+1",
  "3.5+1",
  "3+2",
  "4 + 0",
  "4+1",
  "4.5+1",
  "4+2",
  "4+3",
  "5+0",
  "5+1",
  "5+2",
  "5+3",
  "5+5",
  "6+1",
  "6+2",
  "6+3",
  "6+4",
  "7+1",
  "7+2",
];
const BinaYaşı = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5-8",
  "9-11",
  "12-16",
  "17-21",
  "22-26",
  "Üstünde",
];
const BinadakiKatSayısı = [
  "1",
  "2-3",
  "4-5",
  "5 - 8",
  "9 - 11",
  "12 - 16",
  "17 - 21",
];
const Daireninbulunduğukat = [
  "Giriş -3",
  "Giriş -2",
  "Giriş -1",
  "Zemin kat",
  "Bahçe Katı",
  "Yüksek Giriş",
  "1. kat",
  "2'nci kat",
  "3. kat",
  "4. kat",
  "5. kat",
  "6. Kat",
  "7. Kat",
  "8. Kat",
  "9. Kat",
  "10. Kat",
  "11. Kat",
  "12. Kat",
  "13. Kat",
  "14. Kat",
  "15. Kat",
  "16. Kat",
  "17. Kat",
  "18. Kat",
  "19. Kat",
  "20. Kat",
  "21. Kat",
  "22. Kat",
  "23. Kat",
  "24. Kat",
  "25. Kat",
  "26. Kat",
  "27. Kat",
  "28. Kat",
  "29. Kat",
  "30. Katlar",
];
const Isıtmasistemi = [
  "Doğal gaz",
  "fancoil ünitesi",
  "elektrikli radyatör",
  "Güneş enerjisi",
  "Isı pompası",
  "Klima",
  "Kazan (Doğalgaz)",
  "Kombi (Elektrikli)",
  "Merkezi Sistem",
  "Merkez (Pay Ölçer)",
  "Soba",
  "şömine",
  "Yerden Isıtma",
  "Isıtma yok",
];
const BanyoSayısı = ["Yok", "1", "2", "3", "4", "Üzeri"];
const Balkon = ["Yok", "1", "2", "3", "4", "Üzeri"];
const Asansör = ["Evet", "Hayır"];
const Otopark = [
  "Seçenek Seç",
  "Açık Otopark",
  "Kapalı Otopark",
  "Açık Otopark + Kapalı Otopark",
  "Yok",
];
const Sitede = ["Evet", "Hayır"];
const Aidat = ["Var", "Yok"];
const Kullanım = ["Boş", "Kiracı Oturuyor", "Sahibi Oturuyor"];
const Kredi = ["Evet", "Hayır"];
const Tapu = [
  "Flat Ownership",
  "Floor Easement",
  "Detached Title Deed",
  "Share Title Deed",
  "Land Title Deed",
];
const Takas = ["Evet", "Hayır"];
const Elektrik = ["Evet", "Hayır"];
const Tesisat = ["Evet", "Hayır"];
const Doğalgaz = ["Evet", "Hayır"];
const Mutfak = ["Evet", "Hayır"];
const Duvarlarda = ["Evet", "Hayır"];
const EvBoyalı = ["Evet", "Hayır"];
const İç = ["Evet", "Hayır"];

const turkishCities = [
  "Seçenek Seç",
  "İl, İlçe,......",
  "Adana",
  "Adıyaman",
  "Afyonkarahisar",
  "Ağrı",
  "Amasya",
  "Ankara",
  "Antalya",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkâri",
  "Hatay",
  "Isparta",
  "Mersin",
  "İstanbul",
  "İzmir",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kırklareli",
  "Kırşehir",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Kahramanmaraş",
  "Mardin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Rize",
  "Sakarya",
  "Samsun",
  "Siirt",
  "Sinop",
  "Sivas",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Şanlıurfa",
  "Uşak",
  "Van",
  "Yozgat",
  "Zonguldak",
  "Aksaray",
  "Bayburt",
  "Karaman",
  "Kırıkkale",
  "Batman",
  "Şırnak",
  "Bartın",
  "Ardahan",
  "Iğdır",
  "Yalova",
  "Karabük",
  "Kilis",
  "Osmaniye",
  "Düzce",
];
const Buy = () => {
  // const [purpose, setPurpose] = useState("");
  // const [propertyType, setPropertyType] = useState("");
  // const [location, setLocation] = useState("");
  // const [neighborhood, setNeighborhood] = useState("");
  // const [buildingAge, setBuildingAge] = useState("");
  // const [floors, setFloors] = useState("");
  // const [floorNumber, setFloorNumber] = useState("");
  // const [heatingSystem, setHeatingSystem] = useState("");
  // const [balcony, setBalcony] = useState("");
  // const [dues, setDues] = useState("");
  // const [usingStatus, setUsingStatus] = useState("");
  // const [creditEligibility, setCreditEligibility] = useState("");
  // const [onSite, setOnSite] = useState("");
  // const [carPark, setCarPark] = useState("");
  // const [lift, setLift] = useState("");
  // const [titleDeed, setTitleDeed] = useState("");
  // const [rooms, setRooms] = useState("");
  // const [swap, setSwap] = useState("");
  // const [wiringProblem, setWiringProblem] = useState("");
  // const [pipeLineProblem, setPipeLineProblem] = useState("");
  // const [naturalGasProblem, setNaturalGasProblem] = useState("");
  // const [kitchenProblem, setKitchenProblem] = useState("");
  // const [crackWalls, setCrackWalls] = useState("");
  // const [painted, setPainted] = useState("");
  // const [damageDoors, setDamageDoors] = useState("");
  // const [areaSqft, setAreaSqft] = useState("");
  // const [bathrooms, setBathrooms] = useState("");
  // const [price, setPrice] = useState("");
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [address, setAddress] = useState("");
  // const [image, setImage] = useState([]);
  // const [images, setImages] = useState([]);
  // const [fileNames, setFileNames] = useState([]);
  // const [selectedCity, setSelectedCity] = useState("");
  // const user = {
  //   purpose,
  //   property_type: propertyType,
  //   location,
  //   dynamic_attributes: {
  //     neighborhood,
  //     building_age: buildingAge,
  //     floors,
  //     floor_number: floorNumber,
  //     heating_system: heatingSystem,
  //     balcony,
  //     dues,
  //     using_status: usingStatus,
  //     credit_eligibility: creditEligibility,
  //     on_site: onSite,
  //     car_park: carPark,
  //     lift,
  //     title_deed: titleDeed,
  //     rooms,
  //     swap,
  //     wiring_problem: wiringProblem,
  //     pipe_line_problem: pipeLineProblem,
  //     natural_gas_problem: naturalGasProblem,
  //     kitchen_problem: kitchenProblem,
  //     crack_walls: crackWalls,
  //     painted,
  //     damage_doors: damageDoors,
  //     area_sqft: areaSqft,
  //     bathrooms,
  //     price,
  //     title,
  //     description,
  //     address,
  //   },
  // };
  return (
    <>
      <Banner />
      <Navbar />
      <ExtraFrame
        Contuct={Pro4}
        Head="Satılık en iyi mülkü keşfedin"
        Para="Birkaç adımda mülkünüz için en iyi değeri elde edin"
      />
      <MainContainer>
        <Button2Container>
          <Button2>
            <Icon src={Pro1}></Icon>
            <Text2>Villa</Text2>
          </Button2>
          <Button2>
            <Icon src={Pro2}></Icon>
            <Text2>Arsa</Text2>
          </Button2>
          <Button2>
            <Icon src={Pro1}></Icon>
            <Text2>Konut</Text2>
          </Button2>
          <Button2>
            <Icon src={Pro1}></Icon>
            <Text2>İş yeri</Text2>
          </Button2>
          <Button2>
            <Icon src={Pro3}></Icon>
            <Text2>Rezidans</Text2>
          </Button2>
          <Button2>
            <Icon src={Pro1}></Icon>
            <Text2>Bina</Text2>
          </Button2>
          <Button2>
            <Icon src={Pro1}></Icon>
            <Text2>Müstakil Ev</Text2>
          </Button2>
          <Button2>
            <Icon src={Pro1}></Icon>
            <Text2>Yazlık</Text2>
          </Button2>
        </Button2Container>
        <Text>Satılık Daire araması için 172.106 ilan bulundu</Text>
        <SelectionContainer>
          <Selection className="selector-rental-property">
            <Select>
              <Option>Kiralık Konut</Option>
              <Option>Kiralık Konut</Option>
              <Option>Kiralık Konut</Option>
              <Option>Kiralık Konut</Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <SearchContainer>
            <Search
              type="search"
              placeholder="İl, ilçe, mahalle, proje, okul, metro....."
              name="search"
            />
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
          </SearchContainer>
          <Selection className="selector-net-square-meter">
            <Select>
              <Option>Net Metrekare</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-price">
            <Select>
              <Option>Fiyat</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-room-count">
            <Select
            // value={rooms} onChange={(e) => setRooms(e.target.value)}
            >
              <Option>Oda Sayısı</Option>
              {OdaSayısı.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-building-age">
            <Select>
              <Option>Bina Yaşı</Option>
              {BinaYaşı.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-floor-count">
            <Select>
              <Option>Kat Sayısı</Option>
              {BinadakiKatSayısı.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-apartment-floor">
            <Select>
              <Option>Dairenin bulunduğu kat</Option>
              {Daireninbulunduğukat.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-heating-system">
            <Select>
              <Option>Isıtma sistemi</Option>
              {Isıtmasistemi.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-bathrooms">
            <Select>
              <Option>Banyolar</Option>
              {BanyoSayısı.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-exchange">
            <Select>
              <Option>Takas</Option>
              {Takas.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-balcony">
            <Select>
              <Option>Balkon</Option>
              {Balkon.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-elevator">
            <Select>
              <Option>Asansör</Option>
              {Asansör.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-parking">
            <Select>
              <Option>Otopark</Option>
              {Otopark.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-in-complex">
            <Select>
              <Option>Sitede</Option>
              {Sitede.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-maintenance-fee">
            <Select>
              <Option>Aidat</Option>
              {Aidat.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-usage-status">
            <Select>
              <Option>Kullanım Durumu</Option>
              {Kullanım.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-credit-suitability">
            <Select>
              <Option>Kredi Uygunluğu</Option>
              {Kredi.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection className="selector-title-deed-status">
            <Select>
              <Option>Tapu Durumu</Option>
              {Tapu.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
        </SelectionContainer>
      </MainContainer>
      <Slider2 />
      <Slider2 />
      <Slider2 />
      <Slider2 />
      <Footer />
    </>
  );
};

export default Buy;
