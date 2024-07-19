import React, { useState } from "react";
import axios from "axios";
import {
  MainContainer,
  FormContainer,
  PictureContainer,
  InputContainer,
  InputContain,
  Heading,
  ButtonContainer,
  ButtonContainer2,
  Heading2,
  CheckBox,
  Label,
  SLabel,
  CheckBoxContainer2,
  LoginHeading,
  MsgContainer,
  InputHolder,
  ToggleContainer,
  ToggleSlider,
  SearchBarContainer,
  Select,
  Option,
  SearchIcon,
} from "./Styledsignup";
import Button from "../../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Banner from "../../Banner/Banner";
import { FaSearch } from "react-icons/fa";

const turkishCities = [
  "İLÇE/ŞEHİR",
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

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptAgreement, setAcceptAgreement] = useState(false);
  const [isEmailSelected, setIsEmailSelected] = useState(true);
  const [isSmsSelected, setIsSmsSelected] = useState(true);
  const [role, setRole] = useState("standard");
  const [neighborhood, setNeighborHood] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const Sign_in = () => {
    navigate("/signin");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = {
      username: email, // Ensure the username is set to the email
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      address,
      neighbor_hood: neighborhood,
      district_city: city,
      password: password,
      confirm_password: confirmPassword,
      accept_agreement: acceptAgreement,
      role,
    };

    console.log("Submitting user:", user);

    try {
      const result = await axios.post(
        "https://api.guvenlisatkirala.com/api/users/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", result.data);
      localStorage.setItem("user-info", JSON.stringify(result.data));
      localStorage.setItem("phone", result.data.phone_number);
      localStorage.setItem("username", result.data.username);
      console.log("User information stored in localStorage");
      navigate("/email");
    } catch (error) {
      console.error("Error response:", error.response || error.message);
      setError(error.response ? error.response.data.message : error.message);
      alert("E-posta veya numara zaten mevcut, Lütfen tekrar deneyin");
      // alert(result.data.username + "already exist");
    }
  };

  return (
    <>
      <Banner />
      <Navbar />
      <MainContainer>
        <FormContainer>
          <ButtonContainer>
            <Link to="/signup">
              <Button
                fb
                btntype="Main"
                text="Standart"
                value="standard"
                onClick={() => setRole("standard")}
              />
            </Link>
            <Link to="/lsign">
              <Button fb text="Avukat" />
            </Link>
          </ButtonContainer>
          <Heading>Yeni bir hesap oluştur</Heading>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <InputContain
                required
                type="text"
                placeholder="İsim"
                name="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <InputContain
                required
                type="text"
                placeholder="Soyadı"
                name="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <InputContain
                required
                type="email"
                placeholder="E-posta"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputContain
                type="text"
                placeholder="Adres"
                name="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <SearchBarContainer>
                <Select
                  value={city}
                  onChange={(e) => {
                    handleCityChange(e);
                    setCity(e.target.value);
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
                  <FaSearch />
                </SearchIcon>
              </SearchBarContainer>
              {/* <InputContain
                type="text"
                placeholder="İLÇE/ŞEHİR"
                name="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              /> */}
              <InputContain
                type="text"
                placeholder="Komşu"
                name="neighborhood"
                value={neighborhood}
                onChange={(e) => setNeighborHood(e.target.value)}
              />
              <InputContain
                required
                type="password"
                placeholder="Şifrenizi belirleyin"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputContain
                required
                type="password"
                placeholder="Şifreyi Onayla"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <InputContain
                required
                type="tel"
                placeholder="Telefon numarası ( Başında sıfır olmadan yazın )"
                name="phone_number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </InputContainer>
            <MsgContainer>
              <Label>
                Tüm duyuru ve kampanyalardan ticari elektronik ileti yoluyla
                haberdar olmak istiyorum.
              </Label>
              <InputHolder>
                <ToggleContainer>
                  <SLabel
                    isSelected={!isEmailSelected}
                    onClick={() => setIsEmailSelected(false)}
                  >
                    Hayır
                  </SLabel>
                  <SLabel
                    isSelected={isEmailSelected}
                    onClick={() => setIsEmailSelected(true)}
                  >
                    Evet
                  </SLabel>
                  <ToggleSlider isSelected={isEmailSelected} />
                </ToggleContainer>
                <ToggleContainer>
                  <SLabel
                    isSelected={!isSmsSelected}
                    onClick={() => setIsSmsSelected(false)}
                  >
                    Hayır
                  </SLabel>
                  <SLabel
                    isSelected={isSmsSelected}
                    onClick={() => setIsSmsSelected(true)}
                  >
                    Evet
                  </SLabel>
                  <ToggleSlider isSelected={isSmsSelected} />
                </ToggleContainer>
              </InputHolder>
            </MsgContainer>
            <CheckBoxContainer2>
              <CheckBox
                required
                type="checkbox"
                id="checkAccept"
                name="accept_agreement"
                checked={acceptAgreement}
                onChange={(e) => setAcceptAgreement(e.target.checked)}
              />
              <Label>
                DİKKAT! Emlak danışmanları veya emlakçılar bu siteye üye
                olamazlar. Yayınlanan emlak ilanlarından herhangi biri Komisyon
                alamazsınız.{" "}
                <Link to="/C3" target="blank">
                  {" "}
                  Lütfen Kullanım Koşulları,
                </Link>
                <Link to="/C6" target="blank">
                  Üyelik Sözleşmesi ve Gizlilik Koşulları Sözleşmelerini Okuyun
                </Link>
              </Label>
            </CheckBoxContainer2>
            <Button btntype="Main" sb text="Üye Ol" type="submit" />
          </form>
        </FormContainer>
        <PictureContainer>
          <LoginHeading>Zaten bir üye misiniz?</LoginHeading>
          <ButtonContainer2>
            <Button onClick={Sign_in} btntype="Main" tb text="Giriş Yap" />
          </ButtonContainer2>
        </PictureContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Signup;
