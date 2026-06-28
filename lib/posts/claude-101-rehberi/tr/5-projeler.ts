export const content = `
<h2>Projelere Giriş</h2>

<p>Yapay zeka modelleri genellikle her yeni sohbet oturumunda bağlamı sıfırlar ve dosyaların tekrar yüklenmesini gerektirir. Claude, bu süreci organize etmek ve sürekli devam eden iş akışlarını yönetmek için <strong>Projects</strong> (Projeler) özelliğini barındırır.</p>

<p>Projeler, tek seferlik sorular (<strong>one-shot questions</strong>) yerine, süreğen ve geniş kapsamlı iş süreçlerinizi (<strong>workflows</strong>) yönetmek için tasarlanmış dijital çalışma alanlarıdır. Bir proje oluşturduğunuzda şunları gerçekleştirebilirsiniz:</p>

<ul>
  <li><strong>Referans Belgeleri Saklama:</strong> Toplantı notları, raporlar, kod kılavuzları gibi sürekli başvurulacak belgeleri projenin içine yükleyebilir ve her yeni sohbet sekmesinde bunları otomatik hatırlanmasını sağlayabilirsiniz.</li>

  <li><strong>Tutarlı Yanıt Yönergeleri:</strong> Modelin uyması gereken kuralları (örneğin "Her zaman kaynak göster", "Dosyalarımızı şu şablona göre oluştur") projeye kalıcı talimat olarak kaydedebilirsiniz.</li>

  <li><strong>Ekip İş Birliği:</strong> Aynı proje alanı üzerinde birden fazla ekip üyesinin ortak bir bağlam (<strong>context</strong>) ve bilgi birikimi ile çalışmasını sağlayabilirsiniz.</li>
</ul>

<h3>İlk Projenizi Kurmak</h3>

<p>Bir projenin kurulum adımları şunlardır:</p>

<p>1. <strong>Projeyi Başlatın:</strong> Sol menüdeki "Projects" butonuna veya doğrudan <code>claude.ai/projects</code> adresine giderek sağ üstteki "+ New Project" seçeneğine tıklayın. Projenize açıklayıcı bir isim ve kısa bir amaç açıklaması verin. Görünürlüğünü isteğinize göre gizli tutabilir veya ekip arkadaşlarınızla paylaşabilirsiniz.</p>
<p>2. <strong>Proje Talimatlarını (Instructions) Tanımlayın:</strong> "Instructions" paneli üzerinden Claude'un bu projedeki tüm sohbetlerde uymasını istediğiniz kuralları yazın. İyi bir talimat seti; projenin amacını, Claude'dan beklenen adımları (örneğin "Önce blog yapısını kurgula, sonra taslağı yaz"), tercih edilen ton ve stil kurallarını ve çıktı gereksinimlerini (örneğin "Her zaman call-to-action ekle") içerir. Ayrıca bu bölümü belirli iş akışlarını (<strong>workflows</strong>) otomatikleştirmek için de programlayabilirsiniz (örneğin "Yüklenen toplantı transkriptlerinden otomatik olarak şablonlu bir özet çıkart").</p>
<p>3. <strong>Bilgi Tabanını (Knowledge Base) İnşa Edin:</strong> Sağ menüdeki "+" butonunu kullanarak PDF, DOCX, CSV, TXT and HTML gibi çeşitli formatlarda belgeleri veya doğrudan Google Drive'ı bağlayarak referans dosyalarınızı projeye aktarın. Dosyalarınızı adlandırırken "belge1.pdf" gibi jenerik isimler yerine "Q4-2024-Marka-Kilavuzu.pdf" gibi açıklayıcı isimler kullanmak Claude'un doğru veriyi bulmasını kolaylaştırır.</p>

<h3>Projede Çalışmak ve Ekip İş Birliği</h3>

<p>Projenizi kurduktan sonra Claude ile sohbet etmeye başlayabilirsiniz. Proje dahilinde açtığınız her yeni sohbet penceresi, bilgi tabanınıza (<strong>knowledge base</strong>) erişebilecek ve belirlediğiniz proje talimatlarına (<strong>project instructions</strong>) göre davranacaktır.</p>

<p>Claude for Work (Team ve Enterprise) kullanıcıları için projeler, iş birliği özellikleriyle birlikte gelir. Projenizi paylaşırken ekip üyelerinize üç farklı yetkilendirme seviyesi (<strong>permission levels</strong>) atayabilirsiniz:</p>

<ul>
  <li><strong>Can View (Görüntüleyebilir):</strong> Üyeler proje içeriğini görebilir, bilgi tabanını kullanabilir ve sohbet edebilir; ancak herhangi bir değişiklik yapamazlar. Bu, tartışma haklarına sahip salt okunur (<strong>read-only</strong>) bir erişim seviyesidir.</li>

  <li><strong>Can Edit (Düzenleyebilir):</strong> Üyeler tam iş birliği yetkisine sahiptir. Proje talimatlarını düzenleyebilir, bilgi tabanını güncelleyebilir, üyeleri yönetebilir ve projeye aktif katkıda bulunabilirler.</li>

  <li><strong>Owner (Proje Sahibi):</strong> Projeyi oluşturan kişi her şeyi kontrol eder. Projeyi kimlerin göreceğini yönetebilir, belirli kişilerle paylaşabilir veya tüm organizasyonun erişimine açabilir.</li>
</ul>

<p>Bir projeyi paylaşmak için proje adının sağındaki "Share project" butonuna tıklayıp kişileri ekleyebilir, e-posta adreslerini toplu olarak kopyalayıp yapıştırarak toplu paylaşım (<strong>bulk sharing</strong>) yapabilir veya projenizi "Everyone at [organization]" seçeneğiyle tüm organizasyon için keşfedilebilir hale getirebilirsiniz.</p>

<h3>Büyük Bilgi Tabanları ve RAG (Retrieval Augmented Generation) Ölçeklemesi</h3>

<p>Projeye çok sayıda veya çok büyük dosyalar yüklediğinizde, Claude bu durumu <strong>Retrieval Augmented Generation (RAG)</strong> mekanizmasıyla yönetir.</p>

<p>Projedeki bilgi miktarı <strong>context window</strong> sınırına yaklaşmaya başladığında, Claude <strong>RAG modunu</strong> etkinleştirir. Claude, tüm proje dosyalarını aynı anda belleğe yüklemek yerine, sorduğunuz soruyu yanıtlamak için en ilgili bilgi parçalarını arayıp bulur ve yalnızca bu parçaları belleğe çeker. Bu arama ve getirme süreci, projenin veri kapasitesini artırırken yanıt hızını korur. RAG modu aktif olduğunda arayüzde görsel bir gösterge belirir, ancak belgelerle sohbet etme ve bağlama duyarlı (<strong>context-aware</strong>) yanıtlar alma deneyimi devam eder.</p>

<h3>Projeler İçin En İyi Pratikler (Best Practices)</h3>

<p>Projelerden yararlanmak ve yanıt kalitesini korumak için şu kurallara dikkat edilmelidir:</p>

<ul>
  <li><strong>Odaklanarak Başlayın, Ardından Genişletin:</strong> Her şeyi tek bir projeye sığdırmaya çalışmak yerine, spesifik bir <strong>use case</strong> (kullanım senaryosu) ile başlayın. İlerledikçe yeni içerikler ve dosyalar ekleyerek kapsamı genişleyebilirsiniz.</li>

  <li><strong>Bilgi Tabanını (Knowledge Base) Güncel Tutun:</strong> Güncelliğini yitirmiş belgeler, yapay zekanın yanlış veya eski yanıtlar vermesine yol açar. Bilgi tabanınızı belirli aralıklarla gözden geçirip güncelleyin.</li>

  <li><strong>Net ve Spesifik Talimatlar Yazın:</strong> Ne istediğinizi net olarak belirtin. Muğlak talimatlar tutarsız sonuçlar doğurur.</li>

  <li><strong>Belgeleri Açıklayıcı Şekilde Adlandırın:</strong> Dosyalara <code>rapor.pdf</code> gibi jenerik isimler vermek yerine <code>Q4-2025-Satis-Raporu.pdf</code> gibi açıklayıcı isimler verin. Claude, belgeler arasındaki anlamsal ilişkileri kurarken dosya adlarını ve birbirlerine olan yakınlığını (<strong>proximity</strong>) referans alır.</li>

  <li><strong>Belgelere İsimleriyle Referans Verin:</strong> Sohbet esnasında Claude'a belirli bir belgeye odaklanmasını söyleyebilirsiniz (örneğin: <em>"Q3 raporumuza dayanarak en önemli müşteri geri bildirimlerini özetle"</em>).</li>
</ul>

<h3>Bu Bölümün Önemli Konseptleri</h3>

<ul>
  <li><strong>Persistent Context (Kalıcı Bağlam):</strong> Yapay zeka asistanında açılan her yeni sohbet sekmesinde, proje dosyalarının ve sistem talimatlarının hafızaya otomatik olarak yüklenmesini sağlayan yapı.</li>

  <li><strong>Workspace (Çalışma Alanı):</strong> Belirli bir konu, ürün veya yazılım projesine ait dosyaların, sohbetlerin ve kuralların mantıksal olarak gruplandığı dijital çalışma odası.</li>

  <li><strong>Knowledge Base (Bilgi Tabanı):</strong> Yapay zekanın yanıt üretirken referans alabilmesi için yüklenen dokümanlar, şablonlar ve kaynakların oluşturduğu bilgi havuzu.</li>

  <li><strong>RAG (Retrieval Augmented Generation):</strong> Yapay zekanın yanıt vermeden önce harici bir bilgi tabanında arama yapıp en ilgili verileri bularak cevabını bu verilere dayandırması tekniği.</li>

  <li><strong>Workflow Automation (İş Akışı Otomasyonu):</strong> Yapay zekanın, belirli girdileri alıp önceden tanımlanmış kurallar ve şablonlar çerçevesinde otonom olarak işlemesi süreci.</li>

  <li><strong>Permission Levels (Yetkilendirme Seviyeleri):</strong> Bir proje veya sistemdeki kullanıcıların erişim, düzenleme ve yönetim haklarını belirleyen yetki sınırları.</li>

  <li><strong>Read-Only (Salt Okunur):</strong> Kullanıcıların veriyi okumasına ve sorgulamasına izin veren ancak üzerinde düzenleme veya silme hakkı tanımayan erişim kısıtlaması.</li>

  <li><strong>Use Case (Kullanım Senaryosu):</strong> Bir sistemin belirli bir hedefe ulaşmak için izlediği kullanım adımları ve senaryosu.</li>

  <li><strong>Proximity (Semantik Yakınlık):</strong> RAG aramalarında ve veri hiyerarşilerinde, belgelerin veya metin bloklarının anlam olarak birbirine olan yakınlığı ve ilişkisi.</li>
</ul>
`;
