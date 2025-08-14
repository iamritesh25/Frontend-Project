// Mall Map Data
const mallData = {
  "floors": {
    "ground": {
      "name": "Ground Floor",
      "stores": [
        {
          "id": "gf01",
          "name": "Zara",
          "category": "Fashion",
          "description": "International fashion retailer offering trendy clothing for men, women and children",
          "phone": "+1-555-0101",
          "hours": "10:00 AM - 10:00 PM",
          "floor": "Ground Floor",
          "position": { "x": 50, "y": 100, "width": 80, "height": 60 }
        },
        {
          "id": "gf02",
          "name": "Apple Store",
          "category": "Electronics",
          "description": "Premium electronics and accessories from Apple Inc.",
          "phone": "+1-555-0102",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "Ground Floor",
          "position": { "x": 150, "y": 100, "width": 80, "height": 60 }
        },
        {
          "id": "gf03",
          "name": "Starbucks",
          "category": "Food & Dining",
          "description": "World-famous coffee chain serving premium coffee and light meals",
          "phone": "+1-555-0103",
          "hours": "7:00 AM - 11:00 PM",
          "floor": "Ground Floor",
          "position": { "x": 250, "y": 100, "width": 80, "height": 60 }
        },
        {
          "id": "gf04",
          "name": "H&M",
          "category": "Fashion",
          "description": "Swedish fast fashion retailer with sustainable clothing options",
          "phone": "+1-555-0104",
          "hours": "10:00 AM - 10:00 PM",
          "floor": "Ground Floor",
          "position": { "x": 350, "y": 100, "width": 80, "height": 60 }
        },
        {
          "id": "gf05",
          "name": "Samsung Store",
          "category": "Electronics",
          "description": "Latest smartphones, tablets, and electronics from Samsung",
          "phone": "+1-555-0105",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "Ground Floor",
          "position": { "x": 450, "y": 100, "width": 80, "height": 60 }
        },
        {
          "id": "gf06",
          "name": "Pizza Hut",
          "category": "Food & Dining",
          "description": "Popular pizza chain with dine-in and takeout options",
          "phone": "+1-555-0106",
          "hours": "11:00 AM - 11:00 PM",
          "floor": "Ground Floor",
          "position": { "x": 50, "y": 200, "width": 80, "height": 60 }
        },
        {
          "id": "gf07",
          "name": "Victoria's Secret",
          "category": "Fashion",
          "description": "Lingerie, sleepwear, and beauty products for women",
          "phone": "+1-555-0107",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "Ground Floor",
          "position": { "x": 150, "y": 200, "width": 80, "height": 60 }
        },
        {
          "id": "gf08",
          "name": "GameStop",
          "category": "Entertainment",
          "description": "Video games, consoles, and gaming accessories",
          "phone": "+1-555-0108",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "Ground Floor",
          "position": { "x": 250, "y": 200, "width": 80, "height": 60 }
        },
        {
          "id": "gf09",
          "name": "Sephora",
          "category": "Health & Beauty",
          "description": "Cosmetics and beauty products from top brands",
          "phone": "+1-555-0109",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "Ground Floor",
          "position": { "x": 350, "y": 200, "width": 80, "height": 60 }
        },
        {
          "id": "gf10",
          "name": "IKEA Express",
          "category": "Home & Lifestyle",
          "description": "Furniture and home accessories from IKEA",
          "phone": "+1-555-0110",
          "hours": "10:00 AM - 10:00 PM",
          "floor": "Ground Floor",
          "position": { "x": 450, "y": 200, "width": 80, "height": 60 }
        },
        {
          "id": "gf11",
          "name": "McDonald's",
          "category": "Food & Dining",
          "description": "Fast food restaurant serving burgers, fries and more",
          "phone": "+1-555-0111",
          "hours": "6:00 AM - 12:00 AM",
          "floor": "Ground Floor",
          "position": { "x": 50, "y": 300, "width": 80, "height": 60 }
        },
        {
          "id": "gf12",
          "name": "Nike",
          "category": "Fashion",
          "description": "Athletic wear, shoes and sports equipment",
          "phone": "+1-555-0112",
          "hours": "10:00 AM - 10:00 PM",
          "floor": "Ground Floor",
          "position": { "x": 150, "y": 300, "width": 80, "height": 60 }
        },
        {
          "id": "gf13",
          "name": "Best Buy",
          "category": "Electronics",
          "description": "Electronics retailer with computers, phones and appliances",
          "phone": "+1-555-0113",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "Ground Floor",
          "position": { "x": 250, "y": 300, "width": 80, "height": 60 }
        },
        {
          "id": "gf14",
          "name": "Bath & Body Works",
          "category": "Health & Beauty",
          "description": "Fragrances, body care and home fragrance products",
          "phone": "+1-555-0114",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "Ground Floor",
          "position": { "x": 350, "y": 300, "width": 80, "height": 60 }
        },
        {
          "id": "gf15",
          "name": "Barnes & Noble",
          "category": "Entertainment",
          "description": "Bookstore with books, magazines and educational materials",
          "phone": "+1-555-0115",
          "hours": "9:00 AM - 10:00 PM",
          "floor": "Ground Floor",
          "position": { "x": 450, "y": 300, "width": 80, "height": 60 }
        }
      ]
    },
    "first": {
      "name": "First Floor",
      "stores": [
        {
          "id": "ff01",
          "name": "Macy's",
          "category": "Fashion",
          "description": "Department store with clothing, accessories and home goods",
          "phone": "+1-555-0201",
          "hours": "10:00 AM - 10:00 PM",
          "floor": "First Floor",
          "position": { "x": 50, "y": 100, "width": 120, "height": 80 }
        },
        {
          "id": "ff02",
          "name": "AMC Theater",
          "category": "Entertainment",
          "description": "Movie theater showing latest films with premium seating",
          "phone": "+1-555-0202",
          "hours": "10:00 AM - 12:00 AM",
          "floor": "First Floor",
          "position": { "x": 200, "y": 100, "width": 150, "height": 80 }
        },
        {
          "id": "ff03",
          "name": "Food Court",
          "category": "Food & Dining",
          "description": "Various food vendors including Asian, Mexican, and American cuisine",
          "phone": "+1-555-0203",
          "hours": "10:00 AM - 10:00 PM",
          "floor": "First Floor",
          "position": { "x": 380, "y": 100, "width": 150, "height": 120 }
        },
        {
          "id": "ff04",
          "name": "Adidas",
          "category": "Fashion",
          "description": "Sports apparel, shoes and athletic equipment",
          "phone": "+1-555-0204",
          "hours": "10:00 AM - 10:00 PM",
          "floor": "First Floor",
          "position": { "x": 50, "y": 200, "width": 80, "height": 60 }
        },
        {
          "id": "ff05",
          "name": "Microsoft Store",
          "category": "Electronics",
          "description": "Microsoft computers, Xbox consoles and software",
          "phone": "+1-555-0205",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "First Floor",
          "position": { "x": 150, "y": 200, "width": 80, "height": 60 }
        },
        {
          "id": "ff06",
          "name": "Ulta Beauty",
          "category": "Health & Beauty",
          "description": "Beauty superstore with makeup, skincare and salon services",
          "phone": "+1-555-0206",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "First Floor",
          "position": { "x": 250, "y": 200, "width": 100, "height": 60 }
        },
        {
          "id": "ff07",
          "name": "Pottery Barn",
          "category": "Home & Lifestyle",
          "description": "Home furnishings, decor and furniture",
          "phone": "+1-555-0207",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "First Floor",
          "position": { "x": 380, "y": 250, "width": 100, "height": 80 }
        },
        {
          "id": "ff08",
          "name": "Forever 21",
          "category": "Fashion",
          "description": "Fast fashion retailer with trendy clothing for young adults",
          "phone": "+1-555-0208",
          "hours": "10:00 AM - 10:00 PM",
          "floor": "First Floor",
          "position": { "x": 50, "y": 280, "width": 80, "height": 60 }
        },
        {
          "id": "ff09",
          "name": "Play Zone",
          "category": "Entertainment",
          "description": "Children's indoor playground and arcade",
          "phone": "+1-555-0209",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "First Floor",
          "position": { "x": 150, "y": 280, "width": 100, "height": 60 }
        },
        {
          "id": "ff10",
          "name": "Williams Sonoma",
          "category": "Home & Lifestyle",
          "description": "Kitchen appliances, cookware and home essentials",
          "phone": "+1-555-0210",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "First Floor",
          "position": { "x": 270, "y": 280, "width": 80, "height": 60 }
        }
      ]
    },
    "second": {
      "name": "Second Floor",
      "stores": [
        {
          "id": "sf01",
          "name": "JCPenney",
          "category": "Fashion",
          "description": "Department store with affordable clothing and home goods",
          "phone": "+1-555-0301",
          "hours": "10:00 AM - 10:00 PM",
          "floor": "Second Floor",
          "position": { "x": 50, "y": 100, "width": 150, "height": 100 }
        },
        {
          "id": "sf02",
          "name": "Target Express",
          "category": "Home & Lifestyle",
          "description": "General merchandise including clothing, electronics and home goods",
          "phone": "+1-555-0302",
          "hours": "8:00 AM - 11:00 PM",
          "floor": "Second Floor",
          "position": { "x": 220, "y": 100, "width": 150, "height": 100 }
        },
        {
          "id": "sf03",
          "name": "Fitness First",
          "category": "Health & Beauty",
          "description": "Full-service gym with modern equipment and personal training",
          "phone": "+1-555-0303",
          "hours": "5:00 AM - 11:00 PM",
          "floor": "Second Floor",
          "position": { "x": 390, "y": 100, "width": 140, "height": 80 }
        },
        {
          "id": "sf04",
          "name": "Radio Shack",
          "category": "Electronics",
          "description": "Electronics, batteries, cables and tech accessories",
          "phone": "+1-555-0304",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "Second Floor",
          "position": { "x": 50, "y": 220, "width": 80, "height": 50 }
        },
        {
          "id": "sf05",
          "name": "Claire's",
          "category": "Fashion",
          "description": "Jewelry, accessories and ear piercing for teens and tweens",
          "phone": "+1-555-0305",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "Second Floor",
          "position": { "x": 150, "y": 220, "width": 60, "height": 50 }
        },
        {
          "id": "sf06",
          "name": "Spencer's",
          "category": "Entertainment",
          "description": "Novelty items, gag gifts and pop culture merchandise",
          "phone": "+1-555-0306",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "Second Floor",
          "position": { "x": 230, "y": 220, "width": 80, "height": 50 }
        },
        {
          "id": "sf07",
          "name": "Kay Jewelers",
          "category": "Fashion",
          "description": "Fine jewelry including engagement rings and watches",
          "phone": "+1-555-0307",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "Second Floor",
          "position": { "x": 330, "y": 220, "width": 80, "height": 50 }
        },
        {
          "id": "sf08",
          "name": "Subway",
          "category": "Food & Dining",
          "description": "Fresh sandwiches, salads and healthy meal options",
          "phone": "+1-555-0308",
          "hours": "7:00 AM - 10:00 PM",
          "floor": "Second Floor",
          "position": { "x": 430, "y": 220, "width": 100, "height": 50 }
        },
        {
          "id": "sf09",
          "name": "CVS Pharmacy",
          "category": "Health & Beauty",
          "description": "Pharmacy, health products and convenience items",
          "phone": "+1-555-0309",
          "hours": "8:00 AM - 10:00 PM",
          "floor": "Second Floor",
          "position": { "x": 50, "y": 290, "width": 120, "height": 60 }
        },
        {
          "id": "sf10",
          "name": "Toys R Us Express",
          "category": "Entertainment",
          "description": "Toys, games and educational products for children",
          "phone": "+1-555-0310",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "Second Floor",
          "position": { "x": 190, "y": 290, "width": 100, "height": 60 }
        },
        {
          "id": "sf11",
          "name": "Hallmark",
          "category": "Home & Lifestyle",
          "description": "Greeting cards, gifts and party supplies",
          "phone": "+1-555-0311",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "Second Floor",
          "position": { "x": 310, "y": 290, "width": 70, "height": 60 }
        },
        {
          "id": "sf12",
          "name": "Sunglasses Hut",
          "category": "Fashion",
          "description": "Designer sunglasses and eyewear from top brands",
          "phone": "+1-555-0312",
          "hours": "10:00 AM - 9:00 PM",
          "floor": "Second Floor",
          "position": { "x": 400, "y": 290, "width": 70, "height": 60 }
        }
      ]
    }
  },
  "categories": [
    { "name": "All", "color": "#333333" },
    { "name": "Fashion", "color": "#E74C3C" },
    { "name": "Electronics", "color": "#3498DB" },
    { "name": "Food & Dining", "color": "#27AE60" },
    { "name": "Entertainment", "color": "#F39C12" },
    { "name": "Health & Beauty", "color": "#9B59B6" },
    { "name": "Home & Lifestyle", "color": "#795548" }
  ]
};

