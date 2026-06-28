export const content = `
<h2>Araçlarınızı Bağlamak</h2>

<p><strong>Bağlayıcılar</strong>, Claude'un harici araçlara, verilere ve dosyalara erişmesini sağlar. Connectors sayesinde, her yeni sohbette sıfırdan başlamak yerine modelin doğrudan iş süreçlerindeki verilerle çalışması sağlanabilir.</p>

<p>Bağlayıcılar, Claude'un sizin adınıza bilgileri okumasına ve eylemler gerçekleştirmesine imkan tanır. Verdiğiniz izinlere bağlı olarak Claude; dosyalarınızı arayebilir, dokümanları çekebilir, veri analizi yapabilir, kayıtları güncelleyebilir veya bağlı uygulamalar üzerinden görevleri yürütebilir.</p>

<p>İki ana bağlayıcı türü vardır:</p>
<ul>
  <li><strong>Web Bağlayıcıları:</strong> Claude'u bulut tabanlı servislere bağlar (örneğin Google Drive, Notion, Slack, Asana).</li>

  <li><strong>Masaüstü Uzantıları:</strong> Claude Masaüstü (Claude Desktop) uygulaması üzerinden bilgisayarınızda yerel (<strong>local</strong>) olarak çalışır. Claude'a yerel dosyalarınız ve makinenizdeki yerel uygulamalar için erişim yetkisi verir.</li>
</ul>

<p>Tüm bu bağlayıcı altyapısının arkasında <strong>Model Context Protocol (MCP)</strong> standardı yatar. Model Context Protocol (MCP), yapay zekanın farklı uygulamalara tek bir tutarlı protokol üzerinden bağlanmasını sağlayan açık kaynaklı bir standarttır. Bu açık kaynaklı evrensel standart sayesinde geliştiriciler, farklı yazılım araçları için kolayca bağlayıcı (connector) üretebilirler.</p>

<h3>Bağlayıcıları Bulma ve Bağlama</h3>

<p>Anthropic, önerilen bağlayıcıların (connectors) bir dizinini <a href="https://claude.ai/directory">claude.ai/directory</a> adresinde barındırır. Bu dizin iki sekme halinde düzenlenmiştir:</p>
<ul>
  <li><strong>Web</strong>: Bulut servisleri ve uygulamalar (Gmail, Notion, Slack, Asana, Linear, Stripe ve çok daha fazlası).</li>

  <li><strong>Masaüstü Uzantıları</strong>: Claude Masaüstü (Claude Desktop) uygulaması aracılığıyla bilgisayarınızda yerel (<strong>local</strong>) olarak çalışan araçlar.</li>
</ul>

<p>Mevcut bağlayıcılara göz atmak için sohbet penceresinin sol alt kısmındaki <code>+</code> butonuna tıklayıp <strong>Connectors</strong> seçeneğini de seçebilirsiniz.</p>

<h4>Bir Web Bağlayıcısı Kurulumu</h4>

<p>Bir bulut servisini bağlamak için şu adımları izleyebilirsiniz:</p>
<p>1.  <strong>Bağlayıcıyı bulun</strong>: <code>claude.ai/directory</code> adresine gidin veya herhangi bir sohbette <code>+</code> > <strong>Connectors</strong> seçeneğine tıklayın.</p>
<p>2.  <strong>Bağlan butonuna tıklayın</strong>: Eklemek istediğiniz bağlayıcıyı seçin.</p>
<p>3.  <strong>Kimlik Doğrulama</strong>: Servisin giriş sayfasına yönlendirileceksiniz. Mevcut kullanıcı bilgilerinizle giriş yapın.</p>
<p>4.  <strong>İzinleri Verin</strong>: Claude'un talep ettiği belirli izinleri inceleyin ve erişimi yetkilendirin.</p>
<p>5.  <strong>Bağlantıyı Test Edin</strong>: Claude'a geri dönün ve <em>"Can you access my [araç adı]?"</em> gibi basit bir istekte bulunarak bağlantıyı test edin.</p>

<p>Bağlantı kurulduktan sonra Claude, verdiğiniz izinlere bağlı olarak o servis içinde arama yapabilir, verileri okuyabilir ve bazı durumlarda eylemler (<strong>actions</strong>) gerçekleştirebilir.</p>

<h4>Masaüstü Uzantıları</h4>

<p>Masaüstü uzantıları, web arayüzü yerine Claude Masaüstü (Claude Desktop) uygulamalarını gerektirir. Bu uzantılar, Claude'un yerel uygulamalarla, dosya sisteminizle ve macOS veya Windows'taki yerel özelliklerle etkileşime girmesini sağlar.</p>

<p>Bazı masaüstü uzantıları şunlardır:</p>
<ul>
  <li>Belgeleri okumak ve düzenlemek için <strong>yerel dosya erişimi (local file access)</strong>.</li>

  <li>Otomatik web görevleri için <strong>tarayıcı kontrolü (browser control)</strong>.</li>

  <li>Tasarım işleri için <strong>yerel uygulama entegrasyonu (Figma gibi)</strong>.</li>
</ul>

<p>Bir masaüstü uzantısı yüklemek için:</p>
<p>1.  Claude Masaüstü (Claude Desktop) uygulaması indirin ve kurun.</p>
<p>2.  Uygulamayı açın ve <strong>Settings > Extensions</strong> (Ayarlar > Uzantılar) menüsüne gidin.</p>
<p>3.  Mevcut uzantılara göz atın ve <strong>Install</strong> (Yükle) butonuna tıklayın.</p>
<p>4.  O uzantıya özel ek kurulum adımlarını takip edin.</p>

<h3>Bağlayıcıları İşinizde Kullanmak</h3>

<p>Araçlarınızı bağladıktan sonra, Claude isteklerinize yanıt verirken bu araçları göz önünde bulundurur. Bağlı araçları kullanmanın bazı pratik yolları şunlardır:</p>

<h4>Proje Yönetimi</h4>
<ul>
  <li><em>"Bu hafta teslim edilmesi gereken en yüksek öncelikli görevlerim nelerdir?"</em></li>

  <li><em>"Q4 bütçe teklifini incelemek için yeni bir görev oluştur."</em></li>

  <li><em>"Ürün lansmanı projemizin durumunu özetle."</em></li>
</ul>

<h4>İletişim</h4>
<ul>
  <li><em>"Tedarikçi sözleşmesini tartıştığımız e-posta yazışmasını bul."</em></li>

  <li><em>"#marketing kanalındaki en son mesaja bir yanıt taslağı hazırla."</em></li>

  <li><em>"Ekip, dünkü tartışmada zaman çizelgesi hakkında neye karar verdi?"</em></li>
</ul>

<h4>Dokümantasyon</h4>
<ul>
  <li><em>"Dokümantasyonumuzda marka sesi (brand voice) kılavuzumuzu ara."</em></li>

  <li><em>"Geçen haftaki ürün incelemesi toplantı notlarını özetle."</em></li>

  <li><em>"Stil rehberimiz kısaltmaların kullanımı hakkında ne diyor?"</em></li>
</ul>

<h4>İş Araçları</h4>
<ul>
  <li><em>"Bana geçen çeyreğin gelir eğilimlerini göster."</em></li>

  <li><em>"Acme Corp fırsatının (opportunity) durumu nedir?"</em></li>

  <li><em>"1.000 doların üzerindeki son işlemleri listele."</em></li>
</ul>

<h3>Güvenlik ve İzin Yönetimi</h3>

<p>Claude'u harici servislere bağladığınızda, ona bu servisler içindeki verileri okuma—ve bazen değiştirme—yetkisi vermiş olursunuz. İşte dikkat edilmesi gereken bazı hususlar:</p>

<ul>
  <li><strong>Kapsamlı Erişim</strong>: İzinler, bağlayıcının neye ihtiyaç duyduğuna göre belirlenir ve her uygulamanın menüsü altından bireysel izinleri açıp kapatabilirsiniz.</li>

  <li><strong>Claude Sadece Sizin Gördüğünüzü Görür:</strong> Claude yalnızca sizin erişim hakkınız olan verilere erişebilir. İş e-postanızı bağlamak, Claude'a şirket yöneticinizin (CEO) gelen kutusuna erişim hakkı vermez; sadece kendi gelen kutunuza erişebilirsiniz.</li>

  <li><strong>Erişim Her An Geri Çekilebilir</strong>: Bir servisin bağlantısını Claude'un ayarlarından veya üçüncü taraf servisin güvenlik ayarlarından dilediğiniz an kesebilirsiniz. Becerilerde olduğu gibi, özel bağlayıcılar (custom connectors) bulabilir veya kendiniz inşa edebilirsiniz. Yalnızca güvenilir kaynaklardan gelen bağlayıcıları kurun.</li>
</ul>

<h3>Claude Arayüzleri ve Entegrasyon Matrisi</h3>

<p>Claude'u iş akışlarınıza entegre etmek için sadece masaüstü uygulamasıyla sınırlı değilsiniz. Anthropic, kullanım senaryolarına göre optimize edilmiş entegrasyon yelpazesi sunar:</p>

<table>
  <thead>
    <tr><th>Arayüz / Entegrasyon</th><th>Temel Yetenekler / Görevler</th><th>Çalıştığı Platformlar</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Claude.ai</strong></td><td>Genel görevler, araştırma, yazma, analiz, dosya oluşturma.</td><td>Web tarayıcısı, masaüstü ve mobil uygulamalar.</td></tr>
    <tr><td><strong>Claude Code</strong></td><td>Yazılım geliştirme, kod tabanında gezinme, git iş akışları.</td><td>Terminal / komut satırı, IDE veya tarayıcı.</td></tr>
    <tr><td><strong>Claude Cowork</strong></td><td>Karmaşık, çok adımlı görevler; araştırma raporları, belge oluşturma, dosya düzenleme, veri analizi.</td><td>Masaüstü uygulaması (ve Dispatch üzerinden mobil).</td></tr>
    <tr><td><strong>Slack Entegrasyonu</strong></td><td>Ekip iş birliği, toplantı hazırlığı, bağlam içi hızlı cevaplar.</td><td>Slack çalışma alanı.</td></tr>
    <tr><td><strong>Claude for Excel</strong></td><td>E-tablo analizi, finansal modelleme, formül hata ayıklama.</td><td>Microsoft Excel yan çubuğu.</td></tr>
    <tr><td><strong>Claude for PowerPoint</strong></td><td>Slayt oluşturma, sunum düzenleme, biçimlendirme ve tasarım.</td><td>Microsoft PowerPoint yan çubuğu.</td></tr>
    <tr><td><strong>Claude for Chrome</strong></td><td>Web araştırması, e-posta yönetimi, tarayıcı otomasyonu.</td><td>Chrome tarayıcı yan çubuğu.</td></tr>
  </tbody>
</table>

<h3>Bu Bölümün Önemli Konseptleri</h3>

<ul>
  <li><strong>Connectors (Bağlayıcılar):</strong> Claude'un harici araçlara, veri tabanlarına ve bulut uygulamalarına doğrudan erişmesini sağlayan veri entegrasyon yolları.</li>

  <li><strong>Model Context Protocol (MCP):</strong> Yapay zekanın farklı uygulama ve veri kaynaklarıyla tek bir tutarlı protokol üzerinden iletişim kurmasını sağlayan açık kaynaklı, evrensel entegrasyon standardı.</li>

  <li><strong>Desktop Extensions (Masaüstü Uzantıları):</strong> Claude Masaüstü uygulamasının yerel bilgisayardaki dosyalara ve işletim sistemi yeteneklerine erişmesini sağlayan yerel bağlayıcılar.</li>

  <li><strong>Authenticate (Kimlik Doğrulama):</strong> Bir kullanıcının veya sistemin kimliğini doğrulayarak sisteme güvenli giriş yapmasını sağlama süreci.</li>

  <li><strong>Grant Permissions (Erişim İzinleri):</strong> Bir uygulamaya veya yapay zekaya, belirli verilere erişmesi veya eylemler gerçekleştirmesi için yetki sınırları atamak.</li>

  <li><strong>Browser Control (Tarayıcı Kontrolü):</strong> Yapay zekanın yerel tarayıcıyı otonom olarak yönlendirerek web sitelerinde gezinme, veri toplama veya web tabanlı görevleri yürütme yeteneği.</li>

  <li><strong>Scoped Access (Kapsamlı Erişim):</strong> Bir servisin veya eklentinin tüm sisteme değil, sadece önceden yetkilendirilmiş kısıtlı veri alanlarına erişebilmesi durumu.</li>

  <li><strong>Revocable (İptal Edilebilir):</strong> Kullanıcı tarafından harici bir entegrasyona verilen erişim yetkisinin veya anahtarının her an geri çekilebilir olması özelliği.</li>
</ul>
`;
