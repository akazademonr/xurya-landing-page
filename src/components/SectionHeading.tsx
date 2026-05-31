interface SectionHeadingProps {
  primaryText?: string;
  secondaryText?: string;
  primaryColor?: string;
  secondaryColor?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizes = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-4xl",
  xl: "text-5xl",
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
      className={`font-semibold leading-tight ${sizes[size]} ${className}`}
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <span className={primaryColor}>{primaryText} </span>
      <span className={secondaryColor}>{secondaryText}</span>
    </h2>
  );
}