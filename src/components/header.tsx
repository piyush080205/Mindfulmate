import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="p-4 flex items-center gap-4 container mx-auto">
      <Logo />
      <h1 className="text-3xl font-bold text-foreground font-headline">
        MindfulMate
      </h1>
    </header>
  );
}