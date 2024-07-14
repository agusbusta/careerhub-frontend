import React from "react";
import "./AboutUs.css";
import { useAuth0 } from "@auth0/auth0-react";

const AboutUs = () => {
    const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  return (
    <div className="about-us-container">
      <section className="about-us-content">
        <h2>Our Story</h2>
        <p>
          Once upon a time, we were just a group of passionate individuals, each
          with a dream and a vision. We saw the challenges in the job market, the
          overwhelming stress of daily work routines, and the anxiety that grips
          the heart during job interviews. We believed deep down that everyone
          deserves support on their career journey, whether they're searching for
          a job, battling work-related stress, or preparing for that crucial
          interview.
        </p>
        <p>
          And so, our platform was born. It wasn't just about creating a tool;
          it was about crafting a haven where people could find the support they
          needed to navigate the complexities of the job market and work life.
          We provide resources for job seekers, tools to practice interviews and
          ease nervousness, and unwavering support for those experiencing work
          stress.
        </p>
        <p>
          Our mission is to transform the job market into a place of opportunity,
          not fear. We want to create a sanctuary for those in need of career
          support, leveraging the power of artificial intelligence to offer
          personalized assistance and make a lasting, positive impact on people's
          professional lives.
        </p>
        <p>
          Join us on this epic journey. Together, we can forge a better working
          world for everyone. Let's turn dreams into reality and create a future
          where everyone feels supported and empowered.
        </p>
        {!user && !isLoading && (
          <button
            className="btn btn-primary btn-block"
            onClick={() => loginWithRedirect()}
          >
            Join CarrerHub Today
          </button>
        )}
      </section>
    </div>
  );
};

export default AboutUs;
