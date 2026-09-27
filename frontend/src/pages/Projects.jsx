import { useEffect, useState } from 'react';
import { getProjects } from '../api.js';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectModal from '../components/ProjectModal.jsx';
import './Projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    getProjects().then(setProjects).catch(() => {});
  }, []);

  return (
    <section className="section marked page-top">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our Work</span>
          <h1>Projects</h1>
          <p>A selection of the work we&rsquo;ve delivered for our partners.</p>
        </div>

        <div className="grid-3">
          {projects.map((p) => (
            <ProjectCard key={p._id} project={p} onClick={() => setActive(p)} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
