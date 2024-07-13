import React from "react";
import {
  MainContainer,
  Heading,
  ContextContainer,
  DownloadButton,
  Description,
} from "./StyledContract1";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Contract3 = () => {
  const fileUrl2 = "https://guvenlisatkirala.com/3.docx";
  const fileName2 = "KULLANIM KOŞULLARI.docx";
  return (
    <>
      <MainContainer>
        <Heading>KULLANIM KOŞULLARI</Heading>
        <DownloadButton>
          <a href={fileUrl2} download={fileName2}>
            <FaCloudDownloadAlt />
          </a>
        </DownloadButton>
        <ContextContainer>
          <Description>
            Bahçelievler Mh.Ş.Üsteğmen Kamil Baltacı Cd.Işık Rezidans Blok No:10
            İç Kapı No:1 Merkez/SİİRT adresinde mukim EYA YAZILIM VE YAYINCILIK
            ANONİM ŞİRKETİ (aşağıda kısaca "guvenlisatkirala" olarak
            anılacaktır) taşınmaz alım, satım, kiralama, kiraya verme ile ilgili
            ihtiyaçları avukat eşliğinde yasal bir zeminde güvenli olarak{" "}
            <span>karşılamak</span> amacıyla kurulmuştur.{" "}
          </Description>
          <Description>
            guvenlisatkirala herkese açık bir sitedir. Tüm kullanıcılar için
            verilen hizmetler, üyelik haricinde veya aksi belirtilmedikçe,
            ücretsizdir.
          </Description>
          <Description>
            Aşağıdaki yazılı durumlarda, site yönetimi üyenin ve üye olmadan
            siteye giriş yapan kullanıcının (aşağıda kısaca “kullanıcı” olarak
            anılacaktır) site kullanımını engelleyebilir ve aşağıdaki
            girişimlere karışan kişi veya kişiler hakkında kanuni haklarını
            saklı tutar:
          </Description>
          <Description>
            - Yanlış, düzensiz, eksik ve yanıltıcı bilgileri, genel ahlak
            kurallarına uygun olmayan ifadeleri içeren ve Türkiye Cumhuriyeti
            yasalarına uygun olmayan bilgilerin siteye kaydedilmesi durumunda,
          </Description>
          <Description>
            - Sitede yer alan çalışmaların ve içeriğin kısmen veya tümüyle
            kopyalanarak farklı amaçlarla kullanılması veya kullanılmaya
            çalışılması durumunda,
          </Description>
          <Description>
            - Satılık ve/veya kiralık verilen ilanlar için bu ilandaki emlağı
            satın alan veya kiralayan kişilerden ayrıca komisyon talebinde
            bulunanların ilanları silinir ve bu kişiler süresiz olarak yasaklı
            kişiler listesine eklenir. Ayrıca güveni kötüye kullanma, yalan
            beyanda bulunma ve dolandırıcılık suçlamasıyla kanuni haklar saklı
            tutulur.
          </Description>
          <Description>
            - Sitenin genel güvenliğini tehdit edecek, sitenin ve kullanılan
            yazılımların çalışmasını engelleyecek yazılımların kullanılması,
            faaliyetlerin yapılması, yapılmaya çalışılması ve bilgilerin
            alınması, silinmesi, değiştirilmesi durumunda.
          </Description>
          <Description>
            guvenlisatkirala.com'u ziyaret eden kullanıcıların bilgileri
            (ziyaret süresi, zamanı, görüntülenen sayfalar) onlara daha iyi
            hizmet edebilmek amacı ile takip edilmektedir. Elde edilen bilgiler,
            gizlilik prensiplerine bağlı kalmak kaydıyla, içerik bölümümüzü
            zenginleştirmek ve iyileştirmek amacı ile reklam vb. konularda
            işbirliğine gittiğimiz firmalarca paylaşılmaktadır. Amacımız,
            sitenin sizin istediğiniz özelliklerde olmasını ve site gelişimini
            sağlamaktır.
          </Description>
          <Description>
            guvenlisatkirala.com'a kullanıcı olarak giriş yaptığınızda; sizin ve
            karşı tarafın yapacağı alım, satım, kiralama işlemlerinin güvenliği
            açısından sadece avukat aracılığı ile taşınmaz alacak, taşınmazının
            satışını yapacak, kiralayan yada kiracı adayları ile ücret ödeyerek
            iletişime geçip, gayrimenkul satın alabilir, satabilir, kiralar veya
            kiraya verebilir "İlanlarım E-Posta'da" bölümüne e-posta adresinizi
            bırakarak, seçtiğiniz bölgelerdeki güncel ilanlardan haberdar
            olabilirsiniz.
          </Description>
          <Description>
            Kullanıcı olarak guvenlisatkirala.com'a giriş yaptığınızda
            guvenlisatkirala, sunucunuzdan bilgilerinizi almakta ve
            kaydetmektedir. Bu bilgiler Google ve Facebook pazarlama etiketleri
            için kullanılmaktadır. Ayrıntılı bilgiler için guvenlisatkirala
            Gizlilik Politikası'nı inceleyebilirsiniz.
          </Description>
          <Description>
            Sisteme talep bırakmış kullanıcıların iletişim bilgileri
            guvenlisatkirala işbirliği yaptığı kendi işletmeleriyle veya
            internet platformuyla paylaşabilir
          </Description>
          <Description>
            Kullanıcılar, üyelik başvuru formununda yer alan Üyelik
            Sözleşmesi'ni kabul ederek guvenlisatkirala.com'a üye olabilirler.
          </Description>
          <Description>
            Görüş, öneri ve sorularınız için www. guvenlisatkirala.com'da yer
            alan “guvenlisatkirala 'ya Ulaşın” sayfasını kullanabilirsiniz.
          </Description>
        </ContextContainer>
      </MainContainer>
    </>
  );
};

export default Contract3;
