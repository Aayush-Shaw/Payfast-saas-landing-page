import Button from "@/components/ui/Button";

export default function HeroCTAs() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      <Button href="/contact" size="lg">
        Get Started
      </Button>
      <Button href="/contact" variant="secondary" size="lg">
        Get a Demo
      </Button>
    </div>
  );
}
