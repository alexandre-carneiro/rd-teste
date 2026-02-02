// Preferences.js

import React, { useState, useEffect } from 'react';

function Preferences({
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}) {
  const [currentPreferences, setCurrentPreferences] = useState(selectedPreferences);

  // Sincroniza o estado local com as props recebidas
  useEffect(() => {
    setCurrentPreferences(selectedPreferences);
  }, [selectedPreferences]);

  const handlePreferenceChange = (preference) => {
    const updatedPreferences = currentPreferences.includes(preference)
      ? currentPreferences.filter((pref) => pref !== preference)
      : [...currentPreferences, preference];

    setCurrentPreferences(updatedPreferences);
    onPreferenceChange(updatedPreferences);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-800">Preferências</h2>
        {currentPreferences.length > 0 && (
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
            {currentPreferences.length} selecionada(s)
          </span>
        )}
      </div>
      {preferences.length === 0 ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 text-sm">
            <span className="font-semibold">Carregando preferências...</span>
            <br />
            <span className="text-xs mt-1 block">
              Verifique se o backend está rodando na porta 3001
            </span>
          </p>
        </div>
      ) : (
        <div className="max-h-64 overflow-y-auto space-y-2 pr-2">
          {preferences.map((preference, index) => {
            const isChecked = currentPreferences.includes(preference);
            return (
              <label
                key={index}
                className={`
                  flex items-start p-3 rounded-lg border-2 cursor-pointer
                  transition-all duration-200
                  ${isChecked
                    ? 'bg-blue-50 border-blue-400 shadow-sm'
                    : 'bg-gray-50 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }
                `}
              >
                <input
                  type="checkbox"
                  value={preference}
                  checked={isChecked}
                  onChange={() => handlePreferenceChange(preference)}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className={`ml-3 text-sm flex-1 ${isChecked ? 'text-blue-900 font-medium' : 'text-gray-700'}`}>
                  {preference}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Preferences;
