import React, { useState, useEffect } from "react";

interface SimpleImageProps {
  basePath: string;
  imageName: string;
  alt?: string;
  className?: string;
}

export default function SimpleImage({
  basePath,
  imageName,
  alt = "",
  className = "",
}: SimpleImageProps) {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const formats = ["jpg", "png", "webp", "svg"];
    const baseImageName = imageName.replace(/\.[^/.]+$/, "");

    console.log(`SimpleImage: Loading ${baseImageName}`);

    const tryFormat = async (formatIndex: number): Promise<void> => {
      if (formatIndex >= formats.length) {
        setError("No format worked");
        setIsLoading(false);
        return;
      }

      const url = `${basePath}/${baseImageName}.${formats[formatIndex]}`;
      console.log(`SimpleImage: Trying ${url}`);

      const img = new Image();
      img.onload = () => {
        console.log(`SimpleImage: Success ${url}`);
        setImageSrc(url);
        setIsLoading(false);
      };
      img.onerror = () => {
        console.log(`SimpleImage: Failed ${url}`);
        tryFormat(formatIndex + 1);
      };
      img.src = url;
    };

    tryFormat(0);
  }, [basePath, imageName]);

  if (isLoading) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gray-800/50`}
      >
        <span className="text-white/60 text-sm">Carregando...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-red-800/50`}
      >
        <span className="text-white/60 text-sm">Erro: {error}</span>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onError={() => setError("Image load failed")}
    />
  );
}
