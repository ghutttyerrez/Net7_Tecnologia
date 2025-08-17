import { useEffect, useState } from "react";

/**
 * Utilitário para fallback de imagens com múltiplos formatos
 */

export interface ImageFallbackOptions {
  basePath: string;
  fileName: string;
  formats?: string[];
  defaultFormat?: string;
}

/**
 * Tenta carregar uma imagem com fallback para diferentes formatos
 * @param options Opções para o fallback da imagem
 * @returns Promise que resolve com a URL da imagem válida ou rejeita se nenhuma funcionar
 */
export async function getImageWithFallback(
  options: ImageFallbackOptions
): Promise<string> {
  const {
    basePath,
    fileName,
    formats = ["webp", "png", "jpg", "svg"],
    defaultFormat = "png",
  } = options;

  // Remove a extensão do fileName se existir
  const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");

  // Função para testar se uma imagem carrega
  const testImage = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => reject();
      img.src = url;
    });
  };

  // Tenta carregar cada formato em ordem de prioridade
  for (const format of formats) {
    const url = `${basePath}/${nameWithoutExt}.${format}`;
    try {
      await testImage(url);
      return url;
    } catch {
      // Continua para o próximo formato
    }
  }

  // Se nenhum formato funcionar, retorna o formato padrão
  return `${basePath}/${nameWithoutExt}.${defaultFormat}`;
}

/**
 * Hook customizado para gerenciar estado de imagem com fallback
 */
export function useImageFallback(options: ImageFallbackOptions) {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    getImageWithFallback(options)
      .then((url) => {
        setImageSrc(url);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
        // Fallback para uma imagem padrão ou placeholder
        setImageSrc(
          `${options.basePath}/${options.fileName.replace(/\.[^/.]+$/, "")}.${
            options.defaultFormat || "png"
          }`
        );
      });
  }, [options]);

  return { imageSrc, isLoading, hasError };
}
