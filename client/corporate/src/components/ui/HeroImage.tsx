"use client";
import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export default function HeroImage({
  src,
  alt,
  priority = true, // Default true for hero images
  className = "",
}: HeroImageProps) {
  // Check if this is a blog hero image based on className
  const isBlogHero = className.includes("blog-hero-image");

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={isBlogHero ? 95 : priority ? 90 : 75}
        sizes="100vw"
        className={`w-full h-full ${
          isBlogHero
            ? "blog-hero-image-responsive" // Custom responsive class for blog heroes
            : "object-cover object-center" // Default crop behavior
        }`}
        loading={priority ? "eager" : "lazy"}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwCdABmXUPAaVF5fJwQJiQAAAAAGAAAAwAAAAA="
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        style={{
          objectPosition: isBlogHero ? undefined : "center",
          objectFit: isBlogHero ? undefined : "cover",
        }}
      />
    </div>
  );
}
