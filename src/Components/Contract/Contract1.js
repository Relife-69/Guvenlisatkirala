import React from "react";
import {
  MainContainer,
  Heading,
  ContextContainer,
  DownloadButton,
  TextContainer,
  Heading1,
  Description,
} from "./StyledContract1";
import { Link } from "react-router-dom";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Contract1 = () => {
  const fileUrl = "https://guvenlisatkirala.com/1.docx";
  const fileName = "ÇEREZ POLİTİKASI.docx";
  return (
    <>
      <MainContainer>
        <Heading>ÇEREZ POLİTİKASI</Heading>
        <DownloadButton>
          <a href={fileUrl} download={fileName}>
            <FaCloudDownloadAlt />
          </a>
        </DownloadButton>
        <ContextContainer>
          <TextContainer>
            <Heading1>ÇEREZ (COOKIE) KULLANIMI</Heading1>
            <Description>
              Guvenlisatkirala.com olarak, ziyaretçilerimizin web sitemizde
              yaşadığı deneyimi iyileştirmek ve onlara daha iyi hizmet
              verebilmek için Çerez (Cookie) kullanıyoruz. Ziyaretçilerimiz,
              Çerez (Cookie) kullanımını tarayıcı ayarları üzerinden kontrol
              ederek engelleyebilir, önceki kullanımlara dair verileri
              silebilirler. Çerez (Cookie) kullanımın engellenmesi,
              ziyaretçilerimizin web sitemizde yaşadığı deneyimi etkileyebilir.
              Çerez (Cookie) kullanımını engellemeden guvenlisatkirala.com’u
              kullanan ziyaretçilerimiz Çerez (Cookie) kullanımını kabul etmiş
              sayılır.
            </Description>
          </TextContainer>
          <TextContainer>
            <Heading1>Çerez (Cookie) Nedir?</Heading1>
            <Description>
              Çerez (Cookie), bir web sitesini /mobil siteyi ziyaret ettiğinizde
              veya bir mobil uygulamayı cihazınıza yüklediğinizde, ilgili site
              veya uygulama tarafından, tarayıcınız veya uygulama üzerinden
              cihazınıza (veya ağ sunucunuza) yüklenen ve saklanan küçük bilgi
              parçacıkları içeren metin dosyalarıdır.
            </Description>
          </TextContainer>
          <Heading>Çerez (Cookie) Türleri Nelerdir?</Heading>
          <TextContainer>
            <Heading1>Oturum Çerezleri (Session Cookies)</Heading1>
            <Description>
              Oturum Çerezleri, ziyaretçilerimizin mobil/web sitemizi ziyareti
              veya mobil uygulamalarımızı kullanımı esnasında etkin olan,
              tarayıcı veya mobil uygulama kapatıldığında silinen geçici
              çerezlerdir
            </Description>
          </TextContainer>
          <Description>
            Oturum Çerezlerinin ana kullanım amacı, ziyaret süresinde web/mobil
            sitenin veya mobil uygulamanın ziyaretçi tercihlerini hatırlayarak
            ilgili fonksiyonların düzgün çalışmasını sağlamaktır.
          </Description>
          <Description>
            Örneğin; Guvenlisatkirala.com’da emlak arayan bir ziyaretçimizin,
            ilan karşılaştırma özelliği ile karşılaştırmak üzere seçtiği ilanlar
            Oturum Çerezleri ile kaydedilir. Böylece, ziyaretçimiz farklı
            sayfalarda gezindiğinde kaybedilmemiş olur.
          </Description>
          <TextContainer>
            <Heading1>Kalıcı Çerezler (Persistent Cookies)</Heading1>
            <Description>
              Kalıcı Çerezler, kullanıcı tercihlerini hatırlamaya yarayan ve
              kullanıcı tarafından silinene dek saklanan çerezlerdir.
              Kullanıcının web/mobil site veya uygulama üzerinde yaptığı
              hareketleri hatırlayarak sonraki kullanım deneyimlerinin
              özelleştirilmesine imkan verir.
            </Description>
          </TextContainer>
          <Description>
            Örneğin; Guvenlisatkirala.com’a üye girişi yapan bir ziyaretçimiz,
            oturum açma işlemi esnasında “Beni Hatırla” seçeneğini aktif
            ettiğinde bir sonraki ziyareti için tekrar kullanıcı adı ve şifre
            bilgisi girişine gerek kalmadan oturumu açılacaktır. Bu işlevi
            yerine getirerek kullanım kolaylığı sağlayan veriler Kalıcı Çerezler
            sayesinde elde edilir.
          </Description>
          <TextContainer>
            <Heading1>Performans Çerezleri (Perfomance Cookies)</Heading1>
            <Description>
              Performans Çerezleri, kullanıcıya özel bir bilgi ile
              ilişkilendirilmeden, ziyaret edilen web/mobil site ve
              uygulamaların performansını izleyen çerezlerdir. Hata mesajları
              gibi bilgileri toplar. Bu veriler ilgili web/mobil sitenin veya
              uygulamanın iyileştirilmesi amacıyla kullanılır
            </Description>
          </TextContainer>
          <TextContainer>
            <Heading1>Fonksiyonel Çerezler (Functionality Cookies)</Heading1>
            <Description>
              Fonksiyonel Çerezler, kullanıcının web/mobil site veya uygulamada
              yaptığı kullanım tercihlerinin hatırlanmasını sağlar. Web /mobil
              sitenin veya uygulamanın kullanım dili gibi tercihler Fonksiyonel
              Çerezler sayesinde hatırlanır, kullanıcının sonraki ziyaretlerinde
              tekrar seçilmesine gerek duymadan uygulanır.
            </Description>
          </TextContainer>
          <TextContainer>
            <Heading1>Neden Çerez (Cookie) Kullanıyoruz?</Heading1>
            <Description>
              Guvenlisatkirala.com olarak, Çerez (Cookie) kullanımımızın amacı,
              ziyaretçilerimizin web/mobil sitemizde ve mobil uygulamalarımızda
              yaşadıkları deneyimi onlara özel hale getirerek iyileştirmektir.
              Çerez (Cookie) kullanımı, ziyaretçilerimizin tercihlerini
              hatırlayarak bize veri sağlar. Guvenlisatkirala.com’da
              görüntülenen sayfalar, kullanıcı adı ve parola bilgileri, ziyaret
              süreleri gibi veriler de bu kapsamdadır. Bu veriler, web/mobil
              sitemizin ve mobil uygulamamızın ziyaretçilerimiz için
              işlevselliğini artırmamıza, kişiye özel kampanya ve içerikler
              sunmamıza, web sitemizin kullanım kolaylığını ve uygunluğunu
              ölçerek geliştirmemize ve daha iyi hizmet vermemize olanak sağlar.
              Ek olarak, çerezler, belirlenen kullanıcı tercihlerine uygun
              reklam ve kampanyaların gösteriminde kullanılır. Böylece,
              guvenlisatkirala.com’un reklam verdiği diğer internet sitelerini
              ziyaret ettiğiniz takdirde, size özel içerik ve kampanyalarımızı
              reklam alanlarında görebilirsiniz.
            </Description>
          </TextContainer>
          <TextContainer>
            <Heading1>Ziyaretçilerimizin Bilgilerinin Güvenliği</Heading1>
            <Description>
              guvenlisatkirala.com olarak, ziyaretçilerimizin izin verdiği
              ölçüde ve yasal düzenlemeler çerçevesinde, edindiğimiz kullanıcı
              bilgilerini kaydediyor ve saklıyoruz. Ziyaretçilerimizle iletişime
              geçerek faydalı içerik, ürün ve kampanyalarımızın iletişimini
              yapıyoruz. Ziyaretçilerimizin iletişim bilgileri, kendilerine
              fayda sağlayabilecek üçüncü parti firmalar ile ürün ve
              kampanyalarının tanıtımı için paylaşılabilmektedir.
            </Description>
          </TextContainer>
          <TextContainer>
            <Heading1>Çerez (Cookie) Kullanımının Yönetimi</Heading1>
            <Description>
              Ziyaretçilerimiz tarayıcı ayarları üzerinden çerezlere ilişkin
              tercihlerini yöneterek bilgi paylaşımını kısıtlayabilirler. Bu
              durumda web/mobil site veya mobil uygulama bazı işlevlerini yerine
              getiremeyebilir. Çerez kullanımını engelleyen ziyaretçilerimiz,
              buna bağlı olarak gelişebilecek performans sorunlarını kabul etmiş
              sayılırlar.
            </Description>
          </TextContainer>
          <Description>
            Adobe Analytics{" "}
            <Link
              to="http://www.adobe.com/uk/privacy/opt-out.html"
              target="blank"
            >
              http://www.adobe.com/uk/privacy/opt-out.html
            </Link>
          </Description>
          <Description>
            AOL{" "}
            <Link
              to="https://help.aol.com/articles/restore-security-settings-and-enable-cookie-settings-on-browser"
              target="blank"
            >
              https://help.aol.com/articles/restore-security-settings-and-enable-cookie-settings-on-browser
            </Link>
          </Description>
          <Description>
            Google Adwords{" "}
            <Link
              to="https://support.google.com/ads/answer/2662922?hl=en"
              target="blank"
            >
              https://support.google.com/ads/answer/2662922?hl=en
            </Link>
          </Description>
          <Description>
            Google Analytics{" "}
            <Link to="https://tools.google.com/dlpage/gaoptout" target="blank">
              https://tools.google.com/dlpage/gaoptout
            </Link>
          </Description>
          <Description>
            Google Chrome{" "}
            <Link
              to=" http://www.google.com/support/chrome/bin/answer.py?hl=en&answer=95647"
              target="blank"
            >
              http://www.google.com/support/chrome/bin/answer.py?hl=en&answer=95647
            </Link>
          </Description>
          <Description>
            Internet Explorer{" "}
            <Link
              to="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies"
              target="blank"
            >
              https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies
            </Link>
          </Description>
          <Description>
            MozillaFirefox
            <Link
              to="http://support.mozilla.com/enUS/kb/Cookies"
              target="blank"
            >
              http://support.mozilla.com/enUS/kb/Cookies
            </Link>
          </Description>
          <Description>
            Opera
            <Link
              to=" http://www.opera.com/browser/tutorials/security/privacy/Safarihttps://support.apple.com/kb/ph19214?locale=tr_TR"
              target="blank"
            >
              http://www.opera.com/browser/tutorials/security/privacy/Safarihttps://support.apple.com/kb/ph19214?locale=tr_TR
            </Link>
          </Description>
        </ContextContainer>
      </MainContainer>
    </>
  );
};

export default Contract1;
