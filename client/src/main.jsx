
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Replace 'App' with the root component of your application

// Replace ReactDOM.render with createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app wrapped with BrowserRouter
root.render(
  <Router>
    <App />
  </Router>
);