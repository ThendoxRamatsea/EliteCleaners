/* ============================================================
   Elite Cleaners — content & pricing data
   Package "What's Included" content is drawn from the supplied
   Elite_Full_Home_Cleaning_Duties.pdf and
   Elite_Quick_Home_Cleaning_Duties.pdf
   ============================================================ */

const WHATSAPP_NUMBER = "27766321161"; // 076 632 1161 in international format
const EMAIL_ADDRESS = "info@elitecleaners.co.za";
// Proposed policy: change to true only after the business confirms the guarantee.
const ENABLE_ELITE_CLEAN_GUARANTEE = false;

const PACKAGES = {
  standard: [
    { id: "std-essential", name: "Elite Home Clean", beds: "1 bedroom", price: "R450", priceValue: 450, desc: "Complete home cleaning with one small laundry load and ironing." },
    { id: "std-signature-2", name: "Elite Home Clean", beds: "2 bedrooms", price: "R600", priceValue: 600, desc: "Complete home cleaning with one medium laundry load and ironing." },
    { id: "std-signature-3", name: "Elite Home Clean", beds: "3 bedrooms", price: "R700", priceValue: 700, desc: "Complete home cleaning with one medium laundry load and ironing." },
    { id: "std-premium", name: "Elite Home Clean", beds: "4 bedrooms", price: "R1,000", priceValue: 1000, desc: "Complete home cleaning with one large laundry load and ironing." },
    { id: "std-estate", name: "Elite Home Clean", beds: "4+ bedrooms", price: "From R1,200", priceValue: null, desc: "Complete cleaning for larger homes and estates. Custom quote required." }
  ],
  quick: [
    { id: "qk-essential", name: "Elite Quick Clean", beds: "1 bedroom", price: "R350", priceValue: 350, desc: "A streamlined home refresh without laundry or ironing." },
    { id: "qk-signature-2", name: "Elite Quick Clean", beds: "2 bedrooms", price: "R450", priceValue: 450, desc: "A streamlined home refresh without laundry or ironing." },
    { id: "qk-signature-3", name: "Elite Quick Clean", beds: "3 bedrooms", price: "R550", priceValue: 550, desc: "A streamlined home refresh without laundry or ironing." },
    { id: "qk-premium", name: "Elite Quick Clean", beds: "4 bedrooms", price: "R700", priceValue: 700, desc: "A streamlined home refresh without laundry or ironing." },
    { id: "qk-estate", name: "Elite Quick Clean", beds: "4+ bedrooms", price: "From R900", priceValue: null, desc: "A streamlined refresh for larger homes and estates. Custom quote required." }
  ]
};

/* Room-by-room duty lists, faithful to the supplied PDFs.
   "standard" arrays include every duty; "quick" arrays are the
   lighter Elite Quick scope for the same room. */
