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
        p-6 w-full h-64 cursor-pointer
        hover:shadow-md transition-all duration-300
        ${className}
      `}
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* Number */}
      <span className="text-gray-400 text-xl font-medium">{number}</span>

      {/* Title */}
      <p className="text-gray-900 font-semibold text-xl text-center leading-snug">{title}</p>

      {/* Link */}
      <div onClick={onClick} className="flex flex-col gap-1">
        <span className="text-gray-900 text-sm text-center font-medium cursor-pointer hover:opacity-70 transition">
          {linkText}
        </span>
        <div className="w-full h-[1.5px] bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}