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
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={priority ? 90 : 75}
        sizes="100vw"
        className="object-cover object-center w-full h-full"
        loading={priority ? "eager" : "lazy"}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwCdABmXUPAaVF5fJwQJiQAAAAAGAAAAwAAAAA="
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        style={{
          objectPosition: "center",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
