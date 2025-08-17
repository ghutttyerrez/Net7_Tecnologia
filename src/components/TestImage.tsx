import React from "react";

interface TestImageProps {
  reviewNumber: number;
}

export default function TestImage({ reviewNumber }: TestImageProps) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Failed to load review${reviewNumber}:`, e);
  };

  const handleLoad = () => {
    console.log(`Successfully loaded review${reviewNumber}`);
  };

  return (
    <div className="w-full h-64 bg-gray-800 flex items-center justify-center">
      <img
        src={`/reviews/review${reviewNumber}.jpg`}
        alt={`Review ${reviewNumber}`}
        className="w-full h-64 object-cover"
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
}
