# Sistema de Fallback de Imagens

Este projeto implementa um sistema robusto de fallback para imagens que automaticamente tenta carregar diferentes formatos até encontrar um que funcione.

## Componentes

### SmartImage

Componente principal que gerencia o fallback automático de imagens:

```tsx
<SmartImage
  basePath="/reviews"
  imageName="review1"
  fallbackFormats={["webp", "png", "jpg", "jpeg", "svg"]}
  alt="Descrição da imagem"
  className="w-full h-64 object-cover"
/>
```

**Props:**

- `basePath`: Caminho base onde as imagens estão localizadas
- `imageName`: Nome da imagem (sem extensão)
- `fallbackFormats`: Array de formatos para tentar (padrão: ['webp', 'png', 'jpg', 'jpeg', 'svg'])
- `alt`: Texto alternativo para a imagem
- `className`: Classes CSS para aplicar
- `onError`: Callback chamado quando nenhum formato carrega
- `placeholder`: Componente customizado para mostrar durante carregamento/erro

### ReviewImage

Componente específico para imagens de reviews que usa o SmartImage internamente:

```tsx
<ReviewImage
  reviewNumber={1}
  alt="Avaliação do Google 1"
  className="w-full h-64 object-cover"
/>
```

## Como Funciona

1. **Ordem de Tentativa**: O sistema tenta carregar os formatos na ordem especificada:

   - WebP (melhor compressão)
   - PNG (alta qualidade)
   - JPG (compatibilidade universal)
   - JPEG (compatibilidade universal)
   - SVG (vetorial)

2. **Detecção Automática**: Para cada formato, uma nova instância de `Image()` é criada para testar se o arquivo carrega sem erros.

3. **Fallback Graceful**: Se um formato falha, automaticamente tenta o próximo na lista.

4. **Placeholder Inteligente**: Mostra um indicador de carregamento durante o processo e um ícone de erro se nenhum formato funcionar.

## Estrutura de Arquivos

```
frontend/
├── public/
│   └── reviews/
│       ├── review1.jpg
│       ├── review1.png
│       ├── review1.webp (opcional)
│       ├── review2.jpg
│       └── ...
├── src/
│   ├── components/
│   │   ├── SmartImage.tsx
│   │   └── ReviewImage.tsx
│   └── utils/
│       └── imageUtils.ts
```

## Vantagens

1. **Performance**: Tenta carregar formatos mais eficientes primeiro (WebP)
2. **Compatibilidade**: Fallback automático para formatos universais (JPG)
3. **Robustez**: Nunca quebra mesmo se alguns arquivos estiverem ausentes
4. **UX**: Feedback visual durante carregamento e em caso de erro
5. **Flexibilidade**: Configurável para diferentes casos de uso

## Uso no Build

O Vite automaticamente copia todos os arquivos da pasta `public/` para o build final, garantindo que as imagens estejam disponíveis em produção independente do formato.

## Exemplo de Implementação

```tsx
// Para reviews (uso específico)
<ReviewImage reviewNumber={1} />

// Para uso geral
<SmartImage
  basePath="/images"
  imageName="hero-banner"
  fallbackFormats={['webp', 'jpg']}
  alt="Banner principal"
/>
```

Este sistema garante que as imagens sempre carreguem, mesmo que alguns formatos não estejam disponíveis, melhorando significativamente a experiência do usuário e a robustez da aplicação.
