export function Logo() {
  return (
    <div
      className="flex items-center justify-center h-12 w-12 rounded-full bg-primary"
      aria-label="MindfulMate Logo"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7 text-primary-foreground"
      >
        <path d="M12 22c-2 0-4-1-4-4 0-2 2-3 4-3s4 1 4 3c0 3-2 4-4 4z" />
        <path d="M12 15V3" />
        <path d="M16 8c-4 0-4 4-4 4" />
        <path d="M8 8c4 0 4 4 4 4" />
      </svg>
    </div>
  );
}