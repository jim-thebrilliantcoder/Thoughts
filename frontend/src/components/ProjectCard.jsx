import { fileUrl } from '../api.js';
import './ProjectCard.css';

export default function ProjectCard({ project, onClick }) {
  return (
    <button className="project-card" onClick={onClick}>
      <img className="project-card-icon" src={fileUrl(project.icon)} alt="" />
      <h3 className="project-card-title">{project.title}</h3>
      {project.shortDesc && (
        <p className="project-card-desc">{project.shortDesc}</p>
      )}
      <span className="link-arrow">View project</span>
    </button>
  );
}
