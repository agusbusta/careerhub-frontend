import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to CareerHub</h1>
        <p>Your one-stop platform for career development and job search.</p>
        <Link to="/register" className="cta-button">Get Started</Link>
      </div>
      <section className="features">
        <div className="feature-card">
          <h3>CV Builder</h3>
          <p>Create professional CVs with our easy-to-use builder.</p>
        </div>
        <div className="feature-card">
          <h3>Interview Practice</h3>
          <p>Prepare for interviews with our AI-powered practice sessions.</p>
        </div>
        <div className="feature-card">
          <h3>Job Search</h3>
          <p>Find your dream job with our comprehensive job search tool.</p>
        </div>
        <div className="feature-card">
          <h3>Career Advice</h3>
          <p>Get expert career advice tailored to your professional journey.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;