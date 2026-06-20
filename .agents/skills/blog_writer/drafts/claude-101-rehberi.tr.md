---
title: "A'dan Z'ye Claude 101: Geliştiriciler İçin Akıllı Bir İş Ortağı"
desc: "Claude'un temel felsefesini, Constitutional AI yapısını, geniş bağlam penceresini ve yeni masaüstü uygulamasının sunduğu Chat, Cowork ve Code modlarını inceliyoruz."
tag: "AI"
tagVariant: "cyan"
emoji: "🤖"
date: "2026-06-20"
published: false
---

Geliştiriciler ve teknoloji profesyonelleri olarak her gün onlarca problemi çözmeye çalışıyoruz. Son birkaç yıldır yapay zeka araçları bu süreçlerin ayrılmaz bir parçası haline geldi. Ancak pek çok araç sadece basit birer soru-cevap asistanı (chatbot) olmanın ötesine geçemiyor. Anthropic tarafından geliştirilen Claude ise bu ezberi bozarak kendisini sadece bir asistan değil, aynı zamanda karmaşık süreçleri birlikte yürütebileceğimiz bir "düşünce ortağı" (thought partner) olarak konumlandırıyor.

Bu yazıda, Anthropic'in Claude 101 eğitiminde öne çıkan başlıkları, Claude'un teknik gücünü ve yeni masaüstü uygulamasındaki çalışma modlarını inceleyeceğiz. İlk olarak en temel soruyla başlayalım: Claude'u diğerlerinden farklı kılan ne?

## Giriş: Neden Claude?

Claude'u ilk kullanmaya başladığınızda dikkatinizi çeken ilk şey, insani, dengeli ve son derece dürüst iletişim tonudur. Bu rastlantısal bir tasarım tercihi değil, Anthropic'in temel felsefesinin bir sonucudur. Claude; faydalı (helpful), zararsız (harmless) ve dürüst (honest) olmak üzere üç temel ilke üzerine inşa edilmiştir.

### 1. Constitutional AI (Anayasal Yapay Zeka)
Pek çok yapay zeka modeli, insan geri bildirimleriyle (RLHF) eğitilir ve bu süreç insanların kendi ön yargılarını modele aktarmasına neden olabilir. Claude ise **Constitutional AI** adı verilen özgün bir yöntemle eğitilir. Modele insan hakları beyannamesi, gizlilik kuralları ve etik ilkelerden oluşan yazılı bir "anayasa" verilir. Model, eğitim esnasında kendi çıktılarının bu anayasaya uygunluğunu kendisi denetler ve düzeltir. Bu sayede toksik veya ayrımcı çıktılardan (outputs) uzak dururken, son derece şeffaf ve güvenilir bir çerçevede çalışır.

### 2. Geniş Bağlam Penceresi (Context Window)
Bir geliştirici için yapay zekanın hafızası en kritik konudur. Claude, desteklenen modellerinde standard planlarda 200 bin, kurumsal veya Pro planlarda ise 1 milyon **token**'a kadar geniş bir **context window** sunar. Bu, yaklaşık 500 ila 2500 sayfalık metni veya devasa bir kod reposunu tek bir sohbet içinde Claude'a doğrudan aktarabilmeniz anlamına gelir. Böylece projenizin tamamını veya geniş kütüphane dokümantasyonlarını birer **attachment** (ek) olarak yükleyebilir, Claude'un tüm bu kod tabanını görerek nokta atışı çözümler üretmesini sağlayabilirsiniz.

### 3. Yönlendirilebilirlik (Steerability)
Claude, kişilik, ton ve davranış kurallarına sıkı sıkıya uyacak şekilde yüksek yönlendirilebilirlik (**steerability**) yeteneğine sahiptir. Ona vereceğiniz sistem prompt'ları veya roller sayesinde, tam olarak projenizin standartlarına uygun (örneğin "Sadece TypeScript yaz ve her fonksiyona jsdoc ekle") çıktılar alabilirsiniz.

### Bu Bölümün Önemli Konseptleri

