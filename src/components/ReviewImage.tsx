import React, { useState, useEffect } from "react";

interface ReviewImageProps {
  reviewNumber: number;
  alt?: string;
  className?: string;
  onError?: () => void;
}

export default function ReviewImage({
  reviewNumber,
  alt,
  className = "w-full h-64 object-cover bg-black/30",
  onError,
}: ReviewImageProps) {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    // Testamos JPG primeiro já que sabemos que existem
    const formats = ["jpg", "png", "webp", "svg"];
    let currentFormatIndex = 0;

    const tryLoadImage = () => {
      if (currentFormatIndex >= formats.length) {
        console.log(
          `Falha ao carregar review${reviewNumber} em todos os formatos`
        );
        setHasError(true);
        setIsLoading(false);
        onError?.();
        return;
      }

      const url = `/reviews/review${reviewNumber}.${formats[currentFormatIndex]}`;
      console.log(`Tentando carregar: ${url}`);

      const img = new Image();

      img.onload = () => {
        console.log(`✅ Sucesso ao carregar: ${url}`);
        setImageSrc(url);
        setIsLoading(false);
        setHasError(false);
      };

      img.onerror = () => {
        console.log(`❌ Erro ao carregar: ${url}`);
        currentFormatIndex++;
        tryLoadImage();
      };

      img.src = url;
    };

    tryLoadImage();
  }, [reviewNumber, onError]);

  if (isLoading && !imageSrc) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gray-800/50 text-white/60`}
      >
        <div className="animate-pulse">Carregando...</div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-red-800/50 text-white/60`}
      >
        <div className="text-center">
          <div className="text-sm">Erro ao carregar</div>
          <div className="text-xs">Review {reviewNumber}</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt || `Avaliação do Google ${reviewNumber}`}
      className={`${className} select-none transition-opacity duration-500 ease-in-out`}
      onError={() => {
        console.log(`Erro na tag img para: ${imageSrc}`);
        setHasError(true);
        onError?.();
      }}
      onLoad={() => {
        console.log(`Imagem carregada com sucesso: ${imageSrc}`);
      }}
    />
  );
}
