import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import ExtraFrame from "../../Frames/ExtraFrame/ExtraFrame";
import Pic from "../../Images/Sell.png";
import AreaC from "../../Images/Area1.png";
import BedC from "../../Images/Bed1.png";
import WashC from "../../Images/Wash1.png";
import axios from "axios";
import Banner from "../../Banner/Banner";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  InputfieldContainer,
  Label,
  ButtonContainer,
  Button,
  ButtonIcon,
  ButtonText,
  SearchBarContainer,
  CitySearchBar,
  SearchIcon,
  Selection,
  Select,
  Option,
  Drag,
  Search,
  SubmitButton,
  OutputContainer,
  InputPictureContainer,
  InputPicture,
  InputIcon,
  InputImage,
  InputText,
  OuterContainerHeading,
  UpperContainer,
  DisplayContainer,
  PictureEdit,
  PictureTitle,
  Picturedeleat,
  PriceContrainer,
  Price,
  Type,
  BuildingComponetsContainer,
  BuildingComponet,
  ComponentsIcon,
  ComponentsText,
  ProperityTitle,
  TitleDisplay,
  Title,
  Description,
  Shadule,
  Time,
  HeadingTime,
  DescriptionTime,
  FeatureContainer,
  Feature,
  FeatureIcon,
  FeatureText,
  RightContainer,
  InputfieldContainer2,
  HeadingInput2,
  OptionDiv,
  InputOption,
  OptionDrag,
  OptionContainer,
  OptionLabel,
  OptionInput,
  OptionHolder,
  InputPictures,
  InputContainerPicture,
  Pricetag,
  PriceShow,
  InputHolder,
  InputCardHolder,
} from "./StyledSell";
import { GiFamilyHouse, GiSpookyHouse, GiWheat, GiHouse } from "react-icons/gi";
import { MdApartment, MdDeleteSweep } from "react-icons/md";
import {
  PiGarageDuotone,
  PiBuildingOfficeThin,
  PiFileImageFill,
} from "react-icons/pi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BsFillHouseFill, BsImageFill, BsSearch } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const OdaSayısı = [
  "Seçenek Seç",
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
  "Seçenek Seç",
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
  "Seçenek Seç",
  "1",
  "2-3",
  "4-5",
  "5 - 8",
  "9 - 11",
  "12 - 16",
  "17 - 21",
];
const Daireninbulunduğukat = [
  "Seçenek Seç",
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
  "Seçenek Seç",
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
const BanyoSayısı = ["Seçenek Seç", "Yok", "1", "2", "3", "4", "Üzeri"];
const Balkon = ["Seçenek Seç", "Yok", "1", "2", "3", "4", "Üzeri"];
const Asansör = ["Seçenek Seç", "Evet", "Hayır"];
const Otopark = [
  "Seçenek Seç",
  "Açık Otopark",
  "Kapalı Otopark",
  "Açık Otopark + Kapalı Otopark",
  "Yok",
];
const Sitede = ["Seçenek Seç", "Evet", "Hayır"];
const CE = ["Seçenek Seç", "Evet", "Hayır"];
const Aidat = ["Seçenek Seç", "Var", "Yok"];
const Kullanım = ["Seçenek Seç", "Boş", "Kiracı Oturuyor", "Sahibi Oturuyor"];
const Kredi = ["Seçenek Seç", "Evet", "Hayır"];
const Tapu = [
  "Seçenek Seç",
  "Flat Ownership",
  "Floor Easement",
  "Detached Title Deed",
  "Share Title Deed",
  "Land Title Deed",
];
const Takas = ["Seçenek Seç", "Evet", "Hayır"];
const Elektrik = ["Seçenek Seç", "Evet", "Hayır"];
const Tesisat = ["Seçenek Seç", "Evet", "Hayır"];
const Doğalgaz = ["Seçenek Seç", "Evet", "Hayır"];
const Mutfak = ["Seçenek Seç", "Evet", "Hayır"];
const Duvarlarda = ["Seçenek Seç", "Evet", "Hayır"];
const EvBoyalı = ["Seçenek Seç", "Evet", "Hayır"];
const İç = ["Seçenek Seç", "Evet", "Hayır"];

const turkishCities = [
  "Seçenek Seç",
  "Adana, Aladağ",
  "Adana, Ceyhan",
  "Adana, Çukurova",
  "Adana, Feke",
  "Adana, İmamoğlu",
  "Adana, Karaisalı",
  "Adana, Karataş",
  "Adana, Kozan",
  "Adana, Pozantı",
  "Adana, Saimbeyli",
  "Adana, Sarıçam",
  "Adana, Seyhan",
  "Adana, Tufanbeyli",
  "Adana, Yumurtalık",
  "Adana, Yüreğir",
  "Adıyaman, Adıyaman",
  "Adıyaman, Besni",
  "Adıyaman, Çelikhan",
  "Adıyaman, Gerger",
  "Adıyaman, Gölbaşı",
  "Adıyaman, Kahta",
  "Adıyaman, Samsat",
  "Adıyaman, Sincik",
  "Adıyaman, Tut",
  "Afyonkarahisar, Afyonkarahisar",
  "Afyonkarahisar, Başmakçı",
  "Afyonkarahisar, Bayat",
  "Afyonkarahisar, Bolvadin",
  "Afyonkarahisar, Çay",
  "Afyonkarahisar, Çobanlar",
  "Afyonkarahisar, Dazkırı",
  "Afyonkarahisar, Dinar",
  "Afyonkarahisar, Emirdağ",
  "Afyonkarahisar, Evciler",
  "Afyonkarahisar, Hocalar",
  "Afyonkarahisar, İhsaniye",
  "Afyonkarahisar, İscehisar",
  "Afyonkarahisar, Kızılören",
  "Afyonkarahisar, Sandıklı",
  "Afyonkarahisar, Sinanpaşa",
  "Afyonkarahisar, Sultandağı",
  "Afyonkarahisar, Şuhut",
  "Ağrı, Ağrı",
  "Ağrı, Diyadin",
  "Ağrı, Doğubayazıt",
  "Ağrı, Eleşkirt",
  "Ağrı, Hamur",
  "Ağrı, Patnos",
  "Ağrı, Taşlıçay",
  "Ağrı, Tutak",
  "Amasya, Amasya",
  "Amasya, Göynücek",
  "Amasya, Gümüşhacıköy",
  "Amasya, Hamamözü",
  "Amasya, Merzifon",
  "Amasya, Suluova",
  "Amasya, Taşova",
  "Ankara, Altındağ",
  "Ankara, Ayaş",
  "Ankara, Bala",
  "Ankara, Beypazarı",
  "Ankara, Çamlıdere",
  "Ankara, Çankaya",
  "Ankara, Çubuk",
  "Ankara, Elmadağ",
  "Ankara, Etimesgut",
  "Ankara, Evren",
  "Ankara, Gölbaşı",
  "Ankara, Güdül",
  "Ankara, Haymana",
  "Ankara, Kalecik",
  "Ankara, Kahramankazan",
  "Ankara, Keçiören",
  "Ankara, Kızılcahamam",
  "Ankara, Mamak",
  "Ankara, Nallıhan",
  "Ankara, Polatlı",
  "Ankara, Pursaklar",
  "Ankara, Sincan",
  "Ankara, Şereflikoçhisar",
  "Ankara, Yenimahalle",
  "Antalya, Akseki",
  "Antalya, Aksu",
  "Antalya, Alanya",
  "Antalya, Demre",
  "Antalya, Döşemealtı",
  "Antalya, Elmalı",
  "Antalya, Finike",
  "Antalya, Gazipaşa",
  "Antalya, Gündoğmuş",
  "Antalya, İbradı",
  "Antalya, Kaş",
  "Antalya, Kemer",
  "Antalya, Kepez",
  "Antalya, Konyaaltı",
  "Antalya, Korkuteli",
  "Antalya, Kumluca",
  "Antalya, Manavgat",
  "Antalya, Muratpaşa",
  "Antalya, Serik",
  "Artvin, Artvin",
  "Artvin, Ardanuç",
  "Artvin, Arhavi",
  "Artvin, Borçka",
  "Artvin, Hopa",
  "Artvin, Kemalpaşa",
  "Artvin, Murgul",
  "Artvin, Şavşat",
  "Artvin, Yusufeli",
  "Aydın, Aydın",
  "Aydın, Bozdoğan",
  "Aydın, Buharkent",
  "Aydın, Çine",
  "Aydın, Didim",
  "Aydın, Efeler",
  "Aydın, Germencik",
  "Aydın, İncirliova",
  "Aydın, Karacasu",
  "Aydın, Karpuzlu",
  "Aydın, Koçarlı",
  "Aydın, Köşk",
  "Aydın, Kuşadası",
  "Aydın, Kuyucak",
  "Aydın, Nazilli",
  "Aydın, Söke",
  "Aydın, Sultanhisar",
  "Aydın, Yenipazar",
  "Balıkesir, Balıkesir",
  "Balıkesir, Ayvalık",
  "Balıkesir, Balya",
  "Balıkesir, Bandırma",
  "Balıkesir, Bigadiç",
  "Balıkesir, Burhaniye",
  "Balıkesir, Dursunbey",
  "Balıkesir, Edremit",
  "Balıkesir, Erdek",
  "Balıkesir, Gömeç",
  "Balıkesir, Gönen",
  "Balıkesir, Havran",
  "Balıkesir, İvrindi",
  "Balıkesir, Karesi",
  "Balıkesir, Kepsut",
  "Balıkesir, Manyas",
  "Balıkesir, Marmara",
  "Balıkesir, Savaştepe",
  "Balıkesir, Sındırgı",
  "Balıkesir, Susurluk",
  "Bilecik, Bilecik",
  "Bilecik, Bozüyük",
  "Bilecik, Gölpazarı",
  "Bilecik, İnhisar",
  "Bilecik, Osmaneli",
  "Bilecik, Pazaryeri",
  "Bilecik, Söğüt",
  "Bilecik, Yenipazar",
  "Bingöl, Bingöl",
  "Bingöl, Adaklı",
  "Bingöl, Genç",
  "Bingöl, Karlıova",
  "Bingöl, Kiğı",
  "Bingöl, Solhan",
  "Bingöl, Yayladere",
  "Bingöl, Yedisu",
  "Bitlis, Bitlis",
  "Bitlis, Adilcevaz",
  "Bitlis, Ahlat",
  "Bitlis, Güroymak",
  "Bitlis, Hizan",
  "Bitlis, Mutki",
  "Bitlis, Tatvan",
  "Bolu, Bolu",
  "Bolu, Dörtdivan",
  "Bolu, Gerede",
  "Bolu, Göynük",
  "Bolu, Kıbrıscık",
  "Bolu, Mengen",
  "Bolu, Mudurnu",
  "Bolu, Seben",
  "Bolu, Yeniçağa",
  "Burdur, Burdur",
  "Burdur, Ağlasun",
  "Burdur, Altınyayla",
  "Burdur, Bucak",
  "Burdur, Çavdır",
  "Burdur, Çeltikçi",
  "Burdur, Gölhisar",
  "Burdur, Karamanlı",
  "Burdur, Kemer",
  "Burdur, Tefenni",
  "Burdur, Yeşilova",
  "Bursa, Bursa",
  "Bursa, Büyükorhan",
  "Bursa, Gemlik",
  "Bursa, Gürsu",
  "Bursa, Harmancık",
  "Bursa, İnegöl",
  "Bursa, İznik",
  "Bursa, Karacabey",
  "Bursa, Keles",
  "Bursa, Kestel",
  "Bursa, Mudanya",
  "Bursa, Mustafakemalpaşa",
  "Bursa, Nilüfer",
  "Bursa, Orhaneli",
  "Bursa, Orhangazi",
  "Bursa, Osmangazi",
  "Bursa, Yenişehir",
  "Bursa, Yıldırım",
  "Çanakkale, Çanakkale",
  "Çanakkale, Ayvacık",
  "Çanakkale, Bayramiç",
  "Çanakkale, Biga",
  "Çanakkale, Bozcaada",
  "Çanakkale, Çan",
  "Çanakkale, Eceabat",
  "Çanakkale, Ezine",
  "Çanakkale, Gelibolu",
  "Çanakkale, Gökçeada",
  "Çanakkale, Lapseki",
  "Çanakkale, Yenice",
  "Çankırı, Çankırı",
  "Çankırı, Atkaracalar",
  "Çankırı, Bayramören",
  "Çankırı, Çerkeş",
  "Çankırı, Eldivan",
  "Çankırı, Ilgaz",
  "Çankırı, Kızılırmak",
  "Çankırı, Korgun",
  "Çankırı, Kurşunlu",
  "Çankırı, Orta",
  "Çankırı, Şabanözü",
  "Çankırı, Yapraklı",
  "Çorum, Çorum",
  "Çorum, Alaca",
  "Çorum, Bayat",
  "Çorum, Boğazkale",
  "Çorum, Dodurga",
  "Çorum, İskilip",
  "Çorum, Kargı",
  "Çorum, Laçin",
  "Çorum, Mecitözü",
  "Çorum, Oğuzlar",
  "Çorum, Ortaköy",
  "Çorum, Osmancık",
  "Çorum, Sungurlu",
  "Çorum, Uğurludağ",
  "Denizli, Denizli",
  "Denizli, Acıpayam",
  "Denizli, Babadağ",
  "Denizli, Baklan",
  "Denizli, Bekilli",
  "Denizli, Beyağaç",
  "Denizli, Bozkurt",
  "Denizli, Buldan",
  "Denizli, Çal",
  "Denizli, Çameli",
  "Denizli, Çardak",
  "Denizli, Çivril",
  "Denizli, Güney",
  "Denizli, Honaz",
  "Denizli, Kale",
  "Denizli, Merkezefendi",
  "Denizli, Pamukkale",
  "Denizli, Sarayköy",
  "Denizli, Serinhisar",
  "Denizli, Tavas",
  "Diyarbakır, Diyarbakır",
  "Diyarbakır, Bağlar",
  "Diyarbakır, Bismil",
  "Diyarbakır, Çermik",
  "Diyarbakır, Çınar",
  "Diyarbakır, Çüngüş",
  "Diyarbakır, Dicle",
  "Diyarbakır, Eğil",
  "Diyarbakır, Ergani",
  "Diyarbakır, Hani",
  "Diyarbakır, Hazro",
  "Diyarbakır, Kayapınar",
  "Diyarbakır, Kocaköy",
  "Diyarbakır, Kulp",
  "Diyarbakır, Lice",
  "Diyarbakır, Silvan",
  "Diyarbakır, Sur",
  "Diyarbakır, Yenişehir",
  "Düzce, Düzce",
  "Düzce, Akçakoca",
  "Düzce, Cumayeri",
  "Düzce, Çilimli",
  "Düzce, Gölyaka",
  "Düzce, Gümüşova",
  "Düzce, Kaynaşlı",
  "Düzce, Yığılca",
  "Edirne, Edirne",
  "Edirne, Enez",
  "Edirne, Havsa",
  "Edirne, İpsala",
  "Edirne, Keşan",
  "Edirne, Lalapaşa",
  "Edirne, Meriç",
  "Edirne, Süloğlu",
  "Edirne, Uzunköprü",
  "Elazığ, Elazığ",
  "Elazığ, Ağın",
  "Elazığ, Alacakaya",
  "Elazığ, Arıcak",
  "Elazığ, Baskil",
  "Elazığ, Karakoçan",
  "Elazığ, Keban",
  "Elazığ, Kovancılar",
  "Elazığ, Maden",
  "Elazığ, Palu",
  "Elazığ, Sivrice",
  "Erzincan, Erzincan",
  "Erzincan, Çayırlı",
  "Erzincan, İliç",
  "Erzincan, Kemah",
  "Erzincan, Kemaliye",
  "Erzincan, Otlukbeli",
  "Erzincan, Refahiye",
  "Erzincan, Tercan",
  "Erzincan, Üzümlü",
  "Erzurum, Erzurum",
  "Erzurum, Aşkale",
  "Erzurum, Aziziye",
  "Erzurum, Çat",
  "Erzurum, Hınıs",
  "Erzurum, Horasan",
  "Erzurum, İspir",
  "Erzurum, Karaçoban",
  "Erzurum, Karayazı",
  "Erzurum, Köprüköy",
  "Erzurum, Narman",
  "Erzurum, Oltu",
  "Erzurum, Olur",
  "Erzurum, Palandöken",
  "Erzurum, Pasinler",
  "Erzurum, Pazaryolu",
  "Erzurum, Şenkaya",
  "Erzurum, Tekman",
  "Erzurum, Tortum",
  "Erzurum, Uzundere",
  "Eskişehir, Eskişehir",
  "Eskişehir, Alpu",
  "Eskişehir, Beylikova",
  "Eskişehir, Çifteler",
  "Eskişehir, Günyüzü",
  "Eskişehir, Han",
  "Eskişehir, İnönü",
  "Eskişehir, Mahmudiye",
  "Eskişehir, Mihalgazi",
  "Eskişehir, Mihalıççık",
  "Eskişehir, Odunpazarı",
  "Eskişehir, Sarıcakaya",
  "Eskişehir, Seyitgazi",
  "Eskişehir, Sivrihisar",
  "Eskişehir, Tepebaşı",
  "Gaziantep, Gaziantep",
  "Gaziantep, Araban",
  "Gaziantep, İslahiye",
  "Gaziantep, Karkamış",
  "Gaziantep, Nizip",
  "Gaziantep, Nurdağı",
  "Gaziantep, Oğuzeli",
  "Gaziantep, Şahinbey",
  "Gaziantep, Şehitkamil",
  "Gaziantep, Yavuzeli",
  "Giresun, Giresun",
  "Giresun, Alucra",
  "Giresun, Bulancak",
  "Giresun, Çamoluk",
  "Giresun, Çanakçı",
  "Giresun, Dereli",
  "Giresun, Doğankent",
  "Giresun, Espiye",
  "Giresun, Eynesil",
  "Giresun, Görele",
  "Giresun, Güce",
  "Giresun, Keşap",
  "Giresun, Piraziz",
  "Giresun, Şebinkarahisar",
  "Giresun, Tirebolu",
  "Giresun, Yağlıdere",
  "Gümüşhane, Gümüşhane",
  "Gümüşhane, Kelkit",
  "Gümüşhane, Köse",
  "Gümüşhane, Kürtün",
  "Gümüşhane, Şiran",
  "Gümüşhane, Torul",
  "Hakkâri, Hakkâri",
  "Hakkâri, Çukurca",
  "Hakkâri, Derecik",
  "Hakkâri, Şemdinli",
  "Hakkâri, Yüksekova",
  "Hatay, Hatay",
  "Hatay, Altınözü",
  "Hatay, Antakya",
  "Hatay, Arsuz",
  "Hatay, Belen",
  "Hatay, Defne",
  "Hatay, Dörtyol",
  "Hatay, Erzin",
  "Hatay, Hassa",
  "Hatay, İskenderun",
  "Hatay, Kırıkhan",
  "Hatay, Kumlu",
  "Hatay, Payas",
  "Hatay, Reyhanlı",
  "Hatay, Samandağ",
  "Hatay, Yayladağı",
  "Isparta, Isparta",
  "Isparta, Aksu",
  "Isparta, Atabey",
  "Isparta, Eğirdir",
  "Isparta, Gelendost",
  "Isparta, Gönen",
  "Isparta, Keçiborlu",
  "Isparta, Senirkent",
  "Isparta, Sütçüler",
  "Isparta, Şarkikaraağaç",
  "Isparta, Uluborlu",
  "Isparta, Yalvaç",
  "Isparta, Yenişarbademli",
  "Mersin, Mersin",
  "Mersin, Anamur",
  "Mersin, Aydıncık",
  "Mersin, Bozyazı",
  "Mersin, Çamlıyayla",
  "Mersin, Erdemli",
  "Mersin, Gülnar",
  "Mersin, Mezitli",
  "Mersin, Mut",
  "Mersin, Silifke",
  "Mersin, Tarsus",
  "Mersin, Toroslar",
  "Mersin, Yenişehir",
  "İstanbul, Adalar",
  "İstanbul, Arnavutköy",
  "İstanbul, Ataşehir",
  "İstanbul, Avcılar",
  "İstanbul, Bağcılar",
  "İstanbul, Bahçelievler",
  "İstanbul, Bakırköy",
  "İstanbul, Başakşehir",
  "İstanbul, Bayrampaşa",
  "İstanbul, Beşiktaş",
  "İstanbul, Beykoz",
  "İstanbul, Beylikdüzü",
  "İstanbul, Beyoğlu",
  "İstanbul, Büyükçekmece",
  "İstanbul, Çatalca",
  "İstanbul, Çekmeköy",
  "İstanbul, Esenler",
  "İstanbul, Esenyurt",
  "İstanbul, Eyüpsultan",
  "İstanbul, Fatih",
  "İstanbul, Gaziosmanpaşa",
  "İstanbul, Güngören",
  "İstanbul, Kadıköy",
  "İstanbul, Kağıthane",
  "İstanbul, Kartal",
  "İstanbul, Küçükçekmece",
  "İstanbul, Maltepe",
  "İstanbul, Pendik",
  "İstanbul, Sancaktepe",
  "İstanbul, Sarıyer",
  "İstanbul, Silivri",
  "İstanbul, Sultanbeyli",
  "İstanbul, Sultangazi",
  "İstanbul, Şile",
  "İstanbul, Şişli",
  "İstanbul, Tuzla",
  "İstanbul, Ümraniye",
  "İstanbul, Üsküdar",
  "İstanbul, Zeytinburnu",
  "İzmir, İzmir",
  "İzmir, Aliağa",
  "İzmir, Balçova",
  "İzmir, Bayındır",
  "İzmir, Bayraklı",
  "İzmir, Bergama",
  "İzmir, Beydağ",
  "İzmir, Bornova",
  "İzmir, Buca",
  "İzmir, Çeşme",
  "İzmir, Çiğli",
  "İzmir, Dikili",
  "İzmir, Foça",
  "İzmir, Gaziemir",
  "İzmir, Güzelbahçe",
  "İzmir, Karabağlar",
  "İzmir, Karaburun",
  "İzmir, Karşıyaka",
  "İzmir, Kemalpaşa",
  "İzmir, Kınık",
  "İzmir, Kiraz",
  "İzmir, Konak",
  "İzmir, Menderes",
  "İzmir, Menemen",
  "İzmir, Narlıdere",
  "İzmir, Ödemiş",
  "İzmir, Seferihisar",
  "İzmir, Selçuk",
  "İzmir, Tire",
  "İzmir, Torbalı",
  "İzmir, Urla",
  "Kars, Kars",
  "Kars, Akyaka",
  "Kars, Arpaçay",
  "Kars, Digor",
  "Kars, Kağızman",
  "Kars, Sarıkamış",
  "Kars, Selim",
  "Kars, Susuz",
  "Kastamonu, Kastamonu",
  "Kastamonu, Abana",
  "Kastamonu, Ağlı",
  "Kastamonu, Araç",
  "Kastamonu, Azdavay",
  "Kastamonu, Bozkurt",
  "Kastamonu, Cide",
  "Kastamonu, Çatalzeytin",
  "Kastamonu, Daday",
  "Kastamonu, Devrekani",
  "Kastamonu, Doğanyurt",
  "Kastamonu, Hanönü",
  "Kastamonu, İhsangazi",
  "Kastamonu, İnebolu",
  "Kastamonu, Küre",
  "Kastamonu, Pınarbaşı",
  "Kastamonu, Seydiler",
  "Kastamonu, Şenpazar",
  "Kastamonu, Taşköprü",
  "Kastamonu, Tosya",
  "Kayseri, Kayseri",
  "Kayseri, Akkışla",
  "Kayseri, Bünyan",
  "Kayseri, Develi",
  "Kayseri, Felahiye",
  "Kayseri, Hacılar",
  "Kayseri, İncesu",
  "Kayseri, Kocasinan",
  "Kayseri, Melikgazi",
  "Kayseri, Özvatan",
  "Kayseri, Pınarbaşı",
  "Kayseri, Sarıoğlan",
  "Kayseri, Sarız",
  "Kayseri, Talas",
  "Kayseri, Tomarza",
  "Kayseri, Yahyalı",
  "Kayseri, Yeşilhisar",
  "Kırklareli, Kırklareli",
  "Kırklareli, Babaeski",
  "Kırklareli, Demirköy",
  "Kırklareli, Kofçaz",
  "Kırklareli, Lüleburgaz",
  "Kırklareli, Pehlivanköy",
  "Kırklareli, Pınarhisar",
  "Kırklareli, Vize",
  "Kırşehir, Kırşehir",
  "Kırşehir, Akçakent",
  "Kırşehir, Akpınar",
  "Kırşehir, Boztepe",
  "Kırşehir, Çiçekdağı",
  "Kırşehir, Kaman",
  "Kırşehir, Mucur",
  "Kocaeli, Kocaeli",
  "Kocaeli, Başiskele",
  "Kocaeli, Çayırova",
  "Kocaeli, Darıca",
  "Kocaeli, Derince",
  "Kocaeli, Dilovası",
  "Kocaeli, Gebze",
  "Kocaeli, Gölcük",
  "Kocaeli, İzmit",
  "Kocaeli, Kandıra",
  "Kocaeli, Karamürsel",
  "Kocaeli, Kartepe",
  "Kocaeli, Körfez",
  "Konya, Konya",
  "Konya, Ahırlı",
  "Konya, Akören",
  "Konya, Akşehir",
  "Konya, Altınekin",
  "Konya, Beyşehir",
  "Konya, Bozkır",
  "Konya, Çeltik",
  "Konya, Cihanbeyli",
  "Konya, Çumra",
  "Konya, Derbent",
  "Konya, Derebucak",
  "Konya, Doğanhisar",
  "Konya, Emirgazi",
  "Konya, Ereğli",
  "Konya, Güneysınır",
  "Konya, Hadim",
  "Konya, Halkapınar",
  "Konya, Hüyük",
  "Konya, Ilgın",
  "Konya, Kadınhanı",
  "Konya, Karapınar",
  "Konya, Karatay",
  "Konya, Kulu",
  "Konya, Meram",
  "Konya, Sarayönü",
  "Konya, Selçuklu",
  "Konya, Seydişehir",
  "Konya, Taşkent",
  "Konya, Tuzlukçu",
  "Konya, Yalıhüyük",
  "Konya, Yunak",
  "Kütahya, Kütahya",
  "Kütahya, Altıntaş",
  "Kütahya, Aslanapa",
  "Kütahya, Çavdarhisar",
  "Kütahya, Domaniç",
  "Kütahya, Dumlupınar",
  "Kütahya, Emet",
  "Kütahya, Gediz",
  "Kütahya, Hisarcık",
  "Kütahya, Pazarlar",
  "Kütahya, Simav",
  "Kütahya, Şaphane",
  "Kütahya, Tavşanlı",
  "Malatya, Malatya",
  "Malatya, Akçadağ",
  "Malatya, Arapgir",
  "Malatya, Arguvan",
  "Malatya, Battalgazi",
  "Malatya, Darende",
  "Malatya, Doğanşehir",
  "Malatya, Doğanyol",
  "Malatya, Hekimhan",
  "Malatya, Kale",
  "Malatya, Kuluncak",
  "Malatya, Pütürge",
  "Malatya, Yazıhan",
  "Malatya, Yeşilyurt",
  "Manisa, Manisa",
  "Manisa, Ahmetli",
  "Manisa, Akhisar",
  "Manisa, Alaşehir",
  "Manisa, Demirci",
  "Manisa, Gölmarmara",
  "Manisa, Gördes",
  "Manisa, Kırkağaç",
  "Manisa, Köprübaşı",
  "Manisa, Kula",
  "Manisa, Salihli",
  "Manisa, Sarıgöl",
  "Manisa, Saruhanlı",
  "Manisa, Selendi",
  "Manisa, Soma",
  "Manisa, Şehzadeler",
  "Manisa, Turgutlu",
  "Manisa, Yunusemre",
  "Kahramanmaraş, Kahramanmaraş",
  "Kahramanmaraş, Afşin",
  "Kahramanmaraş, Andırın",
  "Kahramanmaraş, Çağlayancerit",
  "Kahramanmaraş, Dulkadiroğlu",
  "Kahramanmaraş, Ekinözü",
  "Kahramanmaraş, Elbistan",
  "Kahramanmaraş, Göksun",
  "Kahramanmaraş, Nurhak",
  "Kahramanmaraş, Onikişubat",
  "Kahramanmaraş, Pazarcık",
  "Kahramanmaraş, Türkoğlu",
  "Mardin, Mardin",
  "Mardin, Artuklu",
  "Mardin, Dargeçit",
  "Mardin, Derik",
  "Mardin, Kızıltepe",
  "Mardin, Mazıdağı",
  "Mardin, Midyat",
  "Mardin, Nusaybin",
  "Mardin, Ömerli",
  "Mardin, Savur",
  "Mardin, Yeşilli",
  "Mardin, Mazıdağı",
  "Mardin, Kızıltepe",
  "Muğla, Muğla",
  "Muğla, Bodrum",
  "Muğla, Dalaman",
  "Muğla, Datça",
  "Muğla, Fethiye",
  "Muğla, Kavaklıdere",
  "Muğla, Köyceğiz",
  "Muğla, Marmaris",
  "Muğla, Menteşe",
  "Muğla, Milas",
  "Muğla, Ortaca",
  "Muğla, Seydikemer",
  "Muğla, Ula",
  "Muğla, Yatağan",
  "Muş, Muş",
  "Muş, Bulanık",
  "Muş, Hasköy",
  "Muş, Korkut",
  "Muş, Malazgirt",
  "Muş, Varto",
  "Nevşehir, Nevşehir",
  "Nevşehir, Acıgöl",
  "Nevşehir, Avanos",
  "Nevşehir, Derinkuyu",
  "Nevşehir, Gülşehir",
  "Nevşehir, Hacıbektaş",
  "Nevşehir, Kozaklı",
  "Nevşehir, Ürgüp",
  "Niğde, Niğde",
  "Niğde, Altunhisar",
  "Niğde, Bor",
  "Niğde, Çamardı",
  "Niğde, Çiftlik",
  "Niğde, Ulukışla",
  "Ordu, Ordu",
  "Ordu, Akkuş",
  "Ordu, Altınordu",
  "Ordu, Aybastı",
  "Ordu, Çamaş",
  "Ordu, Çatalpınar",
  "Ordu, Çaybaşı",
  "Ordu, Fatsa",
  "Ordu, Gölköy",
  "Ordu, Gülyalı",
  "Ordu, Gürgentepe",
  "Ordu, İkizce",
  "Ordu, Kabadüz",
  "Ordu, Kabataş",
  "Ordu, Korgan",
  "Ordu, Kumru",
  "Ordu, Mesudiye",
  "Ordu, Perşembe",
  "Ordu, Ulubey",
  "Ordu, Ünye",
  "Osmaniye, Osmaniye",
  "Osmaniye, Bahçe",
  "Osmaniye, Düziçi",
  "Osmaniye, Hasanbeyli",
  "Osmaniye, Kadirli",
  "Osmaniye, Sumbas",
  "Osmaniye, Toprakkale",
  "Rize, Rize",
  "Rize, Ardeşen",
  "Rize, Çamlıhemşin",
  "Rize, Çayeli",
  "Rize, Derepazarı",
  "Rize, Fındıklı",
  "Rize, Güneysu",
  "Rize, Hemşin",
  "Rize, İkizdere",
  "Rize, İyidere",
  "Rize, Kalkandere",
  "Rize, Pazar",
  "Sakarya, Sakarya",
  "Sakarya, Adapazarı",
  "Sakarya, Akyazı",
  "Sakarya, Arifiye",
  "Sakarya, Erenler",
  "Sakarya, Ferizli",
  "Sakarya, Geyve",
  "Sakarya, Hendek",
  "Sakarya, Karapürçek",
  "Sakarya, Karasu",
  "Sakarya, Kaynarca",
  "Sakarya, Kocaali",
  "Sakarya, Pamukova",
  "Sakarya, Sapanca",
  "Sakarya, Serdivan",
  "Sakarya, Söğütlü",
  "Sakarya, Taraklı",
  "Samsun, Samsun",
  "Samsun, Alaçam",
  "Samsun, Asarcık",
  "Samsun, Atakum",
  "Samsun, Ayvacık",
  "Samsun, Bafra",
  "Samsun, Canik",
  "Samsun, Çarşamba",
  "Samsun, Havza",
  "Samsun, İlkadım",
  "Samsun, Kavak",
  "Samsun, Ladik",
  "Samsun, Salıpazarı",
  "Samsun, Tekkeköy",
  "Samsun, Terme",
  "Samsun, Vezirköprü",
  "Samsun, Yakakent",
  "Siirt, Siirt",
  "Siirt, Aydınlar",
  "Siirt, Baykan",
  "Siirt, Eruh",
  "Siirt, Kurtalan",
  "Siirt, Pervari",
  "Siirt, Şirvan",
  "Sinop, Sinop",
  "Sinop, Ayancık",
  "Sinop, Boyabat",
  "Sinop, Dikmen",
  "Sinop, Durağan",
  "Sinop, Erfelek",
  "Sinop, Gerze",
  "Sinop, Saraydüzü",
  "Sinop, Türkeli",
  "Sivas, Sivas",
  "Sivas, Akıncılar",
  "Sivas, Altınyayla",
  "Sivas, Divriği",
  "Sivas, Doğanşar",
  "Sivas, Gemerek",
  "Sivas, Gölova",
  "Sivas, Gürün",
  "Sivas, Hafik",
  "Sivas, İmranlı",
  "Sivas, Kangal",
  "Sivas, Koyulhisar",
  "Sivas, Suşehri",
  "Sivas, Şarkışla",
  "Sivas, Ulaş",
  "Sivas, Yıldızeli",
  "Sivas, Zara",
  "Tekirdağ, Tekirdağ",
  "Tekirdağ, Çerkezköy",
  "Tekirdağ, Çorlu",
  "Tekirdağ, Ergene",
  "Tekirdağ, Hayrabolu",
  "Tekirdağ, Kapaklı",
  "Tekirdağ, Malkara",
  "Tekirdağ, Marmaraereğlisi",
  "Tekirdağ, Muratlı",
  "Tekirdağ, Saray",
  "Tekirdağ, Süleymanpaşa",
  "Tekirdağ, Şarköy",
  "Tokat, Tokat",
  "Tokat, Almus",
  "Tokat, Artova",
  "Tokat, Başçiftlik",
  "Tokat, Erbaa",
  "Tokat, Niksar",
  "Tokat, Pazar",
  "Tokat, Reşadiye",
  "Tokat, Sulusaray",
  "Tokat, Turhal",
  "Tokat, Yeşilyurt",
  "Tokat, Zile",
  "Trabzon, Trabzon",
  "Trabzon, Akçaabat",
  "Trabzon, Araklı",
  "Trabzon, Arsin",
  "Trabzon, Beşikdüzü",
  "Trabzon, Çarşıbaşı",
  "Trabzon, Çaykara",
  "Trabzon, Dernekpazarı",
  "Trabzon, Düzköy",
  "Trabzon, Hayrat",
  "Trabzon, Köprübaşı",
  "Trabzon, Maçka",
  "Trabzon, Of",
  "Trabzon, Ortahisar",
  "Trabzon, Sürmene",
  "Trabzon, Şalpazarı",
  "Trabzon, Tonya",
  "Trabzon, Vakfıkebir",
  "Trabzon, Yomra",
  "Tunceli, Tunceli",
  "Tunceli, Çemişgezek",
  "Tunceli, Hozat",
  "Tunceli, Mazgirt",
  "Tunceli, Nazımiye",
  "Tunceli, Ovacık",
  "Tunceli, Pertek",
  "Tunceli, Pülümür",
  "Şanlıurfa, Şanlıurfa",
  "Şanlıurfa, Akçakale",
  "Şanlıurfa, Birecik",
  "Şanlıurfa, Bozova",
  "Şanlıurfa, Ceylanpınar",
  "Şanlıurfa, Eyyübiye",
  "Şanlıurfa, Halfeti",
  "Şanlıurfa, Haliliye",
  "Şanlıurfa, Harran",
  "Şanlıurfa, Hilvan",
  "Şanlıurfa, Karaköprü",
  "Şanlıurfa, Siverek",
  "Şanlıurfa, Suruç",
  "Şanlıurfa, Viranşehir",
  "Uşak, Uşak",
  "Uşak, Banaz",
  "Uşak, Eşme",
  "Uşak, Karahallı",
  "Uşak, Sivaslı",
  "Uşak, Ulubey",
  "Van, Van",
  "Van, Bahçesaray",
  "Van, Başkale",
  "Van, Çaldıran",
  "Van, Çatak",
  "Van, Edremit",
  "Van, Erciş",
  "Van, Gevaş",
  "Van, Gürpınar",
  "Van, İpekyolu",
  "Van, Muradiye",
  "Van, Özalp",
  "Van, Saray",
  "Van, Tuşba",
  "Yozgat, Yozgat",
  "Yozgat, Akdağmadeni",
  "Yozgat, Aydıncık",
  "Yozgat, Boğazlıyan",
  "Yozgat, Çandır",
  "Yozgat, Çayıralan",
  "Yozgat, Çekerek",
  "Yozgat, Kadışehri",
  "Yozgat, Saraykent",
  "Yozgat, Sarıkaya",
  "Yozgat, Sorgun",
  "Yozgat, Şefaatli",
  "Yozgat, Yenifakılı",
  "Yozgat, Yerköy",
  "Zonguldak, Zonguldak",
  "Zonguldak, Alaplı",
  "Zonguldak, Çaycuma",
  "Zonguldak, Devrek",
  "Zonguldak, Ereğli",
  "Zonguldak, Gökçebey",
  "Zonguldak, Kilimli",
  "Zonguldak, Kozlu",
];

const Sell = () => {
  const [purpose, setPurpose] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [buildingAge, setBuildingAge] = useState("");
  const [floors, setFloors] = useState("");
  const [floorNumber, setFloorNumber] = useState("");
  const [heatingSystem, setHeatingSystem] = useState("");
  const [balcony, setBalcony] = useState("");
  const [dues, setDues] = useState("");
  const [duesTL, setDuesTL] = useState("");
  const [usingStatus, setUsingStatus] = useState("");
  const [creditEligibility, setCreditEligibility] = useState("");
  const [onSite, setOnSite] = useState("");
  const [carPark, setCarPark] = useState("");
  const [lift, setLift] = useState("");
  const [titleDeed, setTitleDeed] = useState("");
  const [rooms, setRooms] = useState("");
  const [swap, setSwap] = useState("");
  const [wiringProblem, setWiringProblem] = useState("");
  const [pipeLineProblem, setPipeLineProblem] = useState("");
  const [naturalGasProblem, setNaturalGasProblem] = useState("");
  const [kitchenProblem, setKitchenProblem] = useState("");
  const [crackWalls, setCrackWalls] = useState("");
  const [painted, setPainted] = useState("");
  const [damageDoors, setDamageDoors] = useState("");
  const [areaSqft, setAreaSqft] = useState("");
  const [areaSqftPrice, setAreaSqftPrice] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [zoning, setZoning] = useState("");
  const [islandNumber, setIslandNumber] = useState("");
  const [parcelNumber, setParcelNumber] = useState("");
  const [kaks, setKaks] = useState("");
  const [deedStatue, setDeedStatus] = useState("");
  const [infraStatue, setInfraStatus] = useState("");
  const [view, setView] = useState("");
  const [address, setAddress] = useState("");
  const [gauge, setGauge] = useState("");
  const [furnished, setFurnished] = useState("");
  const [med, setMed] = useState("");
  const [image, setImage] = useState([]);
  const [images, setImages] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [fireExit, setFireExit] = useState("");
  const [openMenu, setOpenMenu] = useState(null);
  const [values1, setValues1] = useState({});
  const [values2, setValues2] = useState({});
  const [values3, setValues3] = useState({});
  const [values4, setValues4] = useState({});
  const [values5, setValues5] = useState({});
  const [values6, setValues6] = useState({});
  const [values7, setValues7] = useState({});
  const [security, setSecurity] = useState({});
  const [feature, setFeature] = useState("");
  const [deposit, setDeposit] = useState({});
  const [flatePerFloor, setFlatePerFloor] = useState({});
  const [buildingOffical, setBuildingOffical] = useState({});
  const [hydro, setHydro] = useState({});
  const [phoneNumberFromStorage, setPhoneNumberFromStorage] = useState("");
  const [generator, setGenerator] = useState({});
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const use = localStorage.getItem("user-role");
  useEffect(() => {
    const phone_number = localStorage.getItem("phone_number");
    if (phone_number) {
      setPhoneNumberFromStorage(phone_number);
    }
  }, []);
  useEffect(() => {
    if (use === "lawyer") {
      alert("ilan yayınlamak için standart üye olarak oturum açın");
      navigate("/");
    }
  }, [navigate]);
  const getButtonStyle = (value) => {
    const isActive = purpose === value;
    return {
      backgroundColor: isActive ? "#7B2CBF" : "white",
      color: isActive ? "white" : "black",
    };
  };
  const getButtonStyle1 = (value) => {
    const isActive = propertyType === value;
    return {
      backgroundColor: isActive ? "#7B2CBF" : "white",
      color: isActive ? "white" : "black",
    };
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (use === null) {
      alert("ilan yayınlamak için standart üye olarak oturum açın");
      navigate("/signin");
      return; // Prevent further execution if user is null
    }
    const user = {
      purpose,
      property_type: propertyType,
      location,
      dynamic_attributes: {
        neighborhood,
        building_age: buildingAge,
        building_offical: buildingOffical,
        flate_per_floor: flatePerFloor,
        floors,
        hydro,
        generator,
        floor_number: floorNumber,
        heating_system: heatingSystem,
        balcony,
        dues,
        security,
        using_status: usingStatus,
        parcel_number: parcelNumber,
        credit_eligibility: creditEligibility,
        on_site: onSite,
        car_park: carPark,
        lift,
        title_deed: titleDeed,
        rooms,
        swap,
        wiring_problem: wiringProblem,
        pipe_line_problem: pipeLineProblem,
        natural_gas_problem: naturalGasProblem,
        kitchen_problem: kitchenProblem,
        crack_walls: crackWalls,
        painted,
        damage_doors: damageDoors,
        area_sqft: areaSqft,
        area_sqft_price: areaSqftPrice,
        bathrooms,
        price,
        title,
        description,
        address,
        zoning,
        island_number: islandNumber,
        kaks,
        gauge,
        deed_status: deedStatue,
        infra_status: infraStatue,
        view,
        furnished,
        dues_TL: duesTL,
        fire_exit: fireExit,
        med,
        feature,
        deposit,
        first_general: ÖnOptions,
        second_general: selectedOptions,
        third_general: HariciOptions,
        forth_general: EtrafındaOptions,
        fifth_general: UlaşımOptions,
        sixth_general: DaireOptions,
        phone_number: phoneNumberFromStorage,
      },
    };

    console.log("Submitting user:", user);

    try {
      const result = await axios.post(
        "https://api.guvenlisatkirala.com/api/advertisements/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // Connection: "keep-alive",
            // "Accept-Encoding": "gzip, deflate, br",
          },
        }
      );
      const advertisementId = result.data.id;
      const formData = new FormData();
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
      await axios.post(
        `https://api.guvenlisatkirala.com/api/advertisements/${advertisementId}/images/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("API Response:", result.data);

      if (result.data) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        console.log("User information stored in localStorage");
        alert("Your data han been Stored,Please Select the Lawyer");
        navigate("/lawyer");
      } else {
        console.error("Unexpected response format", result.data);
      }
    } catch (error) {
      if (error.response) {
        // console.error("Error response data:", error.response.data);
        // console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
    }
  };

  const handleFileChange = ({ target: { files } }) => {
    const newImages = Array.from(files);
    const newFileNames = newImages.map((file) => file.name);
    setImages((prevImages) => [...prevImages, ...newImages]);
    setFileNames((prevFileNames) => [...prevFileNames, ...newFileNames]);
  };

  const handleDelete = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newFileNames = fileNames.filter((_, i) => i !== index);
    setImages(newImages);
    setFileNames(newFileNames);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const selectedOptions = Object.keys(values2)
    .filter((key) => values2[key])
    .join(", ");
  const ÖnOptions = Object.keys(values1)
    .filter((key) => values1[key])
    .join(", ");
  const HariciOptions = Object.keys(values3)
    .filter((key) => values3[key])
    .join(", ");
  const EtrafındaOptions = Object.keys(values4)
    .filter((key) => values4[key])
    .join(", ");
  const UlaşımOptions = Object.keys(values5)
    .filter((key) => values5[key])
    .join(", ");
  const DaireOptions = Object.keys(values6)
    .filter((key) => values6[key])
    .join(", ");
  const LastOptions = Object.keys(values7)
    .filter((key) => values7[key])
    .join(", ");

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setValues2({
      ...values2,
      [name]: checked,
    });
  };
  const handleCheckboxChange1 = (event) => {
    const { name, checked } = event.target;
    setValues1({
      ...values1,
      [name]: checked,
    });
  };
  const handleCheckboxChange3 = (event) => {
    const { name, checked } = event.target;
    setValues3({
      ...values3,
      [name]: checked,
    });
  };
  const handleCheckboxChange4 = (event) => {
    const { name, checked } = event.target;
    setValues4({
      ...values4,
      [name]: checked,
    });
  };
  const handleCheckboxChange5 = (event) => {
    const { name, checked } = event.target;
    setValues5({
      ...values5,
      [name]: checked,
    });
  };
  const handleCheckboxChange6 = (event) => {
    const { name, checked } = event.target;
    setValues6({
      ...values6,
      [name]: checked,
    });
  };
  const handleCheckboxChange7 = (event) => {
    const { name, checked } = event.target;
    setValues7({
      ...values7,
      [name]: checked,
    });
  };
  return (
    <>
      <Banner />
      <Navbar />
      <ExtraFrame
        Contuct={Pic}
        Head="Ücretsiz İlan Verin"
        Para="Birkaç adımda mülkünüz için en iyi değeri elde edin"
      />
      <MainContainer>
        <InputfieldContainer>
          <Label>Ne yapmak istiyorsun?</Label>
          <ButtonContainer>
            <Button
              value="Satmak"
              onClick={() => setPurpose("Satmak")}
              style={getButtonStyle("Satmak")}
            >
              <ButtonIcon>
                <GiFamilyHouse />
              </ButtonIcon>
              <ButtonText>Satmak</ButtonText>
            </Button>
            <Button
              value="Kira"
              onClick={() => setPurpose("Kira")}
              style={getButtonStyle("Kira")}
            >
              <ButtonIcon>
                <GiHouse />
              </ButtonIcon>
              <ButtonText>Kira</ButtonText>
            </Button>
          </ButtonContainer>
          <Label>Property Type</Label>
          <ButtonContainer>
            <Button
              value="Daire"
              onClick={() => setPropertyType("Daire")}
              style={getButtonStyle1("Daire")}
            >
              <ButtonIcon>
                <MdApartment />
              </ButtonIcon>
              <ButtonText>Daire</ButtonText>
            </Button>
            <Button
              value="Arsa"
              onClick={() => setPropertyType("Arsa")}
              style={getButtonStyle1("Arsa")}
            >
              <ButtonIcon>
                <GiWheat />
              </ButtonIcon>
              <ButtonText>Arsa</ButtonText>
            </Button>
            <Button
              value="Villa"
              onClick={() => setPropertyType("Villa")}
              style={getButtonStyle1("Villa")}
            >
              <ButtonIcon>
                <GiSpookyHouse />
              </ButtonIcon>
              <ButtonText>Villa</ButtonText>
            </Button>
            <Button
              value="işyerleri"
              onClick={() => setPropertyType("işyerleri")}
              style={getButtonStyle1("işyerleri")}
            >
              <ButtonIcon>
                <PiGarageDuotone />
              </ButtonIcon>
              <ButtonText>İş yeri</ButtonText>
            </Button>
            <Button
              value="Residans"
              onClick={() => setPropertyType("Residans")}
              style={getButtonStyle1("Residans")}
            >
              <ButtonIcon>
                <PiBuildingOfficeThin />
              </ButtonIcon>
              <ButtonText>Rezidans</ButtonText>
            </Button>
            <Button
              value="Bina"
              onClick={() => setPropertyType("Bina")}
              style={getButtonStyle1("Bina")}
            >
              <ButtonIcon>
                <HiBuildingOffice2 />
              </ButtonIcon>
              <ButtonText>Bina</ButtonText>
            </Button>
            <Button
              value="Mustakil ev"
              onClick={() => setPropertyType("Mustakil ev")}
              style={getButtonStyle1("Mustakil ev")}
            >
              <ButtonIcon>
                <BsFillHouseFill />
              </ButtonIcon>
              <ButtonText>Müstakil Ev</ButtonText>
            </Button>
            <Button
              value="Yazilk"
              onClick={() => setPropertyType("Yazilk")}
              style={getButtonStyle1("Yazilk")}
            >
              <ButtonIcon>
                <GiHouse />
              </ButtonIcon>
              <ButtonText>Yazlık</ButtonText>
            </Button>
          </ButtonContainer>
          {purpose === "Satmak" && (
            <InputCardHolder>
              <Search>
                <Label>Konum:</Label>
                <SearchBarContainer>
                  <Select
                    value={location}
                    onChange={(e) => {
                      handleCityChange(e);
                      setLocation(e.target.value);
                    }}
                    placeholder="İl, İlçe,......"
                    name="CitySearchBar"
                  >
                    {turkishCities.map((city, index) => (
                      <Option key={index} value={city}>
                        {city}
                      </Option>
                    ))}
                  </Select>
                  <SearchIcon>
                    <BsSearch />
                  </SearchIcon>
                </SearchBarContainer>
              </Search>
              <Search>
                <Label>Mahalle adı:</Label>
                <SearchBarContainer>
                  <CitySearchBar
                    type="text"
                    placeholder="mahalle adı,......"
                    name="CitySearchBar"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                  />
                  <SearchIcon>
                    <BsSearch />
                  </SearchIcon>
                </SearchBarContainer>
              </Search>
              <Search>
                <Label>Net m2:</Label>
                <SearchBarContainer>
                  <CitySearchBar
                    type="text"
                    placeholder="05 M2"
                    name="CitySearchBar"
                    value={areaSqft}
                    onChange={(e) => setAreaSqft(e.target.value)}
                  />
                  <SearchIcon>
                    M2
                    <FaAngleDown />
                  </SearchIcon>
                </SearchBarContainer>
              </Search>
              {propertyType === "Daire" && (
                <InputHolder>
                  <Search>
                    <Label>Oda Sayısı:</Label>
                    <Selection>
                      <Select
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Bina Yaşı:</Label>
                    <Selection>
                      <Select
                        value={buildingAge}
                        onChange={(e) => setBuildingAge(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Binadaki Kat Sayısı:</Label>
                    <Selection>
                      <Select
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Dairenin bulunduğu kat:</Label>
                    <Selection>
                      <Select
                        value={floorNumber}
                        onChange={(e) => setFloorNumber(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Isıtma sistemi:</Label>
                    <Selection>
                      <Select
                        value={heatingSystem}
                        onChange={(e) => setHeatingSystem(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Banyo Sayısı:</Label>
                    <Selection>
                      <Select
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Balkon:</Label>
                    <Selection>
                      <Select
                        value={balcony}
                        onChange={(e) => setBalcony(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Asansör:</Label>
                    <Selection>
                      <Select
                        value={lift}
                        onChange={(e) => setLift(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Otopark:</Label>
                    <Selection>
                      <Select
                        value={carPark}
                        onChange={(e) => setCarPark(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Sitede:</Label>
                    <Selection>
                      <Select
                        value={onSite}
                        onChange={(e) => setOnSite(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Aidat:</Label>
                    <Selection>
                      <Select
                        value={dues}
                        onChange={(e) => setDues(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kullanım Durumu:</Label>
                    <Selection>
                      <Select
                        value={usingStatus}
                        onChange={(e) => setUsingStatus(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu:</Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Tapu Durumu:</Label>
                    <Selection>
                      <Select
                        value={titleDeed}
                        onChange={(e) => setTitleDeed(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Takas:</Label>
                    <Selection>
                      <Select
                        value={swap}
                        onChange={(e) => setSwap(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>
                      Elektrik Tesisatında, Prizlerde, Düğmelerde Sorun veya
                      Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={wiringProblem}
                        onChange={(e) => setWiringProblem(e.target.value)}
                      >
                        {Elektrik.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Tesisat, Musluk, Su Giderlerinde Sorun veya Eksiklik Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={pipeLineProblem}
                        onChange={(e) => setPipeLineProblem(e.target.value)}
                      >
                        {Tesisat.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Doğalgaz tesisatında, kombide veya fırında herhangi bir
                      sorun veya eksiklik var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={naturalGasProblem}
                        onChange={(e) => setNaturalGasProblem(e.target.value)}
                      >
                        {Doğalgaz.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Mutfak Mobilyasında veya Mutfak Lavabosunda Herhangi Bir
                      Sorun veya Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={kitchenProblem}
                        onChange={(e) => setKitchenProblem(e.target.value)}
                      >
                        {Mutfak.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Duvarlarda veya Zeminlerde Çatlak veya Hasar Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={crackWalls}
                        onChange={(e) => setCrackWalls(e.target.value)}
                      >
                        {Duvarlarda.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Ev Boyalı mı?</Label>
                    <Selection>
                      <Select
                        value={painted}
                        onChange={(e) => setPainted(e.target.value)}
                      >
                        {EvBoyalı.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      İç Kapı ve Pencerelerde Herhangi Bir Sorun veya Hasar Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={damageDoors}
                        onChange={(e) => setDamageDoors(e.target.value)}
                      >
                        {İç.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                </InputHolder>
              )}
              {propertyType === "Mustakil ev" && (
                <InputHolder>
                  <Search>
                    <Label>Oda Sayısı:</Label>
                    <Selection>
                      <Select
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Bina Yaşı:</Label>
                    <Selection>
                      <Select
                        value={buildingAge}
                        onChange={(e) => setBuildingAge(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Binadaki Kat Sayısı:</Label>
                    <Selection>
                      <Select
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Dairenin bulunduğu kat:</Label>
                    <Selection>
                      <Select
                        value={floorNumber}
                        onChange={(e) => setFloorNumber(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Isıtma sistemi:</Label>
                    <Selection>
                      <Select
                        value={heatingSystem}
                        onChange={(e) => setHeatingSystem(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Banyo Sayısı:</Label>
                    <Selection>
                      <Select
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Balkon:</Label>
                    <Selection>
                      <Select
                        value={balcony}
                        onChange={(e) => setBalcony(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Asansör:</Label>
                    <Selection>
                      <Select
                        value={lift}
                        onChange={(e) => setLift(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Otopark:</Label>
                    <Selection>
                      <Select
                        value={carPark}
                        onChange={(e) => setCarPark(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Sitede:</Label>
                    <Selection>
                      <Select
                        value={onSite}
                        onChange={(e) => setOnSite(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Aidat:</Label>
                    <Selection>
                      <Select
                        value={dues}
                        onChange={(e) => setDues(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kullanım Durumu:</Label>
                    <Selection>
                      <Select
                        value={usingStatus}
                        onChange={(e) => setUsingStatus(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu:</Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Tapu Durumu:</Label>
                    <Selection>
                      <Select
                        value={titleDeed}
                        onChange={(e) => setTitleDeed(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Takas:</Label>
                    <Selection>
                      <Select
                        value={swap}
                        onChange={(e) => setSwap(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>
                      Elektrik Tesisatında, Prizlerde, Düğmelerde Sorun veya
                      Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={wiringProblem}
                        onChange={(e) => setWiringProblem(e.target.value)}
                      >
                        {Elektrik.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Tesisat, Musluk, Su Giderlerinde Sorun veya Eksiklik Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={pipeLineProblem}
                        onChange={(e) => setPipeLineProblem(e.target.value)}
                      >
                        {Tesisat.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Doğalgaz tesisatında, kombide veya fırında herhangi bir
                      sorun veya eksiklik var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={naturalGasProblem}
                        onChange={(e) => setNaturalGasProblem(e.target.value)}
                      >
                        {Doğalgaz.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Mutfak Mobilyasında veya Mutfak Lavabosunda Herhangi Bir
                      Sorun veya Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={kitchenProblem}
                        onChange={(e) => setKitchenProblem(e.target.value)}
                      >
                        {Mutfak.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Duvarlarda veya Zeminlerde Çatlak veya Hasar Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={crackWalls}
                        onChange={(e) => setCrackWalls(e.target.value)}
                      >
                        {Duvarlarda.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Ev Boyalı mı?</Label>
                    <Selection>
                      <Select
                        value={painted}
                        onChange={(e) => setPainted(e.target.value)}
                      >
                        {EvBoyalı.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      İç Kapı ve Pencerelerde Herhangi Bir Sorun veya Hasar Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={damageDoors}
                        onChange={(e) => setDamageDoors(e.target.value)}
                      >
                        {İç.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                </InputHolder>
              )}
              {propertyType === "Arsa" && (
                <InputHolder>
                  <Search>
                    <Label>İmar durumu:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="ada, A efsanesi,......"
                        name="zoning"
                        value={zoning}
                        onChange={(e) => setZoning(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Metrekare fiyatı:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder=" ₺ 1500..."
                        name="areaSqftPrice"
                        value={areaSqftPrice}
                        onChange={(e) => setAreaSqftPrice(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Ada numarası:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="+90 Olmadan Numara Yaz0"
                        name="islandNumber"
                        value={islandNumber}
                        onChange={(e) => setIslandNumber(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Parsel numarası:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="1225"
                        name="parcelNumber"
                        value={parcelNumber}
                        onChange={(e) => setParcelNumber(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Kask (Emsal):</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="25463"
                        name="Kaks"
                        value={kaks}
                        onChange={(e) => setKaks(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Ölçer:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="3.5, 4.5......."
                        name="Gauge"
                        value={gauge}
                        onChange={(e) => setGauge(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Tapu durumu:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="müstakil parsel."
                        name="DeedStatus"
                        value={deedStatue}
                        onChange={(e) => setDeedStatus(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Altyapı durumu:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="arıtma, doğal gaz....."
                        name="InfraStatus"
                        value={infraStatue}
                        onChange={(e) => setInfraStatus(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Manzara:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="Boğaz, deniz,......"
                        name="View"
                        value={view}
                        onChange={(e) => setView(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu:</Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Takas:</Label>
                    <Selection>
                      <Select
                        value={swap}
                        onChange={(e) => setSwap(e.target.value)}
                      >
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
                  </Search>
                </InputHolder>
              )}
              {propertyType === "Villa" && (
                <InputHolder>
                  <Search>
                    <Label>Oda Sayısı:</Label>
                    <Selection>
                      <Select
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Bina Yaşı:</Label>
                    <Selection>
                      <Select
                        value={buildingAge}
                        onChange={(e) => setBuildingAge(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Binadaki Kat Sayısı:</Label>
                    <Selection>
                      <Select
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Isıtma sistemi:</Label>
                    <Selection>
                      <Select
                        value={heatingSystem}
                        onChange={(e) => setHeatingSystem(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Banyo Sayısı:</Label>
                    <Selection>
                      <Select
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Balkon:</Label>
                    <Selection>
                      <Select
                        value={balcony}
                        onChange={(e) => setBalcony(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Asansör:</Label>
                    <Selection>
                      <Select
                        value={lift}
                        onChange={(e) => setLift(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Otopark:</Label>
                    <Selection>
                      <Select
                        value={carPark}
                        onChange={(e) => setCarPark(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Sitede:</Label>
                    <Selection>
                      <Select
                        value={onSite}
                        onChange={(e) => setOnSite(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Aidat:</Label>
                    <Selection>
                      <Select
                        value={dues}
                        onChange={(e) => setDues(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kullanım Durumu:</Label>
                    <Selection>
                      <Select
                        value={usingStatus}
                        onChange={(e) => setUsingStatus(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu:</Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Takas:</Label>
                    <Selection>
                      <Select
                        value={swap}
                        onChange={(e) => setSwap(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>
                      Elektrik Tesisatında, Prizlerde, Düğmelerde Sorun veya
                      Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={wiringProblem}
                        onChange={(e) => setWiringProblem(e.target.value)}
                      >
                        {Elektrik.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Tesisat, Musluk, Su Giderlerinde Sorun veya Eksiklik Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={pipeLineProblem}
                        onChange={(e) => setPipeLineProblem(e.target.value)}
                      >
                        {Tesisat.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Doğalgaz tesisatında, kombide veya fırında herhangi bir
                      sorun veya eksiklik var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={naturalGasProblem}
                        onChange={(e) => setNaturalGasProblem(e.target.value)}
                      >
                        {Doğalgaz.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Mutfak Mobilyasında veya Mutfak Lavabosunda Herhangi Bir
                      Sorun veya Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={kitchenProblem}
                        onChange={(e) => setKitchenProblem(e.target.value)}
                      >
                        {Mutfak.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Duvarlarda veya Zeminlerde Çatlak veya Hasar Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={crackWalls}
                        onChange={(e) => setCrackWalls(e.target.value)}
                      >
                        {Duvarlarda.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Ev Boyalı mı?</Label>
                    <Selection>
                      <Select
                        value={painted}
                        onChange={(e) => setPainted(e.target.value)}
                      >
                        {EvBoyalı.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      İç Kapı ve Pencerelerde Herhangi Bir Sorun veya Hasar Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={damageDoors}
                        onChange={(e) => setDamageDoors(e.target.value)}
                      >
                        {İç.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                </InputHolder>
              )}
              {propertyType === "Yazilk" && (
                <InputHolder>
                  <Search>
                    <Label>Oda Sayısı:</Label>
                    <Selection>
                      <Select
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Bina Yaşı:</Label>
                    <Selection>
                      <Select
                        value={buildingAge}
                        onChange={(e) => setBuildingAge(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Binadaki Kat Sayısı:</Label>
                    <Selection>
                      <Select
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Isıtma sistemi:</Label>
                    <Selection>
                      <Select
                        value={heatingSystem}
                        onChange={(e) => setHeatingSystem(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Banyo Sayısı:</Label>
                    <Selection>
                      <Select
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Balkon:</Label>
                    <Selection>
                      <Select
                        value={balcony}
                        onChange={(e) => setBalcony(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Asansör:</Label>
                    <Selection>
                      <Select
                        value={lift}
                        onChange={(e) => setLift(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Otopark:</Label>
                    <Selection>
                      <Select
                        value={carPark}
                        onChange={(e) => setCarPark(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Sitede:</Label>
                    <Selection>
                      <Select
                        value={onSite}
                        onChange={(e) => setOnSite(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Aidat:</Label>
                    <Selection>
                      <Select
                        value={dues}
                        onChange={(e) => setDues(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kullanım Durumu:</Label>
                    <Selection>
                      <Select
                        value={usingStatus}
                        onChange={(e) => setUsingStatus(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu:</Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Takas:</Label>
                    <Selection>
                      <Select
                        value={swap}
                        onChange={(e) => setSwap(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>
                      Elektrik Tesisatında, Prizlerde, Düğmelerde Sorun veya
                      Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={wiringProblem}
                        onChange={(e) => setWiringProblem(e.target.value)}
                      >
                        {Elektrik.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Tesisat, Musluk, Su Giderlerinde Sorun veya Eksiklik Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={pipeLineProblem}
                        onChange={(e) => setPipeLineProblem(e.target.value)}
                      >
                        {Tesisat.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Doğalgaz tesisatında, kombide veya fırında herhangi bir
                      sorun veya eksiklik var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={naturalGasProblem}
                        onChange={(e) => setNaturalGasProblem(e.target.value)}
                      >
                        {Doğalgaz.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Mutfak Mobilyasında veya Mutfak Lavabosunda Herhangi Bir
                      Sorun veya Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={kitchenProblem}
                        onChange={(e) => setKitchenProblem(e.target.value)}
                      >
                        {Mutfak.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Duvarlarda veya Zeminlerde Çatlak veya Hasar Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={crackWalls}
                        onChange={(e) => setCrackWalls(e.target.value)}
                      >
                        {Duvarlarda.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Ev Boyalı mı?</Label>
                    <Selection>
                      <Select
                        value={painted}
                        onChange={(e) => setPainted(e.target.value)}
                      >
                        {EvBoyalı.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      İç Kapı ve Pencerelerde Herhangi Bir Sorun veya Hasar Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={damageDoors}
                        onChange={(e) => setDamageDoors(e.target.value)}
                      >
                        {İç.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                </InputHolder>
              )}
              {propertyType === "işyerleri" && (
                <InputHolder>
                  <Search>
                    <Label>Tip:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="Apartman Dairesi, İş Merkezi,......"
                        name="med"
                        value={med}
                        onChange={(e) => setMed(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Oda Sayısı:</Label>
                    <Selection>
                      <Select
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Mobilyalı:</Label>
                    <Selection>
                      <Select
                        value={furnished}
                        onChange={(e) => setFurnished(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Bina Yaşı:</Label>
                    <Selection>
                      <Select
                        value={buildingAge}
                        onChange={(e) => setBuildingAge(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Aidatlar (TL):</Label>
                    <Selection>
                      <Select
                        value={duesTL}
                        onChange={(e) => setDuesTL(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Otopark:</Label>
                    <Selection>
                      <Select
                        value={carPark}
                        onChange={(e) => setCarPark(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kullanım Durumu:</Label>
                    <Selection>
                      <Select
                        value={usingStatus}
                        onChange={(e) => setUsingStatus(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu:</Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Takas:</Label>
                    <Selection>
                      <Select
                        value={swap}
                        onChange={(e) => setSwap(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>
                      Elektrik Tesisatında, Prizlerde, Düğmelerde Sorun veya
                      Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={wiringProblem}
                        onChange={(e) => setWiringProblem(e.target.value)}
                      >
                        {Elektrik.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Tesisat, Musluk, Su Giderlerinde Sorun veya Eksiklik Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={pipeLineProblem}
                        onChange={(e) => setPipeLineProblem(e.target.value)}
                      >
                        {Tesisat.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Duvarlarda veya Zeminlerde Çatlak veya Hasar Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={crackWalls}
                        onChange={(e) => setCrackWalls(e.target.value)}
                      >
                        {Duvarlarda.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                </InputHolder>
              )}
              {propertyType === "Residans" && (
                <InputHolder>
                  <Search>
                    <Label>Oda Sayısı:</Label>
                    <Selection>
                      <Select
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Bina Yaşı:</Label>
                    <Selection>
                      <Select
                        value={buildingAge}
                        onChange={(e) => setBuildingAge(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Binadaki Kat Sayısı:</Label>
                    <Selection>
                      <Select
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Dairenin bulunduğu kat:</Label>
                    <Selection>
                      <Select
                        value={floorNumber}
                        onChange={(e) => setFloorNumber(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Isıtma sistemi:</Label>
                    <Selection>
                      <Select
                        value={heatingSystem}
                        onChange={(e) => setHeatingSystem(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Banyo Sayısı:</Label>
                    <Selection>
                      <Select
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Balkon:</Label>
                    <Selection>
                      <Select
                        value={balcony}
                        onChange={(e) => setBalcony(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Asansör:</Label>
                    <Selection>
                      <Select
                        value={lift}
                        onChange={(e) => setLift(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Otopark:</Label>
                    <Selection>
                      <Select
                        value={carPark}
                        onChange={(e) => setCarPark(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Sitede:</Label>
                    <Selection>
                      <Select
                        value={onSite}
                        onChange={(e) => setOnSite(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Aidat:</Label>
                    <Selection>
                      <Select
                        value={dues}
                        onChange={(e) => setDues(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kullanım Durumu:</Label>
                    <Selection>
                      <Select
                        value={usingStatus}
                        onChange={(e) => setUsingStatus(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu:</Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Tapu Durumu:</Label>
                    <Selection>
                      <Select
                        value={titleDeed}
                        onChange={(e) => setTitleDeed(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Takas:</Label>
                    <Selection>
                      <Select
                        value={swap}
                        onChange={(e) => setSwap(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>
                      Elektrik Tesisatında, Prizlerde, Düğmelerde Sorun veya
                      Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={wiringProblem}
                        onChange={(e) => setWiringProblem(e.target.value)}
                      >
                        {Elektrik.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Tesisat, Musluk, Su Giderlerinde Sorun veya Eksiklik Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={pipeLineProblem}
                        onChange={(e) => setPipeLineProblem(e.target.value)}
                      >
                        {Tesisat.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Doğalgaz tesisatında, kombide veya fırında herhangi bir
                      sorun veya eksiklik var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={naturalGasProblem}
                        onChange={(e) => setNaturalGasProblem(e.target.value)}
                      >
                        {Doğalgaz.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Mutfak Mobilyasında veya Mutfak Lavabosunda Herhangi Bir
                      Sorun veya Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={kitchenProblem}
                        onChange={(e) => setKitchenProblem(e.target.value)}
                      >
                        {Mutfak.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Duvarlarda veya Zeminlerde Çatlak veya Hasar Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={crackWalls}
                        onChange={(e) => setCrackWalls(e.target.value)}
                      >
                        {Duvarlarda.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Ev Boyalı mı?</Label>
                    <Selection>
                      <Select
                        value={painted}
                        onChange={(e) => setPainted(e.target.value)}
                      >
                        {EvBoyalı.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      İç Kapı ve Pencerelerde Herhangi Bir Sorun veya Hasar Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={damageDoors}
                        onChange={(e) => setDamageDoors(e.target.value)}
                      >
                        {İç.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                </InputHolder>
              )}
              {propertyType === "Bina" && (
                <InputHolder>
                  <Search>
                    <Label>Bina Yaşı:</Label>
                    <Selection>
                      <Select
                        value={buildingAge}
                        onChange={(e) => setBuildingAge(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kat Sayısı:</Label>
                    <Selection>
                      <Select
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kat Başına Daire Sayısı:</Label>
                    <Selection>
                      <Select
                        value={flatePerFloor}
                        onChange={(e) => setFlatePerFloor(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Isıtma sistemi:</Label>
                    <Selection>
                      <Select
                        value={heatingSystem}
                        onChange={(e) => setHeatingSystem(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Balkon:</Label>
                    <Selection>
                      <Select
                        value={balcony}
                        onChange={(e) => setBalcony(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Asansör:</Label>
                    <Selection>
                      <Select
                        value={lift}
                        onChange={(e) => setLift(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Otopark:</Label>
                    <Selection>
                      <Select
                        value={carPark}
                        onChange={(e) => setCarPark(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu:</Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Takas:</Label>
                    <Selection>
                      <Select
                        value={swap}
                        onChange={(e) => setSwap(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>
                      Elektrik Tesisatında, Prizlerde, Düğmelerde Sorun veya
                      Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={wiringProblem}
                        onChange={(e) => setWiringProblem(e.target.value)}
                      >
                        {Elektrik.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Tesisat, Musluk, Su Giderlerinde Sorun veya Eksiklik Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={pipeLineProblem}
                        onChange={(e) => setPipeLineProblem(e.target.value)}
                      >
                        {Tesisat.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Doğalgaz tesisatında, kombide veya fırında herhangi bir
                      sorun veya eksiklik var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={naturalGasProblem}
                        onChange={(e) => setNaturalGasProblem(e.target.value)}
                      >
                        {Doğalgaz.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Mutfak Mobilyasında veya Mutfak Lavabosunda Herhangi Bir
                      Sorun veya Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={kitchenProblem}
                        onChange={(e) => setKitchenProblem(e.target.value)}
                      >
                        {Mutfak.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Duvarlarda veya Zeminlerde Çatlak veya Hasar Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={crackWalls}
                        onChange={(e) => setCrackWalls(e.target.value)}
                      >
                        {Duvarlarda.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      İç Kapı ve Pencerelerde Herhangi Bir Sorun veya Hasar Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={damageDoors}
                        onChange={(e) => setDamageDoors(e.target.value)}
                      >
                        {İç.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Sitede: </Label>
                    <Selection>
                      <Select
                        value={onSite}
                        onChange={(e) => setOnSite(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Yangın çıkışı: </Label>
                    <Selection>
                      <Select
                        value={fireExit}
                        onChange={(e) => setFireExit(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Güvenlik: </Label>
                    <Selection>
                      <Select
                        value={security}
                        onChange={(e) => setSecurity(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu: </Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Bina yetkilisi: </Label>
                    <Selection>
                      <Select
                        value={buildingOffical}
                        onChange={(e) => setBuildingOffical(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Hidrofor: </Label>
                    <Selection>
                      <Select
                        value={hydro}
                        onChange={(e) => setHydro(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Jeneratör: </Label>
                    <Selection>
                      <Select
                        value={generator}
                        onChange={(e) => setGenerator(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                </InputHolder>
              )}
            </InputCardHolder>
          )}
          {purpose === "Kira" && (
            <InputCardHolder>
              <Search>
                <Label>Konum:</Label>
                <SearchBarContainer>
                  <Select
                    value={location}
                    onChange={(e) => {
                      handleCityChange(e);
                      setLocation(e.target.value);
                    }}
                    placeholder="İl, İlçe,......"
                    name="CitySearchBar"
                  >
                    {turkishCities.map((city, index) => (
                      <Option key={index} value={city}>
                        {city}
                      </Option>
                    ))}
                  </Select>
                  <SearchIcon>
                    <BsSearch />
                  </SearchIcon>
                </SearchBarContainer>
              </Search>
              <Search>
                <Label>Mahalle adı:</Label>
                <SearchBarContainer>
                  <CitySearchBar
                    type="text"
                    placeholder="mahalle adı,......"
                    name="CitySearchBar"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                  />
                  <SearchIcon>
                    <BsSearch />
                  </SearchIcon>
                </SearchBarContainer>
              </Search>
              <Search>
                <Label>Net m2:</Label>
                <SearchBarContainer>
                  <CitySearchBar
                    type="text"
                    placeholder="05 M2"
                    name="CitySearchBar"
                    value={areaSqft}
                    onChange={(e) => setAreaSqft(e.target.value)}
                  />
                  <SearchIcon>
                    M2
                    <FaAngleDown />
                  </SearchIcon>
                </SearchBarContainer>
              </Search>
              {propertyType === "Daire" && (
                <InputHolder>
                  <Search>
                    <Label>Kiracı Özellikleri:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="Fark etmez, Aile, Öğrenci...."
                        name="feature"
                        value={feature}
                        onChange={(e) => setFeature(e.target.value)}
                      />
                      <SearchIcon>
                        <FaAngleDown />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Oda Sayısı:</Label>
                    <Selection>
                      <Select
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Bina Yaşı:</Label>
                    <Selection>
                      <Select
                        value={buildingAge}
                        onChange={(e) => setBuildingAge(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Binadaki Kat Sayısı:</Label>
                    <Selection>
                      <Select
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Dairenin bulunduğu kat:</Label>
                    <Selection>
                      <Select
                        value={floorNumber}
                        onChange={(e) => setFloorNumber(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Isıtma sistemi:</Label>
                    <Selection>
                      <Select
                        value={heatingSystem}
                        onChange={(e) => setHeatingSystem(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Banyo Sayısı:</Label>
                    <Selection>
                      <Select
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Balkon:</Label>
                    <Selection>
                      <Select
                        value={balcony}
                        onChange={(e) => setBalcony(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Asansör:</Label>
                    <Selection>
                      <Select
                        value={lift}
                        onChange={(e) => setLift(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Otopark:</Label>
                    <Selection>
                      <Select
                        value={carPark}
                        onChange={(e) => setCarPark(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Sitede:</Label>
                    <Selection>
                      <Select
                        value={onSite}
                        onChange={(e) => setOnSite(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Aidat:</Label>
                    <Selection>
                      <Select
                        value={dues}
                        onChange={(e) => setDues(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Mobilyalı:</Label>
                    <Selection>
                      <Select
                        value={furnished}
                        onChange={(e) => setFurnished(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Depozito:</Label>
                    <Selection>
                      <Select
                        value={deposit}
                        onChange={(e) => setDeposit(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Elektrik Tesisatında, Prizlerde, Düğmelerde Sorun veya
                      Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={wiringProblem}
                        onChange={(e) => setWiringProblem(e.target.value)}
                      >
                        {Elektrik.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Tesisat, Musluk, Su Giderlerinde Sorun veya Eksiklik Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={pipeLineProblem}
                        onChange={(e) => setPipeLineProblem(e.target.value)}
                      >
                        {Tesisat.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Doğalgaz tesisatında, kombide veya fırında herhangi bir
                      sorun veya eksiklik var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={naturalGasProblem}
                        onChange={(e) => setNaturalGasProblem(e.target.value)}
                      >
                        {Doğalgaz.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Mutfak Mobilyasında veya Mutfak Lavabosunda Herhangi Bir
                      Sorun veya Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={kitchenProblem}
                        onChange={(e) => setKitchenProblem(e.target.value)}
                      >
                        {Mutfak.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Duvarlarda veya Zeminlerde Çatlak veya Hasar Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={crackWalls}
                        onChange={(e) => setCrackWalls(e.target.value)}
                      >
                        {Duvarlarda.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Ev Boyalı mı?</Label>
                    <Selection>
                      <Select
                        value={painted}
                        onChange={(e) => setPainted(e.target.value)}
                      >
                        {EvBoyalı.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      İç Kapı ve Pencerelerde Herhangi Bir Sorun veya Hasar Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={damageDoors}
                        onChange={(e) => setDamageDoors(e.target.value)}
                      >
                        {İç.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                </InputHolder>
              )}
              {propertyType === "Mustakil ev" && (
                <InputHolder>
                  <Search>
                    <Label>Kiracı Özellikleri:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="Fark etmez, Aile, Öğrenci...."
                        name="feature"
                        value={feature}
                        onChange={(e) => setFeature(e.target.value)}
                      />
                      <SearchIcon>
                        <FaAngleDown />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Oda Sayısı:</Label>
                    <Selection>
                      <Select
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Bina Yaşı:</Label>
                    <Selection>
                      <Select
                        value={buildingAge}
                        onChange={(e) => setBuildingAge(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Binadaki Kat Sayısı:</Label>
                    <Selection>
                      <Select
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Dairenin bulunduğu kat:</Label>
                    <Selection>
                      <Select
                        value={floorNumber}
                        onChange={(e) => setFloorNumber(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Isıtma sistemi:</Label>
                    <Selection>
                      <Select
                        value={heatingSystem}
                        onChange={(e) => setHeatingSystem(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Banyo Sayısı:</Label>
                    <Selection>
                      <Select
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Balkon:</Label>
                    <Selection>
                      <Select
                        value={balcony}
                        onChange={(e) => setBalcony(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Asansör:</Label>
                    <Selection>
                      <Select
                        value={lift}
                        onChange={(e) => setLift(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Otopark:</Label>
                    <Selection>
                      <Select
                        value={carPark}
                        onChange={(e) => setCarPark(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Sitede:</Label>
                    <Selection>
                      <Select
                        value={onSite}
                        onChange={(e) => setOnSite(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Aidat:</Label>
                    <Selection>
                      <Select
                        value={dues}
                        onChange={(e) => setDues(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kullanım Durumu:</Label>
                    <Selection>
                      <Select
                        value={usingStatus}
                        onChange={(e) => setUsingStatus(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu:</Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Tapu Durumu:</Label>
                    <Selection>
                      <Select
                        value={titleDeed}
                        onChange={(e) => setTitleDeed(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Takas:</Label>
                    <Selection>
                      <Select
                        value={swap}
                        onChange={(e) => setSwap(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>
                      Elektrik Tesisatında, Prizlerde, Düğmelerde Sorun veya
                      Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={wiringProblem}
                        onChange={(e) => setWiringProblem(e.target.value)}
                      >
                        {Elektrik.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Tesisat, Musluk, Su Giderlerinde Sorun veya Eksiklik Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={pipeLineProblem}
                        onChange={(e) => setPipeLineProblem(e.target.value)}
                      >
                        {Tesisat.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Doğalgaz tesisatında, kombide veya fırında herhangi bir
                      sorun veya eksiklik var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={naturalGasProblem}
                        onChange={(e) => setNaturalGasProblem(e.target.value)}
                      >
                        {Doğalgaz.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Mutfak Mobilyasında veya Mutfak Lavabosunda Herhangi Bir
                      Sorun veya Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={kitchenProblem}
                        onChange={(e) => setKitchenProblem(e.target.value)}
                      >
                        {Mutfak.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Duvarlarda veya Zeminlerde Çatlak veya Hasar Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={crackWalls}
                        onChange={(e) => setCrackWalls(e.target.value)}
                      >
                        {Duvarlarda.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Ev Boyalı mı?</Label>
                    <Selection>
                      <Select
                        value={painted}
                        onChange={(e) => setPainted(e.target.value)}
                      >
                        {EvBoyalı.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      İç Kapı ve Pencerelerde Herhangi Bir Sorun veya Hasar Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={damageDoors}
                        onChange={(e) => setDamageDoors(e.target.value)}
                      >
                        {İç.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                </InputHolder>
              )}
              {propertyType === "Arsa" && (
                <InputHolder>
                  <Search>
                    <Label>İmar durumu:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="ada, A efsanesi,......"
                        name="zoning"
                        value={zoning}
                        onChange={(e) => setZoning(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Metrekare fiyatı:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder=" ₺ 1500..."
                        name="areaSqftPrice"
                        value={areaSqftPrice}
                        onChange={(e) => setAreaSqftPrice(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Ada numarası:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="+90 Olmadan Numara Yaz0"
                        name="islandNumber"
                        value={islandNumber}
                        onChange={(e) => setIslandNumber(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Parsel numarası:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="1225"
                        name="parcelNumber"
                        value={parcelNumber}
                        onChange={(e) => setParcelNumber(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Kask (Emsal):</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="25463"
                        name="Kaks"
                        value={kaks}
                        onChange={(e) => setKaks(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Ölçer:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="3.5, 4.5......."
                        name="Gauge"
                        value={gauge}
                        onChange={(e) => setGauge(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Tapu durumu:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="müstakil parsel."
                        name="DeedStatus"
                        value={deedStatue}
                        onChange={(e) => setDeedStatus(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Altyapı durumu:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="arıtma, doğal gaz....."
                        name="InfraStatus"
                        value={infraStatue}
                        onChange={(e) => setInfraStatus(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Manzara:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="Boğaz, deniz,......"
                        name="View"
                        value={view}
                        onChange={(e) => setView(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu:</Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Takas:</Label>
                    <Selection>
                      <Select
                        value={swap}
                        onChange={(e) => setSwap(e.target.value)}
                      >
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
                  </Search>
                </InputHolder>
              )}
              {propertyType === "Villa" && (
                <InputHolder>
                  <Search>
                    <Label>Kiracı Özellikleri:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="Fark etmez, Aile, Öğrenci...."
                        name="feature"
                        value={feature}
                        onChange={(e) => setFeature(e.target.value)}
                      />
                      <SearchIcon>
                        <FaAngleDown />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Oda Sayısı:</Label>
                    <Selection>
                      <Select
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Bina Yaşı:</Label>
                    <Selection>
                      <Select
                        value={buildingAge}
                        onChange={(e) => setBuildingAge(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Binadaki Kat Sayısı:</Label>
                    <Selection>
                      <Select
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Isıtma sistemi:</Label>
                    <Selection>
                      <Select
                        value={heatingSystem}
                        onChange={(e) => setHeatingSystem(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Banyo Sayısı:</Label>
                    <Selection>
                      <Select
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Balkon:</Label>
                    <Selection>
                      <Select
                        value={balcony}
                        onChange={(e) => setBalcony(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Asansör:</Label>
                    <Selection>
                      <Select
                        value={lift}
                        onChange={(e) => setLift(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Otopark:</Label>
                    <Selection>
                      <Select
                        value={carPark}
                        onChange={(e) => setCarPark(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Sitede:</Label>
                    <Selection>
                      <Select
                        value={onSite}
                        onChange={(e) => setOnSite(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Aidat:</Label>
                    <Selection>
                      <Select
                        value={dues}
                        onChange={(e) => setDues(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kullanım Durumu:</Label>
                    <Selection>
                      <Select
                        value={usingStatus}
                        onChange={(e) => setUsingStatus(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu:</Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Takas:</Label>
                    <Selection>
                      <Select
                        value={swap}
                        onChange={(e) => setSwap(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>
                      Elektrik Tesisatında, Prizlerde, Düğmelerde Sorun veya
                      Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={wiringProblem}
                        onChange={(e) => setWiringProblem(e.target.value)}
                      >
                        {Elektrik.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Tesisat, Musluk, Su Giderlerinde Sorun veya Eksiklik Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={pipeLineProblem}
                        onChange={(e) => setPipeLineProblem(e.target.value)}
                      >
                        {Tesisat.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Doğalgaz tesisatında, kombide veya fırında herhangi bir
                      sorun veya eksiklik var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={naturalGasProblem}
                        onChange={(e) => setNaturalGasProblem(e.target.value)}
                      >
                        {Doğalgaz.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Mutfak Mobilyasında veya Mutfak Lavabosunda Herhangi Bir
                      Sorun veya Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={kitchenProblem}
                        onChange={(e) => setKitchenProblem(e.target.value)}
                      >
                        {Mutfak.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Duvarlarda veya Zeminlerde Çatlak veya Hasar Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={crackWalls}
                        onChange={(e) => setCrackWalls(e.target.value)}
                      >
                        {Duvarlarda.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Ev Boyalı mı?</Label>
                    <Selection>
                      <Select
                        value={painted}
                        onChange={(e) => setPainted(e.target.value)}
                      >
                        {EvBoyalı.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      İç Kapı ve Pencerelerde Herhangi Bir Sorun veya Hasar Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={damageDoors}
                        onChange={(e) => setDamageDoors(e.target.value)}
                      >
                        {İç.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                </InputHolder>
              )}
              {propertyType === "Yazilk" && (
                <InputHolder>
                  <Search>
                    <Label>Oda Sayısı:</Label>
                    <Selection>
                      <Select
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Bina Yaşı:</Label>
                    <Selection>
                      <Select
                        value={buildingAge}
                        onChange={(e) => setBuildingAge(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Binadaki Kat Sayısı:</Label>
                    <Selection>
                      <Select
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Isıtma sistemi:</Label>
                    <Selection>
                      <Select
                        value={heatingSystem}
                        onChange={(e) => setHeatingSystem(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Banyo Sayısı:</Label>
                    <Selection>
                      <Select
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Balkon:</Label>
                    <Selection>
                      <Select
                        value={balcony}
                        onChange={(e) => setBalcony(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Asansör:</Label>
                    <Selection>
                      <Select
                        value={lift}
                        onChange={(e) => setLift(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Otopark:</Label>
                    <Selection>
                      <Select
                        value={carPark}
                        onChange={(e) => setCarPark(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Sitede:</Label>
                    <Selection>
                      <Select
                        value={onSite}
                        onChange={(e) => setOnSite(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Aidat:</Label>
                    <Selection>
                      <Select
                        value={dues}
                        onChange={(e) => setDues(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kullanım Durumu:</Label>
                    <Selection>
                      <Select
                        value={usingStatus}
                        onChange={(e) => setUsingStatus(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu:</Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Takas:</Label>
                    <Selection>
                      <Select
                        value={swap}
                        onChange={(e) => setSwap(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>
                      Elektrik Tesisatında, Prizlerde, Düğmelerde Sorun veya
                      Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={wiringProblem}
                        onChange={(e) => setWiringProblem(e.target.value)}
                      >
                        {Elektrik.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Tesisat, Musluk, Su Giderlerinde Sorun veya Eksiklik Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={pipeLineProblem}
                        onChange={(e) => setPipeLineProblem(e.target.value)}
                      >
                        {Tesisat.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Doğalgaz tesisatında, kombide veya fırında herhangi bir
                      sorun veya eksiklik var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={naturalGasProblem}
                        onChange={(e) => setNaturalGasProblem(e.target.value)}
                      >
                        {Doğalgaz.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Mutfak Mobilyasında veya Mutfak Lavabosunda Herhangi Bir
                      Sorun veya Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={kitchenProblem}
                        onChange={(e) => setKitchenProblem(e.target.value)}
                      >
                        {Mutfak.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Duvarlarda veya Zeminlerde Çatlak veya Hasar Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={crackWalls}
                        onChange={(e) => setCrackWalls(e.target.value)}
                      >
                        {Duvarlarda.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Ev Boyalı mı?</Label>
                    <Selection>
                      <Select
                        value={painted}
                        onChange={(e) => setPainted(e.target.value)}
                      >
                        {EvBoyalı.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      İç Kapı ve Pencerelerde Herhangi Bir Sorun veya Hasar Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={damageDoors}
                        onChange={(e) => setDamageDoors(e.target.value)}
                      >
                        {İç.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                </InputHolder>
              )}
              {propertyType === "işyerleri" && (
                <InputHolder>
                  <Search>
                    <Label>Tip:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="Apartman Dairesi, İş Merkezi,......"
                        name="med"
                        value={med}
                        onChange={(e) => setMed(e.target.value)}
                      />
                      <SearchIcon>
                        <BsSearch />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Oda Sayısı:</Label>
                    <Selection>
                      <Select
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Mobilyalı:</Label>
                    <Selection>
                      <Select
                        value={furnished}
                        onChange={(e) => setFurnished(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Bina Yaşı:</Label>
                    <Selection>
                      <Select
                        value={buildingAge}
                        onChange={(e) => setBuildingAge(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Aidatlar (TL):</Label>
                    <Selection>
                      <Select
                        value={duesTL}
                        onChange={(e) => setDuesTL(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Otopark:</Label>
                    <Selection>
                      <Select
                        value={carPark}
                        onChange={(e) => setCarPark(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kullanım Durumu:</Label>
                    <Selection>
                      <Select
                        value={usingStatus}
                        onChange={(e) => setUsingStatus(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu:</Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Takas:</Label>
                    <Selection>
                      <Select
                        value={swap}
                        onChange={(e) => setSwap(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>
                      Elektrik Tesisatında, Prizlerde, Düğmelerde Sorun veya
                      Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={wiringProblem}
                        onChange={(e) => setWiringProblem(e.target.value)}
                      >
                        {Elektrik.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Tesisat, Musluk, Su Giderlerinde Sorun veya Eksiklik Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={pipeLineProblem}
                        onChange={(e) => setPipeLineProblem(e.target.value)}
                      >
                        {Tesisat.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Duvarlarda veya Zeminlerde Çatlak veya Hasar Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={crackWalls}
                        onChange={(e) => setCrackWalls(e.target.value)}
                      >
                        {Duvarlarda.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                </InputHolder>
              )}
              {propertyType === "Residans" && (
                <InputHolder>
                  <Search>
                    <Label>Kiracı Özellikleri:</Label>
                    <SearchBarContainer>
                      <CitySearchBar
                        type="text"
                        placeholder="Fark etmez, Aile, Öğrenci...."
                        name="feature"
                        value={feature}
                        onChange={(e) => setFeature(e.target.value)}
                      />
                      <SearchIcon>
                        <FaAngleDown />
                      </SearchIcon>
                    </SearchBarContainer>
                  </Search>
                  <Search>
                    <Label>Oda Sayısı:</Label>
                    <Selection>
                      <Select
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Bina Yaşı:</Label>
                    <Selection>
                      <Select
                        value={buildingAge}
                        onChange={(e) => setBuildingAge(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Binadaki Kat Sayısı:</Label>
                    <Selection>
                      <Select
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Dairenin bulunduğu kat:</Label>
                    <Selection>
                      <Select
                        value={floorNumber}
                        onChange={(e) => setFloorNumber(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Isıtma sistemi:</Label>
                    <Selection>
                      <Select
                        value={heatingSystem}
                        onChange={(e) => setHeatingSystem(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Banyo Sayısı:</Label>
                    <Selection>
                      <Select
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Balkon:</Label>
                    <Selection>
                      <Select
                        value={balcony}
                        onChange={(e) => setBalcony(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Asansör:</Label>
                    <Selection>
                      <Select
                        value={lift}
                        onChange={(e) => setLift(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Otopark:</Label>
                    <Selection>
                      <Select
                        value={carPark}
                        onChange={(e) => setCarPark(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Sitede:</Label>
                    <Selection>
                      <Select
                        value={onSite}
                        onChange={(e) => setOnSite(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Aidat:</Label>
                    <Selection>
                      <Select
                        value={dues}
                        onChange={(e) => setDues(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Mobilyalı:</Label>
                    <Selection>
                      <Select
                        value={furnished}
                        onChange={(e) => setFurnished(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Depozito:</Label>
                    <Selection>
                      <Select
                        value={deposit}
                        onChange={(e) => setDeposit(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Elektrik Tesisatında, Prizlerde, Düğmelerde Sorun veya
                      Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={wiringProblem}
                        onChange={(e) => setWiringProblem(e.target.value)}
                      >
                        {Elektrik.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Tesisat, Musluk, Su Giderlerinde Sorun veya Eksiklik Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={pipeLineProblem}
                        onChange={(e) => setPipeLineProblem(e.target.value)}
                      >
                        {Tesisat.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Doğalgaz tesisatında, kombide veya fırında herhangi bir
                      sorun veya eksiklik var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={naturalGasProblem}
                        onChange={(e) => setNaturalGasProblem(e.target.value)}
                      >
                        {Doğalgaz.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Mutfak Mobilyasında veya Mutfak Lavabosunda Herhangi Bir
                      Sorun veya Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={kitchenProblem}
                        onChange={(e) => setKitchenProblem(e.target.value)}
                      >
                        {Mutfak.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Duvarlarda veya Zeminlerde Çatlak veya Hasar Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={crackWalls}
                        onChange={(e) => setCrackWalls(e.target.value)}
                      >
                        {Duvarlarda.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Ev Boyalı mı?</Label>
                    <Selection>
                      <Select
                        value={painted}
                        onChange={(e) => setPainted(e.target.value)}
                      >
                        {EvBoyalı.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      İç Kapı ve Pencerelerde Herhangi Bir Sorun veya Hasar Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={damageDoors}
                        onChange={(e) => setDamageDoors(e.target.value)}
                      >
                        {İç.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                </InputHolder>
              )}
              {propertyType === "Bina" && (
                <InputHolder>
                  <Search>
                    <Label>Bina Yaşı:</Label>
                    <Selection>
                      <Select
                        value={buildingAge}
                        onChange={(e) => setBuildingAge(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kat Sayısı:</Label>
                    <Selection>
                      <Select
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kat Başına Daire Sayısı:</Label>
                    <Selection>
                      <Select
                        value={flatePerFloor}
                        onChange={(e) => setFlatePerFloor(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Isıtma sistemi:</Label>
                    <Selection>
                      <Select
                        value={heatingSystem}
                        onChange={(e) => setHeatingSystem(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Balkon:</Label>
                    <Selection>
                      <Select
                        value={balcony}
                        onChange={(e) => setBalcony(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Asansör:</Label>
                    <Selection>
                      <Select
                        value={lift}
                        onChange={(e) => setLift(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Otopark:</Label>
                    <Selection>
                      <Select
                        value={carPark}
                        onChange={(e) => setCarPark(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu:</Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>Takas:</Label>
                    <Selection>
                      <Select
                        value={swap}
                        onChange={(e) => setSwap(e.target.value)}
                      >
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
                  </Search>
                  <Search>
                    <Label>
                      Elektrik Tesisatında, Prizlerde, Düğmelerde Sorun veya
                      Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={wiringProblem}
                        onChange={(e) => setWiringProblem(e.target.value)}
                      >
                        {Elektrik.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Tesisat, Musluk, Su Giderlerinde Sorun veya Eksiklik Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={pipeLineProblem}
                        onChange={(e) => setPipeLineProblem(e.target.value)}
                      >
                        {Tesisat.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Doğalgaz tesisatında, kombide veya fırında herhangi bir
                      sorun veya eksiklik var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={naturalGasProblem}
                        onChange={(e) => setNaturalGasProblem(e.target.value)}
                      >
                        {Doğalgaz.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Mutfak Mobilyasında veya Mutfak Lavabosunda Herhangi Bir
                      Sorun veya Eksiklik Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={kitchenProblem}
                        onChange={(e) => setKitchenProblem(e.target.value)}
                      >
                        {Mutfak.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      Duvarlarda veya Zeminlerde Çatlak veya Hasar Var mı?
                    </Label>
                    <Selection>
                      <Select
                        value={crackWalls}
                        onChange={(e) => setCrackWalls(e.target.value)}
                      >
                        {Duvarlarda.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>
                      İç Kapı ve Pencerelerde Herhangi Bir Sorun veya Hasar Var
                      mı?
                    </Label>
                    <Selection>
                      <Select
                        value={damageDoors}
                        onChange={(e) => setDamageDoors(e.target.value)}
                      >
                        {İç.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Sitede: </Label>
                    <Selection>
                      <Select
                        value={onSite}
                        onChange={(e) => setOnSite(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Yangın çıkışı: </Label>
                    <Selection>
                      <Select
                        value={fireExit}
                        onChange={(e) => setFireExit(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Güvenlik: </Label>
                    <Selection>
                      <Select
                        value={security}
                        onChange={(e) => setSecurity(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Kredi Uygunluğu: </Label>
                    <Selection>
                      <Select
                        value={creditEligibility}
                        onChange={(e) => setCreditEligibility(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Bina yetkilisi: </Label>
                    <Selection>
                      <Select
                        value={buildingOffical}
                        onChange={(e) => setBuildingOffical(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Hidrofor: </Label>
                    <Selection>
                      <Select
                        value={hydro}
                        onChange={(e) => setHydro(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                  <Search>
                    <Label>Jeneratör: </Label>
                    <Selection>
                      <Select
                        value={generator}
                        onChange={(e) => setGenerator(e.target.value)}
                      >
                        {CE.map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                      <Drag>
                        <FaAngleDown />
                      </Drag>
                    </Selection>
                  </Search>
                </InputHolder>
              )}
            </InputCardHolder>
          )}
          <SubmitButton onClick={handleSubmit}>GÖNDERMEK</SubmitButton>
        </InputfieldContainer>
        <RightContainer>
          <OutputContainer>
            <OuterContainerHeading>Ön izleme</OuterContainerHeading>
            <InputPictureContainer>
              <InputContainerPicture>
                <InputPicture
                  type="file"
                  accept="image/*"
                  className="input-image"
                  hidden
                  multiple
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                {images.length ? (
                  images.map((image, index) => (
                    <InputPictures key={index}>
                      <InputImage
                        src={URL.createObjectURL(image)}
                        alt={fileNames[index]}
                      />
                      <PictureEdit>
                        <PiFileImageFill />
                        <PictureTitle>{fileNames[index]}</PictureTitle>
                        <Picturedeleat>
                          <MdDeleteSweep onClick={() => handleDelete(index)} />
                        </Picturedeleat>
                      </PictureEdit>
                    </InputPictures>
                  ))
                ) : (
                  <InputIcon onClick={() => fileInputRef.current.click()}>
                    <BsImageFill />
                    <InputText>Lütfen mülkünüzü yükleyin</InputText>
                  </InputIcon>
                )}
              </InputContainerPicture>
            </InputPictureContainer>
            <PriceContrainer>
              <PriceShow>
                <Pricetag> ₺</Pricetag>
                <Price
                  type="tel"
                  placeholder="Price"
                  name="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </PriceShow>
              <Type>{propertyType}</Type>
            </PriceContrainer>
            <BuildingComponetsContainer>
              <BuildingComponet>
                <ComponentsIcon src={BedC}></ComponentsIcon>
                <ComponentsText>{rooms}</ComponentsText>
              </BuildingComponet>
              <BuildingComponet>
                <ComponentsIcon src={WashC}></ComponentsIcon>
                <ComponentsText>{bathrooms}</ComponentsText>
              </BuildingComponet>
              <BuildingComponet>
                <ComponentsIcon src={AreaC}></ComponentsIcon>
                <ComponentsText>{areaSqft}</ComponentsText>
              </BuildingComponet>
            </BuildingComponetsContainer>
            <ProperityTitle>Mülkiyet Başlığı</ProperityTitle>
            <TitleDisplay
              type="text"
              placeholder="Başlığınızı Girin"
              name="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Title>Tanım</Title>
            <TitleDisplay
              type="text"
              placeholder="Açıklama Yaz"
              name="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Title>Durum</Title>
            <TitleDisplay
              type="text"
              placeholder="Adres yaz"
              name="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </OutputContainer>
          {propertyType === "Daire" && (
            <InputfieldContainer2>
              <HeadingInput2>Genel Özellikler:</HeadingInput2>
              <Search>
                <Label>Ön:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Ön:..."
                      className="select-input"
                      value={ÖnOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag onClick={() => toggleMenu("Ön:")}>
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Ön:"}>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="kuzey"
                        checked={!!values1["kuzey"]}
                        onChange={handleCheckboxChange1}
                      />
                      kuzey
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="kuzeydoğu"
                        checked={!!values1["kuzeydoğu"]}
                        onChange={handleCheckboxChange1}
                      />
                      kuzeydoğu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="kuzeybatı"
                        checked={!!values1["kuzeybatı"]}
                        onChange={handleCheckboxChange1}
                      />
                      Kuzey Batı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="güney"
                        checked={!!values1["güney"]}
                        onChange={handleCheckboxChange1}
                      />
                      güney
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="güneydoğu"
                        checked={!!values1["güneydoğu"]}
                        onChange={handleCheckboxChange1}
                      />
                      güneydoğu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="doğu"
                        checked={!!values1["doğu"]}
                        onChange={handleCheckboxChange1}
                      />
                      doğu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="güneybatı"
                        checked={!!values1["güneybatı"]}
                        onChange={handleCheckboxChange1}
                      />
                      güneybatı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="batı"
                        checked={!!values1["batı"]}
                        onChange={handleCheckboxChange1}
                      />
                      batı
                    </OptionLabel>
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Dahili Özellikler:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="ADSLinternet......."
                      className="select-input"
                      value={selectedOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Dahili Özellikler:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Dahili Özellikler:"}>
                    {[
                      "ADSLinternet",
                      "fiber internet",
                      "hırsız alarmı",
                      "akıllı ev",
                      "Amerikan mutfağı",
                      "yerleşik mutfak",
                      "Şofben",
                      "Alarm (Yangın)",
                      "Amerikan Kapı",
                      "Mutfak (Ankastre)",
                      "Marley",
                      "Ankastre Fırın",
                      "Barbekü",
                      "Beyaz Eşya",
                      "Alüminyum Doğrama",
                      "Boyalı",
                      "Bulaşık Makinesi",
                      "Buzdolabı",
                      "Çamaşır Makinesi",
                      "Çamaşır Kurutma Makinesi",
                      "Çamaşır Odası",
                      "Çelik Kapı",
                      "Duşakabin",
                      "Duvar Kağıdı",
                      "Ebeveyn Banyosu",
                      "Firin",
                      "Giyinme Odası",
                      "Gömme Dolap",
                      "Görüntülü Diafon",
                      "Hilton Banyo",
                      "Parke Zemin",
                      "Isıcam",
                      "Jakuzi",
                      "Mutfak Doğalgazı",
                      "Kiler",
                      "Klima",
                      "Küvet",
                      "Laminat Zemin",
                      "Amerikan Mutfak",
                      "Mobilya",
                      "Alaturka Tuvalet",
                      "Kartonpiyer",
                      "Panjur/Jaluzi",
                      "Intercom Sistemi",
                      "Mutfak (Laminat)",
                      "PVC Doğrama",
                      "Seramik Zemin",
                      "Set Üstü Ocak",
                      "Spot Aydınlatma",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values2[option]}
                          onChange={handleCheckboxChange}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Harici Özellikler:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Araç Şarj İstasyonu......."
                      className="select-input"
                      value={HariciOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Harici Özellikler:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Harici Özellikler:"}>
                    {[
                      "Jeneratör",
                      "Yangın Merdiveni",
                      "Buhar Odası",
                      "24 Saat Güvenlik",
                      "Araç Şarj İstasyonu",
                      "Hamam",
                      "Hidrofor",
                      "Isı Yalıtımı",
                      "Kablo TV",
                      "Apartman Görevlisi",
                      "Kamera Sistemi",
                      "Kreş",
                      "Müstakil Havuzlu",
                      "Spor Alanı",
                      "Yüzme Havuzu (Açık)",
                      "Sauna",
                      "Siding",
                      "Su Deposu",
                      "Yüzme Havuzu (Kapalı)",
                      "Tenis Kortu",
                      "Uydu",
                      "Çocuk Oyun Parkı",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values3[option]}
                          onChange={handleCheckboxChange3}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Yangın Merdiveni
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Buhar Odası
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      24 Saat Güvenlik
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Araç Şarj İstasyonu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Hamam
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Hidrofor
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Isı Yalıtımı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kablo TV
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Apartman Görevlisi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kamera Sistemi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kreş
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Müstakil Havuzlu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Spor Alanı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Yüzme Havuzu (Açık)
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Sauna
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Siding
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Su Deposu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Yüzme Havuzu (Kapalı)
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Tenis Kortu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Uydu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Çocuk Oyun Parkı
                    </OptionLabel>
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Etrafında neler var:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Alışveriş Merkezi......."
                      className="select-input"
                      value={EtrafındaOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Etrafında neler var:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer
                    showMenu={openMenu === "Etrafında neler var:"}
                  >
                    {[
                      "Belediye",
                      "Cami",
                      "Cemevi",
                      "Denize Sıfır",
                      "Alışveriş Merkezi",
                      "Eczane",
                      "İtfaiye",
                      "Fuar",
                      "Göle Sıfır",
                      "Eğlence Merkezi",
                      "Hastane",
                      "Havra",
                      "Kilise",
                      "Lise",
                      "İlkokul-Ortaokul",
                      "Plaj",
                      "Polis Merkezi",
                      "Semt Pazarı",
                      "Spor Salonu",
                      "Şehir Merkezi",
                      "Market",
                      "Sağlık Ocağı",
                      "Park",
                      "Üniversite",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values4[option]}
                          onChange={handleCheckboxChange4}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Cami
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Cemevi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Denize Sıfır
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Alışveriş Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Eczane
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      İtfaiye
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Fuar
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Göle Sıfır
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Eğlence Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Hastane
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Havra
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kilise
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Lise
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      İlkokul-Ortaokul
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Plaj
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Polis Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Semt Pazarı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Spor Salonu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Şehir Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Market
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Sağlık Ocağı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Park
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Üniversite
                    </OptionLabel>
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Ulaşım Tesisi:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Anayol......."
                      className="select-input"
                      value={UlaşımOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag onClick={() => toggleMenu("Ulaşım Tesisi:")}>
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Ulaşım Tesisi:"}>
                    {[
                      "Anayol",
                      "Avrasya Tüneli",
                      "Boğaz Köprüleri",
                      "Cadde",
                      "Deniz Otobüsü",
                      "Dolmuş",
                      "E-5",
                      "İskele",
                      "Marmaray",
                      "Metro",
                      "Metrobüs",
                      "Minibüs",
                      "Otobüs Durağı",
                      "Sahil",
                      "Teleferik",
                      "TEM",
                      "Tramvay",
                      "Troleybüs",
                      "Tren İstasyonu",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values5[option]}
                          onChange={handleCheckboxChange5}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Daire Görünümü:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Boğaz......."
                      className="select-input"
                      value={DaireOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag onClick={() => toggleMenu("Daire Görünümü:")}>
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Daire Görünümü:"}>
                    {[
                      "Boğaz",
                      "Deniz",
                      "Doğa",
                      "Göl",
                      "Havuz",
                      "Şehir",
                      "Park & Yeşil Alan",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values6[option]}
                          onChange={handleCheckboxChange6}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
            </InputfieldContainer2>
          )}
          {propertyType === "Mustakil ev" && (
            <InputfieldContainer2>
              <HeadingInput2>Genel Özellikler:</HeadingInput2>
              <Search>
                <Label>Ön:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Ön:..."
                      className="select-input"
                      value={ÖnOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag onClick={() => toggleMenu("Ön:")}>
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Ön:"}>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="kuzey"
                        checked={!!values1["kuzey"]}
                        onChange={handleCheckboxChange1}
                      />
                      kuzey
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="kuzeydoğu"
                        checked={!!values1["kuzeydoğu"]}
                        onChange={handleCheckboxChange1}
                      />
                      kuzeydoğu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="kuzeybatı"
                        checked={!!values1["kuzeybatı"]}
                        onChange={handleCheckboxChange1}
                      />
                      Kuzey Batı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="güney"
                        checked={!!values1["güney"]}
                        onChange={handleCheckboxChange1}
                      />
                      güney
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="güneydoğu"
                        checked={!!values1["güneydoğu"]}
                        onChange={handleCheckboxChange1}
                      />
                      güneydoğu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="doğu"
                        checked={!!values1["doğu"]}
                        onChange={handleCheckboxChange1}
                      />
                      doğu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="güneybatı"
                        checked={!!values1["güneybatı"]}
                        onChange={handleCheckboxChange1}
                      />
                      güneybatı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="batı"
                        checked={!!values1["batı"]}
                        onChange={handleCheckboxChange1}
                      />
                      batı
                    </OptionLabel>
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Dahili Özellikler:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="ADSLinternet......."
                      className="select-input"
                      value={selectedOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Dahili Özellikler:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Dahili Özellikler:"}>
                    {[
                      "ADSLinternet",
                      "fiber internet",
                      "hırsız alarmı",
                      "akıllı ev",
                      "Amerikan mutfağı",
                      "yerleşik mutfak",
                      "Şofben",
                      "Alarm (Yangın)",
                      "Amerikan Kapı",
                      "Mutfak (Ankastre)",
                      "Marley",
                      "Ankastre Fırın",
                      "Barbekü",
                      "Beyaz Eşya",
                      "Alüminyum Doğrama",
                      "Boyalı",
                      "Bulaşık Makinesi",
                      "Buzdolabı",
                      "Çamaşır Makinesi",
                      "Çamaşır Kurutma Makinesi",
                      "Çamaşır Odası",
                      "Çelik Kapı",
                      "Duşakabin",
                      "Duvar Kağıdı",
                      "Ebeveyn Banyosu",
                      "Firin",
                      "Giyinme Odası",
                      "Gömme Dolap",
                      "Görüntülü Diafon",
                      "Hilton Banyo",
                      "Parke Zemin",
                      "Isıcam",
                      "Jakuzi",
                      "Mutfak Doğalgazı",
                      "Kiler",
                      "Klima",
                      "Küvet",
                      "Laminat Zemin",
                      "Amerikan Mutfak",
                      "Mobilya",
                      "Alaturka Tuvalet",
                      "Kartonpiyer",
                      "Panjur/Jaluzi",
                      "Intercom Sistemi",
                      "Mutfak (Laminat)",
                      "PVC Doğrama",
                      "Seramik Zemin",
                      "Set Üstü Ocak",
                      "Spot Aydınlatma",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values2[option]}
                          onChange={handleCheckboxChange}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Harici Özellikler:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Araç Şarj İstasyonu......."
                      className="select-input"
                      value={HariciOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Harici Özellikler:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Harici Özellikler:"}>
                    {[
                      "Jeneratör",
                      "Yangın Merdiveni",
                      "Buhar Odası",
                      "24 Saat Güvenlik",
                      "Araç Şarj İstasyonu",
                      "Hamam",
                      "Hidrofor",
                      "Isı Yalıtımı",
                      "Kablo TV",
                      "Apartman Görevlisi",
                      "Kamera Sistemi",
                      "Kreş",
                      "Müstakil Havuzlu",
                      "Spor Alanı",
                      "Yüzme Havuzu (Açık)",
                      "Sauna",
                      "Siding",
                      "Su Deposu",
                      "Yüzme Havuzu (Kapalı)",
                      "Tenis Kortu",
                      "Uydu",
                      "Çocuk Oyun Parkı",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values3[option]}
                          onChange={handleCheckboxChange3}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Yangın Merdiveni
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Buhar Odası
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      24 Saat Güvenlik
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Araç Şarj İstasyonu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Hamam
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Hidrofor
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Isı Yalıtımı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kablo TV
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Apartman Görevlisi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kamera Sistemi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kreş
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Müstakil Havuzlu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Spor Alanı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Yüzme Havuzu (Açık)
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Sauna
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Siding
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Su Deposu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Yüzme Havuzu (Kapalı)
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Tenis Kortu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Uydu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Çocuk Oyun Parkı
                    </OptionLabel>
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Etrafında neler var:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Alışveriş Merkezi......."
                      className="select-input"
                      value={EtrafındaOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Etrafında neler var:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer
                    showMenu={openMenu === "Etrafında neler var:"}
                  >
                    {[
                      "Belediye",
                      "Cami",
                      "Cemevi",
                      "Denize Sıfır",
                      "Alışveriş Merkezi",
                      "Eczane",
                      "İtfaiye",
                      "Fuar",
                      "Göle Sıfır",
                      "Eğlence Merkezi",
                      "Hastane",
                      "Havra",
                      "Kilise",
                      "Lise",
                      "İlkokul-Ortaokul",
                      "Plaj",
                      "Polis Merkezi",
                      "Semt Pazarı",
                      "Spor Salonu",
                      "Şehir Merkezi",
                      "Market",
                      "Sağlık Ocağı",
                      "Park",
                      "Üniversite",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values4[option]}
                          onChange={handleCheckboxChange4}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Cami
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Cemevi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Denize Sıfır
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Alışveriş Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Eczane
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      İtfaiye
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Fuar
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Göle Sıfır
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Eğlence Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Hastane
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Havra
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kilise
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Lise
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      İlkokul-Ortaokul
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Plaj
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Polis Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Semt Pazarı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Spor Salonu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Şehir Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Market
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Sağlık Ocağı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Park
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Üniversite
                    </OptionLabel>
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Ulaşım Tesisi:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Anayol......."
                      className="select-input"
                      value={UlaşımOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag onClick={() => toggleMenu("Ulaşım Tesisi:")}>
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Ulaşım Tesisi:"}>
                    {[
                      "Anayol",
                      "Avrasya Tüneli",
                      "Boğaz Köprüleri",
                      "Cadde",
                      "Deniz Otobüsü",
                      "Dolmuş",
                      "E-5",
                      "İskele",
                      "Marmaray",
                      "Metro",
                      "Metrobüs",
                      "Minibüs",
                      "Otobüs Durağı",
                      "Sahil",
                      "Teleferik",
                      "TEM",
                      "Tramvay",
                      "Troleybüs",
                      "Tren İstasyonu",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values5[option]}
                          onChange={handleCheckboxChange5}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Daire Görünümü:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Boğaz......."
                      className="select-input"
                      value={DaireOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag onClick={() => toggleMenu("Daire Görünümü:")}>
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Daire Görünümü:"}>
                    {[
                      "Boğaz",
                      "Deniz",
                      "Doğa",
                      "Göl",
                      "Havuz",
                      "Şehir",
                      "Park & Yeşil Alan",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values6[option]}
                          onChange={handleCheckboxChange6}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
            </InputfieldContainer2>
          )}
          {propertyType === "Residans" && (
            <InputfieldContainer2>
              <HeadingInput2>Genel Özellikler:</HeadingInput2>
              <Search>
                <Label>Ön:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Ön:..."
                      className="select-input"
                      value={ÖnOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag onClick={() => toggleMenu("Ön:")}>
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Ön:"}>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="kuzey"
                        checked={!!values1["kuzey"]}
                        onChange={handleCheckboxChange1}
                      />
                      kuzey
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="kuzeydoğu"
                        checked={!!values1["kuzeydoğu"]}
                        onChange={handleCheckboxChange1}
                      />
                      kuzeydoğu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="kuzeybatı"
                        checked={!!values1["kuzeybatı"]}
                        onChange={handleCheckboxChange1}
                      />
                      Kuzey Batı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="güney"
                        checked={!!values1["güney"]}
                        onChange={handleCheckboxChange1}
                      />
                      güney
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="güneydoğu"
                        checked={!!values1["güneydoğu"]}
                        onChange={handleCheckboxChange1}
                      />
                      güneydoğu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="doğu"
                        checked={!!values1["doğu"]}
                        onChange={handleCheckboxChange1}
                      />
                      doğu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="güneybatı"
                        checked={!!values1["güneybatı"]}
                        onChange={handleCheckboxChange1}
                      />
                      güneybatı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="batı"
                        checked={!!values1["batı"]}
                        onChange={handleCheckboxChange1}
                      />
                      batı
                    </OptionLabel>
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Dahili Özellikler:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="ADSLinternet......."
                      className="select-input"
                      value={selectedOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Dahili Özellikler:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Dahili Özellikler:"}>
                    {[
                      "ADSLinternet",
                      "fiber internet",
                      "hırsız alarmı",
                      "akıllı ev",
                      "Amerikan mutfağı",
                      "yerleşik mutfak",
                      "Şofben",
                      "Alarm (Yangın)",
                      "Amerikan Kapı",
                      "Mutfak (Ankastre)",
                      "Marley",
                      "Ankastre Fırın",
                      "Barbekü",
                      "Beyaz Eşya",
                      "Alüminyum Doğrama",
                      "Boyalı",
                      "Bulaşık Makinesi",
                      "Buzdolabı",
                      "Çamaşır Makinesi",
                      "Çamaşır Kurutma Makinesi",
                      "Çamaşır Odası",
                      "Çelik Kapı",
                      "Duşakabin",
                      "Duvar Kağıdı",
                      "Ebeveyn Banyosu",
                      "Firin",
                      "Giyinme Odası",
                      "Gömme Dolap",
                      "Görüntülü Diafon",
                      "Hilton Banyo",
                      "Parke Zemin",
                      "Isıcam",
                      "Jakuzi",
                      "Mutfak Doğalgazı",
                      "Kiler",
                      "Klima",
                      "Küvet",
                      "Laminat Zemin",
                      "Amerikan Mutfak",
                      "Mobilya",
                      "Alaturka Tuvalet",
                      "Kartonpiyer",
                      "Panjur/Jaluzi",
                      "Intercom Sistemi",
                      "Mutfak (Laminat)",
                      "PVC Doğrama",
                      "Seramik Zemin",
                      "Set Üstü Ocak",
                      "Spot Aydınlatma",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values2[option]}
                          onChange={handleCheckboxChange}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Harici Özellikler:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Araç Şarj İstasyonu......."
                      className="select-input"
                      value={HariciOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Harici Özellikler:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Harici Özellikler:"}>
                    {[
                      "Jeneratör",
                      "Yangın Merdiveni",
                      "Buhar Odası",
                      "24 Saat Güvenlik",
                      "Araç Şarj İstasyonu",
                      "Hamam",
                      "Hidrofor",
                      "Isı Yalıtımı",
                      "Kablo TV",
                      "Apartman Görevlisi",
                      "Kamera Sistemi",
                      "Kreş",
                      "Müstakil Havuzlu",
                      "Spor Alanı",
                      "Yüzme Havuzu (Açık)",
                      "Sauna",
                      "Siding",
                      "Su Deposu",
                      "Yüzme Havuzu (Kapalı)",
                      "Tenis Kortu",
                      "Uydu",
                      "Çocuk Oyun Parkı",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values3[option]}
                          onChange={handleCheckboxChange3}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Yangın Merdiveni
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Buhar Odası
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      24 Saat Güvenlik
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Araç Şarj İstasyonu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Hamam
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Hidrofor
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Isı Yalıtımı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kablo TV
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Apartman Görevlisi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kamera Sistemi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kreş
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Müstakil Havuzlu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Spor Alanı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Yüzme Havuzu (Açık)
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Sauna
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Siding
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Su Deposu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Yüzme Havuzu (Kapalı)
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Tenis Kortu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Uydu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Çocuk Oyun Parkı
                    </OptionLabel>
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Etrafında neler var:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Alışveriş Merkezi......."
                      className="select-input"
                      value={EtrafındaOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Etrafında neler var:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer
                    showMenu={openMenu === "Etrafında neler var:"}
                  >
                    {[
                      "Belediye",
                      "Cami",
                      "Cemevi",
                      "Denize Sıfır",
                      "Alışveriş Merkezi",
                      "Eczane",
                      "İtfaiye",
                      "Fuar",
                      "Göle Sıfır",
                      "Eğlence Merkezi",
                      "Hastane",
                      "Havra",
                      "Kilise",
                      "Lise",
                      "İlkokul-Ortaokul",
                      "Plaj",
                      "Polis Merkezi",
                      "Semt Pazarı",
                      "Spor Salonu",
                      "Şehir Merkezi",
                      "Market",
                      "Sağlık Ocağı",
                      "Park",
                      "Üniversite",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values4[option]}
                          onChange={handleCheckboxChange4}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Cami
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Cemevi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Denize Sıfır
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Alışveriş Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Eczane
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      İtfaiye
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Fuar
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Göle Sıfır
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Eğlence Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Hastane
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Havra
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kilise
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Lise
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      İlkokul-Ortaokul
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Plaj
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Polis Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Semt Pazarı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Spor Salonu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Şehir Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Market
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Sağlık Ocağı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Park
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Üniversite
                    </OptionLabel>
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Ulaşım Tesisi:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Anayol......."
                      className="select-input"
                      value={UlaşımOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag onClick={() => toggleMenu("Ulaşım Tesisi:")}>
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Ulaşım Tesisi:"}>
                    {[
                      "Anayol",
                      "Avrasya Tüneli",
                      "Boğaz Köprüleri",
                      "Cadde",
                      "Deniz Otobüsü",
                      "Dolmuş",
                      "E-5",
                      "İskele",
                      "Marmaray",
                      "Metro",
                      "Metrobüs",
                      "Minibüs",
                      "Otobüs Durağı",
                      "Sahil",
                      "Teleferik",
                      "TEM",
                      "Tramvay",
                      "Troleybüs",
                      "Tren İstasyonu",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values5[option]}
                          onChange={handleCheckboxChange5}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Daire Görünümü:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Boğaz......."
                      className="select-input"
                      value={DaireOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag onClick={() => toggleMenu("Daire Görünümü:")}>
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Daire Görünümü:"}>
                    {[
                      "Boğaz",
                      "Deniz",
                      "Doğa",
                      "Göl",
                      "Havuz",
                      "Şehir",
                      "Park & Yeşil Alan",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values6[option]}
                          onChange={handleCheckboxChange6}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
            </InputfieldContainer2>
          )}
          {propertyType === "Villa" && (
            <InputfieldContainer2>
              <HeadingInput2>Genel Özellikler:</HeadingInput2>
              <Search>
                <Label>Ön:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Ön:..."
                      className="select-input"
                      value={ÖnOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag onClick={() => toggleMenu("Ön:")}>
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Ön:"}>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="kuzey"
                        checked={!!values1["kuzey"]}
                        onChange={handleCheckboxChange1}
                      />
                      kuzey
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="kuzeydoğu"
                        checked={!!values1["kuzeydoğu"]}
                        onChange={handleCheckboxChange1}
                      />
                      kuzeydoğu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="kuzeybatı"
                        checked={!!values1["kuzeybatı"]}
                        onChange={handleCheckboxChange1}
                      />
                      Kuzey Batı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="güney"
                        checked={!!values1["güney"]}
                        onChange={handleCheckboxChange1}
                      />
                      güney
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="güneydoğu"
                        checked={!!values1["güneydoğu"]}
                        onChange={handleCheckboxChange1}
                      />
                      güneydoğu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="doğu"
                        checked={!!values1["doğu"]}
                        onChange={handleCheckboxChange1}
                      />
                      doğu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="güneybatı"
                        checked={!!values1["güneybatı"]}
                        onChange={handleCheckboxChange1}
                      />
                      güneybatı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="batı"
                        checked={!!values1["batı"]}
                        onChange={handleCheckboxChange1}
                      />
                      batı
                    </OptionLabel>
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Dahili Özellikler:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="ADSLinternet......."
                      className="select-input"
                      value={selectedOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Dahili Özellikler:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Dahili Özellikler:"}>
                    {[
                      "ADSLinternet",
                      "fiber internet",
                      "hırsız alarmı",
                      "akıllı ev",
                      "Amerikan mutfağı",
                      "yerleşik mutfak",
                      "Şofben",
                      "Alarm (Yangın)",
                      "Amerikan Kapı",
                      "Mutfak (Ankastre)",
                      "Marley",
                      "Ankastre Fırın",
                      "Barbekü",
                      "Beyaz Eşya",
                      "Alüminyum Doğrama",
                      "Boyalı",
                      "Bulaşık Makinesi",
                      "Buzdolabı",
                      "Çamaşır Makinesi",
                      "Çamaşır Kurutma Makinesi",
                      "Çamaşır Odası",
                      "Çelik Kapı",
                      "Duşakabin",
                      "Duvar Kağıdı",
                      "Ebeveyn Banyosu",
                      "Firin",
                      "Giyinme Odası",
                      "Gömme Dolap",
                      "Görüntülü Diafon",
                      "Hilton Banyo",
                      "Parke Zemin",
                      "Isıcam",
                      "Jakuzi",
                      "Mutfak Doğalgazı",
                      "Kiler",
                      "Klima",
                      "Küvet",
                      "Laminat Zemin",
                      "Amerikan Mutfak",
                      "Mobilya",
                      "Alaturka Tuvalet",
                      "Kartonpiyer",
                      "Panjur/Jaluzi",
                      "Intercom Sistemi",
                      "Mutfak (Laminat)",
                      "PVC Doğrama",
                      "Seramik Zemin",
                      "Set Üstü Ocak",
                      "Spot Aydınlatma",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values2[option]}
                          onChange={handleCheckboxChange}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Harici Özellikler:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Araç Şarj İstasyonu......."
                      className="select-input"
                      value={HariciOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Harici Özellikler:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Harici Özellikler:"}>
                    {[
                      "Jeneratör",
                      "Yangın Merdiveni",
                      "Buhar Odası",
                      "24 Saat Güvenlik",
                      "Araç Şarj İstasyonu",
                      "Hamam",
                      "Hidrofor",
                      "Isı Yalıtımı",
                      "Kablo TV",
                      "Apartman Görevlisi",
                      "Kamera Sistemi",
                      "Kreş",
                      "Müstakil Havuzlu",
                      "Spor Alanı",
                      "Yüzme Havuzu (Açık)",
                      "Sauna",
                      "Siding",
                      "Su Deposu",
                      "Yüzme Havuzu (Kapalı)",
                      "Tenis Kortu",
                      "Uydu",
                      "Çocuk Oyun Parkı",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values3[option]}
                          onChange={handleCheckboxChange3}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Yangın Merdiveni
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Buhar Odası
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      24 Saat Güvenlik
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Araç Şarj İstasyonu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Hamam
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Hidrofor
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Isı Yalıtımı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kablo TV
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Apartman Görevlisi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kamera Sistemi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kreş
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Müstakil Havuzlu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Spor Alanı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Yüzme Havuzu (Açık)
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Sauna
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Siding
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Su Deposu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Yüzme Havuzu (Kapalı)
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Tenis Kortu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Uydu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Çocuk Oyun Parkı
                    </OptionLabel>
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Etrafında neler var:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Alışveriş Merkezi......."
                      className="select-input"
                      value={EtrafındaOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Etrafında neler var:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer
                    showMenu={openMenu === "Etrafında neler var:"}
                  >
                    {[
                      "Belediye",
                      "Cami",
                      "Cemevi",
                      "Denize Sıfır",
                      "Alışveriş Merkezi",
                      "Eczane",
                      "İtfaiye",
                      "Fuar",
                      "Göle Sıfır",
                      "Eğlence Merkezi",
                      "Hastane",
                      "Havra",
                      "Kilise",
                      "Lise",
                      "İlkokul-Ortaokul",
                      "Plaj",
                      "Polis Merkezi",
                      "Semt Pazarı",
                      "Spor Salonu",
                      "Şehir Merkezi",
                      "Market",
                      "Sağlık Ocağı",
                      "Park",
                      "Üniversite",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values4[option]}
                          onChange={handleCheckboxChange4}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Cami
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Cemevi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Denize Sıfır
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Alışveriş Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Eczane
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      İtfaiye
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Fuar
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Göle Sıfır
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Eğlence Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Hastane
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Havra
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kilise
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Lise
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      İlkokul-Ortaokul
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Plaj
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Polis Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Semt Pazarı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Spor Salonu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Şehir Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Market
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Sağlık Ocağı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Park
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Üniversite
                    </OptionLabel>
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Ulaşım Tesisi:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Anayol......."
                      className="select-input"
                      value={UlaşımOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag onClick={() => toggleMenu("Ulaşım Tesisi:")}>
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Ulaşım Tesisi:"}>
                    {[
                      "Anayol",
                      "Avrasya Tüneli",
                      "Boğaz Köprüleri",
                      "Cadde",
                      "Deniz Otobüsü",
                      "Dolmuş",
                      "E-5",
                      "İskele",
                      "Marmaray",
                      "Metro",
                      "Metrobüs",
                      "Minibüs",
                      "Otobüs Durağı",
                      "Sahil",
                      "Teleferik",
                      "TEM",
                      "Tramvay",
                      "Troleybüs",
                      "Tren İstasyonu",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values5[option]}
                          onChange={handleCheckboxChange5}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Daire Görünümü:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Boğaz......."
                      className="select-input"
                      value={DaireOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag onClick={() => toggleMenu("Daire Görünümü:")}>
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Daire Görünümü:"}>
                    {[
                      "Boğaz",
                      "Deniz",
                      "Doğa",
                      "Göl",
                      "Havuz",
                      "Şehir",
                      "Park & Yeşil Alan",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values6[option]}
                          onChange={handleCheckboxChange6}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
            </InputfieldContainer2>
          )}
          {propertyType === "Yazilk" && (
            <InputfieldContainer2>
              <HeadingInput2>Genel Özellikler:</HeadingInput2>
              <Search>
                <Label>Ön:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Ön:..."
                      className="select-input"
                      value={ÖnOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag onClick={() => toggleMenu("Ön:")}>
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Ön:"}>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="kuzey"
                        checked={!!values1["kuzey"]}
                        onChange={handleCheckboxChange1}
                      />
                      kuzey
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="kuzeydoğu"
                        checked={!!values1["kuzeydoğu"]}
                        onChange={handleCheckboxChange1}
                      />
                      kuzeydoğu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="kuzeybatı"
                        checked={!!values1["kuzeybatı"]}
                        onChange={handleCheckboxChange1}
                      />
                      Kuzey Batı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="güney"
                        checked={!!values1["güney"]}
                        onChange={handleCheckboxChange1}
                      />
                      güney
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="güneydoğu"
                        checked={!!values1["güneydoğu"]}
                        onChange={handleCheckboxChange1}
                      />
                      güneydoğu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="doğu"
                        checked={!!values1["doğu"]}
                        onChange={handleCheckboxChange1}
                      />
                      doğu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="güneybatı"
                        checked={!!values1["güneybatı"]}
                        onChange={handleCheckboxChange1}
                      />
                      güneybatı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput
                        type="checkbox"
                        name="batı"
                        checked={!!values1["batı"]}
                        onChange={handleCheckboxChange1}
                      />
                      batı
                    </OptionLabel>
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Dahili Özellikler:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="ADSLinternet......."
                      className="select-input"
                      value={selectedOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Dahili Özellikler:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Dahili Özellikler:"}>
                    {[
                      "ADSLinternet",
                      "fiber internet",
                      "hırsız alarmı",
                      "akıllı ev",
                      "Amerikan mutfağı",
                      "yerleşik mutfak",
                      "Şofben",
                      "Alarm (Yangın)",
                      "Amerikan Kapı",
                      "Mutfak (Ankastre)",
                      "Marley",
                      "Ankastre Fırın",
                      "Barbekü",
                      "Beyaz Eşya",
                      "Alüminyum Doğrama",
                      "Boyalı",
                      "Bulaşık Makinesi",
                      "Buzdolabı",
                      "Çamaşır Makinesi",
                      "Çamaşır Kurutma Makinesi",
                      "Çamaşır Odası",
                      "Çelik Kapı",
                      "Duşakabin",
                      "Duvar Kağıdı",
                      "Ebeveyn Banyosu",
                      "Firin",
                      "Giyinme Odası",
                      "Gömme Dolap",
                      "Görüntülü Diafon",
                      "Hilton Banyo",
                      "Parke Zemin",
                      "Isıcam",
                      "Jakuzi",
                      "Mutfak Doğalgazı",
                      "Kiler",
                      "Klima",
                      "Küvet",
                      "Laminat Zemin",
                      "Amerikan Mutfak",
                      "Mobilya",
                      "Alaturka Tuvalet",
                      "Kartonpiyer",
                      "Panjur/Jaluzi",
                      "Intercom Sistemi",
                      "Mutfak (Laminat)",
                      "PVC Doğrama",
                      "Seramik Zemin",
                      "Set Üstü Ocak",
                      "Spot Aydınlatma",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values2[option]}
                          onChange={handleCheckboxChange}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Harici Özellikler:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Araç Şarj İstasyonu......."
                      className="select-input"
                      value={HariciOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Harici Özellikler:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Harici Özellikler:"}>
                    {[
                      "Jeneratör",
                      "Yangın Merdiveni",
                      "Buhar Odası",
                      "24 Saat Güvenlik",
                      "Araç Şarj İstasyonu",
                      "Hamam",
                      "Hidrofor",
                      "Isı Yalıtımı",
                      "Kablo TV",
                      "Apartman Görevlisi",
                      "Kamera Sistemi",
                      "Kreş",
                      "Müstakil Havuzlu",
                      "Spor Alanı",
                      "Yüzme Havuzu (Açık)",
                      "Sauna",
                      "Siding",
                      "Su Deposu",
                      "Yüzme Havuzu (Kapalı)",
                      "Tenis Kortu",
                      "Uydu",
                      "Çocuk Oyun Parkı",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values3[option]}
                          onChange={handleCheckboxChange3}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Etrafında neler var:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Alışveriş Merkezi......."
                      className="select-input"
                      value={EtrafındaOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Etrafında neler var:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer
                    showMenu={openMenu === "Etrafında neler var:"}
                  >
                    {[
                      "Belediye",
                      "Cami",
                      "Cemevi",
                      "Denize Sıfır",
                      "Alışveriş Merkezi",
                      "Eczane",
                      "İtfaiye",
                      "Fuar",
                      "Göle Sıfır",
                      "Eğlence Merkezi",
                      "Hastane",
                      "Havra",
                      "Kilise",
                      "Lise",
                      "İlkokul-Ortaokul",
                      "Plaj",
                      "Polis Merkezi",
                      "Semt Pazarı",
                      "Spor Salonu",
                      "Şehir Merkezi",
                      "Market",
                      "Sağlık Ocağı",
                      "Park",
                      "Üniversite",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values4[option]}
                          onChange={handleCheckboxChange4}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Cami
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Cemevi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Denize Sıfır
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Alışveriş Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Eczane
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      İtfaiye
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Fuar
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Göle Sıfır
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Eğlence Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Hastane
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Havra
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Kilise
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Lise
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      İlkokul-Ortaokul
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Plaj
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Polis Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Semt Pazarı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Spor Salonu
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Şehir Merkezi
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Market
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Sağlık Ocağı
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Park
                    </OptionLabel>
                    <OptionLabel>
                      <OptionInput type="checkbox" />
                      Üniversite
                    </OptionLabel>
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Ulaşım Tesisi:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Anayol......."
                      className="select-input"
                      value={UlaşımOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag onClick={() => toggleMenu("Ulaşım Tesisi:")}>
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Ulaşım Tesisi:"}>
                    {[
                      "Anayol",
                      "Avrasya Tüneli",
                      "Boğaz Köprüleri",
                      "Cadde",
                      "Deniz Otobüsü",
                      "Dolmuş",
                      "E-5",
                      "İskele",
                      "Marmaray",
                      "Metro",
                      "Metrobüs",
                      "Minibüs",
                      "Otobüs Durağı",
                      "Sahil",
                      "Teleferik",
                      "TEM",
                      "Tramvay",
                      "Troleybüs",
                      "Tren İstasyonu",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values5[option]}
                          onChange={handleCheckboxChange5}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
              <Search>
                <Label>Daire Görünümü:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Boğaz......."
                      className="select-input"
                      value={DaireOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag onClick={() => toggleMenu("Daire Görünümü:")}>
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Daire Görünümü:"}>
                    {[
                      "Boğaz",
                      "Deniz",
                      "Doğa",
                      "Göl",
                      "Havuz",
                      "Şehir",
                      "Park & Yeşil Alan",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values6[option]}
                          onChange={handleCheckboxChange6}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
            </InputfieldContainer2>
          )}
          {propertyType === "işyerleri" && (
            <InputfieldContainer2>
              <HeadingInput2>Genel Özellikler:</HeadingInput2>
              <Search>
                <Label>Harici Özellikler:</Label>
                <OptionHolder>
                  <OptionDiv>
                    <InputOption
                      type="text"
                      placeholder="Araç Şarj İstasyonu......."
                      className="select-input"
                      value={HariciOptions}
                      readOnly
                    ></InputOption>
                    <OptionDrag
                      onClick={() => toggleMenu("Harici Özellikler:")}
                    >
                      <FaAngleDown />
                    </OptionDrag>
                  </OptionDiv>
                  <OptionContainer showMenu={openMenu === "Harici Özellikler:"}>
                    {[
                      "Jeneratör",
                      "Yangın Merdiveni",
                      "Buhar Odası",
                      "24 Saat Güvenlik",
                      "Araç Şarj İstasyonu",
                      "Hamam",
                      "Hidrofor",
                      "Isı Yalıtımı",
                      "Kablo TV",
                      "Apartman Görevlisi",
                      "Kamera Sistemi",
                      "Kreş",
                      "Müstakil Havuzlu",
                      "Spor Alanı",
                      "Yüzme Havuzu (Açık)",
                      "Sauna",
                      "Siding",
                      "Su Deposu",
                      "Yüzme Havuzu (Kapalı)",
                      "Tenis Kortu",
                      "Uydu",
                      "Çocuk Oyun Parkı",
                    ].map((option) => (
                      <OptionLabel key={option}>
                        <OptionInput
                          type="checkbox"
                          name={option}
                          checked={!!values3[option]}
                          onChange={handleCheckboxChange3}
                        />
                        {option}
                      </OptionLabel>
                    ))}
                  </OptionContainer>
                </OptionHolder>
              </Search>
            </InputfieldContainer2>
          )}
        </RightContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Sell;
