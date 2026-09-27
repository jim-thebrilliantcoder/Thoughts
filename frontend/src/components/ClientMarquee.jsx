import { useState } from 'react';
import { fileUrl } from '../api.js';
import './ClientMarquee.css';

// Renders the list twice back-to-back so the CSS animation can loop seamlessly.
export default function ClientMarquee({ clients }) {
  const [failed, setFailed] = useState(() => new Set());

  if (!clients?.length) return null;
  const visible = clients.filter((c) => !failed.has(c._id));
  if (!visible.length) return null;
  const track = [...visible, ...visible];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {track.map((c, i) => (
          <div className="train-car" key={`${c._id}-${i}`}>
            <img
              src={fileUrl(c.logo)}
              alt={c.name}
              title={c.name}
              onError={() =>
                setFailed((prev) => new Set(prev).add(c._id))
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}