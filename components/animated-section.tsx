"use client"

import { useEffect, useRef, useState, ReactNode } from "react"
import { cn } from "@/lib/utils"

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "scale"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  threshold?: number
}

const animationClasses: Record<AnimationType, string> = {
  "fade-up": "animate-fade-in-up",
  "fade-left": "animate-fade-in-left",
  "fade-right": "animate-fade-in-right",
  "scale": "animate-scale-in",
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return (
    <div
      ref={ref}
      className={cn(
        animationClasses[animation],
        isVisible && "animate-in",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
