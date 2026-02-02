// Form.js

import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({ onRecommendationsChange }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação: verifica se pelo menos um tipo de recomendação foi selecionado
    if (!formData.selectedRecommendationType) {
      alert('Por favor, selecione um tipo de recomendação (Produto Único ou Múltiplos Produtos)');
      return;
    }

    // Validação: verifica se há produtos disponíveis
    if (!products || products.length === 0) {
      alert('Produtos ainda não foram carregados. Verifique se o backend está rodando na porta 3001.');
      return;
    }

    // Validação: verifica se pelo menos uma preferência ou funcionalidade foi selecionada
    if (formData.selectedPreferences.length === 0 && formData.selectedFeatures.length === 0) {
      alert('Por favor, selecione pelo menos uma preferência ou funcionalidade para obter recomendações.');
      return;
    }

    const dataRecommendations = getRecommendations(formData);
    
    console.log('FormData:', formData);
    console.log('Produtos disponíveis:', products.length);
    console.log('Recomendações encontradas:', dataRecommendations.length);

    // Atualiza as recomendações no componente pai (App.js)
    if (onRecommendationsChange) {
      onRecommendationsChange(dataRecommendations);
    }
  };

  const hasSelections = 
    formData.selectedPreferences.length > 0 || 
    formData.selectedFeatures.length > 0;
  
  const isFormValid = 
    formData.selectedRecommendationType && 
    hasSelections && 
    products.length > 0;

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Configure suas preferências</h2>
        <p className="text-sm text-gray-600">
          Selecione o que é importante para o seu negócio
        </p>
      </div>

      <Preferences
        preferences={preferences}
        selectedPreferences={formData.selectedPreferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      
      <Features
        features={features}
        selectedFeatures={formData.selectedFeatures}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      
      <RecommendationType
        selectedType={formData.selectedRecommendationType}
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />

      {/* Summary */}
      {hasSelections && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-blue-800 mb-1">
            Resumo da sua seleção:
          </p>
          <div className="text-xs text-blue-700 space-y-1">
            {formData.selectedPreferences.length > 0 && (
              <p>✓ {formData.selectedPreferences.length} preferência(s) selecionada(s)</p>
            )}
            {formData.selectedFeatures.length > 0 && (
              <p>✓ {formData.selectedFeatures.length} funcionalidade(s) selecionada(s)</p>
            )}
            {formData.selectedRecommendationType && (
              <p>✓ Tipo: {formData.selectedRecommendationType === 'SingleProduct' ? 'Produto Único' : 'Múltiplos Produtos'}</p>
            )}
          </div>
        </div>
      )}

      <SubmitButton 
        text="Obter recomendação" 
        disabled={!isFormValid}
      />
    </form>
  );
}

export default Form;
