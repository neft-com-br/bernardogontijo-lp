import { useState, useRef, useEffect } from 'react'
import { cn } from "../../lib/utils"
import { Avatar, AvatarImage } from "./avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [needsGradient, setNeedsGradient] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const Card = href ? 'a' : 'div'

  useEffect(() => {
    if (contentRef.current) {
      const cardHeight = contentRef.current.scrollHeight
      setNeedsGradient(cardHeight > 300)
    }
  }, [text])
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "group flex flex-col rounded-lg",
        "bg-gradient-to-b from-gray-900/80 to-gray-900/50",
        "p-4 text-start sm:p-6",
        "hover:from-gray-900 hover:to-gray-900/70",
        "max-w-[320px] sm:max-w-[320px]",
        isExpanded ? "h-auto" : "h-[300px]",
        "transition-all duration-300",
        className
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="h-20 w-20 flex-shrink-0 bg-gray-800 rounded-md p-2 flex items-center justify-center">
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none text-white">
            {author.name}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            {author.handle}
          </p>
        </div>
      </div>
      <div 
        ref={contentRef}
        className={cn(
          "relative mt-4 transition-all duration-300",
          !isExpanded && "overflow-hidden"
        )}
      >
        <p className="sm:text-md text-sm text-gray-300">
          {text}
        </p>
        {!isExpanded && needsGradient && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900/80 to-transparent" />
        )}
      </div>
    </Card>
  )
}