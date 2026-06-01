import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: ReactNode;
  variant?: "dark" | "light" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variants = {
  dark:    "bg-[#0f1117] text-white hover:bg-[#1e2130] border border-[#0f1117]",
  light:   "bg-white text-[#0f1117] hover:bg-gray-100 border border-gray-200",
  outline: "bg-transparent text-[#0f1117] hover:bg-gray-100 border border-[#0f1117]",
};

const sizes = {
  sm: "text-sm px-4 py-2 h-9",
  md: "text-base px-6 py-3 h-11",
  lg: "text-lg px-8 py-4 h-14",
};

// Map spinner dimensions directly to your design system tiers
const spinnerSizes = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export default function Button({
  label,
  children,
  variant = "dark",
  size = "md",
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      style={{ fontFamily: "Manrope, sans-serif" }}
      className={twMerge(`
        inline-flex items-center justify-center gap-2
        font-medium rounded-full select-none
        transition-all duration-200 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
      `, className)}
      {...props}
    >
      {isLoading ? (
        <svg 
          className={twMerge("animate-spin shrink-0", spinnerSizes[size])} 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
      ) : (
        // Added wrapper to prevent standard SVGs from crushing on wrap-breaks
        leftIcon && <span className="flex items-center justify-center shrink-0">{leftIcon}</span>
      )}

      {/* Text wrapper keeps layouts centered perfectly when side objects swap */}
      <span className="truncate max-w-full">{label || children}</span>

      {!isLoading && rightIcon && (
        <span className="flex items-center justify-center shrink-0">{rightIcon}</span>
      )}
    </button>
  );
}