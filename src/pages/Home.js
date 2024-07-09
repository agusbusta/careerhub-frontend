import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to CareerHub!</h1>
      <p>Your one-stop platform for career development and job search.</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Home;