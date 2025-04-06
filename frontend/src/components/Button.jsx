import { cn } from "../utils/classnames"
import { Loader2 } from "lucide-react"

export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  loading = false,
  ...props
}) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  }

  return (
    <button
      type={type}
      className={cn(
        "px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200",
        variants[variant],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="animate-spin w-4 h-4" />}
      {children}
    </button>
  )
}

// utils/classnames.js
export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}
