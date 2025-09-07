# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AstroPaper blog theme - a minimal, responsive, accessible and SEO-friendly Astro blog theme with TypeScript support.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server at localhost:4321
pnpm run dev

# Type checking and production build
pnpm run build

# Preview production build
pnpm run preview

# Format code with Prettier
pnpm run format

# Check code formatting
pnpm run format:check

# Lint with ESLint
pnpm run lint

# Sync Astro types
pnpm run sync
```

## Architecture & Key Components

### Core Configuration
- **src/config.ts**: Main site configuration (title, description, pagination, features)
- **astro.config.ts**: Astro build configuration with Tailwind, sitemap, and markdown plugins
- **src/content.config.ts**: Content collection schema for blog posts

### Content Management
- Blog posts are stored in `src/data/blog/` as Markdown files
- Posts support frontmatter with: title, description, pubDatetime, modDatetime, tags, draft status, featured flag
- Dynamic OG images are generated for blog posts using Satori

### Routing Structure
- `/` - Homepage with paginated blog posts
- `/posts/[...slug]` - Individual blog post pages
- `/tags` - All tags listing
- `/tags/[tag]` - Posts filtered by tag
- `/archives` - Archive page (optional via config)
- `/search` - Fuzzy search powered by Pagefind
- `/about` - About page

### Key Features Implementation
- **Search**: Pagefind integration builds search index during build
- **Dark Mode**: Toggle stored in localStorage, script in `public/toggle-theme.js`
- **Social Links**: Configured in `src/constants.ts`
- **Typography**: Tailwind Typography plugin with custom styles in `src/styles/`

### Component Organization
- Layout components in `src/layouts/`
- UI components in `src/components/`
- SVG icons in `src/assets/icons/`
- Utility functions in `src/utils/`

## Important Development Notes

- ESLint enforces `no-console` rule - avoid console.log statements
- Path alias `@/*` maps to `src/*` directory
- Pagefind search index is generated post-build and copied to public/
- Google Site Verification can be added via `PUBLIC_GOOGLE_SITE_VERIFICATION` env variable
- Edit post links can be configured in `src/config.ts`