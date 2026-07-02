import PageWrapper from "@/components/layout/PageWrapper";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageWrapper>
      <section className="flex min-h-[60vh] items-center justify-center pt-32">
        <div className="text-center px-6">
          <p className="text-8xl font-bold text-lime mb-4">404</p>
          <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-white/45 max-w-md mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <Button href="/">Back to Home</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
