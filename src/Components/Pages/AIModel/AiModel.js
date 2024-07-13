import React from "react";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import {
  MainContainer,
  //   MainHeading,
  TextContainer,
  Heading,
  Text,
} from "./StyledAiModel";
import ExtraFrame from "../../Frames/ExtraFrame/ExtraFrame";
import Pic from "../../Images/Ai.png";

const AiModel = () => {
  return (
    <>
      <Navbar />
      <ExtraFrame
        Contuct={Pic}
        Para="Guvenlisatkirala.com’da kullanılan yapay zekâların özellikleri,
            özellikle emlak işlemlerinin doğruluğunu ve güvenliğini artırmak,
            kullanıcı deneyimini iyileştirmek ve platformdaki işlemleri daha
            verimli hale getirmektir. İşte kullanılacak yapay zekâ özellikleri"
      />
      <MainContainer>
        <TextContainer>
          {/* <MainHeading>
            guvenlisatkirala.com’da kullanılan yapay zekâların özellikleri,
            özellikle emlak işlemlerinin doğruluğunu ve güvenliğini artırmak,
            kullanıcı deneyimini iyileştirmek ve platformdaki işlemleri daha
            verimli hale getirmektir. İşte kullanılacak yapay zekâ özellikleri:
          </MainHeading> */}
          <Heading>
            <span>1. </span> Otomatik İlan Analizi ve Doğrulama
          </Heading>
          <Text>
            <span>Özellik: </span> Kullanıcılar tarafından eklenen ilanların,
            doğruluğunu ve eksiksizliğini kontrol etmek için doğal dil işleme
            (NLP) ve görüntü işleme teknikleri kullanılır.
          </Text>
          <Text>
            <span>Amaç: </span> Yanlış veya eksik bilgiler içeren ilanların
            yayınlanmasını önlemek.
          </Text>
          <Text>
            <span>Yöntem: </span> İlan açıklamaları ve başlıkları analiz
            edilerek, emlak tipi, konum, fiyat gibi bilgilerin doğruluğu kontrol
            edilir. Fotoğraflar ile bilgiler karşılaştırılır, gerçek mülk
            fotoğrafları olup olmadığı tespit edilir.
          </Text>
          <Heading>
            <span>2. </span> Öneri Sistemi
          </Heading>
          <Text>
            <span>Özellik: </span> Kullanıcılara ilgilenebilecekleri mülkleri
            önermek için makine öğrenmesi algoritmaları kullanılır.
          </Text>
          <Text>
            <span>Amaç: </span> Kullanıcıların ilgilendikleri mülkleri daha
            hızlı ve kolay bulmalarını sağlamak.
          </Text>
          <Text>
            <span>Yöntem: </span> Kullanıcıların arama geçmişi, favorileri ve
            profil bilgileri analiz edilerek kişiselleştirilmiş öneriler
            sunulur.
          </Text>
          <Heading>
            <span>3. </span> Fiyat Tahmin Modeli
          </Heading>
          <Text>
            <span>Özellik: </span> Emlakların fiyatlarını tahmin eden bir model
            geliştirilir.
          </Text>
          <Text>
            <span>Amaç: </span> Kullanıcılara, ilgilendikleri mülklerin piyasa
            değerini ve gelecekteki fiyat trendlerini göstermek.
          </Text>
          <Text>
            <span>Yöntem: </span> Geçmiş satış verileri, konum, mülk özellikleri
            ve piyasa trendleri gibi veriler kullanılarak makine öğrenmesi
            algoritmaları ile fiyat tahminleri yapılır.
          </Text>
          <Heading>
            <span>4. </span> Sahte İlan Tespiti
          </Heading>
          <Text>
            <span>Özellik: </span> Sahte veya dolandırıcılık amaçlı ilanları
            tespit eden bir yapay zekâ sistemi.
          </Text>
          <Text>
            <span>Amaç: </span> Kullanıcıların güvenliğini sağlamak ve
            platformdaki dolandırıcılık faaliyetlerini önlemek.
          </Text>
          <Text>
            <span>Yöntem: </span> Anormal fiyatlar, tutarsız bilgiler veya daha
            önce sahte olduğu tespit edilen ilanların özelliklerine göre ilanlar
            analiz edilerek sahte ilanlar tespit edilir.
          </Text>
          <Heading>
            <span>5. </span> Chatbot ve Müşteri Destek Asistanı
          </Heading>
          <Text>
            <span>Özellik: </span> Kullanıcılara 7/24 destek sağlayan,
            sorularını yanıtlayan ve yönlendirme yapan akıllı bir chatbot
          </Text>
          <Text>
            <span>Amaç: </span> Kullanıcıların ihtiyaç duydukları bilgilere
            hızlı bir şekilde ulaşmalarını sağlamak ve müşteri memnuniyetini
            artırmak.
          </Text>
          <Text>
            <span>Yöntem: </span> Doğal dil işleme (NLP) teknikleri ile
            kullanıcının sorularını anlayan ve doğru yanıtları veren bir sohbet
            botu geliştirilir.
          </Text>
          <Heading>
            <span>6. </span> Gelişmiş Arama ve Filtreleme
          </Heading>
          <Text>
            <span>Özellik: </span> Kullanıcıların ilanları daha etkili bir
            şekilde arayabilmesi için akıllı arama ve filtreleme özellikleri.
          </Text>
          <Text>
            <span>Amaç: </span> Kullanıcıların tam olarak aradıkları mülkleri
            bulmalarını kolaylaştırmak.
          </Text>
          <Text>
            <span>Yöntem: </span> Kullanıcı sorgularını anlamak ve en uygun
            sonuçları göstermek için NLP teknikleri ve makine öğrenmesi
            kullanılır.
          </Text>
          <Heading>
            <span>7. </span> Kira ve Satış Performans Tahmini
          </Heading>
          <Text>
            <span>Özellik: </span> Kiralama veya satış işlemlerinin başarılı
            olma olasılığını tahmin eden bir model.
          </Text>
          <Text>
            <span>Amaç: </span> Kullanıcıların mülklerini daha hızlı
            kiralamaları veya satmaları için stratejik bilgiler sağlamak.
          </Text>
          <Text>
            <span>Yöntem: </span> Geçmiş işlemler, mülk özellikleri, piyasa
            koşulları ve kullanıcıların arama davranışları analiz edilerek
            tahminler yapılır.
          </Text>
          <Heading>
            <span>8. </span> İlan Performans Analizi:
          </Heading>
          <Text>
            <span>Özellik: </span> İlanların performansını analiz eden ve
            optimize edilmesi için öneriler sunan bir yapay zekâ modeli.
          </Text>
          <Text>
            <span>İşlev: </span> İlan veren kullanıcıların ilanlarının daha
            fazla görüntülenmesini ve etkileşim almasını sağlar.
          </Text>
        </TextContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default AiModel;
