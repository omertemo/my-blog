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
    slug: "claude-code-uzmanlik-rehberi-1",
    title: {
      tr: "Claude Code Uzmanlık Rehberi: Bölüm 1 – Temeller ve Akıllı Bağlam Yönetimi",
      en: "Claude Code Mastery Guide: Chapter 1 – Basics and Smart Context Management",
    },
    desc: {
      tr: "Kurulumdan oturum yönetimine; CLAUDE.md'den token tasarrufuna kadar Claude Code'un temel özelliklerini ve slash komutlarını keşfedin.",
      en: "From installation to session management; explore Claude Code's core features including CLAUDE.md, slash commands, and token-saving strategies.",
    },
    tag: "Claude Code",
    tagVariant: "purple",
    emoji: "🤖",
    readTime: 7,
    date: "2026-06-17",
    published: true,
    content: {
      tr: `
<p>Claude Code, standart bir yapay zeka sohbet arayüzü değildir. Terminalinizde çalışan, dosya sisteminize erişebilen, testlerinizi koşturabilen ve Git operasyonlarını yönetebilen gelişmiş bir CLI Geliştirici Ajanıdır.</p>

<h2>Kurulum</h2>
<p>Claude Code'u kullanmaya başlamak için önce npm üzerinden global olarak yüklemeniz gerekiyor:</p>
<pre><code>npm install -g @anthropic-ai/claude-code</code></pre>
<p>Ardından Anthropic API anahtarınızı ortam değişkeni olarak tanımlayın:</p>
<pre><code>export ANTHROPIC_API_KEY="sk-ant-..."</code></pre>
<p>Bu satırı <code>~/.zshrc</code> veya <code>~/.bashrc</code> dosyanıza eklerseniz her oturumda tekrar tanımlamanıza gerek kalmaz. API anahtarını console.anthropic.com adresinden edinebilirsiniz.</p>

<h2>Temel CLI Başlangıç Komutları</h2>
<ul>
  <li><code>claude</code> — İnteraktif terminal oturumunu başlatır.</li>
  <li><code>claude "explain this project"</code> — Doğrudan bir görev veya soruyla oturumu tetikler.</li>
  <li><code>claude -c</code> / <code>--continue</code> — Mevcut dizindeki en son konuşmaya kaldığın yerden devam eder. Bağlamı tekrar anlatmak zorunda kalmazsın!</li>
  <li><code>claude -p "query"</code> — Sadece tek bir komut çalıştırıp cevabı alır ve terminalden çıkar. Script otomasyonları için harikadır.</li>
</ul>

<h2>Hayat Kurtaran Slash Komutları</h2>
<p>Claude içerisindeyken terminale yön veren en kritik komutlar:</p>
<ul>
  <li><code>/help</code> — Kullanılabilir tüm slash komutlarını listeler. Claude Code'a ilk başladığınızda çalıştırmanızı öneririm.</li>
  <li><code>/config</code> (veya <code>/settings</code>) — Temayı, varsayılan modeli ve çıktı stillerini özelleştirebileceğiniz arayüzü açar.</li>
  <li><code>/context</code> — Token kullanımını renkli bir grid grafiği olarak görselleştirir. Hafızayı neyin şişirdiğini nokta atışı gösterir.</li>
  <li><code>/compact [talimatlar]</code> — <strong>Token Cankurtaranı.</strong> Hafıza %80'i geçtiğinde geçmişi özetler ve temizler. <code>/compact Focus on tests</code> diyerek sadece test odaklı kısımları aklında tutmasını sağlayabilirsin.</li>
  <li><code>/cost</code> — Mevcut oturumda harcanan token sayısını ve tahmini maliyeti gösterir. Uzun oturumlarda ne kadar harcadığınızı takip etmek için idealdir.</li>
  <li><code>/clear</code> (veya <code>/reset</code>) — Geçmişi tamamen sıfırlar. Farklı bir göreve geçerken context karmaşasını önlemek için şarttır.</li>
  <li><code>/model [model_adı]</code> — Oturumu kapatmadan model değiştirir. Kod okuma/keşif için hızlı model, ağır refactor için üst model — maliyet ve hız dengesi kurabilirsin.</li>
</ul>

<h2>CLAUDE.md: Hafıza Yerine Kalıcı Bağlam</h2>
<p>Her oturum başında projeyi Claude'a yeniden anlatmak hem yorucu hem de pahalıdır. Çözüm: proje kökünüze bir <code>CLAUDE.md</code> dosyası oluşturun.</p>
<p>Claude Code her session başında bu dosyayı otomatik olarak okur. İçine şunları yazabilirsiniz:</p>
<ul>
  <li>Proje mimarisi ve klasör yapısı</li>
  <li>Kod yazım kuralları ve stil tercihleri</li>
  <li>Sık kullanılan komutlar (<code>npm run dev</code>, test komutu vb.)</li>
  <li>Dokunulmaması gereken dosyalar veya önemli kısıtlamalar</li>
  <li>Aktif geliştirme bağlamı: "Şu an auth modülü üzerinde çalışıyoruz"</li>
</ul>
<p>CLAUDE.md sayesinde her yeni oturumda "bu proje şöyle çalışıyor" diye uzun uzun anlatmak zorunda kalmazsınız. Token tasarrufu yapar, zaman kazanırsınız.</p>

<h2>Oturum Yönetimi</h2>
<p>Yazılım geliştirirken sürekli bölünürüz. Claude Code buna harika bir çözüm sunuyor:</p>
<ul>
  <li><code>/rename &lt;isim&gt;</code> — Mevcut seansına <code>auth-fix</code> gibi anlamlı bir isim verir.</li>
  <li><code>/resume</code> — Boş çalıştırıldığında eski seansların listesini getirir; seçip kaldığın yere dönebilirsin.</li>
  <li><code>/fork</code> — Git branch mantığı gibidir. Mevcut konuşmayı çatallandırır. Bir yöntem denersin, patlarsa çatalladığın yere geri dönebilirsin.</li>
</ul>
      `,
      en: `
<p>Claude Code is not a standard AI chat interface. It is an advanced CLI Developer Agent that runs in your terminal, accesses your file system, runs your tests, and manages Git operations.</p>

<h2>Installation</h2>
<p>To get started with Claude Code, install it globally via npm:</p>
<pre><code>npm install -g @anthropic-ai/claude-code</code></pre>
<p>Then set your Anthropic API key as an environment variable:</p>
<pre><code>export ANTHROPIC_API_KEY="sk-ant-..."</code></pre>
<p>Add this to your <code>~/.zshrc</code> or <code>~/.bashrc</code> so you don't need to set it again each session. Get your API key at console.anthropic.com.</p>

<h2>Core CLI Commands</h2>
<ul>
  <li><code>claude</code> — Starts an interactive terminal session.</li>
  <li><code>claude "explain this project"</code> — Triggers a session with a direct task or question.</li>
  <li><code>claude -c</code> / <code>--continue</code> — Continues from where you left off in the most recent conversation in the current directory. No need to re-explain context!</li>
  <li><code>claude -p "query"</code> — Runs a single command and exits after getting the answer. Great for script automation.</li>
</ul>

<h2>Life-Saving Slash Commands</h2>
<p>The most critical commands to use once inside Claude:</p>
<ul>
  <li><code>/help</code> — Lists all available slash commands. I recommend running this when you first start Claude Code.</li>
  <li><code>/config</code> (or <code>/settings</code>) — Opens the interface to customize theme, default model, and output styles.</li>
  <li><code>/context</code> — Visualizes token usage as a colorful grid graph. Pinpoints exactly what's inflating your memory.</li>
  <li><code>/compact [instructions]</code> — <strong>Token Lifesaver.</strong> Summarizes and clears history when memory exceeds 80%. Use <code>/compact Focus on tests</code> to keep only test-relevant context in memory.</li>
  <li><code>/cost</code> — Shows the token count and estimated cost spent in the current session. Ideal for tracking spend during long sessions.</li>
  <li><code>/clear</code> (or <code>/reset</code>) — Completely resets history. Essential to prevent context pollution when switching to a different task.</li>
  <li><code>/model [model_name]</code> — Switches models without closing the session. Use a faster model for code reading, switch to a higher model for heavy refactoring — balance cost and speed.</li>
</ul>

<h2>CLAUDE.md: Persistent Context Instead of Memory</h2>
<p>Re-explaining your project to Claude at the start of every session is tedious and costly. The solution: create a <code>CLAUDE.md</code> file in your project root.</p>
<p>Claude Code automatically reads this file at the start of every session. You can put in it:</p>
<ul>
  <li>Project architecture and folder structure</li>
  <li>Coding conventions and style preferences</li>
  <li>Frequently used commands (<code>npm run dev</code>, test command, etc.)</li>
  <li>Files not to touch or important constraints</li>
  <li>Active development context: "We're currently working on the auth module"</li>
</ul>
<p>With CLAUDE.md, you never have to explain "here's how this project works" in every new session. Save tokens, save time.</p>

<h2>Session Management</h2>
<p>We constantly get interrupted while developing software. Claude Code has a great solution for this:</p>
<ul>
  <li><code>/rename &lt;name&gt;</code> — Gives your current session a meaningful name like <code>auth-fix</code>.</li>
  <li><code>/resume</code> — When run without arguments, shows a list of past sessions so you can pick up where you left off.</li>
  <li><code>/fork</code> — Works like Git branching. Forks the current conversation. Try one approach; if it fails, return to where you forked.</li>
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
