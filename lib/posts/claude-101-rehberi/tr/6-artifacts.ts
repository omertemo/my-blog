export const content = `
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

<p>Bir artifact oluşturmak için yapmak veya tasarlamak istediğiniz şeyi doğal dilde tarif edebilirsiniz. Claude, içeriğin uzunluğuna ve yapısına göre bunu bir artifact olarak sunup sunmayacağına karar verir.</p>

<p>Örneğin, şu prompt'ları kullanabilirsiniz:</p>

<ul>
  <li><em>"Müşteri katılım (onboarding) sürecimizi gösteren bir akış şeması oluştur."</em> (Not: Claude artık kod tabanlı diyagramların yanı sıra, Imagine özelliğini kullanarak bunları HTML formatında görsel şemalar olarak da üretebilir.)</li>

  <li><em>"Aylık giderlerimi girebileceğim ve dökümleri görebileceğim etkileşimli bir dashboard geliştir."</em></li>

  <li><em>"Hero bölümü ve özellik listesi olan bir üretkenlik uygulaması için landing page tasarla."</em></li>

  <li><em>"Projelerimde tekrar kullanabileceğim bir proje özeti şablonu yaz."</em></li>
</ul>

<p>Claude beklediğiniz durumlarda otomatik olarak bir artifact oluşturmazsa, ona <em>"Bunu bir artifact olarak oluştur"</em> veya <em>"Bunu bana bir artifact içinde göster"</em> diyerek bu yapıyı açıkça tetikleyebilirsiniz.</p>

<p>Claude bir artifact ürettiğinde, bu çıktı sohbet pencerenizin sağında bağımsız bir pencerede açılır. Bu pencere üzerinden şu işlemleri yapabilirsiniz:</p>

<ul>
  <li><strong>Formatlar Arasında Geçiş Yapma:</strong> Canlı görünüm (<strong>Preview</strong>) ile kaynak kod (<strong>underlying code</strong>) arasında geçiş yapabilirsiniz (<strong>toggle</strong>).</li>

  <li><strong>Kopyalama:</strong> Kodun veya içeriğin tamamını tek tıkla kopyalayıp başka bir yere yapıştırabilirsiniz.</li>

  <li><strong>Dosya İndirme:</strong> Üretilen dosyayı doğrudan bilgisayarınıza indirebilirsiniz.</li>

  <li><strong>Kod Analizi:</strong> Claude'un arka planda nasıl bir kod yapısı kurduğunu inceleyebilirsiniz.</li>
</ul>

<h3>Artifact'leri Paylaşmak ve Yayınlamak</h3>

<p>Bir artifact oluşturduktan sonra, bunu başkalarıyla paylaşmak için çeşitli yollara sahipsiniz:</p>

<ul>
  <li><strong>Yerel Kopyalama veya İndirme:</strong> Kişisel projelerinizde kullanmak için sağ alt köşedeki kopyalama veya indirme butonlarını kullanabilirsiniz.</li>

  <li><strong>Organizasyon İçi Güvenli Paylaşım (Claude for Work):</strong> Team ve Enterprise planlarındaki kullanıcılar, hazırladıkları artifact'leri organizasyon içinde güvenle paylaşabilirler. Paylaşılan dosyalara erişim için ekip kimlik doğrulaması (<strong>authentication</strong>) gerekir.</li>

  <li><strong>Herkese Açık Yayınlama (Public Publishing):</strong> Free, Pro veya Max kullanıcısıysanız, oluşturduğunuz aracı herkese açık hale getirebilirsiniz. Bu durumda:
    <ul>
      <li>Yalnızca seçtiğiniz belirli sürüm (versiyon) dışa açılır; Claude ile yaptığınız özel sohbet geçmişi tamamen gizli kalır.</li>
      <li>Claude hesabı olmayan kişiler bile paylaştığınız linke tıklayarak artifact'i görüntüleyebilir ve onunla etkileşime girebilir.</li>
      <li>Diğer kullanıcılar çalışmanızı "<strong>remix</strong>" edebilir; yani tek tıkla kendi Claude sohbetlerine kopyalayarak üzerinde değişiklik yapmaya ve geliştirmeye devam edebilirler.</li>
    </ul>
  </li>
</ul>

<p>Oluşturduğunuz aracı yayınlamak için sağ üstteki "Share" veya "Publish" butonunu kullanabilirsiniz. Fikrinizi değiştirirseniz, istediğiniz zaman herkese açık erişimi kaldırarak yayından çekebilirsiniz (<strong>unpublish</strong>). Yayınlanan artifact'ler arama motorları (Google vb.) tarafından dizine eklenmez (<strong>not indexed</strong>), bu nedenle arama sonuçlarında doğrudan listelenmezler.</p>

<h3>Artifacts İçin En İyi Pratikler (Best Practices)</h3>

<p>Artifacts özelliğinden verim almak için şu ipuçlarına dikkat edebilirsiniz:</p>

<ul>
  <li><strong>Prompt Yazarken Spesifik Olun:</strong> "Bir bütçe takipçisi yap" yerine, "Giderleri kategori bazlı girebileceğim, harcama dağılımını pasta grafikle (<strong>pie chart</strong>) gösteren ve bütçe aşıldığında uyarı veren aylık bir bütçe takipçisi geliştir" şeklinde detay vermek daha iyi sonuçlar üretir.</li>

  <li><strong>Hedef Kullanıcıyı (End User) Tanımlayın:</strong> Claude'a bu aracı kimin kullanacağını belirtmek tasarım kararlarını etkiler. "Bu akış şeması yeni çalışanlar için" yönergesi ile "Mühendislik ekibi için" yönergesi Claude'un farklı görsel diller seçmesini sağlar.</li>

  <li><strong>Adım Adım Geliştirin (Iterate Incrementally):</strong> Claude'dan tüm özellikleri tek seferde istemek yerine, her adımda tek bir özellik eklemesini veya değişiklik yapmasını talep edin. Bu, hata ayıklamayı (<strong>debugging</strong>) kolaylaştırır.</li>

  <li><strong>Gerektiğinde Manuel Talep Edin:</strong> Büyük bir kod bloğu istediğiniz halde Claude bunu normal sohbet penceresinde verirse, <em>"Bunu bir artifact olarak oluştur"</em> diyerek sistemi yönlendirebilirsiniz.</li>
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
`;
