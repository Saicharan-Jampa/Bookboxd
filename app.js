// Bookboxd Application JavaScript

// Application Data
const appData = {
  sampleBooks: [
    {
      "id": 1,
      "title": "The Seven Husbands of Evelyn Hugo",
      "author": "Taylor Jenkins Reid",
      "genre": "Contemporary Fiction",
      "publishedYear": 2017,
      "pages": 400,
      "averageRating": 4.5,
      "totalRatings": 12847,
      "description": "A reclusive Hollywood icon tells her story to an unknown journalist in this captivating tale of ambition, love, and sacrifice.",
      "coverUrl": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop",
      "isbn": "9781501161933"
    },
    {
      "id": 2,
      "title": "Where the Crawdads Sing",
      "author": "Delia Owens",
      "genre": "Mystery",
      "publishedYear": 2018,
      "pages": 384,
      "averageRating": 4.3,
      "totalRatings": 8932,
      "description": "A coming-of-age mystery about a young girl surviving alone in the marshes of North Carolina.",
      "coverUrl": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop",
      "isbn": "9780735219090"
    },
    {
      "id": 3,
      "title": "Dune",
      "author": "Frank Herbert",
      "genre": "Science Fiction",
      "publishedYear": 1965,
      "pages": 688,
      "averageRating": 4.4,
      "totalRatings": 15673,
      "description": "An epic science fiction masterpiece about power, politics, and survival on the desert planet Arrakis.",
      "coverUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop",
      "isbn": "9780441172719"
    },
    {
      "id": 4,
      "title": "The Midnight Library",
      "author": "Matt Haig",
      "genre": "Literary Fiction",
      "publishedYear": 2020,
      "pages": 288,
      "averageRating": 4.2,
      "totalRatings": 9456,
      "description": "A philosophical novel about a magical library between life and death where infinite possibilities exist.",
      "coverUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop",
      "isbn": "9780525559474"
    },
    {
      "id": 5,
      "title": "The Silent Patient",
      "author": "Alex Michaelides",
      "genre": "Psychological Thriller",
      "publishedYear": 2019,
      "pages": 336,
      "averageRating": 4.1,
      "totalRatings": 7832,
      "description": "A psychological thriller about a woman who refuses to speak after allegedly murdering her husband.",
      "coverUrl": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop",
      "isbn": "9781250301697"
    },
    {
      "id": 6,
      "title": "Educated",
      "author": "Tara Westover",
      "genre": "Memoir",
      "publishedYear": 2018,
      "pages": 334,
      "averageRating": 4.6,
      "totalRatings": 11234,
      "description": "A powerful memoir about education, family, and the transformative power of learning.",
      "coverUrl": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop",
      "isbn": "9780399590504"
    },
    {
      "id": 7,
      "title": "The Song of Achilles",
      "author": "Madeline Miller",
      "genre": "Historical Fiction",
      "publishedYear": 2011,
      "pages": 416,
      "averageRating": 4.7,
      "totalRatings": 14567,
      "description": "A retelling of the Iliad focusing on the relationship between Achilles and Patroclus.",
      "coverUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop",
      "isbn": "9780062060624"
    },
    {
      "id": 8,
      "title": "Atomic Habits",
      "author": "James Clear",
      "genre": "Self-Help",
      "publishedYear": 2018,
      "pages": 320,
      "averageRating": 4.5,
      "totalRatings": 9876,
      "description": "A practical guide to building good habits and breaking bad ones through small changes.",
      "coverUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop",
      "isbn": "9780735211292"
    }
  ],
  sampleUsers: [
    {
      "id": 1,
      "username": "bookworm_sarah",
      "displayName": "Sarah Chen",
      "bio": "Literature professor who loves contemporary fiction and magical realism. Always looking for my next favorite book!",
      "favoriteGenres": ["Contemporary Fiction", "Magical Realism", "Literary Fiction"],
      "yearlyGoal": 52,
      "booksRead": 28,
      "following": 45,
      "followers": 67,
      "joinDate": "2022-03-15",
      "favoriteBooks": [1, 4, 6, 7],
      "currentlyReading": [2],
      "wantToRead": [3, 5, 8]
    },
    {
      "id": 2,
      "username": "scifi_mike",
      "displayName": "Mike Rodriguez",
      "bio": "Software engineer by day, space opera enthusiast by night. Herbert, Asimov, and Butler are my heroes.",
      "favoriteGenres": ["Science Fiction", "Fantasy", "Cyberpunk"],
      "yearlyGoal": 40,
      "booksRead": 22,
      "following": 32,
      "followers": 89,
      "joinDate": "2021-11-08",
      "favoriteBooks": [3],
      "currentlyReading": [8],
      "wantToRead": [1, 4]
    },
    {
      "id": 3,
      "username": "mystery_maven",
      "displayName": "Emma Watson",
      "bio": "Cozy mysteries, psychological thrillers, and true crime. If it has a twist ending, I'm in!",
      "favoriteGenres": ["Mystery", "Thriller", "True Crime"],
      "yearlyGoal": 75,
      "booksRead": 43,
      "following": 78,
      "followers": 124,
      "joinDate": "2020-07-22",
      "favoriteBooks": [2, 5],
      "currentlyReading": [6],
      "wantToRead": [7]
    }
  ],
  sampleReviews: [
    {
      "id": 1,
      "bookId": 1,
      "userId": 1,
      "rating": 5,
      "reviewText": "Absolutely mesmerizing! Reid crafts such a compelling narrative about Hollywood glamour and the price of fame. Evelyn Hugo is an unforgettable character who will stay with you long after you finish reading.",
      "date": "2024-01-15",
      "likes": 23,
      "spoiler": false
    },
    {
      "id": 2,
      "bookId": 3,
      "userId": 2,
      "rating": 4.5,
      "reviewText": "Herbert's world-building in Dune is unparalleled. The complexity of the political and ecological systems on Arrakis creates a rich tapestry that feels both alien and familiar. A true science fiction masterpiece.",
      "date": "2024-01-12",
      "likes": 17,
      "spoiler": false
    },
    {
      "id": 3,
      "bookId": 5,
      "userId": 3,
      "rating": 4,
      "reviewText": "Michaelides knows how to build suspense! The psychological complexity of both the patient and her therapist kept me guessing until the very end. A solid thriller with great character development.",
      "date": "2024-01-10",
      "likes": 31,
      "spoiler": false
    }
  ],
  sampleLists: [
    {
      "id": 1,
      "userId": 1,
      "title": "Books That Made Me Cry",
      "description": "Emotional reads that left me reaching for tissues",
      "bookIds": [1, 6, 7],
      "isPublic": true,
      "created": "2024-01-01",
      "likes": 45
    },
    {
      "id": 2,
      "userId": 2,
      "title": "Essential Sci-Fi for Beginners",
      "description": "Perfect starting point for anyone new to science fiction",
      "bookIds": [3],
      "isPublic": true,
      "created": "2023-12-15",
      "likes": 78
    },
    {
      "id": 3,
      "userId": 3,
      "title": "Page-Turners That Kept Me Up All Night",
      "description": "Thrillers and mysteries I couldn't put down",
      "bookIds": [2, 5],
      "isPublic": true,
      "created": "2024-01-05",
      "likes": 62
    }
  ],
  socialActivity: [
    {
      "id": 1,
      "type": "review",
      "userId": 1,
      "bookId": 1,
      "content": "Just finished The Seven Husbands of Evelyn Hugo and I'm absolutely blown away! ⭐⭐⭐⭐⭐",
      "timestamp": "2024-01-15T10:30:00Z",
      "likes": 23,
      "comments": 5
    },
    {
      "id": 2,
      "type": "list_created",
      "userId": 3,
      "listId": 3,
      "content": "Created a new list: Page-Turners That Kept Me Up All Night",
      "timestamp": "2024-01-12T14:45:00Z",
      "likes": 12,
      "comments": 3
    },
    {
      "id": 3,
      "type": "book_logged",
      "userId": 2,
      "bookId": 8,
      "content": "Started reading Atomic Habits. Excited to optimize my daily routines!",
      "timestamp": "2024-01-10T09:15:00Z",
      "likes": 8,
      "comments": 2
    }
  ],
  genres: [
    "Contemporary Fiction",
    "Mystery", 
    "Science Fiction",
    "Literary Fiction",
    "Psychological Thriller",
    "Memoir",
    "Historical Fiction",
    "Self-Help",
    "Fantasy",
    "Romance",
    "Biography",
    "True Crime",
    "Horror",
    "Young Adult",
    "Non-Fiction"
  ]
};

