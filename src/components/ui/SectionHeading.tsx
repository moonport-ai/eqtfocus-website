import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <h2 className="font-heading text-3xl md:text-4xl text-brand-dark-gray">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "font-body text-brand-medium-gray mt-4 max-w-2xl",
            centered && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-0.5 w-[60px] bg-brand-black",
          centered && "mx-auto",
        )}
      />
    </div>
  );
}
