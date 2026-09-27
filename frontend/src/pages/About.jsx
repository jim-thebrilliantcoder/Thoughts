import { useEffect, useState } from 'react';
import { getAbout, fileUrl } from '../api.js';
import ClientMarquee from '../components/ClientMarquee.jsx';
import './About.css';

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    getAbout().then(setAbout).catch(() => {});
  }, []);

  if (!about) return <div className="page-spacer" />;

  const info = about.companyInfo || {};

  return (
    <>
      {/* Section 1: Our Vision */}
      <section className="section marked page-top">
        <div className="container about-vision">
          <span className="eyebrow">Our Vision</span>
          <h1 className="vision-quote">{about.vision}</h1>
        </div>
      </section>

      {/* Section 2: Company basic info */}
      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">Company</span>
          <h2>{info.name}</h2>
          {info.empanelment && <p className="empanelment">{info.empanelment}</p>}
          {info.profile && <p className="story-text">{info.profile}</p>}

          <dl className="info-grid">
            <div>
              <dt>Registered Office</dt>
              <dd>{info.regdOffice}</dd>
            </div>
            <div>
              <dt>Test House</dt>
              <dd>{info.testHouse}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>{info.phone}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{info.email}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Section 3: Our Clients - continuous train-style marquee */}
      <section className="section clients-section">
        <div className="container">
          <span className="eyebrow">Trusted By</span>
          <h2>Our Clients</h2>
        </div>
        <ClientMarquee clients={about.clients} />
      </section>

      {/* Section 4: Meet Us */}
      <section className="section section-alt marked">
        <div className="container">
          <span className="eyebrow">The Team</span>
          <h2>Meet Us</h2>
          <div className="team-grid">
            {about.team?.map((t) => (
              <div key={t._id} className="team-member">
                <img src={fileUrl(t.photo)} alt={t.name} />
                <p className="team-name">{t.name}</p>
                <p className="team-role">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
