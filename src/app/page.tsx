"use client";

import { useState } from 'react';
import { Header } from '@/components/header';
import ChatComponent from '@/components/chat';
import MoodLogger from '@/components/mood-logger';
import MindfulnessExercises from '@/components/mindfulness-exercises';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Bot, HeartHandshake, BrainCircuit } from 'lucide-react';

export type Mood = 'Happy' | 'Calm' | 'Neutral' | 'Sad' | 'Anxious' | 'None';

export default function Home() {
  const [moodLog, setMoodLog] = useState<Mood>('None');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Tabs defaultValue="chat" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-6 h-12 rounded-lg">
            <TabsTrigger value="chat" className="h-full text-base gap-2">
              <Bot className="h-5 w-5" />
              Chat
            </TabsTrigger>
            <TabsTrigger value="mood" className="h-full text-base gap-2">
              <HeartHandshake className="h-5 w-5" />
              Mood Log
            </TabsTrigger>
            <TabsTrigger
              value="mindfulness"
              className="h-full text-base gap-2"
            >
              <BrainCircuit className="h-5 w-5" />
              Mindfulness
            </TabsTrigger>
          </TabsList>
          <TabsContent value="chat">
            <ChatComponent moodLog={moodLog} />
          </TabsContent>
          <TabsContent value="mood">
            <MoodLogger selectedMood={moodLog} onMoodSelect={setMoodLog} />
          </TabsContent>
          <TabsContent value="mindfulness">
            <MindfulnessExercises />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}