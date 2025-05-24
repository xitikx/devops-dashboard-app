import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DevOps Dashboard - Dev Environment</h1>
        <p>Welcome to your DevOps dashboard!</p>
        <div className="dashboard-content">
          <h2>Environment Details</h2>
          <p>Environment: {window.env?.ENVIRONMENT || 'Unknown'}</p>
          <p>CloudFront URL: {window.env?.CLOUDFRONT_URL || 'Not set'}</p>
        </div>
      </header>
    </div>
  );
}

export default App;