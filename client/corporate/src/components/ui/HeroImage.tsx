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
  priority = false,
  className = "",
}: HeroImageProps) {
  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{ aspectRatio: "16/9" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={90}
        sizes="100vw"
        className="object-cover object-center w-full h-full"
        loading="eager"
        placeholder="empty"
        unoptimized={false}
        style={{
          objectPosition: "center",
          objectFit: "cover",
          aspectRatio: "16/9",
        }}
      />
    </div>
  );
}
