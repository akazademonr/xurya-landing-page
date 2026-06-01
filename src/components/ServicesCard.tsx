interface ServiceCardProps {
  number?: string;
  title?: string;
  linkText?: string;
  onClick?: () => void;
  className?: string;
}

export default function ServiceCard({
  number = "01",
  title = "Solar panels for home",
  linkText = "View Details",
  onClick,
  className = "",
}: ServiceCardProps) {
  return (
    <div
      className={`
        flex flex-col justify-between
        bg-white border border-gray-200 rounded-2xl
        p-5 sm:p-6 w-full h-56 sm:h-60 md:h-64 cursor-pointer
        hover:shadow-md transition-all duration-300
        ${className}
      `}
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* Number */}
      <span className="text-gray-400 text-base sm:text-xl font-medium">{number}</span>

      {/* Title */}
      {/* Adjusted typography slightly to prevent wrapping issues on extra small screens */}
      <p className="text-gray-900 font-semibold text-lg sm:text-xl text-center leading-snug px-1">
        {title}
      </p>

      {/* Link */}
      <div onClick={onClick} className="flex flex-col gap-1 items-center w-full">
        <span className="text-gray-900 text-xs sm:text-sm text-center font-medium cursor-pointer hover:opacity-70 transition">
          {linkText}
        </span>
        {/* Centered line divider matching the link container footprint */}
        <div className="w-16 sm:w-20 h-[1.5px] bg-gray-200 rounded-full transition-all" />
      </div>
    </div>
  );
}