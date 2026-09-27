import { fileUrl } from '../api.js';
import './ServiceCard.css';

export default function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <img className="service-card-icon" src={fileUrl(service.icon)} alt="" />
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-subtext">{service.subtext}</p>
    </div>
  );
}
