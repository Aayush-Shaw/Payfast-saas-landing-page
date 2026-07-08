import Button from "@/components/ui/Button";

export default function HeroCTAs() {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
      <Button href="/contact" size="md">
        Get Started
      </Button>
      <Button href="/contact" variant="secondary" size="md">
        Get a Demo
      </Button>
    </div>
  );
}
