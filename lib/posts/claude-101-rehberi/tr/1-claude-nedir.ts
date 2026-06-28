export const content = `
<p>Geliştiriciler ve ofis çalışanları olarak her gün onlarca problemi çözmeye çalışıyoruz. Son birkaç yıldır yapay zeka araçları bu süreçlerin ayrılmaz bir parçası haline geldi. Ancak pek çok araç sadece basit birer soru-cevap asistanı (chatbot) olmanın ötesine geçemiyor. Anthropic tarafından geliştirilen Claude, soru-cevap işlevlerinin yanı sıra kullanıcıyla birlikte çalışabilen, otonom yeteneklere sahip bir asistan olarak tasarlanmıştır.</p> 

<h2>Claude Nedir?</h2>

<p>Claude, Anthropic'in tasarım tercihleri doğrultusunda şekillenen bir iletişim tonuna sahiptir. Model; faydalı (helpful), zararsız (harmless) ve dürüst (honest) olmak üzere üç temel ilke (HHH felsefesi) gözetilerek geliştirilmiştir.</p>

<h3>1. Constitutional AI (Anayasal Yapay Zeka)</h3>
<p>Geleneksel yapay zeka modelleri genellikle insan geri bildirimleriyle pekiştirmeli öğrenme (RLHF) süreçlerine dayanırken, Claude'un arkasındaki temel fark <strong>Constitutional AI</strong> adı verilen yöntemdir. Bu yöntemde modele; insan hakları bildirgeleri ve etik kurallardan oluşan yazılı bir kurallar seti ("anayasa") sağlanır. Model, eğitim sırasında kendi yanıtlarının bu kurallara uygunluğunu değerlendirir. Böylece, çıktılardaki önyargı ve güvenlik risklerinin en aza indirilmesi hedeflenir.</p>

<h3>2. Geniş Bağlam Penceresi (Context Window)</h3>
<p>Desteklenen modellerinde standart planlarda 200 bin, kurumsal ve Pro planlarda ise 1 milyon <strong>token</strong>'a kadar geniş bir <strong>context window</strong> (bağlam penceresi) sunulmaktadır. Bu geniş <strong>context window</strong> (bağlam penceresi), büyük boyutlu kod tabanlarını, dokümantasyonları veya uzun metinleri tek bir sohbet oturumunda işleme alabilmeyi sağlar. Böylece projeleri veya kütüphane belgelerini doğrudan girdi olarak ekleyip analiz ettirmek mümkündür.</p>

<h3>3. Yönlendirilebilirlik (Steerability)</h3>
<p>Yönlendirilebilirlik (<strong>steerability</strong>), modelin verilen sistem talimatlarına ve rol tanımlarına uyum sağlama derecesini ifade eder. Sistem istemleri (system prompts) aracılığıyla modele belirli kısıtlamalar ve kurallar (örneğin "Sadece TypeScript yaz ve her fonksiyona JSDoc ekle") tanımlayarak çıktıların belirli standartlarda kalması sağlanabilir.</p>

<h3>Bu Bölümün Önemli Konseptleri</h3>

<ul>
  <li><strong>Constitutional AI (Anayasal Yapay Zeka):</strong> Modelin insan geri bildirimleriyle eğitilirken, belirli bir yazılı kurallar setine (anayasa) göre kendi çıktılarını denetleyip düzeltmesini sağlayan Anthropic eğitim metodu.</li>

  <li><strong>Context Window (Bağlam Penceresi):</strong> Yapay zeka modelinin tek bir konuşma oturumunda aklında tutabildiği ve işleyebildiği maksimum veri miktarı.</li>

  <li><strong>Steerability (Yönlendirilebilirlik):</strong> Modelin kendisine verilen sistem yönergelerine, karakter kısıtlamalarına ve çıktı formatlarına sıkı sıkıya uyma becerisi.</li>

  <li><strong>Token:</strong> Yapay zekanın metinleri işlemek için böldüğü en küçük anlamlı hece veya karakter grubu (yaklaşık 1 kelime = 1.3 token).</li>

  <li><strong>Alignment (Hizalama/Uyumlanma):</strong> Yapay zeka sisteminin kararlarının, hedeflerinin ve çıktılarının insan değerleri ve etik kurallarıyla uyumlu hale getirilmesi süreci.</li>
</ul>
`;
