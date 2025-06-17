
import * as React from "react"
import { cn } from "@/lib/utils"

export interface AnimatedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  success?: boolean
}

const AnimatedInput = React.forwardRef<HTMLInputElement, AnimatedInputProps>(
  ({ className, type, label, error, success, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)

    const handleFocus = () => setIsFocused(true)
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      setHasValue(e.target.value.length > 0)
    }

    const shouldFloatLabel = isFocused || hasValue || props.value

    return (
      <div className="space-y-3">
        {/* Static label for better visibility */}
        {label && (
          <label className="block text-slate-700 font-semibold text-base sm:text-lg">
            {label}
          </label>
        )}
        
        <div className="relative">
          {/* Input field */}
          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-xl border bg-white/50 backdrop-blur-sm px-4 py-3 text-base ring-offset-background transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              error 
                ? "border-red-500 focus-visible:ring-red-500" 
                : success 
                  ? "border-green-500 focus-visible:ring-green-500"
                  : "border-slate-200 focus-visible:ring-purple-500 hover:border-purple-300",
              className
            )}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={shouldFloatLabel ? "" : `Enter your ${label?.toLowerCase() || 'information'}`}
            {...props}
          />
          
          {/* Success checkmark */}
          {success && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center animate-scale-in">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          )}
        </div>
        
        {/* Error message */}
        {error && (
          <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </p>
        )}
      </div>
    )
  }
)
AnimatedInput.displayName = "AnimatedInput"

export { AnimatedInput }
