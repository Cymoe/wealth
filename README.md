# WealthArchetypes

A personality-based wealth assessment tool inspired by 16Personalities, designed to help users discover their unique approach to building and managing wealth.

## Overview

WealthArchetypes categorizes individuals into 16 distinct wealth personality types, organized into 4 main roles:

- **Builders** (Purple) - Focus on creating sustainable wealth through systematic approaches
- **Innovators** (Blue) - Generate wealth through creative solutions and new opportunities  
- **Connectors** (Yellow) - Build wealth through relationships and collaborative ventures
- **Guardians** (Green) - Preserve and grow wealth through careful management and protection

## Features

- Interactive 15-question assessment
- 16 unique wealth archetype profiles
- Detailed results with strengths and challenges
- Comprehensive type descriptions
- Mobile-responsive design
- Light/dark mode support

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Landing page
│   ├── test/             # Quiz page
│   ├── results/[type]/   # Results page
│   └── types/            # Type overview and detail pages
└── lib/
    ├── wealth-archetypes.ts  # Archetype definitions
    └── quiz-questions.ts     # Quiz logic
```

## Technologies

- Next.js 15
- TypeScript
- CSS Modules
- React

## License

This project is for demonstration purposes.