---
title: "Claude Code Saha Notları: No-BS Cheatsheet"
desc: "Terminalde Claude Code kullanırken laf kalabalığını bir kenara bırakan; en kritik kısayolları, bağlam yönetimi hilelerini, CLAUDE.md şablonunu ve sık karşılaşılan tuzakları içeren pratik saha rehberi."
tag: "CLI"
tagVariant: "cyan"
emoji: "💻"
date: "2026-09-04"
published: true
---

Terminalde otonom kodlama ajanları çalıştırırken en büyük düşmanınız "bağlam kirliliği" (context drift) ve gereksiz token israfıdır. Bu yazıda *npm install* adımlarını veya genel yapay zeka felsefesini tekrarlamıyoruz. Doğrudan sahada işinizi hızlandıracak, masanızın bir köşesinde açık tutabileceğiniz net komutları, kısayolları ve çalışma disiplinlerini derledim.

---

## 1. Komut Masası (The Command Deck)

Terminalde seans sürerken klavyenizden eksik etmemeniz gereken en kritik komutlar:

### `Esc` (Tek Basış) — Anlık Fren (Abort)
* **Ne yapar:** Ajanın o anda yürüttüğü işlemi (uzun bir dosya okuma, kontrolsüz log basma veya yanlış yöne giden bir araç çağrısı) derhal keser.
* **Ne zaman kullanılmalı:** Modelin yanlış yola saptığını fark ettiğiniz ilk saniyede. Bitmesini bekleyip token yakmak yerine anında fren yapın.
* **`Esc + Esc` farkı:** Çift basış konuşmada geri sarıp rewind menüsünü açarken, tek `Esc` o an çalışan işlemi dondurur ve kontrolü size verir.

### `Shift + Tab` — Plan Modu (Plan Mode)
*İpucu: Bulmak için birkaç defa `Shift + Tab` tuş kombinasyonuna basmanız gerekebilir. :)*

* **Ne yapar:** Ajanın doğrudan dosyalarda değişiklik yapmasını engeller; önce sorunu analiz edip bir yol haritası çıkarmasını sağlar.
* **Ne zaman kullanılmalı:** 2'den fazla dosyaya dokunan refactor'larda, yeni bir mimari katman eklerken veya kök nedeni belirsiz bug'larda.
* **Neden kritik:** Modelin körlemesine koda dalıp 10 dosya birden değiştirdikten sonra derleme hatası vermesini baştan engeller.

### `Esc + Esc` veya `/rewind` — Geri Al ve Temizle
* **Ne yapar:** Geri sarma (rewind) menüsünü açar; buradan yalnızca konuşmayı, yalnızca kodu veya ikisini birden önceki kontrol noktasına döndürmeyi seçersiniz.
* **Ne zaman kullanılmalı:** Model yanlış bir kütüphaneye yöneldiğinde veya istemediğiniz bir mimari tercihte bulunduğunda panikle dosyaları elle düzeltmek yerine tek hamlede geri dönmek için.

### `! <komut>` — Shell Kaçışı (Shell Escape)
* **Ne yapar:** Doğrudan terminalinizde bir bash komutu çalıştırır (örn: `!git status`, `!npm test`).
* **Neden kritik:** Komut çıktısı Claude'un bağlamına (context) eklenir; böylece terminalden terminale kopyala-yapıştır yapmadan güncel sistem durumunu modele göstermiş olursunuz.

### `/compact` — Hafıza Sıkıştırma
* **Ne yapar:** O ana kadarki konuşma geçmişini ve terminal çıktılarını özetleyerek bağlam penceresini rahatlatır.
* **Ne zaman kullanılmalı:** `/context` ile baktığınızda hafızanın şiştiğini gördüğünüzde, seansı tamamen kapatmadan hafıza kazanmak için.

### `/clear` veya `/new` — Acımasız Sıfırlama
* **Ne yapar:** Mevcut seansı ve bağlam geçmişini tamamen sıfırlayarak tertemiz yeni bir oturum başlatır (`/clear` ve `/new` aynı amaca hizmet eder).
* **Ne zaman kullanılmalı:** Bir görevi tamamlayıp yeni bir göreve geçerken. Eski görevin logları ve tartışmaları yeni görevin bağlamını zehirlememelidir.

### `claude -c` veya `claude --resume` — Seansı Kurtar (Resume)
* **Ne yapar:** Yanlışlıkla `/clear` çektiğinizde, terminal kazara kapandığında veya bağlantı koptuğunda önceki seansı tüm bağlamıyla kaldığı yerden yeniden canlandırır.
* **Neden kritik:** `/clear` komutunun panzehiridir; kazara uçurulan saatlik çalışmaları ve mimari tartışmaları tek komutla kurtarır.
* **Önemli Ayrım:** `claude -c` doğrudan **en son kaldığınız** aktif bağlamı anında açar. `claude --resume` ise geçmiş seansları listeleyerek hangi bağlama dönmek istediğinizi **seçme imkanı** sunar.