// Global State
let currentFloor = 'ground';
let currentCategory = 'All';
let zoomLevel = 1;
let panOffset = { x: 0, y: 0 };
let isDragging = false;
let dragStart = { x: 0, y: 0 };
let highlightedStore = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    console.log('Initializing Mall Map Application');
    renderStores();
    setupEventListeners();
    updateMapTransform();
}

// Render stores for current floor
function renderStores() {
    console.log('Rendering stores for floor:', currentFloor);
    
    const loadingState = document.getElementById('loadingState');
    const mapContent = document.getElementById('mapContent');
    
    if (loadingState) loadingState.classList.remove('hidden');
    
    setTimeout(() => {
        const stores = mallData.floors[currentFloor].stores;
        if (mapContent) {
            mapContent.innerHTML = '';
            
            stores.forEach(store => {
                const storeElement = createStoreElement(store);
                mapContent.appendChild(storeElement);
            });
            
            applyFilters();
        }
        
        if (loadingState) loadingState.classList.add('hidden');
    }, 200);
}

// Create store DOM element
function createStoreElement(store) {
    const storeDiv = document.createElement('div');
    storeDiv.className = 'store';
    storeDiv.setAttribute('data-store-id', store.id);
    storeDiv.setAttribute('data-category', store.category);
    storeDiv.style.left = `${store.position.x}px`;
    storeDiv.style.top = `${store.position.y}px`;
    storeDiv.style.width = `${store.position.width}px`;
    storeDiv.style.height = `${store.position.height}px`;
    storeDiv.textContent = store.name;
    storeDiv.setAttribute('tabindex', '0');
    storeDiv.setAttribute('role', 'button');
    storeDiv.setAttribute('aria-label', `${store.name}, ${store.category}`);
    
    // Add tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'store-tooltip';
    tooltip.textContent = store.name;
    storeDiv.appendChild(tooltip);
    
    // Add click event with immediate response
    storeDiv.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('Store clicked:', store.name);
        openStoreModal(store);
    });
    
    storeDiv.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            console.log('Store activated via keyboard:', store.name);
            openStoreModal(store);
        }
    });
    
    return storeDiv;
}

