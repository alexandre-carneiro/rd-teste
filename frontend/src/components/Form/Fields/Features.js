import React, { useState, useEffect } from 'react';

function Features({ features, selectedFeatures = [], onFeatureChange }) {
  const [currentFeatures, setCurrentFeatures] = useState(selectedFeatures);

  // Sincroniza o estado local com as props recebidas
  useEffect(() => {
    setCurrentFeatures(selectedFeatures);
  }, [selectedFeatures]);

  const handleFeatureChange = (feature) => {
    const updatedFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter((pref) => pref !== feature)
      : [...currentFeatures, feature];

    setCurrentFeatures(updatedFeatures);
    onFeatureChange(updatedFeatures);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-800">Funcionalidades</h2>
        {currentFeatures.length > 0 && (
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
            {currentFeatures.length} selecionada(s)
          </span>
        )}
      </div>
      {features.length === 0 ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 text-sm">
            <span className="font-semibold">Carregando funcionalidades...</span>
            <br />
            <span className="text-xs mt-1 block">
              Verifique se o backend está rodando na porta 3001
            </span>
          </p>
        </div>
      ) : (
        <div className="max-h-64 overflow-y-auto space-y-2 pr-2">
          {features.map((feature, index) => {
            const isChecked = currentFeatures.includes(feature);
            return (
              <label
                key={index}
                className={`
                  flex items-start p-3 rounded-lg border-2 cursor-pointer
                  transition-all duration-200
                  ${isChecked
                    ? 'bg-green-50 border-green-400 shadow-sm'
                    : 'bg-gray-50 border-gray-200 hover:border-green-300 hover:bg-green-50'
                  }
                `}
              >
                <input
                  type="checkbox"
                  value={feature}
                  checked={isChecked}
                  onChange={() => handleFeatureChange(feature)}
                  className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <span className={`ml-3 text-sm flex-1 ${isChecked ? 'text-green-900 font-medium' : 'text-gray-700'}`}>
                  {feature}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Features;
