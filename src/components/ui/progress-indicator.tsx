
import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressIndicatorProps {
  steps: string[]
  currentStep: number
  className?: string
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  steps,
  currentStep,
  className
}) => {
  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      {/* Progress bar */}
      <div className="relative mb-6">
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
        
        {/* Step indicators */}
        <div className="absolute top-0 left-0 w-full flex justify-between -translate-y-1">
          {steps.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-4 h-4 rounded-full border-2 bg-background transition-all duration-300",
                index <= currentStep 
                  ? "border-purple-600 bg-purple-600 scale-110" 
                  : "border-slate-300"
              )}
            />
          ))}
        </div>
      </div>
      
      {/* Step labels */}
      <div className="flex justify-between text-sm">
        {steps.map((step, index) => (
          <span
            key={index}
            className={cn(
              "transition-colors duration-300",
              index <= currentStep ? "text-purple-600 font-medium" : "text-slate-500"
            )}
          >
            {step}
          </span>
        ))}
      </div>
    </div>
  )
}
