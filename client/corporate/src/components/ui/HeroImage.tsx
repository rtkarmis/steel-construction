"use client";
import Image from "next/image";
import { useState } from "react";

interface HeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export default function HeroImage({ 
  src, 
  alt, 
  priority = false,
  className = ""
}: HeroImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={90}
        sizes="100vw"
        className={`object-cover object-center transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
      
      {/* Loading fallback */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/30 animate-pulse" />
      )}
      
      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-dark/40" />
      )}
    </div>
  );
}