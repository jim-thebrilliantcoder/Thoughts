import { useEffect, useState } from 'react';
import { getServices } from '../api.js';
import ServiceCard from '../components/ServiceCard.jsx';
import './Services.css';

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(setServices).catch(() => {});
  }, []);

  return (
    <section className="section marked page-top">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Do</span>
          <h1>Services</h1>
          <p>Capabilities we bring to every partnership.</p>
        </div>

        <div className="services-list">
          {services.map((s) => (
            <ServiceCard key={s._id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
