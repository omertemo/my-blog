export const content = `
<h2>Kurumsal Arama</h2>

<p>Kurumsal Arama (Enterprise Search), Claude arayüzündeki yan menünüze özel bir <strong>"Ask {Şirket Adınız}"</strong> (Şirket Adına Sor) seçeneği ekler. Bu özellik; şirketinizin farklı araçları ve veri kaynakları arasında dağılmış olan kurumsal bilgileri bulmak ve sentezlemek için tasarlanmıştır.</p>

<p>Kurumsal Arama'yı, tüm organizasyonunuz için önceden kurulmuş bir Proje (Project) gibi düşünebilirsiniz; şirketinizin bilgi tabanı (knowledge base) sisteme yüklenmiştir, böylece sorularınıza bağlama duyarlı yanıtlar almak için doğrudan aramaya başlayabilirsiniz.</p>

<p>Standart sohbetlerin aksine Kurumsal Arama, bilgi toplamaya odaklanmış sistem talimatları ile çalışır.</p>

<h3>Kurumsal Arama ile Neler Sorabilirsiniz?</h3>

<p>Kurumsal Arama, birden fazla bilgi kaynağını taramayı veya şirket genelinden gelen verileri tek bir yerde sentezlemeyi gerektiren durumlarda kullanılır. İşte yaygın kullanım senaryolarından bazıları:</p>

<ul>
  <li><strong>Gelişmelerden Haberdar Olmak (Getting up to speed):</strong>
    <ul>
      <li><em>"Dün ben izinliyken şirket genelinde neler konuşuldu?"</em></li>
      <li><em>"Geçen haftaki iş güncellemelerini ve ilerleme durumlarını özetle."</em></li>
      <li><em>"Platform projesindeki güncel engelleyiciler (blockers) nelerdir?"</em></li>
    </ul>
  </li>
  <li><strong>Politika ve Süreç Soruları:</strong>
    <ul>
      <li><em>"Uzaktan çalışma politikamız hakkında bilgi ver."</em></li>
      <li><em>"Masraf formunu teslim etme süreci nasıldır?"</em></li>
      <li><em>"İzin talebi göndermek için hangi adımları izlemeliyim?"</em></li>
    </ul>
  </li>
  <li><strong>Araştırma ve Analiz:</strong>
    <ul>
      <li><em>"Müşterilerin rakipleri tercih etme sebepleri nelerdir?"</em></li>
      <li><em>"Q4 ürün yol haritası (product roadmap) hakkındaki toplantı notlarını özetle."</em></li>
      <li><em>"Müşteri adaptasyon (onboarding) sürecimiz hakkında bilgi bul."</em></li>
    </ul>
  </li>
  <li><strong>Yeni Ekip Üyelerinin Oryantasyonu:</strong>
    <ul>
      <li><em>"Kimlik doğrulama (authentication) sistemimiz nasıl çalışıyor?"</em></li>
      <li><em>"Faturalandırma altyapısını öğrenmek için kiminle görüşmeliyim?"</em></li>
      <li><em>"Mühendislik ekibimiz deployment için hangi araçları tercih ediyor?"</em></li>
    </ul>
  </li>
  <li><strong>Performans ve Proje Takibi:</strong>
    <ul>
      <li><em>"Yeni pazarlama kampanyasıyla ilgili tüm belgeleri ve yazışmaları listele."</em></li>
      <li><em>"Geçen haftaki liderlik toplantısında alınan kritik kararlar nelerdi?"</em></li>
      <li><em>"Altyapı (Infrastructure) girişimine yapılan ekip katkılarını özetle."</em></li>
    </ul>
  </li>
</ul>

<p>Bir soru sorduğunuzda Claude; SharePoint belgeleri, Slack kanalları, Gmail yazışmaları ve Google Drive dosyaları gibi tüm bağlı kurumsal araçlarınızda arama yapar, bilgileri sentezler ve yanıt üretir. Üstelik yanıtın doğruluğunu denetleyebilmeniz için <strong>yararlandığı kaynakları belirtir (cites its sources)</strong>.</p>

<h3>Kurumsal Aramayı Kurmak (Setting Up Enterprise Search)</h3>

<p>Kurumsal Arama, iki adımlı bir kurulum süreci gerektirir: ilk olarak bir yönetici (<strong>admin</strong>) bunu organizasyon için yapılandırır, ardından bireysel kullanıcılar kendi kişisel hesaplarıyla kimlik doğrulaması (<strong>authenticate</strong>) yapar.</p>

<h4>Yöneticiler (Owners) İçin</h4>

<p>Kurumsal Arama projesi, tüm Team ve Enterprise organizasyonları için varsayılan olarak etkindir; ancak ekip üyelerinin bunu kullanabilmesi için önce bir Sahibin (<strong>Owner</strong>) ilk kurulumu tamamlaması gerekir:</p>
<p>1. Sol yan menüdeki <strong>"Ask Your Org"</strong> (Şirketinize Sorun) seçeneğine tıklayın.</p>
<p>2. Devam etmek için <strong>"Set up for your org"</strong> (Şirketiniz için kurun) seçeneğine tıklayın (veya özelliği kapatmak için "Disable"ı seçin).</p>
<p>3. Organizasyonunuzun araçlarını bağlayın. Belgeler (<strong>Documents</strong> - Google Drive veya SharePoint gibi) ve Sohbet (<strong>Chat</strong> - Slack veya Microsoft Teams gibi) için birer bağlayıcı seçmeniz gerekecektir. E-posta önerilir ancak isteğe bağlıdir.</p>
<p>4. Ekibinizin ihtiyaç duyduğu diğer araçları kurmak için <strong>"+ Add more"</strong> (Daha fazla ekle) seçeneğine tıklayın.</p>
<p>5. Proje adını özelleştirin. Girdiğiniz isim, herkesin yan menüsünde <em>"Ask [İsim]"</em> şeklinde görünecektir.</p>
<p>6. Bir açıklama ekleyin ve ardından <strong>"Finish set up"</strong> (Kurulumu bitir) seçeneğine tıklayın.</p>

<p>Kurulum tamamlandıktan sonra proje, organizasyonunuzun tüm üyeleri için kullanılabilir hale gelir.</p>

<h4>Kullanıcılar İçin</h4>

<p>Bir yönetici Kurumsal Aramayı kurduktan sonra, yan menünüzde yıldızlı bir <em>"Ask {Org Name}"</em> projesi göreceksiniz. Başlamak için şu adımları izleyebilirsiniz:</p>
<p>1. Yan menünüzdeki projeye tıklayın.</p>
<p>2. Önerilen hizmetlere bağlanmak için rehberli adaptasyon (<strong>guided onboarding</strong>) akışını takip edin.</p>
<p>3. Aramak istediğiniz her bir hizmetle (Slack, Google, Microsoft 365 vb.) kimlik doğrulaması (<strong>authenticate</strong>) yapın.</p>
<p>4. Claude'a organizasyonunuzun bilgileri hakkında sorular sormaya başlayın.</p>

<p>Ne kadar çok bağlayıcıyı etkinleştirirseniz, arama sonuçlarınız o kadar kapsamlı olacaktır. İstediğiniz zaman projenin Talimatlar (Instructions) bölümündeki "Connect" (Bağlan) butonuna tıklayarak daha sonra da yeni bağlayıcılar ekleyebilirsiniz.</p>

<h4>Peki bu sistem güvenli mi?</h4>

<p>Kurumsal Arama, yalnızca orijinal bağlı araçta zaten erişim izniniz olan bilgileri gösterir. Ayrıca sohbetleriniz gizli kalır ve bağlı verileriniz ayrı olarak indekslenmez (<strong>indexed</strong>) veya depolanmaz.</p>

<h3>Bu Bölümün Önemli Konseptleri</h3>

<ul>
  <li><strong>Enterprise Search (Kurumsal Arama):</strong> Kuruluş genelinde arama yapabilen, yan menüde özel bir sekme halinde sunulan organizasyon düzeyinde akıllı arama platformu.</li>

  <li><strong>Blocker (Engelleyici):</strong> Yazılım süreçlerinde bir işin veya görevin tamamlanmasını tamamen engelleyen ya da geciktiren teknik veya operasyonel aksaklık.</li>

  <li><strong>Onboarding (Oryantasyon):</strong> Şirkete yeni katılan çalışanların veya bir sistemi ilk defa kullanacak kişilerin entegrasyon, eğitim ve adaptasyon süreci.</li>

  <li><strong>Cite Sources (Kaynak Belirtme):</strong> Yapay zekanın yanıt üretirken kullandığı harici belgelerin, konuşmaların veya e-postaların orijinal konumlarını atıf olarak sunması.</li>

  <li><strong>Owner (Organizasyon Sahibi):</strong> Bir SaaS uygulamasında veya platformda organizasyon yönetimi, faturalandırma ve genel yapılandırma izinlerine sahip üst düzey yönetici rolü.</li>

  <li><strong>Guided Onboarding (Rehberli Adaptasyon):</strong> Kullanıcının bir sistemi veya eklentiye ilk kurulum aşamalarını kolaylaştırmak için sunulan etkileşimli, adım adım yönlendirme akışı.</li>

  <li><strong>Indexed (İndekslenmiş):</strong> Aramaları hızlandırmak amacıyla verilerin taranarak harici bir dizinde veya veri tabanında yapılandırılmış şekilde saklanması işlemi.</li>
</ul>
`;
