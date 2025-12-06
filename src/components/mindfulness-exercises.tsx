import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Leaf, Waves, Mountain, Heart, Footprints } from 'lucide-react';

const exercises = [
  {
    title: 'Mindful Breathing',
    icon: Leaf,
    content: [
      'Find a comfortable seated position. Close your eyes gently.',
      'Bring your attention to your breath. Notice the sensation of air entering your nostrils and filling your lungs.',
      'Observe the natural rhythm of your breath without trying to change it.',
      'When your mind wanders, gently guide it back to your breath.',
      'Continue for 5-10 minutes.',
    ],
  },
  {
    title: 'Body Scan Meditation',
    icon: Waves,
    content: [
      'Lie down comfortably on your back. Close your eyes.',
      'Bring your attention to your toes. Notice any sensations without judgment.',
      'Slowly move your awareness up through your body: feet, legs, torso, arms, and head.',
      'Acknowledge any tension or discomfort and breathe into those areas.',
      'Finish by feeling your whole body as one sensation.',
    ],
  },
  {
    title: '5-4-3-2-1 Grounding Technique',
    icon: Mountain,
    content: [
      'When you feel overwhelmed, take a slow breath and look around.',
      'Acknowledge 5 things you can see.',
      'Acknowledge 4 things you can feel.',
      'Acknowledge 3 things you can hear.',
      'Acknowledge 2 things you can smell.',
      'Acknowledge 1 thing you can taste.',
    ],
  },
  {
    title: 'Loving-Kindness Meditation',
    icon: Heart,
    content: [
      'Sit comfortably and close your eyes. Take a few deep breaths.',
      "Generate feelings of love and kindness towards yourself. Repeat phrases like 'May I be happy. May I be healthy. May I be safe.'",
      'Extend these feelings to a loved one, then a neutral person, then a difficult person, and finally to all living beings.',
      'Feel the warmth and compassion expanding from your heart.',
    ],
  },
  {
    title: 'Walking Meditation',
    icon: Footprints,
    content: [
      'Find a quiet place to walk back and forth, about 10-20 steps.',
      'Walk at a natural, slow pace. Pay close attention to the sensation of your feet touching and leaving the ground.',
      "Notice the movement in your legs and the shifting of your body's weight.",
      'When your mind wanders, bring your focus back to the sensation of walking.',
      'Coordinate your breath with your steps if it helps you stay focused.',
    ],
  },
];

export default function MindfulnessExercises() {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">
          Guided Mindfulness
        </CardTitle>
        <CardDescription>
          A collection of exercises to help you find calm and presence.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {exercises.map((exercise, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg hover:no-underline">
                <div className="flex items-center gap-3">
                  <exercise.icon className="h-5 w-5 text-primary" />
                  {exercise.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground px-2 text-base">
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  {exercise.content.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}