### `/btw <soru>` — Akışı Bozmayan Yan Soru
* **Ne yapar:** Ajanın ana görev odağını ve hafızasını kirletmeden, araya bağımsız hızlı bir teknik soru sıkıştırmanızı sağlar.

---

## 2. `CLAUDE.md` Mimarisi: 60-100 Satır Kuralı

Bir projede Claude Code'un en çok başvurduğu dosya kök dizindeki `CLAUDE.md` dosyasıdır. Yapılan en büyük hata, bu dosyayı 500 satırlık kapsamlı bir wiki sayfasına çevirmektir.

> **Altın Kural:** Modelin dikkat (attention) mekanizması çok uzun dosyalarda dağılır. Dosyanın sonundaki kritik kurallar genellikle görmezden gelinir. `CLAUDE.md` dosyasını **100 satırın altında** tutun.

### `# <kural>` — Terminalden Anlık Kural Enjeksiyonu
Çalışırken modelin tekrar tekrar yaptığı bir hatayı fark ettiğinizde terminalden çıkıp editörde `CLAUDE.md` açmanıza gerek yoktur. Komut satırına doğrudan `#` önekiyle yazın:

```markdown
# Her zaman pnpm kullan, asla npm veya yarn çalıştırma
# UI bileşenlerinde inline style yerine Tailwind sınıfları kullan
```

Claude Code bu girdiyi algılar ve kuralı doğrudan projenin `CLAUDE.md` dosyasına kalıcı olarak işler.

### Ne Yazılmalı?
* **Build & Test Komutları:** Projeyi nasıl ayağa kaldıracak, testleri hangi komutla koşturacak?
* **Mimari Yasaklar:** *"Asla `any` tipi kullanma"*, *"State management için sadece Zustand kullan"*, *"API katmanına doğrudan SQL sorgusu yazma"*.
* **Branch & Commit Kuralları:** Conventional commit formatı (`feat:`, `fix:`).

### Ne Yazılmamalı?
* `package.json` veya `tsconfig.json` içinde zaten açıkça tanımlı olan bilgiler.
* Genel dil veya framework eğitimleri (Claude zaten React veya Go biliyor).
* Sık değişen geçici backlog maddeleri.

### Modüler `CLAUDE.md` (Monorepo Gücü)
Eğer bir monorepo üzerinde çalışıyorsanız, kökte tek bir dev dosya tutmak yerine alt klasörlere özel `CLAUDE.md` dosyaları ekleyin:
* `apps/web/CLAUDE.md` (Next.js & Tailwind kuralları)
* `apps/api/CLAUDE.md` (Go/Node.js, DB migration kuralları)

Claude Code hangi dizinde işlem yapıyorsa o dizindeki yerel kuralları otomatik olarak bağlamına çeker.

### Kopyalanabilir Minimal Şablon

```markdown
# Project Guidelines

## Commands
- Build: `pnpm build`
- Dev: `pnpm dev`
- Test: `pnpm test`
- Single test: `pnpm test -- -t "test_name"`
- Lint: `pnpm lint`

## Architecture & Conventions
- TypeScript strict mode; avoid `any`, prefer `unknown` with type guards.
- Use server components by default; add `'use client'` only when hook-driven.
- Keep business logic in `services/`, not inside UI components or route handlers.
- Handle all async errors explicitly with custom error boundaries.

## Rules
- Do NOT add new dependencies without explicit confirmation.
- Always run tests and linter before declaring a task done.
- Follow conventional commits (`feat:`, `fix:`, `refactor:`).
```

---

## 3. Bağlam Yönetimi ve Ölçümleme

Bu yazının ana tezi bağlam hijyenidir. Ancak bağlamı ölçmeden `/compact` veya `/clear` çalıştırmak karanlıkta ok atmaktır. Bağlamı cerrahi bir hassasiyetle yönetmek gerekir:

### `/context` — Bağlam Röntgeni (Önce Ölç, Sonra Budayın)
`/compact` çalıştırmaya karar vermeden önce bakacağınız yer tam olarak burasıdır. `/context` komutu, aktif pencerenin ne kadarının dosya içerikleri, konuşma geçmişi, sistem kuralları veya komut çıktıları tarafından tüketildiğini görsel olarak döker.
* Hangi dosyanın bağlamı tıkadığını tek bakışta görürsünüz.
* Gereksiz yere şişen bir log veya araç çıktısı varsa seansı sıfırlamak ya da sıkıştırmak için somut karar verirsiniz.

### `@dosya` — Cerrahi Bağlam Enjeksiyonu
Ajana *"Projeyi tara ve auth hatalarını bul"* demek, yüzlerce dosyanın okunmasına ve bağlamın saniyeler içinde kirlenmesine yol açar. Bunun yerine `@` önekiyle hedefe kilitlenin:

```bash
@src/services/auth.ts ve @logs/error.log dosyalarını incele; token yenileme hatasını izole et.
```

Claude yalnızca belirttiğiniz dosyaları doğrudan hafızaya çeker. Terminale 500 satırlık log yapıştırmaktan veya modeli dosya arama araçlarıyla oyalamaktan kat kat daha verimlidir.

