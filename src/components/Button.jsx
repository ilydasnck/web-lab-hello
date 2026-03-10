const variantClasses = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400",
  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300 dark:text-gray-300 dark:hover:bg-gray-800",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-4 py-2 text-base rounded-lg",
  lg: "px-6 py-3 text-lg rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  children,
  ...props
}) {
  const base =
    "font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const disabledClass = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  return (
    <button
      disabled={disabled}
      className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
