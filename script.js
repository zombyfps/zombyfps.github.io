// Dinamik yıl
document.getElementById("year").textContent = new Date().getFullYear();

// Tek Hakkımda kutusu toggle
function toggleAbout() {
  const aboutBox = document.getElementById("aboutBox");
  if (aboutBox.style.display === "none" || aboutBox.style.display === "") {
    aboutBox.style.display = "block";
  } else {
    aboutBox.style.display = "none";
  }
}

// Çok dilli metinler
const texts = {
  tr: {
    aboutText: "Merhaba! Ben Halit, ama arkadaşlarım beni 'Zomby' olarak tanır. 1999 doğumluyum. Aslen Adana’da doğdum fakat kendimi her zaman Trabzonlu gibi hissettim çünkü büyüdüğüm şehir. Yayıncılık benim için sadece oyun oynamak değil; yeni insanlarla tanışmak, sohbet etmek ve birlikte eğlenmek demek.",
    liveTitle: "📺 Canlı Yayın",
    sponsorTitle: "🤝 Sponsor",
    contactText: "İletişim için: zombyfps@gmail.com",
    donateText: "Bağış (ByNoGame)",
    aboutLinkText: "Hakkımda"
  },
  en: {
    aboutText: "Hello! I'm Halit, but my friends call me 'Zomby'. Born in 1999—originally from Adana, raised in Trabzon. Streaming isn’t just gaming for me; it’s meeting new people, chatting, and having fun together.",
    liveTitle: "📺 Live Stream",
    sponsorTitle: "🤝 Sponsor",
    contactText: "Contact: zombyfps@gmail.com",
    donateText: "Donate (ByNoGame)",
    aboutLinkText: "About Me"
  },
  ru: {
    aboutText: "Привет! Я Халит, но друзья зовут меня 'Zomby'. Родился в 1999 году — из Аданы, вырос в Трабзоне. Для меня стриминг — это не только игры, но и новые знакомства, общение и веселье.",
    liveTitle: "📺 Прямая трансляция",
    sponsorTitle: "🤝 Спонсор",
    contactText: "Контакт: zombyfps@gmail.com",
    donateText: "Пожертвование (ByNoGame)",
    aboutLinkText: "Обо мне"
  },
  ar: {
    aboutText: "مرحباً! أنا حليت، لكن أصدقائي ينادونني 'Zomby'. وُلدت عام 1999 في أضنة ونشأت في طرابزون. البث بالنسبة لي ليس مجرد ألعاب؛ بل لقاء أشخاص جدد والدردشة والاستمتاع معاً.",
    liveTitle: "📺 البث المباشر",
    sponsorTitle: "🤝 الراعي",
    contactText: "للتواصل: zombyfps@gmail.com",
    donateText: "تبرع (ByNoGame)",
    aboutLinkText: "عني"
  }
};

// Dil değiştirme fonksiyonu
function changeLang(lang) {
  const pack = texts[lang] || texts.en;
  document.getElementById("aboutText").textContent = pack.aboutText;
  document.getElementById("liveTitle").textContent = pack.liveTitle;
  document.getElementById("sponsorTitle").textContent = pack.sponsorTitle;
  document.getElementById("contactText").innerHTML = `<a class="mail" href="mailto:zombyfps@gmail.com">${pack.contactText}</a>`;
  document.getElementById("donateText").textContent = pack.donateText;
  document.getElementById("aboutLinkText").textContent = pack.aboutLinkText;
}

// Tarayıcı dilini otomatik algıla
const userLang = (navigator.language || "en").slice(0,2).toLowerCase();
document.getElementById("langSelect").value = texts[userLang] ? userLang : "en";
changeLang(document.getElementById("langSelect").value);
