// SCRIPT.JS – Apetit Mirijevo

// -------------------------
// POMOĆNE STVARI
// -------------------------

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// mobilni meni
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("nav-open");
  });
}

// skrol do order sekcije
function scrollToOrder() {
  const orderSection = document.getElementById("order");
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: "smooth" });
  }
}

// svi elementi koji startuju narudžbinu
document.querySelectorAll("[data-start-order]").forEach((btn) => {
  btn.addEventListener("click", scrollToOrder);
});

// -------------------------
// MENI PODACI
// -------------------------

// ovde možeš menjati cene, nazive, opise, slike…

const MENU_DATA = [
  {
    id: "rostilj",
    name: "Roštilj",
    image: "assets/img/cat-rostilj.jpg",
    items: [
      {
        id: "pazarski-cevapi",
        name: "Pazarski ćevapi",
        desc: "Ćevapi na ćumuru, somun, luk.",
        price: 520,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "pljeskavica",
        name: "Pljeskavica",
        desc: "Klasična pljeskavica na ćumuru.",
        price: 420,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "pljeskavica-pojacana",
        name: "Pojačana pljeskavica",
        desc: "Veća porcija mesa za pravi apetit.",
        price: 480,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "pljeskavica-punjena",
        name: "Punjena pljeskavica",
        desc: "Punjenje kačkavaljem, sočna iznutra.",
        price: 520,
        image: "assets/img/gurmanska.jpg",
      },
      {
        id: "pljeskavica-cheese",
        name: "Čiz pljeskavica",
        desc: "Pljeskavica sa topljenim sirom.",
        price: 520,
        image: "assets/img/gurmanska.jpg",
      },
      {
        id: "pljeskavica-leskovacka",
        name: "Leskovačka pljeskavica",
        desc: "Pikantna, po leskovačkoj recepturi.",
        price: 540,
        image: "assets/img/gurmanska.jpg",
      },
      {
        id: "pljeskavica-gurmanska",
        name: "Gurmanska pljeskavica",
        desc: "Punjena slaninom i sirom, najtraženija.",
        price: 560,
        image: "assets/img/gurmanska.jpg",
      },
      {
        id: "pljeskavica-gurmanska-pojacana",
        name: "Gurmanska pojačana",
        desc: "Veća gurmanska za najveći apetit.",
        price: 620,
        image: "assets/img/gurmanska.jpg",
      },
      {
        id: "pljeskavica-susam",
        name: "Susam pljeskavica",
        desc: "Pljeskavica u lepinji sa susamom.",
        price: 440,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "pljeskavica-petit",
        name: "Petit pljeskavica",
        desc: "Manja porcija, idealna za užinu.",
        price: 360,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "cevapi",
        name: "Ćevapi",
        desc: "Ćevapi u somunu, luk po želji.",
        price: 480,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "cevapi-rolovani",
        name: "Rolovani ćevapi",
        desc: "Ćevapi u slanini, zapečeni.",
        price: 540,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "siscevap",
        name: "Šiš ćevap",
        desc: "Meso na ražnjiću, sočno i dimljeno.",
        price: 520,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "siscevap-punjeni",
        name: "Šiš ćevap punjeni",
        desc: "Punjeno sirom, zapečeno.",
        price: 560,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "kobasica-vurst",
        name: "Vurst kobasica",
        desc: "Blago pikantna kobasica sa prilogom.",
        price: 480,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "bela-vesalica",
        name: "Bela vešalica",
        desc: "Svinjska vešalica na žaru.",
        price: 620,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "bela-vesalica-punjena",
        name: "Bela vešalica punjena",
        desc: "Punjenje sirom i slaninom.",
        price: 680,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "pileci-batak",
        name: "Pileći batak",
        desc: "Batak sa roštilja.",
        price: 480,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "pileci-batak-punjeni",
        name: "Pileći batak punjeni",
        desc: "Punjenje sirom, hrskava korica.",
        price: 540,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "pileci-file",
        name: "Pileći file",
        desc: "Piletina sa roštilja, bez kosti.",
        price: 520,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "pileci-file-punjeni",
        name: "Pileći file punjeni",
        desc: "File punjen kačkavaljem.",
        price: 580,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "rolovano-belo",
        name: "Rolovano belo",
        desc: "Piletina rolovana sa slaninom.",
        price: 580,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "pileca-becka",
        name: "Pileća bečka",
        desc: "Pohovana piletina, klasična bečka.",
        price: 520,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "pileci-file-susam",
        name: "Pileći file u susamu",
        desc: "Panirani pileći medaljoni u susamu.",
        price: 540,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "apetit-stapici",
        name: "Apetit pileći štapići",
        desc: "Pileći štapići sa dip sosom.",
        price: 520,
        image: "assets/img/cat-rostilj.jpg",
      },
      {
        id: "poh-kackavalj",
        name: "Pohovani kačkavalj",
        desc: "Pohovani sir, hrskav spolja, mekan iznutra.",
        price: 520,
        image: "assets/img/cat-rostilj.jpg",
      },
    ],
  },
  {
    id: "rostilj-kg",
    name: "Roštilj na kilogram",
    image: "assets/img/cat-rostilj-kg.jpg",
    items: [
      {
        id: "kg-apetit-mix",
        name: "Apetit mix",
        desc: "Miks pljeskavica, ćevapa i kobasica.",
        price: 1600,
        image: "assets/img/rostilj-mix.jpg",
      },
      {
        id: "kg-pazarski-cevapi",
        name: "Pazarski ćevapi na kg",
        desc: "Kilogram pazarskih ćevapa.",
        price: 1500,
        image: "assets/img/rostilj-mix.jpg",
      },
      {
        id: "kg-cevapi",
        name: "Ćevapi na kg",
        desc: "Ćevapi na kilogram.",
        price: 1400,
        image: "assets/img/rostilj-mix.jpg",
      },
      {
        id: "kg-pljeskavica",
        name: "Pljeskavica na kg",
        desc: "Pljeskavice na kilogram.",
        price: 1400,
        image: "assets/img/rostilj-mix.jpg",
      },
      {
        id: "kg-pileci-file",
        name: "Pileći file na kg",
        desc: "Piletina na kilogam, roštilj.",
        price: 1600,
        image: "assets/img/rostilj-mix.jpg",
      },
      {
        id: "kg-pileci-batak",
        name: "Pileći batak na kg",
        desc: "Bataci na kilogram.",
        price: 1500,
        image: "assets/img/rostilj-mix.jpg",
      },
      {
        id: "kg-rolovano-meso",
        name: "Rolovano meso na kg",
        desc: "Rolovani specijalitet na kilogram.",
        price: 1700,
        image: "assets/img/rostilj-mix.jpg",
      },
      {
        id: "kg-leskovacka",
        name: "Leskovačka na kg",
        desc: "Leskovačka pljeskavica na kilogram.",
        price: 1600,
        image: "assets/img/rostilj-mix.jpg",
      },
      {
        id: "kg-kobasice",
        name: "Kobasice na kg",
        desc: "Razne kobasice na kilogram.",
        price: 1500,
        image: "assets/img/rostilj-mix.jpg",
      },
      {
        id: "kg-gurmanska",
        name: "Gurmanska na kg",
        desc: "Gurmanske pljeskavice na kilogram.",
        price: 1800,
        image: "assets/img/rostilj-mix.jpg",
      },
    ],
  },
  {
    id: "pizze",
    name: "Pizze",
    image: "assets/img/cat-pizze.jpg",
    items: [
      {
        id: "pizza-capricciosa",
        name: "Capricciosa",
        desc: "Šunka, pečurke, sir, paradajz sos.",
        price: 780,
        image: "assets/img/cat-pizze.jpg",
      },
      {
        id: "pizza-margherita",
        name: "Margarita",
        desc: "Sir i paradajz, klasika.",
        price: 680,
        image: "assets/img/cat-pizze.jpg",
      },
      {
        id: "pizza-vezuvio",
        name: "Vezuvio",
        desc: "Kulen, sir, sos.",
        price: 820,
        image: "assets/img/cat-pizze.jpg",
      },
      {
        id: "pizza-tuna",
        name: "Tuna",
        desc: "Tuna, luk, sir.",
        price: 820,
        image: "assets/img/cat-pizze.jpg",
      },
      {
        id: "pizza-quattro-formaggi",
        name: "Quattro Formaggi",
        desc: "Četiri vrste sira.",
        price: 880,
        image: "assets/img/cat-pizze.jpg",
      },
      {
        id: "pizza-quattro-stagioni",
        name: "Quattro Stagioni",
        desc: "Četiri ukusa na jednoj pici.",
        price: 880,
        image: "assets/img/cat-pizze.jpg",
      },
      {
        id: "pizza-diavolo",
        name: "Diavolo",
        desc: "Pikantna pizza sa kulenom.",
        price: 840,
        image: "assets/img/cat-pizze.jpg",
      },
      {
        id: "pizza-apetit",
        name: "Apetit",
        desc: "Kućna pizza sa našim miksom.",
        price: 880,
        image: "assets/img/cat-pizze.jpg",
      },
      {
        id: "pizza-pollo",
        name: "Pollo",
        desc: "Piletina, sir, pavlaka.",
        price: 840,
        image: "assets/img/cat-pizze.jpg",
      },
      {
        id: "pizza-top",
        name: "Top",
        desc: "Poseban Apetit mix sastojaka.",
        price: 900,
        image: "assets/img/cat-pizze.jpg",
      },
    ],
  },
  {
    id: "sendvici",
    name: "Sendviči",
    image: "assets/img/cat-sendvici.jpg",
    items: [
      { id: "sndv-sunka", name: "Šunka sendvič", desc: "Šunka, sir, povrće.", price: 420, image: "assets/img/cat-sendvici.jpg" },
      { id: "sndv-pecenica", name: "Pečenica sendvič", desc: "Dimljena pečenica, povrće.", price: 460, image: "assets/img/cat-sendvici.jpg" },
      { id: "sndv-vrat", name: "Vrat sendvič", desc: "Svinjski vrat, roštilj, povrće.", price: 460, image: "assets/img/cat-sendvici.jpg" },
      { id: "sndv-kulen", name: "Kulen sendvič", desc: "Pikantni kulen, sir, povrće.", price: 460, image: "assets/img/cat-sendvici.jpg" },
      { id: "sndv-tuna", name: "Tuna sendvič", desc: "Tuna, kukuruz, majonez.", price: 440, image: "assets/img/cat-sendvici.jpg" },
      { id: "sndv-klub", name: "Klub sendvič", desc: "Višeslojni sendvič, piletina, slanina.", price: 520, image: "assets/img/cat-sendvici.jpg" },
      { id: "sndv-apetit", name: "Apetit sendvič", desc: "Kućni specijalitet.", price: 520, image: "assets/img/cat-sendvici.jpg" },
      { id: "sndv-top", name: "Top sendvič", desc: "Još jači Apetit mix.", price: 560, image: "assets/img/cat-sendvici.jpg" },
      { id: "sndv-srpski", name: "Srpski sendvič", desc: "Kajmak, pečenica, povrće.", price: 520, image: "assets/img/cat-sendvici.jpg" },
      { id: "sndv-zlatiborski", name: "Zlatiborski sendvič", desc: "Suvo meso, kajmak.", price: 560, image: "assets/img/cat-sendvici.jpg" },
      { id: "sndv-pileci-wrap", name: "Pileći wrap", desc: "Piletina, povrće, sos u tortilji.", price: 520, image: "assets/img/cat-sendvici.jpg" },
    ],
  },
  {
    id: "slane",
    name: "Slane palačinke",
    image: "assets/img/cat-slane.jpg",
    items: [
      { id: "slana-sunka", name: "Šunka • kačkavalj • pavlaka", desc: "Klasična slana palačinka.", price: 460, image: "assets/img/cat-slane.jpg" },
      { id: "slana-pecenica", name: "Pečenica • kačkavalj • pavlaka", desc: "Dimljena pečenica, punjenje do kraja.", price: 480, image: "assets/img/cat-slane.jpg" },
      { id: "slana-kulen", name: "Kulen • kačkavalj • pavlaka", desc: "Pikantni kulen.", price: 480, image: "assets/img/cat-slane.jpg" },
      { id: "slana-vrat", name: "Vrat • kačkavalj • pavlaka", desc: "Svinjski vrat, sir.", price: 480, image: "assets/img/cat-slane.jpg" },
      { id: "slana-urnebes", name: "Urnebes • kačkavalj • pavlaka", desc: "Za ljubitelje ljutog.", price: 480, image: "assets/img/cat-slane.jpg" },
      { id: "slana-susam", name: "Susam • kačkavalj • pavlaka", desc: "Poh susam i sir.", price: 480, image: "assets/img/cat-slane.jpg" },
      { id: "slana-apetit", name: "Apetit slana palačinka", desc: "Kućni mix sastojaka.", price: 520, image: "assets/img/cat-slane.jpg" },
      { id: "slana-pohovana", name: "Pohovana palačinka", desc: "Hrskavo pohovana, punjena.", price: 520, image: "assets/img/cat-slane.jpg" },
      { id: "slana-uzicka", name: "Užička palačinka", desc: "Puna suhomesnatog i sira.", price: 520, image: "assets/img/cat-slane.jpg" },
      { id: "slana-prazna", name: "Prazna palačinka", desc: "Bez punjenja.", price: 260, image: "assets/img/cat-slane.jpg" },
    ],
  },
  {
    id: "slatke",
    name: "Slatke palačinke",
    image: "assets/img/cat-slatke.jpg",
    items: [
      { id: "slatka-dzem", name: "Džem", desc: "Domaći stil, voćni džem.", price: 360, image: "assets/img/cat-slatke.jpg" },
      { id: "slatka-eurokrem", name: "Eurokrem", desc: "Kakao-lešnik krem.", price: 380, image: "assets/img/cat-slatke.jpg" },
      { id: "slatka-nutella", name: "Nutella", desc: "Nutella krem, punjeno do kraja.", price: 460, image: "assets/img/cat-slatke.jpg" },
      { id: "slatka-pistaci", name: "Pistaći krem", desc: "Pistaći, krem, luks varijanta.", price: 520, image: "assets/img/cat-slatke.jpg" },
      { id: "slatka-linolada-bela", name: "Bela linolada", desc: "Beli krem, slatko i kremasto.", price: 440, image: "assets/img/cat-slatke.jpg" },
      { id: "slatka-milka", name: "Milka", desc: "Milka čokoladni krem.", price: 460, image: "assets/img/cat-slatke.jpg" },
      { id: "slatka-kinder", name: "Kinder", desc: "Kinder punjenje.", price: 480, image: "assets/img/cat-slatke.jpg" },
      { id: "slatka-ruska-kapa", name: "Ruska kapa", desc: "Ukus ruske kape u palačinki.", price: 520, image: "assets/img/cat-slatke.jpg" },
      { id: "slatka-cheesecake", name: "Cheesecake", desc: "Fil sa ukusom čiz kejk-a.", price: 520, image: "assets/img/cat-slatke.jpg" },
      { id: "slatka-snickers", name: "Snickers + kikiriki", desc: "Čokolada, karamela i kikiriki.", price: 520, image: "assets/img/cat-slatke.jpg" },
    ],
  },
  {
    id: "ostalo",
    name: "Ostalo",
    image: "assets/img/cat-ostalo.jpg",
    items: [
      { id: "pomfrit", name: "Pomfrit", desc: "Hrskav krompir, so.", price: 280, image: "assets/img/cat-ostalo.jpg" },
      { id: "lepinja", name: "Lepinja", desc: "Sveža lepinja.", price: 80, image: "assets/img/cat-ostalo.jpg" },
      { id: "somun", name: "Somun", desc: "Somun sa susamom.", price: 100, image: "assets/img/cat-ostalo.jpg" },
    ],
  },
  {
    id: "voda-sokovi",
    name: "Voda i sokovi",
    image: "assets/img/cat-voda.jpg",
    items: [
      { id: "rosa-voda", name: "Rosa voda 0.5l", desc: "Negazirana voda.", price: 120, image: "assets/img/cat-voda.jpg" },
      { id: "coca-cola", name: "Coca-Cola 0.5l", desc: "Gazirano piće.", price: 150, image: "assets/img/cat-voda.jpg" },
      { id: "coca-cola-zero", name: "Coca-Cola Zero 0.5l", desc: "Bez šećera.", price: 150, image: "assets/img/cat-voda.jpg" },
      { id: "fanta", name: "Fanta 0.5l", desc: "Narandža.", price: 150, image: "assets/img/cat-voda.jpg" },
      { id: "sprite", name: "Sprite 0.5l", desc: "Limun-limeta.", price: 150, image: "assets/img/cat-voda.jpg" },
      { id: "schweppes", name: "Schweppes 0.5l", desc: "Gorki/lemon tonik.", price: 160, image: "assets/img/cat-voda.jpg" },
      { id: "nestea", name: "NesTea 0.5l", desc: "Ledeni čaj.", price: 150, image: "assets/img/cat-voda.jpg" },
      { id: "ultra", name: "Ultra Energy", desc: "Energetsko piće.", price: 190, image: "assets/img/cat-voda.jpg" },
      { id: "next-sok", name: "Next sok 0.5l", desc: "Voćni sok.", price: 160, image: "assets/img/cat-voda.jpg" },
    ],
  },
];