// Setup all event listeners
function setupEventListeners() {
    console.log('Setting up event listeners');
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const firstResult = document.querySelector('.store.highlighted');
                if (firstResult) {
                    const storeId = firstResult.dataset.storeId;
                    const store = findStoreById(storeId);
                    if (store) openStoreModal(store);
                }
            }
        });
    }
    
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', clearSearch);
    }
    
    // Floor navigation
    const floorButtons = document.querySelectorAll('.floor-btn');
    floorButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Floor button clicked:', btn.dataset.floor);
            switchFloor(btn.dataset.floor);
        });
    });
    
    // Category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Category button clicked:', btn.dataset.category);
            filterByCategory(btn.dataset.category);
        });
    });
    
    // Zoom controls
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const resetViewBtn = document.getElementById('resetView');
    
    if (zoomInBtn) zoomInBtn.addEventListener('click', zoomIn);
    if (zoomOutBtn) zoomOutBtn.addEventListener('click', zoomOut);
    if (resetViewBtn) resetViewBtn.addEventListener('click', resetView);
    
    // Mouse wheel zoom
    const mapContainer = document.getElementById('mapContainer');
    if (mapContainer) {
        mapContainer.addEventListener('wheel', handleWheel);
        
        // Pan functionality
        mapContainer.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', endDrag);
        
        // Touch support
        mapContainer.addEventListener('touchstart', handleTouchStart);
        mapContainer.addEventListener('touchmove', handleTouchMove);
        mapContainer.addEventListener('touchend', handleTouchEnd);
    }
    
    // Modal events
    const modalClose = document.getElementById('modalClose');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const getDirectionsBtn = document.getElementById('getDirections');
    
    if (modalClose) modalClose.addEventListener('click', closeStoreModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeStoreModal);
    if (getDirectionsBtn) getDirectionsBtn.addEventListener('click', handleGetDirections);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeStoreModal();
            clearSearch();
        }
    });
}