// Application State
let currentUser = appData.sampleUsers[0]; // Default to first user
let currentView = 'home';
let currentBook = null;
let searchQuery = '';
let filters = {
  genre: '',
  rating: '',
  year: ''
};

// DOM Elements
const navItems = document.querySelectorAll('.nav__item[data-view]');
const views = document.querySelectorAll('.view');
const searchInput = document.getElementById('searchInput');
const themeToggle = document.getElementById('themeToggle');
const bookModal = document.getElementById('bookModal');
const ratingModal = document.getElementById('ratingModal');
const closeModal = document.getElementById('closeModal');
const closeRatingModal = document.getElementById('closeRatingModal');

// Utility Functions
function getBookById(id) {
  return appData.sampleBooks.find(book => book.id === parseInt(id));
}

function getUserById(id) {
  return appData.sampleUsers.find(user => user.id === parseInt(id));
}

function getReviewsByBookId(bookId) {
  return appData.sampleReviews.filter(review => review.bookId === parseInt(bookId));
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  
  if (hasHalfStar) {
    stars += '☆';
  }
  
  return stars;
}

function getUserInitials(displayName) {
  return displayName.split(' ').map(name => name[0]).join('');
}

function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return '1 day ago';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
  return `${Math.ceil(diffDays / 30)} months ago`;
}

