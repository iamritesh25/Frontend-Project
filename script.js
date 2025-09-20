const mallData = {
  ground: [
    { name: "Zara", category: "Fashion", description: "Trendy clothing and accessories.", address: "Ground Floor, Shop G1", 
      offers: ["Flat 30% OFF on all jeans!", "Buy 2 get 1 free on T-Shirts"], image: "logos/zara.jpg" },
    { name: "Apple Store", category: "Electronics", description: "Premium gadgets and devices.", address: "Ground Floor, Shop G2",
      offers: ["Get AirPods @ 50% with iPhone", "Student Discount 10%"], image: "logos/apple.jpg" },
    { name: "Starbucks", category: "Food & Dining", description: "Coffee, snacks, and more.", address: "Ground Floor, Shop G3",
      offers: ["Buy 1 Get 1 Free on Cappuccino", "Free Cookie with every Latte"], image: "logos/starbucks.jpg" },
    { name: "GameStop", category: "Entertainment", description: "Video games and consoles.", address: "Ground Floor, Shop G4",
      offers: ["Pre-order FIFA and get bonus gifts", "20% OFF on Gaming Accessories"], image: "logos/gamestop.avif" },
    { name: "Sephora", category: "Health & Beauty", description: "Cosmetics and skincare.", address: "Ground Floor, Shop G5",
      offers: ["Buy 2 lipsticks, get 1 free", "15% OFF on skincare range"], image: "logos/sephora.avif" },
    { name: "IKEA", category: "Home & Lifestyle", description: "Furniture and home essentials.", address: "Ground Floor, Shop G6",
      offers: ["Flat 20% OFF on Sofas", "Free Delivery above ₹5000"], image: "logos/ikea.jpg" }
  ],
  first: [
    { name: "H&M", category: "Fashion", description: "Affordable fashion wear.", address: "First Floor, Shop F1",
      offers: ["50% OFF on Winter Collection", "Buy 3 get 2 free"], image: "logos/hnm.jpg" },
    { name: "Samsung Store", category: "Electronics", description: "Smartphones and devices.", address: "First Floor, Shop F2",
      offers: ["Galaxy Watch Free with S23 Ultra", "Exchange Bonus ₹5000"], image: "logos/samsung.jpg" },
    { name: "McDonald's", category: "Food & Dining", description: "Burgers, fries and drinks.", address: "First Floor, Shop F3",
      offers: ["Happy Meal Free Toy Today", "Large Fries at ₹49 only"], image: "logos/mcdonalds.jpg" },
    { name: "Cineplex", category: "Entertainment", description: "Movies and fun.", address: "First Floor, Shop F4",
      offers: ["Buy 1 Get 1 Free Tickets (Tue)", "Free Popcorn on weekends"], image: "logos/cineplex.jpg" },
    { name: "HealthKart", category: "Health & Beauty", description: "Supplements and wellness products.", address: "First Floor, Shop F5",
      offers: ["Protein Shakes – Flat 20% OFF", "Multivitamins Buy 1 Get 1"], image: "logos/healthkart.avif" },
    { name: "Home Centre", category: "Home & Lifestyle", description: "Stylish home decor and furniture.", address: "First Floor, Shop F6",
      offers: ["30% OFF on Bedroom Sets", "Free Cushion Set with Sofa"], image: "logos/homecentre.webp" }
  ]
};

let currentFloor = "ground";

function renderStores(filterCategory = "All", searchQuery = "") {
  const map = document.getElementById("mapContent");
  map.innerHTML = "";
  mallData[currentFloor].forEach(store => {
    if ((filterCategory === "All" || store.category === filterCategory) &&
        store.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      const div = document.createElement("div");
      div.className = "store";
      div.style.backgroundImage = `url('${store.image}')`;
      div.innerHTML = `<div class="overlay">${store.name}</div>`;
      div.onclick = () => openModal(store);
      map.appendChild(div);
    }
  });
}

function openModal(store) {
  document.getElementById("modalStoreName").textContent = store.name;
  document.getElementById("modalStoreCategory").textContent = store.category;
  document.getElementById("modalStoreDescription").textContent = store.description;
  document.getElementById("modalStoreAddress").textContent = store.address;
  document.getElementById("modalStoreOffers").innerHTML = "<strong>Today's Deals:</strong><br>" + store.offers.map(o => "✅ " + o).join("<br>");
  document.getElementById("storeModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("storeModal").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  renderStores();
  document.querySelectorAll(".floor-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".floor-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFloor = btn.dataset.floor;
      renderStores(document.querySelector(".category-btn.active").dataset.category, document.getElementById("searchInput").value);
    });
  });

  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderStores(btn.dataset.category, document.getElementById("searchInput").value);
    });
  });

  document.getElementById("searchInput").addEventListener("input", (e) => {
    const activeCategory = document.querySelector(".category-btn.active").dataset.category;
    renderStores(activeCategory, e.target.value);
  });

  document.getElementById("clearSearch").addEventListener("click", () => {
    document.getElementById("searchInput").value = "";
    renderStores(document.querySelector(".category-btn.active").dataset.category);
  });

  document.getElementById("modalClose").addEventListener("click", closeModal);
});