// Search functionality - fixed with better debugging
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const query = searchInput.value.toLowerCase().trim();
    console.log('Searching for:', query);
    
    if (!query) {
        clearHighlights();
        return;
    }
    
    // Search through all floors
    let foundStore = null;
    let foundFloor = null;
    
    for (const floorKey in mallData.floors) {
        const stores = mallData.floors[floorKey].stores;
        const store = stores.find(s => s.name.toLowerCase().includes(query));
        if (store) {
            foundStore = store;
            foundFloor = floorKey;
            console.log('Found store:', store.name, 'on floor:', floorKey);
            break;
        }
    }
    
    if (foundStore && foundFloor) {
        // Switch to correct floor if needed
        if (foundFloor !== currentFloor) {
            console.log('Switching to floor:', foundFloor);
            switchFloor(foundFloor);
            setTimeout(() => {
                highlightAndFocusStore(foundStore.id);
            }, 400);
        } else {
            highlightAndFocusStore(foundStore.id);
        }
    } else {
        console.log('No store found for query:', query);
        clearHighlights();
    }
}

// Highlight and focus on store by ID
function highlightAndFocusStore(storeId) {
    console.log('Highlighting store:', storeId);
    clearHighlights();
    const storeEl = document.querySelector(`[data-store-id="${storeId}"]`);
    if (storeEl) {
        storeEl.classList.add('highlighted');
        highlightedStore = storeEl;
        focusOnStore(storeEl);
        console.log('Store highlighted successfully');
    } else {
        console.log('Store element not found:', storeId);
    }
}

