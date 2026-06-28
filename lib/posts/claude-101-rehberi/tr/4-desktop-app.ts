export const content = `
<h2>Claude Masaüstü Uygulaması: Chat, Cowork, Code</h2>

<p>Claude masaüstü uygulaması (desktop app), kullanıcıya ihtiyacına göre geçiş yapabileceği üç farklı çalışma modu sunar:</p>

<ul>
  <li><strong>Chat:</strong> Web sürümünden tanıdığımız klasik sohbet arayüzüdür. Ancak işletim sistemiyle kurduğu yerel (native) entegrasyon sayesinde çeşitli pratik özellikler sunar. Örneğin, Mac'te <strong>Option</strong> tuşuna çift tıklayarak (<strong>double-tap</strong>) yaptığınız işi bölmeden ekranın üzerinde yüzen bir <strong>Quick Entry</strong> (Hızlı Giriş) penceresi açabilirsiniz. Ekran görüntülerini doğrudan paylaşabilir, klavye kullanmak istemediğinizde <strong>dikte (dictation)</strong> ile konuşarak yazdırabilirsiniz. Ayrıca yerel bağlayıcılar (<strong>desktop connectors</strong>) sayesinde <strong>Apple Notes</strong> gibi bilgisayarınızdaki uygulamaları bağlayıp Claude'un yerel notlarınızı okuyup analiz etmesini sağlayabilirsiniz.</li>

  <li><strong>Cowork:</strong> Büyük hedefleri alıp bağlanan araçlar yardımıyla otonom olarak yürüten <strong>agentic</strong> (otonom ajan tabanlı) bir çalışma modudur. Projeleri bölümlere ayırarak arka planda paralel çalışan alt ajanlar (<strong>subagents</strong>) başlatabilir. Klasör bazlı dosya okuma ve yazma işlemlerini yürütebilir, <strong>scheduled tasks</strong> (zamanlanmış görevler) özelliğiyle Slack ve e-postalarınızdan günlük raporlar hazırlayabilir. <strong>Browser use</strong> ile web sitelerinde otonom gezinebilir ve hatta macOS üzerinde doğrudan tıklama ve klavye hareketleriyle bilgisayarı kontrol edebilir (<strong>computer use</strong>). Ayrıca <strong>Dispatch</strong> özelliği sayesinde, bilgisayarınız açık olduğu sürece telefonunuzdaki mobil uygulama üzerinden bilgisayardaki Claude'a görev devredebilirsiniz.</li>

  <li><strong>Code:</strong> Kod yazmak, testleri çalıştırmak ve projeyi canlıya almak (<strong>deploy</strong>) gibi tamamen yazılım geliştirme süreçlerine özeldir. Yerel klasörünüzde çalışabildiği gibi (<strong>local</strong>), buluttaki bir <strong>GitHub</strong> deposuna da bağlanabilir (<strong>remote</strong>). Claude'un otonomluk düzeyini belirleyen üç etkileşim moduna sahiptir: <strong>Ask</strong> (değişiklikleri yapmadan önce görsel diff ile onay bekler), <strong>Code</strong> (dosyaları doğrudan yazar ancak terminal komutlarından önce onay ister) ve <strong>Plan</strong> (kod yazmadan önce detaylı bir yol haritası sunar). Tüm süreç entegre <strong>git</strong> sistemiyle sürüm sürüm izlenir.</li>
</ul>

<p><strong>Cowork</strong> ve <strong>Code</strong> modları arka planda aynı yerel motor altyapısını (<strong>Claude Code</strong>) paylaşır. Her ikisi de makinenizde bağımsız çalışabilir, <strong>sub-agent</strong>'lar (alt ajanlar) başlatabilir ve uzun süreli görevleri sürdürebilir.</p>

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
`;
