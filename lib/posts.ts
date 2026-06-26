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
    readTime: 45,
    date: "2026-06-20",
    published: true,
    content: {
      tr: `
<p>Geliştiriciler ve teknoloji profesyonelleri olarak her gün onlarca problemi çözmeye çalışıyoruz. Son birkaç yıldır yapay zeka araçları bu süreçlerin ayrılmaz bir parçası haline geldi. Ancak pek çok araç sadece basit birer soru-cevap asistanı (chatbot) olmanın ötesine geçemiyor. Anthropic tarafından geliştirilen Claude ise bu ezberi bozarak kendisini sadece bir asistan değil, aynı zamanda karmaşık süreçleri birlikte yürütebileceğimiz bir "düşünce ortağı" (thought partner) olarak konumlandırıyor.</p>

<p>Bu yazıda, Anthropic'in Claude 101 eğitiminde öne çıkan başlıkları, Claude'un teknik gücünü ve yeni masaüstü uygulamasındaki çalışma modlarını inceleyeceğiz. İlk olarak en temel soruyla başlayalım: Claude'u diğerlerinden farklı kılan ne?</p>

<h2>Claude Nedir?</h2>

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

<h2>Claude ile İlk Sohbetiniz</h2>

<p>Claude ile çalışmaya başlamak son derece kolaydır. Tarayıcınızdan <code>claude.ai</code> adresine girdiğinizde veya masaüstü uygulamasını açtığınızda sizi temiz bir sohbet arayüzü karşılar. Bu arayüz üzerinden ilk sorunuzu yazarak sohbeti başlatabilirsiniz. Ancak Claude'un bir "düşünce ortağı" olmasını istiyorsanız, basit bir sohbetten fazlasını yapabilirsiniz:</p>

<ul>
  <li><strong>Dosya Eklemek (Attachments):</strong> Sohbet satırındaki ataç simgesini kullanarak veya dosyaları sürükleyip bırakarak (drag and drop) Claude'a PDF'ler, kod dosyaları, CSV tabloları veya resimler yükleyebilirsiniz. Claude, geniş bağlam penceresi (context window) sayesinde bu belgelerin tamamını analiz edip sorularınızı bu verilere göre cevaplar.</li>

  <li><strong>Sohbet Geçmişi (Chat History):</strong> Sol taraftaki menüden geçmiş sohbetlerinize dilediğiniz an erişebilirsiniz. Claude her sohbeti ayrı bir bağlamda saklar, böylece farklı projeleriniz veya sorularınız birbirine karışmaz.</li>

  <li><strong>Özelleştirme Tercihleri (Customize):</strong> Profil ayarlarınız altındaki "Customize Claude" (Claude'u Özelleştir) seçeneğiyle, Claude'un sizinle konuşurken uymasını istediğiniz genel kuralları (örneğin "Her zaman Türkçe cevap ver ve açıklamaları kısa tut") sisteme kalıcı olarak kaydedebilirsiniz.</li>
</ul>

<h3>Bu Bölümün Önemli Konseptleri</h3>

<ul>
  <li><strong>Attachments (Dosya Ekleri):</strong> Claude sohbetlerine bağlam sağlamak amacıyla yüklenen dokümanlar, kod dosyaları veya görseller.</li>

  <li><strong>Customize (Özelleştirme):</strong> Kullanıcının Claude'un genel davranış ve yanıt tarzını şekillendirmek için tanımladığı kalıcı tercihler.</li>

  <li><strong>Chat History (Sohbet Geçmişi):</strong> Geçmiş etkileşimlerin ve projelerin ayrı ayrı organize edildiği sol menü listesi.</li>

  <li><strong>System Prompts (Sistem İstemleri):</strong> Modelin çalışmaya başlamadan önce uyması gereken genel çerçeveyi çizen arka plan talimatları.</li>
</ul>

<h2>Daha İyi Sonuçlar Almak</h2>

<p>Yapay zekayı kod yazarken veya günlük işlerimizde kullanırken en büyük yanılgı, tüm işi sadece birkaç butona tıklayarak veya tek seferlik isteklerle (<strong>one-shot requests</strong>) çözebileceğimizi düşünmektir. Gerçek verimlilik, yapay zekayı sadece bir araç değil, otonom bir iş ortağı olarak konumlandırdığımızda başlar. Akademik olarak geliştirilen <strong>4D Framework for AI Fluency</strong> (Yapay Zeka Akıcılığı için 4D Çerçevesi), bu iş birliğini dört temel yetkinlik üzerine kurar:</p>

<p>1. <strong>Delegation (Delege Etme):</strong> Hangi işleri yapay zekanın yapacağına, hangilerini insanın üstleneceğine stratejik karar vermektir.</p>
<p>2. <strong>Description (Tanımlama):</strong> Yapay zekaya isteklerimizi ve kurallarımızı net, açık ve bağlamlı (<strong>context</strong>) bir şekilde tarif etme yeteneği.</p>
<p>3. <strong>Discernment (Ayırt Etme / Muhakeme):</strong> Claude'un çıktılarını (<strong>outputs</strong>) kritik bir süzgeçten geçirmek, kaliteyi ve doğruluğu sorgulamaktır.</p>
<p>4. <strong>Diligence (Özen / Gayret):</strong> Yapay zekayı sorumlu ve etik kullanmak, üretilen kod veya belgelerin tüm teknik sorumluluğunu üstlenmektir.</p>

<h3>Halüsinasyon ve Temellendirme (Grounding)</h3>
<p>Büyük dil modelleri (LLM'ler) zaman zaman son derece inandırıcı ama tamamen uydurma bilgiler üretebilir; buna halüsinasyon (hallucination) denir. İşte bu noktada *Discernment* ve *Diligence* devreye girer. Claude'un çıktılarının doğruluğundan emin olmak için onları internet aramasıyla (<strong>web search</strong>) veya yüklediğimiz ham belgelerle temellendirmemiz (<strong>grounding</strong>) gerekir. Bu sayede model hayali veriler yerine, sadece sunduğumuz gerçek dokümanlara odaklanır.</p>

<h3>Evals (Değerlendirme Testleri)</h3>
<p>Claude'un bizim çalışma alanımızda (<strong>domain</strong>) gerçekten başarılı olup olmadığını test etmek için sistematik bir değerlendirme (<strong>evals</strong>) süreci yürütmeliyiz. Bunun için:</p>
<ul>
  <li>Yaptığımız işlerden 5-10 gerçek örnek toplarız.</li>

  <li>Bunları üretecek test prompt'ları hazırlarız.</li>

  <li>Claude'un verdiği çıktılarla kendi örneklerimizi karşılaştırıp tonu, doğruluğu ve eksikleri analiz ederek prompt'larimizi iyileştiririz (<strong>refine</strong>).</li>
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

<h2>Claude Masaüstü Uygulaması: Chat, Cowork, Code</h2>

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

<h2>Projelere Giriş</h2>

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
<p>3. <strong>Bilgi Tabanını (Knowledge Base) İnşa Edin:</strong> Sağ menüdeki "+" butonunu kullanarak PDF, DOCX, CSV, TXT and HTML gibi çeşitli formatlarda belgeleri veya doğrudan Google Drive'ı bağlayarak referans dosyalarınızı projeye aktarın. Dosyalarınızı adlandırırken "belge1.pdf" gibi jenerik isimler yerine "Q4-2024-Marka-Kilavuzu.pdf" gibi açıklayıcı isimler kullanmak Claude'un doğru veriyi bulmasını kolaylaştırır.</p>

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

<h2>Artifacts ile Üretmek</h2>

<p><strong>Artifacts</strong> (Yapay Nesneler), Claude'un sohbetinizin hemen yanında yer alan özel bir pencerede oluşturduğu bağımsız (<strong>standalone</strong>) ve etkileşimli çıktılardır. Sohbet akışının içinde kaybolan uzun kod blokları veya metin yığınları almak yerine, içeriğinizin derlenmiş (<strong>rendered</strong>) ve doğrudan kullanıma hazır halini yan tarafta ayrı bir pencerede görürsünüz. Bu, çalışan bir web sitesi prototipi, etkileşimli bir grafik (<strong>interactive chart</strong>) veya anında indirebileceğiniz bir sistem mimarisi dokümanı olabilir.</p>

<p>Claude, üretilen içerik şu kriterleri karşıladığında otomatik olarak bir <strong>artifact</strong> oluşturur:</p>

<ul>
  <li><strong>Belirgin ve Kendi Kendine Yeten İçerikler:</strong> Genellikle 15 satırın üzerindeki karmaşık kodlar veya belgeler.</li>

  <li><strong>İterasyon ve Düzenlemeye Uygun Yapılar:</strong> Üzerinde tekrar çalışmak, düzenlemek veya gelecekte yeniden kullanmak isteyeceğiniz dosyalar.</li>

  <li><strong>Bağımsız Değer Taşıyan İçerikler:</strong> Çevresindeki sohbet bağlamına ihtiyaç duymadan, kendi başına anlam ifade eden karmaşık yapılar.</li>

  <li><strong>Referans Alınacak Kaynaklar:</strong> Daha sonra tekrar başvurmak veya başka yerlerde kullanmak isteyeceğiniz çıktılar.</li>
</ul>

<h3>Yaygın Artifact Türleri</h3>

<p>Claude, geliştirme süreçlerinizdeki farklı ihtiyaçlara uygun çeşitli <strong>artifact</strong> formatları üretebilir:</p>

<ul>
  <li><strong>Dokümanlar (Documents):</strong> Markdown, düz metin, Word, PDF, PowerPoint ve Excel formatları dahil olmak üzere metin ağırlıklı ve ihraç edilmeye uygun tüm raporlar, toplantı notları veya proje planları bu gruptadır.</li>

  <li><strong>Kod Parçacıkları (Code Snippets):</strong> Herhangi bir dilde (Python, JavaScript, Go, Rust vb.) yazılmış, kopyalanmaya veya doğrudan indirilip kullanılmaya hazır çalışır durumdaki kodlar.</li>

  <li><strong>HTML Sayfaları (HTML Pages):</strong> Tek bir dosyada HTML, CSS ve JavaScript içeren eksiksiz web sayfaları. Hızlı prototipler, açılış sayfaları (<strong>landing pages</strong>) veya etkileşimli demolar için idealdir.</li>

  <li><strong>SVG Görselleri (SVG Images):</strong> Logolar, simgeler ve şemalar için ölçeklenebilir vektör grafikleri. Doğrudan arayüzde render edilerek anında görüntülenebilir.</li>

  <li><strong>Mermaid Diyagramları (Mermaid Diagrams):</strong> Akış şemaları (<strong>flowcharts</strong>), sıralı diyagramlar (<strong>sequence diagrams</strong>) veya Gantt şemaları gibi görselleştirme araçları. Sadece ilişkileri tarif ederek Claude'un çizim yapmasını sağlayabilirsiniz.</li>

  <li><strong>React Bileşenleri (React Components):</strong> Sadece statik birer taslak (<strong>mockup</strong>) olmayan, durum yönetimi (state) ve kullanıcı girdilerine tepki verme gibi gerçek mantık (<strong>logic</strong>) içeren işlevsel kullanıcı arayüzü (<strong>UI</strong>) elemanları.</li>
</ul>

<h3>İlk Artifact'inizi Oluşturmak</h3>

<p>Bir <strong>artifact</strong> oluşturmak, Claude ile sohbet etmek kadar basittir. Yapmak veya tasarlamak istediğiniz şeyi doğal dilde tarif edin, Claude bunu bir <strong>artifact</strong> olarak sunup sunmayacağına kendisi karar verecektir.</p>

<p>Örneğin, şu prompt'ları kullanabilirsiniz:</p>

<ul>
  <li>*"Müşteri katılım (onboarding) sürecimizi gösteren bir akış şeması oluştur."* (Not: Claude artık kod tabanlı diyagramların yanı sıra, Imagine özelliğini kullanarak bunları HTML formatında görsel şemalar olarak da üretebilir.)</li>

  <li>*"Aylık giderlerimi girebileceğim ve dökümleri görebileceğim etkileşimli bir dashboard geliştir."*</li>

  <li>*"Hero bölümü ve özellik listesi olan bir üretkenlik uygulaması için landing page tasarla."*</li>

  <li>*"Projelerimde tekrar kullanabileceğim bir proje özeti şablonu yaz."*</li>
</ul>

<p>Claude beklediğiniz durumlarda otomatik olarak bir artifact oluşturmazsa, ona *"Bunu bir artifact olarak oluştur"* veya *"Bunu bana bir artifact içinde göster"* diyerek bu yapıyı açıkça tetikleyebilirsiniz.</p>

<p>Claude bir artifact ürettiğinde, bu çıktı sohbet pencerenizin sağında bağımsız bir pencerede açılır. Bu pencere üzerinden şu işlemleri yapabilirsiniz:</p>

<ul>
  <li><strong>Formatlar Arasında Geçiş Yapma:</strong> Canlı görünüm (<strong>Preview</strong>) ile kaynak kod (<strong>underlying code</strong>) arasında geçiş yapabilirsiniz (<strong>toggle</strong>).</li>

  <li><strong>Kopyalama:</strong> Kodun veya içeriğin tamamını tek tıkla kopyalayıp başka bir yere yapıştırabilirsiniz.</li>

  <li><strong>Dosya İndirme:</strong> Üretilen dosyayı doğrudan bilgisayarınıza indirebilirsiniz.</li>

  <li><strong>Kod Analizi:</strong> Claude'un arka planda nasıl bir kod yapısı kurduğunu inceleyebilirsiniz.</li>
</ul>

<h3>Artifact'leri Paylaşmak ve Yayınlamak</h3>

<p>Yararlı bir artifact oluşturduktan sonra, bunu başkalarıyla paylaşmak için çeşitli yollara sahipsiniz:</p>

<ul>
  <li><strong>Yerel Kopyalama veya İndirme:</strong> Kişisel projelerinizde kullanmak için sağ alt köşedeki kopyalama veya indirme butonlarını kullanabilirsiniz.</li>

  <li><strong>Organizasyon İçi Güvenli Paylaşım (Claude for Work):</strong> Team ve Enterprise planlarındaki kullanıcılar, hazırladıkları artifact'leri organizasyon içinde güvenle paylaşabilirler. Paylaşılan dosyalara erişim için ekip kimlik doğrulaması (<strong>authentication</strong>) gerekir.</li>

  <li><strong>Herkese Açık Yayınlama (Public Publishing):</strong> Free, Pro veya Max kullanıcısıysanız, oluşturduğunuz aracı herkese açık hale getirebilirsiniz. Bu durumda:</li>

  <li>*   Yalnızca seçtiğiniz belirli sürüm (versiyon) dışa açılır; Claude ile yaptığınız özel sohbet geçmişi tamamen gizli kalır.</li>

  <li>*   Claude hesabı olmayan kişiler bile paylaştığınız linke tıklayarak artifact'i görüntüleyebilir ve onunla etkileşime girebilir.</li>

  <li>*   Diğer kullanıcılar çalışmanızı "<strong>remix</strong>" edebilir; yani tek tıkla kendi Claude sohbetlerine kopyalayarak üzerinde değişiklik yapmaya ve geliştirmeye devam edebilirler.</li>
</ul>

<p>Oluşturduğunuz aracı yayınlamak için sağ üstteki "Share" veya "Publish" butonunu kullanabilirsiniz. Fikrinizi değiştirirseniz, istediğiniz zaman herkese açık erişimi kaldırarak yayından çekebilirsiniz (<strong>unpublish</strong>). Yayınlanan artifact'ler arama motorları (Google vb.) tarafından dizine eklenmez (<strong>not indexed</strong>), bu nedenle arama sonuçlarında doğrudan listelenmezler.</p>

<h3>Artifacts İçin En İyi Pratikler (Best Practices)</h3>

<p>Artifacts özelliğinden maksimum verim almak için şu ipuçlarına dikkat edebilirsiniz:</p>

<ul>
  <li><strong>Prompt Yazarken Spesifik Olun:</strong> "Bir bütçe takipçisi yap" yerine, "Giderleri kategori bazlı girebileceğim, harcama dağılımını pasta grafikle (<strong>pie chart</strong>) gösteren ve bütçe aşıldığında uyarı veren aylık bir bütçe takipçisi geliştir" şeklinde detay vermek çok daha iyi sonuçlar üretir.</li>

  <li><strong>Hedef Kullanıcıyı (End User) Tanımlayın:</strong> Claude'a bu aracı kimin kullanacağını belirtmek tasarım kararlarını etkiler. "Bu akış şeması yeni çalışanlar için" yönergesi ile "Mühendislik ekibi için" yönergesi Claude'un farklı görsel diller seçmesini sağlar.</li>

  <li><strong>Adım Adım Geliştirin (Iterate Incrementally):</strong> Claude'dan tüm özellikleri tek seferde istemek yerine, her adımda tek bir özellik eklemesini veya değişiklik yapmasını talep edin. Bu, hata ayıklamayı (<strong>debugging</strong>) kolaylaştırır.</li>

  <li><strong>Gerektiğinde Manuel Talep Edin:</strong> Büyük bir kod bloğu istediğiniz halde Claude bunu normal sohbet penceresinde verirse, *"Bunu bir artifact olarak oluştur"* diyerek sistemi yönlendirebilirsiniz.</li>
</ul>

<h3>Bu Bölümün Önemli Konseptleri</h3>

<ul>
  <li><strong>Standalone (Bağımsız Çıktı):</strong> Harici bir sisteme veya sohbet bağlamına ihtiyaç duymadan kendi sınırları içinde çalışabilen veya kullanılabilen modüller.</li>

  <li><strong>Render (Görselleştirme/Derleme):</strong> Kod bloklarının işlenerek tarayıcı üzerinde canlı ve etkileşimli bir görsel arayüze dönüştürülmesi süreci.</li>

  <li><strong>Mockup (Taslak Arayüz):</strong> Bir uygulamanın veya web sitesinin nasıl görüneceğini gösteren, ancak arka planda çalışan işlevsel bir kod barındırmayan statik tasarım modeli.</li>

  <li><strong>Preview (Önizleme):</strong> Kod tabanlı arayüz çıktılarının tarayıcı tarafından yorumlanarak canlı ve etkileşimli şekilde sunulduğu önizleme ekranı.</li>

  <li><strong>Toggle (Geçiş):</strong> Kullanıcı arayüzünde iki farklı durum veya görünüm arasında geçiş yapmayı sağlayan düğme veya eylem.</li>

  <li><strong>Remix (Klonlama):</strong> Herkese açık paylaşılan bir kodun veya tasarımın, başka bir kullanıcı tarafından kendi sohbet alanına kopyalayarak üzerinde yeni değişiklikler yapılması.</li>

  <li><strong>Unpublish (Yayından Kaldırma):</strong> Herkese açık yayınlanmış bir artifact'in erişim izinlerini sıfırlayarak genel kullanıma kapatılması.</li>

  <li><strong>End User (Hedef Kullanıcı):</strong> Bir yazılım veya tasarımı nihai olarak kullanacak olan kişi veya kitle.</li>

  <li><strong>Incremental Iteration (Aşamalı Geliştirme):</strong> Büyük projeleri yönetmek adına yapay zeka ile parça parça, her adımda tek bir özellik ekleterek çalışma yöntemi.</li>
</ul>

<h2>Becerilerle Çalışmak</h2>

<p>Claude, projelerinizi ve kod tabanınızı yönetirken genel yeteneklerinin yanı sıra dinamik uzmanlık paketleri ve dış dünya araç entegrasyonları sunar.</p>

<p><strong>Skills</strong> (Beceriler), Claude'un belirli ve özelleştirilmiş görevlerdeki başarısını artırmak için arka planda dinamik olarak yüklediği talimatlar, <strong>scripts</strong> (betikler) ve kaynak şablonlarından oluşan modüler klasörlerdir. Bunları, Claude'a yeni yetenekler kazandıran otonom "uzmanlık paketleri" olarak tanımlayabiliriz.</p>

<p>Eğer Claude'u Excel dosyaları, PowerPoint sunumları veya PDF'ler üretmek için kullandıysanız, aslında arka planda bu beceri paketlerini çalıştırmışsınızdır. Ancak Skills yapısı sadece belge oluşturmakla sınırlı değildir. Özel beceriler (<strong>custom skills</strong>) sayesinde tüm tekrarlanabilir iş akışlarınızı kodlayabilirsiniz:</p>

<ul>
  <li><strong>Quarterly Variance Analysis (Çeyreklik Sapma Analizi):</strong> Finansal verilerdeki çeyreklik sapmaları inceleyen analiz şablonları.</li>

  <li><strong>Brand Voice (Marka Sesi):</strong> Metinlerin marka sesine ve tonuna uygunluğunu denetleyen kalite kontrol kuralları.</li>

  <li><strong>Compliance Checklist (Uyumluluk Kontrol Listesi):</strong> Kodun veya dokümanların yasal ve teknik standartlara uyumluluğunu kontrol eden listeler.</li>
</ul>

<p>Custom Skills sayesinde Claude, ona devrettiğiniz kritik süreçlerde her zaman aynı profesyonel adımları ve kuralları takip eder.</p>

<h3>Beceri Türleri (Types of Skills)</h3>

<p>Kullanım esnasında karşılaşacağınız iki ana <strong>skills</strong> kategorisi vardır:</p>

<ul>
  <li><strong>Anthropic Becerileri (Anthropic Skills):</strong> Doğrudan Anthropic tarafından geliştirilen ve güncellenen yerleşik becerilerdir. Excel e-tabloları, Word belgeleri, PowerPoint sunumları ve PDF dosyaları için gelişmiş dosya oluşturma yeteneklerini barındırır. Anthropic Becerileri tüm paid (ücretli) kullanıcılar için varsayılan olarak açıktır ve Claude, ilgili bir işlem yaptığınızda bunları arka planda otomatik olarak tetikler.</li>

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

<p>Becerilerin en güzel yanı, genellikle onlar hakkında ekstra düşünmenize gerek olmamasıdır. Claude, gönderdiğiniz prompt'u analiz ederek hangi beceri paketini tetikleyeceğine otomatik olarak karar verir.</p>

<p>Becerileri tetikleyecek bazı pratik prompt örnekleri:</p>

<ul>
  <li>*"Aylık harcamalarımı takip eden ve toplamlar için formüller barındıran bir Excel e-tablosu oluştur."*</li>

  <li>*"Bu toplantı notlarını alıp profesyonel bir PowerPoint sunumuna dönüştür."*</li>

  <li>*"Bu ham verileri özetleyen ve görsel grafikler içeren bir PDF raporu üret."*</li>

  <li>*"Excel'de farklı senaryoları analiz eden dinamik bir finansal model (financial model) tasarla."*</li>
</ul>

<p>Claude bir beceri (<strong>skill</strong>) kullandığında, arka planda yaptığı işlemleri akıl yürütme adımlarını içeren düşünce zincirinde (<strong>chain of thought</strong>) belirtir. İşlem bittiğinde, bilgisayarınıza kaydedebileceğiniz veya doğrudan Google Drive'a aktarabileceğiniz fiziksel ve indirilebilir bir dosya çıktısı alırsınız.</p>

<h3>Özel Beceriler (Custom Skills) Oluşturmak</h3>

<p>Anthropic'in sunduğu yerleşik beceriler temel ofis işlerinizi çözse de, Beceriler özelliğinin asıl gücü kendi özel iş süreçlerinizi koda dökmenizden gelir. Özel Beceriler (<strong>Custom Skills</strong>), şirketinizin marka kurallarını (brand voice), şablonlarını ve iş yapış şekillerini Claude'a kalıcı olarak öğretmenize imkan tanır.</p>

<p>Özel bir beceri oluşturmanın en kolay yolu, Claude ile sohbet etmektir. Herhangi bir kod yazmanıza veya teknik kurulum yapmanıza gerek kalmaz; Claude dosya yapısını sizin yerinize otonom kurar:</p>

<p>1.  <strong>İhtiyacınızı Tanımlayın:</strong> Yeni bir sohbet başlatıp Claude'a neye ihtiyacınız olduğunu söyleyin (örneğin: *"Çeyreklik iş incelemeleri (QBR) yazmak için bir skill oluşturmak istiyorum"*).</p>
<p>2.  <strong>Soruları Yanıtlayın:</strong> Claude, iş akışınız hakkında sizinle kısa bir mülakat gerçekleştirir (bu becerinin tam olarak ne işe yarayacağını, kaliteli bir çıktının nasıl olması gerektiğini ve hangi durumlarda kullanılacağını sorar).</p>
<p>3.  <strong>Referans Materyalleri Yükleyin:</strong> Varsa şablonlarınızı, marka stil rehberlerinizi veya geçmişte başarıyla tamamladığınız örnek çalışmaları referans materyali (<strong>reference materials</strong>) olarak yükleyin.</p>
<p>4.  <strong>Kaydedin ve Kullanın:</strong> Görüşme sonunda Claude, tüm bu kuralları derleyip otonom bir beceri dosyası üretir. Bu dosyayı kaydettiğinizde, beceriniz kullanıma hazır hale gelir ve sol menüdeki <strong>Customize</strong> (Özelleştir) panelinde listelenir.</p>

<p>Oluşturduğunuz beceri, ilgili bir iş akışı başlattığınızda Claude tarafından otonom olarak çağrılır. Dilediğiniz zaman Claude ile tekrar konuşarak becerilerinizi yinelemeli (<strong>iteration</strong>) olarak güncelleyebilir ve geliştirebilirsiniz.</p>

<h3>Beceriler ve Projeler Karşılaştırması (Skills vs. Projects)</h3>

<p>Hem projelerin hem de becerilerin Claude'a ek bağlam sağlamak için kullanıldığını gördük. Peki hangisini ne zaman kullanmalısınız? Farkı anlamak için şu temel kuralı aklınızda tutabilirsiniz: <strong>Projeler bilgiyi saklar, beceriler süreçleri çalıştırır.</strong></p>

<ul>
  <li><strong>Projeler Bilgi Merkezleridir (Knowledge Hubs):</strong> Proje spesifikasyonları, toplantı notları, araştırma raporları gibi Claude'un işinizi anlamak için referans alacağı tüm belgeleri barındırır.</li>

  <li><strong>Beceriler Prosedür Makineleridir (Procedural Machines):</strong> Claude'un bir görevi hangi sıra ve yöntemle (metodoloji, iş adımları) tamamlaması gerektiğini kodlar.</li>
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

<h2>Araçlarınızı Bağlamak</h2>

<p><strong>Bağlayıcılar (Connectors)</strong>, Claude'un her gün kullandığınız araçlara, verilere ve dosyalara erişmesini sağlayarak onu basit bir sohbet asistanından otonom bir iş ortağına dönüştürür. Connectors sayesinde, her yeni sohbete sıfırdan başlamak yerine Claude'u doğrudan iş süreçlerinizdeki gerçek verilerle çalıştırabilirsiniz.</p>

<p>Bağlayıcılar, Claude'un sizin adınıza bilgileri okumasına ve otonom eylemler gerçekleştirmesine imkan tanır. Verdiğiniz izinlere bağlı olarak Claude; dosyalarınızı arayebilir, dokümanları çekebilir, veri analizi yapabilir, kayıtları güncelleyebilir veya bağlı uygulamalar üzerinden görevleri yürütebilir.</p>

<p>İki ana bağlayıcı türü vardır:</p>
<ul>
  <li><strong>Web Bağlayıcıları (Web Connectors):</strong> Claude'u bulut tabanlı servislere bağlar (örneğin Google Drive, Notion, Slack, Asana).</li>

  <li><strong>Masaüstü Uzantıları (Desktop Extensions):</strong> Claude Masaüstü (Claude Desktop) uygulaması üzerinden bilgisayarınızda yerel (<strong>local</strong>) olarak çalışır. Claude'a yerel dosyalarınız ve makinenizdeki yerel uygulamalar için erişim yetkisi verir.</li>
</ul>

<p>Tüm bu bağlayıcı altyapısının arkasında <strong>Model Context Protocol (MCP)</strong> standardı yatar. MCP'yi yapay zeka entegrasyonları için bir <strong>"USB-C"</strong> standardı gibi düşünebilirsiniz. Nasıl ki USB-C tek bir kablo üzerinden şarj, görüntü aktarımı ve veri transferi sağlayarak kablo karmaşasını bitirdiyse; MCP de yapay zekanın yüzlerce farklı uygulamaya tek bir tutarlı arayüz üzerinden bağlanmasını sağlar. Bu açık kaynaklı evrensel standart sayesinde geliştiriciler, herhangi bir yazılım aracı için kolayca bağlayıcı (connector) üretebilirler.</p>

<h3>Bağlayıcıları Bulma ve Bağlama (Finding and Connecting Tools)</h3>

<p>Anthropic, önerilen bağlayıcıların (connectors) bir dizinini [claude.ai/directory](https://claude.ai/directory) adresinde barındırır. Bu dizin iki sekme halinde düzenlenmiştir:</p>
<ul>
  <li><strong>Web</strong>: Bulut servisleri ve uygulamalar (Gmail, Notion, Slack, Asana, Linear, Stripe ve çok daha fazlası).</li>

  <li><strong>Masaüstü Uzantıları (Desktop Extensions)</strong>: Claude Masaüstü (Claude Desktop) uygulaması aracılığıyla bilgisayarınızda yerel (<strong>local</strong>) olarak çalışan araçlar.</li>
</ul>

<p>Mevcut bağlayıcılara göz atmak için sohbet penceresinin sol alt kısmındaki <code>+</code> butonuna tıklayıp <strong>Connectors</strong> (Bağlayıcılar) seçeneğini de seçebilirsiniz.</p>

<p>#### Bir Web Bağlayıcısı Kurulumu (Setting Up a Web Connector)</p>

<p>Bir bulut servisini bağlamak için şu adımları izleyebilirsiniz:</p>
<p>1.  <strong>Bağlayıcıyı bulun</strong>: <code>claude.ai/directory</code> adresine gidin veya herhangi bir sohbette <code>+</code> > <strong>Connectors</strong> seçeneğine tıklayın.</p>
<p>2.  <strong>Bağlan (Connect) butonuna tıklayın</strong>: Eklemek istediğiniz bağlayıcıyı seçin.</p>
<p>3.  <strong>Kimlik Doğrulama (Authenticate)</strong>: Servisin giriş sayfasına yönlendirileceksiniz. Mevcut kullanıcı bilgilerinizle giriş yapın.</p>
<p>4.  <strong>İzinleri Verin (Grant permissions)</strong>: Claude'un talep ettiği belirli izinleri inceleyin ve erişimi yetkilendirin.</p>
<p>5.  <strong>Bağlantıyı Test Edin</strong>: Claude'a geri dönün ve *"Can you access my [araç adı]?"* gibi basit bir istekte bulunarak bağlantıyı test edin.</p>

<p>Bağlantı kurulduktan sonra Claude, verdiğiniz izinlere bağlı olarak o servis içinde arama yapabilir, verileri okuyabilir ve bazı durumlarda otonom eylemler (<strong>actions</strong>) gerçekleştirebilir.</p>

<p>#### Masaüstü Uzantıları (Desktop Extensions)</p>

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

<h3>Bağlayıcıları İşinizde Kullanmak (Using Connectors in Your Work)</h3>

<p>Araçlarınızı bağladıktan sonra, Claude isteklerinize yanıt verirken bu araçları göz önünde bulundurur. Bağlı araçları kullanmanın bazı pratik yolları şunlardır:</p>

<p>#### Proje Yönetimi (Asana, Linear, Jira)</p>
<ul>
  <li>*"Bu hafta teslim edilmesi gereken en yüksek öncelikli görevlerim nelerdir?"*</li>

  <li>*"Q4 bütçe teklifini incelemek için yeni bir görev oluştur."*</li>

  <li>*"Ürün lansmanı projemizin durumunu özetle."*</li>
</ul>

<p>#### İletişim (Slack, Gmail)</p>
<ul>
  <li>*"Tedarikçi sözleşmesini tartıştığımız e-posta yazışmasını bul."*</li>

  <li>*"#marketing kanalındaki en son mesaja bir yanıt taslağı hazırla."*</li>

  <li>*"Ekip, dünkü tartışmada zaman çizelgesi hakkında neye karar verdi?"*</li>
</ul>

<p>#### Dokümantasyon (Notion, Google Drive, Confluence)</p>
<ul>
  <li>*"Dokümantasyonumuzda marka sesi (brand voice) kılavuzumuzu ara."*</li>

  <li>*"Geçen haftaki ürün incelemesi toplantı notlarını özetle."*</li>

  <li>*"Stil rehberimiz kısaltmaların kullanımı hakkında ne diyor?"*</li>
</ul>

<p>#### İş Araçları (Stripe, PayPal, Salesforce)</p>
<ul>
  <li>*"Bana geçen çeyreğin gelir eğilimlerini göster."*</li>

  <li>*"Acme Corp fırsatının (opportunity) durumu nedir?"*</li>

  <li>*"1.000 doların üzerindeki son işlemleri listele."*</li>
</ul>

<h3>Güvenlik ve İzin Yönetimi (Security and Permissions)</h3>

<p>Claude'u harici servislere bağladığınızda, ona bu servisler içindeki verileri okuma—ve bazen değiştirme—yetkisi vermiş olursunuz. İşte dikkat edilmesi gereken bazı önemli hususlar:</p>

<ul>
  <li><strong>Kapsamlı Erişim (Scoped Access):</strong> İzinler, bağlayıcının tam olarak neye ihtiyaç duyduğuna göre belirlenir ve her uygulamanın menüsü altından bireysel izinleri açıp kapatabilirsiniz.</li>

  <li><strong>Claude Sadece Sizin Gördüğünüzü Görür:</strong> Claude yalnızca sizin erişim hakkınız olan verilere erişebilir. İş e-postanızı bağlamak, Claude'a şirket yöneticinizin (CEO) gelen kutusuna erişim hakkı vermez; sadece kendi gelen kutunuza erişebilirsiniz.</li>

  <li><strong>Erişim Her An Geri Çekilebilir (Revocable):</strong> Bir servisin bağlantısını Claude'un ayarlarından veya üçüncü taraf servisin güvenlik ayarlarından dilediğiniz an kesebilirsiniz. Becerilerde olduğu gibi, özel bağlayıcılar (custom connectors) bulabilir veya kendiniz inşa edebilirsiniz. Burada da aynı dikkati gösterin: Yalnızca güvenilir kaynaklardan gelen bağlayıcıları kurun.</li>
</ul>

<h3>Claude Arayüzleri ve Entegrasyon Matrisi</h3>

<p>Claude'u iş akışlarınıza entegre etmek için sadece masaüstü uygulamasıyla sınırlı değilsiniz. Anthropic, kullanım senaryolarına göre optimize edilmiş geniş bir entegrasyon yelpazesi sunar:</p>

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

  <li><strong>Opportunity (Fırsat):</strong> Satış ve CRM sistemlerinde, potansiyel müşteri anlaşmaları veya ticari fırsatları temsil eden yapılandırılmış veri kaydı.</li>

  <li><strong>Scoped Access (Kapsamlı Erişim):</strong> Bir servisin veya eklentinin tüm sisteme değil, sadece önceden yetkilendirilmiş kısıtlı veri alanlarına erişebilmesi durumu.</li>

  <li><strong>Revocable (İptal Edilebilir):</strong> Kullanıcı tarafından harici bir entegrasyona verilen erişim yetkisinin veya anahtarının her an geri çekilebilir olması özelliği.</li>
</ul>

<h2>Kurumsal Arama</h2>

<p>Kurumsal Arama (Enterprise Search), Claude arayüzündeki yan menünüze özel bir <strong>"Ask {Şirket Adınız}"</strong> (Şirket Adına Sor) seçeneği ekler. Bu özellik; şirketinizin farklı araçları ve veri kaynakları arasında dağılmış olan kurumsal bilgileri bulmak ve sentezlemek için özel olarak tasarlanmıştır.</p>

<p>Kurumsal Arama'yı, tüm organizasyonunuz için önceden kurulmuş devasa bir Proje (Project) gibi düşünebilirsiniz; şirketinizin bilgi tabanı (knowledge base) sisteme zaten yüklenmiştir, böylece sorularınıza bağlama duyarlı yanıtlar almak için doğrudan aramaya başlayabilirsiniz.</p>

<p>Standart sohbetlerin aksine Kurumsal Arama, Anthropic ekibi tarafından özel olarak yapılandırılmış ve sadece bilgi toplamaya odaklanmış özel sistem talimatları ile çalışır.</p>

<h3>Kurumsal Arama ile Neler Sorabilirsiniz?</h3>

<p>Kurumsal Arama, birden fazla bilgi kaynağını taramayı veya şirket genelinden gelen verileri tek bir yerde sentezlemeyi gerektiren durumlarda son derece değerlidir. İşte en yaygın kullanım senaryolarından bazıleri:</p>

<ul>
  <li><strong>Gelişmelerden Haberdar Olmak (Getting up to speed):</strong></li>

  <li>*   *"Dün ben izinliyken şirket genelinde neler konuşuldu?"*</li>

  <li>*   *"Geçen haftaki iş güncellemelerini ve ilerleme durumlarını özetle."*</li>

  <li>*   *"Platform projesindeki güncel engelleyiciler (blockers) nelerdir?"*</li>

  <li><strong>Politika ve Süreç Soruları:</strong></li>

  <li>*   *"Uzaktan çalışma politikamız hakkında bilgi ver."*</li>

  <li>*   *"Masraf formunu teslim etme süreci nasıldır?"*</li>

  <li>*   *"İzin talebi göndermek için hangi adımları izlemeliyim?"*</li>

  <li><strong>Araştırma ve Analiz:</strong></li>

  <li>*   *"Müşterilerin rakipleri tercih etme sebepleri nelerdir?"*</li>

  <li>*   *"Q4 ürün yol haritası (product roadmap) hakkındaki toplantı notlarını özetle."*</li>

  <li>*   *"Müşteri adaptasyon (onboarding) sürecimiz hakkında bilgi bul."*</li>

  <li><strong>Yeni Ekip Üyelerinin Oryantasyonu:</strong></li>

  <li>*   *"Kimlik doğrulama (authentication) sistemimiz nasıl çalışıyor?"*</li>

  <li>*   *"Faturalandırma altyapısını öğrenmek için kiminle görüşmeliyim?"*</li>

  <li>*   *"Mühendislik ekibimiz deployment için hangi araçları tercih ediyor?"*</li>

  <li><strong>Performans ve Proje Takibi:</strong></li>

  <li>*   *"Yeni pazarlama kampanyasıyla ilgili tüm belgeleri ve yazışmaları listele."*</li>

  <li>*   *"Geçen haftaki liderlik toplantısında alınan kritik kararlar nelerdi?"*</li>

  <li>*   *"Altyapı (Infrastructure) girişimine yapılan ekip katkılarını özetle."*</li>
</ul>

<p>Bir soru sorduğunuzda Claude; SharePoint belgeleri, Slack kanalları, Gmail yazışmaları ve Google Drive dosyaları gibi tüm bağlı kurumsal araçlarınızda arama yapar, bilgileri sentezler ve yanıt üretir. Üstelik yanıtın doğruluğunu denetleyebilmeniz için <strong>her zaman yararlandığı kaynakları belirtir (cites its sources)</strong>.</p>

<h3>Kurumsal Aramayı Kurmak (Setting Up Enterprise Search)</h3>

<p>Kurumsal Arama, iki adımlı bir kurulum süreci gerektirir: ilk olarak bir yönetici (<strong>admin</strong>) bunu organizasyon için yapılandırır, ardından bireysel kullanıcılar kendi kişisel hesaplarıyla kimlik doğrulaması (<strong>authenticate</strong>) yapar.</p>

<p>#### Yöneticiler (Owners) İçin</p>

<p>Kurumsal Arama projesi, tüm Team ve Enterprise organizasyonları için varsayılan olarak etkindir; ancak ekip üyelerinin bunu kullanabilmesi için önce bir Sahibin (<strong>Owner</strong>) ilk kurulumu tamamlaması gerekir:</p>
<p>1. Sol yan menüdeki <strong>"Ask Your Org"</strong> (Şirketinize Sorun) seçeneğine tıklayın.</p>
<p>2. Devam etmek için <strong>"Set up for your org"</strong> (Şirketiniz için kurun) seçeneğine tıklayın (veya özelliği kapatmak için "Disable"ı seçin).</p>
<p>3. Organizasyonunuzun araçlarını bağlayın. Belgeler (<strong>Documents</strong> - Google Drive veya SharePoint gibi) ve Sohbet (<strong>Chat</strong> - Slack veya Microsoft Teams gibi) için birer bağlayıcı seçmeniz gerekecektir. E-posta önerilir ancak isteğe bağlıdır.</p>
<p>4. Ekibinizin ihtiyaç duyduğu diğer araçları kurmak için <strong>"+ Add more"</strong> (Daha fazla ekle) seçeneğine tıklayın.</p>
<p>5. Proje adını özelleştirin. Girdiğiniz isim, herkesin yan menüsünde *"Ask [İsim]"* şeklinde görünecektir.</p>
<p>6. Bir açıklama ekleyin ve ardından <strong>"Finish set up"</strong> (Kurulumu bitir) seçeneğine tıklayın.</p>

<p>Kurulum tamamlandıktan sonra proje, organizasyonunuzun tüm üyeleri için kullanılabilir hale gelir.</p>

<p>#### Kullanıcılar İçin</p>

<p>Bir yönetici Kurumsal Aramayı kurduktan sonra, yan menünüzde yıldızlı bir *"Ask {Org Name}"* projesi göreceksiniz. Başlamak için şu adımları izleyebilirsiniz:</p>
<p>1. Yan menünüzdeki projeye tıklayın.</p>
<p>2. Önerilen hizmetlere bağlanmak için rehberli adaptasyon (<strong>guided onboarding</strong>) akışını takip edin.</p>
<p>3. Aramak istediğiniz her bir hizmetle (Slack, Google, Microsoft 365 vb.) kimlik doğrulaması (<strong>authenticate</strong>) yapın.</p>
<p>4. Claude'a organizasyonunuzun bilgileri hakkında sorular sormaya başlayın.</p>

<p>Ne kadar çok bağlayıcıyı etkinleştirirseniz, arama sonuçlarınız o kadar kapsamlı olacaktır. İstediğiniz zaman projenin Talimatlar (Instructions) bölümündeki "Connect" (Bağlan) butonuna tıklayarak daha sonra da yeni bağlayıcılar ekleyebilirsiniz.</p>

<p>#### Bu çok fazla veri... Peki güvenli mi?</p>

<p>Kısacası, evet. Kurumsal Arama, yalnızca orijinal bağlı araçta zaten erişim izniniz olan bilgileri gösterir. Ayrıca sohbetleriniz gizli kalır ve bağlı verileriniz ayrı olarak indekslenmez (<strong>indexed</strong>) veya depolanmaz.</p>

<h3>Bu Bölümün Önemli Konseptleri</h3>

<ul>
  <li><strong>Enterprise Search (Kurumsal Arama):</strong> Kuruluş genelinde arama yapabilen, yan menüde özel bir sekme halinde sunulan organizasyon düzeyinde akıllı arama platformu.</li>

  <li><strong>Blocker (Engelleyici):</strong> Yazılım süreçlerinde bir işin veya görevin tamamlanmasını tamamen engelleyen ya da geciktiren teknik veya operasyonel aksaklık.</li>

  <li><strong>Onboarding (Oryantasyon):</strong> Şirkete yeni katılan çalışanların veya bir sistemi ilk defa kullanacak kişilerin entegrasyon, eğitim ve adaptasyon süreci.</li>

  <li><strong>Cite Sources (Kaynak Belirtme):</strong> Yapay zekanın yanıt üretirken kullandığı harici belgelerin, konuşmaların veya e-postaların orijinal konumlarını atıf olarak sunması.</li>

  <li><strong>Owner (Organizasyon Sahibi):</strong> Bir SaaS uygulamasında veya platformda organizasyon yönetimi, faturalandırma ve genel yapılandırma izinlerine sahip üst düzey yönetici rolü.</li>

  <li><strong>Guided Onboarding (Rehberli Adaptasyon):</strong> Kullanıcının bir sisteme veya eklentiye ilk kurulum aşamalarını kolaylaştırmak için sunulan etkileşimli, adım adım yönlendirme akışı.</li>

  <li><strong>Indexed (İndekslenmiş):</strong> Aramaları hızlandırmak amacıyla verilerin taranarak harici bir dizinde veya veri tabanında yapılandırılmış şekilde saklanması işlemi.</li>
</ul>

<h2>Araştırma Modu</h2>

<p>Araştırma özelliği, Claude'un bilgiyi bulma ve analiz etme yöntemini dönüştürür. Claude, tek bir arama yapmak yerine, bir sonraki aşamada neyi inceleyeceğine karar verirken birbiri üzerine inşa edilen çoklu aramalar yürüterek otonom (<strong>agentic</strong>) bir şekilde çalışır. Sorunuzun farklı açılarını otomatik olarak keşfeder ve açık uçlu soruları sistematik bir şekilde çözer.</p>

<p>Araştırma, dakikalar içinde kapsamlı yanıtlar sunar. Çoğu rapor 5 ila 15 dakika arasında tamamlanır, ancak daha karmaşık araştırmalar 45 dakikaya kadar sürebilir; bu da normalde saatler süren manuel araştırmalar gerektiren bir iştir.</p>

<p>Araştırma ile birlikte derin düşünme (<strong>extended thinking</strong>) özelliği otomatik olarak etkinleştirilir. Bu güçlü kombinasyon, Claude'un hem yaklaşımını düşünceli bir şekilde planlamasını hem de kapsamlı bilgileri toplamasını sağlayarak karmaşık istekleri yönetilebilir parçalara böler.</p>

<p>Atıflar (<strong>citations</strong>) doğrulamayı kolaylaştırır. Araştırma, kontrol edilmesi kolay kaynak atıflarıyla tamamlanan eksiksiz ve ayrıntılı yanıtlar sunar; böylece Claude'un bulgularına güvenebilir ve kaynakları kendiniz hızlıca doğrulayabilirsiniz.</p>

<h3>Araştırma (Research) Nedir?</h3>

<p>Araştırma, Claude'un karmaşık soruları yanıtlamak veya bir konu hakkında kapsamlı bilgi toplamak için derinlemesine, çok adımlı web aramaları yapmasını sağlayan bir yetenektir. Araştırma özelliğini etkinleştirdiğinizde Claude:</p>

<ul>
  <li>Sorgunuza dayalı bir araştırma planı formüle eder.</li>

  <li>Yüksek kaliteli web kaynaklarını bulmak için arama sorguları yürütür.</li>

  <li>İlgili bilgileri çıkarmak için elde edilen sayfaları analiz eder.</li>

  <li>Mevcut bilgisindeki boşlukları belirler ve takip aramaları gerçekleştirir.</li>

  <li>Bulguları atıfta bulunulmuş kapsamlı bir rapor halinde sentezler.</li>
</ul>

<p>Tek bir arama sonuçları kümesi getiren standart web aramasının aksine Araştırma, konu hakkında daha fazla bilgi edindikçe arama stratejisini dinamik olarak uyarlayan yinelenmeli (<strong>iterative</strong>) ve otonom (<strong>agentic</strong>) bir döngüdür.</p>

<h3>Sonuç: Neler Öğrendik?</h3>

<p>Bu Claude 101 rehberinde, basit bir chatbot mantığının ötesine geçerek Claude'u nasıl tam donanımlı bir "düşünce ortağı" (thought partner) olarak konumlandırabileceğimizi gördük. İşte rehber boyunca edindiğimiz en önemli kazanımlar:</p>

<ul>
  <li><strong>Claude ile Başlamak:</strong> Claude; Constitutional AI temelli faydalı, zararsız ve dürüst bir yardımcıdır. Web, mobil ve masaüstü arayüzleriyle her cihazda senkronize çalışır.</li>

  <li><strong>Daha İyi Sonuçlar Almak:</strong> Yineleme (iteration) esastır. Yapay Zeka Akıcılığı (AI Fluency) ise şu dört temel yetkinliği barındırır: Delege Etme (Delegation), Tanımlama (Description), Ayırt Etme (Discernment) ve Özen (Diligence).</li>

  <li><strong>Çalışmaları Organize Etmek:</strong> Projeler (Projects) kalıcı bağlam ve ekip iş birliği sunan bilgi merkezleridir. Artifacts, sohbetin yanında derlenen etkileşimli ve bağımsız çıktılardır. Beceriler (Skills) ise Claude'a uzmanlık katan otonom iş akışı paketleridir.</li>

  <li><strong>Claude'un Erişimini Genişletmek:</strong> Bağlayıcılar (Connectors), Claude'u Google Workspace, Notion veya Slack gibi kendi verilerinize bağlar. Kurumsal Arama (Enterprise Search) organizasyon genelinde arama yapmayı sağlar. Araştırma Modu (Research Mode) ise manuel aramaları dakikalara indiren otonom bir tarama döngüsüdür.</li>

  <li><strong>Hepsini Bir Araya Getirmek:</strong> Claude; yazılım, satış, pazarlama, finans, İK ve hukuk gibi birçok rolde kullanılabilir. Ayrıca <code>claude.ai</code> haricinde Claude Code, Slack, Excel ve Chrome eklentileriyle doğrudan iş akışlarınıza entegre olur.</li>
</ul>

<h3>Bu Bölümün Önemli Konseptleri</h3>

<ul>
  <li><strong>Research Mode (Araştırma Modu):</strong> Claude'un internet üzerinde çok adımlı, yinelemeli aramalar yaparak kapsamlı raporlar oluşturmasını sağlayan otonom araştırma yeteneği.</li>

  <li><strong>Extended Thinking (Derin Düşünme):</strong> Modelin karmaşık problemleri analiz ederken, yanıt üretmeden önce daha uzun akıl yürütme adımları ve planlama yapmasını sağlayan altyapı.</li>

  <li><strong>Agentic Search (Ajan Tabanlı Arama):</strong> Yapay zekanın arama yaparken kendi kararlarını vererek, bulduğu sonuçlara göre yeni takip sorguları oluşturması ve araştırmayı bağımsız sürdürmesi.</li>

  <li><strong>Citations (Kaynak Atıfları):</strong> Üretilen araştırma raporunda, bilgilerin hangi web sitelerinden veya belgelerden alındığını gösteren tıklanabilir doğrulama bağlantıları.</li>

  <li><strong>Deep Dive (Derinlemesine Analiz):</strong> Bir konu hakkında yüzeyel özet geçmek yerine, tüm alt detayları, teknik parametreleri ve farklı kaynaklardaki görüşleri tarayarak yapılan detaylı inceleme.</li>

  <li><strong>Systematic Investigation (Sistematik İnceleme):</strong> Araştırma konusunun rastgele aramalar yerine, belirli bir plan dahilinde adım adım ve bilgi boşlukları doldurularak düzenli olarak sorgulanması süreci.</li>
</ul>
      `,
      en: `
<p>As developers and tech professionals, we tackle dozens of problems every single day. Over the past few years, AI tools have become an indispensable part of these workflows. However, many tools struggle to go beyond being simple question-and-answer chatbots. Claude, developed by Anthropic, disrupts this pattern by positioning itself not just as a reactive assistant, but as a "thought partner" that you can collaborate with on complex cognitive tasks.</p>

<p>In this post, we'll dive into the key takeaways from Anthropic's Claude 101 course, exploring Claude's technical strengths and the various working modes available in its new desktop app. Let's start with the fundamental question: What makes Claude different?</p>

<h2>What is Claude?</h2>

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

<h2>Your First Conversation with Claude</h2>

<p>Getting started with Claude is simple. When you open <code>claude.ai</code> in your browser or launch the desktop application, you are greeted by a clean, inviting chat interface. You can immediately type your first prompt to begin. However, to truly leverage Claude as a thought partner, you can utilize several core features of the conversation engine:</p>

<ul>
  <li><strong>Adding Attachments:</strong> Use the paperclip icon in the input box or simply drag and drop files (PDFs, code files, CSV sheets, or images) directly into the chat. Claude's large context window allows it to process these files entirely and answer questions with precision based on your data.</li>

  <li><strong>Chat History:</strong> Access your previous conversations anytime via the left sidebar. Claude stores each chat in an isolated context, ensuring that different projects or tasks do not bleed into one another.</li>

  <li><strong>Customize Preferences:</strong> Navigate to "Customize Claude" under your profile settings to define persistent instructions (e.g., "Always keep explanations concise and focus on Python best practices"). Claude will adhere to these instructions across all new conversations automatically.</li>
</ul>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Attachments:</strong> Documents, code repositories, or images uploaded to a conversation to provide instant context for Claude's reasoning.</li>

  <li><strong>Customize:</strong> A user preferences menu where you can set persistent guidelines that dictate Claude's persona, tone, and output style.</li>

  <li><strong>Chat History:</strong> The structured layout in the sidebar allowing you to organize, rename, and revisit past conversation threads.</li>

  <li><strong>System Prompts:</strong> Behind-the-scenes instructions that establish the rules, safety guidelines, and behavioral limits before the conversation starts.</li>
</ul>

<h2>Getting Better Results</h2>

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

<h2>Claude Desktop App: Chat, Cowork, Code</h2>

<p>The interfaces we use to collaborate with AI directly affect our productivity. Claude’s new desktop app offers three distinct working modes tailored to your immediate needs:</p>

<ul>
  <li><strong>Chat:</strong> The same conversational Claude you know from the web, enhanced with native desktop integrations. This includes a floating <strong>Quick Entry</strong> window that triggers by double-tapping the <strong>Option</strong> key on Mac, allowing you to ask questions without leaving your active window. It also features screen capturing, window sharing, voice <strong>dictation</strong>, and <strong>desktop connectors</strong> that link local data (like Apple Notes) to your chat context.</li>

  <li><strong>Cowork:</strong> An <strong>agentic</strong> tool built for tasks requiring multi-step workflows and autonomous executions. Cowork can coordinate <strong>subagents</strong> in parallel to divide and conquer research reports, run folder-wide document updates, and execute scheduled tasks (e.g., pulling daily Slack/Calendar updates). It can browse the web via Chrome (<strong>browser use</strong>) or directly interact with desktop windows, clicking and typing to get work done (<strong>computer use</strong>). You can also hand off tasks to it remotely from your phone using <strong>Dispatch</strong>.</li>

  <li><strong>Code:</strong> Optimized specifically for software engineering workflows. It can run locally on a folder (<strong>local</strong>) or connect to a cloud-based <strong>GitHub</strong> repository (<strong>remote</strong>) for background tasks. It features three interaction modes to govern AI autonomy: <strong>Ask</strong> (proposes changes and awaits approval via visual diffs), <strong>Code</strong> (applies changes automatically but asks before running terminal commands), and <strong>Plan</strong> (outlines its full strategy beforehand). All changes are tracked via git integration.</li>
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

<h2>Introduction to Projects</h2>

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

<h2>Creating with Artifacts</h2>

<p><strong>Artifacts</strong> are standalone, interactive outputs that Claude creates in a dedicated window alongside your conversation. Instead of getting a long block of code or text buried in the chat, you see your content rendered and ready to use—whether that's a working website, an interactive chart, or a document you can immediately download.</p>

<p>Claude automatically creates an artifact when content meets certain criteria:</p>

<ul>
  <li><strong>Significant and Self-Contained:</strong> Typically over 15 lines of complex code or documentation.</li>

  <li><strong>Iterative and Modifiable:</strong> Something you are likely to edit, iterate on, or reuse in the future.</li>

  <li><strong>Complex and Standalone:</strong> Content that represents a distinct asset that stands on its own without needing the surrounding conversation.</li>

  <li><strong>Persistent Reference:</strong> Assets that you will want to reference or use later in your workflow.</li>
</ul>

<h3>Common Artifact Types</h3>

<p>Claude can create different types of artifacts, each suited to different needs:</p>

<ul>
  <li><strong>Documents:</strong> Excel, PowerPoint, Word, Markdown, or PDF formats. Ideal for text-heavy content you want to export or continue editing, such as reports, meeting notes, or project plans.</li>

  <li><strong>Code Snippets:</strong> Working code in Python, JavaScript, C++, Go, and more, which you can copy or download to use in your own projects.</li>

  <li><strong>HTML Pages:</strong> Complete, standalone web pages with HTML, CSS, and JS. Perfect for landing pages, interactive forms, or quick prototypes.</li>

  <li><strong>SVG Images:</strong> Scalable vector graphics for logos and illustrations, rendering directly in the artifact window.</li>

  <li><strong>Mermaid Diagrams:</strong> Visualizations like flowcharts, sequence diagrams, and Gantt charts created simply by describing relationships.</li>

  <li><strong>React Components:</strong> Interactive UI elements featuring real functional logic (such as calculators, dashboards, or interactive charts) that respond directly to user input rather than being static mockups.</li>
</ul>

<h3>Creating Your First Artifact</h3>

<p>Creating an artifact is as simple as having a conversation. Just describe what you want, and Claude will determine whether to present it as an artifact.</p>

<p>For example, you might say:</p>

<ul>
  <li>*"Create a flowchart showing our customer onboarding process."* (Note: Claude may now generate visual diagrams like flowcharts as HTML using Imagine, in addition to code-based artifacts.)</li>

  <li>*"Build an interactive dashboard that lets me input monthly expenses and see a breakdown."*</li>

  <li>*"Design a landing page for a productivity app with a hero section and feature list."*</li>

  <li>*"Write a project brief template I can reuse for new initiatives."*</li>
</ul>

<p>If Claude doesn't automatically create an artifact when you expect one, you can explicitly ask: *"Create this as an artifact"* or *"Show me this in an artifact."*</p>

<p>When Claude generates an artifact, it appears in a dedicated window to the right of your conversation. From here, you can:</p>

<ul>
  <li><strong>View Different Formats:</strong> Toggle between a preview (how it looks) and the underlying code.</li>

  <li><strong>Copy Content:</strong> Click the copy icon to grab the content for use elsewhere.</li>

  <li><strong>Download Files:</strong> Save the artifact as a file to your computer.</li>

  <li><strong>View Code:</strong> See exactly what Claude generated under the hood.</li>
</ul>

<h3>Sharing and Publishing Artifacts</h3>

<p>Once you've created something useful, you have several options for sharing it:</p>

<ul>
  <li><strong>Copy or Download:</strong> For personal use or sharing via other channels, use the copy or download buttons in the lower-right corner of the artifact window.</li>

  <li><strong>Share within Your Organization (Claude for Work):</strong> Team and Enterprise users can share artifacts internally with colleagues. The shared artifact stays within your organization and requires team identity <strong>authentication</strong> to access.</li>

  <li><strong>Publish Publicly:</strong> For free, Pro, and Max users, you can publish artifacts to make them accessible to anyone with the link. When you publish:</li>

  <li>*   Only the selected version becomes public; your conversation history remains private.</li>

  <li>*   Anyone can view and interact with the artifact without needing a Claude account.</li>

  <li>*   Others can "<strong>remix</strong>" your artifact—opening it in their own Claude conversation to modify and build upon it.</li>
</ul>

<p>To publish, click the "Share" or "Publish" button in the upper-right corner of the artifact. You can unpublish at any time by returning to that artifact and removing public access. Note that published artifacts are accessible to anyone with the link, but are not indexed by search engines, meaning they won't appear in Google search results.</p>

<h3>Tips for Getting the Most from Artifacts</h3>

<p>To extract the maximum value from the Artifacts feature, consider these tips:</p>

<ul>
  <li><strong>Be Specific About What You Want:</strong> Instead of "Build a budget tracker," say "Build a monthly budget tracker where I can input expenses by category, see a pie chart breakdown, and get a warning when I'm over budget" to guide Claude towards more comprehensive designs.</li>

  <li><strong>Describe the End User:</strong> Identifying who will use the artifact informs its UI choices. "This flowchart is for new employees" yields a different design approach than "This flowchart is for the engineering team."</li>

  <li><strong>Iterate Incrementally:</strong> Ask Claude to add one feature or make one change at a time rather than requesting everything at once. This simplifies debugging and testing.</li>

  <li><strong>Request Artifacts When Needed:</strong> If you prompt for something substantial and Claude responds inline in the chat instead of spawning a new panel, explicitly request: *"Please create that as an artifact."*</li>
</ul>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Standalone:</strong> An independent output or module that functions and provides value on its own without external dependencies or surrounding chat context.</li>

  <li><strong>Render:</strong> The process of compiling and displaying raw code (such as HTML/CSS/JS) into a visual, interactive interface in the browser.</li>

  <li><strong>Mockup:</strong> A static design model representing how a website or application will look, without containing functional logic.</li>

  <li><strong>Preview:</strong> A live visualization screen showing code-based user interfaces executed by the browser.</li>

  <li><strong>Toggle:</strong> A user interface control or action that switches between two alternative states or views.</li>

  <li><strong>Remix:</strong> The action of cloning another user's published artifact into one's own chat session to modify and extend it.</li>

  <li><strong>Unpublish:</strong> The process of removing public access to a previously published URL, restoring its visibility only to the author.</li>

  <li><strong>End User:</strong> The final target audience or individuals who will interact with and utilize a software product or design.</li>

  <li><strong>Incremental Iteration:</strong> The methodology of building software piece-by-piece, requesting individual additions or modifications sequentially rather than all at once.</li>
</ul>

<h2>Working with Skills</h2>

<p>While executing tasks within workspaces and codebases, Claude offers modular expertise packages and dynamic integrations with external tools to handle specialized workflows.</p>

<p><strong>Skills</strong> are directories containing instructions, <strong>scripts</strong>, and template resources that Claude loads dynamically in the background to optimize performance on specialized tasks. Think of them as autonomous expertise packages designed to extend Claude's core capabilities in a repeatable way.</p>

<p>If you have used Claude to generate Excel sheets, PowerPoint slideshows, Word docs, or PDFs, you have already experienced Skills at work behind the scenes. However, the modular nature of Skills goes far beyond document generation. Custom Skills can codify complete repeatable workflows:</p>

<ul>
  <li><strong>Quarterly Variance Analysis:</strong> Automated templates designed to compare financial figures across quarters.</li>

  <li><strong>Brand Voice:</strong> Quality control rules ensuring text aligns with brand voice guidelines.</li>

  <li><strong>Compliance Checklist:</strong> Predefined checklists verifying code compliance against regulatory and security benchmarks.</li>
</ul>

<p>By deploying custom Skills, you guarantee that Claude executes complex, standard-dependent workflows with high rigor and reproducibility.</p>

<h3>Types of Skills</h3>

<p>There are two primary categories of Skills you will encounter:</p>

<ul>
  <li><strong>Anthropic Skills:</strong> Created and maintained by Anthropic. These include enhanced document creation capabilities for Excel, Word, PowerPoint, and PDF files. Anthropic Skills are available to all paid users, and Claude invokes them automatically when relevant—meaning no configuration is needed on your part.</li>

  <li><strong>Custom Skills:</strong> Custom skills built by you or your organization to automate specialized workflows and <strong>domain-specific</strong> tasks. For example, you can create a skill that enforces company brand guidelines on presentations, templates meeting notes in a specific format, or executes custom data analysis pipelines.</li>
</ul>

<h3>Enabling Skills</h3>

<p>Skills are currently available as a feature preview for users on Pro, Max, Team, and Enterprise plans. To use Skills, you'll need to have <strong>Code execution</strong> and <strong>file creation</strong> enabled, since Skills require Claude's secure <strong>sandboxed computing environment</strong> to function.</p>

<p>Here's how to enable Skills:</p>

<p>1. Navigate to <strong>Settings > Capabilities</strong></p>
<p>2. Ensure that <strong>Code execution and file creation</strong> is toggled on</p>
<p>3. Scroll to the <strong>Skills</strong> section</p>
<p>4. Toggle individual skills on or off as needed</p>

<p>For Enterprise plans, organization Owners must first enable both Code execution and Skills in Admin settings before individual members can access them. For Team plans, this feature preview is enabled by default at the organization level.</p>

<p>Once enabled, you'll see available Skills listed in your settings, including Anthropic's built-in Skills and any custom Skills you've uploaded.</p>

<h3>Using Skills in Practice</h3>

<p>The beauty of Skills is that you typically do not need to think about them—Claude automatically handles skill selection based on your prompt.</p>

<p>Here are a few practical examples of prompts that will trigger Skills:</p>

<ul>
  <li>*"Create an Excel spreadsheet tracking monthly expenses with formulas for totals."*</li>

  <li>*"Turn this meeting notes document into a PowerPoint presentation."*</li>

  <li>*"Generate a PDF report summarizing this data."*</li>

  <li>*"Build a financial model in Excel with scenario analysis."*</li>
</ul>

<p>When Claude invokes a skill, you will see it mentioned inside Claude's chain of thought as it executes reasoning steps. The final output is a downloadable file that you can save locally or export directly to Google Drive.</p>

<h3>Creating Custom Skills</h3>

<p>While Anthropic's built-in Skills manage basic document creation tasks, the true potential of the feature comes from customising them to your workflows. Custom Skills let you program Claude with your brand guidelines (brand voice), templates, and specific ways of working.</p>

<p>The easiest way to build a Custom Skill is through direct dialogue with Claude. No code writing or manual file structures are required; Claude compiles everything autonomously:</p>

<p>1.  <strong>Define Your Purpose:</strong> Open a new chat and tell Claude what you want to create (e.g., *"I want to create a skill for writing quarterly business reviews (QBR)."*).</p>
<p>2.  <strong>Answer Claude's Questions:</strong> Claude will run a brief interview about your workflow, asking what the skill should execute, what defines a high-quality output, and in which contexts you plan to deploy it.</p>
<p>3.  <strong>Upload Reference Materials:</strong> If you have templates, style guidelines, brand assets, or past successful outputs, upload them as reference materials (<strong>reference materials</strong>).</p>
<p>4.  <strong>Save Your Skill:</strong> At the end of the conversation, Claude generates a structured skill package. Save it, and the skill is instantly listed under the <strong>Customize</strong> panel in the left sidebar.</p>

<p>Once saved, the Custom Skill is automatically invoked by Claude whenever you work on matching tasks. You can edit and improve the skill over time by simply asking Claude to update it.</p>

<h3>Skills vs. Projects</h3>

<p>You might be wondering—if both skills and projects can be used to provide more context to Claude, when should you use each? Think of it this way: <strong>projects store knowledge, skills perform tasks.</strong></p>

<ul>
  <li><strong>Projects are Knowledge Hubs:</strong> They hold the reference materials Claude needs to understand your work—project specifications, meeting notes, research documents. When files are uploaded to a project, Claude draws on that information across every conversation within that project.</li>

  <li><strong>Skills are Procedural Machines:</strong> They encode how Claude should execute a task—the specific steps, order of operations, and methodology you want followed every time.</li>
</ul>

<p>The two features complement each other: the project provides the *what (information/data)*, while the skill provides the *how (process/execution)*. For instance, a "customer call prep" <strong>skill</strong> might pull from customer profiles stored in a project's <strong>knowledge base</strong>.</p>

<table>
  <thead>
    <tr><th>Feature</th><th>Projects</th><th>Skills</th></tr>
  </thead>
  <tbody>

    <tr><td><strong>Purpose</strong></td><td>Store knowledge Claude references.</td><td>Define processes Claude executes.</td></tr>
    <tr><td><strong>Best for</strong></td><td>Long-term context, reference materials, team collaboration.</td><td>Repeatable workflows, multi-step tasks, consistent methodology.</td></tr>
    <tr><td><strong>Example</strong></td><td>Customer hub, research buddy, feedback generator.</td><td>Process guidelines (brand or legal), blog drafting, PDF creation.</td></tr>
    <tr><td><strong>Persistence</strong></td><td>Knowledge available across all chats in the project.</td><td>Instructions applied only when the skill is invoked.</td></tr>
  </tbody>
</table>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Skills:</strong> Modular folders of instructions and scripts loaded dynamically to equip the AI model with specialized, repeatable workflow capabilities.</li>

  <li><strong>Scripts:</strong> Execution files containing code (such as Python or JS) that runs sequentially without prior compilation, typically used for workflow automation.</li>

  <li><strong>Domain-Specific:</strong> Targeted or restricted to a particular field of expertise, industry segment, or organization-level rules.</li>

  <li><strong>Feature Preview:</strong> A release phase allowing users on select subscription plans to test new experimental capabilities before full commercial availability.</li>

  <li><strong>Sandboxed Environment:</strong> An isolated, secure compute area that restricts programs from interacting with host systems, personal files, or core resources.</li>

  <li><strong>Code Execution:</strong> The functional ability of an AI assistant to interpret, run, and extract output from code blocks dynamically.</li>
</ul>

<h2>Connecting Your Tools</h2>

<p><strong>Connectors</strong> transform Claude from an assistant into an informed collaborator by giving Claude access to the same tools, data, and context that you use every day. Instead of starting every conversation from scratch, Claude can work directly with your actual information.</p>

<p>Connectors allow Claude to read information and perform actions on your behalf. Depending on the connector and permissions you grant, Claude can search your files, retrieve documents, analyze data, create new content, update records, and execute tasks across your connected applications—all from within your conversation.</p>

<p>There are two types of connectors:</p>
<ul>
  <li><strong>Web Connectors:</strong> Link Claude to cloud services like Google Drive, Notion, Slack, and Asana.</li>

  <li><strong>Desktop Extensions:</strong> Run locally on your computer through the Claude Desktop app, giving Claude access to local files and native applications.</li>
</ul>

<p>The Model Context Protocol (MCP) powers connectors. Think of MCP like USB-C for AI—a universal standard that allows Claude to connect to many different applications through a single, consistent interface. This open standard means developers can build connectors for any tool, and those connectors work seamlessly with Claude.</p>

<h3>Finding and Connecting Tools</h3>

<p>Anthropic maintains a directory of recommended connectors at [claude.ai/directory](https://claude.ai/directory). The directory is organized into two tabs:</p>
<ul>
  <li><strong>Web:</strong> Cloud services and applications (Gmail, Notion, Slack, Asana, Linear, Stripe, and many more).</li>

  <li><strong>Desktop Extensions:</strong> Local tools that run on your computer through the Claude Desktop app.</li>
</ul>

<p>To browse available connectors, you can also click the <code>+</code> button in the lower left of the chat window, then select <strong>Connectors</strong>.</p>

<p>#### Setting Up a Web Connector</p>

<p>Here's how to connect a cloud service:</p>
<p>1.  <strong>Find the connector:</strong> Navigate to <code>claude.ai/directory</code>, or click <code>+</code> > <strong>Connectors\` in any chat.</p>
<p>2.  </strong>Click Connect:<strong> Select the connector you want to add.</p>
<p>3.  </strong>Authenticate:<strong> You'll be redirected to the service's login page. Sign in with your existing credentials.</p>
<p>4.  </strong>Grant permissions:<strong> Review the specific permissions Claude is requesting, then authorize access.</p>
<p>5.  </strong>Test the connection:** Return to Claude and try a simple request, like *"Can you access my [tool name]?"*.</p>

<p>Once connected, Claude can search, read, and in some cases take actions within that service—depending on the permissions you've granted.</p>

<p>#### Desktop Extensions</p>

<p>Desktop extensions require the Claude Desktop app rather than the web interface. These extensions let Claude interact with local applications, your file system, and native features on macOS or Windows.</p>

<p>Some desktop extensions include:</p>
<ul>
  <li><strong>Local file access:</strong> Reading and organizing documents.</li>

  <li><strong>Browser control:</strong> Automated web tasks.</li>

  <li><strong>Native application integration:</strong> Like Figma for design work.</li>
</ul>

<p>To install a desktop extension:</p>
<p>1.  Download and install the Claude Desktop app.</p>
<p>2.  Open the app and navigate to <strong>Settings > Extensions</strong>.</p>
<p>3.  Browse available extensions and click <strong>Install</strong>.</p>
<p>4.  Follow any additional setup steps specific to that extension.</p>

<h3>Using Connectors in Your Work</h3>

<p>Once you've connected your tools, Claude considers them when responding to your requests. Here are some practical ways to use connected tools:</p>

<p>#### Project Management (Asana, Linear, Jira)</p>
<ul>
  <li>*"What are my highest priority tasks due this week?"*</li>

  <li>*"Create a new task for reviewing the Q4 budget proposal"*</li>

  <li>*"Summarize the status of our product launch project"*</li>
</ul>

<p>#### Communication (Slack, Gmail)</p>
<ul>
  <li>*"Find the email thread where we discussed the vendor contract"*</li>

  <li>*"Draft a reply to the latest message in the #marketing channel"*</li>

  <li>*"What did the team decide about the timeline in yesterday's discussion?"*</li>
</ul>

<p>#### Documentation (Notion, Google Drive, Confluence)</p>
<ul>
  <li>*"Search our documentation for our brand voice guidelines"*</li>

  <li>*"Summarize the meeting notes from last week's product review"*</li>

  <li>*"What does our style guide say about using contractions?"*</li>
</ul>

<p>#### Business Tools (Stripe, PayPal, Salesforce)</p>
<ul>
  <li>*"Show me revenue trends for the past quarter"*</li>

  <li>*"What's the status of the Acme Corp opportunity?"*</li>

  <li>*"List recent transactions over $1,000"*</li>
</ul>

<h3>Security and Permissions</h3>

<p>When you connect Claude to external services, you're granting it access to read—and sometimes modify—data within those services. Here are some important considerations:</p>

<ul>
  <li><strong>Scoped Access:</strong> Permissions are specific to what the connector needs and you can toggle individual permissions on and off within each application's menu.</li>

  <li><strong>Claude Sees What You See:</strong> Claude can only access data you have access to. Connecting your work email doesn't give Claude access to your CEO's inbox—only your own.</li>

  <li><strong>Revocable at Any Time:</strong> You can disconnect a service through Claude's settings or through the third-party service's security settings. Just as with Skills, you can also find or build custom connectors. Exercise the same caution — only install connectors from trusted sources.</li>
</ul>

<h3>Claude Interfaces and Integration Matrix</h3>

<p>You are not limited to the desktop application when integrating Claude into your workflows. Anthropic provides a diverse ecosystem of interfaces tailored to different use cases:</p>

<table>
  <thead>
    <tr><th>Interface / Integration</th><th>Core Capabilities / Tasks</th><th>Target Platforms</th></tr>
  </thead>
  <tbody>

    <tr><td><strong>Claude.ai</strong></td><td>General tasks, research, writing, analysis, file creation.</td><td>Web, desktop, and mobile apps.</td></tr>
    <tr><td><strong>Claude Code</strong></td><td>Software development, codebase navigation, git workflows.</td><td>Terminal / command line, IDE, or your browser.</td></tr>
    <tr><td><strong>Claude Cowork</strong></td><td>Complex, multi-step tasks: research briefs, document creation, file organization, data analysis.</td><td>Desktop (and mobile apps via Dispatch).</td></tr>
    <tr><td><strong>Slack Integration</strong></td><td>Team collaboration, meeting prep, quick answers in context.</td><td>Slack workspace.</td></tr>
    <tr><td><strong>Claude for Excel</strong></td><td>Spreadsheet analysis, financial modeling, formula debugging.</td><td>Microsoft Excel sidebar.</td></tr>
    <tr><td><strong>Claude for PowerPoint</strong></td><td>Slide creation, presentation editing, formatting and design.</td><td>Microsoft PowerPoint sidebar.</td></tr>
    <tr><td><strong>Claude for Chrome</strong></td><td>Web research, email management, browser automation.</td><td>Chrome browser sidebar.</td></tr>
  </tbody>
</table>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Connectors:</strong> Data integration pathways that enable Claude to directly access external tools, databases, and cloud applications.</li>

  <li><strong>Model Context Protocol (MCP):</strong> An open-source, universal integration standard that enables AI models to communicate with different applications and data sources via a single, consistent protocol.</li>

  <li><strong>Desktop Extensions:</strong> Local connectors that run via the Claude Desktop app, giving the model access to files and operating system capabilities on the local machine.</li>

  <li><strong>Authenticate:</strong> The process of verifying the identity of a user or system, enabling secure log-in to a service.</li>

  <li><strong>Grant Permissions:</strong> Assigning access rights and boundaries to an application or model, allowing it to perform operations on specific data.</li>

  <li><strong>Browser Control:</strong> The programmatic ability of an AI system to guide a local web browser to navigate, collect data, or perform form submissions autonomously.</li>

  <li><strong>Opportunity:</strong> A structured data entry in sales and CRM platforms representing a potential sale or commercial deal with a client.</li>

  <li><strong>Scoped Access:</strong> A restriction level where an integration can only access pre-authorized and narrow parts of a system rather than the full directory.</li>

  <li><strong>Revocable:</strong> The quality of an integration's access rights that permits the user to immediately and permanently cancel permissions at any time.</li>
</ul>

<h2>Enterprise Search</h2>

<p>Enterprise Search adds a dedicated <strong>"Ask {Your Org Name}"</strong> option to your sidebar. This is designed specifically for finding and synthesizing knowledge buried across your company's tools and data sources.</p>

<p>Think of Enterprise Search as a pre-built Project for your entire organization — your company's knowledge base is already loaded, so you can jump right in to get context-aware responses to your questions.</p>

<p>Unlike regular chats with connectors enabled, Enterprise Search is specifically designed for information gathering, using custom instructions configured by the Anthropic team.</p>

<h3>What can you ask?</h3>

<p>Enterprise Search is particularly valuable for questions that span multiple sources or require synthesizing information from across your organization. Here are some common use cases:</p>

<ul>
  <li><strong>Getting up to speed:</strong></li>

  <li>*   *"What happened yesterday while I was out?"*</li>

  <li>*   *"Summarize key updates across the business from the last week."*</li>

  <li>*   *"What are the current blockers on the Platform project?"*</li>

  <li><strong>Policy and process questions:</strong></li>

  <li>*   *"What is our company's remote work policy?"*</li>

  <li>*   *"How do I submit an expense report?"*</li>

  <li>*   *"What's the process for requesting time off?"*</li>

  <li><strong>Research and analysis:</strong></li>

  <li>*   *"What are the main reasons customers cite for choosing competitors?"*</li>

  <li>*   *"Summarize discussions about the Q4 product roadmap."*</li>

  <li>*   *"Find information about our customer onboarding process."*</li>

  <li><strong>Onboarding new team members:</strong></li>

  <li>*   *"How does our authentication system work?"*</li>

  <li>*   *"Who should I talk to about learning the billing system?"*</li>

  <li>*   *"What tools does the engineering team use for deployment?"*</li>

  <li><strong>Performance and project tracking:</strong></li>

  <li>*   *"Find discussions and documents related to the marketing campaign."*</li>

  <li>*   *"What were the key decisions from last week's leadership meetings?"*</li>

  <li>*   *"Summarize team contributions to the Infrastructure initiative."*</li>
</ul>

<p>When you ask a question, Claude searches across all your connected tools—such as SharePoint documents, Slack conversations, Gmail threads, and Google Drive files—and synthesizes information into a unified response. Plus, it always <strong>cites its sources</strong> so you can get the full context.</p>

<h3>Setting Up Enterprise Search</h3>

<p>Enterprise Search requires a two-step setup process: first an admin configures it for the organization, then individual users authenticate with their personal accounts.</p>

<p>#### For Admins (Owners)</p>

<p>The Enterprise Search project is enabled by default for all Team and Enterprise organizations, but an Owner needs to complete the initial setup before team members can use it:</p>
<p>1. Click <strong>"Ask Your Org"</strong> in the left sidebar.</p>
<p>2. Click <strong>"Set up for your org"</strong> to continue (or "Disable" to turn the feature off).</p>
<p>3. Connect your organization's tools. You'll be required to choose a connector for Documents (like Google Drive or SharePoint) and Chat (like Slack or Microsoft Teams). Email is recommended but optional.</p>
<p>4. Click <strong>"+ Add more"</strong> to set up any additional tools your team needs.</p>
<p>5. Customize the project name. Whatever you enter will appear as *"Ask [Name]"* in everyone's sidebar.</p>
<p>6. Add a description, then click <strong>"Finish set up."</strong></p>

<p>Once setup is complete, the project becomes available to all members of your organization.</p>

<p>#### For Users</p>

<p>After an admin has set up Enterprise Search, you'll see the *"Ask {Org Name}"* project starred in your sidebar. Here's how to get started:</p>
<p>1. Click on the project in your sidebar.</p>
<p>2. Follow the guided onboarding flow to connect to the recommended services.</p>
<p>3. Authenticate with each service you want to search (Slack, Google, Microsoft 365, etc.).</p>
<p>4. Start asking Claude questions about your organization's knowledge.</p>

<p>The more connectors you enable, the more comprehensive your search results will be. You can always add more connectors later by clicking "Connect" in the project's Instructions section.</p>

<p>#### That's a lot of data … is this safe?</p>

<p>In short, yes. Enterprise Search only shows what you already have permission to access in the original connected tool. Plus, your conversations remain private, and your connected data isn't indexed or stored separately.</p>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Blocker:</strong> An issue or obstacle that completely stops or delays progress on a project task.</li>

  <li><strong>Onboarding:</strong> The integration and training process of a new employee or customer to help them adapt to a new system or environment.</li>

  <li><strong>Cite Sources:</strong> Providing reference links or locations for documents and messages that the model utilized to generate its answer.</li>

  <li><strong>Owner:</strong> An administrative role within a software or platform organization responsible for managing settings, billing, and overall permissions.</li>

  <li><strong>Guided Onboarding:</strong> An interactive, step-by-step guided flow to facilitate initial configuration and connection setup for a user.</li>

  <li><strong>Indexed:</strong> The process of compiling data from files and messages into a search index or structured database to enable fast query execution.</li>
</ul>

<h2>Research Mode for Deep Dives</h2>

<p>Research transforms how Claude finds and analyzes information. Instead of a single search, Claude operates agentically—conducting multiple searches that build on each other while determining exactly what to investigate next. It explores different angles of your question automatically and works through open questions systematically.</p>

<p>Research delivers comprehensive answers in minutes. Most reports complete in 5 to 15 minutes, though more complex investigations may take up to 45 minutes—work that would typically require hours of manual research.</p>

<p>Extended thinking is automatically enabled with Research. This powerful combination lets Claude both plan its approach thoughtfully and gather comprehensive information, breaking complex requests into manageable pieces.</p>

<p>Citations make verification easy. Research delivers thorough answers complete with easy-to-check citations, so you can trust Claude's findings and quickly verify sources yourself.</p>

<h3>What is Research?</h3>

<p>Research is a capability that allows Claude to perform deep, multi-step web searches to answer complex questions or gather comprehensive information on a topic. When you enable Research, Claude:</p>

<ul>
  <li>Formulates a research plan based on your query.</li>

  <li>Executes search queries to find high-quality web sources.</li>

  <li>Analyzes retrieved pages to extract relevant information.</li>

  <li>Identifies gaps in its current knowledge and runs follow-up searches.</li>

  <li>Synthesizes findings into a comprehensive, cited report.</li>
</ul>

<p>Unlike standard web search which retrieves a single set of search results, Research is an iterative, agentic loop that dynamically adapts its search strategy as it learns more about the topic.</p>

<h3>Conclusion: What You've Learned</h3>

<p>Throughout this Claude 101 guide, we have explored how to transition from treating Claude as a simple Q&A chatbot into establishing it as a full-cycle "thought partner." Here are the core takeaways:</p>

<ul>
  <li><strong>Getting Started with Claude:</strong> Claude is built on Constitutional AI principles to be helpful, harmless, and honest. You can access it via web, desktop, and mobile with seamless sync, and write effective prompts by establishing context, action, and formatting rules.</li>

  <li><strong>Getting Better Results:</strong> Iteration is key. Hone outputs through interactive dialogue. True AI Fluency is achieved by mastering four core competencies: Delegation, Description, Discernment, and Diligence.</li>

  <li><strong>Organizing Your Work:</strong> Projects provide dedicated workspaces with persistent knowledge and instructions. Artifacts compile complex, standalone outputs like code and interactive dashboards alongside your chat. Skills are instruction folders that automate specialized workflows.</li>

  <li><strong>Expanding Claude's Reach:</strong> Connectors link Claude to your Google Drive, Slack, Notion, and other data sources. Enterprise Search serves as an organization-wide search directory. Research Mode automates multi-step, deep web searches into cited reports.</li>

  <li><strong>Putting It All Together:</strong> Claude's value applies across all domains—software development, marketing, finance, HR, legal, and research. Beyond <code>claude.ai</code>, you can utilize Claude Code, Slack, Excel, and Chrome sidebar extensions to embed it into your tools.</li>
</ul>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Research Mode:</strong> An autonomous feature allowing Claude to carry out multi-step, iterative web searches to compile comprehensive reports.</li>

  <li><strong>Extended Thinking:</strong> A capability that permits the model to spend more time reasoning and planning steps before generating its final answer.</li>

  <li><strong>Agentic Search:</strong> The process by which the AI makes its own search decisions, creating follow-up queries based on intermediate findings.</li>

  <li><strong>Citations:</strong> Reference links or indicators embedded in reports showing the source documents or websites used by the model.</li>

  <li><strong>Deep Dive:</strong> A comprehensive analysis that digs into all sub-aspects, technical parameters, and source materials rather than summarizing briefly.</li>

  <li><strong>Systematic Investigation:</strong> The structured process of exploring a topic step-by-step to fill knowledge gaps rather than running arbitrary queries.</li>
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