const INCLUDED = {
  general: {
    title: "General Cleaning — Throughout the Home",
    standard: ["Dusting of tables, shelves, cabinets, skirting boards, doors, window sills, mirrors, light fixtures and décor", "Cobwebs removed from ceilings and corners", "Surfaces wiped and disinfected", "Bannisters and railings cleaned", "Floors swept, vacuumed and mopped, including carpets, rugs and edges", "Bins emptied and liners replaced"],
    quick: ["Dusting of tables, shelves, cabinets, skirting boards, doors, window sills, mirrors, light fixtures and décor", "Cobwebs removed from ceilings and corners", "Surfaces wiped and disinfected", "Bannisters and railings cleaned", "Floors swept, vacuumed and mopped, including carpets, rugs and edges", "Bins emptied and liners replaced"]
  },
  lounge: {
    title: "Lounge / Living Room",
    standard: ["Furniture and décor dusted", "Coffee and side tables wiped", "TV and electronics dusted with care", "Couches vacuumed, including under cushions", "Cushions fluffed and arranged, blankets folded", "Mirrors and glass surfaces cleaned", "Blinds cleaned, curtains vacuumed where appropriate", "Carpets vacuumed, floors mopped", "Bins emptied and general tidying"],
    quick: ["Furniture and décor dusted", "Coffee and side tables wiped", "TV and electronics dusted with care", "Couches vacuumed, including under cushions", "Cushions fluffed and arranged, blankets folded", "Mirrors and glass surfaces cleaned", "Blinds cleaned, curtains vacuumed where appropriate", "Carpets vacuumed, floors mopped", "Bins emptied and general tidying"]
  },
  bedrooms: {
    title: "Bedrooms",
    standard: ["Beds stripped and remade with clean linen, duvet covers and pillowcases", "Bedside tables, headboards, wardrobes (external) and dressers dusted", "Mirrors and windowsills cleaned", "Floors vacuumed and mopped, including under beds where accessible", "Bins emptied, cobwebs removed, general tidying"],
    quick: ["Beds stripped and remade with clean linen, duvet covers and pillowcases", "Bedside tables, headboards, wardrobes (external) and dressers dusted", "Mirrors and windowsills cleaned", "Floors vacuumed and mopped, including under beds where accessible", "Bins emptied, cobwebs removed, general tidying"]
  },
  bathrooms: {
    title: "Bathrooms",
    standard: ["Toilet cleaned and disinfected inside and out", "Shower, tiles and grout scrubbed, soap scum and water marks removed", "Bath and bath fixtures cleaned", "Basin, taps and countertop cleaned", "Mirrors and cabinets (external) cleaned", "Towel rails and toilet roll holder cleaned, toilet paper replaced", "Floors swept, vacuumed and mopped", "Bin emptied, hair and cobwebs removed"],
    quick: ["Toilet cleaned and disinfected inside and out", "Shower, tiles and grout scrubbed, soap scum and water marks removed", "Bath and bath fixtures cleaned", "Basin, taps and countertop cleaned", "Mirrors and cabinets (external) cleaned", "Towel rails and toilet roll holder cleaned, toilet paper replaced", "Floors swept, vacuumed and mopped", "Bin emptied, hair and cobwebs removed"]
  },
  kitchen: {
    title: "Kitchen",
    standard: ["Countertops cleared, wiped and backsplash cleaned", "Sink cleaned and scrubbed, drain and taps cleaned, water marks removed", "Cabinet doors and handles wiped, insides cleaned and organised", "Microwave, refrigerator, oven and dishwasher cleaned externally and internally", "Stovetop, burners and extractor hood cleaned", "Floors swept, vacuumed, mopped, stains and corners addressed", "Rubbish bin emptied and cleaned, dining table and chairs wiped"],
    quick: ["Countertops cleared, wiped and backsplash cleaned", "Sink and taps cleaned, drain cleaned", "Cabinet doors and handles wiped (exteriors only)", "Microwave cleaned externally and internally; fridge, oven and dishwasher cleaned externally", "Stovetop, burners and extractor hood cleaned", "Floors swept, vacuumed, mopped, stains and corners addressed", "Rubbish bin emptied and cleaned, dining table and chairs wiped"]
  },
  dining: {
    title: "Dining Area",
    standard: ["Dining table cleaned and disinfected", "Chairs and furniture dusted", "Décor, mirrors and light fixtures dusted", "Vacuumed, swept and mopped, including under the table", "Bins emptied and general tidying"],
    quick: ["Dining table cleaned and disinfected", "Chairs and furniture dusted", "Décor, mirrors and light fixtures dusted", "Vacuumed, swept and mopped, including under the table", "Bins emptied and general tidying"]
  },
  laundryArea: {
    title: "Laundry Area",
    standard: ["Washing machine exterior and drum cleaned, detergent drawer cleaned", "Dryer exterior and lint filter cleaned", "Countertops, sink and cabinet exteriors wiped", "Swept, vacuumed and mopped", "Bins emptied and laundry area organised"],
    quick: ["Washing machine exterior cleaned, detergent drawer cleaned", "Dryer exterior and lint filter cleaned", "Countertops, sink and cabinet exteriors wiped", "Swept, vacuumed and mopped", "Bins emptied and laundry area organised"]
  },
  windows: {
    title: "Windows & Glass",
    standard: ["Accessible interior windows, frames and sills cleaned", "Glass doors and mirrors cleaned", "Shower glass cleaned"],
    quick: ["Accessible interior windows, frames and sills cleaned", "Glass doors and mirrors cleaned", "Shower glass cleaned"]
  },
  finalPresentation: {
    title: "Final House Presentation",
    standard: ["Beds made, cushions arranged, towels folded, curtains and blinds straightened", "Surfaces clear, bins emptied, mirrors streak-free, floors spotless", "Kitchen counters clear and appliances wiped, no visible cobwebs or fingerprints", "Furniture returned to position, cleaning equipment removed", "Doors and windows checked, belongings left neatly"],
    quick: ["Beds made, cushions arranged, towels folded, curtains and blinds straightened", "Surfaces clear, bins emptied, mirrors streak-free, floors spotless", "Kitchen counters clear and appliances wiped, no visible cobwebs or fingerprints", "Furniture returned to position, cleaning equipment removed", "Doors and windows checked, belongings left neatly"]
  }
};

