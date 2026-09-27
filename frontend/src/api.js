const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const FILE_BASE = BASE.replace(/\/api\/?$/, '');

// API data returns image paths like "/uploads/clients/x.png" — relative to
// the BACKEND, not the frontend dev server. Resolve them to a full URL so
// <img> tags don't request them from localhost:5173 by mistake.
export function fileUrl(path) {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  return `${FILE_BASE}${path}`;
}

async function request(path) {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`Request failed: ${path}`);
  return res.json();
}

export const getHome = () => request('/home');
export const getAbout = () => request('/about');
export const getProjects = () => request('/projects');
export const getProject = (id) => request(`/projects/${id}`);
export const getServices = () => request('/services');
