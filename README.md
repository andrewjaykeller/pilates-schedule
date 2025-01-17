# ✨ Free Pilates with AJ

A minimalist, modern scheduling app for free Pilates classes. Built with Next.js and styled with Tailwind CSS, featuring a clean wellness-focused design.

## Features

- 🗓️ Dynamic class listing with future event filtering
- 💫 Modern, mobile-first design with wellness aesthetics
- 🎟️ Direct Partiful integration for class registration
- 🔄 Real-time class availability status
- 📱 Responsive layout optimized for all devices

## Tech Stack

- Next.js 15 with App Router
- Tailwind CSS for styling
- TypeScript for type safety
- Bun as the JavaScript runtime
- date-fns for date manipulation

## Getting Started

```bash
# Install dependencies
bun install

# Run the development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Development Notes

- Uses modern date comparison logic for event filtering
- Implements a clean, wellness-focused UI inspired by modern fitness apps
- Features a soft gradient background with frosted-glass card effects
- Mobile-optimized with thoughtful touch targets and spacing

## Project Structure

```
src/
  app/
    page.tsx      # Main scheduling page
    layout.tsx    # Root layout with metadata
    globals.css   # Global styles
public/
  favicon.svg     # Custom star favicon
```

## Contributing

This is a personal project for scheduling Pilates classes. Feel free to fork and adapt for your own use!

## License

MIT

---
🌟 Check out the code on [GitHub](https://github.com/andrewjaykeller/pilates-schedule)

## AI Contribution

This project was developed in collaboration with Claude 3.5 Sonnet, an AI assistant. The AI contributed to:
- Initial project setup and structure
- Implementation of date comparison logic and testing
- UI/UX design decisions and implementation
- Documentation and README creation
- Bug fixes and code improvements

While the AI provided suggestions and implementations, all code was reviewed and approved by the human developer before deployment.

## Deployment

This site is deployed on Netlify. To deploy your own version:

1. Fork this repository
2. Sign up for [Netlify](https://www.netlify.com)
3. Create a new site from Git
4. Connect your forked repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy! 🚀

Note: Netlify will automatically detect that this is a Next.js site and set up most configurations for you.

## Requirements

- Node.js 18 or later
- npm or Bun package manager

## Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Required for social share images and metadata
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Troubleshooting

### Date Comparison Issues
- If events aren't showing up, check your system timezone against the event times
- The app uses UTC internally for consistency
- All dates are compared at midnight for "future" status

### Testing
- Tests use a mocked date (2024-01-19) for consistent results
- Run `bun test` to check date comparison logic
- Run `bun test:watch` for development

### Common Issues
- If you see SWC dependency warnings, run `npm install` to patch them
- For date-fns import errors, try `npm install date-fns` instead of using Bun