// pića koja se nude u modalu “Piće uz ovo?”
const DRINKS = [
  { id: "d-cola", name: "Coca-Cola 0.5l" },
  { id: "d-cola-zero", name: "Coca-Cola Zero 0.5l" },
  { id: "d-fanta", name: "Fanta 0.5l" },
  { id: "d-sprite", name: "Sprite 0.5l" },
  { id: "d-schweppes", name: "Schweppes 0.5l" },
  { id: "d-rosa", name: "Rosa voda 0.5l" },
  { id: "d-ultra", name: "Ultra Energy" },
];

// helper da iz DRINKS pregazimo u stvarne stavke iz kategorije voda-sokovi
function getDrinkPriceByName(name) {
  const cat = MENU_DATA.find((c) => c.id === "voda-sokovi");
  if (!cat) return 0;
  const item = cat.items.find((i) => i.name.startsWith(name));
  return item ? item.price : 0;
}

// -------------------------
// RENDER KATEGORIJA & GRID
// -------------------------

const categoryGrid = document.getElementById("category-grid");
const orderCategoriesEl = document.getElementById("order-categories");
const itemsListEl = document.getElementById("items-list");
const currentCategoryTitleEl = document.getElementById("current-category-title");

function renderCategoryGrid() {
  if (!categoryGrid) return;
  categoryGrid.innerHTML = "";

  MENU_DATA.forEach((cat) => {
    const card = document.createElement("article");
    card.className = "food-card";
    card.dataset.categoryId = cat.id;

    card.innerHTML = `
      <div class="food-card-img">
        <img src="${cat.image}" alt="${cat.name}">
      </div>
      <div class="food-card-body">
        <h3>${cat.name}</h3>
        <div class="food-card-footer">
          <span class="food-card-label">Otvori meni</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      scrollToOrder();
      setActiveCategory(cat.id);
    });

    categoryGrid.appendChild(card);
  });
}

function renderOrderCategories() {
  if (!orderCategoriesEl) return;
  orderCategoriesEl.innerHTML = "";

  MENU_DATA.forEach((cat, index) => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.textContent = cat.name;
    btn.dataset.categoryId = cat.id;

    if (index === 0) {
      btn.classList.add("active");
      renderItemsForCategory(cat.id);
    }

    btn.addEventListener("click", () => setActiveCategory(cat.id));
    orderCategoriesEl.appendChild(btn);
  });
}

function setActiveCategory(categoryId) {
  document
    .querySelectorAll(".category-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.categoryId === categoryId));

  renderItemsForCategory(categoryId);
}

// -------------------------
// ITEMS LISTA
// -------------------------

function renderItemsForCategory(categoryId) {
  if (!itemsListEl) return;

  const category = MENU_DATA.find((c) => c.id === categoryId);
  if (!category) return;

  if (currentCategoryTitleEl) {
    currentCategoryTitleEl.textContent = category.name;
  }

  itemsListEl.innerHTML = "";

  category.items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "item-card";

    const imgSrc = item.image || category.image;

    li.innerHTML = `
      <div class="item-card-img">
        <img src="${imgSrc}" alt="${item.name}">
      </div>
      <div class="item-card-body">
        <h4>${item.name}</h4>
        <p class="item-card-desc">${item.desc || ""}</p>
        <div class="item-card-bottom">
          <span class="item-card-price">${item.price} RSD</span>
          <button class="btn small primary" data-open-item="${item.id}">
            Detaljnije
          </button>
        </div>
      </div>
    `;

    itemsListEl.appendChild(li);
  });

  // vežemo događaje za nove dugmiće
  itemsListEl.querySelectorAll("[data-open-item]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-open-item");
      openItemModal(id);
    });
  });
}

// -------------------------
// MODAL ZA PROIZVOD
// -------------------------

const modalBackdrop = document.getElementById("product-modal");
const modalCloseBtn = document.getElementById("modal-close");
const modalTitleEl = document.getElementById("modal-title");
const modalDescEl = document.getElementById("modal-desc");
const modalPriceEl = document.getElementById("modal-price");
const qtyMinusBtn = document.getElementById("qty-minus");
const qtyPlusBtn = document.getElementById("qty-plus");
const qtyValueEl = document.getElementById("qty-value");
const drinksListEl = document.getElementById("drinks-list");
const addToCartBtn = document.getElementById("add-to-cart");

let currentModalItem = null;
let currentQty = 1;

function findItemById(itemId) {
  for (const cat of MENU_DATA) {
    const item = cat.items.find((i) => i.id === itemId);
    if (item) return item;
  }
  return null;
}

function openItemModal(itemId) {
  const item = findItemById(itemId);
  if (!item || !modalBackdrop) return;

  currentModalItem = item;
  currentQty = 1;
  qtyValueEl.textContent = "1";
  modalTitleEl.textContent = item.name;
  modalDescEl.textContent = item.desc || "";
  modalPriceEl.textContent = `${item.price} RSD`;

  // pića u modalu
  if (drinksListEl) {
    drinksListEl.innerHTML = "";
    DRINKS.forEach((d) => {
      const label = document.createElement("label");
      label.className = "drink-option";

      const drinkPrice = getDrinkPriceByName(d.name.split(" 0.5")[0]) || 0;
      const priceText = drinkPrice ? ` (${drinkPrice} RSD)` : "";

      label.innerHTML = `
        <input type="checkbox" value="${d.id}">
        <span>${d.name}${priceText}</span>
      `;

      drinksListEl.appendChild(label);
    });
  }

  modalBackdrop.classList.add("open");
}

function closeItemModal() {
  if (modalBackdrop) {
    modalBackdrop.classList.remove("open");
  }
  currentModalItem = null;
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeItemModal);
}
if (modalBackdrop) {
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeItemModal();
  });
}

if (qtyMinusBtn) {
  qtyMinusBtn.addEventListener("click", () => {
    if (currentQty > 1) {
      currentQty--;
      qtyValueEl.textContent = String(currentQty);
    }
  });
}

if (qtyPlusBtn) {
  qtyPlusBtn.addEventListener("click", () => {
    currentQty++;
    qtyValueEl.textContent = String(currentQty);
  });
}

// -------------------------
// KORPA
// -------------------------

let cart = [];

const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const goCheckoutBtn = document.getElementById("go-checkout");
const clearCartBtn = document.getElementById("clear-cart");

const checkoutCartEl = document.getElementById("checkout-cart");
const checkoutTotalEl = document.getElementById("checkout-total");

function updateCartUI() {
  if (!cartItemsEl || !cartTotalEl) return;

  cartItemsEl.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    const p = document.createElement("p");
    p.className = "cart-empty";
    p.textContent = "Korpa je prazna.";
    cartItemsEl.appendChild(p);
  } else {
    cart.forEach((item) => {
      const row = document.createElement("div");
      row.className = "cart-row";

      const extrasText = item.drinks && item.drinks.length
        ? " + piće: " + item.drinks.map((d) => d.name).join(", ")
        : "";

      row.innerHTML = `
        <div>
          <div class="cart-row-name">${item.name} × ${item.qty}</div>
          ${
            extrasText
              ? `<div class="cart-row-extras">${extrasText}</div>`
              : ""
          }
        </div>
        <div class="cart-row-price">${item.total} RSD</div>
      `;

      cartItemsEl.appendChild(row);
      total += item.total;
    });
  }

  cartTotalEl.textContent = `${total} RSD`;

  if (goCheckoutBtn && clearCartBtn) {
    const disabled = cart.length === 0;
    goCheckoutBtn.disabled = disabled;
    clearCartBtn.disabled = disabled;
  }

  // checkout deo
  if (checkoutCartEl && checkoutTotalEl) {
    checkoutCartEl.innerHTML = cartItemsEl.innerHTML;
    checkoutTotalEl.textContent = `${total} RSD`;
  }
}

if (clearCartBtn) {
  clearCartBtn.addEventListener("click", () => {
    cart = [];
    updateCartUI();
  });
}

if (goCheckoutBtn) {
  goCheckoutBtn.addEventListener("click", () => {
    const checkoutSection = document.getElementById("checkout");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (addToCartBtn) {
  addToCartBtn.addEventListener("click", () => {
    if (!currentModalItem) return;

    // izabrana pića
    const chosenDrinks = [];
    if (drinksListEl) {
      drinksListEl.querySelectorAll("input[type=checkbox]:checked").forEach((input) => {
        const drinkId = input.value;
        const drinkDef = DRINKS.find((d) => d.id === drinkId);
        if (drinkDef) {
          const baseName = drinkDef.name.split(" 0.5")[0];
          const price = getDrinkPriceByName(baseName) || 0;
          chosenDrinks.push({
            id: drinkId,
            name: drinkDef.name,
            price,
          });
        }
      });
    }

    const baseTotal = currentModalItem.price * currentQty;
    const drinksTotal = chosenDrinks.reduce((sum, d) => sum + d.price, 0);
    const total = baseTotal + drinksTotal;

    cart.push({
      id: currentModalItem.id,
      name: currentModalItem.name,
      qty: currentQty,
      price: currentModalItem.price,
      drinks: chosenDrinks,
      total,
    });

    updateCartUI();
    closeItemModal();
  });
}

// -------------------------
// CHECKOUT FORMA (ZA SAD DEMO)
// -------------------------

const checkoutForm = document.getElementById("checkout-form");

if (checkoutForm) {
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Ovo je demo verzija – ovde će kasnije ići slanje narudžbine preko Viber-a / mail-a / backend-a."
    );
  });
}

// -------------------------
// BOTTOM MARQUEE – beskonačno
// (HTML već ima dva <span> unutra)
// -------------------------

// ništa ovde ne moramo u JS, sve radi preko CSS animacije
// samo da budemo sigurni da klasa postoji:
const bottomMarquee = document.querySelector(".bottom-marquee-track");
if (bottomMarquee && bottomMarquee.children.length < 2) {
  // ako slučajno ima samo jedan span, dupliramo tekst
  const clone = bottomMarquee.firstElementChild.cloneNode(true);
  bottomMarquee.appendChild(clone);
}

// -------------------------
// INIT
// -------------------------

renderCategoryGrid();
renderOrderCategories();
updateCartUI();
