import React from "react";
import {
  MainContainer,
  Heading,
  ContextContainer,
  DownloadButton,
  Description,
  Heading1,
} from "./StyledContract1";
import { FaCloudDownloadAlt } from "react-icons/fa";
const Contract2 = () => {
  const fileUrl1 = "https://guvenlisatkirala.com/2.docx";
  const fileName1 = "İLAN_YAYINLAMA_KURALLARI.docx";
  return (
    <>
      <MainContainer>
        <Heading>İLAN YAYINLAMA KURALLARI</Heading>
        <DownloadButton>
          <a href={fileUrl1} download={fileName1}>
            <FaCloudDownloadAlt />
          </a>
        </DownloadButton>
        <ContextContainer>
          <Description>
            1: – Mevzuat hükümleri gereğince, ilan veren gerçek kişinin adı,
            soyadı ve T.C. kimlik numarası ya da yabancı kimlik numarası ile
            telefon numarasının ilanın yayımlamasından önce doğrulanması
            zorunludur. Bireysel Hesap Sahibinin, ilan verme, ilan düzenleme ve
            ilanı yeniden yayına alma işlemlerinden önce söz konusu mevzuat
            hükümleri gereğince sistem üzerinden kimliklerini doğrulaması
            gerekir. Bireysel Hesap Sahibi, doğrulama işlemi yapmadığı takdirde
            ilan veremeyecektir.
          </Description>
          <Description>
            2: - İlan yayıncısı guvenlisatkirala.com’da ilanlarını yayınlayarak
            “İlan Yayınlama Kuralları”nı kabul etmiş sayılır. Bu sebeple ilan
            yayınlayan her kişi kurallara riayet etme mecburiyetindedir.
          </Description>
          <Description>
            3: - İlan yayıncıları ilanın içeriğiyle ilgili bilgilerin
            doğruluğundan sorumludur. İlan bilgileri içerisindeki gerçek dışı
            fiyat, metrekare, açıklama, kat sayısı gibi parametreler sonucunda
            ilan, ilan sahibinde danışılmaksızın sistemden kaldırılabilir.
          </Description>
          <Description>
            4: - İlan içerisinde yer alan fotoğrafların emlak ile ilişkili
            olması, ilanı yayınlayan kişinin logo, tanıtım görseli vb.. olmaması
            gerekmektedir. Sistemde bulunan diğer ilanlardan ayrışmak maksadıyla
            ve haksız rekabet yaratmak amacıyla ilan resimlerinin üzerine
            herhangi bir yazı, ikon, şerit, çerçeve yerleştirilmesi, satışı
            yapılacak ya da kiralanacak taşınmazın içi dışında konumunu belli
            edecek şekilde dıştan fotoğrafının alanda paylaşılması fotoğrafın
            yayından kaldırılmasına sebep olacaktır.
          </Description>
          <Description>
            5: - İlan sahibi aynı gayrimenkulle ilgili sadece bir adet ilan
            yayınlayabilir. Aynı emlak ile ilgili girilecek çoklu kayıtlar
            mükerrer ilan sayılacaktır. Mükerrer ilanlar haksız rekabete yol
            açtığından ötürü sistemden ilan sahibine duyurmaksızın tamamen
            kaldırılabilir.
          </Description>
          <Description>
            6: - İlan başlığı içerisinde yalnızca ilanda söz konusu olan
            gayrimenkule ait bilgiler verilebilir. İlan başlığı içerisinde
            iletişim bilgisi gibi bilgilerin yer verilmesine izin
            verilmeyecektir. Alıcı ile satıcı arasındaki sözleşme avukat
            vasıtası ile yapılacağından bu durum ilanın yayından kaldırılmasına
            sebep olacaktır.
          </Description>
          <Description>
            7: - İlan başlığı içerisinde diğer dillerde de geçerli olmak üzere
            Türkçe, diğer dil karakterleri ve noktalama işaretleri
            kullanılabilir. Bu karakterlerin dışında kullanılacak alfa numerik
            olmayan, rekabete gölge düşürecek karakter ve işaretlerin ilanlarda
            yer almasına izin verilmeyecektir.
          </Description>
          <Description>
            8: - İlan sahibi tarafından sitemize sunulan ilanlar, ilan sahibi
            tarafından arşivlene bilinecektir guvenlisatkirala, sistemindeki
            operasyonu tamamlanmış ilanları belirli periyotlarla sistem haricine
            çıkarma hakkını saklı tutar. Bu işlem sonrasında doğacak yedekleme
            problemlerinden guvenlisatkirala.com sorumlu değildir.
          </Description>
          <Description>
            9: - İlan bilgilerinin doluluğu ve doğruluğu, fotoğrafların kalitesi
            ve geçmiş hareketler göz önünde bulundurularak ilan sahiplerinin
            ilanları değerlendirilebilir. İlan yayınlama kurallarını sıklıkla
            ihlal eden kullanıcıların sözleşmesini tek taraflı olarak fesh etme
            hakkını guvenlisatkirala saklı tutar. Aynı şekilde ilan bilgilerini
            daimi olarak doğru ve hatasız giren kullanıcılar, haksız rekabete
            yol açmayacak şekilde sistem algoritması tarafından ödüllendirilerek
            ilanların öne çıkması sağlanabilir.
          </Description>
          <Description>
            10: - İlan içerisinde yer alan ifadelerin cinsiyet, ırk, renk, dil,
            din, inanç, mezhep, felsefi ve siyasi görüş, etnik köken, servet,
            doğum, medeni hâl, sağlık durumu, engellilik ve yaş temellerine
            dayalı ayrımcılık niteliği taşımaması yasal bir zorunluluktur. Bu
            tür ifadeler kullanılması hukuka aykırı olup, Türkiye İnsan Hakları
            ve Eşitlik Kurumu (TİHEK) tarafından idari para cezası verilmesine
            sebep olabilir. Ayrıca, İlanda belirtilen ifadelerle ayrımcılığa yol
            açabilecek bilgilere yer verilmesi ilgili ifadelerin ve/veya ilanın
            yayından kaldırılması sebebidir.
          </Description>
          <Description>
            11: - İlan yayınlama kurallarına riayet etmeyen kullanıcıların
            ilanlarındaki bilgilerinin bir kısmı ya da tamamının yayından
            kaldırılması hakkını guvenlisatkirala.com saklı tutar.
          </Description>
          <Heading1>Önemli Bilgilendirme :</Heading1>
          <Description>
            Mevzuat hükümleri gereğince, Bireysel Hesap Sahipleri ilan verme,
            ilan düzenleme ve ilanı yeniden yayına alma işlemlerinden önce
            kendilerine ait kimlik bilgilerini doğrulaması gerekir. Bireysel
            Hesap Sahiplerinin kimlik doğrulamasını hiç veya usulüne uygun
            olarak yapamaması nedeniyle guvenlisatkirala ve/veya üçüncü
            kişilerin uğrayabileceği her türlü zarar ve idari yaptırım/idari
            para Bireysel ve Kurumsal Hesap Sahipleri sorumludur
          </Description>
        </ContextContainer>
      </MainContainer>
    </>
  );
};

export default Contract2;
