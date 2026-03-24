import { Container, Button } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Container className="text-center py-20">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-black mb-4">
          Page Not Found
        </p>
        <h1 className="font-heading text-6xl md:text-8xl text-brand-black mb-6">
          404
        </h1>
        <p className="font-body text-brand-medium-gray max-w-md mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find your way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" size="lg">
            Return Home
          </Button>
          <Button href="/properties" variant="outline" size="lg">
            Browse Properties
          </Button>
        </div>
      </Container>
    </div>
  );
}
