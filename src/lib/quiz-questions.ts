export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    text: string;
    weights: {
      E?: number;
      I?: number;
      S?: number;
      N?: number;
      T?: number;
      F?: number;
      J?: number;
      P?: number;
    };
  }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: "When making a major financial decision, you prefer to:",
    options: [
      {
        text: "Gather input from trusted advisors and discuss options with others",
        weights: { E: 2 }
      },
      {
        text: "Research thoroughly and make the decision independently",
        weights: { I: 2 }
      }
    ]
  },
  {
    id: 2,
    text: "Your ideal wealth-building strategy focuses on:",
    options: [
      {
        text: "Proven methods with predictable returns and clear data",
        weights: { S: 2 }
      },
      {
        text: "Innovative opportunities with potential for exponential growth",
        weights: { N: 2 }
      }
    ]
  },
  {
    id: 3,
    text: "When evaluating an investment opportunity, you prioritize:",
    options: [
      {
        text: "Objective analysis of numbers, metrics, and market data",
        weights: { T: 2 }
      },
      {
        text: "How it aligns with your values and its impact on people",
        weights: { F: 2 }
      }
    ]
  },
  {
    id: 4,
    text: "Your approach to financial planning is:",
    options: [
      {
        text: "Structured with clear goals, budgets, and timelines",
        weights: { J: 2 }
      },
      {
        text: "Flexible and adaptable to new opportunities as they arise",
        weights: { P: 2 }
      }
    ]
  },
  {
    id: 5,
    text: "You build wealth best when you:",
    options: [
      {
        text: "Network actively and leverage relationships",
        weights: { E: 2 }
      },
      {
        text: "Focus deeply on developing expertise in your field",
        weights: { I: 2 }
      }
    ]
  },
  {
    id: 6,
    text: "Your investment decisions are based more on:",
    options: [
      {
        text: "Historical performance and tangible assets",
        weights: { S: 2 }
      },
      {
        text: "Future potential and emerging trends",
        weights: { N: 2 }
      }
    ]
  },
  {
    id: 7,
    text: "When negotiating a business deal, you:",
    options: [
      {
        text: "Focus on maximizing profit and efficiency",
        weights: { T: 2 }
      },
      {
        text: "Consider the relationship and mutual benefit",
        weights: { F: 2 }
      }
    ]
  },
  {
    id: 8,
    text: "Your financial life is:",
    options: [
      {
        text: "Highly organized with detailed tracking systems",
        weights: { J: 2 }
      },
      {
        text: "More fluid, adjusting as circumstances change",
        weights: { P: 2 }
      }
    ]
  },
  {
    id: 9,
    text: "You feel most energized about money when:",
    options: [
      {
        text: "Collaborating on ventures with others",
        weights: { E: 1 }
      },
      {
        text: "Working on your own projects independently",
        weights: { I: 1 }
      },
      {
        text: "Seeing concrete results from established methods",
        weights: { S: 1 }
      },
      {
        text: "Exploring new financial innovations",
        weights: { N: 1 }
      }
    ]
  },
  {
    id: 10,
    text: "Your biggest financial strength is:",
    options: [
      {
        text: "Building and leveraging professional networks",
        weights: { E: 1 }
      },
      {
        text: "Deep analysis and strategic thinking",
        weights: { I: 1 }
      },
      {
        text: "Practical implementation and risk management",
        weights: { S: 1 }
      },
      {
        text: "Spotting opportunities others miss",
        weights: { N: 1 }
      }
    ]
  },
  {
    id: 11,
    text: "When facing a financial setback, you:",
    options: [
      {
        text: "Analyze what went wrong and create a better system",
        weights: { T: 1, J: 1 }
      },
      {
        text: "Trust it's leading to something better",
        weights: { F: 1, P: 1 }
      },
      {
        text: "Seek advice from your network",
        weights: { E: 1, F: 1 }
      },
      {
        text: "Retreat to reassess your strategy alone",
        weights: { I: 1, T: 1 }
      }
    ]
  },
  {
    id: 12,
    text: "Your ideal business model would be:",
    options: [
      {
        text: "A scalable system with clear processes",
        weights: { T: 1, J: 1 }
      },
      {
        text: "A flexible venture that can pivot quickly",
        weights: { N: 1, P: 1 }
      },
      {
        text: "A service that helps people achieve their goals",
        weights: { F: 1, E: 1 }
      },
      {
        text: "A specialized niche where you're the expert",
        weights: { I: 1, S: 1 }
      }
    ]
  },
  {
    id: 13,
    text: "You measure wealth primarily by:",
    options: [
      {
        text: "Net worth and financial metrics",
        weights: { T: 2 }
      },
      {
        text: "Freedom and life satisfaction",
        weights: { F: 2 }
      },
      {
        text: "Tangible assets and security",
        weights: { S: 2 }
      },
      {
        text: "Potential and future opportunities",
        weights: { N: 2 }
      }
    ]
  },
  {
    id: 14,
    text: "Your spending style is:",
    options: [
      {
        text: "Planned and budgeted",
        weights: { J: 2 }
      },
      {
        text: "Spontaneous based on opportunities",
        weights: { P: 2 }
      },
      {
        text: "Focused on experiences and relationships",
        weights: { E: 1, F: 1 }
      },
      {
        text: "Minimal, preferring to save and invest",
        weights: { I: 1, T: 1 }
      }
    ]
  },
  {
    id: 15,
    text: "The path to wealth that appeals to you most is:",
    options: [
      {
        text: "Building a large organization or network",
        weights: { E: 2, J: 1 }
      },
      {
        text: "Developing intellectual property or expertise",
        weights: { I: 2, N: 1 }
      },
      {
        text: "Creating multiple income streams",
        weights: { P: 2, N: 1 }
      },
      {
        text: "Steady accumulation through disciplined saving",
        weights: { J: 2, S: 1 }
      }
    ]
  }
];

export function calculateWealthArchetype(answers: Record<number, number>): string {
  const scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  Object.entries(answers).forEach(([questionId, optionIndex]) => {
    const question = QUIZ_QUESTIONS.find(q => q.id === parseInt(questionId));
    if (question) {
      const selectedOption = question.options[optionIndex];
      if (selectedOption?.weights) {
        Object.entries(selectedOption.weights).forEach(([trait, weight]) => {
          scores[trait as keyof typeof scores] += weight;
        });
      }
    }
  });

  const type = 
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P');

  return type;
}