export const content = `
<h2>Becerilerle Çalışmak</h2>

<p>Claude, projeleri ve kod tabanlarını yönetirken uzmanlık paketleri ve dış dünya araç entegrasyonları çalıştırmayı destekler.</p>

<p><strong>Skills</strong> (Beceriler), Claude'un belirli ve özelleştirilmiş görevlerdeki başarısını artırmak için arka planda dinamik olarak yüklediği talimatlar, <strong>scripts</strong> (betikler) ve kaynak şablonlarından oluşan modüler klasörlerdir. Bunları, belirli yetenekler kazandıran otonom "uzmanlık paketleri" olarak tanımlayabiliriz.</p>

<p>Eğer Claude'u Excel dosyaları, PowerPoint sunumları veya PDF'ler üretmek için kullandıysanız, aslında arka planda bu beceri paketlerini çalıştırmışsınızdır. Ancak Skills yapısı sadece belge oluşturmakla sınırlı değildir. Özel beceriler (<strong>custom skills</strong>) sayesinde tüm tekrarlanabilir iş akışlarınızı kodlayabilirsiniz:</p>

<ul>
  <li><strong>Quarterly Variance Analysis (Çeyreklik Sapma Analizi):</strong> Finansal verilerdeki çeyreklik sapmaları inceleyen analiz şablonları.</li>

  <li><strong>Brand Voice (Marka Sesi):</strong> Metinlerin marka sesine ve tonuna uygunluğunu denetleyen kalite kontrol kuralları.</li>

  <li><strong>Compliance Checklist (Uyumluluk Kontrol Listesi):</strong> Kodun veya dokümanların yasal ve teknik standartlara uyumluluğunu kontrol eden listeler.</li>
</ul>

<p>Custom Skills sayesinde Claude, ona devrettiğiniz süreçlerde aynı adımları ve kuralları takip eder.</p>

<h3>Beceri Türleri (Types of Skills)</h3>

<p>Kullanım esnasında karşılaşacağınız iki ana <strong>skills</strong> kategorisi vardır:</p>

<ul>
  <li><strong>Anthropic Becerileri (Anthropic Skills):</strong> Doğrudan Anthropic tarafından geliştirilen ve güncellenen yerleşik becerilerdir. Excel e-tabloları, Word belgeleri, PowerPoint sunumları ve PDF dosyaları için dosya oluşturma yeteneklerini barındırır. Anthropic Becerileri paid (ücretli) kullanıcılar için varsayılan olarak açıktır ve ilgili bir işlem yapıldığında arka planda otomatik olarak tetiklenir.</li>

  <li><strong>Özel Beceriler (Custom Skills):</strong> Sizin veya kuruluşunuzun belirli iş akışları ve alana özgü (<strong>domain-specific</strong>) görevleri otomatikleştirmek için geliştirdiği beceri paketleridir. Örneğin, şirketinizin marka kurallarını sunumlara entegre eden, toplantı notlarını belirli bir şablona göre düzenleyen veya veri analizi script'lerinizi çalıştıran özel beceriler hazırlayabilirsiniz.</li>
</ul>

<h3>Becerileri Etkinleştirmek (Enabling Skills)</h3>

<p>Beceriler (Skills) özelliği şu anda Pro, Max, Team ve Enterprise planlarındaki kullanıcılar için özellik önizlemesi (<strong>feature preview</strong>) aşamasındadır. Becerilerin çalışabilmesi, Claude'un güvenli yalıtılmış bilgi işlem ortamına (<strong>sandboxed computing environment</strong>) ihtiyaç duyması nedeniyle, <strong>Code execution</strong> (kod yürütme) ve <strong>file creation</strong> (dosya oluşturma) özelliklerinin açık olmasına bağlıdır.</p>

<p>Becerileri etkinleştirmek için şu adımları izleyebilirsiniz:</p>

<p>1. <strong>Settings > Capabilities</strong> (Ayarlar > Yetenekler) menüsüne gidin.</p>
<p>2. <strong>Code execution and file creation</strong> seçeneğini açık (<strong>toggled on</strong>) duruma getirin.</p>
<p>3. Aşağı kaydırarak <strong>Skills</strong> bölümünü bulun.</p>
<p>4. İstediğiniz becerileri tek tek aktif veya pasif hale getirin.</p>

<p>Kurumsal (Enterprise) planlarda, bireysel çalışanların bu özelliklere erişebilmesi için öncelikle organizasyon sahiplerinin (Owners) Yönetici (Admin) ayarlarından <strong>Code execution</strong> ve <strong>Skills</strong> izinlerini vermesi gerekir. Team planlarında ise bu özellik önizlemesi organizasyon düzeyinde varsayılan olarak etkindir.</p>

<p>Beceriler etkinleştirildiğinde, ayarlar sayfanızda hem Anthropic'in yerleşik (built-in) becerilerini hem de sisteme yüklediğiniz özel (custom) becerileri listeleyebilirsiniz.</p>

<h3>Becerileri Pratikte Kullanmak (Using Skills in Practice)</h3>

<p>Süreçlerin yürütülmesinde, gönderilen girdi komutları (prompts) analiz edilerek hangi beceri paketinin tetikleneceğine karar verilir.</p>

<p>Becerileri tetikleyecek bazı pratik prompt örnekleri:</p>

<ul>
  <li><em>"Aylık harcamalarımı takip eden ve toplamlar için formüller barındıran bir Excel e-tablosu oluştur."</em></li>

  <li><em>"Bu toplantı notlarını alıp profesyonel bir PowerPoint sunumuna dönüştür."</em></li>

  <li><em>"Bu ham verileri özetleyen ve görsel grafikler içeren bir PDF raporu üret."</em></li>

  <li><em>"Excel'de farklı senaryoları analiz eden dinamik bir finansal model (financial model) tasarla."</em></li>
</ul>

<p>Claude bir beceri (<strong>skill</strong>) kullandığında, arka planda yaptığı işlemleri akıl yürütme adımlarını içeren düşünce zincirinde (<strong>chain of thought</strong>) belirtir. İşlem bittiğinde, bilgisayarınıza kaydedebileceğiniz veya doğrudan Google Drive'a aktarabileceğiniz fiziksel ve indirilebilir bir dosya çıktısı alırsınız.</p>

<h3>Özel Beceriler (Custom Skills) Oluşturmak</h3>

<p>Anthropic'in sunduğu yerleşik beceriler temel ofis işlerini çözse de, Beceriler özelliğinin asıl gücü özel iş süreçlerinizi koda dökmenizden gelir. Özel Beceriler (<strong>Custom Skills</strong>), şirketinizin marka kurallarını (brand voice), şablonlarını ve iş yapış şekillerini modelin hatırlamasına imkan tanır.</p>

<p>Özel bir beceri oluşturmak için model ile sohbet ederek gereksinimler tanımlanır. Dosya yapısı model tarafından otonom olarak kurulur:</p>

<p>1.  <strong>İhtiyacınızı Tanımlayın:</strong> Yeni bir sohbet başlatıp neye ihtiyacınız olduğunu söyleyin (örneğin: <em>"Çeyreklik iş incelemeleri (QBR) yazmak için bir skill oluşturmak istiyorum"</em>).</p>
<p>2.  <strong>Soruları Yanıtlayın:</strong> Claude, iş akışınız hakkında sizinle kısa bir mülakat gerçekleştirir (bu becerinin ne işe yarayacağını, kaliteli bir çıktının nasıl olması gerektiğini ve hangi durumlarda kullanılacağını sorar).</p>
<p>3.  <strong>Referans Materyalleri Yükleyin:</strong> Varsa şablonlarınızı, marka stil rehberlerinizi veya geçmişte başarıyla tamamladığınız örnek çalışmaları referans materyali (<strong>reference materials</strong>) olarak yükleyin.</p>
<p>4.  <strong>Kaydedin ve Kullanın:</strong> Görüşme sonunda Claude, tüm bu kuralları derleyip otonom bir beceri dosyası üretir. Bu dosyayı kaydettiğinizde, beceriniz kullanıma hazır hale gelir ve sol menüdeki <strong>Customize</strong> (Özelleştir) panelinde listelenir.</p>

<p>Oluşturduğunuz beceri, ilgili bir iş akışı başlatıldığında otonom olarak çağrılır. Dilediğiniz zaman model ile tekrar konuşarak becerilerinizi güncelleyebilir ve geliştirebilirsiniz.</p>

<h3>Beceriler ve Projeler Karşılaştırması (Skills vs. Projects)</h3>

<p>Hem projelerin hem de becerilerin Claude'a ek bağlam sağlamak için kullanıldığını gördük. Farkı anlamak için şu temel kuralı aklınızda tutabilirsiniz: <strong>Projeler bilgiyi saklar, beceriler süreçleri çalıştırır.</strong></p>

<ul>
  <li><strong>Projeler Bilgi Merkezleridir (Knowledge Hubs):</strong> Proje spesifikasyonları, toplantı notları, araştırma raporları gibi modelin işinizi anlamak için referans alacağı tüm belgeleri barındırır.</li>

  <li><strong>Beceriler Prosedür Makineleridir (Procedural Machines):</strong> Modelin bir görevi hangi sıra ve yöntemle (metodoloji, iş adımları) tamamlaması gerektiğini kodlar.</li>
</ul>

<p>Bu iki özellik birbirini tamamlar. Proje <strong>neyi</strong> (bilgiyi/veriyi) sağlayacağını tanımlarken, beceri <strong>nasıl</strong> (işleme sürecini) yapılacağını belirler. Örneğin, bir "müşteri toplantısına hazırlık" becerisi (<strong>skill</strong>), projenin bilgi tabanına (<strong>knowledge base</strong>) yüklenmiş olan müşteri analiz belgelerini çekerek çalışabilir.</p>

<table>
  <thead>
    <tr><th>Özellik</th><th>Projeler (Projects)</th><th>Beceriler (Skills)</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Amaç</strong></td><td>Claude'un referans alacağı verileri saklamak.</td><td>Claude'un izleyeceği süreç adımlarını tanımlamak.</td></tr>
    <tr><td><strong>En İyi Alan</strong></td><td>Uzun vadeli bağlam, referans dokümanlar, ekip iş birliği.</td><td>Tekrarlanabilir iş akışları, çok adımlı görevler, tutarlı metodoloji.</td></tr>
    <tr><td><strong>Örnek</strong></td><td>Müşteri bilgi deposu, araştırma asistanı.</td><td>Marka/hukuk yönergeleri, blog taslağı oluşturma, PDF üretimi.</td></tr>
    <tr><td><strong>Kalıcılık</strong></td><td>Yüklenen bilgi, projedeki tüm sohbetlerde hazırdır.</td><td>Talimatlar sadece o beceri tetiklendiğinde uygulanır.</td></tr>
  </tbody>
</table>

<h3>Bu Bölümün Önemli Konseptleri</h3>

<ul>
  <li><strong>Skills (Beceriler):</strong> Yapay zekaya belirli ve tekrarlanabilir uzmanlık alanlarında otonom çalışma yeteneği kazandıran modüler talimat ve kod paketleri.</li>

  <li><strong>Scripts (Betikler):</strong> Bir derleme işlemine gerek duymadan satır satır yorumlanarak çalıştırılan ve otomasyon süreçlerinde kullanılan kod dosyaları.</li>

  <li><strong>Domain-Specific (Alana Özgü):</strong> Sadece belirli bir teknik uzmanlık alanı, sektör veya şirket kuralları çerçevesinde geçerlilik taşıyan veri ve iş akışları.</li>

  <li><strong>Feature Preview (Özellik Önizlemesi):</strong> Yeni geliştirilen yeteneklerin genel kullanıma açılmadan önce belirli kullanıcı planlarında test edilmesi süreci.</li>

  <li><strong>Sandboxed Environment (Yalıtılmış Ortam):</strong> Kodların ve dosyaların ana sisteme veya kişisel verilere zarar vermesini önlemek adına izole ve güvenli bir sanal çember içinde çalıştırılması.</li>

  <li><strong>Code Execution (Kod Yürütme):</strong> Yapay zekanın arka planda yazılım kodlarını çalıştırıp çıktı üretebilme yeteneği.</li>
</ul>
`;
