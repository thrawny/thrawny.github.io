# Personal Website

My personal website and blog built with Astro.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
pnpm install

# Start development server at localhost:4321
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

### Other Commands

```bash
# Format code with Prettier
pnpm run format

# Check code formatting
pnpm run format:check

# Lint with ESLint
pnpm run lint

# Sync Astro types
pnpm run sync
```

## 📝 Writing Blog Posts

1. Create a new markdown file in `src/data/blog/`
2. Add frontmatter with required fields:
   - `title`: Post title
   - `description`: Post description
   - `pubDatetime`: Publication date (auto-set by Git hooks)
   - `tags`: Array of tags
   - `draft`: Set to `true` for drafts, `false` to publish

### Git Hooks

This project uses Git hooks to automatically manage dates:

- New posts: `pubDatetime` is set on first commit
- Updates: `modDatetime` is updated when editing published posts
- First publish: Use `draft: first` to transition from draft to published

## 🎨 Customization

- **Site config**: Edit `src/config.ts`
- **Social links**: Edit `src/constants.ts`
- **About page**: Edit `src/pages/about.md`
- **Styles**: Modify files in `src/styles/`

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Search**: [Pagefind](https://pagefind.app/)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)

## 📄 License

- **Code & Theme**: [MIT License](./LICENSE)
- **Blog Content**: [CC BY 4.0](./LICENSE-CONTENT)