/* Standard-only sections */
const STANDARD_ONLY_SECTIONS = {
  laundryServices: {
      title: "Laundry & Ironing (included in Elite Home Clean)",
    items: [
      "Elite Essential — one small basket, up to 5kg",
      "Elite Signature (2 & 3 bedroom) — one medium basket, up to 8kg",
      "Elite Premium & Elite Estate — one large basket, up to 12kg",
      "Laundry sorted by colour and fabric, washed, dried and folded",
      "Ironing of shirts, trousers, dresses, skirts, school and work clothes",
      "Clean laundry folded, hung and packed away"
    ]
  },
  petRelated: {
    title: "Pet-Related Cleaning",
    items: [
      "Pet hair vacuumed from carpets and couches",
      "Pet feeding area and bowls cleaned",
      "Pet beds cleaned and pet areas deodorised",
      "Minor pet accidents cleaned"
    ]
  }
};

const INCLUDED_ORDER = ["general", "lounge", "bedrooms", "bathrooms", "kitchen", "dining", "laundryArea", "windows", "finalPresentation"];

/* Laundry pricing */
const LAUNDRY_PRICING = {
  wash: { small: 280, medium: 380, large: 520 }
};
const LAUNDRY_LABELS = {
  service: { wash: "Wash, Dry, Iron, Fold & Hang — On-site" },
  size: { small: "Small (up to 5kg)", medium: "Medium (up to 8kg)", large: "Large (up to 12kg)" }
};
const LAUNDRY_INCLUDED = {
  wash: ["Washing", "Drying", "Ironing", "Folding", "Hanging"]
};

/* FAQs */
const FAQS = [
  { q: "What is included in my cleaning?", a: "Every package covers living areas, bedrooms, bathrooms, the kitchen and final presentation. Use the comparison and detailed inclusion panel to see the exact scope for Elite Home Clean and Elite Quick Clean." },
  { q: "What is the difference between Elite Home Clean and Elite Quick Clean?", a: "Elite Home Clean is our complete service and includes laundry, ironing, selected appliance interiors and pet-related cleaning. Elite Quick Clean covers the same main rooms with a streamlined refresh and doesn't include those premium extras." },
  { q: "Do I need to provide cleaning products?", a: "No. Every Elite Cleaners package includes the products used in your home — there are no hidden product fees." },
  { q: "Do I need to provide cleaning equipment?", a: "No. Our cleaners bring their own equipment, at no extra charge to you." },
  { q: "Are there additional hourly charges?", a: "No. You pay the package price you selected, regardless of how long the clean takes." },
  { q: "How long will my cleaning take?", a: "This depends on the size of your home and the package selected. We'll be able to give you a better estimate once we understand your space — Elite Cleaners will confirm this with you." },
  { q: "Does Elite Home Clean include laundry and ironing?", a: "Yes. Elite Home Clean includes one load of laundry and ironing, sized according to your package — see the detailed inclusion panel for the weight limit." },
  { q: "How does Elite Laundry work?", a: "Elite Laundry is an on-site service. We wash, dry, iron, fold and hang your laundry in your home." },
  { q: "How long does laundry take?", a: "Standard turnaround for Elite Laundry is 24 to 48 hours." },
  { q: "What areas do you service?", a: "We're based in Johannesburg. Send us your suburb when booking and we'll confirm whether we service your area." },
  { q: "Can I book on Saturdays?", a: "Yes. We operate on Saturdays from 08:00 to 14:00." },
  { q: "Do you operate on Sundays?", a: "We're closed on Sundays. Enquiries sent over the weekend will be attended to during our next operating hours." },
  { q: "How do I make a booking?", a: "Use the Book Your Clean button. Select your service and package, add your details, review your summary, and send your request via WhatsApp or email." },
  { q: "When is my booking confirmed?", a: "Submitting the booking form sends a booking request. Your booking is confirmed once Elite Cleaners has confirmed availability with you directly." },
  { q: "Can I request the same cleaner again?", a: "We'll always try to accommodate this where possible — let us know in your booking notes and we'll do our best." },
  { q: "What happens if I need to reschedule?", a: "Just get in touch with us via WhatsApp or email as soon as you can, and we'll help you find a new time that works." }
];

