"use client";
import { useEffect, useState } from "react";

interface VideoPreloaderProps {
  src: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const VideoPreloader = ({
  src,
  onLoad,
  onError,
}: VideoPreloaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = document.createElement("video");

    video.addEventListener("loadeddata", () => {
      setIsLoaded(true);
      onLoad?.();
    });

    video.addEventListener("error", () => {
      console.warn(`Video preload failed for: ${src}`);
      onError?.();
    });

    // Preload video
    video.preload = "metadata";
    video.src = src;

    return () => {
      video.removeEventListener("loadeddata", () => {});
      video.removeEventListener("error", () => {});
    };
  }, [src, onLoad, onError]);

  return null; // Bu bileşen sadece preload için kullanılıyor
};

export default VideoPreloader;
