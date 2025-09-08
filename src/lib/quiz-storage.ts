export interface StoredResults {
  personality?: {
    type: string;
    timestamp: string;
  };
  priorities?: {
    profile: string;
    scores: {
      capital: number;
      time: number;
      location: number;
    };
    timestamp: string;
  };
}

export const QuizStorage = {
  STORAGE_KEY: 'wealthArchetypes',

  getResults(): StoredResults {
    if (typeof window === 'undefined') return {};
    
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  },

  savePersonalityResult(type: string) {
    const results = this.getResults();
    results.personality = {
      type,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(results));
  },

  savePriorityResult(profile: string, scores: { capital: number; time: number; location: number }) {
    const results = this.getResults();
    results.priorities = {
      profile,
      scores,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(results));
  },

  hasCompleteProfile(): boolean {
    const results = this.getResults();
    return !!(results.personality && results.priorities);
  },

  clearResults() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
};