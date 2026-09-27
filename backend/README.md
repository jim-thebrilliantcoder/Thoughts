# Company Website Backend (MERN - Express + MongoDB)

## Setup
1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env` and set your `MONGO_URI` (local Mongo or MongoDB Atlas)
4. `npm run seed` — populates the DB with sample content
5. `npm run dev` — starts the server (requires `nodemon`), or `npm start`

## Structure
```
backend/
  config/db.js          MongoDB connection
  models/                Mongoose schemas (Home, About, Project, Service)
  controllers/           Route logic
  routes/                Express routers
  seed/seed.js           Sample data loader
  server.js              App entry point
```

## API Endpoints

### Home
- `GET /api/home` — hero background image + tagline
- `PUT /api/home` — update hero content

### About
- `GET /api/about` — vision, story, company info, clients, team
- `PUT /api/about` — update about content

### Projects
- `GET /api/projects` — list all projects (icon, title, shortDesc)
- `GET /api/projects/:id` — single project (details + images) for the click-to-expand view
- `POST /api/projects` — create project
- `PUT /api/projects/:id` — update project
- `DELETE /api/projects/:id` — delete project

### Services
- `GET /api/services` — list all services (icon, title, subtext)
- `POST /api/services` — create service
- `PUT /api/services/:id` — update service
- `DELETE /api/services/:id` — delete service

## Notes
- Image fields (`backgroundImage`, `icon`, `photo`, `logo`, `images`) are stored as string paths/URLs. Serve actual files via a static folder (e.g. `/uploads`) or a cloud storage service (Cloudinary, S3) and store the resulting URL in these fields.
- No auth is included since none was requested — add JWT-based auth on the write routes (POST/PUT/DELETE) before going to production if this will be publicly editable.
