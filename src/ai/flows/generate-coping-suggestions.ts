'use server';

/**
 * @fileOverview Generates personalized coping suggestions based on mood logs and conversations.
 *
 * - generateCopingSuggestions - A function that generates coping suggestions.
 * - GenerateCopingSuggestionsInput - The input type for the generateCopingSuggestions function.
 * - GenerateCopingSuggestionsOutput - The return type for the generateCopingSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCopingSuggestionsInputSchema = z.object({
  moodLog: z
    .string()
    .describe('A summary of the user\'s mood log entry for the day.'),
  conversationHistory: z
    .string()
    .describe('The recent conversation history with the user.'),
});
export type GenerateCopingSuggestionsInput = z.infer<
  typeof GenerateCopingSuggestionsInputSchema
>;

const GenerateCopingSuggestionsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'A list of personalized coping suggestions based on the mood log and conversation history.'
    ),
});
export type GenerateCopingSuggestionsOutput = z.infer<
  typeof GenerateCopingSuggestionsOutputSchema
>;

export async function generateCopingSuggestions(
  input: GenerateCopingSuggestionsInput
): Promise<GenerateCopingSuggestionsOutput> {
  return generateCopingSuggestionsFlow(input);
}

const generateCopingSuggestionsPrompt = ai.definePrompt({
  name: 'generateCopingSuggestionsPrompt',
  input: {schema: GenerateCopingSuggestionsInputSchema},
  output: {schema: GenerateCopingSuggestionsOutputSchema},
  prompt: `You are a supportive AI chatbot for users in India, designed to provide personalized coping suggestions for users based on their mood logs and recent conversations. Your primary purpose is to support emotional wellbeing with an understanding of Indian cultural context.

First, analyze the user's latest message in the conversation history to determine if it is related to mental health, feelings, or emotional wellbeing.

If the user's message is related to mental health or emotional wellbeing, then based on the provided mood log and conversation history, suggest coping mechanisms that the user can use to better manage their mental well-being. Be supportive and encouraging. If appropriate, mention culturally relevant practices like mindfulness, yoga, or connecting with family. List only the coping suggestions, and don't start or end with pleasantries.

If the user's message mentions thoughts of self-harm or suicide, your response MUST prioritize safety and provide immediate help resources. Your response should be: "It sounds like you are going through a difficult time. Please know that your safety is the most important thing. You can connect with people who can support you by calling one of these 24/7 helplines in India:
- Vandrevala Foundation: 9999666555
- iCall: 022-25521111 (Monday to Saturday, 10 AM - 8 PM)
- Aasra: +91-9820466726
Please reach out to them. They are there to help."

If the user's message is NOT related to mental health or emotional wellbeing, your response should ONLY be: "Thanks for your question! I’m here mainly to support emotional wellbeing, so I might not be the best fit for that topic.\nIf you’d like to talk about how you’re feeling or anything on your mind, I’m here for you."

Mood Log: {{{moodLog}}}
Conversation History: {{{conversationHistory}}}
`,
});

const generateCopingSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateCopingSuggestionsFlow',
    inputSchema: GenerateCopingSuggestionsInputSchema,
    outputSchema: GenerateCopingSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await generateCopingSuggestionsPrompt(input);
    return output!;
  }
);
