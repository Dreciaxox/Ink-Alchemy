import { useState, useEffect } from 'react';
import ReactGA from 'react-ga'; // Google Analytics

// Dynamic greeting based on time of day
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
};

export default function Home() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your API logic to handle email subscription
    alert('Thank you for subscribing!');
    ReactGA.event({
      category: 'User',
      action: 'Clicked Join Community',
    });
  };

  return (
    <div className="container">
      <header className="hero">
        <h1>{getGreeting()}, Welcome to Ink & Alchemy + The Wildcrafted Mama</h1>
        <p>Your digital sanctuary for homesteading, spiritual growth, and journaling.</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange} 
            placeholder="Enter your email" 
            required 
          />
          <button type="submit">Join Our Community</button>
        </form>
      </header>

      {/* Add more sections like products, about, etc. */}
    </div>
  );
}