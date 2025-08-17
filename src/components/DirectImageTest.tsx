import React from "react";

export default function DirectImageTest() {
  return (
    <div className="fixed top-4 left-4 z-50 bg-white p-4 rounded">
      <h3 className="text-black mb-2">Teste Direto de Imagens:</h3>
      {[3, 4, 5].map((num) => (
        <div key={num} className="mb-2">
          <p className="text-black text-sm">Review {num}:</p>
          <img
            src={`/reviews/review${num}.jpg`}
            alt={`Review ${num}`}
            className="w-20 h-20 object-cover border"
            onLoad={() => console.log(`Direct test: review${num}.jpg loaded`)}
            onError={(e) =>
              console.error(`Direct test: review${num}.jpg failed`, e)
            }
          />
        </div>
      ))}
    </div>
  );
}
