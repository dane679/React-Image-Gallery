import Logo from "../assets/Logo.jsx";

export default function About() {
  return (
    <main className="page-wrapper about-page">

      <section className="about-hero">
        
        <div className="about-logo-wrapper">
          <Logo className="about-logo" />
        </div>

        <div className="about-hero-divider" />
        <div className="about-hero-content">           
          <h1>React Image Gallery</h1>
          <p className="subtitle">
            Modern React image gallery powered by Unsplash,
            with smooth performance and UI.
          </p>
          <div className="about-hero-tags">
            {['React', 'React Router', 'Unsplash API', 'View Transitions', 'CSS'].map((tag, idx) => (
              <span 
              key={tag} 
              className="about-hero-tag"
              style={{ '--tag-delay': `${180 + idx * 60}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="section-wrapper">
        <section className="about-intro">
          <h2>About This Project</h2>
          <p>
            This project is a responsive image gallery built with React and Vite.
            It integrates the Unsplash REST API to fetch and display images
            dynamically, while focusing on performance, smooth navigation, and
            modern UI techniques such as view transitions and skeleton loading states.
            The gallery allows users to search and filter images by category and keywords,
            providing an engaging and efficient browsing experience. 
            <br />
            <br />
            I was motivated to build this project, as an Image Gallery case study is a great 
            opportunity to deepen my understanding of React and frontend development practices.
            I wanted to challenge myself to create a real-world application that meets real-world needs,
            going beyond basic operations and meeting real-world user experience standards.
            I also wanted to experience modern webtechnologies in a real development environment
            and whilst practicing them.
            <br />
            <br />
            At a personal level, this project allowed me to combine my interest in UI design with practical 
            frontend engineering. This case study allowed me to explore real world web development using a fun
            and engaging case study. The goal was to create an experience that not only works well technically, 
            but also feels fluid and intentional to use, reflecting both my creative approach to design 
            and my attention to performance and detail. I wanted to create something that I could enjoy using myself, 
            while also demonstrating my skills and growing as a frontend developer to create something meaningful, impactful
            and real.
          </p>
        </section>

        <section className="about-section about-overview">
          <h2>Overview</h2>
          <p>
            This project integrates the Unsplash REST API to fetch and display photo
            images dynamically, into a structured gallery format. 
            The gallery is a <strong>SPA</strong> (Single Page Application) website designed to be responsive and user-friendly, 
            allowing users to search and filter images by category and keywords. 
            The application focuses on user experience, user satisfaction and visuals, achieved through
            smooth navigation between views, functional UI, style, micro-interactions 
            and modern UI patterns such as view transitions and skeleton loading.
          </p>
        </section>

        <div className="about-grid">
          <section className="about-section about-features">
            <h2>Key Features</h2>
            <ul className="about-list">
              <li>Search and filter images by category and keywords</li>
              <li>In-memory caching to reduce redundant API calls</li>
              <li>Client-side filtering using React state and memoisation</li>
              <li>Responsive masonry-style gallery layout</li>
              <li>View Transitions API for smooth page navigation</li>
              <li>Skeleton loaders and placeholder elements for improved UX</li>
              <li>Detailed image pages with relevant metadata and external links</li>
            </ul>
          </section>

          <section className="about-section about-tech">
            <h2>Technical Highlights</h2>
            <ul className="about-list">
              <li>React + Vite for fast development and build performance</li>
              <li>React Router for client-side navigation</li>
              <li>Unsplash API integration with async data handling</li>
              <li>Custom caching layer using JavaScript Map</li>
              <li>View Transition API for shared element animations</li>
              <li>URL state management using search params</li>
            </ul>
          </section>
        </div>

        <section className="about-section about-focus">
          <h2>What I Focused On</h2>
          <p>
            The goal of this project was to go beyond a simple gallery and explore
            real-world frontend concerns such as performance optimisation, state
            management, perceived loading speed, and smooth navigation between
            pages.
          </p>
        </section>
      </div>
    </main>
  );
}
