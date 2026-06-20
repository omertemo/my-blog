export interface Post {
  slug: string;
  title: { tr: string; en: string };
  desc: { tr: string; en: string };
  tag: string;
  tagVariant?: "cyan" | "purple";
  emoji: string;
  readTime: number;
  date: string;
  published: boolean;
  content?: { tr: string; en: string };
}

export const posts: Post[] = [
                      {
    slug: "claude-101-rehberi",
    title: {
      tr: "A'dan Z'ye Claude 101: Geliştiriciler İçin Akıllı Bir İş Ortağı",
      en: "Claude 101: An Intelligent Thought Partner for Developers",
    },
    desc: {
      tr: "Claude'un temel felsefesini, Constitutional AI yapısını, geniş bağlam penceresini ve yeni masaüstü uygulamasının sunduğu Chat, Cowork ve Code modlarını inceliyoruz.",
      en: "We explore Claude's core philosophy, Constitutional AI, the massive context window, and the Chat, Cowork, and Code modes of the new desktop app.",
    },
    tag: "AI",
    tagVariant: "cyan",
    emoji: "🤖",
    readTime: 15,
    date: "2026-06-20",
    published: false,
    content: {
      tr: `
<p>Geliştiriciler ve teknoloji profesyonelleri olarak her gün onlarca problemi çözmeye çalışıyoruz. Son birkaç yıldır yapay zeka araçları bu süreçlerin ayrılmaz bir parçası haline geldi. Ancak pek çok araç sadece basit birer soru-cevap asistanı (chatbot) olmanın ötesine geçemiyor. Anthropic tarafından geliştirilen Claude ise bu ezberi bozarak kendisini sadece bir asistan değil, aynı zamanda karmaşık süreçleri birlikte yürütebileceğimiz bir "düşünce ortağı" (thought partner) olarak konumlandırıyor.</p>

<p>Bu yazıda, Anthropic'in Claude 101 eğitiminde öne çıkan başlıkları, Claude'un teknik gücünü ve yeni masaüstü uygulamasındaki çalışma modlarını inceleyeceğiz. İlk olarak en temel soruyla başlayalım: Claude'u diğerlerinden farklı kılan ne?</p>

<h2>Giriş: Neden Claude?</h2>

<p>Claude'u ilk kullanmaya başladığınızda dikkatinizi çeken ilk şey, insani, dengeli ve son derece dürüst iletişim tonudur. Bu rastlantısal bir tasarım tercihi değil, Anthropic'in temel felsefesinin bir sonucudur. Claude; faydalı (helpful), zararsız (harmless) ve dürüst (honest) olmak üzere üç temel ilke üzerine inşa edilmiştir.</p>

<h3>1. Constitutional AI (Anayasal Yapay Zeka)</h3>
<p>Pek çok yapay zeka modeli, insan geri bildirimleriyle (RLHF) eğitilir ve bu süreç insanların kendi ön yargılarını modele aktarmasına neden olabilir. Claude ise <strong>Constitutional AI</strong> adı verilen özgün bir yöntemle eğitilir. Modele insan hakları beyannamesi, gizlilik kuralları ve etik ilkelerden oluşan yazılı bir "anayasa" verilir. Model, eğitim esnasında kendi çıktılarının bu anayasaya uygunluğunu kendisi denetler ve düzeltir. Bu sayede toksik veya ayrımcı çıktılardan (outputs) uzak dururken, son derece şeffaf ve güvenilir bir çerçevede çalışır.</p>

<h3>2. Geniş Bağlam Penceresi (Context Window)</h3>
<p>Bir geliştirici için yapay zekanın hafızası en kritik konudur. Claude, desteklenen modellerinde standard planlarda 200 bin, kurumsal veya Pro planlarda ise 1 milyon <strong>token</strong>'a kadar geniş bir <strong>context window</strong> sunar. Bu, yaklaşık 500 ila 2500 sayfalık metni veya devasa bir kod reposunu tek bir sohbet içinde Claude'a doğrudan aktarabilmeniz anlamına gelir. Böylece projenizin tamamını veya geniş kütüphane dokümantasyonlarını birer <strong>attachment</strong> (ek) olarak yükleyebilir, Claude'un tüm bu kod tabanını görerek nokta atışı çözümler üretmesini sağlayabilirsiniz.</p>

<h3>3. Yönlendirilebilirlik (Steerability)</h3>
<p>Claude, kişilik, ton ve davranış kurallarına sıkı sıkıya uyacak şekilde yüksek yönlendirilebilirlik (<strong>steerability</strong>) yeteneğine sahiptir. Ona vereceğiniz sistem prompt'ları veya roller sayesinde, tam olarak projenizin standartlarına uygun (örneğin "Sadece TypeScript yaz ve her fonksiyona jsdoc ekle") çıktılar alabilirsiniz.</p>

<h3>Bu Bölümün Önemli Konseptleri</h3>

<ul>
  <li><strong>Constitutional AI (Anayasal Yapay Zeka):</strong> Modelin insan geri bildirimleriyle eğitilirken, belirli bir yazılı kurallar setine (anayasa) göre kendi çıktılarını denetleyip düzeltmesini sağlayan Anthropic eğitim metodu.</li>

  <li><strong>Context Window (Bağlam Penceresi):</strong> Yapay zeka modelinin tek bir konuşma oturumunda aklında tutabildiği ve işleyebildiği maksimum veri miktarı.</li>

  <li><strong>Steerability (Yönlendirilebilirlik):</strong> Modelin kendisine verilen sistem yönergelerine, karakter kısıtlamalarına ve çıktı formatlarına sıkı sıkıya uyma becerisi.</li>

  <li><strong>Token:</strong> Yapay zekanın metinleri işlemek için böldüğü en küçük anlamlı hece veya karakter grubu (yaklaşık 1 kelime = 1.3 token).</li>

  <li><strong>Alignment (Hizalama/Uyumlanma):</strong> Yapay zeka sisteminin kararlarının, hedeflerinin ve çıktılarının insan değerleri ve etik kurallarıyla uyumlu hale getirilmesi süreci.</li>
</ul>

<h2>Yapay Zeka Akıcılığı (AI Fluency) ve 4D Çerçevesi</h2>

<p>Yapay zekayı kod yazarken veya günlük işlerimizde kullanırken en büyük yanılgı, tüm işi sadece birkaç butona tıklayarak veya tek seferlik isteklerle (<strong>one-shot requests</strong>) çözebileceğimizi düşünmektir. Gerçek verimlilik, yapay zekayı sadece bir araç değil, otonom bir iş ortağı olarak konumlandırdığımızda başlar. Akademik olarak geliştirilen <strong>4D Framework for AI Fluency</strong> (Yapay Zeka Akıcılığı için 4D Çerçevesi), bu iş birliğini dört temel yetkinlik üzerine kurar:</p>

<p>1. <strong>Delegation (Delege Etme):</strong> Hangi işleri yapay zekanın yapacağına, hangilerini insanın üstleneceğine stratejik karar vermektir.</p>
<p>2. <strong>Description (Tanımlama):</strong> Yapay zekaya isteklerimizi ve kurallarımızı net, açık ve bağlamlı (<strong>context</strong>) bir şekilde tarif etme yeteneğidir.</p>
<p>3. <strong>Discernment (Ayırt Etme / Muhakeme):</strong> Claude'un çıktılarını (<strong>outputs</strong>) kritik bir süzgeçten geçirmek, kaliteyi ve doğruluğu sorgulamaktır.</p>
<p>4. <strong>Diligence (Özen / Gayret):</strong> Yapay zekayı sorumlu ve etik kullanmak, üretilen kod veya belgelerin tüm teknik sorumluluğunu üstlenmektir.</p>

<h3>Halüsinasyon ve Temellendirme (Grounding)</h3>
<p>Büyük dil modelleri (LLM'ler) zaman zaman son derece inandırıcı ama tamamen uydurma bilgiler üretebilir; buna halüsinasyon (hallucination) denir. İşte bu noktada *Discernment* ve *Diligence* devreye girer. Claude'un çıktılarının doğruluğundan emin olmak için onları internet aramasıyla (<strong>web search</strong>) veya yüklediğimiz ham belgelerle temellendirmemiz (<strong>grounding</strong>) gerekir. Bu sayede model hayali veriler yerine, sadece sunduğumuz gerçek dokümanlara odaklanır.</p>

<h3>Evals (Değerlendirme Testleri)</h3>
<p>Claude'un bizim çalışma alanımızda (<strong>domain</strong>) gerçekten başarılı olup olmadığını test etmek için sistematik bir değerlendirme (<strong>evals</strong>) süreci yürütmeliyiz. Bunun için:</p>
<ul>
  <li>Yaptığımız işlerden 5-10 gerçek örnek toplarız.</li>

  <li>Bunları üretecek test prompt'ları hazırlarız.</li>

  <li>Claude'un verdiği çıktılarla kendi örneklerimizi karşılaştırıp tonu, doğruluğu ve eksikleri analiz ederek prompt'larımızı iyileştiririz (<strong>refine</strong>).</li>
</ul>

<h3>İterasyon Zihniyeti ve Sık Karşılaşılan Sorunlar</h3>
<p>Unutmayın, yapay zekayla çalışmak doğrusal değil, yinelemeli (<strong>iterative</strong>) bir süreçtir. İlk çıktıyı sadece bir taslak (<strong>draft</strong>) olarak görüp Claude'a spesifik geri bildirimler (feedback) vermelisiniz. İşlerinizde Claude'un yanıtı çok genel (<strong>generic</strong>) kalıyorsa kısıtlarınızı artırabilir, istediğiniz formata uymuyorsa ona kurallar söylemek yerine örnek bir format gösterebilirsiniz. Eğer konuşma çok uzadıysa ve bağlam kayması (<strong>context drift</strong>) nedeniyle Claude rayından çıktıysa (<strong>off track</strong>), yeni bir temiz sohbet penceresi açmak en hızlı çözümdür.</p>

<h3>Bu Bölümün Önemli Konseptleri</h3>

<ul>
  <li><strong>Evals (Değerlendirmeler):</strong> Yapay zekanın belirli görevlerdeki başarı grafiğini, doğruluğunu ve stilini ölçmek için geliştirilen sistematik testler.</li>

  <li><strong>Grounding (Temellendirme):</strong> Yapay zekanın cevaplarını uydurma veriler yerine, internet araması veya yüklenen ham dokümanlar gibi gerçek ve doğrulanabilir bilgi kaynaklarına dayandırması süreci.</li>

  <li><strong>Prompt (Girdi Komutu):</strong> Yapay zeka modeline ne yapması gerektiğini söyleyen ve çıktının kalitesini doğrudan belirleyen talimat metni.</li>

  <li><strong>Iteration (Yineleme):</strong> Yapay zeka ile çalışırken ilk çıktıyı taslak kabul edip, sürekli geri bildirimlerle çıktıyı mükemmelleştirme süreci.</li>

  <li><strong>Context Drift (Bağlam Kayması):</strong> Konuşma geçmişi çok uzadığında, geçmiş kelimelerin dikkat ağırlıklarını dağıtması sonucu modelin odağını kaybetmesi veya kuralları unutmaya başlaması.</li>
</ul>

<h2>Masaüstü Deneyimi (Chat, Cowork, Code)</h2>

<p>Yapay zeka ile etkileşim kurarken kullandığımız arayüzler iş verimliliğimizi doğrudan belirler. Claude'un yeni masaüstü uygulaması (desktop app), kullanıcıya ihtiyacına göre geçiş yapabileceği üç farklı çalışma modu sunar:</p>

<ul>
  <li><strong>Chat:</strong> Web sürümünden tanıdığımız klasik sohbet arayüzüdür. Ancak işletim sistemiyle kurduğu yerel (native) entegrasyon sayesinde çok daha pratik özellikler sunar. Örneğin, Mac'te <strong>Option</strong> tuşuna çift tıklayarak (<strong>double-tap</strong>) yaptığınız işi bölmeden ekranın üzerinde yüzen bir <strong>Quick Entry</strong> (Hızlı Giriş) penceresi açabilirsiniz. Ekran görüntülerini doğrudan paylaşabilir, klavye kullanmak istemediğinizde <strong>dikte (dictation)</strong> ile konuşarak yazdırabilirsiniz. Ayrıca yerel bağlayıcılar (<strong>desktop connectors</strong>) sayesinde <strong>Apple Notes</strong> gibi bilgisayarınızdaki uygulamaları bağlayıp Claude'un yerel notlarınızı okuyup analiz etmesini sağlayabilirsiniz.</li>

  <li><strong>Cowork:</strong> Büyük hedefleri alıp bağlanan araçlar yardımıyla otonom olarak yürüten <strong>agentic</strong> (otonom ajan tabanlı) bir çalışma modudur. Projeleri bölümlere ayırarak arka planda paralel çalışan alt ajanlar (<strong>subagents</strong>) başlatabilir. Klasör bazlı dosye okuma ve yazma işlemlerini yürütebilir, <strong>scheduled tasks</strong> (zamanlanmış görevler) özelliğiyle Slack ve e-postalarınızdan günlük raporlar hazırlayabilir. <strong>Browser use</strong> ile web sitelerinde otonom gezinebilir ve hatta macOS üzerinde doğrudan tıklama ve klavye hareketleriyle bilgisayarı kontrol edebilir (<strong>computer use</strong>). Ayrıca <strong>Dispatch</strong> özelliği sayesinde, bilgisayarınız açık olduğu sürece telefonunuzdaki mobil uygulama üzerinden bilgisayardaki Claude'a görev devredebilirsiniz.</li>

  <li><strong>Code:</strong> Kod yazmak, testleri çalıştırmak ve projeyi canlıya almak (<strong>deploy</strong>) gibi tamamen yazılım geliştirme süreçlerine özeldir. Yerel klasörünüzde çalışabildiği gibi (<strong>local</strong>), buluttaki bir <strong>GitHub</strong> deposuna da bağlanabilir (<strong>remote</strong>). Claude'un otonomluk düzeyini belirleyen üç etkileşim moduna sahiptir: <strong>Ask</strong> (değişiklikleri yapmadan önce görsel diff ile onay bekler), <strong>Code</strong> (dosyaları doğrudan yazar ancak terminal komutlarından önce onay ister) ve <strong>Plan</strong> (kod yazmadan önce detaylı bir yol haritası sunar). Tüm süreç entegre <strong>git</strong> sistemiyle sürüm sürüm izlenir.</li>
</ul>

<p><strong>Cowork</strong> ve <strong>Code</strong> modları arka planda aynı güçlü <strong>engine</strong>'i (altyapıyı) paylaşır. Her ikisinin de altında <strong>Claude Code</strong> yatar; makinenize yereldir; bağımsız çalışabilir, <strong>sub-agent</strong>'lar (alt ajanlar) başlatabilir ve uzun süreli görevleri sürdürebilir.</p>

<h3>Bu Bölümün Önemli Konseptleri</h3>

<ul>
  <li><strong>Agentic Systems (Otonom Ajan Sistemleri):</strong> Yapay zekanın sadece soruları yanıtlayan bir asistan olmaktan çıkıp, verilen hedeflere ulaşmak için bilgisayardaki dosyaları okuma/yazma, terminal komutları çalıştırma gibi işlemleri kendi başına yapabilmesi.</li>

  <li><strong>Sub-agents (Alt Ajanlar):</strong> Ana yapay zeka ajanının, büyük bir görevi tamamlamak üzere alt dallara bölüp bağımsız olarak çalıştırdığı ve koordine ettiği yardımcı yapay zeka birimleri.</li>

  <li><strong>Desktop Connectors (Masaüstü Bağlayıcıları):</strong> Yapay zeka uygulamasının, kullanıcının bilgisayarındaki yerel dosyalara, notlara ve servislere güvenli bir şekilde erişmesini sağlayan entegrasyon köprüleri.</li>

  <li><strong>Computer Use (Bilgisayar Kullanımı):</strong> Yapay zekanın ekrandaki pikselleri analiz ederek insan gibi işletim sisteminde gezinmesi; uygulamaları açması, tıklaması ve yazması.</li>

  <li><strong>Sandbox (Yalıtılmış Ortam):</strong> Yapay zekanın bilgisayarda çalışırken sisteme veya kişisel verilere zarar vermesini önlemek amacıyla, yalnızca izin verilen klasörler içinde sınırlandırılmış bir güvenlik çemberi içinde çalıştırılması.</li>

  <li><strong>Refactoring (Kodu Yeniden Yapılandırmak):</strong> Kodun işlevini değiştirmeden, okunabilirliğini, performansını ve mimarisini iyileştirmek için yeniden yazılması süreci.</li>

  <li><strong>Visual Diffs (Görsel Farklar):</strong> İki kod versiyonu arasındaki eklenen, silinen ya da değiştirilen satırları gösteren görsel karşılaştırma arayüzü.</li>
</ul>

<h2>Projeler ve Artifacts (Üretkenlik Canavarı)</h2>

<p>Yapay zekanın en büyük sınırı, her yeni sohbette geçmişi sıfırlaması ve dosyaları tekrar tekrar yüklemenizi gerektirmesidir. Claude, bu sorunu çözmek ve sürekli devam eden süreçlerimizi optimize etmek için <strong>Projects</strong> (Projeler) özelliğini sunar.</p>

<p>Projeler, tek seferlik sorular (<strong>one-shot questions</strong>) yerine, süreğen ve geniş kapsamlı iş süreçlerinizi (<strong>workflows</strong>) yönetmek için tasarlanmış özel dijital çalışma alanlarıdır. Bir proje oluşturduğunuzda şunları gerçekleştirebilirsiniz:</p>

<ul>
  <li><strong>Referans Belgeleri Saklama:</strong> Toplantı notları, raporlar, kod kılavuzları gibi sürekli başvurulacak belgeleri projenin içine yükleyebilir ve Claude'un her yeni sohbet sekmesinde bunları otomatik hatırlamasını sağlayabilirsiniz.</li>

  <li><strong>Tutarlı Yanıt Yönergeleri:</strong> Claude'un her zaman uyması gereken kuralları (örneğin "Her zaman kaynak göster", "Dosyalarımızı şu şablona göre oluştur") projeye kalıcı talimat olarak kaydedebilirsiniz.</li>

  <li><strong>Ekip İş Birliği:</strong> Aynı proje alanı üzerinde birden fazla ekip üyesinin ortak bir bağlam (<strong>context</strong>) ve bilgi birikimi ile çalışmasını sağlayabilirsiniz.</li>
</ul>

<h3>İlk Projenizi Kurmak</h3>

<p>Bir projeyi hayata geçirmek son derece basittir ve yalnızca birkaç adımdan oluşur:</p>

<p>1. <strong>Projeyi Başlatın:</strong> Sol menüdeki "Projects" butonuna veya doğrudan <code>claude.ai/projects</code> adresine giderek sağ üstteki "+ New Project" seçeneğine tıklayın. Projenize açıklayıcı bir isim ve kısa bir amaç açıklaması verin. Görünürlüğünü isteğinize göre gizli tutabilir veya ekip arkadaşlarınızla paylaşabilirsiniz.</p>
<p>2. <strong>Proje Talimatlarını (Instructions) Tanımlayın:</strong> "Instructions" paneli üzerinden Claude'un bu projedeki tüm sohbetlerde uymasını istediğiniz kuralları yazın. İyi bir talimat seti; projenin amacını, Claude'dan beklenen adımları (örneğin "Önce blog yapısını kurgula, sonra taslağı yaz"), tercih edilen ton ve stil kurallarını ve çıktı gereksinimlerini (örneğin "Her zaman call-to-action ekle") içerir. Ayrıca bu bölümü belirli iş akışlarını (<strong>workflows</strong>) otomatikleştirmek için de programlayabilirsiniz (örneğin "Yüklenen toplantı transkriptlerinden otomatik olarak şablonlu bir özet çıkart").</p>
<p>3. <strong>Bilgi Tabanını (Knowledge Base) İnşa Edin:</strong> Sağ menüdeki "+" butonunu kullanarak PDF, DOCX, CSV, TXT ve HTML gibi çeşitli formatlarda belgeleri veya doğrudan Google Drive'ı bağlayarak referans dosyalarınızı projeye aktarın. Dosyalarınızı adlandırırken "belge1.pdf" gibi jenerik isimler yerine "Q4-2024-Marka-Kilavuzu.pdf" gibi açıklayıcı isimler kullanmak Claude'un doğru veriyi bulmasını kolaylaştırır.</p>

<h3>Projede Çalışmak ve Ekip İş Birliği</h3>

<p>Projenizi kurduktan sonra Claude ile sohbet etmeye başlayabilirsiniz. Proje dahilinde açtığınız her yeni sohbet penceresi, bilgi tabanınıza (<strong>knowledge base</strong>) otomatik olarak erişebilecek ve belirlediğiniz proje talimatlarına (<strong>project instructions</strong>) göre davranacaktır.</p>

<p>Claude for Work (Team ve Enterprise) kullanıcıları için projeler, kapsamlı iş birliği özellikleriyle birlikte gelir. Projenizi paylaşırken ekip üyelerinize üç farklı yetkilendirme seviyesi (<strong>permission levels</strong>) atayabilirsiniz:</p>

<ul>
  <li><strong>Can View (Görüntüleyebilir):</strong> Üyeler proje içeriğini görebilir, bilgi tabanını kullanabilir ve sohbet edebilir; ancak herhangi bir değişiklik yapamazlar. Bu, tartışma haklarına sahip salt okunur (<strong>read-only</strong>) bir erişim seviyesidir.</li>

  <li><strong>Can Edit (Düzenleyebilir):</strong> Üyeler tam iş birliği yetkisine sahiptir. Proje talimatlarını düzenleyebilir, bilgi tabanını güncelleyebilir, üyeleri yönetebilir ve projeye aktif katkıda bulunabilirler.</li>

  <li><strong>Owner (Proje Sahibi):</strong> Projeyi oluşturan kişi her şeyi kontrol eder. Projeyi kimlerin göreceğini yönetebilir, belirli kişilerle paylaşabilir veya tüm organizasyonun erişimine açabilir.</li>
</ul>

<p>Bir projeyi paylaşmak için proje adının sağındaki "Share project" butonuna tıklayıp kişileri ekleyebilir, e-posta adreslerini toplu olarak kopyalayıp yapıştırarak toplu paylaşım (<strong>bulk sharing</strong>) yapabilir veya projenizi "Everyone at [organization]" seçeneğiyle tüm organizasyon için keşfedilebilir hale getirebilirsiniz.</p>

<h3>Büyük Bilgi Tabanları ve RAG (Retrieval Augmented Generation) Ölçeklemesi</h3>

<p>Projeye çok sayıda veya çok büyük dosyalar yüklediğinizde ne olur? Claude, bu durumu <strong>Retrieval Augmented Generation (RAG)</strong> mekanizmasıyla otonom olarak yönetir.</p>

<p>Projedeki bilgi miktarı <strong>context window</strong> sınırına yaklaşmaya başladığında, Claude sorunsuz bir şekilde <strong>RAG modunu</strong> etkinleştirir. Claude, tüm proje dosyalarını aynı anda belleğe yüklemek yerine, sorduğunuz soruyu yanıtlamak için en kritik ve ilgili bilgi parçalarını akıllıca arayıp bulur ve yalnızca bu parçaları belleğe çeker. Bu akıllı arama ve getirme süreci, yanıt kalitesinden ödün vermeden projenizin dosya taşıma kapasitesini 10 katına kadar artırır. RAG modu aktif olduğunda arayüzde görsel bir gösterge belirir, ancak belgelerle sohbet etme ve bağlama duyarlı (<strong>context-aware</strong>) yanıtlar alma deneyiminiz kesintisiz olarak devam eder.</p>

<h3>Projeler İçin En İyi Pratikler (Best Practices)</h3>

<p>Projelerden en iyi şekilde yararlanmak ve Claude'un yanıt kalitesini en üst düzeyde tutmak için şu kurallara dikkat edilmelidir:</p>

<ul>
  <li><strong>Odaklanarak Başlayın, Ardından Genişletin:</strong> Her şeyi tek bir projeye sığdırmaya çalışmak yerine, spesifik bir <strong>use case</strong> (kullanım senaryosu) ile başlayın. İlerledikçe yeni içerikler ve dosyalar ekleyerek kapsamı genişletebilirsiniz.</li>

  <li><strong>Bilgi Tabanını (Knowledge Base) Güncel Tutun:</strong> Güncelliğini yitirmiş belgeler, yapay zekanın yanlış veya eski yanıtlar vermesine yol açar. Bilgi tabanınızı belirli aralıklarla gözden geçirip güncelleyin.</li>

  <li><strong>Net ve Spesifik Talimatlar Yazın:</strong> Ne istediğinizi net olarak belirtin. Muğlak talimatlar tutarsız sonuçlar doğurur.</li>

  <li><strong>Belgeleri Açıklayıcı Şekilde Adlandırın:</strong> Dosyalara <code>rapor.pdf</code> gibi jenerik isimler vermek yerine <code>Q4-2025-Satis-Raporu.pdf</code> gibi açıklayıcı isimler verin. Claude, belgeler arasındaki anlamsal ilişkileri kurarken dosya adlarını ve birbirlerine olan yakınlığını (<strong>proximity</strong>) referans alır.</li>

  <li><strong>Belgelere İsimleriyle Referans Verin:</strong> Sohbet esnasında Claude'a belirli bir belgeye odaklanmasını söyleyebilirsiniz (örneğin: *"Q3 raporumuza dayanarak en önemli müşteri geri bildirimlerini özetle"*).</li>
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
      `,
      en: `
<p>As developers and tech professionals, we tackle dozens of problems every single day. Over the past few years, AI tools have become an indispensable part of these workflows. However, many tools struggle to go beyond being simple question-and-answer chatbots. Claude, developed by Anthropic, disrupts this pattern by positioning itself not just as a reactive assistant, but as a "thought partner" that you can collaborate with on complex cognitive tasks.</p>

<p>In this post, we'll dive into the key takeaways from Anthropic's Claude 101 course, exploring Claude's technical strengths and the various working modes available in its new desktop app. Let's start with the fundamental question: What makes Claude different?</p>

<h2>Introduction: Why Claude?</h2>

<p>When you first start using Claude, the first thing you notice is its human-like, balanced, and highly honest communication style. This is not a random design choice; it is a direct result of Anthropic's core engineering philosophy. Claude is built on three foundational principles: being helpful, harmless, and honest.</p>

<h3>1. Constitutional AI</h3>
<p>Most AI models are trained using Reinforcement Learning from Human Feedback (RLHF), which can inadvertently train models to mirror human biases or act sycophantially to please evaluators. Claude, however, is trained using a novel method called <strong>Constitutional AI</strong>. The model is provided with a written "constitution"—a set of principles based on declarations of human rights, privacy guidelines, and ethical rules. During training, the model self-supervises, critiquing and correcting its own outputs against this constitution. This ensures it avoids toxic or discriminatory outputs, maintaining transparency and safety.</p>

<h3>2. Large Context Window</h3>
<p>For developers, an AI's active memory is critical. Claude offers a massive <strong>context window</strong> of 200K tokens on standard plans, and up to 1M tokens (on supported models) for Pro, Max, Team, and Enterprise plans. This translates to roughly 500 to 2,500 pages of text, or an entire codebase, that you can feed into Claude in a single conversation. You can upload extensive code files or documentation as <strong>attachments</strong>, allowing Claude to evaluate the entire project and provide highly accurate, contextual solutions.</p>

<h3>3. Steerability</h3>
<p>Claude exhibits high <strong>steerability</strong>, meaning it can strictly adhere to instructions regarding tone, style, role constraints, and output formats. By providing clear system instructions (e.g., "Always write code in TypeScript and include JSDoc comments for every function"), you can shape Claude's behavior to fit your project guidelines precisely.</p>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Constitutional AI:</strong> A novel training method developed by Anthropic where the AI is trained to self-supervise and critique its outputs based on a written set of ethical and safety principles (a constitution).</li>

  <li><strong>Context Window:</strong> The active memory of an LLM, defining the maximum volume of text/data (measured in tokens) the model can ingest and consider in a single conversation.</li>

  <li><strong>Steerability:</strong> The model's capacity to strictly follow constraints regarding tone, style, behavior, and output formatting.</li>

  <li><strong>Token:</strong> The basic unit of text processing for LLMs, typically representing a word, sub-word, or punctuation mark (average 1 word = 1.3 tokens).</li>

  <li><strong>Alignment:</strong> The process of training AI systems to ensure their goals, decisions, and outputs align with human safety, ethics, and values.</li>
</ul>

<h2>AI Fluency and the 4D Framework</h2>

<p>The biggest misconception when incorporating AI into software engineering or daily tasks is thinking we can solve everything with simple clicks or one-shot requests. Real efficiency starts when we treat AI not just as a tool, but as an autonomous thought partner. The <strong>4D Framework for AI Fluency</strong>, developed through academic research, outlines four core competencies for effective collaboration:</p>

<p>1. <strong>Delegation:</strong> Strategically deciding which tasks should be handled by humans, which by AI, and how to distribute the workload.</p>
<p>2. <strong>Description:</strong> Effectively communicating requests and parameters to the AI with clear, precise, and contextual instructions.</p>
<p>3. <strong>Discernment:</strong> Thoughtfully and critically evaluating Claude's outputs. It means inspecting the code or document for quality, logical consistency, and accuracy.</p>
<p>4. <strong>Diligence:</strong> Using AI responsibly and ethically, maintaining accountability, and fully owning the generated code or deliverables.</p>

<h3>Hallucinations and Grounding</h3>
<p>Large language models (LLMs) can occasionally generate plausible-sounding but completely incorrect information—a phenomenon known as hallucination. This is where *Discernment* and *Diligence* are crucial. To ensure accuracy, we must ground (<strong>grounding</strong>) Claude's outputs by providing specific documents, code repositories, or by enabling <strong>web search</strong>. This forces the model's attention to focus on the provided factual context rather than generating statistical guesses.</p>

<h3>Evals (Evaluations)</h3>
<p>To determine if Claude is actually performing well in your specific domain, you should run simple evaluations (<strong>evals</strong>):</p>
<ul>
  <li>Gather 5-10 real examples of a task you regularly perform.</li>

  <li>Create test prompts designed to generate similar outputs.</li>

  <li>Run the prompts and compare Claude's outputs to your examples, checking for missing information, tone alignment, and style.</li>

  <li>Use these insights to refine your prompts.</li>
</ul>

<h3>The Iteration Mindset and Common Challenges</h3>
<p>Collaborating with AI is an iterative process, not a linear one. Treat the first output as a draft and provide specific, directed feedback. For example, if Claude's response is too generic, inject more specific constraints or target audiences. If it fails to follow formatting rules, show rather than just tell by providing templates. Finally, if the conversation has grown too long and context drift has caused Claude to go off track, it is often much faster to open a new chat window to refresh the attention window.</p>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Evals (Evaluations):</strong> Systematic testing processes used to measure and verify an LLM's accuracy, formatting compliance, and stylistic quality on domain-specific tasks.</li>

  <li><strong>Grounding:</strong> Informing an LLM's responses using verified factual sources (uploaded files or real-time search queries) to reduce the risk of hallucination.</li>

  <li><strong>Prompt:</strong> The input instructions or queries provided to an LLM that guide its attention mechanism and dictate output characteristics.</li>

  <li><strong>Iteration:</strong> The process of continuously updating and refining outputs through interactive dialogue and feedback loops.</li>

  <li><strong>Context Drift:</strong> A decline in model focus or instruction-following that occurs as a conversation grows too long, diluting the attention weights over unrelated history.</li>
</ul>

<h2>The Desktop Experience (Chat, Cowork, Code)</h2>

<p>The interfaces we use to collaborate with AI directly affect our productivity. Claude’s new desktop app offers three distinct working modes tailored to your immediate needs:</p>

<ul>
  <li><strong>Chat:</strong> The same conversational Claude you know from the web, enhanced with native desktop integrations. This includes a floating <strong>Quick Entry</strong> window that triggers by double-tapping the <strong>Option</strong> key on Mac, allowing you to ask questions without leaving your active window. It also features screen capturing, window sharing, voice <strong>dictation</strong>, and <strong>desktop connectors</strong> that link local data (like Apple Notes) to your chat context.</li>

  <li><strong>Cowork:</strong> An <strong>agentic</strong> tool built for tasks requiring multi-step workflows and autonomous executions. Cowork can coordinate <strong>subagents</strong> in parallel to divide and conquer research reports, run folder-wide document updates, and execute scheduled tasks (e.g., pulling daily Slack/Calendar updates). It can browse the web via Chrome (<strong>browser use</strong>) or directly interact with desktop windows, clicking and typing to get work done (<strong>computer use</strong>). You can also hand off tasks to it remotely from your phone using <strong>Dispatch</strong>.</li>

  <li><strong>Code:</strong> Optimized specifically for software engineering workflows. It can run locally on a folder (<strong>local</strong>) or connect to a bulut-based <strong>GitHub</strong> repository (<strong>remote</strong>) for background tasks. It features three interaction modes to govern AI autonomy: <strong>Ask</strong> (proposes changes and awaits approval via visual diffs), <strong>Code</strong> (applies changes automatically but asks before running terminal commands), and <strong>Plan</strong> (outlines its full strategy beforehand). All changes are tracked via git integration.</li>
</ul>

<p><strong>Cowork</strong> and <strong>Code</strong> run on the same powerful local <strong>engine</strong> (Claude Code), enabling them to perform long-running tasks and coordinate sub-agents locally on your machine.</p>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Agentic Systems:</strong> AI systems capable of taking independent actions—such as running compiler commands, reading/writing local files, and using external tools—to achieve a high-level goal rather than just generating text answers.</li>

  <li><strong>Sub-agents:</strong> Specialized AI instances spawned by a coordinator agent to parallelize tasks (e.g., one agent writes test suites while another refactors functions) and merge results into the final output.</li>

  <li><strong>Desktop Connectors:</strong> Integration bridges that securely link a local application, notes, or files on a user's physical machine to the AI assistant's context window.</li>

  <li><strong>Computer Use:</strong> An AI capability where the assistant reads screen pixels to navigate, click, type, and interact with the desktop operating system exactly like a human user.</li>

  <li><strong>Sandbox:</strong> A contained, secure local execution environment that limits the AI's file read/write permissions to specific folders, preventing unauthorized system changes.</li>

  <li><strong>Refactoring:</strong> The process of restructuring existing computer code—improving its readability, structure, and performance—without changing its external behavior.</li>

  <li><strong>Visual Diffs:</strong> A graphical user interface component showing the exact line-by-line differences (additions, deletions, edits) between two versions of code.</li>
</ul>

<h2>Projects and Artifacts (The Productivity Powerhouse)</h2>

<p>An inherent limitation of standard AI interactions is that each new chat is a blank slate, requiring you to manually re-upload reference files and repeat instructions. Claude solves this overhead and optimizes ongoing workflows through the <strong>Projects</strong> feature.</p>

<p>Projects are dedicated digital workspaces designed for ongoing, multi-stage <strong>workflows</strong> rather than simple, one-off questions. When you establish a project, you can leverage:</p>

<ul>
  <li><strong>Persistent Reference Materials:</strong> Upload documentation, API reference guides, historical data, or templates directly into the project. Claude automatically reads this knowledge base in every new chat window opened under that project.</li>

  <li><strong>Consistent Custom Instructions:</strong> Define persistent behavioral guidelines (e.g., "Always cite sources", "Generate all code blocks in TypeScript") that govern Claude's output style across all project chats automatically.</li>

  <li><strong>Team Collaboration:</strong> Share the project workspace with team members so multiple people can collaborate from the same baseline context.</li>
</ul>

<h3>Setting Up Your First Project</h3>

<p>Establishing a project is straightforward and takes only a few steps:</p>

<p>1. <strong>Start Your Project:</strong> Click on "Projects" in the left sidebar or navigate directly to <code>claude.ai/projects</code>, then click "+ New Project" in the top-right corner. Give your project a descriptive name and a brief description. Set visibility to private or share it with your organization.</p>
<p>2. <strong>Define Project Instructions:</strong> Click on "Instructions" to specify behavioral rules for Claude across all project chats. A good instruction set includes context about your work, process guidelines (e.g., "First outline the blog structure, then draft the post"), style preferences, and specific output requirements (e.g., "Always include a call-to-action"). You can also use instructions to automate workflows (e.g., "When a meeting transcript is uploaded, generate a structured summary based on this template").</p>
<p>3. <strong>Build the Knowledge Base:</strong> Use the "+" button on the right side of the project page to upload files in PDF, DOCX, CSV, TXT, HTML, or other formats, or connect directly to Google Drive. Pro tip: Use descriptive file names like "Q4-2024-Brand-Guidelines.pdf" instead of generic ones like "document1.pdf" to help Claude locate the correct information more efficiently.</p>

<h3>Working within Your Project & Collaboration</h3>

<p>Once your project is set up, you can start chatting with Claude. Each new conversation opened under the project automatically has access to your knowledge base and follows your project instructions.</p>

<p>For users on Claude for Work (Team and Enterprise) plans, projects become even more powerful through collaboration features. When sharing a project, you can choose from three permission levels:</p>

<ul>
  <li><strong>Can View:</strong> Members can see project contents, access the knowledge base, and chat—but cannot make changes. This is read-only access with discussion rights.</li>

  <li><strong>Can Edit:</strong> Members have full collaboration power. They can modify project instructions, update the knowledge base, manage other members, and actively contribute to the project.</li>

  <li><strong>Owner:</strong> Project creators control everything, including visibility settings. They can share with specific people or make the project visible to the entire organization.</li>
</ul>

<p>To share a project, click the "Share project" button to the right of the project name. You can add individual members by name or email, use bulk sharing by pasting a list of email addresses, or share with "Everyone at [your organization]" to make the project discoverable in the Team tab.</p>

<h3>Managing Large Knowledge Bases with RAG (Retrieval Augmented Generation)</h3>

<p>What happens when you upload a substantial volume of documentation to your project? Claude handles scale automatically through <strong>Retrieval Augmented Generation (RAG)</strong>.</p>

<p>When the total volume of your project data approaches the <strong>context window</strong> limit, Claude seamlessly activates <strong>RAG mode</strong>. Rather than loading all project files into memory at once, Claude intelligently searches and retrieves only the most relevant text chunks to answer your specific query. This approach expands your project's data capacity by up to 10x while maintaining response speed and quality. A visual indicator will appear in the UI once RAG is enabled, though the interaction remains identical—allowing you to query files and receive context-aware answers seamlessly.</p>

<h3>Best Practices for Projects</h3>

<p>To get the most out of projects and keep the response quality high:</p>

<ul>
  <li><strong>Start Focused, Then Expand:</strong> Begin with a specific <strong>use case</strong> rather than trying to create one project for everything. You can always add more content and scale as you go.</li>

  <li><strong>Keep the Knowledge Base Current:</strong> Outdated documents lead to outdated AI responses. Review and update your project knowledge base periodically.</li>

  <li><strong>Write Clear Instructions:</strong> Be specific about what you want Claude to do. Vague instructions lead to inconsistent results.</li>

  <li><strong>Name Documents Descriptively:</strong> Use names like <code>Q4-2025-Sales-Report.pdf</code> rather than <code>report.pdf</code>, and group related files together. Claude uses filenames and folder <strong>proximity</strong> to understand relationships between documents.</li>

  <li><strong>Reference Documents by Name:</strong> When asking questions, you can mention specific documents to help Claude focus its search (e.g., *"Based on our Q3 report, what were the top customer concerns?"*).</li>
</ul>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Persistent Context:</strong> The underlying architecture that automatically loads project files and custom instructions into the context window of every new conversation within a project.</li>

  <li><strong>Workspace:</strong> A logical boundary or directory grouping files, instructions, chat history, and shared permissions dedicated to a specific theme or application.</li>

  <li><strong>Knowledge Base:</strong> The collection of reference documents, specifications, templates, and files uploaded to a project for the AI model to query.</li>

  <li><strong>RAG (Retrieval Augmented Generation):</strong> A framework where the AI model searches an external database or knowledge base for relevant passages first, then synthesizes its final answer based on those passages.</li>

  <li><strong>Workflow Automation:</strong> The programmatic execution of multi-step processes by the AI (e.g., generating templates from meeting transcripts) triggered by specific user inputs.</li>

  <li><strong>Permission Levels:</strong> The set of access rights (e.g., Can View, Can Edit, Owner) assigned to different users within a shared digital workspace.</li>

  <li><strong>Read-Only:</strong> A restriction level that permits users to read or query information without the ability to modify, delete, or upload data.</li>

  <li><strong>Use Case:</strong> A specific situation or scenario in which a product or service could be used to achieve a goal.</li>

  <li><strong>Proximity:</strong> The physical or semantic closeness of documents or code blocks within a system hierarchy, which RAG tools analyze to infer relationships.</li>
</ul>
      `,
    },
  },
  {
    slug: "kafka-gercek-zamanli-veri-isleme",
    title: {
      tr: "Apache Kafka ile Gerçek Zamanlı Veri İşleme",
      en: "Real-Time Data Processing with Apache Kafka",
    },
    desc: {
      tr: "İstanbul Havalimanı'nda milyonlarca mesajı işlerken öğrendiklerim; topic tasarımı, consumer group stratejileri ve hata toleransına dair pratik notlar.",
      en: "Lessons learned processing millions of messages at Istanbul Airport: topic design, consumer group strategies, and practical notes on fault tolerance.",
    },
    tag: "Kafka",
    tagVariant: "cyan",
    emoji: "⚡",
    readTime: 8,
    date: "2026-03-01",
    published: true,
    content: {
      tr: `
<p>İstanbul Havalimanı'nda her dakika binlerce uçuş verisi, sensör okuma, yolcu hareketi ve operasyon bildirimi akar. Bu veriyi gerçek zamanlı işlemek için Apache Kafka'yı kullandık. Bu yazıda Kafka'yı production'da kullanırken öğrendiklerimi paylaşıyorum.</p>

<h2>Kafka Nedir?</h2>
<p>Apache Kafka; LinkedIn tarafından geliştirilen, dağıtık, yüksek-verimli bir mesaj akış platformudur. Geleneksel mesaj kuyruklarından (RabbitMQ, ActiveMQ) farklı olarak Kafka mesajları <strong>kalıcı olarak saklar</strong> ve consumer'lar istedikleri an geriye sararak yeniden okuyabilir. Bu özellik onu hem event streaming hem de event sourcing için ideal kılar.</p>

<h2>Temel Kavramlar</h2>
<p>Kafkayı anlamak için birkaç temel terimi bilmek gerekir:</p>
<ul>
  <li><strong>Topic:</strong> Mesajların organize edildiği kategori. Bir gazete gibi düşünün; her topic farklı bir başlık.</li>
  <li><strong>Partition:</strong> Topiclerin yatay parçaları. Paralel okuma/yazma sağlar ve ölçeklenebilirliğin temelidir.</li>
  <li><strong>Offset:</strong> Her mesajın partition içindeki benzersiz sıra numarası. Consumer nereye kadar okuduğunu bu sayede bilir.</li>
  <li><strong>Consumer Group:</strong> Aynı topic'i paralel tüketen consumer'lar grubu. Her partition grubun yalnızca bir üyesine atanır.</li>
  <li><strong>Broker:</strong> Kafka sunucusu. Cluster içinde genellikle 3+ broker çalışır.</li>
</ul>

<h2>Basit Bir Producer/Consumer Örneği (Node.js / TypeScript)</h2>
<p>Aşağıda <code>kafkajs</code> kütüphanesi ile basit bir producer ve consumer örneği göreceksiniz. Önce paketi yükleyin: <code>npm install kafkajs</code></p>

<pre><code>// producer.ts
import { Kafka, Producer } from 'kafkajs';

interface FlightEvent {
  flight_id: string;
  status: 'DEPARTED' | 'ARRIVED' | 'DELAYED';
  timestamp: number;
}

const kafka = new Kafka({
  clientId: 'flight-producer',
  brokers: ['localhost:9092'],
});

const producer: Producer = kafka.producer();

const run = async (): Promise&lt;void&gt; =&gt; {
  await producer.connect();

  setInterval(async () =&gt; {
    const event: FlightEvent = {
      flight_id: 'TK1234',
      status: 'DEPARTED',
      timestamp: Date.now(),
    };

    await producer.send({
      topic: 'flight-events',
      messages: [{ key: event.flight_id, value: JSON.stringify(event) }],
    });

    console.log('Gönderildi:', event);
  }, 1000);
};

run().catch(console.error);</code></pre>

<pre><code>// consumer.ts
import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';

interface FlightEvent {
  flight_id: string;
  status: string;
  timestamp: number;
}

const kafka = new Kafka({
  clientId: 'flight-consumer',
  brokers: ['localhost:9092'],
});

const consumer: Consumer = kafka.consumer({
  groupId: 'flight-processor-group',
});

const run = async (): Promise&lt;void&gt; =&gt; {
  await consumer.connect();
  await consumer.subscribe({ topic: 'flight-events', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ partition, message }: EachMessagePayload) =&gt; {
      const event: FlightEvent = JSON.parse(message.value!.toString());
      console.log('Al\u0131nd\u0131: ' + JSON.stringify(event) + ' | Partition: ' + partition + ' | Offset: ' + message.offset);
    },
  });
};

run().catch(console.error);</code></pre>

<h2>Topic Tasarımı: Nelere Dikkat Ettim?</h2>
<p>İyi bir topic tasarımı, sonradan düzeltmesi çok zor performans sorunlarını önler. İşte production'da öğrendiklerim:</p>
<ul>
  <li><strong>Partition sayısını doğru belirleyin:</strong> Çok az partition = darboğaz. Çok fazla partition = coordinator yükü. Genel kural: hedef throughput / tek partition throughput.</li>
  <li><strong>Message key'i dikkatlice seçin:</strong> Aynı anahtara sahip mesajlar her zaman aynı partition'a gider. Uçuş takibinde <code>flight_id</code>'yi key olarak kullandık; böylece bir uçuşa ait tüm olaylar sıralı geldi.</li>
  <li><strong>Retention süresini ayarlayın:</strong> Varsayılan 7 gün. Analitik sistemler için bunu 30 güne çıkardık; bu sayede upstream sorun olduğunda consumer'lar geriye sarabiliyordu.</li>
  <li><strong>Topic isimlendirmesi:</strong> <code>&lt;domain&gt;.&lt;entity&gt;.&lt;action&gt;</code> formatını öneririm. Örnek: <code>airport.flight.status-changed</code></li>
</ul>

<h2>Consumer Group Stratejileri</h2>
<p>Consumer group'ları doğru tasarlamak, sistemin hem ölçeklenmesi hem de izole çalışması için kritik:</p>
<ul>
  <li><strong>Her servis için ayrı group:</strong> Uygulamamızda uçuş takip servisi, bildirim servisi ve analitik servisi aynı topic'i farklı group_id'lerle tüketiyordu. Biri yavaşladığında diğerleri etkilenmedi.</li>
  <li><strong>Rebalance fırtınalarına dikkat:</strong> Consumer pod'ları Kubernetes üzerindeydi. Hızlı scale-in/out'da rebalance çok sık tetikleniyordu. <code>session.timeout.ms</code> ve <code>heartbeat.interval.ms</code> değerlerini ayarlayarak bunu azalttık.</li>
  <li><strong>Manuel offset commit kullanın:</strong> <code>eachBatchAutoResolve: false</code> yapıp işlemi tamamladıktan sonra <code>resolveOffset()</code> çağırmak, mesaj kaybını önledi. Özellikle veritabanı write işlemlerinde hayat kurtarıcı.</li>
</ul>

<pre><code>// consumer-manual-commit.ts
import { Kafka, EachBatchPayload } from 'kafkajs';

const consumer = kafka.consumer({ groupId: 'flight-processor-group' });

const run = async (): Promise&lt;void&gt; =&gt; {
  await consumer.connect();
  await consumer.subscribe({ topic: 'flight-events' });

  await consumer.run({
    eachBatchAutoResolve: false,         // Manuel commit modu
    eachBatch: async ({ batch, resolveOffset, heartbeat }: EachBatchPayload) =&gt; {
      for (const message of batch.messages) {
        try {
          await processEvent(JSON.parse(message.value!.toString())); // İş mantığı
          resolveOffset(message.offset);                              // Başarılıysa commit
          await heartbeat();
        } catch (err) {
          console.error('İşlem hatası, commit atlandı:', err);        // Hata → retry
          break;
        }
      }
    },
  });
};

run().catch(console.error);</code></pre>

<h2>Hata Toleransı ve Dead Letter Queue</h2>
<p>Gerçek dünyada her mesaj başarıyla işlenemez. Boznuk veri, geçici servis hatası veya aşırı yük gibi senaryolarda sistemi dayanıklı kılmak için şu stratejiyi uyguladık:</p>
<ul>
  <li><strong>Retry topic'ler:</strong> Başarısız mesajları <code>flight-events.retry</code> topic'ine publish ettik. 3 deneme sonrası hâlâ başarısız olanlar <code>flight-events.dlq</code> (Dead Letter Queue) topic'ine gitti.</li>
  <li><strong>Idempotent producer:</strong> <code>kafkajs</code>'de producer'ı <code>{ idempotent: true }</code> seçeneğiyle başlatarak ağ kesintisinde aynı mesajın iki kez yazılmasını önledik.</li>
  <li><strong>Replication factor:</strong> Her topic'i 3 broker'a replike ettik. Bir broker düşse bile veri kaybolmadı.</li>
</ul>

<h2>İzleme ve Gözlemlenebilirlik</h2>
<p>Kafka'yı kör uçmak tehlikelidir. Takip ettiğimiz kritik metrikler:</p>
<ul>
  <li><strong>Consumer Lag:</strong> En önemli metrik. Consumer'ın producer'dan ne kadar geride olduğunu gösterir. Lag sürekli artıyorsa kapasite artırma zamanı gelmiştir.</li>
  <li><strong>Under-replicated partitions:</strong> Replikasyon geride kalmışsa veri kaybı riski var demektir.</li>
  <li><strong>Broker request rate:</strong> Darboğaz tespiti için.</li>
</ul>
<p>Tüm bu metrikleri Prometheus + Grafana ile görselleştirdik. <code>kafka-lag-exporter</code> aracı consumer lag'ı Prometheus'a aktarmak için mükemmel çalıştı.</p>

<h2>Sonuç</h2>
<p>Kafka, yüksek-throughput gerektiren gerçek zamanlı sistemlerde inanılmaz güçlü bir araç. Ama tıpkı güçlü araçlarda olduğu gibi, yanlış kullanıldığında operasyonel baş ağrısına dönüşebilir. Topic tasarımını ciddiye alın, consumer group stratejinizi iş ihtiyaçlarına göre şekillendirin ve mutlaka consumer lag'ı izleyin. Bu üç maddeye sadık kalırsanız Kafka sizi asla yarı yolda bırakmaz.</p>
      `,
      en: `
<p>At Istanbul Airport, thousands of flight events, sensor readings, passenger movements, and operational notifications flow every minute. We used Apache Kafka to process this data in real time. In this post, I share what I learned from running Kafka in production.</p>

<h2>What Is Kafka?</h2>
<p>Apache Kafka is a distributed, high-throughput message streaming platform originally developed at LinkedIn. Unlike traditional message queues (RabbitMQ, ActiveMQ), Kafka <strong>stores messages durably</strong> and consumers can rewind to re-read them at any time. This makes it ideal for both event streaming and event sourcing.</p>

<h2>Core Concepts</h2>
<p>A few terms you need to know to understand Kafka:</p>
<ul>
  <li><strong>Topic:</strong> The category where messages are organized. Think of it like a newspaper section — each topic is a different column.</li>
  <li><strong>Partition:</strong> Horizontal shards of a topic. They enable parallel reads/writes and are the foundation of scalability.</li>
  <li><strong>Offset:</strong> The unique sequential number of each message within a partition. Consumers use this to track how far they've read.</li>
  <li><strong>Consumer Group:</strong> A group of consumers that read from the same topic in parallel. Each partition is assigned to only one member of the group.</li>
  <li><strong>Broker:</strong> A Kafka server. A cluster typically runs 3+ brokers.</li>
</ul>

<h2>A Simple Producer/Consumer Example (Node.js / TypeScript)</h2>
<p>Below is a basic producer and consumer example using the <code>kafkajs</code> library. First install it: <code>npm install kafkajs</code></p>

<pre><code>// producer.ts
import { Kafka, Producer } from 'kafkajs';

interface FlightEvent {
  flight_id: string;
  status: 'DEPARTED' | 'ARRIVED' | 'DELAYED';
  timestamp: number;
}

const kafka = new Kafka({
  clientId: 'flight-producer',
  brokers: ['localhost:9092'],
});

const producer: Producer = kafka.producer();

const run = async (): Promise&lt;void&gt; =&gt; {
  await producer.connect();

  setInterval(async () =&gt; {
    const event: FlightEvent = {
      flight_id: 'TK1234',
      status: 'DEPARTED',
      timestamp: Date.now(),
    };

    await producer.send({
      topic: 'flight-events',
      messages: [{ key: event.flight_id, value: JSON.stringify(event) }],
    });

    console.log('Sent:', event);
  }, 1000);
};

run().catch(console.error);</code></pre>

<pre><code>// consumer.ts
import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';

interface FlightEvent {
  flight_id: string;
  status: string;
  timestamp: number;
}

const kafka = new Kafka({
  clientId: 'flight-consumer',
  brokers: ['localhost:9092'],
});

const consumer: Consumer = kafka.consumer({
  groupId: 'flight-processor-group',
});

const run = async (): Promise&lt;void&gt; =&gt; {
  await consumer.connect();
  await consumer.subscribe({ topic: 'flight-events', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ partition, message }: EachMessagePayload) =&gt; {
      const event: FlightEvent = JSON.parse(message.value!.toString());
      console.log('Received: ' + JSON.stringify(event) + ' | Partition: ' + partition + ' | Offset: ' + message.offset);
    },
  });
};

run().catch(console.error);</code></pre>

<h2>Topic Design: What I Learned</h2>
<p>Good topic design prevents performance problems that are very hard to fix later. Here's what I learned in production:</p>
<ul>
  <li><strong>Get partition count right:</strong> Too few = bottleneck. Too many = coordinator overhead. General rule: target throughput / single partition throughput.</li>
  <li><strong>Choose your message key carefully:</strong> Messages with the same key always go to the same partition. We used <code>flight_id</code> as the key for flight tracking so all events for a single flight arrived in order.</li>
  <li><strong>Set retention period thoughtfully:</strong> Default is 7 days. We increased it to 30 days for analytics systems so consumers could rewind when upstream issues occurred.</li>
  <li><strong>Topic naming:</strong> I recommend a <code>&lt;domain&gt;.&lt;entity&gt;.&lt;action&gt;</code> format. Example: <code>airport.flight.status-changed</code></li>
</ul>

<h2>Consumer Group Strategies</h2>
<p>Designing consumer groups correctly is critical for both scaling and isolation:</p>
<ul>
  <li><strong>Separate group per service:</strong> In our app, the flight tracking service, notification service, and analytics service all consumed the same topic with different <code>group_id</code>s. When one slowed down, the others were unaffected.</li>
  <li><strong>Watch out for rebalance storms:</strong> Our consumer pods ran on Kubernetes. Frequent scale-in/out triggered too many rebalances. We reduced this by tuning <code>session.timeout.ms</code> and <code>heartbeat.interval.ms</code>.</li>
  <li><strong>Use manual offset commits:</strong> Setting <code>eachBatchAutoResolve: false</code> and calling <code>resolveOffset()</code> only after successful processing prevented message loss — especially critical for database write operations.</li>
</ul>

<pre><code>// consumer-manual-commit.ts
import { Kafka, EachBatchPayload } from 'kafkajs';

const consumer = kafka.consumer({ groupId: 'flight-processor-group' });

const run = async (): Promise&lt;void&gt; =&gt; {
  await consumer.connect();
  await consumer.subscribe({ topic: 'flight-events' });

  await consumer.run({
    eachBatchAutoResolve: false,         // Manual commit mode
    eachBatch: async ({ batch, resolveOffset, heartbeat }: EachBatchPayload) =&gt; {
      for (const message of batch.messages) {
        try {
          await processEvent(JSON.parse(message.value!.toString())); // Business logic
          resolveOffset(message.offset);                              // Commit on success
          await heartbeat();
        } catch (err) {
          console.error('Processing failed, skipping commit:', err);  // Log → retry
          break;
        }
      }
    },
  });
};

run().catch(console.error);</code></pre>

<h2>Fault Tolerance and Dead Letter Queue</h2>
<p>In the real world, not every message can be processed successfully. For scenarios like corrupt data, transient service failures, or overload, we made the system resilient with this strategy:</p>
<ul>
  <li><strong>Retry topics:</strong> Failed messages were published to a <code>flight-events.retry</code> topic. After 3 failed attempts, they went to <code>flight-events.dlq</code> (Dead Letter Queue).</li>
  <li><strong>Idempotent producer:</strong> Initializing the producer with <code>{ idempotent: true }</code> in <code>kafkajs</code> prevented duplicate messages during network interruptions.</li>
  <li><strong>Replication factor:</strong> We replicated each topic across 3 brokers. Even if one broker went down, no data was lost.</li>
</ul>

<h2>Monitoring and Observability</h2>
<p>Flying blind with Kafka is dangerous. Key metrics we tracked:</p>
<ul>
  <li><strong>Consumer Lag:</strong> The most important metric. Shows how far behind a consumer is from the producer. If lag keeps growing, it's time to add capacity.</li>
  <li><strong>Under-replicated partitions:</strong> If replication falls behind, there's a risk of data loss.</li>
  <li><strong>Broker request rate:</strong> For bottleneck detection.</li>
</ul>
<p>We visualized all these metrics with Prometheus + Grafana. The <code>kafka-lag-exporter</code> tool worked perfectly for getting consumer lag into Prometheus.</p>

<h2>Conclusion</h2>
<p>Kafka is an incredibly powerful tool for real-time systems that need high throughput. But like all powerful tools, it can turn into an operational headache when misused. Take topic design seriously, shape your consumer group strategy around business needs, and always monitor consumer lag. Stick to these three principles and Kafka will never let you down.</p>
      `,
    },
  },
  {
    slug: "airflow-dag-tasarimi",
    title: {
      tr: "Airflow DAG Tasarımı: Hatalardan Öğrendiklerim",
      en: "Airflow DAG Design: Lessons from Mistakes",
    },
    desc: {
      tr: "ETL pipeline'larında yaptığım en büyük hatalar ve idempotent, gözlemlenebilir DAG yazmak için öğrendiğim ipuçları.",
      en: "The biggest mistakes I made in ETL pipelines and the tips I learned for writing idempotent, observable DAGs.",
    },
    tag: "Python",
    tagVariant: "cyan",
    emoji: "🐍",
    readTime: 6,
    date: "2026-03-01",
    published: false,
  },
  {
    slug: "bilgisayar-muhendisliginden-veri-dunyasina",
    title: {
      tr: "Bilgisayar Mühendisliğinden Veri Dünyasına",
      en: "From Computer Engineering to the World of Data",
    },
    desc: {
      tr: "Hayali Full-Stack developer olmakken nasıl veri entegrasyonu alanına sürüklendim ve neden pişman değilim.",
      en: "How I ended up in data integration when I dreamed of being a Full-Stack developer — and why I'm not sorry.",
    },
    tag: "Kişisel",
    tagVariant: "purple",
    emoji: "🧭",
    readTime: 4,
    date: "2026-03-01",
    published: false,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPublishedPosts(): Post[] {
  return posts.filter((p) => p.published);
}
