import { cn } from "../../lib/utils"
import { TestimonialCard, TestimonialAuthor } from "../ui/testimonial-card"
import { useState, useRef, useEffect } from "react"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle mouse down event
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    
    setIsDragging(true);
    setAutoplay(false);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setIsDragging(false);
    setTimeout(() => setAutoplay(true), 1000); // Resume autoplay after 1 second
  };

  // Handle mouse up event
  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setAutoplay(true), 1000); // Resume autoplay after 1 second
  };

  // Handle mouse move event
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    
    setIsDragging(true);
    setAutoplay(false);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className={cn(
      "bg-transparent text-foreground w-full",
      "py-0 px-0",
      className
    )}>
      <div className="flex max-w-none w-full flex-col items-center gap-2 text-center">
        {title || description ? (
          <div className="flex flex-col items-center gap-2 px-4">
            <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
              {title}
            </h2>
            <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
              {description}
            </p>
          </div>
        ) : null}

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div 
            className="group flex w-full overflow-hidden p-2 [--gap:2rem] [gap:var(--gap)] flex-row [--duration:40s] cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            ref={carouselRef}
          >
            <div 
              className={cn(
                "flex shrink-0 justify-around [gap:var(--gap)] flex-row",
                autoplay ? "animate-marquee" : "",
                isDragging ? "cursor-grabbing" : ""
              )}
            >
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-gray-950 sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-gray-950 sm:block" />
        </div>
      </div>
    </section>
  )
}