import React from 'react';

function RecommendationList({ recommendations }) {
  const getCategoryColor = (category) => {
    const colors = {
      'Vendas': 'bg-blue-100 text-blue-800',
      'Marketing': 'bg-purple-100 text-purple-800',
      'Omnichannel': 'bg-green-100 text-green-800',
      'Uso de Inteligência Artificial': 'bg-orange-100 text-orange-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Recomendações</h2>
        {recommendations.length > 0 && (
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
            {recommendations.length} {recommendations.length === 1 ? 'produto' : 'produtos'}
          </span>
        )}
      </div>

      {recommendations.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-lg font-medium">Nenhuma recomendação ainda</p>
          <p className="text-gray-400 text-sm mt-2">
            Preencha o formulário e clique em "Obter recomendação" para ver os produtos recomendados
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {recommendations.map((recommendation, index) => (
            <div
              key={recommendation.id || index}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:border-blue-300 bg-gradient-to-r from-white to-gray-50"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-800">{recommendation.name}</h3>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getCategoryColor(recommendation.category)}`}>
                  {recommendation.category}
                </span>
              </div>
              
              {recommendation.preferences && recommendation.preferences.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs font-semibold text-gray-600 mb-1">Preferências:</p>
                  <div className="flex flex-wrap gap-1">
                    {recommendation.preferences.slice(0, 3).map((pref, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                      >
                        {pref}
                      </span>
                    ))}
                    {recommendation.preferences.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{recommendation.preferences.length - 3} mais
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecommendationList;
