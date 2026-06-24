# TFPA Website — Mock v1

Prototype of the Thai Financial Planners Association (TFPA) website.  
Monorepo with a React frontend and a Strapi CMS backend.

---

## Structure

```
tfpa-mock-v1/
├── frontend/       React + Vite + Tailwind CSS
└── tfpa-cms/       Strapi v5 (SQLite)
```

---

## Quick Start

### 1. Install dependencies

```bash
# Root (concurrently)
npm install

# Frontend
cd frontend && npm install

# CMS
cd tfpa-cms && npm install
```

### 2. Run both servers

```bash
# From repo root — starts frontend (port 5173) and CMS (port 1337) together
npm run dev
```

Or run individually:

```bash
cd frontend && npm run dev       # http://localhost:5173
cd tfpa-cms  && npm run dev      # http://localhost:1337
```

Strapi admin panel: **http://localhost:1337/admin**

### 3. Seed mock data

With Strapi **not running**, seed all content types with realistic mock data:

```bash
cd tfpa-cms
npm install          # installs ts-node if not present
npm run seed
```

This creates:

| Collection      | Count | Description |
|-----------------|-------|-------------|
| Announcements   | 10    | CFP® exam registrations, results, curriculum updates |
| News            | 10    | Exam results, training calendars, association news |
| PDFs            | 32    | Magazines, TFPA News, E-Books, Brochures (by audience), For Professionals |
| Rich Content    | 2     | FAQ page, About page |

---

## CMS Content Types

All collections live under `tfpa-cms/src/api/`.

### Announcement (`api::announcement.announcement`)

| Field   | Type   | Notes |
|---------|--------|-------|
| `title` | string | |
| `issue` | string | e.g. `1/2569` |
| `date`  | date   | |
| `pdf`   | media  | single file upload |

### News (`api::new.new`)

| Field     | Type     | Notes |
|-----------|----------|-------|
| `title`   | string   | |
| `date`    | datetime | |
| `issue`   | string   | |
| `blogUrl` | string   | optional link to blog post |
| `pdf`     | media    | single file upload |

### PDF (`api::pdf.pdf`)

| Field          | Type   | Notes |
|----------------|--------|-------|
| `title`        | string | |
| `issue`        | string | |
| `date`         | date   | |
| `pdfUrl`       | string | direct URL to PDF |
| `thumbnailUrl` | string | cover image URL |
| `blogUrl`      | string | optional blog version link |
| `docType`      | enum   | `For Professionals` / `TFPA Magazine` / `TFPA News` / `Brochures` / `E-Book` |
| `audienceType` | enum   | `General Audience` / `Professionals` / `Company` / `Training School` / `Media` |

### Rich (`api::rich.rich`)

| Field     | Type   | Notes |
|-----------|--------|-------|
| `title`   | string | |
| `content` | blocks | Strapi rich-text blocks |

### Blog (`api::blog.blog`)

Schema defined, attributes not yet populated — reserved for future use.

---

## Frontend Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About TFPA |
| `/contact` | Contact |
| `/find_planner` | Find a Financial Planner |
| `/for_you` | For You (landing) |
| `/for_you/general_audience` | For General Audience |
| `/for_you/student` | For Students |
| `/for_you/professional` | For Professionals |
| `/for_you/company` | For Companies |
| `/for_you/training_school` | For Training Schools |
| `/for_you/media` | For Media |
| `/resources` | Resources (landing) |
| `/resources/news` | News |
| `/resources/announcements` | Announcements |
| `/resources/activities` | Activities |
| `/resources/tfpa_magazines` | TFPA Magazine |
| `/resources/tfpa_news` | TFPA News |
| `/resources/blogs` | Blogs |
| `/resources/ebook` | E-Books & Brochures |
| `/resources/documents` | Document Center |
| `/resources/videos` | Videos |

---

## CMS API Endpoints Used by Frontend

All served from `http://localhost:1337`.

```
GET /api/announcements?populate=pdf&sort=date:desc
GET /api/news?populate=pdf&sort=date:desc
GET /api/pdfs?filters[docType][$eq]=TFPA+Magazine
GET /api/pdfs?filters[docType][$eq]=TFPA+News
GET /api/pdfs?filters[docType][$eq]=E-Book
GET /api/pdfs?filters[docType][$eq]=Brochures&filters[audienceType][$eq]=General+Audience
GET /api/pdfs?filters[docType][$eq]=Brochures&filters[audienceType][$eq]=Professionals
GET /api/pdfs?filters[docType][$eq]=Brochures&filters[audienceType][$eq]=Company
```

> Strapi returns `{ data: [...], meta: { pagination: {...} } }`.

---

## Tech Stack

| Layer    | Technology |
|----------|------------|
| Frontend | React 19, Vite 8, Tailwind CSS 4, React Router 7 |
| CMS      | Strapi v5, SQLite (`better-sqlite3`) |
| Language | TypeScript throughout |
| Dev runner | `concurrently` (root `npm run dev`) |
