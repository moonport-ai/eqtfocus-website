import { cn } from "@/lib/utils";

interface BadgeProps {
  status: string;
  className?: string;
}

function getStatusColors(status: string): string {
  switch (status) {
    case "A":
    case "Active":
      return "bg-green-100 text-green-800";
    case "U":
    case "Sold":
      return "bg-red-100 text-red-800";
    case "Pending":
      return "bg-amber-100 text-amber-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export function Badge({ status, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full inline-block",
        getStatusColors(status),
        className,
      )}
    >
      {status}
    </span>
  );
}
