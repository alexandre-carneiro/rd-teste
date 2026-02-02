import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  /**
   * Função callback para atualizar a lista de recomendações quando o formulário for submetido
   * @param {Array} newRecommendations - Lista de produtos recomendados
   */
  const handleRecommendationsChange = (newRecommendations) => {
    setRecommendations(newRecommendations || []);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Recomendador de Produtos
            <span className="block text-blue-600 mt-2">RD Station</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Encontre o produto perfeito para o seu negócio. Selecione suas preferências e funcionalidades desejadas e receba recomendações personalizadas.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <Form onRecommendationsChange={handleRecommendationsChange} />
          </div>

          {/* Recommendations Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <RecommendationList recommendations={recommendations} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
