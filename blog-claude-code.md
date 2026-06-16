# Claude Code Uzmanlık Rehberi

---

## Bölüm 1 – Temeller ve Akıllı Bağlam (Context) Yönetimi

Bu bölümde, Claude Code'un terminaldeki temel varoluş amacını ve hafızasını (Context Window) şişirmeden en verimli nasıl kullanacağımızı ele alıyoruz.

### 1. Giriş: Claude Code Nedir?

Claude Code, standart bir yapay zeka sohbet arayüzü değildir. Terminalinizde çalışan, dosya sisteminize erişebilen, testlerinizi koşturabilen ve Git operasyonlarını yönetebilen gelişmiş bir CLI Geliştirici Ajanıdır.

### 2. Kurulum

Claude Code'u kullanmaya başlamak için önce npm üzerinden global olarak yüklemeniz gerekiyor:

```bash
npm install -g @anthropic-ai/claude-code
```

Ardından Anthropic API anahtarınızı ortam değişkeni olarak tanımlayın:

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```

Bu satırı `~/.zshrc` veya `~/.bashrc` dosyanıza eklerseniz her oturumda tekrar tanımlamanıza gerek kalmaz. API anahtarını [console.anthropic.com](https://console.anthropic.com) adresinden edinebilirsiniz.

### 3. Temel CLI Başlangıç Komutları

Claude Code oturumunu başlatırken ve yönetirken kullanılan ilk adım komutları:

- `claude` — İnteraktif terminal oturumunu başlatır.
- `claude "explain this project"` — Doğrudan bir görev veya soruyla oturumu tetikler.
- `claude -c` / `--continue` — Mevcut dizindeki en son konuşmaya kaldığın yerden devam eder. (Bağlamı tekrar anlatmak zorunda kalmazsın!)
- `claude -p "query"` — Sadece tek bir komut çalıştırıp cevabı alır ve terminalden çıkar. (Script otomasyonları için harikadır.)

### 4. Hayat Kurtaran Eğik Çizgi (/) Komutları (Slash Commands)

Claude içerisindeyken terminale yön veren en kritik komutlar:

| Komut | Ne İşe Yarar? |
|---|---|
| `/help` | Kullanılabilir tüm slash komutlarını listeler. Claude Code'a ilk başladığınızda çalıştırmanızı öneririm. |
| `/config` (veya `/settings`) | Temayı, varsayılan modeli ve çıktı stillerini özelleştirebileceğiniz arayüzü açar. |
| `/context` | Token kullanımını renkli bir grid grafiği olarak görselleştirir. Hafızayı neyin şişirdiğini nokta atışı gösterir. |
| `/compact [talimatlar]` | **Token Cankurtaranı.** Hafıza %80'i geçtiğinde geçmişi özetler ve temizler. `/compact Focus on tests` diyerek sadece test odaklı kısımları aklında tutmasını sağlayabilirsin. |
| `/cost` | Mevcut oturumda harcanan token sayısını ve tahmini maliyeti gösterir. Uzun oturumlarda ne kadar harcadığınızı takip etmek için idealdir. |
| `/clear` (veya `/reset`) | Geçmişi tamamen sıfırlar. Farklı bir göreve geçerken context karmaşasını önlemek için şarttır. |
| `/model [model_adı]` | Oturumu kapatmadan model değiştirir. Kod okuma/keşif için hızlı model, ağır refactor için üst model — maliyet ve hız dengesi kurabilirsin. |

### 5. CLAUDE.md: Hafıza Yerine Kalıcı Bağlam

Her oturum başında projeyi Claude'a yeniden anlatmak hem yorucu hem de pahalıdır. Çözüm: proje kökünüze bir `CLAUDE.md` dosyası oluşturun.

Claude Code her session başında bu dosyayı otomatik olarak okur. İçine şunları yazabilirsiniz:

- Proje mimarisi ve klasör yapısı
- Kod yazım kuralları ve stil tercihleri
- Sık kullanılan komutlar (`npm run dev`, test komutu vb.)
- Dokunulmaması gereken dosyalar veya önemli kısıtlamalar
- Aktif geliştirme bağlamı: "Şu an auth modülü üzerinde çalışıyoruz"

CLAUDE.md sayesinde her yeni oturumda "bu proje şöyle çalışıyor" diye uzun uzun anlatmak zorunda kalmazsınız. Token tasarrufu yapar, zaman kazanırsınız.

### 6. Oturum Yönetimi (Gerçek Dünya Senaryosu)

Yazılım geliştirirken sürekli bölünürüz. Claude Code buna harika bir çözüm sunuyor:

- `/rename <isim>` — Mevcut seansına `auth-fix` gibi anlamlı bir isim verir.
- `/resume` — Boş çalıştırıldığında eski seansların listesini getirir; seçip kaldığın yere dönebilirsin.
- `/fork` — Git branch mantığı gibidir. Mevcut konuşmayı çatallandırır. Bir yöntem denersin, patlarsa çatalladığın yere geri dönebilirsin.
