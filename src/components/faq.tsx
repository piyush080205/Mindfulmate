"use client";

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
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: '1️⃣ What is mental health and why is it important?',
    answer:
      'Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It\'s important at every stage of life because it helps determine how we handle stress, relate to others, and make healthy choices. Good mental health is essential for a balanced and fulfilling life.',
  },
  {
    question: '2️⃣ How do I know if I’m experiencing stress, anxiety, or burnout?',
    answer:
      'Stress is often a response to external pressures and can cause irritability and fatigue. Anxiety involves persistent, excessive worries that don\'t go away, even without a stressor. Burnout is a state of emotional, physical, and mental exhaustion caused by prolonged stress, often related to work. If these feelings are persistent and interfere with your daily life, it may be helpful to talk to someone.',
  },
  {
    question: '3️⃣ What are some simple ways to improve my mental wellbeing daily?',
    answer:
      'Small daily habits can make a big difference. Try practicing mindfulness or meditation for a few minutes, getting regular physical activity, maintaining a balanced diet, ensuring you get enough sleep, connecting with loved ones, and spending time on hobbies you enjoy.',
  },
  {
    question: '4️⃣ When should I consider talking to a mental-health professional?',
    answer:
      'If you\'re struggling to cope with your feelings, your daily life is significantly impacted, or you feel overwhelmed, talking to a professional can be very beneficial. They can provide support, coping strategies, and a safe space to explore your thoughts and feelings.',
  },
  {
    question: '5️⃣ Is it normal to feel anxious or sad sometimes?',
    answer:
      'Absolutely. It\'s a normal part of the human experience to feel anxious or sad in response to life\'s challenges. These feelings become a concern when they are persistent, severe, or prevent you from engaging in your daily life.',
  },
  {
    question: '6️⃣ How can I manage overthinking or racing thoughts?',
    answer:
      'Mindfulness techniques can be very effective. Try grounding yourself by focusing on your senses (what you see, hear, feel). Deep breathing exercises can also calm your nervous system. Writing down your thoughts in a journal can help you process and release them.',
  },
  {
    question: '7️⃣ What should I do if I feel overwhelmed or emotionally drained?',
    answer:
      'It\'s important to give yourself a break. Step away from the situation if you can. Practice self-compassion and allow yourself to rest. Engaging in a calming activity like listening to music, taking a warm bath, or spending time in nature can help you recharge.',
  },
  {
    question: '8️⃣ How do I support a friend or family member who is struggling emotionally?',
    answer:
      'Listen without judgment and let them know you care. Encourage them to share what they\'re feeling, but don\'t push. Offer practical help, like assisting with daily tasks. Gently suggest they speak to a professional if you\'re concerned, and offer to help them find resources.',
  },
  {
    question: '9️⃣ How can I build healthy emotional habits?',
    answer:
      'Building healthy habits takes time. Start by identifying your emotional triggers. Practice self-awareness to recognize your feelings without judgment. Develop a routine that includes self-care activities. Celebrate small victories and be patient with yourself.',
  },
  {
    question: '🔟 What should I do if I’m having thoughts of self-harm or suicide?',
    answer:
      'If you are having thoughts of self-harm or suicide, please reach out for immediate help. Your safety is the top priority. You can connect with people who can support you by calling one of these 24/7 helplines in India:\n- Vandrevala Foundation: 9999666555\n- iCall: 022-25521111 (Mon-Sat, 10 AM-8 PM)\n- Aasra: +91-9820466726',
  },
];

export default function Faq() {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">
          Frequently Asked Questions
        </CardTitle>
        <CardDescription>
          Find answers to common questions about mental health and well-being.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg hover:no-underline text-left">
                <div className="flex items-center gap-3">
                  <span className="text-primary">{faq.question.split(' ')[0]}</span>
                  <span className="flex-1">{faq.question.substring(faq.question.indexOf(' ') + 1)}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground px-2 text-base">
                <p className="mt-2 whitespace-pre-line">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
