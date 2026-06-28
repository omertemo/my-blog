---
title: "A'dan Z'ye Claude 101: Geliştiriciler İçin Akıllı Bir İş Ortağı"
desc: "Claude'un temel felsefesini, Constitutional AI yapısını, geniş bağlam penceresini ve yeni masaüstü uygulamasının sunduğu Chat, Cowork ve Code modlarını inceliyoruz."
tag: "AI"
tagVariant: "cyan"
emoji: "🤖"
date: "2026-06-20"
published: true
---

Geliştiriciler ve teknoloji profesyonelleri olarak her gün onlarca problemi çözmeye çalışıyoruz. Son birkaç yıldır yapay zeka araçları bu süreçlerin ayrılmaz bir parçası haline geldi. Ancak pek çok araç sadece basit birer soru-cevap asistanı (chatbot) olmanın ötesine geçemiyor. Anthropic tarafından geliştirilen Claude, soru-cevap işlevlerinin yanı sıra kullanıcıyla birlikte çalışabilen, otonom yeteneklere sahip bir asistan olarak tasarlanmıştır.

Bu yazıda, Anthropic'in Claude 101 eğitiminde öne çıkan başlıkları, Claude'un teknik gücünü ve yeni masaüstü uygulamasındaki çalışma modlarını inceleyeceğiz. İlk olarak en temel soruyla başlayalım: Claude'u diğerlerinden farklı kılan ne?

## Claude Nedir?

Claude, Anthropic'in tasarım tercihleri doğrultusunda şekillenen bir iletişim tonuna sahiptir. Model; faydalı (helpful), zararsız (harmless) ve dürüst (honest) olmak üzere üç temel ilke (HHH felsefesi) gözetilerek geliştirilmiştir.

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

## Claude ile İlk Sohbetiniz

Claude ile çalışmaya başlamak son derece kolaydır. Tarayıcınızdan `claude.ai` adresine girdiğinizde veya masaüstü uygulamasını açtığınızda sizi temiz bir sohbet arayüzü karşılar. Bu arayüz üzerinden ilk sorunuzu yazarak sohbeti başlatabilirsiniz. Ancak Claude'un bir "düşünce ortağı" olmasını istiyorsanız, basit bir sohbetten fazlasını yapabilirsiniz:

