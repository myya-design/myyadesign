/**
 * MYYA DESIGN — IMAGE & ICON MANAGER
 * Change ONLY the text inside quotation marks after the colon.
 * Empty string "" = keep the original image from index.html.
 * Example: "work-ekacita-1": "assets/images/new-ekacita.webp",
 * Upload new images to your GitHub repository before using their paths.
 * Supports all original HTML images, favicon, social preview and image-based icons.
 * CSS-drawn menu arrows and shapes are not image files.
 */

const MYYA_IMAGES = {

  // ===== GLOBAL =====
  "global-favicon": "", // Browser tab icon | Current: graduation-mascot.png
  "global-social-preview": "", // Social sharing preview | Current: https://myya-design.github.io/myyadesign/og.jpg
  "global-mascot": "", // Mascot used in header, hero, about and footer | Current: graduation-mascot.png

  // ===== SERVICES =====
  "service-logo-branding": "", // Logo & Branding | Current: logo-ekacita-0.webp
  "service-illustration-book-covers": "", // Illustration & Book Covers | Current: https://mimottt.syamimi-sdin.workers.dev/images/scribble-0.webp
  "service-murals": "", // Murals | Current: https://mimottt.syamimi-sdin.workers.dev/images/mural-yellow-0.webp
  "service-wobler": "", // Wobler | Current: https://myya-design.github.io/myyadesign/wobbler_ff.webp
  "service-art-education": "", // Art Education | Current: https://mimottt.syamimi-sdin.workers.dev/images/event-expo26-0.webp

  // ===== WORKS =====
  "work-ekacita-1": "", // Ekacita — photo 1 | Current: logo-ekacita-0.webp
  "work-scribble-portraits-1": "", // Scribble portraits — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/scribble-0.webp
  "work-tokoh-wall-1": "", // Tokoh wall — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/mural-yellow-0.webp
  "work-terusir-1": "", // Terusir — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/book-jerusir-0.webp
  "work-visual-arts-design-exhibition-2026-1": "", // Visual Arts & Design Exhibition 2026 — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/event-expo26-0.webp
  "work-tradition-at-its-best-1": "", // Tradition At Its Best — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/pack-tradition-0.webp
  "work-tradition-at-its-best-2": "", // Tradition At Its Best — photo 2 | Current: https://mimottt.syamimi-sdin.workers.dev/images/pack-tradition-1.webp
  "work-name-keychains-1": "", // Name keychains — photo 1 | Current: https://myya-design.github.io/myyadesign/moola.webp
  "work-pop-portrait-series-1": "", // Pop portrait series — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/pop-portraits-0.webp
  "work-the-little-library-1": "", // The Little Library — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/class-library-0.webp
  "work-the-little-library-2": "", // The Little Library — photo 2 | Current: https://mimottt.syamimi-sdin.workers.dev/images/class-library-1.webp
  "work-the-little-library-3": "", // The Little Library — photo 3 | Current: https://mimottt.syamimi-sdin.workers.dev/images/class-library-2.webp
  "work-kulawangsa-campers-1": "", // Kulawangsa Campers — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/logo-kulawangsa-0.webp
  "work-peribahasa-mural-1": "", // Peribahasa mural — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/mural-peribahasa-0.webp
  "work-wayang-kulit-shadow-play-1": "", // Wayang Kulit shadow play — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/prod-wayang-0.webp
  "work-wayang-kulit-shadow-play-2": "", // Wayang Kulit shadow play — photo 2 | Current: https://mimottt.syamimi-sdin.workers.dev/images/prod-wayang-1.webp
  "work-terapi-buku-1": "", // Terapi Buku — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/book-terapi-0.webp
  "work-rekajelma-1": "", // RekaJelma — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/logo-rekajelma-0.webp
  "work-anakku-maafkanlah-ibu-1": "", // Anakku, maafkanlah ibu… — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/poster-ibu-0.webp
  "work-logo-stands-name-plates-1": "", // Logo stands & name plates — photo 1 | Current: https://myya-design.github.io/myyadesign/wobbler_ff.webp
  "work-logo-stands-name-plates-2": "", // Logo stands & name plates — photo 2 | Current: https://myya-design.github.io/myyadesign/Wobbler.webp
  "work-continuum-exhibition-2025-1": "", // Continuum Exhibition 2025 — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/event-continuum-0.webp
  "work-kopi-kebun-klasik-1": "", // Kopi Kebun Klasik — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/mural-kopi-0.webp
  "work-grow-unity-create-1": "", // Grow · Unity · Create — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/class-letters-0.webp
  "work-sebelum-masuk-pejabat-1": "", // Sebelum Masuk Pejabat — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/book-pejabat-0.webp
  "work-famous-dessert-1": "", // Famous Dessert — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/logo-dessert-0.webp
  "work-mesin-jahit-nenek-1": "", // Mesin jahit nenek — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/painting-0.webp
  "work-sports-day-2026-1": "", // Sports Day 2026 — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/event-sports26-0.webp
  "work-birthday-keychains-1": "", // Birthday keychains — photo 1 | Current: https://drive.google.com/thumbnail?id=1Rus24rXEdTfxIZmG7hxC56pLRaSnJMNc&sz=w1600
  "work-a-room-without-books-1": "", // A room without books — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/mural-books-0.webp
  "work-boat-noodle-1": "", // Boat Noodle — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/shirt-boat-0.webp
  "work-puppet-theatre-1": "", // Puppet Theatre — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/class-theatre-0.webp
  "work-secangkir-popis-1": "", // Secangkir Popis — photo 1 | Current: logo-popis-0.webp
  "work-aku-al-quran-1": "", // Aku & Al-Quran — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/book-quran-0.webp
  "work-jangan-biarkan-rasuah-1": "", // Jangan Biarkan Rasuah — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/poster-rasuah-0.webp
  "work-sports-day-jersey-1": "", // Sports Day jersey — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/event-jersey-0.webp
  "work-trip-tags-1": "", // Trip tags — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/p3d-trip-0.webp
  "work-trip-tags-2": "", // Trip tags — photo 2 | Current: https://mimottt.syamimi-sdin.workers.dev/images/p3d-trip-1.webp
  "work-trip-tags-3": "", // Trip tags — photo 3 | Current: https://mimottt.syamimi-sdin.workers.dev/images/p3d-trip-2.webp
  "work-jom-kembara-bersama-buku-1": "", // Jom Kembara Bersama Buku — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/mural-kembara-0.webp
  "work-bulan-bintang-1": "", // Bulan Bintang — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/pack-bulan-0.webp
  "work-myp-design-booklets-1": "", // MYP Design booklets — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/class-myp-0.webp
  "work-the-lorax-pyp-production-1": "", // The Lorax, PYP Production — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/prod-lorax-0.webp
  "work-rk60-s-reminiscence-1": "", // RK60's Reminiscence — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/logo-rk60-0.webp
  "work-kak-syaurah-nak-tanya-boleh-1": "", // Kak Syaurah, Nak Tanya Boleh? — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/book-syaurah-0.webp
  "work-service-as-action-field-trip-shirt-1": "", // Service as Action field trip shirt — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/event-saa-0.webp
  "work-graduation-2025-souvenirs-1": "", // Graduation 2025 souvenirs — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/p3d-grad-0.webp
  "work-portrait-wall-1": "", // Portrait wall — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/mural-tokoh-0.webp
  "work-be-creative-wall-1": "", // Be Creative wall — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/class-creative-0.webp
  "work-jubli-emas-19742024-1": "", // Jubli Emas 1974–2024 — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/logo-jubli-0.webp
  "work-cerita-budak-tahfiz-1": "", // Cerita Budak Tahfiz — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/book-tahfiz-0.webp
  "work-sports-day-2025-1": "", // Sports Day 2025 — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/event-sports25-0.webp
  "work-dentaventure-2026-1": "", // Dentaventure 2026 — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/p3d-dental-0.webp
  "work-la-ilaha-illallah-1": "", // La Ilaha Illallah — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/mural-tauhid-0.webp
  "work-workshop-laboratory-1": "", // Workshop Laboratory — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/class-lab-0.webp
  "work-workshop-laboratory-2": "", // Workshop Laboratory — photo 2 | Current: https://mimottt.syamimi-sdin.workers.dev/images/class-lab-1.webp
  "work-custom-plaques-1": "", // Custom plaques — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/p3d-plaques-0.webp
  "work-custom-plaques-2": "", // Custom plaques — photo 2 | Current: https://mimottt.syamimi-sdin.workers.dev/images/p3d-plaques-1.webp
  "work-graduation-ceremony-1": "", // Graduation ceremony — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/event-grad-0.webp
  "work-in-the-workshop-1": "", // In the workshop — photo 1 | Current: https://mimottt.syamimi-sdin.workers.dev/images/class-helping-0.webp

  // ===== ABOUT =====
  "about-portrait": "", // Portrait photograph | Current: https://myya-design.github.io/myyadesign/me-cut.webp
};

// Apply image replacements once the page HTML is available.
function applyMYYAImages() {
  document.querySelectorAll("[data-image-key]").forEach(function (element) {
    const replacement = MYYA_IMAGES[element.getAttribute("data-image-key")];
    if (!replacement || !replacement.trim()) return;
    const attribute = element.tagName === "IMG" ? "src" :
      element.tagName === "LINK" ? "href" : "content";
    element.setAttribute(attribute, replacement.trim());
  });
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applyMYYAImages);
} else {
  applyMYYAImages();
}
