interface SectionHeadingProps {
  primaryText?: string;
  secondaryText?: string;
  primaryColor?: string;
  secondaryColor?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

// Fixed: Swapped static fonts for fluid, responsive utility scales
const sizes = {
  sm: "text-xl sm:text-2xl",
  md: "text-2xl sm:text-3xl",
  lg: "text-3xl sm:text-4xl",
  xl: "text-3xl sm:text-4xl md:text-5xl",
};

export default function SectionHeading({
  primaryText = "Focusing on quality,",
  secondaryText = "we maintain customer trust",
  primaryColor = "text-gray-900",
  secondaryColor = "text-gray-400",
  size = "lg",
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`font-semibold leading-[1.15] tracking-tight ${sizes[size]} ${className}`}
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* Added block configuration controls on tiny mobile configurations if needed */}
      <span className={`${primaryColor} inline-block`}>{primaryText} </span>{" "}
      <span className={`${secondaryColor} inline-block`}>{secondaryText}</span>
    </h2>
  );
}