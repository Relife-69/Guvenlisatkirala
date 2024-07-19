import React from "react";
import {
  MainContainer,
  Heading,
  Heading2,
  ContextContainer,
  DownloadButton,
  TextContainer1,
  Description,
  Heading1,
  TextContainer,
  MenuContainer,
  List,
} from "./StyledContract1";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Contract5 = () => {
  const fileUrl1 = "https://guvenlisatkirala.com/5.docx";
  const fileName1 = "KİŞİSEL VERİLERİN KORUNMASI HAKKINDA.docx";
  return (
    <>
      <MainContainer>
        <Heading>KİŞİSEL VERİLERİN KORUNMASI HAKKINDA</Heading>
        <DownloadButton>
          <a href={fileUrl1} download={fileName1}>
            <FaCloudDownloadAlt />
          </a>
        </DownloadButton>
        <ContextContainer>
          <Heading2>
            Kişisel Verilerin Korunması ve İşlenmesi Hakkında Aydınlatma Metni
          </Heading2>
          <Description>
            Bu aydınlatma metni, 6698 sayılıKişisel Verilerin Korunması
            Kanununun 10. maddesi ile Aydınlatma Yükümlülüğünün Yerine
            Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ kapsamında
            veri sorumlusu sıfatıyla, EYA YAZILIM VE YAYINCILIK ANONİM ŞİRKETİ
            (“Şirket”) tarafından hazırlanmıştır.
          </Description>
          <TextContainer1>
            <Heading1>a) Kişisel Veri Toplamanın Yöntemi</Heading1>
            <Description>
              Şirketimiz, kişisel verilerinizi, doğrudan sizden (veri sahibi),
              sizin adınıza hareket eden vekil ve/veya hareket etmeye yetkili
              kişilerden aşağıdaki otomatik ya da veri kayıt sistemimizin
              parçası olmak kaydıyla otomatik olmayan yöntemlerle toplamaktadır:
            </Description>
            <Description>
              Doğrudan guvenlisatkirala’ya Vermiş Olduğunuz Veriler: Şirketimize
              ait “guvenlisatkirala.com” alan adlı internet sitemizin kullanımı
              öncesinde veya sırasında veya çağrı merkezimizin aranması
              suretiyle Şirketimize kullanıcıların kendi inisiyatifleri
              doğrultusunda verdikleri kişisel verileri ifade eder. Bu kişisel
              veriler, doğrudan Kullanıcıların pozitif hareketleri neticesinde
              verilen tüm kişisel verileri kapsar. Örneğin, ad-soyad, iletişim
              bilgileri, kimlik bilgileri, ses kayıtları, anketlere verilen
              cevaplar ve içerik bilgileri bu tür verilere girmektedir.
            </Description>
            <Description>
              Platformumuzu Kullandığınız Zaman Elde Ettiğimiz
              Veriler: Şirketimizin sunduğu hizmet sırasında, belirli yazılım ya
              da teknolojik araçlar vasıtasıyla alınan kullanıcıların kullanım
              alışkanlıklarına ilişkin kişisel verileri kapsamaktadır. Örneğin,
              konum verileri ve sık kullanılanlar ile birlikte ilgi alanları ve
              kullanım verileri bu tür verilere girmektedir. Şirketimiz,
              çevrimiçi davranışsal reklamcılık ve pazarlama yapılabilmesi
              amacıyla siteye gelen kullanıcının üye olmasalar dahi sitedeki
              davranışlarını tarayıcıda bulunan bir cookie (çerez) ile
              ilişkilendirme ve görüntülenen sayfa sayısı, ziyaret süresi ve
              hedef tamamlama sayısı gibi kullanım verilerini toplamaktadır.
              Çerezlerin nasıl yönetileceği ayrıca Çerez Politikamızda
              belirtilmiştir.
            </Description>
          </TextContainer1>
          <TextContainer1>
            <Heading1>b) Toplanan Kişisel Veriler</Heading1>
            <Description>
              Kimlik ve İletişim Bilgileri: Ad, soyadı, cep telefonu, ev
              telefonu, iş telefonu, adresi.
            </Description>
            <Description>
              Kimlik Doğrulama Bilgileri: Kullanıcıların üyelik bilgileri,
              kimliği doğrulamak için ve hesaba erişimi sağlamak için kullanılan
              parolaları, Kullanıcı Adı, kontak bilgileri, ilan numaraları.
              E-devlet tarafından kullanıcılara temin edilen tanımlayıcı numara
              (GUID-Globally Unique Identifier Number).
            </Description>
            <Description>
              Kullanım Verileri ve Sık Kullanılanlar: İlgili Kişinin internet
              sitemiz veya çağrı merkezlerimizi arama nedenleri, ses kayıtları,
              evimin değeri ve bölge raporu bilgileri, ürünün kullanıldığı tarih
              ve saat verileri, ürün üzerinde sorgusu oluşturulan il, ilçe,
              mahalle, İlgili Kişinin Portal üzerinden baktığı ürünler,
              metrekare fiyatları, yurtiçi veya yurtdışı firmaların anket,
              banner yönlendirme gibi modülleri üzerinden İlgili Kişinin ilgili
              ürüne yönlenebilmeleri ve ürün tedarikçisi firmaların İlgili Kişi
              ile iletişime geçmesi için ilgili anket veya bannerda belirtilen
              İlgili Kişiye ait veriler, emlak projeleri için internet sitemiz
              üzerinden müteahhit firmaların projeleri ile ilgili, bankaların
              emlak satışları için bankalar ile ilgili bilgi almak için İlgili
              Kişi tarafından girilen veriler, önceliklendirme seçenekleri,
              tercih edilen geri dönüş metodu ve tarihi, cevap verilen kanallar,
              internet sitemize son giriş tarihi, kullanılan vitrin ilan türü,
              gönderi türü, ziyaret edilen internet siteleri, görüntülenen sayfa
              sayısı, ziyaret süresi ve hedef tamamlama sayısı, girilen arama
              terimleri, ziyaret edilen ürün ve ilanların kategorileri, hizmet
              kullanımı sırasında oluşan hatalar ve sorunlar.
            </Description>
            <Description>
              Konum Verileri: İlgili Kişinin mobil uygulama kullanımı sırasında
              kendi bulunduğu konum etrafındaki ilanları aramak istediğinde ve
              izin vermesi durumunda elde edilen İlgili Kişinin bulunduğu yere
              ait konum bilgisi.
            </Description>
            <Description>
              Ödeme Verileri: İlgili Kişiye ait fatura ve ödeme bilgileri (adı,
              soyadı, fatura adresi, TC kimlik numarası, vergi kimlik numarası),
              İlgili Kişiye gönderilen faturalar ve İlgili Kişinin yaptığı
              ödemelere ait dekont örnekleri, ödeme numarası, fatura numarası,
              fatura tutarı, fatura kesim tarihi.
            </Description>
            <Description>
              Anket ve Test Cevapları: Şirketimiz tarafından internet sitemizde
              düzenlenen periyodik anketlere ve/veya testlere verilen cevaplar
              ile Şirketimizin işbirliği yaptığı gerçek ve tüzel kişiler
              tarafından yapılan anketlere ve/veya testlere verilen cevaplar.
            </Description>
          </TextContainer1>
          <TextContainer1>
            <Heading1>c) Kişisel Verilerin Hangi Amaçla İşleneceği</Heading1>
            <Description>
              Şirketimiz, söz konusu kişisel verilerinizi aşağıdaki amaçlarla
              sınırlı olarak işlemektedir:
            </Description>
            <Description>
              Kimlik ve İletişim Bilgileri: Şirket içi değerlendirme, iletişim,
              Kullanıcı kayıt, potansiyel müşteri bilgisi elde etmek, satış
              sonrası süreçlerin geliştirilmesi, iş geliştirme, tahsilat,
              müşteri portföy yönetimi, promosyon, analiz, şikayet yönetimi,
              müşteri memnuniyeti süreçlerini yönetmek, pazarlama, reklam,
              araştırma, faturalandırma, etkinlik bilgilendirmesi, operasyonel
              faaliyetlerin yürütülmesi, hizmet kalitesinin ölçülmesi,
              geliştirilmesi, denetim, kontrol, optimizasyon, müşteri doğrulama,
              pazarlama, satış, reklam, satış sonrası hizmetleri,
              dolandırıcılığın tespiti ve önlenmesi;
            </Description>
            <Description>
              Kimlik Doğrulama Bilgileri: Kullanıcı kayıt, sorun/hata bildirimi,
              kontrol, operasyonel faaliyetlerin geliştirilmesi, yürütülmesi,
              satış sonrası süreçlerin geliştirilmesi, iş geliştirme, tahsilat,
              şirket içi değerlendirme, müşteri portföy yönetimi, hizmet
              kalitesinin ölçülmesi, iletişim, optimizasyon, moderasyon,
              denetim, risk yönetimi, denetim, müşteri doğrulama,
              dolandırıcılığın tespiti ve önlenmesi, mevzuat hükümleri gereğince
              zorunlu olan ilanlarda kimlik doğrulamanın E-devlet üzerinden
              yapılması;
            </Description>
            <Description>
              Kullanım Verileri ve Sık Kullanılanlar: Kullanıcı kayıt,
              sorun/hata bildirimi, kontrol,
            </Description>
            <Description>
              Konum verileri: Konuma bağlı veya konumla ilişkili internet sitesi
              fonksiyonlarının kullandırılması, denetim ve kontrol, risk
              yönetimi;
            </Description>
            <Description>
              Ödeme Verileri: Faturalandırma sürecini yönetmek, muhasebe, satış
              sonrası süreçlerin geliştirilmesi, iş geliştirme, tahsilat, şirket
              içi değerlendirme, skorlama, profilleme, müşteri portföy yönetimi,
              satış sonrası hizmetler, iletişim, pazarlama, denetim, kontrol,
              ödeme hizmet sağlayıcıları ile yürütülen süreçler;
            </Description>
            <Description>
              İçerik: İş geliştirme, optimizasyon, müşteri portföy yönetimi,
              denetim, kontrol, operasyonel faaliyetlerin geliştirilmesi, iş
              geliştirme, promosyon, şirket içi değerlendirme, müşteri yönetimi,
              analiz, skorlama, profilleme, satış sonrası süreçlerin
              geliştirilmesi, tahsilat, satış sonrası hizmetler, iletişim,
              hizmet kalitesi ölçülmesi, geliştirilmesi, şikayet yönetimi
              süreçlerini yürütme;
            </Description>
            <Description>
              Anket ve Test Cevapları: İnternet sitemizin fonksiyonlarının
              kullandırılması ve bu fonksiyonların Şirketimiz tarafından yerine
              getirilebilmesi için işbirliği yaptığımız gerçek ve/veya tüzel
              kişiler ile internet sitemizin kullanım amaçlarına uygun olarak
              yukarıda belirtilen tüm işleme faaliyetleri kapsamında işbirliği
              yaptığımız üçüncü gerçek ve tüzel kişiler tarafından bu
              kullanıcılara doğrudan pazarlama yapma, istatistikî analiz yapma,
              süreçlerini iyileştirme ve veri tabanı oluşturma;
            </Description>
            <Description>
              Mal/Hizmet sağlanması, sözleşmelerden kaynaklanan yükümlülükleri
              ifa etme, hak tesis etme, hakları koruma, ticari ve hukuki
              değerlendirme süreçlerini yürütme, hukuki ve ticari risk
              analizleri yapma, hukuki uyum sürecini yürütme, mali işleri
              yürütme, yasal gereklilikleri yerine getirme, yetkili kurum,
              kuruluş ve mercilerin kararlarını yerine getirme, taleplerini
              cevaplama, Şirketin fiziksel güvenliğini sağlama, doğabilecek
              uyuşmazlıklarda delil olarak kullanma
            </Description>
          </TextContainer1>
          <TextContainer1>
            <Heading1>
              ç) İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla
              Aktarılabileceği
            </Heading1>
            <Description>
              Guvenlisatkirala, Kullanıcıya ait kişisel verileri başta Üyelik
              Sözleşmesi gereklerini ve Hizmetler’i ifa etmek, Kullanıcı
              deneyimini geliştirmek(iyileştirme ve kişiselleştirme dahil),
              Kullanıcıların güvenliğini sağlamak, dolandırıcılığı tespit etmek
              ve önlemek, Hizmet’leri geliştirmek, Hizmet’ler için önem arz
              edebilecek nitelikteki sorgulama faaliyetlerini gerçekleştirmek,
              operasyonel değerlendirme araştırması yapmak, hataları gidermek,
              Kullanıcı kimliklerini doğrulamak, sistem performansını
              geliştirmek olmak üzere yukarıda işleme amaçları kısmında
              belirtilen amaçlardan herhangi birini gerçekleştirebilmek için dış
              kaynak hizmet sağlayıcılar, iş ortakları, tedarikçiler, ekspertiz
              ve gayrimenkul danışmanlığı firmaları; Hizmetler’i ifa ederken
              aktarımın gerektirdiği ölçüde kurumsal üyeler, kargo şirketleri,
              hukuk büroları, araştırma şirketleri, çağrı merkezleri, şikayet
              yönetimi ve güvenliğin sağlanmasına ilişkin yazılım şirketleri,
              ajanslar, danışmanlık şirketleri, basım sektöründe yer alan
              şirketler, bankaların emlak satışları için bankalar, emlak
              projeleri ile ilgili olarak müteahhitlik firmaları, sosyal medya
              mecraları, belgelendirme kuruluşları dahil üçüncü gerçek ve/veya
              tüzel kişiler ile ve yasal zorunluluklar kapsamında yetkili kurum,
              kuruluş, merci, idari ve yargı organları ile paylaşmaktadır.
            </Description>
            <Description>
              Ayrıca, Kullanıcının Ad ve İletişim Bilgileri, ödeme aşamasında
              onaylayacağı ödeme kuruluşu çerçeve sözleşmesi uyarınca ve 9 Ocak
              2008 tarihli ve 26751 sayılı Resmi Gazete’de yayımlanan Suç
              Gelirlerinin Aklanmasının ve Terörün | Finansmanının Önlenmesine
              Dair Tedbirler Hakkında Yönetmelik uyarınca kimlik doğrulaması
              gerçekleştirilmesi amacıyla ödeme kuruluşlarıyla paylaşılacaktır
            </Description>
            <Description>
              Cihazınıza yerleştirilen çerezler aracılığıyla elde edilen kişisel
              verileriniz üçüncü kişiler ile iş bu Bilgilendirme ’de belirtilen
              kapsam ve amaçlarla paylaşılabilecektir.
            </Description>
            <Description>
              Guvenlisatkirala kişisel verileri yukarıda belirtilen kategoriler
              ve amaçlar dahilinde bu amaçlarla sınırlı ve orantılı olmak üzere
              yurt içinde üçüncü kişilere aktarabileceği gibi yurt dışına da
              aktarabilecektir.
            </Description>
          </TextContainer1>
          <TextContainer1>
            <Heading1>d) Kişisel Veri İşlemenin Hukuki Sebebi</Heading1>
            <Description>
              Kişisel verileriniz 6698 sayılı Kanun’un 5. ve 6. maddelerinde
              belirtilmiş olan;
            </Description>
            <MenuContainer>
              <List>Kanunlarda açıkça öngörülmüş olması,</List>
              <List>
                Hukuki yükümlülüğünü yerine getirebilmek için zorunlu olması
              </List>
              <List>
                Sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olup
                işlemenin gerekli olması (Üyelik Sözleşmesi, Kullanım Koşulları
                ve bunlara dayalı olarak sözleşmenin ifası, hakkın tesisi ve
                korunması),
              </List>
              <List>
                Meşru menfaati için işlemenin zorunlu olması
                (guvenlisatkirala’nın Portal ile ilgili faaliyetlerinde
                özellikle dolandırıcılığı engellemek başta olmak üzere
                hizmetleri yürütebilmesi için gerekli olan verileri toplaması),
              </List>
              <List>Tarafınızca alenileştirilmiş olması,</List>
              <List>
                Bir hakkın tesisi, kullanılması veya korunması için işlemenin
                zorunlu olması,
              </List>
              <List>Açık rızanızın bulunması</List>
            </MenuContainer>
            <Description>
              hukuki sebebine dayanarak otomatik ya da veri kayıt sistemimizin
              parçası olmak kaydıyla otomatik olmayan yollarla işlenmektedir.
            </Description>
          </TextContainer1>
          <TextContainer1>
            <Heading1>
              Platformumuz Aracılığıyla E-devlet Sistemleri Üzerinden Elde
              edilen{" "}
            </Heading1>
            <Description>
              Bilgiler: Guvenlisatkirala’da ilan verirken mevzuat gereği zorunlu
              tutulan kimlik doğrulaması sürecinde elde edilen kişisel verileri
              ifade eder. Bu kişisel veriler, ilan verme, ilan düzenleme ve
              ilanı yeniden yayına alma aşamasında mevzuat gereği
              gerçekleştirilen kimlik doğrulama sürecinde E-devlet tarafından
              kullanıcı bazında aktarılan tanımlayıcı numarası (GUID-Globally
              Unique Identifier Number) bilgisini kapsamaktadır.
            </Description>
          </TextContainer1>
          <TextContainer1>
            <Heading1>
              f) Kişisel Veri Sahibi’nin 6698 sayılı Kanun’un 11. maddesinde
              Sayılan Hakları
            </Heading1>
            <Description>
              Kişisel veri sahipleri olarak, haklarınıza ilişkin taleplerinizi
              aşağıda düzenlenen yöntemlerle Guvenlisatkirala’ya iletmeniz
              durumunda Guvenlisatkirala talebin niteliğine göre talebi en kısa
              sürede ve en geç otuz gün içinde sonuçlandıracaktır. Bu kapsamda
              kişisel veri sahipleri;
            </Description>
            <MenuContainer>
              <List>Kişisel verilerinin işlenip işlenmediğini öğrenme,</List>
              <List>
                Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,
              </List>
              <List>
                Kişisel verilerin işlenme amacını ve bunların amacına uygun
                kullanılıp kullanılmadığını öğrenme,
              </List>
              <List>
                Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı
                üçüncü kişileri bilme,
              </List>
              <List>
                Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde
                bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin
                kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini
                isteme,
              </List>
              <List>
                6698 sayılı Kanun ve ilgili diğer kanun hükümlerine uygun olarak
                işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin
                ortadan kalkması halinde kişisel verilerin silinmesini veya yok
                edilmesini isteme ve bu kapsamda yapılan işlemin kişisel
                verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,
              </List>
              <List>
                İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla
                analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun
                ortaya çıkmasına itiraz etme,
              </List>
              <List>
                Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle
                zarara uğraması halinde zararın giderilmesini talep etme
                haklarına sahiptir.
              </List>
            </MenuContainer>
            <Description>
              Yukarıda belirtilen haklarınızı kullanma ile ilgili talebinizi,
              “Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğe” göre
              Türkçe olarak; veri sorumlusu sıfatıyla Guvenlisatkirala "nın
              Bahçelievler Mh.Ş.Üsteğmen Kamil Baltacı Cd.Işık Rezidans Blok
              No:10 İç Kapı No:1 Merkez/SİİRT adresine kimliğinizi tespit edici
              belgeler ile yazılı olarak iletebilir, noter kanalıyla,
              guvenlisatkirala.com adresine kayıtlı elektronik posta olarak veya
              Tebliğde belirtilen diğer yöntemlerle iletebilirsiniz.
            </Description>
            <Description>
              guvenlisatkirala’nın cevap vermeden önce kimliğinizi doğrulama
              hakkı saklıdır.Başvurunuzda;
            </Description>
            <MenuContainer>
              <List>
                Adınızın, soyadınızın ve başvuru yazılı ise imzanızın,
              </List>
              <List>
                Türkiye Cumhuriyeti vatandaşları için T.C. kimlik numaranızın,
                yabancı iseniz uyruğunuzun, pasaport numaranızın veya varsa
                kimlik numaranızın,
              </List>
              <List>
                Tebligata esas yerleşim yeri veya iş yeri adresinizin,
              </List>
              <List>
                Varsa bildirime esas elektronik posta adresi, telefon ve faks
                numaranızın,
              </List>
              <List>
                Talep konunuzun, bulunması zorunlu olup varsa konuya ilişkin
                bilgi ve belgelerin de başvuruya eklenmesi gerekmektedir.
              </List>
            </MenuContainer>
          </TextContainer1>
          <TextContainer>
            <Description>EYA YAZILIM VE YAYINCILIK ANONİM ŞİRKETİ</Description>
            <Description>
              Adres: Bahçelievler Mh.Ş.Üsteğmen Kamil Baltacı Cd.Işık Rezidans
              Blok No:10 İç Kapı No:1 Merkez/SİİRT
            </Description>
            <Description>e-posta: info@ guvenlisatkirala.com</Description>
            <Description>Web Sitesi: www.guvenlisatkirala.com</Description>
            <Description>
              <span>
                Kayıtlı elektronik posta (KEP) adresi: eyayazilim@hs01.kep.tr
              </span>
            </Description>
            <Description>MERSİS NO: 0383087694400001</Description>
          </TextContainer>
        </ContextContainer>
      </MainContainer>
    </>
  );
};

export default Contract5;
