# Local Gym Website

A responsive promotional website for a local gym, with a private admin dashboard for managing website content and customer inquiries.

## Technology Stack

- Next.js with App Router
- React and TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase and PostgreSQL
- Supabase Auth
- Lucide React
- Git and GitHub

## Planned Features

### Public Website
- Home page
- Facilities and equipment gallery
- Membership plans and pricing
- Contact information and location
- Membership inquiry form

### Admin Dashboard
- Secure administrator login
- Inquiry management and status tracking
- Membership plan management
- Website content and contact information management
- Gallery management

## Getting Started

### Requirements
- Node.js (20.9 or newer)
- npm
- Git

### Installation

```bash
git clone <repository-url>
cd local-gym-website
npm install
```

Create a `.env.local` file in the project root and configure the required environment variables using `.env.example` as a reference.

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000.

## Development Commands

```bash
npm run dev
npm run lint
npm run build
```

## Project Status

Initial project setup. Public pages, database integration, and the admin dashboard will be implemented in subsequent development phases.

## Security

- Never commit `.env.local` or real credentials.
- Keep privileged backend keys on the server.
- Protect administrator routes and private data with authentication and authorization.