// Find store by ID across all floors
function findStoreById(storeId) {
    for (const floorKey in mallData.floors) {
        const store = mallData.floors[floorKey].stores.find(s => s.id === storeId);
        if (store) return store;
    }
    return null;
}

// Focus map view on store
function focusOnStore(storeEl) {
    console.log('Focusing on store element');
    // Simple zoom to store with basic centering
    zoomLevel = 2;
    
    // Get store position relative to map
    const storeLeft = parseInt(storeEl.style.left);
    const storeTop = parseInt(storeEl.style.top);
    const storeWidth = parseInt(storeEl.style.width);
    const storeHeight = parseInt(storeEl.style.height);
    
    // Center the store
    const mapContainer = document.getElementById('mapContainer');
    if (mapContainer) {
        const containerWidth = mapContainer.offsetWidth;
        const containerHeight = mapContainer.offsetHeight;
        
        panOffset.x = (containerWidth / 2) - (storeLeft + storeWidth / 2) * zoomLevel;
        panOffset.y = (containerHeight / 2) - (storeTop + storeHeight / 2) * zoomLevel;
        
        updateMapTransform();
    }
}

// Clear search and highlights
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    clearHighlights();
}

function clearHighlights() {
    const highlightedStores = document.querySelectorAll('.store.highlighted');
    highlightedStores.forEach(store => store.classList.remove('highlighted'));
    highlightedStore = null;
}

