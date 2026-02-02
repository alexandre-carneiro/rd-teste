import React from 'react';

function RecommendationType({ onRecommendationTypeChange, selectedType = '' }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-3">Tipo de Recomendação</h2>
      <div className="grid grid-cols-2 gap-3">
        <label
          className={`
            flex flex-col items-center p-4 rounded-lg border-2 cursor-pointer
            transition-all duration-200
            ${selectedType === 'SingleProduct'
              ? 'bg-purple-50 border-purple-400 shadow-md'
              : 'bg-gray-50 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
            }
          `}
        >
          <input
            type="radio"
            name="recommendationType"
            value="SingleProduct"
            checked={selectedType === 'SingleProduct'}
            onChange={(e) => onRecommendationTypeChange(e.target.value)}
            className="sr-only"
          />
          <div className={`w-6 h-6 rounded-full border-2 mb-2 flex items-center justify-center ${
            selectedType === 'SingleProduct' ? 'border-purple-500 bg-purple-500' : 'border-gray-300'
          }`}>
            {selectedType === 'SingleProduct' && (
              <div className="w-3 h-3 rounded-full bg-white"></div>
            )}
          </div>
          <span className={`text-sm font-semibold ${selectedType === 'SingleProduct' ? 'text-purple-800' : 'text-gray-700'}`}>
            Produto Único
          </span>
          <span className="text-xs text-gray-500 mt-1 text-center">
            Melhor match
          </span>
        </label>
        
        <label
          className={`
            flex flex-col items-center p-4 rounded-lg border-2 cursor-pointer
            transition-all duration-200
            ${selectedType === 'MultipleProducts'
              ? 'bg-purple-50 border-purple-400 shadow-md'
              : 'bg-gray-50 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
            }
          `}
        >
          <input
            type="radio"
            name="recommendationType"
            value="MultipleProducts"
            checked={selectedType === 'MultipleProducts'}
            onChange={(e) => onRecommendationTypeChange(e.target.value)}
            className="sr-only"
          />
          <div className={`w-6 h-6 rounded-full border-2 mb-2 flex items-center justify-center ${
            selectedType === 'MultipleProducts' ? 'border-purple-500 bg-purple-500' : 'border-gray-300'
          }`}>
            {selectedType === 'MultipleProducts' && (
              <div className="w-3 h-3 rounded-full bg-white"></div>
            )}
          </div>
          <span className={`text-sm font-semibold ${selectedType === 'MultipleProducts' ? 'text-purple-800' : 'text-gray-700'}`}>
            Múltiplos Produtos
          </span>
          <span className="text-xs text-gray-500 mt-1 text-center">
            Lista completa
          </span>
        </label>
      </div>
    </div>
  );
}

export default RecommendationType;
