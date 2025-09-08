export type PillarType = 'capital' | 'time' | 'location';

export interface WealthPriority {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  strengths: string[];
  blindspots: string[];
  famousExamples: string[];
  recommendedPath: string;
  nextActions: string[];
}

export const WEALTH_PRIORITIES: WealthPriority[] = [
  {
    id: 'capital-titan',
    name: 'The Capital Titan',
    icon: '₿',
    tagline: 'Building generational wealth is your mission',
    description: 'You see money as the ultimate scorecard. While others talk about work-life balance, you\'re focused on building an empire that outlasts you. Time and location are secondary to wealth accumulation.',
    strengths: [
      'Laser focus on ROI and growth',
      'Exceptional at spotting opportunities',
      'Building systems that scale',
      'Long-term thinking'
    ],
    blindspots: [
      'May sacrifice health and relationships',
      'Risk of never feeling "enough"',
      'Missing out on life experiences',
      'Burnout from constant grinding'
    ],
    famousExamples: ['Warren Buffett', 'Elon Musk', 'Sam Zell'],
    recommendedPath: 'Focus on building businesses with strong exit potential. Consider the "Die With Zero" philosophy to avoid hoarding wealth you\'ll never use.',
    nextActions: [
      'Set a specific wealth target and timeline',
      'Build systems to track ROI on everything',
      'Schedule regular "wealth audits" to ensure you\'re on track'
    ]
  },
  {
    id: 'time-architect',
    name: 'The Time Architect',
    icon: '∞',
    tagline: 'Your calendar is your most precious asset',
    description: 'You understand that time is the only true non-renewable resource. You\'d rather have modest wealth with complete autonomy than billions with no freedom. Every decision is filtered through "will this give me more time?"',
    strengths: [
      'Masters of delegation and automation',
      'Clear boundaries and priorities',
      'High quality of life',
      'Present and engaged when it matters'
    ],
    blindspots: [
      'May leave money on the table',
      'Can appear unmotivated to others',
      'Risk of lifestyle inflation',
      'Limited wealth accumulation'
    ],
    famousExamples: ['Tim Ferriss', 'Derek Sivers', 'Mr. Money Mustache'],
    recommendedPath: 'Build businesses with recurring revenue and minimal time requirements. Focus on high-margin, low-touch models.',
    nextActions: [
      'Audit your calendar for time vampires',
      'Hire a virtual assistant this week',
      'Set up one new automation system'
    ]
  },
  {
    id: 'global-nomad',
    name: 'The Global Nomad',
    icon: '🗺',
    tagline: 'The world is your office and playground',
    description: 'Location independence isn\'t just nice to have - it\'s non-negotiable. You\'ve optimized your entire life and business around the ability to work from anywhere. Roots are overrated; experiences are everything.',
    strengths: [
      'Adaptable and resourceful',
      'Global perspective and network',
      'Low overhead lifestyle',
      'Cultural intelligence'
    ],
    blindspots: [
      'Difficulty building deep relationships',
      'Challenges with stability',
      'Tax and legal complications',
      'FOMO on community/roots'
    ],
    famousExamples: ['Pieter Levels', 'Johnny FD', 'Kristin Wilson'],
    recommendedPath: 'Build location-agnostic businesses. Master geo-arbitrage. Create systems for managing teams across time zones.',
    nextActions: [
      'Set up international banking and LLC structure',
      'Join a nomad community or co-living space',
      'Automate one more aspect of your business'
    ]
  },
  {
    id: 'empire-builder',
    name: 'The Empire Builder',
    icon: '₿∞',
    tagline: 'Wealth and time freedom through smart systems',
    description: 'You want serious wealth AND the time to enjoy it. You build businesses that run without you, creating both financial abundance and personal freedom. Work hard, then hardly work.',
    strengths: [
      'Strategic thinking',
      'Excellent at systems and delegation',
      'Balance of ambition and lifestyle',
      'Building sellable assets'
    ],
    blindspots: [
      'Can be impatient with slow growth',
      'May miss opportunities requiring presence',
      'Tendency to over-optimize',
      'Analysis paralysis'
    ],
    famousExamples: ['Naval Ravikant', 'Sam Ovens', 'Ryan Moran'],
    recommendedPath: 'Focus on businesses that scale through systems, not your time. Build to sell from day one.',
    nextActions: [
      'Document all business processes this month',
      'Hire your first key operator',
      'Set 3-year exit strategy for current venture'
    ]
  },
  {
    id: 'freedom-designer',
    name: 'The Freedom Designer',
    icon: '∞🗺',
    tagline: 'Ultimate flexibility in how and where you live',
    description: 'Time and location freedom trump pure wealth accumulation. You\'ve designed a life where you control when and where you work. Money is simply a tool for freedom, not the goal itself.',
    strengths: [
      'Lifestyle optimization experts',
      'High happiness levels',
      'Resilient and adaptable',
      'Strong work-life integration'
    ],
    blindspots: [
      'May plateau financially',
      'Can seem unambitious',
      'Risk of complacency',
      'Limited scale potential'
    ],
    famousExamples: ['Pat Flynn', 'Courtney Carver', 'Leo Babauta'],
    recommendedPath: 'Build multiple small income streams that are location-independent and largely passive.',
    nextActions: [
      'Launch one new passive income stream',
      'Reduce fixed costs by 20%',
      'Plan a 1-month working vacation'
    ]
  },
  {
    id: 'remote-mogul',
    name: 'The Remote Mogul',
    icon: '₿🗺',
    tagline: 'Building wealth from anywhere in the world',
    description: 'You\'re building serious wealth without geographic constraints. Your businesses run from Bali as smoothly as from Boston. You\'ve cracked the code on remote team management and global opportunities.',
    strengths: [
      'Global business perspective',
      'Expert at remote operations',
      'Geo-arbitrage mastery',
      'Network effects across borders'
    ],
    blindspots: [
      'Can neglect personal time',
      'Complexity in operations',
      'Time zone juggling',
      'Regulatory challenges'
    ],
    famousExamples: ['Matt Mullenweg', 'Brian Chesky', 'Daniel Vassallo'],
    recommendedPath: 'Build businesses that leverage global talent and markets. Master asynchronous communication.',
    nextActions: [
      'Hire your first international team member',
      'Set up operations in a tax-friendly jurisdiction',
      'Join a high-level remote entrepreneur mastermind'
    ]
  },
  {
    id: 'wealth-creator',
    name: 'The Wealth Creator',
    icon: '₿∞🗺',
    tagline: 'You\'ve achieved the holy trinity of wealth',
    description: 'You refuse to compromise. Through careful planning and execution, you\'ve built systems that generate wealth, preserve time, and allow location flexibility. You\'re living proof that you can have it all.',
    strengths: [
      'Holistic thinking',
      'Excellent prioritization',
      'Systems mastery',
      'Inspiring to others'
    ],
    blindspots: [
      'Can be overwhelming to maintain',
      'High complexity in life/business',
      'Perfectionist tendencies',
      'Difficulty relating to others'
    ],
    famousExamples: ['Richard Branson', 'Jesse Itzler', 'Ramit Sethi'],
    recommendedPath: 'Continue optimizing all three pillars. Focus on teaching others and building your legacy.',
    nextActions: [
      'Document your systems for others',
      'Start mentoring someone earlier in journey',
      'Plan your "enough is enough" number'
    ]
  },
  {
    id: 'legacy-architect',
    name: 'The Legacy Architect',
    icon: '🏛️',
    tagline: 'Building wealth that outlasts generations',
    description: 'You think in centuries, not quarters. Your focus extends beyond personal wealth to creating lasting institutions, foundations, and family dynasties. Impact matters more than income.',
    strengths: [
      'Long-term vision',
      'Institution building',
      'Philanthropic mindset',
      'Multi-generational thinking'
    ],
    blindspots: [
      'May neglect present enjoyment',
      'Over-complexity in structures',
      'Family pressure and expectations',
      'Slow initial progress'
    ],
    famousExamples: ['Andrew Carnegie', 'Bill Gates', 'MacKenzie Scott'],
    recommendedPath: 'Build wealth through compounding assets and focus on education of next generation. Create structures that survive you.',
    nextActions: [
      'Establish family wealth charter',
      'Create educational trust for descendants',
      'Start documenting family values and history'
    ]
  }
];