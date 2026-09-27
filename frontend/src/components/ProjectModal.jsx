import { fileUrl } from '../api.js';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        <img className="modal-icon" src={fileUrl(project.icon)} alt="" />
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-details">{project.details}</p>

        {project.images?.length > 0 && (
          <div className="modal-gallery">
            {project.images.map((src) => (
              <img key={src} src={fileUrl(src)} alt={project.title} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