*   **Constitutional AI (Anayasal Yapay Zeka):** Modelin insan geri bildirimleriyle eğitilirken, belirli bir yazılı kurallar setine (anayasa) göre kendi çıktılarını denetleyip düzeltmesini sağlayan Anthropic eğitim metodu.
*   **Context Window (Bağlam Penceresi):** Yapay zeka modelinin tek bir konuşma oturumunda aklında tutabildiği ve işleyebildiği maksimum veri miktarı.
*   **Steerability (Yönlendirilebilirlik):** Modelin kendisine verilen sistem yönergelerine, karakter kısıtlamalarına ve çıktı formatlarına sıkı sıkıya uyma becerisi.
*   **Token:** Yapay zekanın metinleri işlemek için böldüğü en küçük anlamlı hece veya karakter grubu (yaklaşık 1 kelime = 1.3 token).
*   **Alignment (Hizalama/Uyumlanma):** Yapay zeka sisteminin kararlarının, hedeflerinin ve çıktılarının insan değerleri ve etik kurallarıyla uyumlu hale getirilmesi süreci.

## Yapay Zeka Akıcılığı (AI Fluency) ve 4D Çerçevesi

Yapay zekayı kod yazarken veya günlük işlerimizde kullanırken en büyük yanılgı, tüm işi sadece birkaç butona tıklayarak veya tek seferlik isteklerle (**one-shot requests**) çözebileceğimizi düşünmektir. Gerçek verimlilik, yapay zekayı sadece bir araç değil, otonom bir iş ortağı olarak konumlandırdığımızda başlar. Akademik olarak geliştirilen **4D Framework for AI Fluency** (Yapay Zeka Akıcılığı için 4D Çerçevesi), bu iş birliğini dört temel yetkinlik üzerine kurar:

1. **Delegation (Delege Etme):** Hangi işleri yapay zekanın yapacağına, hangilerini insanın üstleneceğine stratejik karar vermektir.
2. **Description (Tanımlama):** Yapay zekaya isteklerimizi ve kurallarımızı net, açık ve bağlamlı (**context**) bir şekilde tarif etme yeteneğidir.
3. **Discernment (Ayırt Etme / Muhakeme):** Claude'un çıktılarını (**outputs**) kritik bir süzgeçten geçirmek, kaliteyi ve doğruluğu sorgulamaktır.
4. **Diligence (Özen / Gayret):** Yapay zekayı sorumlu ve etik kullanmak, üretilen kod veya belgelerin tüm teknik sorumluluğunu üstlenmektir.

