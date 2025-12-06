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
  prompt: `You are a supportive AI chatbot designed to provide personalized coping suggestions for users based on their mood logs and recent conversations.

  Mood Log: {{{moodLog}}}
  Conversation History: {{{conversationHistory}}}

  Based on the provided mood log and conversation history, suggest coping mechanisms that the user can use to better manage their mental well-being. Be supportive and encouraging. List only the coping suggestions, and don't start or end with pleasantries.`,
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
