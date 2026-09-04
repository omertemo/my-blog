export const content = {
  tr: `
<p>Terminalde otonom kodlama ajanları çalıştırırken en büyük düşmanınız bağlam kirliliği (context drift) ve gereksiz token israfıdır. Bu yazıda <em>npm install</em> adımlarını veya genel yapay zeka felsefesini tekrarlamıyoruz. Doğrudan sahada işinizi hızlandıracak, masanızın bir köşesinde açık tutabileceğiniz net komutları, kısayolları ve çalışma disiplinlerini derledim.</p>

<h2>1. Komut Masası (The Command Deck)</h2>
<p>Terminalde seans sürerken klavyenizden eksik etmemeniz gereken en kritik komutlar:</p>

<h3><code>Esc</code> (Tek Basış) — Anlık Fren (Abort)</h3>
<ul>
  <li><strong>Ne yapar:</strong> Ajanın o anda yürüttüğü işlemi (uzun bir dosya okuma, kontrolsüz log basma veya yanlış yöne giden bir araç çağrısı) derhal keser.</li>
  <li><strong>Ne zaman kullanılmalı:</strong> Modelin yanlış yola saptığını fark ettiğiniz ilk saniyede. Bitmesini bekleyip token yakmak yerine anında fren yapın.</li>
  <li><strong><code>Esc + Esc</code> farkı:</strong> Çift basış konuşmada geri sarıp rewind menüsünü açarken, tek <code>Esc</code> o an çalışan işlemi dondurur ve kontrolü size verir.</li>
</ul>

<h3><code>Shift + Tab</code> — Plan Modu (Plan Mode)</h3>
<p><em>İpucu: Bulmak için birkaç defa <code>Shift + Tab</code> tuş kombinasyonuna basmanız gerekebilir. :)</em></p>
<ul>
  <li><strong>Ne yapar:</strong> Ajanın doğrudan dosyalarda değişiklik yapmasını engeller; önce sorunu analiz edip bir yol haritası çıkarmasını sağlar.</li>
  <li><strong>Ne zaman kullanılmalı:</strong> 2'den fazla dosyaya dokunan refactor'larda, yeni bir mimari katman eklerken veya kök nedeni belirsiz bug'larda.</li>
  <li><strong>Neden kritik:</strong> Modelin körlemesine koda dalıp 10 dosya birden değiştirdikten sonra derleme hatası vermesini baştan engeller.</li>
</ul>

<h3><code>Esc + Esc</code> veya <code>/rewind</code> — Geri Al ve Temizle</h3>
<ul>
  <li><strong>Ne yapar:</strong> Geri sarma (rewind) menüsünü açar; buradan yalnızca konuşmayı, yalnızca kodu veya ikisini birden önceki kontrol noktasına döndürmeyi seçersiniz.</li>
  <li><strong>Ne zaman kullanılmalı:</strong> Model yanlış bir kütüphaneye yöneldiğinde veya istemediğiniz bir mimari tercihte bulunduğunda panikle dosyaları elle düzeltmek yerine tek hamlede geri dönmek için.</li>
</ul>

<h3><code>! &lt;komut&gt;</code> — Shell Kaçışı (Shell Escape)</h3>
<ul>
  <li><strong>Ne yapar:</strong> Doğrudan terminalinizde bir bash komutu çalıştırır (örn: <code>!git status</code>, <code>!npm test</code>).</li>
  <li><strong>Neden kritik:</strong> Komut çıktısı Claude'un bağlamına (context) eklenir; böylece terminalden terminale kopyala-yapıştır yapmadan güncel sistem durumunu modele göstermiş olursunuz.</li>
</ul>

<h3><code>/compact</code> — Hafıza Sıkıştırma</h3>
<ul>
  <li><strong>Ne yapar:</strong> O ana kadarki konuşma geçmişini ve terminal çıktılarını özetleyerek bağlam penceresini rahatlatır.</li>
  <li><strong>Ne zaman kullanılmalı:</strong> <code>/context</code> ile baktığınızda hafızanın şiştiğini gördüğünüzde, seansı tamamen kapatmadan hafıza kazanmak için.</li>
</ul>

<h3><code>/clear</code> veya <code>/new</code> — Acımasız Sıfırlama</h3>
<ul>
  <li><strong>Ne yapar:</strong> Mevcut seansı ve bağlam geçmişini tamamen sıfırlayarak tertemiz yeni bir oturum başlatır (<code>/clear</code> ve <code>/new</code> aynı amaca hizmet eder).</li>
  <li><strong>Ne zaman kullanılmalı:</strong> Bir görevi tamamlayıp yeni bir göreve geçerken. Eski görevin logları ve tartışmaları yeni görevin bağlamını zehirlememelidir.</li>
</ul>

<h3><code>claude -c</code> veya <code>claude --resume</code> — Seansı Kurtar (Resume)</h3>
<ul>
  <li><strong>Ne yapar:</strong> Yanlışlıkla <code>/clear</code> çektiğinizde, terminal kazara kapandığında veya bağlantı koptuğunda önceki seansı tüm bağlamıyla kaldığı yerden yeniden canlandırır.</li>
  <li><strong>Neden kritik:</strong> <code>/clear</code> komutunun panzehiridir; kazara uçurulan saatlik çalışmaları ve mimari tartışmaları tek komutla kurtarır.</li>
</ul>
<p><em>Önemli Ayrım:</em> <code>claude -c</code> doğrudan <strong>en son kaldığınız</strong> aktif bağlamı anında açar. <code>claude --resume</code> ise geçmiş seansları listeleyerek hangi bağlama dönmek istediğinizi <strong>seçme imkanı</strong> sunar.</p>

<h3><code>/btw &lt;soru&gt;</code> — Akışı Bozmayan Yan Soru</h3>
<ul>
  <li><strong>Ne yapar:</strong> Ajanın ana görev odağını ve hafızasını kirletmeden, araya bağımsız hızlı bir teknik soru sıkıştırmanızı sağlar.</li>
</ul>

<h2>2. CLAUDE.md Mimarisi: 60-100 Satır Kuralı</h2>
<p>Bir projede Claude Code'un en çok başvurduğu dosya kök dizindeki <code>CLAUDE.md</code> dosyasıdır. Yapılan en büyük hata, bu dosyayı 500 satırlık kapsamlı bir wiki sayfasına çevirmektir.</p>

<blockquote><strong>Altın Kural:</strong> Modelin dikkat (attention) mekanizması çok uzun dosyalarda dağılır. Dosyanın sonundaki kritik kurallar genellikle görmezden gelinir. <code>CLAUDE.md</code> dosyasını <strong>100 satırın altında</strong> tutun.</blockquote>

<h3><code># &lt;kural&gt;</code> — Terminalden Anlık Kural Enjeksiyonu</h3>
<p>Çalışırken modelin tekrar tekrar yaptığı bir hatayı fark ettiğinizde terminalden çıkıp editörde <code>CLAUDE.md</code> açmanıza gerek yoktur. Komut satırına doğrudan <code>#</code> önekiyle yazın:</p>
<pre><code># Her zaman pnpm kullan, asla npm veya yarn çalıştırma
# UI bileşenlerinde inline style yerine Tailwind sınıfları kullan</code></pre>
<p>Claude Code bu girdiyi algılar ve kuralı doğrudan projenin <code>CLAUDE.md</code> dosyasına kalıcı olarak işler.</p>

<h3>Ne Yazılmalı?</h3>
<ul>
  <li><strong>Build &amp; Test Komutları:</strong> Projeyi nasıl ayağa kaldıracak, testleri hangi komutla koşturacak?</li>
  <li><strong>Mimari Yasaklar:</strong> <em>"Asla <code>any</code> tipi kullanma"</em>, <em>"State management için sadece Zustand kullan"</em>, <em>"API katmanına doğrudan SQL sorgusu yazma"</em>.</li>
  <li><strong>Branch &amp; Commit Kuralları:</strong> Conventional commit formatı (<code>feat:</code>, <code>fix:</code>).</li>
</ul>

<h3>Ne Yazılmamalı?</h3>
<ul>
  <li><code>package.json</code> veya <code>tsconfig.json</code> içinde zaten açıkça tanımlı olan bilgiler.</li>
  <li>Genel dil veya framework eğitimleri (Claude zaten React veya Go biliyor).</li>
  <li>Sık değişen geçici backlog maddeleri.</li>
</ul>

<h3>Modüler CLAUDE.md (Monorepo Gücü)</h3>
<p>Eğer bir monorepo üzerinde çalışıyorsanız, kökte tek bir dev dosya tutmak yerine alt klasörlere özel <code>CLAUDE.md</code> dosyaları ekleyin:</p>
<ul>
  <li><code>apps/web/CLAUDE.md</code> (Next.js &amp; Tailwind kuralları)</li>
  <li><code>apps/api/CLAUDE.md</code> (Go/Node.js, DB migration kuralları)</li>
</ul>
<p>Claude Code hangi dizinde işlem yapıyorsa o dizindeki yerel kuralları otomatik olarak bağlamına çeker.</p>

<h3>Kopyalanabilir Minimal Şablon</h3>
<pre><code># Project Guidelines

## Commands
- Build: \`pnpm build\`
- Dev: \`pnpm dev\`
- Test: \`pnpm test\`
- Single test: \`pnpm test -- -t "test_name"\`
- Lint: \`pnpm lint\`

## Architecture &amp; Conventions
- TypeScript strict mode; avoid \`any\`, prefer \`unknown\` with type guards.
- Use server components by default; add \`'use client'\` only when hook-driven.
- Keep business logic in \`services/\`, not inside UI components or route handlers.
- Handle all async errors explicitly with custom error boundaries.

## Rules
- Do NOT add new dependencies without explicit confirmation.
- Always run tests and linter before declaring a task done.
- Follow conventional commits (\`feat:\`, \`fix:\`, \`refactor:\`).</code></pre>

<h2>3. Bağlam Yönetimi ve Ölçümleme</h2>
<p>Bu yazının ana tezi bağlam hijyenidir. Ancak bağlamı ölçmeden <code>/compact</code> veya <code>/clear</code> çalıştırmak karanlıkta ok atmaktır. Bağlamı cerrahi bir hassasiyetle yönetmek gerekir:</p>

<h3><code>/context</code> — Bağlam Röntgeni (Önce Ölç, Sonra Budayın)</h3>
<p><code>/compact</code> çalıştırmaya karar vermeden önce bakacağınız yer tam olarak burasıdır. <code>/context</code> komutu, aktif pencerenin ne kadarının dosya içerikleri, konuşma geçmişi, sistem kuralları veya komut çıktıları tarafından tüketildiğini görsel olarak döker.</p>
<ul>
  <li>Hangi dosyanın bağlamı tıkadığını tek bakışta görürsünüz.</li>
  <li>Gereksiz yere şişen bir log veya araç çıktısı varsa seansı sıfırlamak ya da sıkıştırmak için somut karar verirsiniz.</li>
</ul>

<h3><code>@dosya</code> — Cerrahi Bağlam Enjeksiyonu</h3>
<p>Ajana <em>"Projeyi tara ve auth hatalarını bul"</em> demek, yüzlerce dosyanın okunmasına ve bağlamın saniyeler içinde kirlenmesine yol açar. Bunun yerine <code>@</code> önekiyle hedefe kilitlenin:</p>
<pre><code>@src/services/auth.ts ve @logs/error.log dosyalarını incele; token yenileme hatasını izole et.</code></pre>
<p>Claude yalnızca belirttiğiniz dosyaları doğrudan hafızaya çeker. Terminale 500 satırlık log yapıştırmaktan veya modeli dosya arama araçlarıyla oyalamaktan kat kat daha verimlidir.</p>

<h3>"Verification-First" (Doğrulama Döngüsü)</h3>
<p>Bir CLI ajanına <em>"Bu endpoint'i düzelt"</em> demek, token yakmanın en garantili yoludur. Sahada en yüksek başarı oranını veren yaklaşım <strong>Doğrulama Odaklı Döngü</strong>dür:</p>
<ol>
  <li><strong>Önce Test Yazdırın:</strong> <em>"Bu hatayı yeniden üreten (reproduce eden) ve şu an fail eden bir unit test yaz."</em></li>
  <li><strong>Çıktıyı Doğrulayın:</strong> <code>!npm test</code> ile testin gerçekten fail ettiğini görün.</li>
  <li><strong>Kodu Düzelttirin:</strong> <em>"Şimdi sadece bu testi geçirecek minimum kod değişikliğini yap."</em></li>
  <li><strong>Kapanış:</strong> Test yeşile dönene kadar döngüyü sürdürün.</li>
</ol>

<h2>4. Özel Slash Komutları (.claude/commands/): Tek Tuşla İş Akışları</h2>
<p>Bir cheatsheet'in geliştiriciye kazandırabileceği en yüksek getirili özellik custom komutlardır. Her gün tekrar ettiğiniz 4-5 adımlı prompt zincirlerini tek bir slash komutuna indirebilirsiniz.</p>

<p>Projenizin kök dizininde <code>.claude/commands/</code> klasörü açıp içine markdown dosyaları koymanız yeterlidir:</p>
<ul>
  <li><code>.claude/commands/review.md</code> &rarr; Terminalde <code>/review</code> olarak tetiklenir.</li>
  <li><code>.claude/commands/test-coverage.md</code> &rarr; Terminalde <code>/test-coverage</code> olarak tetiklenir.</li>
</ul>

<p>Örnek bir <code>.claude/commands/review.md</code> dosyası:</p>
<pre><code>Son git diff'ini incele:
1. Değişen fonksiyonların edge-case unit testlerinin yazılıp yazılmadığını kontrol et.
2. Olası bellek sızıntılarını, tip açıklarını ve güvenlik açıklarını listele.
3. Conventional commit formatına uygun bir PR başlığı ve açıklaması üret.</code></pre>

<p>Artık her PR öncesinde terminalde yalnızca <code>/review</code> yazmanız tüm bu denetim sürecini başlatır.</p>

<h2>5. Güvenlik ve İzinler: --dangerously-skip-permissions</h2>
<p>Claude Code her dosya düzenlemesinde veya shell komutunda onay ister. İşleri hızlandırmak için sunulan <code>--dangerously-skip-permissions</code> bayrağı çift taraflı bir kılıçtır.</p>
<ul>
  <li><strong>Ne zaman kullanılır:</strong> Tamamen izole edilmiş bir sandbox/container ortamında, sırf linter düzeltmeleri veya mekanik refactor'lar yaptırırken.</li>
  <li><strong>Ne zaman KESİNLİKLE kullanılmamalıdır:</strong>
    <ul>
      <li>Production ortamlarına bağlı shell oturumlarında.</li>
      <li>Makinenizde açık AWS, GCP veya veritabanı CLI kimlik bilgileri varken.</li>
      <li><code>git push</code> veya <code>rm</code> komutlarının çalıştırılabileceği hassas repo'larda.</li>
    </ul>
  </li>
</ul>

<h2>6. Hızlı Karar Matrisi</h2>
<table>
  <thead>
    <tr>
      <th>Karşılaşılan Durum</th>
      <th>İlk Refleks / Komut</th>
      <th>Yapılmaması Gereken</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>3'ten fazla dosyaya dokunan değişiklik</strong></td>
      <td><code>Shift + Tab</code> (Plan Mode) ile önce planı onayla</td>
      <td>Doğrudan kod düzenlemesi istemek</td>
    </tr>
    <tr>
      <td><strong>Ajan yanlış yola saptı / sonsuz döngüye girdi</strong></td>
      <td><code>Esc</code> (Tek basış) ile anında durdur</td>
      <td>İşlemin bitmesini bekleyip token yakmak</td>
    </tr>
    <tr>
      <td><strong>Ajan yanlış kütüphane ekledi / saçmaladı</strong></td>
      <td><code>Esc + Esc</code> veya <code>/rewind</code></td>
      <td>Dosyaları editörden elle geri almaya çalışmak</td>
    </tr>
    <tr>
      <td><strong>Bağlamın neyle dolduğunu görmek</strong></td>
      <td><code>/context</code> ile görsel döküm al</td>
      <td>Körlemesine hafıza temizliği / sıkıştırması yapmak</td>
    </tr>
    <tr>
      <td><strong>Oturum uzadı ve yanıtlar yavaşladı</strong></td>
      <td><code>/compact</code> çalıştır</td>
      <td>Şişmiş bağlamla devam edip token tüketmek</td>
    </tr>
    <tr>
      <td><strong>Belirli bir dosyayı modele hedef göstermek</strong></td>
      <td><code>@dosya/yolu</code> ile cerrahi bağlam ver</td>
      <td>"Tüm projeyi tara" deyip yüzlerce dosya okutmak</td>
    </tr>
    <tr>
      <td><strong>Tekrarlayan kuralı CLAUDE.md'ye eklemek</strong></td>
      <td><code># &lt;kural&gt;</code> ile doğrudan terminalden yaz</td>
      <td>Editörü açıp satır aramak ve akıştan kopmak</td>
    </tr>
    <tr>
      <td><strong>Tekrarlayan çok adımlı rutin prompt'lar</strong></td>
      <td><code>.claude/commands/</code> altına slash komutu tanımla</td>
      <td>Her seferinde uzun prompt'lar kopyalayıp yapıştırmak</td>
    </tr>
    <tr>
      <td><strong>Önceki görev bitti, yeni işe geçilecek</strong></td>
      <td><code>/clear</code> veya <code>/new</code> ile seansı sıfırla</td>
      <td>Yeni görevi eski görev geçmişinin üzerine yazmak</td>
    </tr>
    <tr>
      <td><strong>Seans kazara kapandı veya yanlışlıkla sıfırlandı</strong></td>
      <td><code>claude -c</code> (en son seans) veya <code>--resume</code> (seçim listesi)</td>
      <td>Tüm tartışmayı sıfırdan yapmaya başlamak</td>
    </tr>
    <tr>
      <td><strong>Testin sonucunu ajana göstermek</strong></td>
      <td><code>!pnpm test</code></td>
      <td>Çıktıyı terminalden kopyalayıp chat'e yapıştırmak</td>
    </tr>
    <tr>
      <td><strong>Bağlamı kirletmeden kısa bir şey sormak</strong></td>
      <td><code>/btw &lt;soru&gt;</code></td>
      <td>Yeni bir chat seansı açıp zaman kaybetmek</td>
    </tr>
  </tbody>
</table>
`,
  en: `
<p>When running autonomous coding agents in the terminal, your biggest enemies are context drift and token waste. This post skips basic <em>npm install</em> walkthroughs and general AI philosophy. Instead, it compiles high-leverage terminal shortcuts, context management habits, and an architectural cheat sheet you can keep open while coding.</p>

<h2>1. The Command Deck</h2>
<p>The most critical commands and keyboard shortcuts you need during an active session:</p>

<h3><code>Esc</code> (Single Press) — Immediate Abort</h3>
<ul>
  <li><strong>What it does:</strong> Instantly halts whatever the agent is currently doing (streaming endless logs, reading irrelevant files, or running loops).</li>
  <li><strong>When to use:</strong> The moment you notice the agent deviating or taking an incorrect turn. Don't wait for it to finish and burn tokens—hit the brakes immediately.</li>
  <li><strong>Difference from <code>Esc + Esc</code>:</strong> Double-tap rewinds the conversation and opens the rewind menu; a single tap halts active execution and returns prompt control to you.</li>
</ul>

<h3><code>Shift + Tab</code> — Plan Mode</h3>
<p><em>Tip: Depending on your terminal, you might need to press the <code>Shift + Tab</code> key combination a couple of times to trigger it. :)</em></p>
<ul>
  <li><strong>What it does:</strong> Prevents the agent from immediately modifying files; forces it to inspect the codebase and outline an execution plan first.</li>
  <li><strong>When to use:</strong> Multi-file refactors touching 2+ files, introducing new architecture layers, or debugging issues with unclear root causes.</li>
  <li><strong>Why it matters:</strong> Prevents the model from blindly modifying 10 files and hitting syntax or build failures later.</li>
</ul>

<h3><code>Esc + Esc</code> or <code>/rewind</code> — Undo &amp; Revert</h3>
<ul>
  <li><strong>What it does:</strong> Opens the rewind menu, where you choose to roll back the conversation only, the code only, or both to a prior checkpoint.</li>
  <li><strong>When to use:</strong> When the agent chooses an incorrect library or takes an unhelpful architecture path—revert cleanly in one stroke instead of manually undoing edits in your IDE.</li>
</ul>

<h3><code>! &lt;command&gt;</code> — Shell Escape</h3>
<ul>
  <li><strong>What it does:</strong> Executes a bash command directly inside the terminal session (e.g., <code>!git status</code>, <code>!npm test</code>).</li>
  <li><strong>Why it matters:</strong> Injects command stdout directly into Claude's context without needing manual copy-pasting between terminal windows.</li>
</ul>

<h3><code>/compact</code> — Memory Compression</h3>
<ul>
  <li><strong>What it does:</strong> Summarizes prior conversation history and terminal outputs, freeing up context window capacity.</li>
  <li><strong>When to use:</strong> When <code>/context</code> reveals that memory is bloated, allowing you to reclaim capacity without terminating the session.</li>
</ul>

<h3><code>/clear</code> or <code>/new</code> — Hard Reset</h3>
<ul>
  <li><strong>What it does:</strong> Wipes the current session and resets memory completely to start fresh (<code>/clear</code> and <code>/new</code> serve the same purpose).</li>
  <li><strong>When to use:</strong> Immediately upon completing a task before beginning a new one. Stale logs and discussions from previous tasks will pollute context.</li>
</ul>

<h3><code>claude -c</code> or <code>claude --resume</code> — Session Recovery</h3>
<ul>
  <li><strong>What it does:</strong> Restores your previous session with its complete context intact if you accidentally ran <code>/clear</code>, closed the terminal, or experienced a disconnection.</li>
  <li><strong>Why it matters:</strong> The antidote to accidental wipes; recovers hours of context and architectural discussions with a single command.</li>
</ul>
<p><em>Key Distinction:</em> <code>claude -c</code> directly opens your <strong>most recent</strong> active context. In contrast, <code>claude --resume</code> lists previous sessions by timestamp and summary, giving you the option to <strong>pick which context to restore</strong>.</p>

<h3><code>/btw &lt;question&gt;</code> — Out-of-Band Side Query</h3>
<ul>
  <li><strong>What it does:</strong> Allows you to ask a quick technical question without polluting the agent's active task focus or memory history.</li>
</ul>

<h2>2. CLAUDE.md Architecture: The 60–100 Line Rule</h2>
<p>The file Claude Code consults most frequently is the root <code>CLAUDE.md</code>. The most common anti-pattern is treating this file like a 500-line comprehensive wiki.</p>

<blockquote><strong>Golden Rule:</strong> Attention degrades across very long context buffers. Rules placed at the bottom of bloated files are routinely missed. Keep <code>CLAUDE.md</code> <strong>strictly under 100 lines</strong>.</blockquote>

<h3><code># &lt;rule&gt;</code> — Instant Rule Injection</h3>
<p>When you catch the agent repeating an unwanted pattern while coding, there is no need to interrupt your flow and open <code>CLAUDE.md</code> in an editor. Prefix your instruction with <code>#</code> directly in the prompt:</p>
<pre><code># Always use pnpm, never run npm or yarn
# Use Tailwind classes instead of inline styles in UI components</code></pre>
<p>Claude Code detects this syntax and permanently appends the guideline directly to your project's <code>CLAUDE.md</code>.</p>

<h3>What Belongs Here</h3>
<ul>
  <li><strong>Build &amp; Test Commands:</strong> Explicit commands to build, test, and lint the project.</li>
  <li><strong>Architectural Invariants:</strong> <em>"Never use <code>any</code>"</em>, <em>"Use Zustand exclusively for client state"</em>, <em>"Never call SQL directly from route handlers"</em>.</li>
  <li><strong>Branch &amp; Commit Conventions:</strong> Conventional commits (<code>feat:</code>, <code>fix:</code>).</li>
</ul>

<h3>What Does NOT Belong Here</h3>
<ul>
  <li>Information already clearly defined in <code>package.json</code> or <code>tsconfig.json</code>.</li>
  <li>General language or framework tutorials (Claude already understands React and Go).</li>
  <li>Transient sprint backlog items or frequently changing issue lists.</li>
</ul>

<h3>Modular CLAUDE.md for Monorepos</h3>
<p>In monorepos, avoid a single massive root file. Place scoped <code>CLAUDE.md</code> files in subdirectories:</p>
<ul>
  <li><code>apps/web/CLAUDE.md</code> (Next.js &amp; Tailwind guidelines)</li>
  <li><code>apps/api/CLAUDE.md</code> (Go/Node.js, DB migration conventions)</li>
</ul>
<p>Claude Code automatically inherits rules from the working directory it operates within.</p>

<h3>Copy-Pasteable Minimal Template</h3>
<pre><code># Project Guidelines

## Commands
- Build: \`pnpm build\`
- Dev: \`pnpm dev\`
- Test: \`pnpm test\`
- Single test: \`pnpm test -- -t "test_name"\`
- Lint: \`pnpm lint\`

## Architecture &amp; Conventions
- TypeScript strict mode; avoid \`any\`, prefer \`unknown\` with type guards.
- Use server components by default; add \`'use client'\` only when hook-driven.
- Keep business logic in \`services/\`, not inside UI components or route handlers.
- Handle all async errors explicitly with custom error boundaries.

## Rules
- Do NOT add new dependencies without explicit confirmation.
- Always run tests and linter before declaring a task done.
- Follow conventional commits (\`feat:\`, \`fix:\`, \`refactor:\`).</code></pre>

<h2>3. Context Management &amp; Observability</h2>
<p>The core thesis of this guide is context hygiene. But attempting to run <code>/compact</code> or <code>/clear</code> without visibility into your context window is shooting in the dark. You need surgical precision:</p>

<h3><code>/context</code> — Context Observability (Measure Before You Prune)</h3>
<p>This is the command you run before deciding whether to trigger <code>/compact</code>. <code>/context</code> visually breaks down what percentage of your active context window is allocated to loaded files, conversation turns, system instructions, and tool outputs.</p>
<ul>
  <li>Identify bloated files or runaway terminal traces at a single glance.</li>
  <li>Make informed decisions on whether to compact or perform a hard reset.</li>
</ul>

<h3><code>@file</code> — Surgical Context Injection</h3>
<p>Prompting the agent with <em>"Search the project and find auth errors"</em> forces it to scan dozens of files and degrades context within seconds. Target specific files surgically with the <code>@</code> prefix:</p>
<pre><code>Inspect @src/services/auth.ts and @logs/error.log; isolate the token refresh error.</code></pre>
<p>Claude loads precisely the requested files into memory. This is vastly more efficient than pasting 500 lines of terminal logs or letting the agent crawl your file tree.</p>

<h3>The Verification-First Loop</h3>
<p>Instructing a CLI agent with <em>"Fix this endpoint"</em> is the fastest route to token drain and incorrect edits. The highest-yield pattern in terminal agents is the <strong>Verification-First Loop</strong>:</p>
<ol>
  <li><strong>Write the Failing Test First:</strong> <em>"Write a unit test that reproduces this issue and currently fails."</em></li>
  <li><strong>Verify Failure:</strong> Run <code>!npm test</code> to confirm the test fails as expected.</li>
  <li><strong>Implement the Fix:</strong> <em>"Make the minimum code changes required to make this test pass."</em></li>
  <li><strong>Close the Loop:</strong> Keep iterating until the test suite turns green.</li>
</ol>

<h2>4. Custom Slash Commands (.claude/commands/): One-Shot Workflows</h2>
<p>The single highest-ROI capability for developers is custom commands. Condense repetitive, multi-step prompt routines into a single slash command.</p>

<p>Simply create a <code>.claude/commands/</code> directory in your project root and drop markdown files inside:</p>
<ul>
  <li><code>.claude/commands/review.md</code> &rarr; Triggered via <code>/review</code> in the terminal.</li>
  <li><code>.claude/commands/test-coverage.md</code> &rarr; Triggered via <code>/test-coverage</code> in the terminal.</li>
</ul>

<p>Example <code>.claude/commands/review.md</code>:</p>
<pre><code>Review the latest git diff:
1. Verify edge-case unit test coverage for all modified functions.
2. Check for potential memory leaks, type inconsistencies, and security flaws.
3. Suggest a conventional commit message and PR description.</code></pre>

<p>Now, typing <code>/review</code> runs your entire pre-PR verification protocol in one step.</p>

<h2>5. Security &amp; Permissions: --dangerously-skip-permissions</h2>
<p>Claude Code prompts for confirmation prior to executing file edits or shell commands. While <code>--dangerously-skip-permissions</code> speeds up execution, it must be used with caution.</p>
<ul>
  <li><strong>When to use:</strong> In an isolated container or disposable sandbox environment for automated linter fixes or mechanical refactors.</li>
  <li><strong>When NEVER to use:</strong>
    <ul>
      <li>Shell sessions with active production access.</li>
      <li>Environments with active AWS, GCP, or database credentials.</li>
      <li>Sensitive repositories where unverified <code>git push</code> or destructive <code>rm</code> commands could run.</li>
    </ul>
  </li>
</ul>

<h2>6. Quick Decision Matrix</h2>
<table>
  <thead>
    <tr>
      <th>Scenario</th>
      <th>Immediate Reflex / Command</th>
      <th>Anti-Pattern</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Changes touching 3+ files</strong></td>
      <td><code>Shift + Tab</code> (Plan Mode) to review plan</td>
      <td>Prompting direct code modifications immediately</td>
    </tr>
    <tr>
      <td><strong>Agent deviating or stuck in an infinite loop</strong></td>
      <td><code>Esc</code> (Single press) to halt immediately</td>
      <td>Waiting for it to finish and burning tokens</td>
    </tr>
    <tr>
      <td><strong>Agent hallucinated or added wrong dependency</strong></td>
      <td><code>Esc + Esc</code> or <code>/rewind</code></td>
      <td>Manually reverting files one-by-one in IDE</td>
    </tr>
    <tr>
      <td><strong>Need to inspect context window consumption</strong></td>
      <td><code>/context</code> for visual breakdown</td>
      <td>Guessing and blindly clearing or compacting</td>
    </tr>
    <tr>
      <td><strong>Long session with slow responses</strong></td>
      <td>Run <code>/compact</code></td>
      <td>Continuing with bloated context and burning tokens</td>
    </tr>
    <tr>
      <td><strong>Targeting specific files for the agent</strong></td>
      <td><code>@file/path</code> for surgical context</td>
      <td>"Scan entire project" causing massive file reads</td>
    </tr>
    <tr>
      <td><strong>Adding persistent project guidelines</strong></td>
      <td><code># &lt;rule&gt;</code> directly from prompt</td>
      <td>Context-switching to open editor and find line</td>
    </tr>
    <tr>
      <td><strong>Repetitive multi-step prompt routines</strong></td>
      <td>Define slash command in <code>.claude/commands/</code></td>
      <td>Copy-pasting long prompt templates every time</td>
    </tr>
    <tr>
      <td><strong>Task completed, starting new work</strong></td>
      <td><code>/clear</code> or <code>/new</code> session reset</td>
      <td>Stacking unrelated tasks in the same history</td>
    </tr>
    <tr>
      <td><strong>Session accidentally closed or reset</strong></td>
      <td><code>claude -c</code> (latest) or <code>--resume</code> (pick session)</td>
      <td>Re-explaining the entire project from scratch</td>
    </tr>
    <tr>
      <td><strong>Showing test results to the agent</strong></td>
      <td><code>!pnpm test</code></td>
      <td>Copy-pasting stdout from another terminal window</td>
    </tr>
    <tr>
      <td><strong>Quick side question without context drift</strong></td>
      <td><code>/btw &lt;question&gt;</code></td>
      <td>Starting an entirely new session unnecessarily</td>
    </tr>
  </tbody>
</table>
`,
};
