import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <h1 className="font-serif text-6xl font-bold mb-4">404</h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-md text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
