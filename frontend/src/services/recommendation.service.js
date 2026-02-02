const calculateMatchScore = (product, selectedPreferencesSet, selectedFeaturesSet) => {
  const preferenceMatches = product.preferences.filter((preference) =>
    selectedPreferencesSet.has(preference)
  ).length;

  const featureMatches = product.features.filter((feature) =>
    selectedFeaturesSet.has(feature)
  ).length;

  return preferenceMatches + featureMatches;
};

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: '' },
  products = []
) => {
  if (!products || products.length === 0) {
    return [];
  }

  const { selectedPreferences = [], selectedFeatures = [], selectedRecommendationType } = formData;

  if (selectedPreferences.length === 0 && selectedFeatures.length === 0) {
    return [];
  }

  if (!selectedRecommendationType) {
    return [];
  }

  const selectedPreferencesSet = new Set(selectedPreferences);
  const selectedFeaturesSet = new Set(selectedFeatures);

  const productsWithScores = products.map((product) => ({
    product,
    score: calculateMatchScore(product, selectedPreferencesSet, selectedFeaturesSet),
  }));

  const matchingProducts = productsWithScores.filter((item) => item.score > 0);

  if (matchingProducts.length === 0) {
    return [];
  }

  if (selectedRecommendationType === 'SingleProduct') {
    let bestMatch = matchingProducts[0];
    
    for (let i = 1; i < matchingProducts.length; i++) {
      const current = matchingProducts[i];
      if (current.score >= bestMatch.score) {
        bestMatch = current;
      }
    }

    return [bestMatch.product];
  }

  const sortedProducts = matchingProducts
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return 0;
    })
    .map((item) => item.product);

  return sortedProducts;
};

const recommendationService = { getRecommendations };

export default recommendationService;