### "Verification-First" (Doğrulama Döngüsü)
Bir CLI ajanına *"Bu endpoint'i düzelt"* demek, token yakmanın en garantili yoludur. Sahada en yüksek başarı oranını veren yaklaşım **Doğrulama Odaklı Döngü**dür:

1. **Önce Test Yazdırın:** *"Bu hatayı yeniden üreten (reproduce eden) ve şu an fail eden bir unit test yaz."*
2. **Çıktıyı Doğrulayın:** `!npm test` ile testin gerçekten fail ettiğini görün.
3. **Kodu Düzelttirin:** *"Şimdi sadece bu testi geçirecek minimum kod değişikliğini yap."*
4. **Kapanış:** Test yeşile dönene kadar döngüyü sürdürün.

---

## 4. Özel Slash Komutları (`.claude/commands/`): Tek Tuşla İş Akışları

Bir cheatsheet'in geliştiriciye kazandırabileceği en yüksek getirili özellik custom komutlardır. Her gün tekrar ettiğiniz 4-5 adımlı prompt zincirlerini tek bir slash komutuna indirebilirsiniz.

Projenizin kök dizininde `.claude/commands/` klasörü açıp içine markdown dosyaları koymanız yeterlidir:
* `.claude/commands/review.md` &rarr; Terminalde `/review` olarak tetiklenir.
* `.claude/commands/test-coverage.md` &rarr; Terminalde `/test-coverage` olarak tetiklenir.

Örnek bir `.claude/commands/review.md` dosyası:

```markdown
Son git diff'ini incele:
1. Değişen fonksiyonların edge-case unit testlerinin yazılıp yazılmadığını kontrol et.
2. Olası bellek sızıntılarını, tip açıklarını ve güvenlik açıklarını listele.
3. Conventional commit formatına uygun bir PR başlığı ve açıklaması üret.
```

Artık her PR öncesinde terminalde yalnızca `/review` yazmanız tüm bu denetim sürecini başlatır.

---

## 5. Güvenlik ve İzinler: `--dangerously-skip-permissions`

Claude Code her dosya düzenlemesinde veya shell komutunda onay ister. İşleri hızlandırmak için sunulan `--dangerously-skip-permissions` bayrağı çift taraflı bir kılıçtır.

* **Ne zaman kullanılır:** Tamamen izole edilmiş bir sandbox/container ortamında, sırf linter düzeltmeleri veya mekanik refactor'lar yaptırırken.
* **Ne zaman KESİNLİKLE kullanılmamalıdır:**
  * Production ortamlarına bağlı shell oturumlarında.
  * Makinenizde açık AWS, GCP veya veritabanı CLI kimlik bilgileri varken.
  * `git push` veya `rm` komutlarının çalıştırılabileceği hassas repo'larda.

---

## 6. Hızlı Karar Matrisi

| Karşılaşılan Durum | İlk Refleks / Komut | Yapılmaması Gereken |
| :--- | :--- | :--- |
| **3'ten fazla dosyaya dokunan değişiklik** | `Shift + Tab` (Plan Mode) ile önce planı onayla | Doğrudan kod düzenlemesi istemek |
| **Ajan yanlış yola saptı / sonsuz döngüye girdi** | `Esc` (Tek basış) ile anında durdur | İşlemin bitmesini bekleyip token yakmak |
| **Ajan yanlış kütüphane ekledi / saçmaladı** | `Esc + Esc` veya `/rewind` | Dosyaları editörden elle geri almaya çalışmak |
| **Bağlamın neyle dolduğunu görmek** | `/context` ile görsel döküm al | Körlemesine hafıza temizliği / sıkıştırması yapmak |
| **Oturum uzadı ve yanıtlar yavaşladı** | `/compact` çalıştır | Şişmiş bağlamla devam edip token tüketmek |
| **Belirli bir dosyayı modele hedef göstermek** | `@dosya/yolu` ile cerrahi bağlam ver | "Tüm projeyi tara" deyip yüzlerce dosya okutmak |
| **Tekrarlayan kuralı CLAUDE.md'ye eklemek** | `# <kural>` ile doğrudan terminalden yaz | Editörü açıp satır aramak ve akıştan kopmak |
| **Tekrarlayan çok adımlı rutin prompt'lar** | `.claude/commands/` altına slash komutu tanımla | Her seferinde uzun prompt'lar kopyalayıp yapıştırmak |
| **Önceki görev bitti, yeni işe geçilecek** | `/clear` veya `/new` ile seansı sıfırla | Yeni görevi eski görev geçmişinin üzerine yazmak |
| **Seans kazara kapandı veya yanlışlıkla sıfırlandı** | `claude -c` (en son seans) veya `--resume` (seçim listesi) | Tüm tartışmayı sıfırdan yapmaya başlamak |
| **Testin sonucunu ajana göstermek** | `!pnpm test` | Çıktıyı terminalden kopyalayıp chat'e yapıştırmak |
| **Bağlamı kirletmeden kısa bir şey sormak** | `/btw <soru>` | Yeni bir chat seansı açıp zaman kaybetmek |
