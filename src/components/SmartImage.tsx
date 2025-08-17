import React, { useState, useEffect, useMemo } from "react";

// Cache global para evitar recarregamentos desnecessários
const imageCache = new Map<string, string>();

interface SmartImageProps {
  basePath: string;
  imageName: string;
  alt?: string;
  className?: string;
  fallbackFormats?: string[];
  onError?: (error: Error) => void;
  placeholder?: React.ReactNode;
}

/**
 * Componente inteligente de imagem com fallback automático para múltiplos formatos
 * Tenta carregar imagens em diferentes formatos até encontrar uma que funcione
 */
export default function SmartImage({
  basePath,
  imageName,
  alt = "",
  className = "",
  fallbackFormats = ["webp", "png", "jpg", "jpeg", "svg"],
  onError,
  placeholder,
}: SmartImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentFormatIndex, setCurrentFormatIndex] = useState(0);

  // Remove extensão do nome da imagem se houver
  const baseImageName = useMemo(() => {
    return imageName.replace(/\.[^/.]+$/, "");
  }, [imageName]);

  // Gera lista de URLs para tentar
  const imageUrls = useMemo(() => {
    return fallbackFormats.map(
      (format) => `${basePath}/${baseImageName}.${format}`
    );
  }, [basePath, baseImageName, fallbackFormats]);

  // Função para testar se uma imagem carrega
  const testImageLoad = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        console.log(`SmartImage: Image loaded successfully: ${url}`);
        resolve(url);
      };
      img.onerror = (e) => {
        console.error(`SmartImage: Image failed to load: ${url}`, e);
        reject(new Error(`Failed to load ${url}`));
      };
      img.src = url;
    });
  };

  // Carrega a imagem quando o componente monta ou props mudam
  useEffect(() => {
    console.log(`SmartImage: Loading ${basePath}/${baseImageName}`);

    // Verifica se a imagem já está no cache
    const cacheKey = `${basePath}/${baseImageName}`;
    const cachedUrl = imageCache.get(cacheKey);

    if (cachedUrl) {
      console.log(`SmartImage: Found in cache: ${cachedUrl}`);
      setCurrentSrc(cachedUrl);
      setIsLoading(false);
      return;
    }

    // Tenta carregar a próxima imagem na lista
    const tryNextImage = async (startIndex: number = 0) => {
      setIsLoading(true);
      setHasError(false);

      console.log(
        `SmartImage: Trying formats for ${baseImageName}:`,
        imageUrls
      );

      for (let i = startIndex; i < imageUrls.length; i++) {
        try {
          const url = imageUrls[i];
          console.log(`SmartImage: Testing ${url}`);
          await testImageLoad(url);
          console.log(`SmartImage: Success loading ${url}`);
          setCurrentSrc(url);
          setCurrentFormatIndex(i);
          setIsLoading(false);

          // Adiciona ao cache
          imageCache.set(cacheKey, url);
          return;
        } catch {
          console.log(`SmartImage: Failed to load ${imageUrls[i]}`);
          // Continua para o próximo formato
          continue;
        }
      }

      // Se nenhuma imagem carregou
      console.error(`SmartImage: No valid image found for ${baseImageName}`);
      setHasError(true);
      setIsLoading(false);
      const error = new Error(
        `No valid image found for ${baseImageName} in formats: ${fallbackFormats.join(
          ", "
        )}`
      );
      onError?.(error);
    };

    if (imageUrls.length > 0) {
      tryNextImage(0);
    }
  }, [imageUrls, baseImageName, fallbackFormats, onError, basePath]);

  // Handler para erro de carregamento de imagem
  const handleImageError = () => {
    // Tenta o próximo formato
    if (currentFormatIndex + 1 < imageUrls.length) {
      const nextUrl = imageUrls[currentFormatIndex + 1];
      setCurrentFormatIndex(currentFormatIndex + 1);
      setCurrentSrc(nextUrl);
    } else {
      setHasError(true);
      const error = new Error(`All image formats failed for ${baseImageName}`);
      onError?.(error);
    }
  };

  // Placeholder personalizado ou padrão
  const renderPlaceholder = () => {
    if (placeholder) {
      return placeholder;
    }

    return (
      <div
        className={`${className} flex items-center justify-center bg-gray-800/50 text-white/60`}
      >
        {isLoading ? (
          <div className="flex flex-col items-center gap-2">
            <div className="animate-spin h-6 w-6 border-2 border-white/30 border-t-white/70 rounded-full"></div>
            <span className="text-sm">Carregando...</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <svg
              className="h-8 w-8 text-white/40"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs">Imagem não encontrada</span>
          </div>
        )}
      </div>
    );
  };

  if (isLoading || hasError) {
    return renderPlaceholder();
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading="lazy"
      className={`${className} transition-opacity duration-200`}
      onError={handleImageError}
      style={{
        opacity: isLoading ? 0 : 1,
        transition: "opacity 0.2s ease-in-out",
      }}
    />
  );
}
