
'use server';

import { generateCopingSuggestions } from '@/ai/flows/generate-coping-suggestions';
import { toast } from '@/hooks/use-toast';

export async function getAiSuggestion(moodLog: string, conversationHistory: string) {
  try {
    const result = await generateCopingSuggestions({
      moodLog,
      conversationHistory,
    });
    return result.suggestions;
  } catch (error) {
    console.error("AI suggestion generation failed:", error);
    return "I'm sorry, I'm having trouble coming up with a suggestion right now. Please try again later.";
  }
}
