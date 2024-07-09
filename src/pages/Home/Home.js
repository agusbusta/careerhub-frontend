import "./Home.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';



function Home() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      navigate(`/register?email=${encodeURIComponent(email)}`);
    } else {
      navigate("/register");
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="home-container">
      <div className="home-hero">
        <div className="home-content-container">
          <div className="home-content">
            <div
              className="hero-bg"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/d7648cfa-bc8d-495b-a5d8-41491aec4576.png")`,
              }}
            >
              <div className="hero-text">
                <h1 className="hero-title">
                  Unlock the full potential of your career
                </h1>
                <h2 className="hero-subtitle">
                  Build a successful career with personalized insights,
                  practical advice, and a supportive community
                </h2>
                <br></br>
                <form onSubmit={handleEmailSubmit}>
                  <label className="hero-input">
                    <div className="input-container">
                      <div className="input-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                        </svg>
                      </div>
                      <input
                        placeholder="Enter your email to get started"
                        className="form-input"
                        value={email}
                        onChange={handleChange}
                      />
                      <div className="input-button">
                        <button type="submit" className="submit-button">
                          <span className="truncate">Submit</span>
                        </button>
                      </div>
                    </div>
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div className="features-container">
            <div className="features-intro">
              <h1 className="features-title">Empower Your Career Journey</h1>
              <p className="features-description">
                CareerHub equips you with the tools, insights, and community
                support necessary to excel in your career, whether you're just
                starting out or a seasoned professional.
              </p>
            </div>
            <div className="features-grid">
              <FeatureCard
                image="https://cdn.usegalileo.ai/stability/33c200f9-9648-4b99-8a19-750778efc6ad.png"
                title="AI-Powered Tools"
                description="Utilize AI-driven CV builders, interview practice simulations, and personalized career advice for optimal career advancement."
              />
              <FeatureCard
                image="https://cdn.usegalileo.ai/stability/489dd3ef-04a8-457f-8151-b8d9f10bf844.png"
                title="Global Market Insights"
                description="Stay informed about industry trends and global job market dynamics to make informed decisions."
              />
              <FeatureCard
                image="https://cdn.usegalileo.ai/stability/673a6f3f-3d2f-42b2-b580-0429ee5eed1e.png"
                title="Job Search Made Easy"
                description="Explore millions of open roles with advanced search filters tailored to match your skills and preferences."
              />
              <FeatureCard
                image="https://cdn.usegalileo.ai/stability/01ca8977-8ee8-4878-bd98-80034b75aad1.png"
                title="Skill Development"
                description="Sharpen your skills through a comprehensive library of courses designed to enhance your professional toolkit."
              />
              <FeatureCard
                image="https://cdn.usegalileo.ai/stability/d478103a-6723-40ca-971e-99f0900c20fd.png"
                title="Discover New Opportunities"
                description="Explore companies and roles that align with your values and interests, uncovering new career pathways."
              />
              <FeatureCard
                image="https://cdn.usegalileo.ai/stability/7782c255-90dc-4603-829b-036e023f70c7.png"
                title="Community Engagement"
                description="Join a vibrant community of professionals and job seekers to share experiences, seek advice, and expand your network."
              />
            </div>
          </div>

          <div className="join-container">
          <Link to="/register"><button className="join-button" >Join CareerHub today</button></Link>
          <Link to="/login"><p className="account-link">Already have an account?</p></Link>  
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ image, title, description }) => (
  <div className="feature-card">
    <div
      className="feature-image"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div>
      <p className="feature-title">{title}</p>
      <p className="feature-description">{description}</p>
    </div>
  </div>
);

export default Home;
