import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getHome, getProjects, getServices, fileUrl } from '../api.js';
import ProjectCard from '../components/ProjectCard.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import './Home.css';

export default function Home() {
  const [home, setHome] = useState(null);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    getHome().then(setHome).catch(() => {});
    getProjects().then((data) => setProjects(data.slice(0, 3))).catch(() => {});
    getServices().then((data) => setServices(data.slice(0, 3))).catch(() => {});
  }, []);

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(33,35,31,0.15) 0%, rgba(33,35,31,0.65) 100%), url(${fileUrl(home?.backgroundImage) || ''})`
        }}
      >
        <div className="container hero-inner">
          <span className="eyebrow" style={{ color: '#e4e1d5' }}>
            Est. {home?.tagline ? '' : ''}Projects &amp; Partnerships
          </span>
          <h1 className="hero-title">
            {home?.tagline || 'Building the future, one project at a time'}
          </h1>
          <Link to="/about" className="btn btn-light">
            About Us
          </Link>
        </div>
        <div className="hero-scroll">Scroll</div>
      </section>

      <section className="section marked">
        <div className="container">
          <div className="section-head-row">
            <div>
              <span className="eyebrow">Our Work</span>
              <h2>Selected Projects</h2>
            </div>
            <Link to="/projects" className="link-arrow">
              View all projects
            </Link>
          </div>
          <div className="grid-3">
            {projects.map((p) => (
              <Link key={p._id} to="/projects" className="grid-card-link">
                <ProjectCard project={p} onClick={() => {}} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt marked">
        <div className="container">
          <div className="section-head-row">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2>Our Services</h2>
            </div>
            <Link to="/services" className="link-arrow">
              View all services
            </Link>
          </div>
          <div className="grid-3">
            {services.map((s) => (
              <ServiceCard key={s._id} service={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
