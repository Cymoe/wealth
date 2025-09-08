export interface PriorityAnswer {
  text: string;
  scores: {
    capital: number;
    time: number;
    location: number;
  };
}

export interface PriorityQuestion {
  id: string;
  question: string;
  scenario?: string;
  answers: PriorityAnswer[];
}

export const PRIORITY_QUESTIONS: PriorityQuestion[] = [
  {
    id: 'q1',
    question: 'You receive a $5M cash offer for your business. What do you do?',
    answers: [
      {
        text: 'Take it and immediately start building the next one',
        scores: { capital: 3, time: 1, location: 1 }
      },
      {
        text: 'Negotiate for ongoing royalties so you never have to work again',
        scores: { capital: 2, time: 3, location: 0 }
      },
      {
        text: 'Keep the business but hire a CEO so you can travel',
        scores: { capital: 1, time: 2, location: 3 }
      },
      {
        text: 'Sell half and keep half for passive income',
        scores: { capital: 2, time: 2, location: 1 }
      }
    ]
  },
  {
    id: 'q2',
    question: 'Your ideal Tuesday at 2pm looks like:',
    answers: [
      {
        text: 'Closing another acquisition deal from your office',
        scores: { capital: 3, time: 0, location: 0 }
      },
      {
        text: 'Whatever you want - your calendar is completely open',
        scores: { capital: 0, time: 3, location: 1 }
      },
      {
        text: 'Team call from a beachside cafe in Bali',
        scores: { capital: 1, time: 1, location: 3 }
      },
      {
        text: 'Reviewing portfolios while your kids play nearby',
        scores: { capital: 2, time: 2, location: 0 }
      }
    ]
  },
  {
    id: 'q3',
    question: 'A massive opportunity requires moving to NYC for 2 years. You:',
    answers: [
      {
        text: 'Take it immediately - this could 10x your net worth',
        scores: { capital: 3, time: 1, location: 0 }
      },
      {
        text: 'Pass - no amount of money is worth losing flexibility',
        scores: { capital: 0, time: 3, location: 1 }
      },
      {
        text: 'Counter with a remote arrangement or no deal',
        scores: { capital: 1, time: 1, location: 3 }
      },
      {
        text: 'Negotiate for 6 months on-site, then remote',
        scores: { capital: 2, time: 1, location: 2 }
      }
    ]
  },
  {
    id: 'q4',
    question: "You know you've 'made it' when:",
    answers: [
      {
        text: 'Your investments generate more than you can spend',
        scores: { capital: 3, time: 1, location: 0 }
      },
      {
        text: 'You never check your calendar or answer to anyone',
        scores: { capital: 0, time: 3, location: 1 }
      },
      {
        text: 'You can run your empire from anywhere on earth',
        scores: { capital: 1, time: 0, location: 3 }
      },
      {
        text: 'All three - wealth, time, and location freedom',
        scores: { capital: 2, time: 2, location: 2 }
      }
    ]
  },
  {
    id: 'q5',
    question: 'In 10 years, you want to be known as:',
    answers: [
      {
        text: 'The person who built a billion-dollar empire',
        scores: { capital: 3, time: 0, location: 1 }
      },
      {
        text: 'Someone who designed their perfect lifestyle',
        scores: { capital: 0, time: 3, location: 1 }
      },
      {
        text: 'A global citizen with businesses worldwide',
        scores: { capital: 1, time: 0, location: 3 }
      },
      {
        text: 'Living proof that you can have it all',
        scores: { capital: 2, time: 2, location: 2 }
      }
    ]
  },
  {
    id: 'q6',
    question: 'Your business philosophy is:',
    answers: [
      {
        text: 'Build to sell, rinse and repeat',
        scores: { capital: 3, time: 1, location: 0 }
      },
      {
        text: 'Build systems so the business runs without you',
        scores: { capital: 1, time: 3, location: 0 }
      },
      {
        text: 'Build remote-first from day one',
        scores: { capital: 0, time: 1, location: 3 }
      },
      {
        text: 'Build assets that compound forever',
        scores: { capital: 2, time: 2, location: 1 }
      }
    ]
  },
  {
    id: 'q7',
    question: 'The legacy you want to leave:',
    answers: [
      {
        text: 'A financial empire for generations',
        scores: { capital: 3, time: 0, location: 0 }
      },
      {
        text: 'Proof that life is meant to be lived, not worked',
        scores: { capital: 0, time: 3, location: 1 }
      },
      {
        text: 'Inspiring others to break free from location constraints',
        scores: { capital: 0, time: 1, location: 3 }
      },
      {
        text: 'Showing that true wealth includes all forms of freedom',
        scores: { capital: 2, time: 2, location: 2 }
      }
    ]
  }
];

export interface PriorityResults {
  profile: string;
  scores: { capital: number; time: number; location: number };
  percentages: { capital: number; time: number; location: number };
}

export function calculatePriorities(answers: Record<string, number>): PriorityResults {
  // Calculate total scores
  const scores = { capital: 0, time: 0, location: 0 };
  
  // Properly iterate through answers
  Object.entries(answers).forEach(([questionId, answerIndex]) => {
    const question = PRIORITY_QUESTIONS.find(q => q.id === questionId);
    if (question && question.answers[answerIndex]) {
      const answer = question.answers[answerIndex];
      scores.capital += answer.scores.capital;
      scores.time += answer.scores.time;
      scores.location += answer.scores.location;
    }
  });

  // Calculate percentages
  const total = scores.capital + scores.time + scores.location;
  const percentages = {
    capital: Math.round((scores.capital / total) * 100),
    time: Math.round((scores.time / total) * 100),
    location: Math.round((scores.location / total) * 100)
  };

  // Determine profile based on scores
  let profileId = 'wealth-creator'; // default
  
  // Check for balanced profile (all within 15% of each other)
  const values = Object.values(percentages);
  const max = Math.max(...values);
  const min = Math.min(...values);
  
  if (max - min <= 15) {
    profileId = 'wealth-creator';
  } else {
    // Find the highest scoring pillar(s)
    const maxScore = Math.max(percentages.capital, percentages.time, percentages.location);
    
    // Check if it's a pure type (one pillar clearly dominates - at least 50%)
    if (maxScore >= 50) {
      if (percentages.capital === maxScore) {
        profileId = 'capital-titan';
      } else if (percentages.time === maxScore) {
        profileId = 'time-architect';
      } else if (percentages.location === maxScore) {
        profileId = 'global-nomad';
      }
    } else {
      // It's a hybrid type - find the two highest pillars
      const sorted = Object.entries(percentages)
        .sort((a, b) => b[1] - a[1]);
      
      const top1 = sorted[0][0];
      const top2 = sorted[1][0];
      
      if ((top1 === 'capital' && top2 === 'time') || (top1 === 'time' && top2 === 'capital')) {
        profileId = 'empire-builder';
      } else if ((top1 === 'time' && top2 === 'location') || (top1 === 'location' && top2 === 'time')) {
        profileId = 'freedom-designer';
      } else if ((top1 === 'capital' && top2 === 'location') || (top1 === 'location' && top2 === 'capital')) {
        profileId = 'remote-mogul';
      }
    }
  }
  
  return { profile: profileId, scores, percentages };
}