*   **Dosya Eklemek (Attachments):** Sohbet satırındaki ataç simgesini kullanarak veya dosyaları sürükleyip bırakarak (drag and drop) Claude'a PDF'ler, kod dosyaları, CSV tabloları veya resimler yükleyebilirsiniz. Claude, geniş bağlam penceresi (context window) sayesinde bu belgelerin tamamını analiz edip sorularınızı bu verilere göre cevaplar.
*   **Sohbet Geçmişi (Chat History):** Sol taraftaki menüden geçmiş sohbetlerinize dilediğiniz an erişebilirsiniz. Claude her sohbeti ayrı bir bağlamda saklar, böylece farklı projeleriniz veya sorularınız birbirine karışmaz.
*   **Özelleştirme Tercihleri (Customize):** Profil ayarlarınız altındaki "Customize Claude" (Claude'u Özelleştir) seçeneğiyle, Claude'un sizinle konuşurken uymasını istediğiniz genel kuralları (örneğin "Her zaman Türkçe cevap ver ve açıklamaları kısa tut") sisteme kalıcı olarak kaydedebilirsiniz.

### Bu Bölümün Önemli Konseptleri

*   **Attachments (Dosya Ekleri):** Claude sohbetlerine bağlam sağlamak amacıyla yüklenen dokümanlar, kod dosyaları veya görseller.
*   **Customize (Özelleştirme):** Kullanıcının Claude'un genel davranış ve yanıt tarzını şekillendirmek için tanımladığı kalıcı tercihler.
*   **Chat History (Sohbet Geçmişi):** Geçmiş etkileşimlerin ve projelerin ayrı ayrı organize edildiği sol menü listesi.
*   **System Prompts (Sistem İstemleri):** Modelin çalışmaya başlamadan önce uyması gereken genel çerçeveyi çizen arka plan talimatları.

## Daha İyi Sonuçlar Almak

Yapay zekayı kod yazarken veya günlük işlerimizde kullanırken en büyük yanılgı, tüm işi sadece birkaç butona tıklayarak veya tek seferlik isteklerle (**one-shot requests**) çözebileceğimizi düşünmektir. Gerçek verimlilik, yapay zekayı sadece bir araç değil, otonom bir iş ortağı olarak konumlandırdığımızda başlar. Akademik olarak geliştirilen **4D Framework for AI Fluency** (Yapay Zeka Akıcılığı için 4D Çerçevesi), bu iş birliğini dört temel yetkinlik üzerine kurar:

1. **Delegation (Delege Etme):** Hangi işleri yapay zekanın yapacağına, hangilerini insanın üstleneceğine stratejik karar vermektir.
2. **Description (Tanımlama):** Yapay zekaya isteklerimizi ve kurallarımızı net, açık ve bağlamlı (**context**) bir şekilde tarif etme yeteneği.
3. **Discernment (Ayırt Etme / Muhakeme):** Claude'un çıktılarını (**outputs**) kritik bir süzgeçten geçirmek, kaliteyi ve doğruluğu sorgulamaktır.
4. **Diligence (Özen / Gayret):** Yapay zekayı sorumlu ve etik kullanmak, üretilen kod veya belgelerin tüm teknik sorumluluğunu üstlenmektir.

### Halüsinasyon ve Temellendirme (Grounding)
Büyük dil modelleri (LLM'ler) zaman zaman son derece inandırıcı ama tamamen uydurma bilgiler üretebilir; buna halüsinasyon (hallucination) denir. İşte bu noktada *Discernment* ve *Diligence* devreye girer. Claude'un çıktılarının doğruluğundan emin olmak için onları internet aramasıyla (**web search**) veya yüklediğimiz ham belgelerle temellendirmemiz (**grounding**) gerekir. Bu sayede model hayali veriler yerine, sadece sunduğumuz gerçek dokümanlara odaklanır.

### Evals (Değerlendirme Testleri)
Claude'un bizim çalışma alanımızda (**domain**) gerçekten başarılı olup olmadığını test etmek için sistematik bir değerlendirme (**evals**) süreci yürütmeliyiz. Bunun için:
- Yaptığımız işlerden 5-10 gerçek örnek toplarız.
- Bunları üretecek test prompt'ları hazırlarız.
- Claude'un verdiği çıktılarla kendi örneklerimizi karşılaştırıp tonu, doğruluğu ve eksikleri analiz ederek prompt'larimizi iyileştiririz (**refine**).

### İterasyon Zihniyeti ve Sık Karşılaşılan Sorunlar
Unutmayın, yapay zekayla çalışmak doğrusal değil, yinelemeli (**iterative**) bir süreçtir. İlk çıktıyı sadece bir taslak (**draft**) olarak görüp Claude'a spesifik geri bildirimler (feedback) vermelisiniz. İşlerinizde Claude'un yanıtı çok genel (**generic**) kalıyorsa kısıtlarınızı artırabilir, istediğiniz formata uymuyorsa ona kurallar söylemek yerine örnek bir format gösterebilirsiniz. Eğer konuşma çok uzadıysa ve bağlam kayması (**context drift**) nedeniyle Claude rayından çıktıysa (**off track**), yeni bir temiz sohbet penceresi açmak en hızlı çözümdür.

### Bu Bölümün Önemli Konseptleri

*   **Evals (Değerlendirmeler):** Yapay zekanın belirli görevlerdeki başarı grafiğini, doğruluğunu ve stilini ölçmek için geliştirilen sistematik testler.
*   **Grounding (Temellendirme):** Yapay zekanın cevaplarını uydurma veriler yerine, internet araması veya yüklenen ham dokümanlar gibi gerçek ve doğrulanabilir bilgi kaynaklarına dayandırması süreci.
*   **Prompt (Girdi Komutu):** Yapay zeka modeline ne yapması gerektiğini söyleyen ve çıktının kalitesini doğrudan belirleyen talimat metni.
*   **Iteration (Yineleme):** Yapay zeka ile çalışırken ilk çıktıyı taslak kabul edip, sürekli geri bildirimlerle çıktıyı mükemmelleştirme süreci.
*   **Context Drift (Bağlam Kayması):** Konuşma geçmişi çok uzadığında, geçmiş kelimelerin dikkat ağırlıklarını dağıtması sonucu modelin odağını kaybetmesi veya kuralları unutmaya başlaması.

## Claude Masaüstü Uygulaması: Chat, Cowork, Code

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

## Projelere Giriş

Yapay zekanın en büyük sınırı, her yeni sohbette geçmişi sıfırlaması ve dosyaları tekrar tekrar yüklemenizi gerektirmesidir. Claude, bu sorunu çözmek ve sürekli devam eden süreçlerimizi optimize etmek için **Projects** (Projeler) özelliğini sunar.

Projeler, tek seferlik sorular (**one-shot questions**) yerine, süreğen ve geniş kapsamlı iş süreçlerinizi (**workflows**) yönetmek için tasarlanmış özel dijital çalışma alanlarıdır. Bir proje oluşturduğunuzda şunları gerçekleştirebilirsiniz:

*   **Referans Belgeleri Saklama:** Toplantı notları, raporlar, kod kılavuzları gibi sürekli başvurulacak belgeleri projenin içine yükleyebilir ve Claude'un her yeni sohbet sekmesinde bunları otomatik hatırlamasını sağlayabilirsiniz.
*   **Tutarlı Yanıt Yönergeleri:** Claude'un her zaman uyması gereken kuralları (örneğin "Her zaman kaynak göster", "Dosyalarımızı şu şablona göre oluştur") projeye kalıcı talimat olarak kaydedebilirsiniz.
*   **Ekip İş Birliği:** Aynı proje alanı üzerinde birden fazla ekip üyesinin ortak bir bağlam (**context**) ve bilgi birikimi ile çalışmasını sağlayabilirsiniz.

### İlk Projenizi Kurmak

Bir projenin kurulum adımları şunlardır:

1. **Projeyi Başlatın:** Sol menüdeki "Projects" butonuna veya doğrudan `claude.ai/projects` adresine giderek sağ üstteki "+ New Project" seçeneğine tıklayın. Projenize açıklayıcı bir isim ve kısa bir amaç açıklaması verin. Görünürlüğünü isteğinize göre gizli tutabilir veya ekip arkadaşlarınızla paylaşabilirsiniz.
2. **Proje Talimatlarını (Instructions) Tanımlayın:** "Instructions" paneli üzerinden Claude'un bu projedeki tüm sohbetlerde uymasını istediğiniz kuralları yazın. İyi bir talimat seti; projenin amacını, Claude'dan beklenen adımları (örneğin "Önce blog yapısını kurgula, sonra taslağı yaz"), tercih edilen ton ve stil kurallarını ve çıktı gereksinimlerini (örneğin "Her zaman call-to-action ekle") içerir. Ayrıca bu bölümü belirli iş akışlarını (**workflows**) otomatikleştirmek için de programlayabilirsiniz (örneğin "Yüklenen toplantı transkriptlerinden otomatik olarak şablonlu bir özet çıkart").
3. **Bilgi Tabanını (Knowledge Base) İnşa Edin:** Sağ menüdeki "+" butonunu kullanarak PDF, DOCX, CSV, TXT and HTML gibi çeşitli formatlarda belgeleri veya doğrudan Google Drive'ı bağlayarak referans dosyalarınızı projeye aktarın. Dosyalarınızı adlandırırken "belge1.pdf" gibi jenerik isimler yerine "Q4-2024-Marka-Kilavuzu.pdf" gibi açıklayıcı isimler kullanmak Claude'un doğru veriyi bulmasını kolaylaştırır.

### Projede Çalışmak ve Ekip İş Birliği

Projenizi kurduktan sonra Claude ile sohbet etmeye başlayabilirsiniz. Proje dahilinde açtığınız her yeni sohbet penceresi, bilgi tabanınıza (**knowledge base**) otomatik olarak erişebilecek ve belirlediğiniz proje talimatlarına (**project instructions**) göre davranacaktır.

Claude for Work (Team ve Enterprise) kullanıcıları için projeler, kapsamlı iş birliği özellikleriyle birlikte gelir. Projenizi paylaşırken ekip üyelerinize üç farklı yetkilendirme seviyesi (**permission levels**) atayabilirsiniz:

*   **Can View (Görüntüleyebilir):** Üyeler proje içeriğini görebilir, bilgi tabanını kullanabilir ve sohbet edebilir; ancak herhangi bir değişiklik yapamazlar. Bu, tartışma haklarına sahip salt okunur (**read-only**) bir erişim seviyesidir.
*   **Can Edit (Düzenleyebilir):** Üyeler tam iş birliği yetkisine sahiptir. Proje talimatlarını düzenleyebilir, bilgi tabanını güncelleyebilir, üyeleri yönetebilir ve projeye aktif katkıda bulunabilirler.
*   **Owner (Proje Sahibi):** Projeyi oluşturan kişi her şeyi kontrol eder. Projeyi kimlerin göreceğini yönetebilir, belirli kişilerle paylaşabilir veya tüm organizasyonun erişimine açabilir.

Bir projeyi paylaşmak için proje adının sağındaki "Share project" butonuna tıklayıp kişileri ekleyebilir, e-posta adreslerini toplu olarak kopyalayıp yapıştırarak toplu paylaşım (**bulk sharing**) yapabilir veya projenizi "Everyone at [organization]" seçeneğiyle tüm organizasyon için keşfedilebilir hale getirebilirsiniz.

### Büyük Bilgi Tabanları ve RAG (Retrieval Augmented Generation) Ölçeklemesi

Projeye çok sayıda veya çok büyük dosyalar yüklediğinizde ne olur? Claude, bu durumu **Retrieval Augmented Generation (RAG)** mekanizmasıyla otonom olarak yönetir.

Projedeki bilgi miktarı **context window** sınırına yaklaşmaya başladığında, Claude sorunsuz bir şekilde **RAG modunu** etkinleştirir. Claude, tüm proje dosyalarını aynı anda belleğe yüklemek yerine, sorduğunuz soruyu yanıtlamak için en kritik ve ilgili bilgi parçalarını akıllıca arayıp bulur ve yalnızca bu parçaları belleğe çeker. Bu arama ve getirme süreci, projenin veri kapasitesini artırırken yanıt hızını korur. RAG modu aktif olduğunda arayüzde görsel bir gösterge belirir, ancak belgelerle sohbet etme ve bağlama duyarlı (**context-aware**) yanıtlar alma deneyiminiz kesintisiz olarak devam eder.

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

## Artifacts ile Üretmek

**Artifacts** (Yapay Nesneler), Claude'un sohbetinizin hemen yanında yer alan özel bir pencerede oluşturduğu bağımsız (**standalone**) ve etkileşimli çıktılardır. Sohbet akışının içinde kaybolan uzun kod blokları veya metin yığınları almak yerine, içeriğinizin derlenmiş (**rendered**) ve doğrudan kullanıma hazır halini yan tarafta ayrı bir pencerede görürsünüz. Bu, çalışan bir web sitesi prototipi, etkileşimli bir grafik (**interactive chart**) veya anında indirebileceğiniz bir sistem mimarisi dokümanı olabilir.

Claude, üretilen içerik şu kriterleri karşıladığında otomatik olarak bir **artifact** oluşturur:

*   **Belirgin ve Kendi Kendine Yeten İçerikler:** Genellikle 15 satırın üzerindeki karmaşık kodlar veya belgeler.
*   **İterasyon ve Düzenlemeye Uygun Yapılar:** Üzerinde tekrar çalışmak, düzenlemek veya gelecekte yeniden kullanmak isteyeceğiniz dosyalar.
*   **Bağımsız Değer Taşıyan İçerikler:** Çevresindeki sohbet bağlamına ihtiyaç duymadan, kendi başına anlam ifade eden karmaşık yapılar.
*   **Referans Alınacak Kaynaklar:** Daha sonra tekrar başvurmak veya başka yerlerde kullanmak isteyeceğiniz çıktılar.

### Yaygın Artifact Türleri

Claude, geliştirme süreçlerinizdeki farklı ihtiyaçlara uygun çeşitli **artifact** formatları üretebilir:

*   **Dokümanlar (Documents):** Markdown, düz metin, Word, PDF, PowerPoint ve Excel formatları dahil olmak üzere metin ağırlıklı ve ihraç edilmeye uygun tüm raporlar, toplantı notları veya proje planları bu gruptadır.
*   **Kod Parçacıkları (Code Snippets):** Herhangi bir dilde (Python, JavaScript, Go, Rust vb.) yazılmış, kopyalanmaya veya doğrudan indirilip kullanılmaya hazır çalışır durumdaki kodlar.
*   **HTML Sayfaları (HTML Pages):** Tek bir dosyada HTML, CSS ve JavaScript içeren eksiksiz web sayfaları. Hızlı prototipler, açılış sayfaları (**landing pages**) veya etkileşimli demolar için idealdir.
*   **SVG Görselleri (SVG Images):** Logolar, simgeler ve şemalar için ölçeklenebilir vektör grafikleri. Doğrudan arayüzde render edilerek anında görüntülenebilir.
*   **Mermaid Diyagramları (Mermaid Diagrams):** Akış şemaları (**flowcharts**), sıralı diyagramlar (**sequence diagrams**) veya Gantt şemaları gibi görselleştirme araçları. Sadece ilişkileri tarif ederek Claude'un çizim yapmasını sağlayabilirsiniz.
*   **React Bileşenleri (React Components):** Sadece statik birer taslak (**mockup**) olmayan, durum yönetimi (state) ve kullanıcı girdilerine tepki verme gibi gerçek mantık (**logic**) içeren işlevsel kullanıcı arayüzü (**UI**) elemanları.

### İlk Artifact'inizi Oluşturmak

Bir **artifact** oluşturmak, Claude ile sohbet etmek kadar basittir. Yapmak veya tasarlamak istediğiniz şeyi doğal dilde tarif edin, Claude bunu bir **artifact** olarak sunup sunmayacağına kendisi karar verecektir.

Örneğin, şu prompt'ları kullanabilirsiniz:

*   *"Müşteri katılım (onboarding) sürecimizi gösteren bir akış şeması oluştur."* (Not: Claude artık kod tabanlı diyagramların yanı sıra, Imagine özelliğini kullanarak bunları HTML formatında görsel şemalar olarak da üretebilir.)
*   *"Aylık giderlerimi girebileceğim ve dökümleri görebileceğim etkileşimli bir dashboard geliştir."*
*   *"Hero bölümü ve özellik listesi olan bir üretkenlik uygulaması için landing page tasarla."*
*   *"Projelerimde tekrar kullanabileceğim bir proje özeti şablonu yaz."*

Claude beklediğiniz durumlarda otomatik olarak bir artifact oluşturmazsa, ona *"Bunu bir artifact olarak oluştur"* veya *"Bunu bana bir artifact içinde göster"* diyerek bu yapıyı açıkça tetikleyebilirsiniz.

Claude bir artifact ürettiğinde, bu çıktı sohbet pencerenizin sağında bağımsız bir pencerede açılır. Bu pencere üzerinden şu işlemleri yapabilirsiniz:

*   **Formatlar Arasında Geçiş Yapma:** Canlı görünüm (**Preview**) ile kaynak kod (**underlying code**) arasında geçiş yapabilirsiniz (**toggle**).
*   **Kopyalama:** Kodun veya içeriğin tamamını tek tıkla kopyalayıp başka bir yere yapıştırabilirsiniz.
*   **Dosya İndirme:** Üretilen dosyayı doğrudan bilgisayarınıza indirebilirsiniz.
*   **Kod Analizi:** Claude'un arka planda nasıl bir kod yapısı kurduğunu inceleyebilirsiniz.

### Artifact'leri Paylaşmak ve Yayınlamak

Yararlı bir artifact oluşturduktan sonra, bunu başkalarıyla paylaşmak için çeşitli yollara sahipsiniz:

*   **Yerel Kopyalama veya İndirme:** Kişisel projelerinizde kullanmak için sağ alt köşedeki kopyalama veya indirme butonlarını kullanabilirsiniz.
*   **Organizasyon İçi Güvenli Paylaşım (Claude for Work):** Team ve Enterprise planlarındaki kullanıcılar, hazırladıkları artifact'leri organizasyon içinde güvenle paylaşabilirler. Paylaşılan dosyalara erişim için ekip kimlik doğrulaması (**authentication**) gerekir.
*   **Herkese Açık Yayınlama (Public Publishing):** Free, Pro veya Max kullanıcısıysanız, oluşturduğunuz aracı herkese açık hale getirebilirsiniz. Bu durumda:
    *   Yalnızca seçtiğiniz belirli sürüm (versiyon) dışa açılır; Claude ile yaptığınız özel sohbet geçmişi tamamen gizli kalır.
    *   Claude hesabı olmayan kişiler bile paylaştığınız linke tıklayarak artifact'i görüntüleyebilir ve onunla etkileşime girebilir.
    *   Diğer kullanıcılar çalışmanızı "**remix**" edebilir; yani tek tıkla kendi Claude sohbetlerine kopyalayarak üzerinde değişiklik yapmaya ve geliştirmeye devam edebilirler.

Oluşturduğunuz aracı yayınlamak için sağ üstteki "Share" veya "Publish" butonunu kullanabilirsiniz. Fikrinizi değiştirirseniz, istediğiniz zaman herkese açık erişimi kaldırarak yayından çekebilirsiniz (**unpublish**). Yayınlanan artifact'ler arama motorları (Google vb.) tarafından dizine eklenmez (**not indexed**), bu nedenle arama sonuçlarında doğrudan listelenmezler.

### Artifacts İçin En İyi Pratikler (Best Practices)

Artifacts özelliğinden maksimum verim almak için şu ipuçlarına dikkat edebilirsiniz:

*   **Prompt Yazarken Spesifik Olun:** "Bir bütçe takipçisi yap" yerine, "Giderleri kategori bazlı girebileceğim, harcama dağılımını pasta grafikle (**pie chart**) gösteren ve bütçe aşıldığında uyarı veren aylık bir bütçe takipçisi geliştir" şeklinde detay vermek çok daha iyi sonuçlar üretir.
*   **Hedef Kullanıcıyı (End User) Tanımlayın:** Claude'a bu aracı kimin kullanacağını belirtmek tasarım kararlarını etkiler. "Bu akış şeması yeni çalışanlar için" yönergesi ile "Mühendislik ekibi için" yönergesi Claude'un farklı görsel diller seçmesini sağlar.
*   **Adım Adım Geliştirin (Iterate Incrementally):** Claude'dan tüm özellikleri tek seferde istemek yerine, her adımda tek bir özellik eklemesini veya değişiklik yapmasını talep edin. Bu, hata ayıklamayı (**debugging**) kolaylaştırır.
*   **Gerektiğinde Manuel Talep Edin:** Büyük bir kod bloğu istediğiniz halde Claude bunu normal sohbet penceresinde verirse, *"Bunu bir artifact olarak oluştur"* diyerek sistemi yönlendirebilirsiniz.

### Bu Bölümün Önemli Konseptleri

*   **Standalone (Bağımsız Çıktı):** Harici bir sisteme veya sohbet bağlamına ihtiyaç duymadan kendi sınırları içinde çalışabilen veya kullanılabilen modüller.
*   **Render (Görselleştirme/Derleme):** Kod bloklarının işlenerek tarayıcı üzerinde canlı ve etkileşimli bir görsel arayüze dönüştürülmesi süreci.
*   **Mockup (Taslak Arayüz):** Bir uygulamanın veya web sitesinin nasıl görüneceğini gösteren, ancak arka planda çalışan işlevsel bir kod barındırmayan statik tasarım modeli.
*   **Preview (Önizleme):** Kod tabanlı arayüz çıktılarının tarayıcı tarafından yorumlanarak canlı ve etkileşimli şekilde sunulduğu önizleme ekranı.
*   **Toggle (Geçiş):** Kullanıcı arayüzünde iki farklı durum veya görünüm arasında geçiş yapmayı sağlayan düğme veya eylem.
*   **Remix (Klonlama):** Herkese açık paylaşılan bir kodun veya tasarımın, başka bir kullanıcı tarafından kendi sohbet alanına kopyalayarak üzerinde yeni değişiklikler yapılması.
*   **Unpublish (Yayından Kaldırma):** Herkese açık yayınlanmış bir artifact'in erişim izinlerini sıfırlayarak genel kullanıma kapatılması.
*   **End User (Hedef Kullanıcı):** Bir yazılım veya tasarımı nihai olarak kullanacak olan kişi veya kitle.
*   **Incremental Iteration (Aşamalı Geliştirme):** Büyük projeleri yönetmek adına yapay zeka ile parça parça, her adımda tek bir özellik ekleterek çalışma yöntemi.

## Becerilerle Çalışmak

Claude, projeleri ve kod tabanlarını yönetirken uzmanlık paketleri ve dış dünya araç entegrasyonları çalıştırmayı destekler.

**Skills** (Beceriler), Claude'un belirli ve özelleştirilmiş görevlerdeki başarısını artırmak için arka planda dinamik olarak yüklediği talimatlar, **scripts** (betikler) ve kaynak şablonlarından oluşan modüler klasörlerdir. Bunları, Claude'a yeni yetenekler kazandıran otonom "uzmanlık paketleri" olarak tanımlayabiliriz.

Eğer Claude'u Excel dosyaları, PowerPoint sunumları veya PDF'ler üretmek için kullandıysanız, aslında arka planda bu beceri paketlerini çalıştırmışsınızdır. Ancak Skills yapısı sadece belge oluşturmakla sınırlı değildir. Özel beceriler (**custom skills**) sayesinde tüm tekrarlanabilir iş akışlarınızı kodlayabilirsiniz:

*   **Quarterly Variance Analysis (Çeyreklik Sapma Analizi):** Finansal verilerdeki çeyreklik sapmaları inceleyen analiz şablonları.
*   **Brand Voice (Marka Sesi):** Metinlerin marka sesine ve tonuna uygunluğunu denetleyen kalite kontrol kuralları.
*   **Compliance Checklist (Uyumluluk Kontrol Listesi):** Kodun veya dokümanların yasal ve teknik standartlara uyumluluğunu kontrol eden listeler.

Custom Skills sayesinde Claude, ona devrettiğiniz kritik süreçlerde her zaman aynı profesyonel adımları ve kuralları takip eder.

### Beceri Türleri (Types of Skills)

Kullanım esnasında karşılaşacağınız iki ana **skills** kategorisi vardır:

*   **Anthropic Becerileri (Anthropic Skills):** Doğrudan Anthropic tarafından geliştirilen ve güncellenen yerleşik becerilerdir. Excel e-tabloları, Word belgeleri, PowerPoint sunumları ve PDF dosyaları için gelişmiş dosya oluşturma yeteneklerini barındırır. Anthropic Becerileri tüm paid (ücretli) kullanıcılar için varsayılan olarak açıktır ve Claude, ilgili bir işlem yaptığınızda bunları arka planda otomatik olarak tetikler.
*   **Özel Beceriler (Custom Skills):** Sizin veya kuruluşunuzun belirli iş akışları ve alana özgü (**domain-specific**) görevleri otomatikleştirmek için geliştirdiği beceri paketleridir. Örneğin, şirketinizin marka kurallarını sunumlara entegre eden, toplantı notlarını belirli bir şablona göre düzenleyen veya veri analizi script'lerinizi çalıştıran özel beceriler hazırlayabilirsiniz.

### Becerileri Etkinleştirmek (Enabling Skills)

Beceriler (Skills) özelliği şu anda Pro, Max, Team ve Enterprise planlarındaki kullanıcılar için özellik önizlemesi (**feature preview**) aşamasındadır. Becerilerin çalışabilmesi, Claude'un güvenli yalıtılmış bilgi işlem ortamına (**sandboxed computing environment**) ihtiyaç duyması nedeniyle, **Code execution** (kod yürütme) ve **file creation** (dosya oluşturma) özelliklerinin açık olmasına bağlıdır.

Becerileri etkinleştirmek için şu adımları izleyebilirsiniz:

1. **Settings > Capabilities** (Ayarlar > Yetenekler) menüsüne gidin.
2. **Code execution and file creation** seçeneğini açık (**toggled on**) duruma getirin.
3. Aşağı kaydırarak **Skills** bölümünü bulun.
4. İstediğiniz becerileri tek tek aktif veya pasif hale getirin.

Kurumsal (Enterprise) planlarda, bireysel çalışanların bu özelliklere erişebilmesi için öncelikle organizasyon sahiplerinin (Owners) Yönetici (Admin) ayarlarından **Code execution** ve **Skills** izinlerini vermesi gerekir. Team planlarında ise bu özellik önizlemesi organizasyon düzeyinde varsayılan olarak etkindir.

Beceriler etkinleştirildiğinde, ayarlar sayfanızda hem Anthropic'in yerleşik (built-in) becerilerini hem de sisteme yüklediğiniz özel (custom) becerileri listeleyebilirsiniz.

### Becerileri Pratikte Kullanmak (Using Skills in Practice)

Becerilerin en güzel yanı, genellikle onlar hakkında ekstra düşünmenize gerek olmamasıdır. Claude, gönderdiğiniz prompt'u analiz ederek hangi beceri paketini tetikleyeceğine otomatik olarak karar verir.

Becerileri tetikleyecek bazı pratik prompt örnekleri:

*   *"Aylık harcamalarımı takip eden ve toplamlar için formüller barındıran bir Excel e-tablosu oluştur."*
*   *"Bu toplantı notlarını alıp profesyonel bir PowerPoint sunumuna dönüştür."*
*   *"Bu ham verileri özetleyen ve görsel grafikler içeren bir PDF raporu üret."*
*   *"Excel'de farklı senaryoları analiz eden dinamik bir finansal model (financial model) tasarla."*

Claude bir beceri (**skill**) kullandığında, arka planda yaptığı işlemleri akıl yürütme adımlarını içeren düşünce zincirinde (**chain of thought**) belirtir. İşlem bittiğinde, bilgisayarınıza kaydedebileceğiniz veya doğrudan Google Drive'a aktarabileceğiniz fiziksel ve indirilebilir bir dosya çıktısı alırsınız.

### Özel Beceriler (Custom Skills) Oluşturmak

Anthropic'in sunduğu yerleşik beceriler temel ofis işlerinizi çözse de, Beceriler özelliğinin asıl gücü kendi özel iş süreçlerinizi koda dökmenizden gelir. Özel Beceriler (**Custom Skills**), şirketinizin marka kurallarını (brand voice), şablonlarını ve iş yapış şekillerini Claude'a kalıcı olarak öğretmenize imkan tanır.

Özel bir beceri oluşturmak için model ile sohbet ederek gereksinimler tanımlanır. Dosya yapısı model tarafından otonom olarak kurulur:

1.  **İhtiyacınızı Tanımlayın:** Yeni bir sohbet başlatıp Claude'a neye ihtiyacınız olduğunu söyleyin (örneğin: *"Çeyreklik iş incelemeleri (QBR) yazmak için bir skill oluşturmak istiyorum"*).
2.  **Soruları Yanıtlayın:** Claude, iş akışınız hakkında sizinle kısa bir mülakat gerçekleştirir (bu becerinin tam olarak ne işe yarayacağını, kaliteli bir çıktının nasıl olması gerektiğini ve hangi durumlarda kullanılacağını sorar).
3.  **Referans Materyalleri Yükleyin:** Varsa şablonlarınızı, marka stil rehberlerinizi veya geçmişte başarıyla tamamladığınız örnek çalışmaları referans materyali (**reference materials**) olarak yükleyin.
4.  **Kaydedin ve Kullanın:** Görüşme sonunda Claude, tüm bu kuralları derleyip otonom bir beceri dosyası üretir. Bu dosyayı kaydettiğinizde, beceriniz kullanıma hazır hale gelir ve sol menüdeki **Customize** (Özelleştir) panelinde listelenir.

Oluşturduğunuz beceri, ilgili bir iş akışı başlattığınızda Claude tarafından otonom olarak çağrılır. Dilediğiniz zaman Claude ile tekrar konuşarak becerilerinizi yinelemeli (**iteration**) olarak güncelleyebilir ve geliştirebilirsiniz.

### Beceriler ve Projeler Karşılaştırması (Skills vs. Projects)

Hem projelerin hem de becerilerin Claude'a ek bağlam sağlamak için kullanıldığını gördük. Peki hangisini ne zaman kullanmalısınız? Farkı anlamak için şu temel kuralı aklınızda tutabilirsiniz: **Projeler bilgiyi saklar, beceriler süreçleri çalıştırır.**

*   **Projeler Bilgi Merkezleridir (Knowledge Hubs):** Proje spesifikasyonları, toplantı notları, araştırma raporları gibi Claude'un işinizi anlamak için referans alacağı tüm belgeleri barındırır.
*   **Beceriler Prosedür Makineleridir (Procedural Machines):** Claude'un bir görevi hangi sıra ve yöntemle (metodoloji, iş adımları) tamamlaması gerektiğini kodlar.

Bu iki özellik birbirini tamamlar. Proje **neyi** (bilgiyi/veriyi) sağlayacağını tanımlarken, beceri **nasıl** (işleme sürecini) yapılacağını belirler. Örneğin, bir "müşteri toplantısına hazırlık" becerisi (**skill**), projenin bilgi tabanına (**knowledge base**) yüklenmiş olan müşteri analiz belgelerini çekerek çalışabilir.

| Özellik | Projeler (Projects) | Beceriler (Skills) |
| :--- | :--- | :--- |
| **Amaç** | Claude'un referans alacağı verileri saklamak. | Claude'un izleyeceği süreç adımlarını tanımlamak. |
| **En İyi Alan** | Uzun vadeli bağlam, referans dokümanlar, ekip iş birliği. | Tekrarlanabilir iş akışları, çok adımlı görevler, tutarlı metodoloji. |
| **Örnek** | Müşteri bilgi deposu, araştırma asistanı. | Marka/hukuk yönergeleri, blog taslağı oluşturma, PDF üretimi. |
| **Kalıcılık** | Yüklenen bilgi, projedeki tüm sohbetlerde hazırdır. | Talimatlar sadece o beceri tetiklendiğinde uygulanır. |

### Bu Bölümün Önemli Konseptleri

*   **Skills (Beceriler):** Yapay zekaya belirli ve tekrarlanabilir uzmanlık alanlarında otonom çalışma yeteneği kazandıran modüler talimat ve kod paketleri.
*   **Scripts (Betikler):** Bir derleme işlemine gerek duymadan satır satır yorumlanarak çalıştırılan ve otomasyon süreçlerinde kullanılan kod dosyaları.
*   **Domain-Specific (Alana Özgü):** Sadece belirli bir teknik uzmanlık alanı, sektör veya şirket kuralları çerçevesinde geçerlilik taşıyan veri ve iş akışları.
*   **Feature Preview (Özellik Önizlemesi):** Yeni geliştirilen yeteneklerin genel kullanıma açılmadan önce belirli kullanıcı planlarında test edilmesi süreci.
*   **Sandboxed Environment (Yalıtılmış Ortam):** Kodların ve dosyaların ana sisteme veya kişisel verilere zarar vermesini önlemek adına izole ve güvenli bir sanal çember içinde çalıştırılması.
*   **Code Execution (Kod Yürütme):** Yapay zekanın arka planda yazılım kodlarını çalıştırıp çıktı üretebilme yeteneği.

## Araçlarınızı Bağlamak

**Bağlayıcılar (Connectors)**, Claude'un her gün kullandığınız araçlara, verilere ve dosyalara erişmesini sağlayarak onu basit bir sohbet asistanından otonom bir iş ortağına dönüştürür. Connectors sayesinde, her yeni sohbete sıfırdan başlamak yerine Claude'u doğrudan iş süreçlerinizdeki gerçek verilerle çalıştırabilirsiniz.

Bağlayıcılar, Claude'un sizin adınıza bilgileri okumasına ve otonom eylemler gerçekleştirmesine imkan tanır. Verdiğiniz izinlere bağlı olarak Claude; dosyalarınızı arayebilir, dokümanları çekebilir, veri analizi yapabilir, kayıtları güncelleyebilir veya bağlı uygulamalar üzerinden görevleri yürütebilir.

İki ana bağlayıcı türü vardır:
*   **Web Bağlayıcıları (Web Connectors):** Claude'u bulut tabanlı servislere bağlar (örneğin Google Drive, Notion, Slack, Asana).
*   **Masaüstü Uzantıları (Desktop Extensions):** Claude Masaüstü (Claude Desktop) uygulaması üzerinden bilgisayarınızda yerel (**local**) olarak çalışır. Claude'a yerel dosyalarınız ve makinenizdeki yerel uygulamalar için erişim yetkisi verir.

Tüm bu bağlayıcı altyapısının arkasında **Model Context Protocol (MCP)** standardı yatar. MCP'yi yapay zeka entegrasyonları için bir **"USB-C"** standardı gibi düşünebilirsiniz. Nasıl ki USB-C tek bir kablo üzerinden şarj, görüntü aktarımı ve veri transferi sağlayarak kablo karmaşasını bitirdiyse; MCP de yapay zekanın yüzlerce farklı uygulamaya tek bir tutarlı arayüz üzerinden bağlanmasını sağlar. Bu açık kaynaklı evrensel standart sayesinde geliştiriciler, herhangi bir yazılım aracı için kolayca bağlayıcı (connector) üretebilirler.

### Bağlayıcıları Bulma ve Bağlama (Finding and Connecting Tools)

Anthropic, önerilen bağlayıcıların (connectors) bir dizinini [claude.ai/directory](https://claude.ai/directory) adresinde barındırır. Bu dizin iki sekme halinde düzenlenmiştir:
*   **Web**: Bulut servisleri ve uygulamalar (Gmail, Notion, Slack, Asana, Linear, Stripe ve çok daha fazlası).
*   **Masaüstü Uzantıları (Desktop Extensions)**: Claude Masaüstü (Claude Desktop) uygulaması aracılığıyla bilgisayarınızda yerel (**local**) olarak çalışan araçlar.

Mevcut bağlayıcılara göz atmak için sohbet penceresinin sol alt kısmındaki `+` butonuna tıklayıp **Connectors** (Bağlayıcılar) seçeneğini de seçebilirsiniz.

#### Bir Web Bağlayıcısı Kurulumu (Setting Up a Web Connector)

Bir bulut servisini bağlamak için şu adımları izleyebilirsiniz:
1.  **Bağlayıcıyı bulun**: `claude.ai/directory` adresine gidin veya herhangi bir sohbette `+` > **Connectors** seçeneğine tıklayın.
2.  **Bağlan (Connect) butonuna tıklayın**: Eklemek istediğiniz bağlayıcıyı seçin.
3.  **Kimlik Doğrulama (Authenticate)**: Servisin giriş sayfasına yönlendirileceksiniz. Mevcut kullanıcı bilgilerinizle giriş yapın.
4.  **İzinleri Verin (Grant permissions)**: Claude'un talep ettiği belirli izinleri inceleyin ve erişimi yetkilendirin.
5.  **Bağlantıyı Test Edin**: Claude'a geri dönün ve *"Can you access my [araç adı]?"* gibi basit bir istekte bulunarak bağlantıyı test edin.

Bağlantı kurulduktan sonra Claude, verdiğiniz izinlere bağlı olarak o servis içinde arama yapabilir, verileri okuyabilir ve bazı durumlarda otonom eylemler (**actions**) gerçekleştirebilir.

#### Masaüstü Uzantıları (Desktop Extensions)

Masaüstü uzantıları, web arayüzü yerine Claude Masaüstü (Claude Desktop) uygulamalarını gerektirir. Bu uzantılar, Claude'un yerel uygulamalarla, dosya sisteminizle ve macOS veya Windows'taki yerel özelliklerle etkileşime girmesini sağlar.

Bazı masaüstü uzantıları şunlardır:
*   Belgeleri okumak ve düzenlemek için **yerel dosya erişimi (local file access)**.
*   Otomatik web görevleri için **tarayıcı kontrolü (browser control)**.
*   Tasarım işleri için **yerel uygulama entegrasyonu (Figma gibi)**.

Bir masaüstü uzantısı yüklemek için:
1.  Claude Masaüstü (Claude Desktop) uygulaması indirin ve kurun.
2.  Uygulamayı açın ve **Settings > Extensions** (Ayarlar > Uzantılar) menüsüne gidin.
3.  Mevcut uzantılara göz atın ve **Install** (Yükle) butonuna tıklayın.
4.  O uzantıya özel ek kurulum adımlarını takip edin.

### Bağlayıcıları İşinizde Kullanmak (Using Connectors in Your Work)

Araçlarınızı bağladıktan sonra, Claude isteklerinize yanıt verirken bu araçları göz önünde bulundurur. Bağlı araçları kullanmanın bazı pratik yolları şunlardır:

#### Proje Yönetimi (Asana, Linear, Jira)
*   *"Bu hafta teslim edilmesi gereken en yüksek öncelikli görevlerim nelerdir?"*
*   *"Q4 bütçe teklifini incelemek için yeni bir görev oluştur."*
*   *"Ürün lansmanı projemizin durumunu özetle."*

#### İletişim (Slack, Gmail)
*   *"Tedarikçi sözleşmesini tartıştığımız e-posta yazışmasını bul."*
*   *"#marketing kanalındaki en son mesaja bir yanıt taslağı hazırla."*
*   *"Ekip, dünkü tartışmada zaman çizelgesi hakkında neye karar verdi?"*

#### Dokümantasyon (Notion, Google Drive, Confluence)
*   *"Dokümantasyonumuzda marka sesi (brand voice) kılavuzumuzu ara."*
*   *"Geçen haftaki ürün incelemesi toplantı notlarını özetle."*
*   *"Stil rehberimiz kısaltmaların kullanımı hakkında ne diyor?"*

#### İş Araçları (Stripe, PayPal, Salesforce)
*   *"Bana geçen çeyreğin gelir eğilimlerini göster."*
*   *"Acme Corp fırsatının (opportunity) durumu nedir?"*
*   *"1.000 doların üzerindeki son işlemleri listele."*

### Güvenlik ve İzin Yönetimi (Security and Permissions)

Claude'u harici servislere bağladığınızda, ona bu servisler içindeki verileri okuma—ve bazen değiştirme—yetkisi vermiş olursunuz. İşte dikkat edilmesi gereken bazı önemli hususlar:

*   **Kapsamlı Erişim (Scoped Access):** İzinler, bağlayıcının tam olarak neye ihtiyaç duyduğuna göre belirlenir ve her uygulamanın menüsü altından bireysel izinleri açıp kapatabilirsiniz.
*   **Claude Sadece Sizin Gördüğünüzü Görür:** Claude yalnızca sizin erişim hakkınız olan verilere erişebilir. İş e-postanızı bağlamak, Claude'a şirket yöneticinizin (CEO) gelen kutusuna erişim hakkı vermez; sadece kendi gelen kutunuza erişebilirsiniz.
*   **Erişim Her An Geri Çekilebilir (Revocable):** Bir servisin bağlantısını Claude'un ayarlarından veya üçüncü taraf servisin güvenlik ayarlarından dilediğiniz an kesebilirsiniz. Becerilerde olduğu gibi, özel bağlayıcılar (custom connectors) bulabilir veya kendiniz inşa edebilirsiniz. Burada da aynı dikkati gösterin: Yalnızca güvenilir kaynaklardan gelen bağlayıcıları kurun.

### Claude Arayüzleri ve Entegrasyon Matrisi

Claude'u iş akışlarınıza entegre etmek için sadece masaüstü uygulamasıyla sınırlı değilsiniz. Anthropic, kullanım senaryolarına göre optimize edilmiş geniş bir entegrasyon yelpazesi sunar:

| Arayüz / Entegrasyon | Temel Yetenekler / Görevler | Çalıştığı Platformlar |
| :--- | :--- | :--- |
| **Claude.ai** | Genel görevler, araştırma, yazma, analiz, dosya oluşturma. | Web tarayıcısı, masaüstü ve mobil uygulamalar. |
| **Claude Code** | Yazılım geliştirme, kod tabanında gezinme, git iş akışları. | Terminal / komut satırı, IDE veya tarayıcı. |
| **Claude Cowork** | Karmaşık, çok adımlı görevler; araştırma raporları, belge oluşturma, dosya düzenleme, veri analizi. | Masaüstü uygulaması (ve Dispatch üzerinden mobil). |
| **Slack Entegrasyonu** | Ekip iş birliği, toplantı hazırlığı, bağlam içi hızlı cevaplar. | Slack çalışma alanı. |
| **Claude for Excel** | E-tablo analizi, finansal modelleme, formül hata ayıklama. | Microsoft Excel yan çubuğu. |
| **Claude for PowerPoint** | Slayt oluşturma, sunum düzenleme, biçimlendirme ve tasarım. | Microsoft PowerPoint yan çubuğu. |
| **Claude for Chrome** | Web araştırması, e-posta yönetimi, tarayıcı otomasyonu. | Chrome tarayıcı yan çubuğu. |

### Bu Bölümün Önemli Konseptleri

*   **Connectors (Bağlayıcılar):** Claude'un harici araçlara, veri tabanlarına ve bulut uygulamalarına doğrudan erişmesini sağlayan veri entegrasyon yolları.
*   **Model Context Protocol (MCP):** Yapay zekanın farklı uygulama ve veri kaynaklarıyla tek bir tutarlı protokol üzerinden iletişim kurmasını sağlayan açık kaynaklı, evrensel entegrasyon standardı.
*   **Desktop Extensions (Masaüstü Uzantıları):** Claude Masaüstü uygulamasının yerel bilgisayardaki dosyalara ve işletim sistemi yeteneklerine erişmesini sağlayan yerel bağlayıcılar.
*   **Authenticate (Kimlik Doğrulama):** Bir kullanıcının veya sistemin kimliğini doğrulayarak sisteme güvenli giriş yapmasını sağlama süreci.
*   **Grant Permissions (Erişim İzinleri):** Bir uygulamaya veya yapay zekaya, belirli verilere erişmesi veya eylemler gerçekleştirmesi için yetki sınırları atamak.
*   **Browser Control (Tarayıcı Kontrolü):** Yapay zekanın yerel tarayıcıyı otonom olarak yönlendirerek web sitelerinde gezinme, veri toplama veya web tabanlı görevleri yürütme yeteneği.
*   **Opportunity (Fırsat):** Satış ve CRM sistemlerinde, potansiyel müşteri anlaşmaları veya ticari fırsatları temsil eden yapılandırılmış veri kaydı.
*   **Scoped Access (Kapsamlı Erişim):** Bir servisin veya eklentinin tüm sisteme değil, sadece önceden yetkilendirilmiş kısıtlı veri alanlarına erişebilmesi durumu.
*   **Revocable (İptal Edilebilir):** Kullanıcı tarafından harici bir entegrasyona verilen erişim yetkisinin veya anahtarının her an geri çekilebilir olması özelliği.

## Kurumsal Arama

Kurumsal Arama (Enterprise Search), Claude arayüzündeki yan menünüze özel bir **"Ask {Şirket Adınız}"** (Şirket Adına Sor) seçeneği ekler. Bu özellik; şirketinizin farklı araçları ve veri kaynakları arasında dağılmış olan kurumsal bilgileri bulmak ve sentezlemek için özel olarak tasarlanmıştır.

Kurumsal Arama'yı, tüm organizasyonunuz için önceden kurulmuş devasa bir Proje (Project) gibi düşünebilirsiniz; şirketinizin bilgi tabanı (knowledge base) sisteme zaten yüklenmiştir, böylece sorularınıza bağlama duyarlı yanıtlar almak için doğrudan aramaya başlayabilirsiniz.

Standart sohbetlerin aksine Kurumsal Arama, Anthropic ekibi tarafından özel olarak yapılandırılmış ve sadece bilgi toplamaya odaklanmış özel sistem talimatları ile çalışır.

### Kurumsal Arama ile Neler Sorabilirsiniz?

Kurumsal Arama, birden fazla bilgi kaynağını taramayı veya şirket genelinden gelen verileri tek bir yerde sentezlemeyi gerektiren durumlarda son derece değerlidir. İşte en yaygın kullanım senaryolarından bazıleri:

*   **Gelişmelerden Haberdar Olmak (Getting up to speed):**
    *   *"Dün ben izinliyken şirket genelinde neler konuşuldu?"*
    *   *"Geçen haftaki iş güncellemelerini ve ilerleme durumlarını özetle."*
    *   *"Platform projesindeki güncel engelleyiciler (blockers) nelerdir?"*
*   **Politika ve Süreç Soruları:**
    *   *"Uzaktan çalışma politikamız hakkında bilgi ver."*
    *   *"Masraf formunu teslim etme süreci nasıldır?"*
    *   *"İzin talebi göndermek için hangi adımları izlemeliyim?"*
*   **Araştırma ve Analiz:**
    *   *"Müşterilerin rakipleri tercih etme sebepleri nelerdir?"*
    *   *"Q4 ürün yol haritası (product roadmap) hakkındaki toplantı notlarını özetle."*
    *   *"Müşteri adaptasyon (onboarding) sürecimiz hakkında bilgi bul."*
*   **Yeni Ekip Üyelerinin Oryantasyonu:**
    *   *"Kimlik doğrulama (authentication) sistemimiz nasıl çalışıyor?"*
    *   *"Faturalandırma altyapısını öğrenmek için kiminle görüşmeliyim?"*
    *   *"Mühendislik ekibimiz deployment için hangi araçları tercih ediyor?"*
*   **Performans ve Proje Takibi:**
    *   *"Yeni pazarlama kampanyasıyla ilgili tüm belgeleri ve yazışmaları listele."*
    *   *"Geçen haftaki liderlik toplantısında alınan kritik kararlar nelerdi?"*
    *   *"Altyapı (Infrastructure) girişimine yapılan ekip katkılarını özetle."*

Bir soru sorduğunuzda Claude; SharePoint belgeleri, Slack kanalları, Gmail yazışmaları ve Google Drive dosyaları gibi tüm bağlı kurumsal araçlarınızda arama yapar, bilgileri sentezler ve yanıt üretir. Üstelik yanıtın doğruluğunu denetleyebilmeniz için **her zaman yararlandığı kaynakları belirtir (cites its sources)**.

### Kurumsal Aramayı Kurmak (Setting Up Enterprise Search)

Kurumsal Arama, iki adımlı bir kurulum süreci gerektirir: ilk olarak bir yönetici (**admin**) bunu organizasyon için yapılandırır, ardından bireysel kullanıcılar kendi kişisel hesaplarıyla kimlik doğrulaması (**authenticate**) yapar.

#### Yöneticiler (Owners) İçin

Kurumsal Arama projesi, tüm Team ve Enterprise organizasyonları için varsayılan olarak etkindir; ancak ekip üyelerinin bunu kullanabilmesi için önce bir Sahibin (**Owner**) ilk kurulumu tamamlaması gerekir:
1. Sol yan menüdeki **"Ask Your Org"** (Şirketinize Sorun) seçeneğine tıklayın.
2. Devam etmek için **"Set up for your org"** (Şirketiniz için kurun) seçeneğine tıklayın (veya özelliği kapatmak için "Disable"ı seçin).
3. Organizasyonunuzun araçlarını bağlayın. Belgeler (**Documents** - Google Drive veya SharePoint gibi) ve Sohbet (**Chat** - Slack veya Microsoft Teams gibi) için birer bağlayıcı seçmeniz gerekecektir. E-posta önerilir ancak isteğe bağlıdır.
4. Ekibinizin ihtiyaç duyduğu diğer araçları kurmak için **"+ Add more"** (Daha fazla ekle) seçeneğine tıklayın.
5. Proje adını özelleştirin. Girdiğiniz isim, herkesin yan menüsünde *"Ask [İsim]"* şeklinde görünecektir.
6. Bir açıklama ekleyin ve ardından **"Finish set up"** (Kurulumu bitir) seçeneğine tıklayın.

Kurulum tamamlandıktan sonra proje, organizasyonunuzun tüm üyeleri için kullanılabilir hale gelir.

#### Kullanıcılar İçin

Bir yönetici Kurumsal Aramayı kurduktan sonra, yan menünüzde yıldızlı bir *"Ask {Org Name}"* projesi göreceksiniz. Başlamak için şu adımları izleyebilirsiniz:
1. Yan menünüzdeki projeye tıklayın.
2. Önerilen hizmetlere bağlanmak için rehberli adaptasyon (**guided onboarding**) akışını takip edin.
3. Aramak istediğiniz her bir hizmetle (Slack, Google, Microsoft 365 vb.) kimlik doğrulaması (**authenticate**) yapın.
4. Claude'a organizasyonunuzun bilgileri hakkında sorular sormaya başlayın.

Ne kadar çok bağlayıcıyı etkinleştirirseniz, arama sonuçlarınız o kadar kapsamlı olacaktır. İstediğiniz zaman projenin Talimatlar (Instructions) bölümündeki "Connect" (Bağlan) butonuna tıklayarak daha sonra da yeni bağlayıcılar ekleyebilirsiniz.

#### Bu çok fazla veri... Peki güvenli mi?

Kısacası, evet. Kurumsal Arama, yalnızca orijinal bağlı araçta zaten erişim izniniz olan bilgileri gösterir. Ayrıca sohbetleriniz gizli kalır ve bağlı verileriniz ayrı olarak indekslenmez (**indexed**) veya depolanmaz.

### Bu Bölümün Önemli Konseptleri

*   **Enterprise Search (Kurumsal Arama):** Kuruluş genelinde arama yapabilen, yan menüde özel bir sekme halinde sunulan organizasyon düzeyinde akıllı arama platformu.
*   **Blocker (Engelleyici):** Yazılım süreçlerinde bir işin veya görevin tamamlanmasını tamamen engelleyen ya da geciktiren teknik veya operasyonel aksaklık.
*   **Onboarding (Oryantasyon):** Şirkete yeni katılan çalışanların veya bir sistemi ilk defa kullanacak kişilerin entegrasyon, eğitim ve adaptasyon süreci.
*   **Cite Sources (Kaynak Belirtme):** Yapay zekanın yanıt üretirken kullandığı harici belgelerin, konuşmaların veya e-postaların orijinal konumlarını atıf olarak sunması.
*   **Owner (Organizasyon Sahibi):** Bir SaaS uygulamasında veya platformda organizasyon yönetimi, faturalandırma ve genel yapılandırma izinlerine sahip üst düzey yönetici rolü.
*   **Guided Onboarding (Rehberli Adaptasyon):** Kullanıcının bir sisteme veya eklentiye ilk kurulum aşamalarını kolaylaştırmak için sunulan etkileşimli, adım adım yönlendirme akışı.
*   **Indexed (İndekslenmiş):** Aramaları hızlandırmak amacıyla verilerin taranarak harici bir dizinde veya veri tabanında yapılandırılmış şekilde saklanması işlemi.

## Araştırma Modu

Araştırma özelliği, Claude'un bilgiyi bulma ve analiz etme yöntemini dönüştürür. Claude, tek bir arama yapmak yerine, bir sonraki aşamada neyi inceleyeceğine karar verirken birbiri üzerine inşa edilen çoklu aramalar yürüterek otonom (**agentic**) bir şekilde çalışır. Sorunuzun farklı açılarını otomatik olarak keşfeder ve açık uçlu soruları sistematik bir şekilde çözer.

Araştırma raporları, konunun karmaşıklığına bağlı olarak 5 ila 45 dakika arasında tamamlanmaktadır.

Araştırma ile birlikte derin düşünme (**extended thinking**) özelliği otomatik olarak etkinleştirilir. Bu güçlü kombinasyon, Claude'un hem yaklaşımını düşünceli bir şekilde planlamasını hem de kapsamlı bilgileri toplamasını sağlayarak karmaşık istekleri yönetilebilir parçalara böler.

Atıflar (**citations**) doğrulamayı kolaylaştırır. Araştırma, kontrol edilmesi kolay kaynak atıflarıyla tamamlanan eksiksiz ve ayrıntılı yanıtlar sunar; böylece Claude'un bulgularına güvenebilir ve kaynakları kendiniz hızlıca doğrulayabilirsiniz.

### Araştırma (Research) Nedir?

Araştırma, Claude'un karmaşık soruları yanıtlamak veya bir konu hakkında kapsamlı bilgi toplamak için derinlemesine, çok adımlı web aramaları yapmasını sağlayan bir yetenektir. Araştırma özelliğini etkinleştirdiğinizde Claude:

*   Sorgunuza dayalı bir araştırma planı formüle eder.
*   Yüksek kaliteli web kaynaklarını bulmak için arama sorguları yürütür.
*   İlgili bilgileri çıkarmak için elde edilen sayfaları analiz eder.
*   Mevcut bilgisindeki boşlukları belirler ve takip aramaları gerçekleştirir.
*   Bulguları atıfta bulunulmuş kapsamlı bir rapor halinde sentezler.

Tek bir arama sonuçları kümesi getiren standart web aramasının aksine Araştırma, konu hakkında daha fazla bilgi edindikçe arama stratejisini dinamik olarak uyarlayan yinelenmeli (**iterative**) ve otonom (**agentic**) bir döngüdür.

### Sonuç: Neler Öğrendik?

Bu Claude 101 rehberinde, basit bir chatbot mantığının ötesine geçerek Claude'u nasıl tam donanımlı bir "düşünce ortağı" (thought partner) olarak konumlandırabileceğimizi gördük. İşte rehber boyunca edindiğimiz en önemli kazanımlar:

*   **Claude ile Başlamak:** Claude; Constitutional AI temelli faydalı, zararsız ve dürüst bir yardımcıdır. Web, mobil ve masaüstü arayüzleriyle her cihazda senkronize çalışır.
*   **Daha İyi Sonuçlar Almak:** Yineleme (iteration) esastır. Yapay Zeka Akıcılığı (AI Fluency) ise şu dört temel yetkinliği barındırır: Delege Etme (Delegation), Tanımlama (Description), Ayırt Etme (Discernment) ve Özen (Diligence).
*   **Çalışmaları Organize Etmek:** Projeler (Projects) kalıcı bağlam ve ekip iş birliği sunan bilgi merkezleridir. Artifacts, sohbetin yanında derlenen etkileşimli ve bağımsız çıktılardır. Beceriler (Skills) ise Claude'a uzmanlık katan otonom iş akışı paketleridir.
*   **Claude'un Erişimini Genişletmek:** Bağlayıcılar (Connectors), Claude'u Google Workspace, Notion veya Slack gibi kendi verilerinize bağlar. Kurumsal Arama (Enterprise Search) organizasyon genelinde arama yapmayı sağlar. Araştırma Modu (Research Mode) ise manuel aramaları dakikalara indiren otonom bir tarama döngüsüdür.
*   **Hepsini Bir Araya Getirmek:** Claude; yazılım, satış, pazarlama, finans, İK ve hukuk gibi birçok rolde kullanılabilir. Ayrıca `claude.ai` haricinde Claude Code, Slack, Excel ve Chrome eklentileriyle doğrudan iş akışlarınıza entegre olur.

### Bu Bölümün Önemli Konseptleri

*   **Research Mode (Araştırma Modu):** Claude'un internet üzerinde çok adımlı, yinelemeli aramalar yaparak kapsamlı raporlar oluşturmasını sağlayan otonom araştırma yeteneği.
*   **Extended Thinking (Derin Düşünme):** Modelin karmaşık problemleri analiz ederken, yanıt üretmeden önce daha uzun akıl yürütme adımları ve planlama yapmasını sağlayan altyapı.
*   **Agentic Search (Ajan Tabanlı Arama):** Yapay zekanın arama yaparken kendi kararlarını vererek, bulduğu sonuçlara göre yeni takip sorguları oluşturması ve araştırmayı bağımsız sürdürmesi.
*   **Citations (Kaynak Atıfları):** Üretilen araştırma raporunda, bilgilerin hangi web sitelerinden veya belgelerden alındığını gösteren tıklanabilir doğrulama bağlantıları.
*   **Deep Dive (Derinlemesine Analiz):** Bir konu hakkında yüzeyel özet geçmek yerine, tüm alt detayları, teknik parametreleri ve farklı kaynaklardaki görüşleri tarayarak yapılan detaylı inceleme.
*   **Systematic Investigation (Sistematik İnceleme):** Araştırma konusunun rastgele aramalar yerine, belirli bir plan dahilinde adım adım ve bilgi boşlukları doldurularak düzenli olarak sorgulanması süreci.
