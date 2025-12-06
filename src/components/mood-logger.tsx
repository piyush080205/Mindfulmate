"use client";

import type { Mood } from '@/app/page';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smile, Wind, Meh, Frown, HeartPulse } from 'lucide-react';
import { useEffect, useState } from 'react';

type MoodOption = {
  mood: Mood;
  label: string;
  icon: React.ElementType;
};

const moodOptions: MoodOption[] = [
  { mood: 'Happy', label: 'Happy', icon: Smile },
  { mood: 'Calm', label: 'Calm', icon: Wind },
  { mood: 'Neutral', label: 'Neutral', icon: Meh },
  { mood: 'Sad', label: 'Sad', icon: Frown },
  { mood: 'Anxious', label: 'Anxious', icon: HeartPulse },
];

interface MoodLoggerProps {
  selectedMood: Mood;
  onMoodSelect: (mood: Mood) => void;
}

export default function MoodLogger({
  selectedMood,
  onMoodSelect,
}: MoodLoggerProps) {
  const [dateString, setDateString] = useState('');

  useEffect(() => {
    setDateString(
      new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
  }, []);

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">
          How are you feeling today?
        </CardTitle>
        <CardDescription>{dateString}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-muted-foreground">
          Select a mood to log how you're feeling. This helps in providing more
          personalized suggestions.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {moodOptions.map(({ mood, label, icon: Icon }) => (
            <Button
              key={mood}
              variant={selectedMood === mood ? 'default' : 'outline'}
              className="h-28 flex-col gap-2 text-base transition-transform transform hover:scale-105"
              onClick={() => onMoodSelect(mood)}
            >
              <Icon className="w-8 h-8 mb-1" />
              <span>{label}</span>
            </Button>
          ))}
        </div>
        {selectedMood !== 'None' && (
          <div className="mt-8 p-4 bg-accent/20 border border-accent rounded-lg text-center transition-opacity duration-500 animate-in fade-in">
            <p className="text-foreground/80">
              Today's mood logged as:{' '}
              <span className="font-bold text-foreground">{selectedMood}</span>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}