// Floor navigation - fixed
function switchFloor(floorKey) {
    if (floorKey === currentFloor) return;
    
    console.log('Switching from', currentFloor, 'to', floorKey);
    
    // Update active button
    const floorButtons = document.querySelectorAll('.floor-btn');
    floorButtons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-floor="${floorKey}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
        console.log('Updated active floor button');
    }
    
    // Animate transition
    const mapContent = document.getElementById('mapContent');
    if (mapContent) {
        mapContent.classList.add('floor-transition');
        
        setTimeout(() => {
            currentFloor = floorKey;
            renderStores();
            mapContent.classList.remove('floor-transition');
            console.log('Floor switch completed');
        }, 150);
    }
}

// Category filtering - fixed
function filterByCategory(category) {
    currentCategory = category;
    console.log('Filtering by category:', category);
    
    // Update active button
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-category="${category}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
        console.log('Updated active category button');
    }
    
    applyFilters();
}

function applyFilters() {
    const stores = document.querySelectorAll('.store');
    console.log('Applying filters, current category:', currentCategory);
    
    stores.forEach(storeEl => {
        const storeCategory = storeEl.dataset.category;
        
        if (currentCategory === 'All' || storeCategory === currentCategory) {
            storeEl.classList.remove('hidden-category');
        } else {
            storeEl.classList.add('hidden-category');
        }
    });
}

// Zoom functionality
function zoomIn() {
    if (zoomLevel < 3) {
        zoomLevel *= 1.2;
        updateMapTransform();
        console.log('Zoomed in, level:', zoomLevel);
    }
}

function zoomOut() {
    if (zoomLevel > 0.5) {
        zoomLevel /= 1.2;
        updateMapTransform();
        console.log('Zoomed out, level:', zoomLevel);
    }
}

function resetView() {
    console.log('Resetting view');
    
    // Reset zoom and pan
    zoomLevel = 1;
    panOffset = { x: 0, y: 0 };
    
    // Reset category filter
    currentCategory = 'All';
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    const allBtn = document.querySelector('[data-category="All"]');
    if (allBtn) allBtn.classList.add('active');
    
    // Clear search and highlights
    clearSearch();
    clearHighlights();
    
    // Apply changes
    updateMapTransform();
    applyFilters();
    
    console.log('View reset completed');
}

// Handle mouse wheel zoom
function handleWheel(e) {
    e.preventDefault();
    
    const mapContainer = document.getElementById('mapContainer');
    if (!mapContainer) return;
    
    const rect = mapContainer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const prevZoom = zoomLevel;
    
    if (e.deltaY < 0 && zoomLevel < 3) {
        zoomLevel *= 1.1;
    } else if (e.deltaY > 0 && zoomLevel > 0.5) {
        zoomLevel /= 1.1;
    }
    
    // Zoom towards mouse position
    if (prevZoom !== zoomLevel) {
        const zoomRatio = zoomLevel / prevZoom;
        panOffset.x = mouseX - (mouseX - panOffset.x) * zoomRatio;
        panOffset.y = mouseY - (mouseY - panOffset.y) * zoomRatio;
    }
    
    updateMapTransform();
}

