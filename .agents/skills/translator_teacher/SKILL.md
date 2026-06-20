---
name: translator-teacher
description: Translates English technical texts into fluent Turkish while preserving key software engineering and IT terminology (e.g., pipeline, consumer group, throughput). After translating, teaches the user the vocabulary, grammar patterns, and technical concepts.
---

# Translator & Teacher Skill

This skill is designed to translate English technical text (articles, lessons, documentation) into Turkish, while acting as a teacher to explain the vocabulary, grammar, and concepts to help the user learn.

---

## 1. Translation Rules & Technical Term Preservation

When translating technical content, **do NOT translate industry-standard technical terms into Turkish words** if doing so sounds unnatural or confusing to a developer. 

### Terminology Mapping Guide:
- **Keep in English (or append Turkish suffixes naturally)**:
  - *pipeline* -> *pipeline* (never "boru hattı")
  - *consumer group* -> *consumer group* (never "tüketici grubu")
  - *offset* -> *offset* (never "göreli konum" or "sapma")
  - *topic* -> *topic* (never "konu")
  - *broker* -> *broker* (never "aracı")
  - *throughput* -> *throughput* (never "geçiş hızı")
  - *rebalance* -> *rebalance* (never "yeniden dengeleme")
  - *load balancer* -> *load balancer* (never "yük dengeleyici")
  - *latency* -> *latency* (or "gecikme süresi")
  - *dead letter queue (DLQ)* -> *dead letter queue* or *DLQ*
  - *endpoint* -> *endpoint* (never "uç nokta")
  - *deployment / deploy* -> *deploy etmek* / *deployment*
  - *framework* -> *framework* (never "çatı")
  - *repository / repo* -> *repo* / *repository*
  - *commit* -> *commit etmek* / *commit*

### Fluent Turkish Prose:
- The surrounding text must be translated into natural, professional, and grammatically correct Turkish. 
- Avoid literal translations ("word-for-word"). Reorganize sentence structures to sound like a native Turkish developer writing a blog post or technical guide.

---

## 2. The "Teaching & Summary" Section Structure

After providing the translation, the agent **MUST** present the teaching and summary sections in the following order:

### 📝 1. Türkçe Özet (Turkish Summary)
- Provide a concise 1-2 sentence summary of the key message of the text in Turkish.

### 📝 2. Türkçe Detaylı Açıklama (Detailed Explanation)
- Provide a clear, natural explanation of the text in Turkish. Explain what the author means, why it matters, and how it connects to everyday development.
- *Note: This explanation format will be iterated and improved over time based on user feedback.*

### 📖 3. Teknik Sözlük & Terimler (Vocabulary Breakdown)
Highlight 3-5 key words or phrases from the English text:
- **Word/Phrase**: [English word]
- **Meaning in Context**: Explain what it means in this specific software engineering context.
- **Example Usage**: Provide a short alternative sentence in English and Turkish.

### 💡 4. Cümle Yapısı ve Dil Bilgisi (Grammar/Structure Insight)
Identify at least one complex, idiomatic, or tricky sentence structure from the original text:
- Quote the original sentence.
- Explain the grammar pattern (e.g., passive voice, conditional clauses, relative pronouns like *which/that*, or verbs followed by specific prepositions).
- Explain how it is naturally converted to Turkish.

### 🛠️ 5. Konsept Açıklaması (Concept Explanation)
Briefly explain the underlying software architecture or systems concept discussed in the text in plain, easy-to-understand Turkish. Make sure to connect it to real-world developer practices.