// Render Functions
function renderBookCard(book, showActions = true) {
  const isInWantToRead = currentUser.wantToRead.includes(book.id);
  const isCurrentlyReading = currentUser.currentlyReading.includes(book.id);
  const isFavorite = currentUser.favoriteBooks.includes(book.id);
  
  return `
    <div class="book-card" data-book-id="${book.id}">
      <img src="${book.coverUrl}" alt="${book.title}" class="book-cover" loading="lazy">
      <h4 class="book-title">${book.title}</h4>
      <p class="book-author">by ${book.author}</p>
      <div class="book-rating">
        <span class="book-stars">${generateStars(book.averageRating)}</span>
        <span class="book-rating-text">${book.averageRating} (${book.totalRatings.toLocaleString()})</span>
      </div>
      ${showActions ? `
        <div class="book-actions">
          <button class="btn btn--small btn--primary rate-book" data-book-id="${book.id}">
            ${isFavorite ? '★' : 'Rate'}
          </button>
          <button class="btn btn--small btn--secondary want-to-read ${isInWantToRead ? 'btn--primary' : ''}" data-book-id="${book.id}">
            ${isInWantToRead ? '✓ Want to Read' : '+ Want to Read'}
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

function renderActivityItem(activity) {
  const user = getUserById(activity.userId);
  const book = activity.bookId ? getBookById(activity.bookId) : null;
  
  return `
    <div class="activity-item">
      <div class="activity-header">
        <div class="activity-avatar">${getUserInitials(user.displayName)}</div>
        <div class="activity-meta">
          <div class="activity-username">${user.displayName}</div>
          <div class="activity-timestamp">${timeAgo(activity.timestamp)}</div>
        </div>
      </div>
      <div class="activity-content">
        ${activity.content}
        ${book ? `<div class="activity-book"><strong>${book.title}</strong> by ${book.author}</div>` : ''}
      </div>
      <div class="activity-actions">
        <span class="activity-action">
          <span>❤️</span>
          <span>${activity.likes}</span>
        </span>
        <span class="activity-action">
          <span>💬</span>
          <span>${activity.comments}</span>
        </span>
      </div>
    </div>
  `;
}

function renderListCard(list) {
  const user = getUserById(list.userId);
  const bookCount = list.bookIds.length;
  
  return `
    <div class="list-card" data-list-id="${list.id}">
      <h4 class="list-title">${list.title}</h4>
      <p class="list-description">${list.description}</p>
      <div class="list-meta">
        <span>by ${user.displayName}</span>
        <span>${bookCount} book${bookCount !== 1 ? 's' : ''} • ${list.likes} likes</span>
      </div>
    </div>
  `;
}

function renderBookDetail(book) {
  const reviews = getReviewsByBookId(book.id);
  const reviewsHtml = reviews.map(review => {
    const user = getUserById(review.userId);
    return `
      <div class="review">
        <div class="review__header">
          <span class="review__author">${user.displayName}</span>
          <span class="review__rating">${generateStars(review.rating)}</span>
          <span class="review__date">${formatDate(review.date)}</span>
        </div>
        <div class="review__text">${review.reviewText}</div>
      </div>
    `;
  }).join('');

  return `
    <img src="${book.coverUrl}" alt="${book.title}" class="book-detail__cover">
    <div class="book-detail__info">
      <h2>${book.title}</h2>
      <div class="book-detail__meta">
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Published:</strong> ${book.publishedYear}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Rating:</strong> ${generateStars(book.averageRating)} ${book.averageRating} (${book.totalRatings.toLocaleString()} ratings)</p>
      </div>
      <div class="book-detail__description">
        <p>${book.description}</p>
      </div>
      <div class="book-detail__actions">
        <button class="btn btn--primary rate-book" data-book-id="${book.id}">Rate & Review</button>
        <button class="btn btn--secondary want-to-read" data-book-id="${book.id}">Want to Read</button>
      </div>
      ${reviews.length > 0 ? `
        <div class="book-detail__reviews">
          <h3>Reviews</h3>
          ${reviewsHtml}
        </div>
      ` : ''}
    </div>
  `;
}

function renderNoResults(message = "No books found matching your criteria.") {
  return `
    <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--color-text-secondary);">
      <h3 style="margin-bottom: 1rem; color: var(--color-text);">No Results</h3>
      <p>${message}</p>
      ${searchQuery ? `<p>Try searching for a different term or browse all books.</p>` : ''}
    </div>
  `;
}

// View Rendering Functions
function renderHomeView() {
  // Trending books (top rated)
  const trendingBooks = [...appData.sampleBooks]
    .sort((a, b) => b.averageRating - a.averageRating)
    .slice(0, 4);
  
  document.getElementById('trendingBooks').innerHTML = 
    trendingBooks.map(book => renderBookCard(book)).join('');
  
  // Recent activity
  document.getElementById('recentActivity').innerHTML = 
    appData.socialActivity.map(activity => renderActivityItem(activity)).join('');
  
  // Popular lists
  document.getElementById('popularLists').innerHTML = 
    appData.sampleLists.map(list => renderListCard(list)).join('');
}

function renderDiscoverView() {
  // Populate genre filter
  const genreFilter = document.getElementById('genreFilter');
  genreFilter.innerHTML = '<option value="">All Genres</option>' + 
    appData.genres.map(genre => 
      `<option value="${genre}" ${filters.genre === genre ? 'selected' : ''}>${genre}</option>`
    ).join('');
  
  // Filter books based on current filters
  let filteredBooks = [...appData.sampleBooks];
  
  // Apply search filter
  if (searchQuery && searchQuery.trim()) {
    const query = searchQuery.trim().toLowerCase();
    filteredBooks = filteredBooks.filter(book => 
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genre.toLowerCase().includes(query)
    );
  }
  
  // Apply other filters
  if (filters.genre) {
    filteredBooks = filteredBooks.filter(book => book.genre === filters.genre);
  }
  
  if (filters.rating) {
    filteredBooks = filteredBooks.filter(book => book.averageRating >= parseFloat(filters.rating));
  }
  
  if (filters.year) {
    filteredBooks = filteredBooks.filter(book => book.publishedYear >= parseInt(filters.year));
  }
  
  const discoverBooksElement = document.getElementById('discoverBooks');
  
  // Render results or no results message
  if (filteredBooks.length > 0) {
    discoverBooksElement.innerHTML = filteredBooks.map(book => renderBookCard(book)).join('');
  } else {
    let message = "No books found matching your criteria.";
    if (searchQuery && searchQuery.trim()) {
      message = `No books found matching "${searchQuery}". Try a different search term.`;
    }
    discoverBooksElement.innerHTML = renderNoResults(message);
  }
}

function renderProfileView() {
  // Favorite books
  const favoriteBooks = currentUser.favoriteBooks.map(id => getBookById(id)).filter(Boolean);
  document.getElementById('favoriteBooks').innerHTML = 
    favoriteBooks.length > 0 ? 
    favoriteBooks.map(book => renderBookCard(book, false)).join('') :
    '<p style="color: var(--color-text-secondary); text-align: center; grid-column: 1 / -1;">No favorite books yet. Rate some books to see them here!</p>';
  
  // Currently reading
  const currentlyReadingBooks = currentUser.currentlyReading.map(id => getBookById(id)).filter(Boolean);
  document.getElementById('currentlyReading').innerHTML = 
    currentlyReadingBooks.length > 0 ?
    currentlyReadingBooks.map(book => renderBookCard(book, false)).join('') :
    '<p style="color: var(--color-text-secondary); text-align: center; grid-column: 1 / -1;">Not currently reading any books.</p>';
}

function renderListsView() {
  // User's lists
  const userLists = appData.sampleLists.filter(list => list.userId === currentUser.id);
  document.getElementById('userLists').innerHTML = 
    userLists.length > 0 ?
    userLists.map(list => renderListCard(list)).join('') :
    '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--color-text-secondary);"><p>You haven\'t created any lists yet.</p></div>';
  
  // Want to read books
  const wantToReadBooks = currentUser.wantToRead.map(id => getBookById(id)).filter(Boolean);
  document.getElementById('wantToReadBooks').innerHTML = 
    wantToReadBooks.length > 0 ?
    wantToReadBooks.map(book => renderBookCard(book)).join('') :
    '<p style="color: var(--color-text-secondary); text-align: center; grid-column: 1 / -1;">No books in your want to read list yet.</p>';
  
  // Read books (favorites as proxy for read books)
  const readBooks = currentUser.favoriteBooks.map(id => getBookById(id)).filter(Boolean);
  document.getElementById('readBooks').innerHTML = 
    readBooks.length > 0 ?
    readBooks.map(book => renderBookCard(book)).join('') :
    '<p style="color: var(--color-text-secondary); text-align: center; grid-column: 1 / -1;">No books marked as read yet.</p>';
}

function renderSocialView() {
  document.getElementById('socialFeed').innerHTML = 
    appData.socialActivity.map(activity => renderActivityItem(activity)).join('');
}

// Event Listeners
function setupEventListeners() {
  // Navigation
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const view = e.target.getAttribute('data-view');
      switchView(view);
    });
  });

  // Search with debounce
  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchQuery = e.target.value;
      if (currentView === 'discover') {
        renderDiscoverView();
      }
    }, 300); // 300ms debounce
  });

  // Theme toggle
  themeToggle.addEventListener('click', toggleTheme);

  // Modal close buttons
  closeModal.addEventListener('click', () => {
    bookModal.classList.remove('modal--active');
  });
  
  closeRatingModal.addEventListener('click', () => {
    ratingModal.classList.remove('modal--active');
  });

  // Click outside to close modals
  bookModal.addEventListener('click', (e) => {
    if (e.target === bookModal) {
      bookModal.classList.remove('modal--active');
    }
  });
  
  ratingModal.addEventListener('click', (e) => {
    if (e.target === ratingModal) {
      ratingModal.classList.remove('modal--active');
    }
  });

  // Filter changes
  document.getElementById('genreFilter').addEventListener('change', (e) => {
    filters.genre = e.target.value;
    renderDiscoverView();
  });
  
  document.getElementById('ratingFilter').addEventListener('change', (e) => {
    filters.rating = e.target.value;
    renderDiscoverView();
  });
  
  document.getElementById('yearFilter').addEventListener('change', (e) => {
    filters.year = e.target.value;
    renderDiscoverView();
  });

  // Tab switching
  document.addEventListener('click', (e) => {
    if (e.target.matches('.tab')) {
      const tabName = e.target.getAttribute('data-tab');
      switchTab(tabName);
    }
  });

  // Book interactions
  document.addEventListener('click', (e) => {
    if (e.target.matches('.book-card') || e.target.closest('.book-card')) {
      const bookCard = e.target.matches('.book-card') ? e.target : e.target.closest('.book-card');
      const bookId = bookCard.getAttribute('data-book-id');
      if (bookId && !e.target.matches('button')) {
        showBookModal(parseInt(bookId));
      }
    }
    
    if (e.target.matches('.rate-book')) {
      e.stopPropagation();
      const bookId = parseInt(e.target.getAttribute('data-book-id'));
      showRatingModal(bookId);
    }
    
    if (e.target.matches('.want-to-read')) {
      e.stopPropagation();
      const bookId = parseInt(e.target.getAttribute('data-book-id'));
      toggleWantToRead(bookId);
    }
  });

  // Star rating
  document.addEventListener('click', (e) => {
    if (e.target.matches('.star')) {
      const rating = parseInt(e.target.getAttribute('data-rating'));
      updateStarRating(rating);
    }
  });

  // Submit rating
  document.getElementById('submitRating').addEventListener('click', submitRating);
  document.getElementById('cancelRating').addEventListener('click', () => {
    ratingModal.classList.remove('modal--active');
  });
}