(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- helpers ---------- */
  function waLink(message) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  }
  function mailLink(subject, body) {
    return "mailto:" + EMAIL_ADDRESS + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }
  function isWithinOperatingHours() {
    const now = new Date();
    const day = now.getDay(); // 0 Sun .. 6 Sat
    const mins = now.getHours() * 60 + now.getMinutes();
    if (day >= 1 && day <= 5) return mins >= 7 * 60 + 30 && mins <= 17 * 60;
    if (day === 6) return mins >= 8 * 60 && mins <= 14 * 60;
    return false;
  }

  /* ---------- generic WhatsApp / footer links ---------- */
  const genericWaMsg = "Hi Elite Cleaners, I'd like to find out more about your services.";
  ["whatsappNavBtn", "whatsappFloat", "footerWhatsapp"].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.href = waLink(genericWaMsg);
  });

  /* ---------- nav toggle (mobile) ---------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  navToggle.addEventListener("click", function () {
    const open = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  mainNav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    });
  });

  /* ---------- header shadow on scroll + mobile sticky CTA ---------- */
  const header = document.getElementById("siteHeader");
  const stickyCta = document.getElementById("mobileStickyCta");
  let lastY = window.scrollY;
  window.addEventListener("scroll", function () {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
    stickyCta.classList.toggle("is-visible", window.scrollY > 480);
    lastY = window.scrollY;
  }, { passive: true });
  const footer = document.getElementById("contact");
  if ("IntersectionObserver" in window && footer) {
    const footerObserver = new IntersectionObserver(function (entries) {
      stickyCta.classList.toggle("is-footer-visible", entries[0].isIntersecting);
    }, { threshold: 0.05 });
    footerObserver.observe(footer);
  }

  /* ---------- calm section reveals ---------- */
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealTargets = document.querySelectorAll(
    ".section-head, .service-choice-intro, .included-comparison, .pricing-grid, .promise-list, .care-gallery, .about-copy, .team-grid, .laundry-panel, .deep-clean-section, .recurring-options, .standard-list, .how-steps, .faq-list"
  );
  revealTargets.forEach(function (target, index) {
    target.classList.add("scroll-reveal");
    target.style.setProperty("--reveal-delay", String(index % 4 * 70) + "ms");
  });
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (target) { target.classList.add("is-revealed"); });
  } else {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
    revealTargets.forEach(function (target) { revealObserver.observe(target); });
  }

  /* ============================================================
     PRICING GRID
     ============================================================ */
  const pricingGrid = document.getElementById("pricingGrid");
  const toggleStandard = document.getElementById("toggleStandard");
  const toggleQuick = document.getElementById("toggleQuick");
  const pkgThumb = document.getElementById("pkgToggleThumb");
  let currentMode = "standard";

  function renderPricingGrid(mode) {
    pricingGrid.innerHTML = "";
    PACKAGES[mode].forEach(function (pkg) {
      const card = document.createElement("article");
      card.className = "price-card";
      card.innerHTML =
        '<div class="price-card-top">' +
          '<h3>' + pkg.name + '</h3>' +
          '<span class="price-card-beds">' + pkg.beds + '</span>' +
        '</div>' +
        '<p class="price-card-price">' + pkg.price + '</p>' +
        '<p class="price-card-desc">' + pkg.desc + '</p>' +
        '<div class="price-card-actions">' +
          '<button class="btn btn-outline btn-block" data-included="' + pkg.id + '">Detailed Inclusions</button>' +
          '<button class="btn btn-primary btn-block" data-select="' + pkg.id + '">Book This Clean</button>' +
        '</div>';
      pricingGrid.appendChild(card);
    });
  }

  function setMode(mode) {
    currentMode = mode;
    toggleStandard.classList.toggle("is-active", mode === "standard");
    toggleQuick.classList.toggle("is-active", mode === "quick");
    toggleStandard.setAttribute("aria-selected", mode === "standard");
    toggleQuick.setAttribute("aria-selected", mode === "quick");
    pkgThumb.style.transform = mode === "standard" ? "translateX(0)" : "translateX(100%)";
    renderPricingGrid(mode);
  }

  toggleStandard.addEventListener("click", function () { setMode("standard"); });
  toggleQuick.addEventListener("click", function () { setMode("quick"); });
  document.querySelectorAll("[data-package-mode]").forEach(function (button) {
    button.addEventListener("click", function () {
      setMode(button.getAttribute("data-package-mode"));
      document.getElementById("packages").scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  function findPackage(id) {
    return PACKAGES.standard.concat(PACKAGES.quick).find(function (p) { return p.id === id; });
  }

  /* ---------- What's Included modal ---------- */
  const includedModal = document.getElementById("includedModal");
  const includedModalTitle = document.getElementById("includedModalTitle");
  const includedModalEyebrow = document.getElementById("includedModalEyebrow");
  const includedModalBody = document.getElementById("includedModalBody");
  const includedModalBookBtn = document.getElementById("includedModalBookBtn");
  let includedModalPkgId = null;

  function openIncluded(pkgId) {
    const pkg = findPackage(pkgId);
    if (!pkg) return;
    includedModalPkgId = pkgId;
    const isStandard = pkgId.indexOf("std-") === 0;
    includedModalEyebrow.textContent = isStandard ? "What's Included — Elite Home Clean" : "What's Included — Elite Quick Clean";
    includedModalTitle.textContent = pkg.name + " — " + pkg.beds;

    let html = "";
    INCLUDED_ORDER.forEach(function (key) {
      const section = INCLUDED[key];
      const items = isStandard ? section.standard : section.quick;
      html += '<details class="included-group">' +
        '<summary>' + section.title + '</summary>' +
        '<ul>' + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + '</ul>' +
        '</details>';
    });
    if (isStandard) {
      html += '<details class="included-group included-group-highlight">' +
        '<summary>' + STANDARD_ONLY_SECTIONS.laundryServices.title + '</summary>' +
        '<ul>' + STANDARD_ONLY_SECTIONS.laundryServices.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + '</ul>' +
        '</details>';
      html += '<details class="included-group">' +
        '<summary>' + STANDARD_ONLY_SECTIONS.petRelated.title + '</summary>' +
        '<ul>' + STANDARD_ONLY_SECTIONS.petRelated.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + '</ul>' +
        '</details>';
    }
    includedModalBody.innerHTML = html;
    openModal(includedModal);
  }

  pricingGrid.addEventListener("click", function (e) {
    const includedBtn = e.target.closest("[data-included]");
    const selectBtn = e.target.closest("[data-select]");
    if (includedBtn) openIncluded(includedBtn.getAttribute("data-included"));
    if (selectBtn) startBookingWithPackage(selectBtn.getAttribute("data-select"));
  });

  includedModalBookBtn.addEventListener("click", function () {
    closeModal(includedModal);
    if (includedModalPkgId) startBookingWithPackage(includedModalPkgId);
  });

  /* ============================================================
     LAUNDRY CALCULATOR
     ============================================================ */
  let laundryService = "wash";
  let laundrySize = "small";
  const laundryServiceChips = document.getElementById("laundryServiceChips");
  const laundrySizeChips = document.getElementById("laundrySizeChips");
  const laundryPriceEl = document.getElementById("laundryPrice");
  const laundryIncludedList = document.getElementById("laundryIncludedList");
  const laundrySelection = document.getElementById("laundrySelection");

  function renderLaundry() {
    const price = LAUNDRY_PRICING.wash[laundrySize];
    laundryPriceEl.textContent = "R" + price;
    document.querySelectorAll("[data-load-price]").forEach(function (el) {
      el.textContent = "R" + LAUNDRY_PRICING.wash[el.getAttribute("data-load-price")];
    });
    const sizeLabel = LAUNDRY_LABELS.size[laundrySize].replace("up to", "maximum");
    laundrySelection.textContent = sizeLabel + " · on-site";
    const facts = [
      ["Washing", "Included"],
      ["Drying", "Included"],
      ["Ironing", "Included"],
      ["Folding", "Included"],
      ["Hanging", "Included"],
      ["Service location", "On-site in your home"]
    ];
    laundryIncludedList.innerHTML = facts.map(function (fact) {
      return "<div><dt>" + fact[0] + "</dt><dd>" + fact[1] + "</dd></div>";
    }).join("");
  }
  if (laundryServiceChips) {
    laundryServiceChips.addEventListener("click", function (e) {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      laundryServiceChips.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); c.setAttribute("aria-pressed", "false"); });
      chip.classList.add("is-active");
      chip.setAttribute("aria-pressed", "true");
      laundryService = chip.getAttribute("data-service");
      renderLaundry();
    });
  }
  laundrySizeChips.addEventListener("click", function (e) {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    laundrySizeChips.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); c.setAttribute("aria-pressed", "false"); });
    chip.classList.add("is-active");
    chip.setAttribute("aria-pressed", "true");
    laundrySize = chip.getAttribute("data-size");
    renderLaundry();
  });
  renderLaundry();

  document.getElementById("laundryBookBtn").addEventListener("click", function () {
    startBookingWithLaundry(laundryService, laundrySize);
  });

  /* ============================================================
     DEEP CLEANING interest
     ============================================================ */


  /* ============================================================
     FAQ ACCORDION
     ============================================================ */
  const faqList = document.getElementById("faqList");
  FAQS.forEach(function (faq) {
    const item = document.createElement("details");
    item.className = "faq-item";
    item.innerHTML = "<summary>" + faq.q + "</summary><p>" + faq.a + "</p>";
    faqList.appendChild(item);
  });

  /* ============================================================
     MODAL open/close helpers
     ============================================================ */
  function openModal(el) {
    el._trigger = document.activeElement;
    el.hidden = false;
    document.body.classList.add("modal-open");
    requestAnimationFrame(function () {
      el.classList.add("is-visible");
      const closeBtn = el.querySelector(".modal-close");
      if (closeBtn) closeBtn.focus();
    });
  }
  function closeModal(el) {
    el.classList.remove("is-visible");
    document.body.classList.remove("modal-open");
    setTimeout(function () {
      el.hidden = true;
      if (el._trigger && typeof el._trigger.focus === "function") el._trigger.focus();
    }, 200);
  }
  [
    ["includedModalClose", includedModal],
    ["bookingModalClose", document.getElementById("bookingModal")]
  ].forEach(function (pair) {
    document.getElementById(pair[0]).addEventListener("click", function () { closeModal(pair[1]); });
  });
  document.querySelectorAll(".modal-overlay").forEach(function (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal(overlay);
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay:not([hidden])").forEach(closeModal);
    }
    if (e.key === "Tab") {
      const openModalEl = document.querySelector(".modal-overlay.is-visible");
      if (!openModalEl) return;
      const focusable = openModalEl.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  });

  /* ============================================================
     BOOKING MODAL — multi-step flow
     ============================================================ */
  const bookingModal = document.getElementById("bookingModal");
  const bookingSteps = bookingModal.querySelectorAll(".booking-step");
  const bpSteps = bookingModal.querySelectorAll(".bp-step");
  const step2Content = document.getElementById("step2Content");
  const bookingDetailsForm = document.getElementById("bookingDetailsForm");
  const bookingSummary = document.getElementById("bookingSummary");
  const hoursNote = document.getElementById("hoursNote");

  const booking = {
    service: null,       // "Home Cleaning" | "Laundry" | "Corporate Cleaning" | "Deep Cleaning"
    packageId: null,      // for home cleaning
    laundryService: null,
    laundrySize: null,
    frequency: null,
    details: {}
  };

  function resetBooking() {
    booking.service = null;
    booking.packageId = null;
    booking.laundryService = null;
    booking.laundrySize = null;
    booking.frequency = null;
    booking.details = {};
    bookingDetailsForm.reset();
  }

  function goToStep(n) {
    bookingSteps.forEach(function (s) {
      s.classList.toggle("is-active", s.getAttribute("data-step") === String(n));
    });
    bpSteps.forEach(function (s) {
      const stepNum = parseInt(s.getAttribute("data-step"), 10);
      s.classList.toggle("is-active", stepNum <= n);
    });
    if (n === 2) renderStep2();
    if (n === 4) renderSummary();
    if (n === 5) {
      hoursNote.textContent = isWithinOperatingHours()
        ? "We're currently open — we'll aim to confirm your request quickly."
        : "We're currently outside operating hours. Your enquiry will be attended to as soon as we reopen.";
    }
  }

  function openBookingModal() {
    resetBooking();
    goToStep(1);
    openModal(bookingModal);
  }

  document.getElementById("bookNowNavBtn").addEventListener("click", openBookingModal);
  document.getElementById("heroBookBtn").addEventListener("click", openBookingModal);
  document.getElementById("pricingBookBtn").addEventListener("click", openBookingModal);
  document.getElementById("recurringBookBtn").addEventListener("click", function () {
    resetBooking();
    booking.service = "Home Cleaning";
    booking.frequency = "Weekly";
    openModal(bookingModal);
    goToStep(2);
  });
  document.getElementById("finalCtaBookBtn").addEventListener("click", openBookingModal);
  document.getElementById("mobileStickyBookBtn").addEventListener("click", openBookingModal);

  function startBookingWithPackage(pkgId) {
    resetBooking();
    booking.service = "Home Cleaning";
    booking.packageId = pkgId;
    openModal(bookingModal);
    goToStep(2);
  }
  function startBookingWithLaundry(service, size) {
    resetBooking();
    booking.service = "Laundry";
    booking.laundryService = service;
    booking.laundrySize = size;
    openModal(bookingModal);
    goToStep(2);
  }
  window.startBookingWithPackage = startBookingWithPackage;

  /* Step 1: choose service */
  bookingModal.querySelector('.booking-step[data-step="1"]').addEventListener("click", function (e) {
    const btn = e.target.closest("[data-service]");
    if (!btn) return;
    booking.service = btn.getAttribute("data-service");
    goToStep(2);
  });

  /* Step 2 rendering, based on service */
  function renderStep2() {
    let html = "";
    if (booking.service === "Home Cleaning") {
      html += '<div class="field-group"><span class="field-label">Choose your cleaning service</span><div class="chip-row" id="bkTypeChips">' +
        '<button class="chip" data-type="standard">Elite Home Clean</button>' +
        '<button class="chip" data-type="quick">Elite Quick Clean</button>' +
        '</div></div>' +
        '<div class="field-group"><span class="field-label">Package</span><div class="option-grid option-grid-compact" id="bkPackageOptions"></div></div>' +
        '<div class="field-group"><span class="field-label">Cleaning frequency</span><div class="chip-row" id="bkFrequencyChips">' +
          '<button class="chip" data-frequency="Weekly">Weekly</button>' +
          '<button class="chip" data-frequency="Fortnightly">Fortnightly</button>' +
          '<button class="chip" data-frequency="Once-Off">Once-Off</button>' +
        '</div></div>';
      step2Content.innerHTML = html;
      const typeChips = document.getElementById("bkTypeChips");
      const pkgOptions = document.getElementById("bkPackageOptions");
      const frequencyChips = document.getElementById("bkFrequencyChips");
      booking.frequency = booking.frequency || "Once-Off";
      frequencyChips.querySelectorAll(".chip").forEach(function (c) {
        c.classList.toggle("is-active", c.getAttribute("data-frequency") === booking.frequency);
      });
      frequencyChips.addEventListener("click", function (e) {
        const chip = e.target.closest(".chip");
        if (!chip) return;
        frequencyChips.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        booking.frequency = chip.getAttribute("data-frequency");
      });

      function renderPkgOptions(type) {
        pkgOptions.innerHTML = PACKAGES[type].map(function (p) {
          const active = booking.packageId === p.id ? " is-active" : "";
          return '<button class="option-card option-card-sm' + active + '" data-pkg="' + p.id + '">' + p.name + '<br><small>' + p.beds + ' · ' + p.price + '</small></button>';
        }).join("");
      }
      let currentType = booking.packageId && booking.packageId.indexOf("qk-") === 0 ? "quick" : "standard";
      typeChips.querySelectorAll(".chip").forEach(function (c) {
        c.classList.toggle("is-active", c.getAttribute("data-type") === currentType);
      });
      renderPkgOptions(currentType);

      typeChips.addEventListener("click", function (e) {
        const chip = e.target.closest(".chip");
        if (!chip) return;
        typeChips.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        booking.packageId = null;
        renderPkgOptions(chip.getAttribute("data-type"));
      });
      pkgOptions.addEventListener("click", function (e) {
        const opt = e.target.closest("[data-pkg]");
        if (!opt) return;
        booking.packageId = opt.getAttribute("data-pkg");
        pkgOptions.querySelectorAll(".option-card").forEach(function (o) { o.classList.remove("is-active"); });
        opt.classList.add("is-active");
        clearFieldError(step2Content);
      });

    } else if (booking.service === "Laundry") {
      html += '<div class="field-group"><span class="field-label">Load size</span><div class="chip-row" id="bkLaundrySize">' +
        '<button class="chip" data-size="small">Small (up to 5kg)</button>' +
        '<button class="chip" data-size="medium">Medium (up to 8kg)</button>' +
        '<button class="chip" data-size="large">Large (up to 12kg)</button>' +
        '</div></div>';
      step2Content.innerHTML = html;
      const sizeChips = document.getElementById("bkLaundrySize");
      booking.laundryService = "wash";
      booking.laundrySize = booking.laundrySize || "small";
      sizeChips.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("is-active", c.getAttribute("data-size") === booking.laundrySize); });
      sizeChips.addEventListener("click", function (e) {
        const chip = e.target.closest(".chip"); if (!chip) return;
        sizeChips.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        booking.laundrySize = chip.getAttribute("data-size");
      });

    }
  }

  /* ---------- validation message helper ---------- */
  function showFieldError(container, message) {
    let el = container.querySelector(".field-error");
    if (!el) {
      el = document.createElement("p");
      el.className = "field-error";
      container.appendChild(el);
    }
    el.textContent = message;
  }
  function clearFieldError(container) {
    const el = container.querySelector(".field-error");
    if (el) el.remove();
  }

  /* Step navigation buttons */
  bookingModal.addEventListener("click", function (e) {
    const back = e.target.closest("[data-back]");
    const next = e.target.closest("[data-next]");
    if (back) {
      const current = parseInt(back.closest(".booking-step").getAttribute("data-step"), 10);
      goToStep(Math.max(1, current - 1));
    }
    if (next) {
      const targetStep = parseInt(next.getAttribute("data-next"), 10);
      const currentStep = parseInt(next.closest(".booking-step").getAttribute("data-step"), 10);
      if (currentStep === 2) {
        clearFieldError(step2Content);
        if (booking.service === "Home Cleaning" && !booking.packageId) {
          showFieldError(step2Content, "Please choose a package to continue.");
          return;
        }
      }
      if (currentStep === 3) {
        if (!bookingDetailsForm.reportValidity()) return;
        const fd = new FormData(bookingDetailsForm);
        booking.details = {
          firstName: fd.get("firstName") || "",
          lastName: fd.get("lastName") || "",
          mobile: fd.get("mobile") || "",
          email: fd.get("email") || "",
          suburb: fd.get("suburb") || "",
          address: fd.get("address") || "",
          date: fd.get("date") || "",
          time: fd.get("time") || "",
          notes: fd.get("notes") || ""
        };
      }
      goToStep(targetStep);
    }
  });

  /* Step 4: summary + step 5 send */
  function serviceSummaryLines() {
    const lines = [];
    if (booking.service === "Home Cleaning" && booking.packageId) {
      const pkg = findPackage(booking.packageId);
      lines.push({ label: "Service", value: pkg.id.indexOf("qk-") === 0 ? "Elite Quick Clean" : "Elite Home Clean" });
      lines.push({ label: "Home size", value: pkg.beds });
      lines.push({ label: "Frequency", value: booking.frequency || "Once-Off" });
      lines.push({ label: "Price", value: pkg.price });
    } else if (booking.service === "Laundry") {
      const size = booking.laundrySize || "small";
      lines.push({ label: "Service", value: "Elite Laundry — On-site" });
      lines.push({ label: "Load size", value: LAUNDRY_LABELS.size[size] });
      lines.push({ label: "Price", value: "R" + LAUNDRY_PRICING.wash[size] });
    } else {
      lines.push({ label: "Service", value: booking.service || "—" });
    }
    return lines;
  }

  function renderSummary() {
    const lines = serviceSummaryLines();
    const d = booking.details;
    let html = '<dl class="summary-dl">';
    lines.forEach(function (l) { html += "<dt>" + l.label + "</dt><dd>" + l.value + "</dd>"; });
    html += "<dt>Name</dt><dd>" + (d.firstName + " " + d.lastName).trim() + "</dd>";
    html += "<dt>Mobile</dt><dd>" + (d.mobile || "—") + "</dd>";
    if (d.email) html += "<dt>Email</dt><dd>" + d.email + "</dd>";
    html += "<dt>Suburb / Area</dt><dd>" + (d.suburb || "—") + "</dd>";
    if (d.address) html += "<dt>Address</dt><dd>" + d.address + "</dd>";
    html += "<dt>Preferred date</dt><dd>" + (d.date || "Flexible") + "</dd>";
    html += "<dt>Preferred time</dt><dd>" + (d.time || "Flexible") + "</dd>";
    if (d.notes) html += "<dt>Notes</dt><dd>" + d.notes + "</dd>";
    html += "</dl>";
    bookingSummary.innerHTML = html;
  }

  function buildEnquiryMessage() {
    const d = booking.details;
    let serviceLine = "";
    let subject = "Elite Cleaners Booking Request";

    if (booking.service === "Home Cleaning" && booking.packageId) {
      const pkg = findPackage(booking.packageId);
      const type = pkg.id.indexOf("qk-") === 0 ? "Elite Quick Clean" : "Elite Home Clean";
      serviceLine = "I would like to book " + type + " for a " + pkg.beds + " home.";
      serviceLine += " Preferred frequency: " + (booking.frequency || "Once-Off") + ".";
      if (pkg.priceValue === null) serviceLine += " I understand this requires a custom quote.";
      subject = "Elite Cleaners Booking Request | " + pkg.name;
    } else if (booking.service === "Laundry") {
      const size = booking.laundrySize || "small";
      serviceLine = "I would like to book Elite Laundry — on-site " + LAUNDRY_LABELS.size[size] + ".";
      subject = "Elite Laundry Booking Request | " + LAUNDRY_LABELS.size[size].split(" ")[0] + " Load";
    } else if (booking.service === "Deep Cleaning") {
      serviceLine = "I'd like to register my interest in Elite Cleaners' upcoming Deep Cleaning services.";
      subject = "Deep Cleaning — Register Interest";
    } else {
      serviceLine = "I would like to make an enquiry about " + (booking.service || "your services") + ".";
    }

    const lines = [
      "Hi Elite Cleaners,",
      "",
      serviceLine,
      "",
      "Name: " + (d.firstName + " " + d.lastName).trim(),
      "Mobile: " + (d.mobile || ""),
      (d.email ? "Email: " + d.email : null),
      "Location: " + (d.suburb || "") + (d.address ? " — " + d.address : ""),
      "Preferred Date: " + (d.date || "Flexible"),
      "Preferred Time: " + (d.time || "Flexible"),
      (d.notes ? "Additional Information: " + d.notes : "Additional Information: —"),
      "",
      "Please confirm availability.",
      "",
      "Thank you."
    ].filter(function (l) { return l !== null; });

    return { subject: subject, body: lines.join("\n") };
  }

  document.getElementById("sendWhatsapp").addEventListener("click", function () {
    const m = buildEnquiryMessage();
    window.open(waLink(m.body), "_blank", "noopener");
  });
  document.getElementById("sendEmail").addEventListener("click", function () {
    const m = buildEnquiryMessage();
    window.location.href = mailLink(m.subject, m.body);
  });

  /* ---------- init ---------- */
  const guaranteeSection = document.getElementById("eliteGuarantee");
  if (ENABLE_ELITE_CLEAN_GUARANTEE && guaranteeSection) guaranteeSection.hidden = false;
  setMode("standard");
})();
