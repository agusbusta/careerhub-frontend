import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"; // Importa Link desde React Router
import "./Dashboard.css";

function Dashboard() {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="dashboard">Loading...</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Welcome back, {user.given_name}</h1>
      </div>

      <div className="section">
        <h2>Your journey starts here</h2>
        <div className="card-container">
          <Card
            imgSrc="https://cdn.usegalileo.ai/sdxl10/161c15a7-5455-47f1-bdf8-848c1303ab41.png"
            title="Create your CV"
            linkTo="/create-cv" // Ruta para el enlace
          />
          <Card
            imgSrc="https://cdn.usegalileo.ai/sdxl10/dde864cb-0cfe-48f9-b23f-85f796aab148.png"
            title="Practice for interviews"
            linkTo="/practice-interviews" // Ruta para el enlace
          />
          <Card
            imgSrc="https://cdn.usegalileo.ai/sdxl10/1ffbd8e5-15f9-4977-88d1-c67ee14d69ed.png"
            title="Find jobs"
            linkTo="/find-jobs" // Ruta para el enlace
          />
          <Card
            imgSrc="https://cdn.usegalileo.ai/sdxl10/132d0543-625a-444a-b22a-9e44a80b7f39.png"
            title="CareerHub Connect"
            linkTo="/connect-job-seekers" // Ruta para el enlace
          />
        </div>
      </div>

      <div className="section">
        <h2>What's new</h2>
        <div className="mini-card-container">
          <MiniCard
            imgSrc="https://cdn.usegalileo.ai/sdxl10/95807204-8032-4511-bedc-9e336f91c221.png"
            title="Events"
            subtitle="Coming soon..."
          />
        </div>
      </div>
    </div>
  );
}

const MiniCard = ({ imgSrc, title, subtitle }) => (
  <div className="mini-card">
    <img src={imgSrc} alt={title} />
    <p>{title}</p>
    {subtitle && <p>{subtitle}</p>}
  </div>
);

const Card = ({ imgSrc, title, linkTo }) => (
  <Link to={linkTo} className="card-link">
    <div className="card">
      <img src={imgSrc} alt={title} />
      <h4>{title}</h4>
    </div>
  </Link>
);



export default Dashboard;
