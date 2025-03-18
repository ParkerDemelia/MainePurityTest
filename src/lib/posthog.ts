import posthog from 'posthog-js'

type EventProperties = {
  question_id?: number;
  question_text?: string;
  category?: string;
  score?: number;
  questions_answered?: number;
  total_questions?: number;
  selected_questions?: Array<{
    id: number;
    text?: string;
    category?: string;
  }>;
};

// Initialize PostHog with your project API key
// You'll need to replace this with your actual PostHog project API key
export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug();
      }
    });
  }
}

export const captureEvent = (eventName: string, properties?: EventProperties) => {
  if (typeof window !== 'undefined') {
    posthog.capture(eventName, properties);
  }
} 