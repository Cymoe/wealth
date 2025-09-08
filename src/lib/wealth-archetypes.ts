export interface WealthArchetype {
  code: string;
  name: string;
  role: WealthRole;
  description: string;
  strengths: string[];
  challenges: string[];
  color: string;
}

export interface WealthRole {
  name: string;
  color: string;
  description: string;
}

export const WEALTH_ROLES: Record<string, WealthRole> = {
  builders: {
    name: "Builders",
    color: "#9B5DE5",
    description: "Focus on creating sustainable wealth through systematic approaches"
  },
  innovators: {
    name: "Innovators",
    color: "#00BBF9",
    description: "Generate wealth through creative solutions and new opportunities"
  },
  connectors: {
    name: "Connectors",
    color: "#FEE77A",
    description: "Build wealth through relationships and collaborative ventures"
  },
  guardians: {
    name: "Guardians",
    color: "#00F5A0",
    description: "Preserve and grow wealth through careful management and protection"
  }
};

export const WEALTH_ARCHETYPES: Record<string, WealthArchetype> = {
  "ENTJ": {
    code: "ENTJ",
    name: "The Empire Builder",
    role: WEALTH_ROLES.builders,
    description: "Strategic leaders who build wealth through systematic expansion and organizational excellence",
    strengths: ["Strategic planning", "Leadership", "Efficiency", "Long-term vision"],
    challenges: ["Impatience", "Risk of burnout", "Delegation difficulties"],
    color: WEALTH_ROLES.builders.color
  },
  "ESTJ": {
    code: "ESTJ",
    name: "The Executive",
    role: WEALTH_ROLES.builders,
    description: "Practical wealth builders who excel at creating structured, profitable systems",
    strengths: ["Organization", "Reliability", "Practical decision-making", "Resource management"],
    challenges: ["Inflexibility", "Risk aversion", "Work-life balance"],
    color: WEALTH_ROLES.builders.color
  },
  "INTJ": {
    code: "INTJ",
    name: "The Strategist",
    role: WEALTH_ROLES.builders,
    description: "Visionary planners who build wealth through calculated moves and deep analysis",
    strengths: ["Strategic thinking", "Independence", "Innovation", "Pattern recognition"],
    challenges: ["Perfectionism", "Social networking", "Overanalysis"],
    color: WEALTH_ROLES.builders.color
  },
  "ISTJ": {
    code: "ISTJ",
    name: "The Accumulator",
    role: WEALTH_ROLES.builders,
    description: "Methodical wealth builders who focus on steady accumulation and conservative growth",
    strengths: ["Discipline", "Attention to detail", "Consistency", "Risk management"],
    challenges: ["Missed opportunities", "Slow adaptation", "Conservative bias"],
    color: WEALTH_ROLES.builders.color
  },
  "ENTP": {
    code: "ENTP",
    name: "The Entrepreneur",
    role: WEALTH_ROLES.innovators,
    description: "Dynamic innovators who create wealth through disruptive ideas and ventures",
    strengths: ["Innovation", "Adaptability", "Problem-solving", "Opportunity recognition"],
    challenges: ["Follow-through", "Risk management", "Detail orientation"],
    color: WEALTH_ROLES.innovators.color
  },
  "ESTP": {
    code: "ESTP",
    name: "The Dealmaker",
    role: WEALTH_ROLES.innovators,
    description: "Action-oriented wealth creators who thrive on deals and immediate opportunities",
    strengths: ["Quick decision-making", "Negotiation", "Crisis management", "Practical innovation"],
    challenges: ["Long-term planning", "Patience", "Emotional decisions"],
    color: WEALTH_ROLES.innovators.color
  },
  "INTP": {
    code: "INTP",
    name: "The Inventor",
    role: WEALTH_ROLES.innovators,
    description: "Analytical innovators who build wealth through unique solutions and intellectual property",
    strengths: ["Complex problem-solving", "Original thinking", "Technical expertise", "Independence"],
    challenges: ["Marketing", "Practical implementation", "Social aspects"],
    color: WEALTH_ROLES.innovators.color
  },
  "ISTP": {
    code: "ISTP",
    name: "The Craftsman",
    role: WEALTH_ROLES.innovators,
    description: "Practical innovators who create wealth through technical mastery and efficient solutions",
    strengths: ["Technical skills", "Efficiency", "Independence", "Practical innovation"],
    challenges: ["Long-term vision", "Networking", "Self-promotion"],
    color: WEALTH_ROLES.innovators.color
  },
  "ENFJ": {
    code: "ENFJ",
    name: "The Mentor",
    role: WEALTH_ROLES.connectors,
    description: "Inspirational leaders who build wealth by developing others and creating value networks",
    strengths: ["Leadership", "Communication", "Team building", "Vision sharing"],
    challenges: ["Personal boundaries", "Saying no", "Self-care"],
    color: WEALTH_ROLES.connectors.color
  },
  "ESFJ": {
    code: "ESFJ",
    name: "The Provider",
    role: WEALTH_ROLES.connectors,
    description: "Service-oriented wealth builders who create value through meeting others' needs",
    strengths: ["Customer service", "Reliability", "Team harmony", "Practical support"],
    challenges: ["Self-advocacy", "Innovation", "Conflict management"],
    color: WEALTH_ROLES.connectors.color
  },
  "ENFP": {
    code: "ENFP",
    name: "The Inspirer",
    role: WEALTH_ROLES.connectors,
    description: "Creative connectors who generate wealth through passion projects and inspiring movements",
    strengths: ["Creativity", "Enthusiasm", "Networking", "Adaptability"],
    challenges: ["Focus", "Financial discipline", "Follow-through"],
    color: WEALTH_ROLES.connectors.color
  },
  "ESFP": {
    code: "ESFP",
    name: "The Performer",
    role: WEALTH_ROLES.connectors,
    description: "Dynamic personalities who create wealth through entertainment and experiential value",
    strengths: ["Charisma", "Adaptability", "Present-moment awareness", "People skills"],
    challenges: ["Long-term planning", "Saving", "Delayed gratification"],
    color: WEALTH_ROLES.connectors.color
  },
  "INFJ": {
    code: "INFJ",
    name: "The Counselor",
    role: WEALTH_ROLES.guardians,
    description: "Intuitive guardians who build wealth through meaningful work and careful stewardship",
    strengths: ["Intuition", "Long-term thinking", "Values alignment", "Deep understanding"],
    challenges: ["Self-promotion", "Practical details", "Perfectionism"],
    color: WEALTH_ROLES.guardians.color
  },
  "ISFJ": {
    code: "ISFJ",
    name: "The Protector",
    role: WEALTH_ROLES.guardians,
    description: "Dedicated guardians who create wealth through service and protective strategies",
    strengths: ["Reliability", "Risk management", "Service orientation", "Attention to detail"],
    challenges: ["Self-advocacy", "Innovation", "Saying no"],
    color: WEALTH_ROLES.guardians.color
  },
  "INFP": {
    code: "INFP",
    name: "The Idealist",
    role: WEALTH_ROLES.guardians,
    description: "Values-driven wealth builders who focus on meaningful and sustainable prosperity",
    strengths: ["Authenticity", "Creativity", "Values alignment", "Long-term vision"],
    challenges: ["Practical execution", "Self-promotion", "Competitive environments"],
    color: WEALTH_ROLES.guardians.color
  },
  "ISFP": {
    code: "ISFP",
    name: "The Artisan",
    role: WEALTH_ROLES.guardians,
    description: "Creative guardians who build wealth through craftsmanship and authentic expression",
    strengths: ["Creativity", "Authenticity", "Practical skills", "Aesthetic sense"],
    challenges: ["Business aspects", "Self-marketing", "Scaling"],
    color: WEALTH_ROLES.guardians.color
  }
};