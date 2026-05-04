import { useNavigate } from "react-router-dom";
import GlitchLogo from "../assets/GlitchLogo.jsx";


export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="page-wrapper notfound-page">
            
      <div className="notfound-container">
        
        <div className="notfound-visual">
          <div className="notfound-frame">
            <GlitchLogo className="notfound-image" />
          </div> 
        </div>

        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">
          Something glitched. This page doesn't exist.
        </p>

        <div className="notfound-actions">
          <button
            className="primary-btn"
            onClick={() => navigate("/", { viewTransition: true })}
          >
            Back to Gallery
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}