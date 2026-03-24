import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...rest }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block font-body text-sm text-brand-dark-gray mb-1.5"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded border border-brand-light-gray bg-white px-4 py-3 font-body text-sm text-brand-dark-gray placeholder:text-brand-medium-gray transition-colors duration-200 focus:border-brand-black focus:ring-1 focus:ring-brand-black focus:outline-none",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className,
          )}
          {...rest}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-600 font-body">{error}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