### Halüsinasyon ve Temellendirme (Grounding)
Büyük dil modelleri (LLM'ler) zaman zaman son derece inandırıcı ama tamamen uydurma bilgiler üretebilir; buna halüsinasyon (hallucination) denir. İşte bu noktada *Discernment* ve *Diligence* devreye girer. Claude'un çıktılarının doğruluğundan emin olmak için onları internet aramasıyla (**web search**) veya yüklediğimiz ham belgelerle temellendirmemiz (**grounding**) gerekir. Bu sayede model hayali veriler yerine, sadece sunduğumuz gerçek dokümanlara odaklanır.

### Evals (Değerlendirme Testleri)
Claude'un bizim çalışma alanımızda (**domain**) gerçekten başarılı olup olmadığını test etmek için sistematik bir değerlendirme (**evals**) süreci yürütmeliyiz. Bunun için:
- Yaptığımız işlerden 5-10 gerçek örnek toplarız.
- Bunları üretecek test prompt'ları hazırlarız.
- Claude'un verdiği çıktılarla kendi örneklerimizi karşılaştırıp tonu, doğruluğu ve eksikleri analiz ederek prompt'larımızı iyileştiririz (**refine**).

### İterasyon Zihniyeti ve Sık Karşılaşılan Sorunlar
Unutmayın, yapay zekayla çalışmak doğrusal değil, yinelemeli (**iterative**) bir süreçtir. İlk çıktıyı sadece bir taslak (**draft**) olarak görüp Claude'a spesifik geri bildirimler (feedback) vermelisiniz. İşlerinizde Claude'un yanıtı çok genel (**generic**) kalıyorsa kısıtlarınızı artırabilir, istediğiniz formata uymuyorsa ona kurallar söylemek yerine örnek bir format gösterebilirsiniz. Eğer konuşma çok uzadıysa ve bağlam kayması (**context drift**) nedeniyle Claude rayından çıktıysa (**off track**), yeni bir temiz sohbet penceresi açmak en hızlı çözümdür.

### Bu Bölümün Önemli Konseptleri

*   **Evals (Değerlendirmeler):** Yapay zekanın belirli görevlerdeki başarı grafiğini, doğruluğunu ve stilini ölçmek için geliştirilen sistematik testler.
*   **Grounding (Temellendirme):** Yapay zekanın cevaplarını uydurma veriler yerine, internet araması veya yüklenen ham dokümanlar gibi gerçek ve doğrulanabilir bilgi kaynaklarına dayandırması süreci.
*   **Prompt (Girdi Komutu):** Yapay zeka modeline ne yapması gerektiğini söyleyen ve çıktının kalitesini doğrudan belirleyen talimat metni.
*   **Iteration (Yineleme):** Yapay zeka ile çalışırken ilk çıktıyı taslak kabul edip, sürekli geri bildirimlerle çıktıyı mükemmelleştirme süreci.
*   **Context Drift (Bağlam Kayması):** Konuşma geçmişi çok uzadığında, geçmiş kelimelerin dikkat ağırlıklarını dağıtması sonucu modelin odağını kaybetmesi veya kuralları unutmaya başlaması.

## Masaüstü Deneyimi (Chat, Cowork, Code)

Yapay zeka ile etkileşim kurarken kullandığımız arayüzler iş verimliliğimizi doğrudan belirler. Claude'un yeni masaüstü uygulaması (desktop app), kullanıcıya ihtiyacına göre geçiş yapabileceği üç farklı çalışma modu sunar:

*   **Chat:** Web sürümünden tanıdığımız klasik sohbet arayüzüdür. Ancak işletim sistemiyle kurduğu yerel (native) entegrasyon sayesinde çok daha pratik özellikler sunar. Örneğin, Mac'te **Option** tuşuna çift tıklayarak (**double-tap**) yaptığınız işi bölmeden ekranın üzerinde yüzen bir **Quick Entry** (Hızlı Giriş) penceresi açabilirsiniz. Ekran görüntülerini doğrudan paylaşabilir, klavye kullanmak istemediğinizde **dikte (dictation)** ile konuşarak yazdırabilirsiniz. Ayrıca yerel bağlayıcılar (**desktop connectors**) sayesinde **Apple Notes** gibi bilgisayarınızdaki uygulamaları bağlayıp Claude'un yerel notlarınızı okuyup analiz etmesini sağlayabilirsiniz.
*   **Cowork:** Büyük hedefleri alıp bağlanan araçlar yardımıyla otonom olarak yürüten **agentic** (otonom ajan tabanlı) bir çalışma modudur. Projeleri bölümlere ayırarak arka planda paralel çalışan alt ajanlar (**subagents**) başlatabilir. Klasör bazlı dosye okuma ve yazma işlemlerini yürütebilir, **scheduled tasks** (zamanlanmış görevler) özelliğiyle Slack ve e-postalarınızdan günlük raporlar hazırlayabilir. **Browser use** ile web sitelerinde otonom gezinebilir ve hatta macOS üzerinde doğrudan tıklama ve klavye hareketleriyle bilgisayarı kontrol edebilir (**computer use**). Ayrıca **Dispatch** özelliği sayesinde, bilgisayarınız açık olduğu sürece telefonunuzdaki mobil uygulama üzerinden bilgisayardaki Claude'a görev devredebilirsiniz.
*   **Code:** Kod yazmak, testleri çalıştırmak ve projeyi canlıya almak (**deploy**) gibi tamamen yazılım geliştirme süreçlerine özeldir. Yerel klasörünüzde çalışabildiği gibi (**local**), buluttaki bir **GitHub** deposuna da bağlanabilir (**remote**). Claude'un otonomluk düzeyini belirleyen üç etkileşim moduna sahiptir: **Ask** (değişiklikleri yapmadan önce görsel diff ile onay bekler), **Code** (dosyaları doğrudan yazar ancak terminal komutlarından önce onay ister) ve **Plan** (kod yazmadan önce detaylı bir yol haritası sunar). Tüm süreç entegre **git** sistemiyle sürüm sürüm izlenir.

**Cowork** ve **Code** modları arka planda aynı güçlü **engine**'i (altyapıyı) paylaşır. Her ikisinin de altında **Claude Code** yatar; makinenize yereldir; bağımsız çalışabilir, **sub-agent**'lar (alt ajanlar) başlatabilir ve uzun süreli görevleri sürdürebilir.

### Bu Bölümün Önemli Konseptleri

*   **Agentic Systems (Otonom Ajan Sistemleri):** Yapay zekanın sadece soruları yanıtlayan bir asistan olmaktan çıkıp, verilen hedeflere ulaşmak için bilgisayardaki dosyaları okuma/yazma, terminal komutları çalıştırma gibi işlemleri kendi başına yapabilmesi.
*   **Sub-agents (Alt Ajanlar):** Ana yapay zeka ajanının, büyük bir görevi tamamlamak üzere alt dallara bölüp bağımsız olarak çalıştırdığı ve koordine ettiği yardımcı yapay zeka birimleri.
*   **Desktop Connectors (Masaüstü Bağlayıcıları):** Yapay zeka uygulamasının, kullanıcının bilgisayarındaki yerel dosyalara, notlara ve servislere güvenli bir şekilde erişmesini sağlayan entegrasyon köprüleri.
*   **Computer Use (Bilgisayar Kullanımı):** Yapay zekanın ekrandaki pikselleri analiz ederek insan gibi işletim sisteminde gezinmesi; uygulamaları açması, tıklaması ve yazması.
*   **Sandbox (Yalıtılmış Ortam):** Yapay zekanın bilgisayarda çalışırken sisteme veya kişisel verilere zarar vermesini önlemek amacıyla, yalnızca izin verilen klasörler içinde sınırlandırılmış bir güvenlik çemberi içinde çalıştırılması.
*   **Refactoring (Kodu Yeniden Yapılandırmak):** Kodun işlevini değiştirmeden, okunabilirliğini, performansını ve mimarisini iyileştirmek için yeniden yazılması süreci.
*   **Visual Diffs (Görsel Farklar):** İki kod versiyonu arasındaki eklenen, silinen ya da değiştirilen satırları gösteren görsel karşılaştırma arayüzü.

## Projeler ve Artifacts (Üretkenlik Canavarı)

Yapay zekanın en büyük sınırı, her yeni sohbette geçmişi sıfırlaması ve dosyaları tekrar tekrar yüklemenizi gerektirmesidir. Claude, bu sorunu çözmek ve sürekli devam eden süreçlerimizi optimize etmek için **Projects** (Projeler) özelliğini sunar.

Projeler, tek seferlik sorular (**one-shot questions**) yerine, süreğen ve geniş kapsamlı iş süreçlerinizi (**workflows**) yönetmek için tasarlanmış özel dijital çalışma alanlarıdır. Bir proje oluşturduğunuzda şunları gerçekleştirebilirsiniz:

*   **Referans Belgeleri Saklama:** Toplantı notları, raporlar, kod kılavuzları gibi sürekli başvurulacak belgeleri projenin içine yükleyebilir ve Claude'un her yeni sohbet sekmesinde bunları otomatik hatırlamasını sağlayabilirsiniz.
*   **Tutarlı Yanıt Yönergeleri:** Claude'un her zaman uyması gereken kuralları (örneğin "Her zaman kaynak göster", "Dosyalarımızı şu şablona göre oluştur") projeye kalıcı talimat olarak kaydedebilirsiniz.
*   **Ekip İş Birliği:** Aynı proje alanı üzerinde birden fazla ekip üyesinin ortak bir bağlam (**context**) ve bilgi birikimi ile çalışmasını sağlayabilirsiniz.

### İlk Projenizi Kurmak

Bir projeyi hayata geçirmek son derece basittir ve yalnızca birkaç adımdan oluşur:

1. **Projeyi Başlatın:** Sol menüdeki "Projects" butonuna veya doğrudan `claude.ai/projects` adresine giderek sağ üstteki "+ New Project" seçeneğine tıklayın. Projenize açıklayıcı bir isim ve kısa bir amaç açıklaması verin. Görünürlüğünü isteğinize göre gizli tutabilir veya ekip arkadaşlarınızla paylaşabilirsiniz.
2. **Proje Talimatlarını (Instructions) Tanımlayın:** "Instructions" paneli üzerinden Claude'un bu projedeki tüm sohbetlerde uymasını istediğiniz kuralları yazın. İyi bir talimat seti; projenin amacını, Claude'dan beklenen adımları (örneğin "Önce blog yapısını kurgula, sonra taslağı yaz"), tercih edilen ton ve stil kurallarını ve çıktı gereksinimlerini (örneğin "Her zaman call-to-action ekle") içerir. Ayrıca bu bölümü belirli iş akışlarını (**workflows**) otomatikleştirmek için de programlayabilirsiniz (örneğin "Yüklenen toplantı transkriptlerinden otomatik olarak şablonlu bir özet çıkart").
3. **Bilgi Tabanını (Knowledge Base) İnşa Edin:** Sağ menüdeki "+" butonunu kullanarak PDF, DOCX, CSV, TXT ve HTML gibi çeşitli formatlarda belgeleri veya doğrudan Google Drive'ı bağlayarak referans dosyalarınızı projeye aktarın. Dosyalarınızı adlandırırken "belge1.pdf" gibi jenerik isimler yerine "Q4-2024-Marka-Kilavuzu.pdf" gibi açıklayıcı isimler kullanmak Claude'un doğru veriyi bulmasını kolaylaştırır.

### Projede Çalışmak ve Ekip İş Birliği

Projenizi kurduktan sonra Claude ile sohbet etmeye başlayabilirsiniz. Proje dahilinde açtığınız her yeni sohbet penceresi, bilgi tabanınıza (**knowledge base**) otomatik olarak erişebilecek ve belirlediğiniz proje talimatlarına (**project instructions**) göre davranacaktır. 

Claude for Work (Team ve Enterprise) kullanıcıları için projeler, kapsamlı iş birliği özellikleriyle birlikte gelir. Projenizi paylaşırken ekip üyelerinize üç farklı yetkilendirme seviyesi (**permission levels**) atayabilirsiniz:

*   **Can View (Görüntüleyebilir):** Üyeler proje içeriğini görebilir, bilgi tabanını kullanabilir ve sohbet edebilir; ancak herhangi bir değişiklik yapamazlar. Bu, tartışma haklarına sahip salt okunur (**read-only**) bir erişim seviyesidir.
*   **Can Edit (Düzenleyebilir):** Üyeler tam iş birliği yetkisine sahiptir. Proje talimatlarını düzenleyebilir, bilgi tabanını güncelleyebilir, üyeleri yönetebilir ve projeye aktif katkıda bulunabilirler.
*   **Owner (Proje Sahibi):** Projeyi oluşturan kişi her şeyi kontrol eder. Projeyi kimlerin göreceğini yönetebilir, belirli kişilerle paylaşabilir veya tüm organizasyonun erişimine açabilir.

Bir projeyi paylaşmak için proje adının sağındaki "Share project" butonuna tıklayıp kişileri ekleyebilir, e-posta adreslerini toplu olarak kopyalayıp yapıştırarak toplu paylaşım (**bulk sharing**) yapabilir veya projenizi "Everyone at [organization]" seçeneğiyle tüm organizasyon için keşfedilebilir hale getirebilirsiniz.

### Büyük Bilgi Tabanları ve RAG (Retrieval Augmented Generation) Ölçeklemesi

Projeye çok sayıda veya çok büyük dosyalar yüklediğinizde ne olur? Claude, bu durumu **Retrieval Augmented Generation (RAG)** mekanizmasıyla otonom olarak yönetir.

Projedeki bilgi miktarı **context window** sınırına yaklaşmaya başladığında, Claude sorunsuz bir şekilde **RAG modunu** etkinleştirir. Claude, tüm proje dosyalarını aynı anda belleğe yüklemek yerine, sorduğunuz soruyu yanıtlamak için en kritik ve ilgili bilgi parçalarını akıllıca arayıp bulur ve yalnızca bu parçaları belleğe çeker. Bu akıllı arama ve getirme süreci, yanıt kalitesinden ödün vermeden projenizin dosya taşıma kapasitesini 10 katına kadar artırır. RAG modu aktif olduğunda arayüzde görsel bir gösterge belirir, ancak belgelerle sohbet etme ve bağlama duyarlı (**context-aware**) yanıtlar alma deneyiminiz kesintisiz olarak devam eder.

### Projeler İçin En İyi Pratikler (Best Practices)

Projelerden en iyi şekilde yararlanmak ve Claude'un yanıt kalitesini en üst düzeyde tutmak için şu kurallara dikkat edilmelidir:

*   **Odaklanarak Başlayın, Ardından Genişletin:** Her şeyi tek bir projeye sığdırmaya çalışmak yerine, spesifik bir **use case** (kullanım senaryosu) ile başlayın. İlerledikçe yeni içerikler ve dosyalar ekleyerek kapsamı genişletebilirsiniz.
*   **Bilgi Tabanını (Knowledge Base) Güncel Tutun:** Güncelliğini yitirmiş belgeler, yapay zekanın yanlış veya eski yanıtlar vermesine yol açar. Bilgi tabanınızı belirli aralıklarla gözden geçirip güncelleyin.
*   **Net ve Spesifik Talimatlar Yazın:** Ne istediğinizi net olarak belirtin. Muğlak talimatlar tutarsız sonuçlar doğurur.
*   **Belgeleri Açıklayıcı Şekilde Adlandırın:** Dosyalara `rapor.pdf` gibi jenerik isimler vermek yerine `Q4-2025-Satis-Raporu.pdf` gibi açıklayıcı isimler verin. Claude, belgeler arasındaki anlamsal ilişkileri kurarken dosya adlarını ve birbirlerine olan yakınlığını (**proximity**) referans alır.
*   **Belgelere İsimleriyle Referans Verin:** Sohbet esnasında Claude'a belirli bir belgeye odaklanmasını söyleyebilirsiniz (örneğin: *"Q3 raporumuza dayanarak en önemli müşteri geri bildirimlerini özetle"*).

### Bu Bölümün Önemli Konseptleri

*   **Persistent Context (Kalıcı Bağlam):** Yapay zeka asistanında açılan her yeni sohbet sekmesinde, proje dosyalarının ve sistem talimatlarının hafızaya otomatik olarak yüklenmesini sağlayan yapı.
*   **Workspace (Çalışma Alanı):** Belirli bir konu, ürün veya yazılım projesine ait dosyaların, sohbetlerin ve kuralların mantıksal olarak gruplandığı dijital çalışma odası.
*   **Knowledge Base (Bilgi Tabanı):** Yapay zekanın yanıt üretirken referans alabilmesi için yüklenen dokümanlar, şablonlar ve kaynakların oluşturduğu bilgi havuzu.
*   **RAG (Retrieval Augmented Generation):** Yapay zekanın yanıt vermeden önce harici bir bilgi tabanında arama yapıp en ilgili verileri bularak cevabını bu verilere dayandırması tekniği.
*   **Workflow Automation (İş Akışı Otomasyonu):** Yapay zekanın, belirli girdileri alıp önceden tanımlanmış kurallar ve şablonlar çerçevesinde otonom olarak işlemesi süreci.
*   **Permission Levels (Yetkilendirme Seviyeleri):** Bir proje veya sistemdeki kullanıcıların erişim, düzenleme ve yönetim haklarını belirleyen yetki sınırları.
*   **Read-Only (Salt Okunur):** Kullanıcıların veriyi okumasına ve sorgulamasına izin veren ancak üzerinde düzenleme veya silme hakkı tanımayan erişim kısıtlaması.
*   **Use Case (Kullanım Senaryosu):** Bir sistemin belirli bir hedefe ulaşmak için izlediği kullanım adımları ve senaryosu.
*   **Proximity (Semantik Yakınlık):** RAG aramalarında ve veri hiyerarşilerinde, belgelerin veya metin bloklarının anlam olarak birbirine olan yakınlığı ve ilişkisi.
