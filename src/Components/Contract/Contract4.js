import React from "react";
import {
  MainContainer,
  Heading,
  ContextContainer,
  DownloadButton,
  TextContainer,
  Description,
  Heading1,
} from "./StyledContract1";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Contract4 = () => {
  const fileUrl1 = "https://guvenlisatkirala.com/4.docx";
  const fileName1 = "İŞLEM REHBERİ.docx";
  return (
    <>
      <MainContainer>
        <Heading>İŞLEM REHBERİ</Heading>
        <DownloadButton>
          <a href={fileUrl1} download={fileName1}>
            <FaCloudDownloadAlt />
          </a>
        </DownloadButton>
        <ContextContainer>
          <TextContainer>
            <Heading1>Üye Olma</Heading1>
            <Description>
              guvenlisatkirala.com’a bireysel üyelerimiz ücretsiz bir şekilde
              üye olabilmektedir. Bireysel üyelerimiz onaylanan üyelik
              işlemlerinin ardından bir adet ücretsiz ilan verebilmektedir ve
              guvenlisatkirala verilecek ücretsiz ilan sayısını değiştirme
              hakkına sahiptir.
            </Description>
            <Description>
              Avukat üyelik isteyen müşterilerimiz guvenlisatkirala.com’un
              belirlediği ücret karşılığında Avukat üye olabilmektedirler.
            </Description>
          </TextContainer>
          <TextContainer>
            <Heading1>Üyelik Sözleşmesi</Heading1>
            <Description>
              Üyelik sözleşmemiz sitemizden yazdırılabilir ve elektronik ortamda
              saklanmak üzere indirilebilir. Üyelerimiz herhangi bir zamanda
              sözleşmemize sitemiz üzerinden erişebilmektedir.
            </Description>
            <Description>
              Avukat üyelerimizin faturaları, kendilerine üyelik sonrasında
              gönderilmektedir.
            </Description>
          </TextContainer>
          <TextContainer>
            <Heading1>Üyelik Aktifleme</Heading1>
            <Description>
              Yeni üyelik yapmak isteyen müşterilerimize mail yoluyla aktifleme
              onayı gönderilmektedir ve onay sonrasında üyelikleri
              başlatılmaktadır.
            </Description>
          </TextContainer>
          <TextContainer>
            <Heading1>Kişisel Verilerin Gizliliği</Heading1>
            <Description>
              guvenlisatkirala.com’a üye olurken ve sonrasındaki güncelleme
              işlemlerinizin ardından oluşan tüm bilgileriniz sizin onayınız
              olmadan üçüncü şahıslarla paylaşılmamaktadır. Üyelik sırasında bu
              paylaşımın aktiflenip/aktiflenmeyeceği seçilebileceği gibi, daha
              sonra da bu listelerden çıkmak mümkündür. Gizlilik politikamızla
              ilgili detaylı bilgilere; www.
              guvenlisatkirala.com/#gizlilik-politikasi bağlantısından
              ulaşabilirsiniz.
            </Description>
            <Description>
              Örneğin; Guvenlisatkirala.com’da emlak arayan bir ziyaretçimizin,
              ilan karşılaştırma özelliği ile karşılaştırmak üzere seçtiği
              ilanlar Oturum Çerezleri ile kaydedilir. Böylece, ziyaretçimiz
              farklı sayfalarda gezindiğinde kaybedilmemiş olur.
            </Description>
          </TextContainer>
          <TextContainer>
            <Heading1>Uyuşmazlık Durumu</Heading1>
            <Description>
              guvenlisatkirala ve Üye arasında sağlanan Üyelik Sözleşmesi Türk
              hukukuna tabidir. Taraflar arasında işbu sözleşmeden kaynaklanacak
              uyuşmazlıklarda
            </Description>
            <Description>
              Siirt Mahkemeleri ve İcra Daireleri münhasır yetkilidir. Bu
              uyuşmazlıklarda, Guvenlisatkirala’nın defter ve kayıtları tek ve
              kesin delil olacaktır. Üyelik Sözleşmesi kabul edildiğinde
              Taraflar, elektronik ortamda ve Web Sitesi üzerinde gerçekleşen
              işlemlere ait, Guvenlisatkirala tarafından alınmış, bilgisayar
              çıktılarının da kesin delil niteliği taşıyacağı konusunda mutabık
              kalmış sayılırlar.
            </Description>
          </TextContainer>
        </ContextContainer>
      </MainContainer>
    </>
  );
};

export default Contract4;
