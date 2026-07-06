# AI Job Board

A full-stack AI-assisted Job Board built with Next.js, React, TypeScript, Supabase, and Tailwind CSS.

The platform allows employers to create and manage job postings while candidates can browse and apply for available positions through a secure authentication system.

---

## Features

### Authentication

- User registration
- Email verification
- Secure login/logout
- Supabase Authentication
- Role-based access (Employer & Candidate)

### Employer Features

- Employer Dashboard
- Create job postings
- Edit job postings
- Delete job postings
- View all posted jobs
- Dashboard statistics

### Candidate Features

- Browse all jobs
- Search jobs
- Filter remote/on-site jobs
- Sort jobs
- View job details
- Apply for jobs
- Duplicate application prevention

### Security

- Supabase Row Level Security (RLS)
- Protected dashboard routes
- Employer-only dashboard access
- Candidate-only job applications
- Secure Server Actions

---

## Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Base UI

### Backend

- Supabase
- PostgreSQL
- Row Level Security
- Server Actions

### Deployment

- Vercel

### CI/CD

- GitHub Actions

---

## Project Structure

```
app/
├── auth/
├── dashboard/
├── jobs/
├── api/

components/
├── auth/
├── dashboard/
├── jobs/
├── ui/

lib/
├── auth.ts
├── jobs.ts
├── supabase/
```

---

## Database Schema

### Profiles

| Column    | Type |
| --------- | ---- |
| id        | UUID |
| full_name | Text |
| role      | Text |

---

### Jobs

| Column          | Type    |
| --------------- | ------- |
| id              | UUID    |
| title           | Text    |
| company         | Text    |
| location        | Text    |
| salary          | Text    |
| description     | Text    |
| requirements    | Text    |
| employment_type | Text    |
| remote          | Boolean |

---

### Applications

| Column       | Type      |
| ------------ | --------- |
| id           | UUID      |
| user_id      | UUID      |
| job_id       | UUID      |
| cover_letter | Text      |
| status       | Text      |
| created_at   | Timestamp |

---

## Authentication Flow

```
Register

↓

Verify Email

↓

Login

↓

Role Lookup

↓

Employer
      ↓
 Dashboard

Candidate
      ↓
 Browse & Apply
```

---

## Application Flow

```
Employer

↓

Create Job

↓

Candidate

↓

Browse Jobs

↓

View Details

↓

Apply

↓

Application Saved

↓

Employer Reviews Applicants
```

---

## Search & Filtering

The job listing page supports:

- Keyword search
- Remote / On-site filtering
- Salary sorting
- Dynamic URL parameters

---

## Security

The application implements several security best practices:

- Protected server routes
- Supabase Authentication
- Row Level Security Policies
- Server-side validation
- Role-based authorization
- Duplicate application prevention

---

## Running Locally

### Clone

```bash
git clone https://github.com/YOUR_USERNAME/ai-job-board.git
```

### Install

```bash
npm install
```

### Create Environment Variables

Create:

```
.env.local
```

Add:

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

### Run

```bash
npm run dev
```

---

## CI/CD

GitHub Actions automatically:

- Installs dependencies
- Runs ESLint
- Builds the Next.js application

Successful pushes to the `main` branch are automatically deployed through Vercel.

---

## Deployment

This project is deployed using **Vercel**.

Deployment is automatically triggered whenever changes are pushed to the `main` branch.

---

## AI-Assisted Development

This project was developed with assistance from AI tools to accelerate development, improve debugging, and streamline documentation.

AI was used to assist with:

- Project architecture
- Component design
- Debugging
- TypeScript issues
- Supabase integration
- Server Actions
- Authentication implementation
- CI/CD configuration
- Documentation

All code was reviewed, integrated, and tested before being included in the final application.

---

## Future Improvements

- Resume uploads
- Applicant management dashboard
- Saved jobs
- Company profiles
- Email notifications
- Job categories
- Pagination
- Analytics dashboard
- AI-powered resume matching
- AI-generated job descriptions

---

## Author

Brian Nazareth

## Changelog:

(July 6 2026)

v1.0.0:

- Initial Release