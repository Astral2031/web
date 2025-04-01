import React from 'react';
import './App.css'; // Include CSS for styling similar to Perplexity UI

// Component 1: Header
function Header() {
  return (
    <header className="header">
      <h1>Search Assistant</h1>
    </header>
  );
}

// Component 2: SearchBar
function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Type your query here..." />
      <button>
        <span role="img" aria-label="search-icon">🔍</span>
      </button>
    </div>
  );
}

// Component 3: Sidebar
function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>Home</li>
        <li>Discover</li>
        <li>Collections</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}

// Component 4: MainContent
function MainContent() {
  return (
    <main className="main-content">
      <p>Welcome to the search assistant. Enter a query above to begin!</p>
    </main>
  );
}

// Component 5: Footer
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Search Assistant. All rights reserved.</p>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <div className="main-wrapper">
          <SearchBar />
          <MainContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;