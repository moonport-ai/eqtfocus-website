'use client';

import { Container, Button } from '@/components/ui';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Container className="text-center py-20">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-black mb-4">
          Something Went Wrong
        </p>
        <h1 className="font-heading text-5xl md:text-6xl text-brand-black mb-6">
          Error
        </h1>
        <p className="font-body text-brand-medium-gray max-w-md mx-auto mb-10">
          We encountered an unexpected issue. Please try again or return to the
          homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} size="lg">
            Try Again
          </Button>
          <Button href="/" variant="outline" size="lg">
            Return Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
