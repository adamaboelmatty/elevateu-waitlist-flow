
import * as React from "react"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  className, 
  delay = 0 
}) => {
  return (
    <div 
      className={cn(
        "animate-[float_6s_ease-in-out_infinite]",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

interface PulsingDotProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export const PulsingDot: React.FC<PulsingDotProps> = ({ 
  className, 
  size = "md" 
}) => {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3", 
    lg: "w-4 h-4"
  }

  return (
    <div className={cn("relative", className)}>
      <div className={cn(
        "rounded-full bg-purple-500 animate-pulse",
        sizeClasses[size]
      )} />
      <div className={cn(
        "absolute top-0 left-0 rounded-full bg-purple-500 opacity-75 animate-ping",
        sizeClasses[size]
      )} />
    </div>
  )
}

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className, 
  strength = 0.3 
}) => {
  const ref = React.useRef<HTMLDivElement>(null)

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }, [strength])

  const handleMouseLeave = React.useCallback(() => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0px, 0px)'
  }, [])

  return (
    <div
      ref={ref}
      className={cn("transition-transform duration-300 ease-out", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