function switchView(viewName) {
  // Update navigation
  navItems.forEach(item => {
    item.classList.remove('nav__item--active');
    if (item.getAttribute('data-view') === viewName) {
      item.classList.add('nav__item--active');
    }
  });

  // Update views
  views.forEach(view => {
    view.classList.remove('view--active');
  });
  
  document.getElementById(`${viewName}View`).classList.add('view--active');
  currentView = viewName;

  // Render view content
  switch (viewName) {
    case 'home':
      renderHomeView();
      break;
    case 'discover':
      renderDiscoverView();
      break;
    case 'profile':
      renderProfileView();
      break;
    case 'lists':
      renderListsView();
      break;
    case 'social':
      renderSocialView();
      break;
  }
}

function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('tab--active');
  });
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('tab--active');

  // Update tab panes
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('tab-pane--active');
  });
  
  const targetPane = document.getElementById(`${tabName.replace('-', '')}Tab`);
  if (targetPane) {
    targetPane.classList.add('tab-pane--active');
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-color-scheme', newTheme);
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

function showBookModal(bookId) {
  const book = getBookById(bookId);
  if (!book) return;
  
  currentBook = book;
  document.getElementById('bookDetailContent').innerHTML = renderBookDetail(book);
  bookModal.classList.add('modal--active');
}

function showRatingModal(bookId) {
  currentBook = getBookById(bookId);
  if (!currentBook) return;
  
  // Reset stars and form
  document.querySelectorAll('.star').forEach(star => {
    star.classList.remove('star--active');
  });
  document.getElementById('reviewText').value = '';
  
  ratingModal.classList.add('modal--active');
}

function updateStarRating(rating) {
  document.querySelectorAll('.star').forEach((star, index) => {
    if (index < rating) {
      star.classList.add('star--active');
    } else {
      star.classList.remove('star--active');
    }
  });
}

function submitRating() {
  const activeStars = document.querySelectorAll('.star--active');
  const rating = activeStars.length;
  const reviewText = document.getElementById('reviewText').value;
  
  if (rating === 0) {
    alert('Please select a rating');
    return;
  }
  
  // Add to favorites if 4+ stars
  if (rating >= 4 && !currentUser.favoriteBooks.includes(currentBook.id)) {
    currentUser.favoriteBooks.push(currentBook.id);
  }
  
  // Remove from want to read, add to favorites
  currentUser.wantToRead = currentUser.wantToRead.filter(id => id !== currentBook.id);
  
  // Create review (in real app, would save to backend)
  const newReview = {
    id: appData.sampleReviews.length + 1,
    bookId: currentBook.id,
    userId: currentUser.id,
    rating: rating,
    reviewText: reviewText || `Rated ${rating} star${rating !== 1 ? 's' : ''}`,
    date: new Date().toISOString().split('T')[0],
    likes: 0,
    spoiler: false
  };
  
  appData.sampleReviews.push(newReview);
  
  // Add activity
  const newActivity = {
    id: appData.socialActivity.length + 1,
    type: 'review',
    userId: currentUser.id,
    bookId: currentBook.id,
    content: `${reviewText || `Rated ${currentBook.title}`} ${generateStars(rating)}`,
    timestamp: new Date().toISOString(),
    likes: 0,
    comments: 0
  };
  
  appData.socialActivity.unshift(newActivity);
  
  ratingModal.classList.remove('modal--active');
  
  // Refresh current view
  switchView(currentView);
}

function toggleWantToRead(bookId) {
  const index = currentUser.wantToRead.indexOf(bookId);
  if (index === -1) {
    currentUser.wantToRead.push(bookId);
  } else {
    currentUser.wantToRead.splice(index, 1);
  }
  
  // Refresh current view to update button states
  switchView(currentView);
}

// Initialize Application
function init() {
  setupEventListeners();
  switchView('home');
  
  // Set initial theme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-color-scheme', prefersDark ? 'dark' : 'light');
  themeToggle.textContent = prefersDark ? '☀️' : '🌙';
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);