// Pan functionality
function startDrag(e) {
    const mapContainer = document.getElementById('mapContainer');
    if (zoomLevel <= 1 || e.target.closest('.store') || !mapContainer) return;
    
    isDragging = true;
    mapContainer.classList.add('grabbing');
    dragStart = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
    e.preventDefault();
}

function drag(e) {
    if (!isDragging) return;
    
    panOffset.x = e.clientX - dragStart.x;
    panOffset.y = e.clientY - dragStart.y;
    updateMapTransform();
}

function endDrag() {
    const mapContainer = document.getElementById('mapContainer');
    isDragging = false;
    if (mapContainer) mapContainer.classList.remove('grabbing');
}

// Touch support
let touchStart = null;

function handleTouchStart(e) {
    if (e.touches.length === 1) {
        touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
}

function handleTouchMove(e) {
    if (!touchStart || zoomLevel <= 1) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    panOffset.x += touch.clientX - touchStart.x;
    panOffset.y += touch.clientY - touchStart.y;
    touchStart = { x: touch.clientX, y: touch.clientY };
    updateMapTransform();
}

function handleTouchEnd() {
    touchStart = null;
}

// Update map transform
function updateMapTransform() {
    const mapContent = document.getElementById('mapContent');
    if (!mapContent) return;
    
    mapContent.style.transform = `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`;
    
    if (zoomLevel > 1) {
        mapContent.classList.add('zoomed');
    } else {
        mapContent.classList.remove('zoomed');
    }
}

// Modal functionality - fixed with proper error handling
function openStoreModal(store) {
    console.log('Opening modal for store:', store);
    
    const storeModal = document.getElementById('storeModal');
    if (!storeModal) {
        console.error('Store modal element not found');
        return;
    }
    
    try {
        // Set modal content
        const elements = {
            'modalStoreName': store.name,
            'modalStoreCategory': store.category,
            'modalStoreDescription': store.description,
            'modalStoreFloor': store.floor,
            'modalStorePhone': store.phone,
            'modalStoreHours': store.hours
        };
        
        for (const [elementId, content] of Object.entries(elements)) {
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = content;
            } else {
                console.warn('Modal element not found:', elementId);
            }
        }
        
        // Set logo placeholder
        const logoEl = document.getElementById('modalStoreLogo');
        if (logoEl) {
            logoEl.textContent = store.name.charAt(0).toUpperCase();
            logoEl.style.backgroundColor = getCategoryColor(store.category);
            logoEl.style.color = 'white';
        }
        
        // Show modal
        storeModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Store reference for directions
        storeModal.dataset.storeId = store.id;
        
        console.log('Modal opened successfully');
        
    } catch (error) {
        console.error('Error opening modal:', error);
    }
}

function closeStoreModal() {
    console.log('Closing modal');
    const storeModal = document.getElementById('storeModal');
    if (storeModal) {
        storeModal.classList.add('hidden');
        document.body.style.overflow = '';
        delete storeModal.dataset.storeId;
    }
}

function handleGetDirections() {
    const storeModal = document.getElementById('storeModal');
    if (!storeModal) return;
    
    const storeId = storeModal.dataset.storeId;
    const store = findStoreById(storeId);
    
    if (store) {
        alert(`Directions to ${store.name}:\n\n1. Go to ${store.floor}\n2. Look for ${store.category} section\n3. ${store.name} is located in the mall layout\n\nContact: ${store.phone}\nHours: ${store.hours}`);
    }
    
    closeStoreModal();
}

// Get category color
function getCategoryColor(category) {
    const categoryObj = mallData.categories.find(cat => cat.name === category);
    return categoryObj ? categoryObj.color : '#333333';
}